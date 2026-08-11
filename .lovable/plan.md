
## 1. Publications → grid layout

Replace the alternating hero-row layout on `src/routes/publications.tsx` with a responsive card grid (2 cols on md, 3 cols on lg). Each card:

- 4:5 cover thumbnail (hover: subtle scale + shadow lift)
- Type · Year eyebrow
- Title (font-serif, clamped 2–3 lines)
- Publisher (one line, muted)
- Small terracotta "Read →" affordance; entire card is the link
- "In review / forthcoming" cover keeps a subtle badge

Keep the intro hero. Add a light filter chip row (All · Journal Article · Report · Technical Paper · Policy Brief · Policy Paper) with client-side state to filter — subtle interactive touch that reads younger/tech-savvy.

## 2. Incorporate your real photos

Upload the four attached photos (2 jpg + 2 HEIC, converted on upload) via `lovable-assets` as `.asset.json` pointers.

- **Homepage hero portrait** → replace generated portrait with the podium photo (`GA2026_JA_PREVENT_DAY1-242.jpg`). Keep in color — real warm photography shifts the tone younger and more human.
- **Speaking page featured block (UN CSW68)** → panel/desk photo (`GA2026_JA_PREVENT_DAY2-331.jpg`), in color.
- **Speaking gallery** → the two HEICs become the two gallery tiles; I'll caption them as EU Joint Action Prevent NCD (Brussels, 2025) placeholders and ask you to confirm real captions after they render.
- **About / secondary portrait** on homepage → second real photo inline.

Stop importing the AI-generated portrait/speaking images. Drop the `grayscale` class on real photos — grayscale on real conference shots reads dated.

## 3. Keep experience framing as-is (5 yrs)

Not changing the years figure. To communicate international breadth without inflating the number, tighten the copy:

- **Homepage numbers strip** → keep "5+ yrs public sector economics" but append international scope in the label line: "Australia · Germany · EU institutions".
- **About paragraph** → open with "Five years as a public sector economist across Australia, Germany and EU institutions…" so the international reach is prose-anchored.
- **Experience hero** → keep "Five years…" wording; add "Sydney · Berlin · Brussels" as a subtitle line.

## 4. Younger, tech-savvy, outgoing tone

Presentation-level shifts, no business logic changes:

- **Terracotta accent** — introduce `--accent: #B85C3A` in `src/styles.css`. Used only on: links, arrows/chevrons, eyebrow underlines, filter chip active state, "Read →" affordances, and one hairline under section titles. Keeps Paper & Ink base intact; one warm accent modernises everything.
- **Typography** — keep Instrument Serif for display, tighten leading and drop the largest hero size one step; slightly bolder Work Sans on eyebrows/buttons. Feels contemporary editorial (Pudding / Stripe Press) rather than op-ed.
- **Motion** — small, tasteful, motion-safe:
  - Fade-up on scroll for section headings (~200ms)
  - Publication cards: cover lift + shadow on hover
  - Numbers strip: count-up on first view
  - Filter chips: smooth active-state transition
- **Photo treatment** — drop grayscale on real photos (see §2).
- **Copy rhythm** — shorten hero paragraphs ~30%, first-person voice ("I turn evidence into decisions ministers act on") instead of third-person institutional.
- **Micro-details** — small "Berlin" location pill in header (no Paris mention), subtle "Last updated" note in footer.

Explicitly NOT changing: Paper & Ink palette base, section architecture, editorial bones.

## Files touched

- `src/routes/publications.tsx` — grid + filter chips
- `src/routes/index.tsx` — real hero photo, numbers strip labels, About copy, accent, motion
- `src/routes/experience.tsx` — subtitle line (Sydney · Berlin · Brussels)
- `src/routes/speaking.tsx` — real photos in featured + gallery
- `src/lib/portfolio-data.ts` — numbers strip labels, About text
- `src/styles.css` — `--accent` terracotta token, tightened type scale, motion utilities
- `src/components/site-header.tsx` — small Berlin pill
- `src/components/site-footer.tsx` — Last updated note
- `src/assets/*.asset.json` — 4 new pointers via `lovable-assets` CLI
