# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences, all confirmed as relevant; none is ranked above the others yet:

- **Vecino que pide delivery:** people from the neighborhood who want to order ice cream or coffee via WhatsApp. They need flavors, the menu (carta), hours, and a fast path to the WhatsApp chat, usually from a phone.
- **Visita al local:** someone deciding whether to go to the salon. They need location, hours, and a sense of the place.
- **Descubrimiento (Google / Instagram):** visitors arriving from Google Maps or Instagram who don't know the place yet and need enough trust to order or visit.
- **El dueño / cliente del proyecto:** this is a freelance build; the site is also the deliverable the shop owner evaluates and approves.

## Product Purpose

The public website of El Almacén, a neighborhood heladería and café. It turns visitors into orders (WhatsApp delivery) and visits (the salon), and gives the shop a credible presence for people who discover it online. Success means visitors find what they need (flavors, menu, hours, location) and reach WhatsApp or directions with minimal friction.

## Positioning

Two equal pillars: **Helados & Café**, as the shop's sign says. Neither is the sidekick; the site gives artisanal ice cream and coffee the same weight. A sharper differentiator beyond that has not been confirmed with the client.

## Operating Context

- Ordering happens over WhatsApp (own delivery); there is no online checkout.
- The menu is meant to be offered as a downloadable PDF and/or an online version; neither exists yet.
- Location is resolved through Google Maps (link or embed).
- Mobile-first: a bottom navigation and floating WhatsApp button exist for phones; desktop/tablet layouts were added after.
- Copy is in Spanish, rioplatense voseo ("Descubrí", "Encontranos", "Pedí").

## Capabilities and Constraints

- Single-page landing built with Astro 7 and Tailwind CSS 4 (daisyUI removed in the 2026-10-15 redesign), with fonts self-hosted via @fontsource (`front/`). `back/` is reserved for a future backend and currently unused.
- Site data (name, contact, hours, nav) is centralized in `src/data/site.ts`.
- Open decisions: real WhatsApp number, Maps link, address, delivery radius, hours, the menu PDF / online carta, and which audience the site should prioritize.

## Brand Commitments

- Name: **El Almacén**, tagline **Helados & Café**.
- The physical sign (`public/logo-el-almacen.jpg`): white oval with "EL ALMACÉN" in bold serif capitals, "HELADOS & CAFÉ" in small caps, and a flourish, on a dark background. It is the only confirmed brand asset.
- Voice: Spanish, rioplatense voseo, warm and neighborly.
- The storefront itself (see Evidence on Hand) is the visual reference the user chose for the site, with a retro/vintage lean. The user rejected looks that read as an AI template, a chain or franchise, or cold "premium" minimalism.

## Evidence on Hand

- Real: the name, the tagline, and the sign/logo (`public/logo-el-almacen.jpg`).
- Real: a street-view photo of the storefront, shared by the user on 2026-10-15 (expected at `public/frente.jpg` once added). It shows a corner building with an oxblood/red stucco wall, a white rectangular sign with the logo lettering, and a natural pine-slat pergola on black steel posts that casts striped shadows. Under the pergola sit red metal chairs and tables, with pink round planters and a yellow-painted curb. The window reads "…café". The street is tree-lined and quiet, with bicycles. These are the shop's real visual facts and the site's design is built on them.
- **Placeholder, not to be presented as fact** (inherited from the Stitch template): the address, Google rating 4.9 and "+480 opiniones", the reviews from "Martín C." and "Valentina R.", "+32 gustos", "Receta Tradicional Italiana", "Pistacho di Bronte", vegan / sin TACC options, the 3 km delivery radius, hours, menu categories, and all food photography (`lh3.googleusercontent.com/aida-public/...`).
- Absent: real photos of the shop and products, real reviews, menu PDF, contact details. Future work must not fabricate ratings, reviews, claims, or certifications; mark them as pending until the client confirms them.

## Product Principles

1. **One tap to order or arrive.** WhatsApp and directions are the outcomes; everything else supports reaching them.
2. **Helados and café, side by side.** Neither pillar gets demoted.
3. **Truth over template.** No invented ratings, testimonials, origins, or dietary claims; placeholders stay visibly provisional.
4. **The barrio's shop, not a chain.** It's a neighborhood shop with a real sign; the site should feel like that place.
5. **Phone first.** Most visits come from a phone, often from Maps or Instagram, so the mobile flow is the primary design.
