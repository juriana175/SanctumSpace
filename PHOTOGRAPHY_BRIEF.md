# SanctumSpace — Photography Brief
*Visual direction for website, partner deck, and brand assets · April 2026 · v1*

> Project context. Not a deliverable yet. Will be formatted as a standalone shareable document before commissioning a photographer.

---

## The brand in one line

SanctumSpace is the world's first premium private pod category for global airports.
Tagline: **"Control your moments."**
Aesthetic anchor: **Aman meets Apple** — quiet luxury of a destination resort crossed with the precision of an Apple product page.

## What the photography must do

Three jobs, in order:

1. Make a partner doing a reference check take us seriously.
2. Make a premium traveler feel the calm before they read a single word.
3. Hold its own next to Foster + Partners architecture without trying to compete with it.

What it must not do: look like stock, look like wellness, look like a tech startup, look like any existing airport lounge.

---

## The three shot categories

### Category 1 — The Figure in Stillness
Single human subject in a moment of self-contained calm. Eyes closed or downcast. No phone, no laptop, no overt productivity signaling.

- **Composition:** 30/70 figure-to-space ratio.
- **Framing:** 3/4 portrait or seated profile. Avoid full-face direct-to-camera.
- **Diversity:** global travelers, ages 28–55, mix of business and leisure dress. No children, no groups, always solo.
- **Wardrobe:** cashmere, linen, wool, soft tailoring. No logos, no athleisure, no traditional business suits.
- **Posture:** relaxed but composed. Never slumped, never asleep, never yoga-posed.

### Category 2 — The Material Close-Up
Texture and material studies that convey the sensory environment of the pod without showing the pod itself yet. Used as background imagery, hero overlays, section dividers.

- **Subjects:** woven linen and wool, raw plaster, polished travertine and limestone, brushed walnut and oak, hand-finished brass, soft leather. The materials we will actually specify when the pod is built.
- **Treatment:** extreme close-up to mid-detail. Honest and tactile, not styled.
- **Lighting:** low-angle directional warm light, raking across the surface. Never flat, never overhead, never cool.
- **Avoid:** plastic, chrome, anything reflective in a way that breaks calm.

### Category 3 — The Light Study
Atmospheric environmental shots that establish the mood without depicting any specific location.

- **Subjects:** a shaft of warm light across a textured wall, a curtain catching dawn, a single object in soft side-light, the curve of an architectural form in shadow.
- **Lighting:** golden hour, dawn, or controlled warm interior at 2700K. Never daylight neutral, never fluorescent, never blue.
- **Mood:** contemplative, generous, slow. Viewer should feel they could exhale into the frame.

---

## Non-negotiables

**Color palette must hold against the live brand tokens:**

| Token | Value | Role |
|---|---|---|
| Sage primary | `#5C6B5A` | deep botanical green |
| Warm cream | `#F5EFE6` | ground / page surface |
| Mahogany accent | `#4A2F22` | deep warm brown |
| Soft peach/orange glow | (used sparingly) | directional light only |

Photography palette must sit in the warm half of the spectrum: creams, sands, terracottas, mahoganies, sages, warm whites. Cool blues, bright primaries, neon — disqualifying.

**Light is always warm and directional.** 2700K–3200K only. Side and rake angles preferred over front and overhead.

**Composition is generous.** Negative space is the most important compositional element. Aim for the restraint of a Wabi-Sabi gallery print, not the density of a magazine cover.

---

## Explicit do-nots

- No recognizable airports, terminals, or aircraft interiors.
- No competitor visual cues — no Cathay first-class lounge, no Equinox spa, no WeWork, no Equinox Hotels.
- No motion blur, kinetic energy, or "travel hustle" — no luggage, no boarding passes, no clocks.
- No multiple people. No couples, groups, families. **Solitude is the brand.**
- No screens visible. No phones, laptops, tablets, monitors.
- No overt wellness signaling — no meditation poses, incense, crystals, spa towels, eye masks.
- No religious or spiritual iconography. *(Exception: KSIA-deployment culturally specific content (Qibla, etc.) shot separately, separate library.)*
- No AI-generated humans. If an image looks AI-generated, it is wrong.

---

## Deliverables (v1)

| Category | Count | Format | Use |
|---|---|---|---|
| Figure in Stillness | 3 hero-grade | Horizontal · desktop hero + mobile crop | Homepage hero plates |
| Material Close-Up | 5 | Square or vertical | Section backgrounds, texture overlays |
| Light Study | 3 | Horizontal | Partners Opportunity panel, future Pod page |

**Format requirements**

- RAW capture, delivered as 16-bit TIFF masters.
- JPEG and WebP web exports at 2880px and 1440px on the long edge, both sRGB.
- All faces and material credits cleared with full commercial license including web, print, OOH, and partner co-marketing use.
- Model releases on file, transferable to airport partners and licensees.

**Color grading**

- Warm but not orange-cast. Soft but not hazy. Slightly desaturated greens to align with sage palette without competing.
- **Reference grade:** Aman website photography, A24 film stills, Kinfolk magazine interiors.
- **Avoid:** travel Instagram, lifestyle blog, wellness Pinterest.

---

## Reference library

**Working for us**

- Aman Tokyo — website photography, particularly spa and suite imagery
- Le Bristol Paris — restraint and warmth
- The Calile Hotel Brisbane — material honesty
- Apple product pages — hierarchy and breathing room
- Kinfolk magazine — figure-in-space ratio
- Hiroshi Sugimoto seascapes — for light studies, tonally not literally

**Studied and rejected**

- Equinox Hotels — too engineered, too aspirational
- Soho House — too lived-in, too lifestyle
- Standard Hotels — too playful
- Most airline business class campaigns — too commercial

---

## Practical notes

- **Location:** controlled studio set built to approximate pod dimensions and material palette is preferred over real locations. We will provide material samples for set dressing.
- **Cadence:** two-day shoot recommended for v1. Day one: figure work. Day two: material and light studies.
- **On-set approvals:** founder on set or on a live monitor link for all hero selects.

---

## Slot map (live artboards → photography brief)

When real images arrive, swap by slot id (declared in `heroes.jsx` and `partners.jsx` as a `SLOTS` constant; each `<PhotoPH>` declares its `slot=`).

| Slot id | Category | Used in |
|---|---|---|
| `figure-stillness-01` | Cat 1 | HeroOne desktop right plate · HeroOne mobile bottom plate |
| `figure-stillness-02` | Cat 1 | HeroThree cinematic full-bleed (desktop + mobile) |
| `light-study-01` | Cat 3 | HeroTwo architectural full-bleed right (desktop + mobile) |
| `material-closeup-01` | Cat 2 | Partners Model panel |
| `light-study-02` | Cat 3 | Partners Opportunity right plate |

---

## Contact

Juriana Spierenburg, Founder & CEO
juriana@sanctum-space.com
+1 (646) 599-4535
