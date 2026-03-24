# Landing Redesign Brief

## Project Scope

This redesign covers the full public surface of the current site:

- Home page
- About page
- Contact page
- Shared layout shell (header + footer)
- Core reusable UI primitives used by those pages

Current stack remains unchanged:

- Next.js App Router
- Tailwind CSS v4
- Existing local image assets in public/images
- Existing component architecture in src/app and src/components

---

## Redesign Goals

1. Build a distinctive premium B2B trade identity (not generic startup UI).
2. Improve visual hierarchy and readability across all pages.
3. Keep page structures familiar while making each section visually intentional.
4. Maintain responsive quality for desktop and mobile.
5. Preserve performance and static rendering behavior.

---

## Visual Concept Options

### Concept A: Maritime Ledger

Tone:
- Strategic
- Trustworthy
- Executive

Palette direction:
- Deep navy background surfaces
- Warm sand/ivory content surfaces
- Copper accent for calls to action and highlights

Typography direction:
- Serif display for hero headlines
- Clean grotesk sans for body and navigation
- Tight but disciplined heading rhythm

Motion direction:
- Slow fade-and-rise on section reveal
- Subtle card hover elevation
- Delayed stagger only for service grids

Best for:
- Corporate credibility
- Premium international positioning


### Concept B: Cargo Neon Grid

Tone:
- Bold
- Technical
- High-energy logistics

Palette direction:
- Graphite base
- Acid-lime and cyan accent rails
- White/steel text hierarchy

Typography direction:
- Condensed display for key messages
- Functional sans for body
- Monospaced micro-labels for metadata

Motion direction:
- Gridline sweeps on section load
- Directional transitions left-to-right
- Crisp, short interactions

Best for:
- Aggressive market expansion narrative
- Strong visual memorability


### Concept C: Atlas Light Industrial

Tone:
- Clean
- Global
- Operationally confident

Palette direction:
- Light mineral backgrounds
- Slate and ink for typography
- Rust/orange signal accent

Typography direction:
- Humanist sans hierarchy with varied weight contrast
- Large numeric and KPI typography for trust signals

Motion direction:
- Minimal and calm
- Focus on readability first
- Motion only where it supports hierarchy

Best for:
- Balanced modern look
- Conservative but upgraded brand perception

---

## Recommended Direction

Primary recommendation: Concept A (Maritime Ledger).

Why this is optimal for this project:

1. It matches the company domain (global trade, reliability, long-cycle B2B trust).
2. It avoids over-generic dark SaaS visuals while still feeling premium.
3. It gives enough contrast to make each section distinct without overcomplicating the implementation.
4. It can be implemented quickly with current assets and existing component structure.

---

## Page-Level Redesign Plan

### 1) Shared Layout

Header:
- Convert current top strip into a cleaner utility bar with stronger spacing rhythm.
- Make main nav sticky with translucent surface + soft backdrop blur.
- Improve active/hover states to look deliberate and brand-aligned.

Footer:
- Introduce clearer column hierarchy and stronger bottom legal strip.
- Add compact trust blocks (response time, regions served, operating window).

### 2) Home Page

Hero:
- Replace flat overlay with layered gradient + directional light texture.
- Strengthen headline stack and add a clear primary and secondary CTA pairing.

About preview block:
- Turn into asymmetric split layout with image framing details.
- Add one concise metric line (for credibility).

Services block:
- Convert repeated cards into a richer system with icon cue + hover state.
- Introduce consistent card heights and controlled text lengths.

Why choose us:
- Reframe as proof points with numbered structure.
- Use clearer visual anchors for scanning.

### 3) About Page

- Keep narrative sequence but increase typographic contrast.
- Convert values into cleaner cards with visual differentiation by category.
- Make expertise list visually structured (columns or grouped chips) for faster scanning.

### 4) Contact Page

- Keep simple structure but elevate visual quality.
- Add stronger separation between hero and contact cards.
- Improve card rhythm and interaction affordances for email/action links.

---

## Component/System Updates

1. Global theme tokens in src/app/globals.css
- Introduce full token set for background layers, text tiers, accent, borders, and shadows.

2. Header and Footer components
- Refactor spacing and state styles to align with chosen concept.

3. Shared section primitives (optional but recommended)
- section container
- section title block
- feature card variant
- metric chip

4. Image treatment
- Standardize image wrappers and overlays for consistency.

---

## Implementation Phases

Phase 1: Design foundation
- Theme token rewrite
- Typography and spacing scale setup
- Rework header/footer shell

Phase 2: Home page
- Complete full visual refresh of home sections
- Validate responsive behavior and readability

Phase 3: About and Contact
- Apply the same system language
- Remove one-off styles where possible

Phase 4: QA and polish
- Mobile and tablet spacing audit
- Motion tuning
- Accessibility checks (contrast, focus states, semantic headings)

---

## Success Criteria

1. The 3 pages feel part of one coherent visual system.
2. The site has a recognizable visual identity instead of template-like styling.
3. Navigation and section scanning become easier on both desktop and mobile.
4. CTAs are clearer and visually prioritized.
5. No regression in build stability and base performance.

---

## Notes

This brief intentionally keeps architecture changes minimal and prioritizes practical redesign delivery using the existing project structure.
