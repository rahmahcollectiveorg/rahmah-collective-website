# Rahmah Collective — Design Preferences

## Brand Source of Truth
`Logo.png` (in this folder) is the canonical brand mark — colors below were sampled directly from it.

## Color Palette (extracted from Logo.png)

| Role | Hex | Notes |
|---|---|---|
| Primary — Mauve Rose | `#BD8186` | Wordmark "RAHMAH" / "COLLECTIVE". **Button fills only** (Donate, nav, outline/ghost borders) — kept exactly at this value per explicit client request, do not darken buttons. |
| Secondary — Blush Pink | `#EBCBD4` | Arabic calligraphy ribbon in logo, soft accents, backgrounds, dividers |
| Deep "ink" accent (derived) | `#8E4A54` | **All text** using the brand color — headings, links, icons, footer background, eyebrows, pull-quote. Darker + more saturated than a naive darken of Primary (which drifts brown); needed because Primary alone fails WCAG contrast as text (~3:1). Deepest variant `#6B383D` for gradient/hover depth on this ink shade only. |
| Ivory / Cream (derived) | `#FDF8F6` | Base page background — warm off-white, not stark white |
| Warm White | `#FFFFFF` | Card surfaces |
| Charcoal Plum (derived) | `#4A3538` | Body copy color — soft near-black with a warm rose undertone, avoids pure black |
| Gold/Sand accent (optional, derived) | `#D8C3A0` | Very sparing use — small dividers, icon accents, to keep palette from feeling one-note |

Gradients: soft linear/radial blends between Ivory → Blush Pink, or Blush Pink → Mauve Rose at low opacity, used behind hero sections and section transitions. Keep gradients subtle (barely-there), never saturated or loud.

## Reference Inspiration
Style reference: a "Bloom" brand guideline moodboard — soft blush/mauve palette, elegant script accents, silk/fabric textures, generous whitespace, botanical line art. We are borrowing the **mood and layout logic** (soft feminine elegance, generous whitespace, delicate script accents, botanical motifs) but replacing the palette entirely with Rahmah Collective's own logo colors above — not the reference's burgundy/mauve mix.

## Typography (current, chosen from a 4-option comparison)
- **Headings:** "Marcellus" — an inscriptional, heritage-feeling display serif that ties into the etymology/history theme of the "Why Rahmah" story. Google Fonts ships it in a single weight (400) with no italic; CSS uses `font-weight:400` for headings and avoids `font-style:italic` on this font (relies on browser-faked oblique otherwise) — the pull-quote and story-closing lines use letter-spacing instead of italics for emphasis.
- **Body:** "Nunito Sans" — a warm, rounded, friendly humanist sans-serif, replacing the earlier Jost.
- Previously used Fraunces + Jost; switched away from Fraunces because it was flagged as an increasingly common "boutique brand" font choice in a design critique. Other options considered: Newsreader + Public Sans (literary/editorial), Spectral + Karla (small-press elegance).
- Arabic text (رحمة, ٱلرَّحْمَٰن, etc.) renders in "Amiri" at a slightly larger size than surrounding Latin text for legibility and respect.

## Imagery
- Minimal, faded/desaturated photography of **real flowers** — vintage botanical stock photography (roses, peonies, wildflowers), used as soft full-bleed section backgrounds or corner accents at low opacity (~15–30%) so they never compete with text contrast.
- Source from free-license stock libraries (Unsplash, Pexels, Pixabay) — vintage/botanical/pressed-flower aesthetic, warm tones that harmonize with the mauve/blush palette.
- Avoid: stock photos of generic "diverse people smiling at camera" corporate non-profit clichés. Prefer editorial, documentary-style photography if/when real event or community photos become available.
- Logo mark and its Arabic calligraphy ribbon motif can be echoed as a subtle line-art/watermark element in section dividers.

## Overall Style Direction
- **Aesthetic:** soft, feminine, spiritually warm, editorial — think boutique wellness brand meets community non-profit, grounded by Islamic reverence (never twee or overly "girly").
- **Layout:** generous whitespace, single-column readable measure for long-form story content (About/Story section), airy grid cards for programs (Education/Community/Data & Research).
- **Effects:** soft drop shadows, gentle rounded corners (12–20px), subtle gradient washes — no glassmorphism, no heavy skeuomorphism, no brutalism.
- **Motion:** subtle fade/slide-up on scroll reveal (150–300ms, ease-out), gentle hover lift on cards/buttons — nothing flashy; respects `prefers-reduced-motion`.
- **Tone of voice:** warm, dignified, knowledgeable, faith-rooted — never clinical/cold, never overly casual.

## Accessibility Notes
- `#BD8186` on `#FDF8F6` and `#FFFFFF` needs contrast-checking for body text; use the darker derived `#8F5B60` or `#4A3538` for actual paragraph text, reserving the lighter mauve/blush for large headings, backgrounds, and decorative elements only.
- Maintain 4.5:1 contrast minimum for all body copy per WCAG AA.
