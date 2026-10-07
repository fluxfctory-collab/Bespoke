#!/usr/bin/env bash
# Builds web derivatives from the supplied bionics_ pack.
# Originals are never modified: the archives stay in "Nouveau dossier/" and are
# extracted (without overwriting) into source-pack/, which is git-ignored.
# Operations used: resize, format conversion, metadata removal. No retouching.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="$(cd "$ROOT/.." && pwd)"
PACK="$ROOT/source-pack"
IMG="$ROOT/assets/images"
VID="$ROOT/assets/video"
mkdir -p "$PACK/PART1" "$PACK/PART2" "$IMG" "$VID"

for part in PART1 PART2; do
  zip="$REPO/Nouveau dossier/bionics_${part}.zip"
  [ -f "$zip" ] && unzip -n -q "$zip" -d "$PACK/$part"
done

# resize <source> <output-stem> <widths...>
# -strip removes EXIF (including the GPS block in the iPhone files).
resize() {
  local src="$1" stem="$2"; shift 2
  for w in "$@"; do
    convert "$src" -auto-orient -strip -resize "${w}x>" -colorspace sRGB \
      -sampling-factor 4:2:0 -interlace JPEG -quality 80 "$IMG/${stem}-${w}.jpg"
    convert "$src" -auto-orient -strip -resize "${w}x>" -colorspace sRGB \
      -quality 76 -define webp:method=6 "$IMG/${stem}-${w}.webp"
  done
}

# resize_crop <source> <crop geometry> <output-stem> <widths...>: an ordinary crop, then resize.
resize_crop() {
  local src="$1" geom="$2" stem="$3"; shift 3
  local tmp; tmp="$(mktemp --suffix=.png)"
  convert "$src" -crop "$geom" +repage "$tmp"
  resize "$tmp" "$stem" "$@"
  rm -f "$tmp"
}

# Hero: drone cleaning glazed stone facade against blue sky (6000x3376).
# 3200 covers the zoomed desktop crop (about 125% of a 1440 viewport) at 2x.
resize "$PACK/PART2/C10 3.jpg" hero-facade 800 1200 1600 2400 3200
# Support (V2 fallback, the van footage is not in the pack): drone cleaning shed
# cladding, two people at ground level (5712x4284).
resize "$PACK/PART1/IMG_2240.JPG" field-cladding 800 1200 1600
# System: studio side view of the C10 (8640x5760), cropped to the product's bounds
# (x 480-7464, y 1624-4424 measured at luminance < 240) plus a 360 px margin. The crop
# removes empty studio space, the corner vignette and a thin grey line on the top and
# left edges; the product itself is untouched.
resize_crop "$PACK/PART1/C10-2.png" 7704x3520+120+1264 c10-plate 700 1100 1400 2000

# Video: portrait clip of a drone cleaning white cladding (38.6 s, rotation -90).
# Re-encoded to 720x1280 H.264 with faststart; all container metadata removed.
SRC_VIDEO="$PACK/PART2/5f69a5e2-edb9-4dff-8bd8-14d3a8d570d0.MP4"
ffmpeg -v error -y -i "$SRC_VIDEO" -map_metadata -1 -map 0:v:0 -map 0:a:0 \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -vf "scale=720:-2" \
  -c:a aac -b:a 96k -movflags +faststart "$VID/cladding-clean.mp4"
# VP9/Opus alternative for browsers without H.264 (some open-source Chromium builds).
ffmpeg -v error -y -i "$SRC_VIDEO" -map_metadata -1 -map 0:v:0 -map 0:a:0 \
  -c:v libvpx-vp9 -crf 40 -b:v 850k -row-mt 1 -deadline good -cpu-used 4 -vf "scale=720:-2" \
  -pix_fmt yuv420p -c:a libopus -b:a 96k "$VID/cladding-clean.webm"
# Poster: an unaltered full frame from the original clip. 1.0 s was chosen from 77
# candidates (2 per second) by Laplacian sharpness and visual review: whole drone,
# visible jet, soiled and cleaned cladding.
POSTER_AT="${POSTER_AT:-1.0}"
TMP_FRAME="$(mktemp --suffix=.png)"
ffmpeg -v error -y -ss "$POSTER_AT" -i "$SRC_VIDEO" -frames:v 1 "$TMP_FRAME"
resize "$TMP_FRAME" cladding-frame 480 720
rm -f "$TMP_FRAME" "$VID/cladding-clean-poster.jpg"

ls -la "$IMG" "$VID"
