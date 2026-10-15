---
name: El Almacén
description: Helados & Café en la esquina; the page is the storefront itself.
colors:
  muro: "#8c2b23"
  muro-hondo: "#5e1c17"
  muro-sol: "#a3362b"
  cartel: "#f6f4ef"
  cartel-sombra: "#e6e1d8"
  tinta: "#2b1a14"
  tinta-suave: "#5b463c"
  pino: "#d9a066"
  pino-claro: "#eec594"
  pino-hondo: "#9c6130"
  cordon: "#ebbd34"
  cordon-hondo: "#c99a17"
  silla: "#d23b2c"
  maceta: "#db8c82"
  vereda: "#c8c3ba"
  vereda-hondo: "#9d978d"
  hierro: "#1d1a18"
  vidrio: "#23201e"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.6rem, 12.5vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 9vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 78"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-md: "32px"
  section: "80px"
  section-md: "112px"
  container: "72rem"
components:
  button-placa:
    backgroundColor: "{colors.cordon}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  button-placa-hover:
    backgroundColor: "{colors.pino-claro}"
  button-tinta:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.cartel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  button-tinta-hover:
    backgroundColor: "{colors.muro}"
  button-tinta-outline:
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  panel-cartel:
    backgroundColor: "{colors.cartel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "48px 56px"
  panel-vidriera:
    backgroundColor: "{colors.vidrio}"
    textColor: "{colors.cartel}"
    rounded: "{rounded.none}"
    padding: "56px 40px 40px"
  nav-bar:
    backgroundColor: "{colors.hierro}"
    textColor: "{colors.cartel}"
    height: "52px"
  nav-bottom:
    backgroundColor: "{colors.hierro}"
    textColor: "{colors.cartel}"
    height: "60px"
---

# Design System: El Almacén

## Overview

**Creative North Star: "La esquina"**

The page is the corner where the shop stands, built from its real materials: an oxblood stucco wall, a white painted sign with dark serif lettering, a pine-slat pergola on black steel posts, a yellow-painted curb and a grey sidewalk. Every region of the page is one of those surfaces, not a card floating on a neutral ground. The wall is the ground of whole sections; the sign-white appears only as painted panels hung on it; pine and steel frame the top; the curb and sidewalk close the page.

The world is lettered, not carded. Hierarchy comes from sign-painter type (a heavy display serif and condensed bold caps), from material changes between sections, and from the pergola's striped shadow falling across everything below it. That shadow is the signature: its angle follows the visitor's local hour, it drifts slightly with scroll, it settles from blurred to sharp on load, and at night it is gone and the sign glows instead.

Density is low and confident: few elements per section, large type, generous section padding. Corners are square throughout. The site rejects the café-landing template (photo hero, cream ground, rows of cards, fabricated reviews) and anything that reads as a chain or as cold premium minimalism.

**Key Characteristics:**
- Drenched oxblood wall as the page ground, with fine plaster grain.
- Sign-white panels with dark-brown Young Serif lettering.
- Pine slats and black steel as framing, never as decoration.
- Curb yellow owns the primary action.
- Striped pergola shadow tied to the real hour; night replaces it with a glowing sign.
- Square corners, hand-drawn single-stroke icons, condensed caps labels.
- Unconfirmed content is visibly marked as provisional.

## Colors

Every color is sampled from the storefront: wall, sign, ink, pine, curb, chairs, planters, sidewalk, steel and glass.

### Primary
- **Muro (oxblood wall)**: the ground of the hero, the two shop windows section and the flavors section, always rendered with the plaster grain and a sun-warmed highlight (Muro Sol) at the upper right. **Muro Hondo** is the body background, the recessed window frame, the night wall and the scrollbar track. Muro also serves as the hover color for dark buttons and links on light ground.

### Secondary
- **Pino (pine)**: the slat band under the header and the full ground of the "Bajo la pérgola" section. **Pino Claro** is the gold-leaf lettering on the shop windows, the info tiles in the pergola section and the hover state of yellow buttons. **Pino Hondo** is the slat's dark edge, the text-shadow under gold lettering and the scrollbar thumb.
- **Cordón (curb yellow)**: the primary action plate, the floating WhatsApp button, the header CTA, link underlines on dark ground, the open-hours light, focus rings, the caret and text selection. **Cordón Hondo** is the curb's shadowed lip.

### Tertiary
- **Maceta (planter pink)**: flavor list bullets and the "closed" state of the hours light.
- **Silla (chair red)**: reserved accent; in the build it appears only as the hover of the dark "¿Qué hay hoy?" button.

### Neutral
- **Cartel (sign white)**: sign panels, the flavors board, and body text on the wall. **Cartel Sombra** is the inner highlight on the sign's top edge.
- **Tinta (sign ink)**: all text on white and pine, dark buttons, borders on light ground. **Tinta Suave** is secondary text on white.
- **Hierro (steel)**: header bar, bottom nav, photo frame, the inset frame of the windows; also the browser theme color.
- **Vidrio (glass)**: the dark pane inside each shop window.
- **Vereda / Vereda Hondo (sidewalk)**: the sidewalk band under the curb and its tile joints; the footer ground.

### Named Rules
**The Curb Owns the Action Rule.** Curb yellow marks the WhatsApp order action and focus. Any other yellow surface competes with it.

**The Material Ground Rule.** Sections sit on a storefront material (wall, pine, sidewalk), never on a neutral off-white. Sign-white exists only as a bounded painted panel.

## Typography

**Display Font:** Young Serif (with Georgia, serif), self-hosted, weight 400 only.
**Body Font:** Archivo Variable (with Helvetica Neue, Arial, sans-serif), self-hosted with the width axis.
**Label Font:** Archivo at 78% width, bold, uppercase, tracked: the sign-painter caps.

**Character:** A heavy, warm, slightly quirky serif reads as hand-painted shop lettering; the condensed grotesque caps read as stenciled small signage. Body text is plain Archivo at normal width.

### Hierarchy
- **Display** (400, clamp(2.6rem, 12.5vw, 5.4rem), line-height 1, tracking 0.02em): the "ALMACÉN" lettering of the sign, and the window titles HELADOS / CAFÉ (clamp(2.6rem, 10.5vw, 4.4rem), line-height 0.9) in Pino Claro.
- **Headline** (400, clamp(2.5rem, 9vw, 4.5rem), line-height 0.95): section headings such as "Algunos gustos de siempre". The hero line "Helados y café, en la esquina." sits between the two (clamp(2.1rem, 7.5vw, 3.75rem), line-height 1.02).
- **Title** (400, 1.45rem to 1.6rem, tight leading): flavor names on the board, address, the wordmark in header (1.35rem) and footer (2rem).
- **Body** (400, 1.05rem to 1.1rem, line-height 1.625): leads and supporting text, capped at 30ch to 46ch.
- **Label** (700, 78% width, 0.8rem to 1.05rem, 0.08em tracking, uppercase): navigation, buttons, format lists, data labels, the hours line. The tagline inside the sign opens up to 0.32em tracking.

### Named Rules
**The Painted Letter Rule.** Headings are Young Serif at 400 with balanced wrapping; never bold it or italicize it, and never set body copy in it.

**The Sign-Painter Caps Rule.** Every functional label is the condensed bold caps style. It is not used for decorative overlines above headings.

## Layout

A single centered column capped at 72rem, with 16px side gutters on phones and 32px from the md breakpoint (768px). Sections are full-bleed material bands stacked like the facade: pergola header, wall with the sign, wall with two windows, wall with the flavor board, pine pergola section, curb and sidewalk footer. Section padding runs about 80 to 96px on phones and 112 to 128px on desktop.

The hero fills the viewport height (minus the bottom nav on phones), centers the sign, and closes with the curb and sidewalk band (64px, 80px on desktop). Below it, the two windows share a 2-column grid on md and up with equal weight; the flavor list flows into 1, 2 or 3 columns; the pergola section splits into text and photo at lg only when the photo exists.

On phones a fixed steel bottom nav (60px plus safe area) carries five icon-and-label links, and a floating curb-yellow "Pedí" plate rides just above it once the hero's action plate scrolls away. Desktop moves nav into the header and hides both. Anchor scrolling is smooth with a 4.5rem top padding, and instant under reduced motion.

## Elevation & Depth

Depth is physical, not interface-style. Panels hung on the wall cast soft, warm, downward shadows tinted with the wall's own dark red; the shop windows are recessed into the wall with an inset shadow at the top; the pergola's striped shadow is laid over the wall and the sign with a multiply blend. Nothing floats on neutral grey shadows, and there are no hard offset shadows.

### Shadow Vocabulary
- **Hung panel** (`box-shadow: 0 18px 30px -12px rgb(30 6 4 / 0.55), 0 4px 8px -2px rgb(30 6 4 / 0.35)`): the sign and the flavor board.
- **Plate** (`box-shadow: 0 10px 20px -10px rgb(30 6 4 / 0.7)`): the yellow action plate; deepens slightly on hover.
- **Recess** (`box-shadow: inset 0 10px 14px -6px rgb(20 4 3 / 0.75)`): window openings in the wall.
- **Slat shade** (`box-shadow: 0 6px 10px -4px rgb(29 26 24 / 0.6)`): the pergola band over the content.
- **Night glow** (`box-shadow: 0 0 0 1px rgb(255 236 200 / 0.4), 0 0 70px 6px rgb(255 214 150 / 0.28)`): the lit sign after sunset.

### Named Rules
**The Pergola Shadow Rule.** The striped shadow (dark bands 26px, gap 36px, multiply) is the world's signature. Its angle comes from the local hour between 07:00 and 20:00 (58 to 122 degrees); outside that range it disappears and the sign glows. It drifts with scroll only when motion is allowed, and under reduced motion it appears settled, without the blur-in.

**The Shadow Belongs to the Wall Rule.** Shadow color is a dark tint of the wall (around rgb(30 6 4)), never neutral black on a light ground.

## Shapes

Square corners everywhere: signs, panels, buttons, windows, tiles and photo frames have no radius. The only round forms are small dots (the hours light and the flavor bullets). Borders are structural: 2px ink underlines on links and outline buttons, a 4px steel frame inside each window, a 1.5px ink rule inset 10px inside the flavor board, and diamond-tipped hairline flourishes flanking "EL" on the sign. Icons are custom single-stroke drawings on a 24px grid at 1.75 stroke with round caps.

## Components

### Buttons
Painted plates and lettered links, square and solid.
- **Shape:** square (0px).
- **Primary plate:** curb yellow with ink label caps and an icon, 16px by 20px padding, plate shadow; hover warms to pine-light, press nudges 1px down, and the arrow slides 4px right.
- **Dark plate:** ink with sign-white caps; hover turns to wall red (or chair red on the flavor board).
- **Outline plate:** 2px ink border on pine; hover fills with ink.
- **Lettered link:** caps with a 2px underline at 6px offset (curb yellow on dark ground, ink on light); hover swaps the underline color.
- **Focus:** a 3px curb-yellow outline, 3px offset, on every interactive element.

### Cards / Containers
There are no generic cards. Three material containers carry content:
- **Sign panel:** sign-white, ink lettering, hung-panel shadow, the pergola shadow crossing it.
- **Shop window:** a wall-red recessed frame (10 to 12px), a glass pane inside a 4px steel frame, gold-leaf display lettering with a pine-dark text-shadow.
- **Pine tiles:** pine-light data tiles separated by 1px ink-tinted gaps.

### Navigation
- **Header:** a 52px steel bar with the serif wordmark, condensed caps links (80% white, hover full white with a curb underline) and the curb-yellow WhatsApp plate on desktop; a 28px band of pine slats hangs beneath it.
- **Bottom nav (phones):** steel bar, five equal icon-over-label links at 70% white; the section in view turns curb yellow.

### Pergola Shadow (signature)
A layer of diagonal stripes over the hero wall and the sign, repeated faintly over the flavor section and at a fixed angle over the pine section. It enters blurred and faint, then settles sharp.

### Provisional Notes
Unconfirmed content (hours, flavor list, product formats) is shown with a small caps note such as "Lista de ejemplo · a confirmar", gated by data flags. Unconfirmed hours never claim open or closed.

## Do's and Don'ts

### Do:
- **Do** build each section on a storefront material (wall, pine, sidewalk) and hang sign-white panels on it.
- **Do** give the WhatsApp order action the curb-yellow plate, and keep yellow for that action, focus and the open light.
- **Do** keep helados and café as equal panes with the same size and treatment.
- **Do** gate every unconfirmed fact behind its data flag and label it "a confirmar" while it stays provisional.
- **Do** drive the pergola shadow from the real hour and drop it at night in favor of the glowing sign.
- **Do** tint shadows with the wall's dark red.

### Don't:
- **Don't** add generic cards, a cream page ground or a photo hero.
- **Don't** fabricate ratings, reviews, origins or dietary claims, or show unconfirmed hours as open or closed.
- **Don't** round corners on plates, panels or windows.
- **Don't** use hard offset shadows or neutral grey drop shadows.
- **Don't** put caps overlines or eyebrows above headings; headings stand alone in Young Serif.
- **Don't** use emoji or icon-font glyphs; draw icons in the single-stroke set.
