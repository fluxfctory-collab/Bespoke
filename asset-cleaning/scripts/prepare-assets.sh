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

# Hero: drone cleaning glazed stone facade against blue sky (6000x3376).
resize "$PACK/PART2/C10 3.jpg" hero-facade 800 1200 1600 2400
# Applications/support: drone cleaning shed cladding, two people at ground level (5712x4284).
resize "$PACK/PART1/IMG_2240.JPG" field-cladding 800 1200 1600
# System: studio side view of the C10 on white (8640x5760).
resize "$PACK/PART1/C10-2.png" c10-side 900 1400 2000

# Video: portrait clip of a drone cleaning white cladding (38.6 s, rotation -90).
# Re-encoded to 720x1280 H.264 with faststart; all container metadata removed.
SRC_VIDEO="$PACK/PART2/5f69a5e2-edb9-4dff-8bd8-14d3a8d570d0.MP4"
ffmpeg -v error -y -i "$SRC_VIDEO" -map_metadata -1 -map 0:v:0 -map 0:a:0 \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -vf "scale=720:-2" \
  -c:a aac -b:a 96k -movflags +faststart "$VID/cladding-clean.mp4"
# Poster: an unaltered frame from the same clip.
POSTER_AT="${POSTER_AT:-0.5}"
ffmpeg -v error -y -ss "$POSTER_AT" -i "$SRC_VIDEO" -frames:v 1 -vf "scale=720:-2" -q:v 3 "$VID/cladding-clean-poster.jpg"
convert "$VID/cladding-clean-poster.jpg" -strip -interlace JPEG -quality 80 "$VID/cladding-clean-poster.jpg"

ls -la "$IMG" "$VID"
