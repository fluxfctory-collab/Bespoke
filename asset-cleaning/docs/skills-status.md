# Skills status

Checked and installed on 7 October 2026 in this cloud session (Claude Code CLI 2.1.293).

## Before installation

```text
$ claude plugin list
No plugins installed. Use `claude plugin install` to install a plugin.
$ claude plugin marketplace list
Configured marketplaces:
  > anthropic-plugin-directory  Source: Built in (Anthropic Directory)
```

No project-local `.claude/` directory existed, and none of the section-19 skills appeared in the session's skill list.

## Installation (from the original repositories named in the brief)

Plain HTTPS to `github.com` is blocked by this session's egress proxy (403), but `git clone` through the session's git configuration works, so the brief's documented shell commands succeeded unchanged. Plugin IDs were confirmed in each repository's `.claude-plugin/marketplace.json` before installing.

| Command | Result |
| --- | --- |
| `claude plugin marketplace add https://github.com/anthropics/skills.git` | Added `anthropic-agent-skills` |
| `claude plugin install example-skills@anthropic-agent-skills --scope local` | Installed (version `683bc88e56f3`) |
| `claude plugin marketplace add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git` | Added `ui-ux-pro-max-skill` |
| `claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill --scope local` | Installed (2.13.0) |
| `claude plugin marketplace add https://github.com/addyosmani/agent-skills.git` | Added `addy-agent-skills` |
| `claude plugin install agent-skills@addy-agent-skills --scope local` | Installed (0.6.12) |
| GSAP (`greensock/gsap-skills`) | **Not installed.** The page has no motion requirement that justifies GSAP; state changes use CSS. |

After installation, `claude plugin list` shows all three as `Scope: local`, `Status: enabled`. Local scope wrote `.claude/settings.local.json` in the repository root, which is git-ignored because it is machine-specific. The marketplace catalogues are cached at user level (`~/.claude/plugins/`), as the brief anticipates.

## Availability in the running session

The plugins were installed while this session was running. Calling `Skill("example-skills:frontend-design")` returned *Unknown skill*, so **a reload is required** before they can be invoked by name: run `/reload-plugins` or restart Claude Code in this project. In this session I read each relevant `SKILL.md` (and the bundled references and scripts) directly from the installed plugin cache and followed them.

## What was used, and how

| Skill | Source | Used for | Evidence |
| --- | --- | --- | --- |
| `frontend-design` | anthropics/skills | Two-pass design plan and self-review; avoiding generic tells (eyebrow labels, all caps, numbered markers, arrows, card kits); one bold move | `docs/brand-decisions.md` §6 records the plan, the review and the two changes it caused |
| `webapp-testing` | anthropics/skills | Python Playwright QA; the skill's `scripts/with_server.py` ran the local server for every QA pass (`--help` read first, as the skill instructs) | `qa/qa.py`, `qa/screenshots/report.json`, `docs/qa-report.md` |
| `ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill | Targeted `--domain ux` searches: visible form labels, focus appearance, skip links, line length and line height, target size | Results applied: persistent labels, 3 px focus ring, skip link, 36 em measure, 1.6 line height, ≥44 px main targets. Its `--design-system` palette generator was **not** used, because the brief requires brand evidence to decide colour |
| `frontend-ui-engineering` | addyosmani/agent-skills | Semantics, heading order, keyboard and focus management, responsive checks at 320/768/1024/1440, avoiding the "AI aesthetic" table | Single H1, labelled form, disclosure menu with Escape and focus return |
| `browser-testing-with-devtools` | addyosmani/agent-skills | Its verification checklist (clean console, network, accessibility, screenshot verification) was applied through Playwright | **Its runtime tool, the `chrome-devtools` MCP server, is not configured in this session**, and adding one would need a restart. Not used directly |
| `code-review-and-quality` | addyosmani/agent-skills | Five-axis review of the final diff (correctness, readability, architecture, security, performance) | `docs/qa-report.md`, "Code review" |
| `references/accessibility-checklist.md` | addyosmani/agent-skills (shared reference) | Checklist for the accessibility checks | `docs/qa-report.md` |

Skill sample layouts, templates and imagery were not used. The UI/UX Pro Max helper scripts were run from the installed plugin directory (a normal `python3` call; the isolated `-I` mode breaks the script's own imports).

## V2 update (same session, later)

- **Availability changed.** After the plugins loaded, the skills appear in this session's skill list (`example-skills:frontend-design`, `example-skills:webapp-testing`, `ui-ux-pro-max:ui-ux-pro-max`, `agent-skills:frontend-ui-engineering`, `agent-skills:code-review-and-quality` and others). `Skill("example-skills:frontend-design")` now loads successfully. The earlier "Unknown skill" result applied only before the reload. No reinstall was needed; `claude plugin list` is unchanged.
- **frontend-design (invoked):** used to check the V2 build against its list of generic tells (accented headline words, all-caps or eyebrow labels, numbered markers, arrow-suffixed buttons, one radius and shadow on every card, scattered motion). None is present. Corner radius follows V2's hierarchy (6/8/16), there is a single shadow (enquiry panel), and the bold move is concentrated in the photographic hero. V2's pinned decisions (cyan, graphite, Titillium Web, panel radii) were followed as the brief requires.
- **webapp-testing:** every V2 render and QA run used the skill's `scripts/with_server.py` with Python Playwright (`qa/qa.py`).
- **ui-ux-pro-max (targeted, V2):** `--domain ux` searches for "text over image overlay contrast" (4.5:1 minimum, applied by pixel-sampling the real photograph), "focus indicator dark background" (visible ring on every control, which led to the per-surface focus colours), "form input error state", then the narrower retry "error message near field". That returned the production pattern for validation: an inline error below each field linked by `aria-describedby`, plus a focusable error summary that receives focus after a failed submit. It is recorded in `docs/figma-handover.md` and `docs/requirements-audit.md`. It is not implemented, because error wording needs client approval. The design-system generator was not used; V2's tokens are authoritative.
- **Multi-agent review (Workflow):** two review gates, each with independent reviewers and adversarial verifiers (`docs/qa-report.md`). The Addy `code-review-and-quality` five-axis review was the engineering lens in the final gate.
