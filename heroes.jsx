/* SanctumSpace homepage hero — three directions × two devices.
 * All three use the brand: cream ground, sage primary, warm-stone tertiary,
 * accent #C9997A as halo / directional light only. Cormorant Garamond display
 * + Inter body. Logo from /assets/. Photo placeholders are striped with a
 * monospace caption describing what should occupy them.
 */

const LOGO = {
  /* Transparent SVG-equivalent PNGs — mark sits directly on page bg.
     Use 'sage' on cream/light grounds, 'cream' on sage/dark grounds. */
  sage:  "assets/logomark-sage.png",
  cream: "assets/logomark-cream.png",
};

/* ───────────────────────────────────────────────
   Photo slots — keyed to the SanctumSpace photography brief.
   Each slot describes the brief to deliver. When real images
   arrive, replace the placeholder render in PhotoPH with an
   <img> driven off the slot id below.
   ─────────────────────────────────────────────── */
const SLOTS = {
  // CATEGORY 1 — Figure in Stillness
  "figure-stillness-01": [
    "// CATEGORY 1 · FIGURE IN STILLNESS · 01",
    "// solo subject, 3/4 seated profile, eyes downcast",
    "// neutral cashmere or linen, no logo, no device",
    "// warm directional light, 2700K, raking from upper-left",
    "// 30/70 figure-to-space · negative space dominant",
    "// palette: creams, sands, warm whites · holds vs sage #5C6B5A",
  ].join("\n"),

  "figure-stillness-02": [
    "// CATEGORY 1 · FIGURE IN STILLNESS · 02",
    "// solo subject at rest · contemplative, not performed",
    "// soft side-light, 2700–3200K · no overhead, no flat fill",
    "// 30% subject / 70% atmosphere · cream + mahogany tonal range",
    "// reads honest, not styled · Aman / Kinfolk register",
  ].join("\n"),

  // CATEGORY 2 — Material Close-Up
  "material-closeup-01": [
    "// CATEGORY 2 · MATERIAL CLOSE-UP · 01",
    "// raw plaster, brushed walnut, hand-finished brass, or woven linen",
    "// extreme close-up to mid-detail · honest, tactile, unstyled",
    "// low-angle directional warm light raking the surface",
    "// no plastic, no chrome, no reflective break of calm",
  ].join("\n"),

  // CATEGORY 3 — Light Study
  "light-study-01": [
    "// CATEGORY 3 · LIGHT STUDY · 01",
    "// architectural moment · shaft of warm light across textured wall",
    "// no recognizable airport / terminal architecture",
    "// 2700–3200K · golden hour or controlled warm interior",
    "// abstract, brand-owned · can support light-streak overlay",
    "// palette: warm whites, sands, mahoganies · sits beside sage cleanly",
  ].join("\n"),

  "light-study-02": [
    "// CATEGORY 3 · LIGHT STUDY · 02",
    "// curve of architectural form in shadow, or curtain catching dawn",
    "// contemplative · viewer should feel they could exhale into frame",
    "// horizontal · 2880×1620 final · warm, slightly desaturated greens",
  ].join("\n"),
};

/* ───────────────────────────────────────────────
   Shared bits
   ─────────────────────────────────────────────── */

function Wordmark({ color = "currentColor", size }) {
  // 'Sanctum' regular, 'Space' bold italic, no separator — single lockup.
  return (
    <span className="wordmark" style={{ color, fontSize: size }}>
      Sanctum<em>Space</em>
    </span>
  );
}

function NavLogo({ src, color = "currentColor", showWordmark = true, size = 47 }) {
  // Wordmark scales proportionally with the mark — 0.55× tracks well visually.
  const wmSize = Math.round(size * 0.55);
  return (
    <div className="nav-logo" style={{ color }}>
      <img src={src} alt="" style={{ height: size, width: size }} />
      {showWordmark && <Wordmark color={color} size={wmSize} />}
    </div>
  );
}

/* Real-photo lookup. When a slot is populated here, PhotoPH renders an
   <img> sized to fill its parent (cover) instead of the placeholder
   treatment. Crop and composition are preserved by the parent's existing
   width/height + positioning — we don't change layout, just swap pixels. */
const REALS = {
  "light-study-01": {
    src: "assets/photos/wall-wash.jpg",
    alt: "Warm 2700K light emerging from behind a wall plane in a quiet interior.",
    /* objectPosition tunes how the photo is cropped inside the slot.
       Wall-wash is wide 16:9 going into a portrait-ish 58%×100% frame —
       center-bottom keeps the floor reflection visible, which is the
       photo's strongest 'inhabitable' cue. */
    objectPosition: "center 60%",
  },
};

function PhotoPH({ tone = "stone", label, slot, style }) {
  const real = REALS[slot];
  if (real) {
    return (
      <div className="photo-real" data-slot={slot} style={{ ...style, position: style?.position ?? "relative", overflow: "hidden", background: "#1c1814" }}>
        <img
          src={real.src}
          alt={real.alt}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: real.objectPosition ?? "center",
            display: "block",
          }}
        />
        {/* preserve the warm-light streak from the placeholder treatment —
            it lifts the photo and ties it to the brand's visual language */}
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 16, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.32,
        }} />
      </div>
    );
  }
  return (
    <div className="photo-ph" data-tone={tone} data-slot={slot} style={style}>
      <div className="ph-label">{label}</div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   DIRECTION 01 — Quieter / meditative
   Vast cream field. Lockup floats high-left.
   Single tall photo plate at right, soft accent halo
   behind it. Tagline set very small directly under
   the lockup. Generous breathing room.
   ─────────────────────────────────────────────── */

function HeroOneDesktop() {
  return (
    <div className="device grain" style={{ width: 1440, height: 900 }}>
      <nav className="topnav" style={{ padding: "32px 56px" }}>
        <NavLogo src={LOGO.sage} color="var(--sage)" />
        <a className="nav-link" href="#" style={{ color: "var(--sage)" }}>Partner with us</a>
      </nav>

      {/* halo behind photo plate */}
      <div className="halo" style={{ width: 720, height: 720, right: -180, top: 90, opacity: 0.7 }} />

      {/* photo plate — tall portrait, right side */}
      <div style={{ position: "absolute", right: 56, top: 140, width: 460, height: 660 }}>
        <PhotoPH
          tone="warm"
          slot="figure-stillness-01"
          label={SLOTS["figure-stillness-01"]}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* anchor block — top-left tagline */}
      <div style={{ position: "absolute", left: 56, top: 200, width: 560 }}>
        <div className="eyebrow" style={{ color: "var(--ink-soft)", marginBottom: 80 }}>
          <span style={{ display: "inline-block", width: 24, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 14, opacity: 0.6 }} />
          A sanctuary between flights
        </div>
        <h1 className="serif" style={{
          fontSize: 96,
          lineHeight: 0.98,
          margin: 0,
          color: "var(--sage)",
          letterSpacing: "-0.012em",
        }}>
          Control<br/>
          your<br/>
          <em style={{ fontWeight: 300 }}>moments.</em>
        </h1>
      </div>

      {/* footer rule — Begin scroll cue, centered */}
      <div style={{
        position: "absolute", left: 56, right: 56, bottom: 32,
        display: "flex", justifyContent: "center", alignItems: "baseline",
        color: "var(--ink-soft)",
      }}>
        <div className="scroll-cue" style={{ position: "static", color: "var(--ink-soft)" }}>
          <span>Begin</span>
          <span className="line" />
        </div>
      </div>
    </div>
  );
}

function HeroOneMobile() {
  return (
    <div className="device grain" style={{ width: 390, height: 844 }}>
      <nav className="topnav" style={{ padding: "20px 24px" }}>
        <NavLogo src={LOGO.sage} color="var(--sage)" size={40} />
        <a className="nav-link" href="#" style={{ color: "var(--sage)", fontSize: 10 }}>Partner</a>
      </nav>

      <div className="halo" style={{ width: 380, height: 380, right: -80, top: 320, opacity: 0.6 }} />

      <div style={{ position: "absolute", left: 24, top: 96, right: 24 }}>
        <div className="eyebrow" style={{ color: "var(--ink-soft)", fontSize: 9, marginBottom: 28 }}>
          <span style={{ display: "inline-block", width: 18, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 10, opacity: 0.6 }} />
          A sanctuary between flights
        </div>
        <h1 className="serif" style={{
          fontSize: 56,
          lineHeight: 0.98,
          margin: 0,
          color: "var(--sage)",
          letterSpacing: "-0.012em",
        }}>
          Control<br/>your<br/><em style={{ fontWeight: 300 }}>moments.</em>
        </h1>
      </div>

      <div style={{ position: "absolute", left: 24, right: 24, bottom: 56, height: 360 }}>
        <PhotoPH
          tone="warm"
          slot="figure-stillness-01"
          label={SLOTS["figure-stillness-01"]}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* metadata line removed */}
    </div>
  );
}

/* ───────────────────────────────────────────────
   DIRECTION 02 — Bolder / architectural
   Split composition. Sage panel left holding a
   monumental serif tagline. Warm-toned photo plate
   right with a single horizontal warm-accent light
   slash — directional light, like a shaft cutting
   the room. Sharper, more confident.
   ─────────────────────────────────────────────── */

function HeroTwoDesktop({ caption = "Designed for the world's leading airports", captionMeta = "Opening 2027" }) {
  return (
    <div className="device" style={{ width: 1440, height: 900, background: "var(--sage)" }}>
      <nav className="topnav" style={{ padding: "32px 56px", color: "var(--cream)" }}>
        <NavLogo src={LOGO.cream} color="var(--cream)" />
        <a className="nav-link" href="#" style={{ color: "var(--cream)" }}>Partner with us</a>
      </nav>

      {/* right: full-bleed photo plate — fills 58% of canvas */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "58%" }}>
        <PhotoPH
          tone="warm"
          slot="light-study-01"
          label={SLOTS["light-study-01"]}
          style={{ width: "100%", height: "100%" }}
        />
        {/* the light slash — warm horizontal beam */}
        <div className="light-slash" style={{
          left: "-10%", right: "-10%",
          top: "44%", height: 18,
          transform: "rotate(-2deg)",
        }} />
      </div>

      {/* left: sage panel with the tagline at scale */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "42%",
        padding: "260px 0 0 56px",
      }}>
        <h1 className="serif" style={{
          fontSize: 132,
          lineHeight: 0.93,
          margin: 0,
          color: "var(--cream)",
          letterSpacing: "-0.018em",
          fontWeight: 300,
        }}>
          Control<br/>
          your<br/>
          <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>moments.</em>
        </h1>

        <div style={{
          position: "absolute", left: 56, bottom: 48,
          display: "flex", gap: 48, alignItems: "baseline",
          color: "rgba(245,239,230,0.7)",
        }}>
          <span className="micro">{caption}</span>
          <span className="micro" style={{ opacity: 0.6 }}>{captionMeta}</span>
        </div>
      </div>
    </div>
  );
}

function HeroTwoMobile({ caption = "Designed for the world's leading airports", captionMeta = "Opening 2027" }) {
  return (
    <div className="device" style={{ width: 390, height: 844, background: "var(--sage)" }}>
      <nav className="topnav" style={{ padding: "20px 24px", color: "var(--cream)" }}>
        <NavLogo src={LOGO.cream} color="var(--cream)" size={40} />
        <a className="nav-link" href="#" style={{ color: "var(--cream)", fontSize: 10 }}>Partner</a>
      </nav>

      {/* sage panel top */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 460, padding: "140px 24px 0" }}>
        <h1 className="serif" style={{
          fontSize: 68,
          lineHeight: 0.94,
          margin: 0,
          color: "var(--cream)",
          letterSpacing: "-0.018em",
          fontWeight: 300,
        }}>
          Control<br/>your<br/><em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>moments.</em>
        </h1>
      </div>

      {/* photo plate bottom */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 460, bottom: 0 }}>
        <PhotoPH
          tone="warm"
          slot="light-study-01"
          label={SLOTS["light-study-01"]}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "38%", height: 12, transform: "rotate(-2deg)",
        }} />
        <div style={{
          position: "absolute", left: 16, bottom: 16,
          display: "flex", flexDirection: "column", gap: 4,
          color: "rgba(245,239,230,0.7)",
        }}>
          <span className="micro" style={{ fontSize: 9 }}>{caption}</span>
          <span className="micro" style={{ fontSize: 9, opacity: 0.6 }}>{captionMeta}</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   DIRECTION 03 — Cinematic / traveler-focused
   Full-bleed dark warm photo plate. Subtle vignette.
   Slow ambient ken-burns motion. Tagline set
   center-bottom, restrained. Accent appears as a
   golden-hour wash from upper edge.
   ─────────────────────────────────────────────── */

function HeroThreeDesktop() {
  return (
    <div className="device dark" style={{ width: 1440, height: 900, background: "#2a231d" }}>
      {/* photo plate, full bleed, ken-burns */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div className="ken" style={{ position: "absolute", inset: 0 }}>
          <PhotoPH
            tone="warm"
            slot="figure-stillness-02"
            label={SLOTS["figure-stillness-02"]}
            style={{ width: "100%", height: "100%", backgroundColor: "#3a2e25" }}
          />
        </div>
        {/* golden-hour wash from top */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, height: "55%",
          background: "linear-gradient(180deg, rgba(201,153,122,0.32) 0%, rgba(201,153,122,0.08) 60%, transparent 100%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }} />
        {/* bottom vignette so type holds */}
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: "65%",
          background: "linear-gradient(180deg, transparent 0%, rgba(20,16,12,0.0) 30%, rgba(20,16,12,0.55) 75%, rgba(20,16,12,0.85) 100%)",
          pointerEvents: "none",
        }} />
      </div>

      <nav className="topnav" style={{ padding: "32px 56px", color: "var(--cream)" }}>
        <NavLogo src={LOGO.cream} color="var(--cream)" />
        <a className="nav-link" href="#" style={{ color: "var(--cream)" }}>Partner with us</a>
      </nav>

      {/* tagline center-bottom */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 96,
        display: "flex", flexDirection: "column", alignItems: "center",
        color: "var(--cream)",
      }}>
        <div className="eyebrow" style={{ marginBottom: 28, opacity: 0.75 }}>
          For the in-between
        </div>
        <h1 className="serif" style={{
          fontSize: 116,
          lineHeight: 1,
          margin: 0,
          letterSpacing: "-0.012em",
          fontWeight: 300,
          textAlign: "center",
        }}>
          Control your <em style={{ fontWeight: 300 }}>moments.</em>
        </h1>
      </div>

      {/* corner credits */}
      <div style={{
        position: "absolute", left: 56, bottom: 32,
        color: "rgba(245,239,230,0.55)",
      }}>
        <div className="micro" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em" }}>
          01 / 04 &nbsp; The arrival
        </div>
      </div>
      <div style={{
        position: "absolute", right: 56, bottom: 32,
        color: "rgba(245,239,230,0.55)",
        display: "flex", alignItems: "center", gap: 14,
      }}>
        <span className="micro" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>Scroll</span>
        <span style={{ display: "inline-block", width: 32, height: 1, background: "currentColor", opacity: 0.5 }} />
      </div>
    </div>
  );
}

function HeroThreeMobile() {
  return (
    <div className="device dark" style={{ width: 390, height: 844, background: "#2a231d" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div className="ken" style={{ position: "absolute", inset: 0 }}>
          <PhotoPH
            tone="warm"
            slot="figure-stillness-02"
            label={SLOTS["figure-stillness-02"]}
            style={{ width: "100%", height: "100%", backgroundColor: "#3a2e25" }}
          />
        </div>
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, height: "55%",
          background: "linear-gradient(180deg, rgba(201,153,122,0.32) 0%, transparent 100%)",
          mixBlendMode: "screen", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: "70%",
          background: "linear-gradient(180deg, transparent 0%, rgba(20,16,12,0.6) 65%, rgba(20,16,12,0.9) 100%)",
          pointerEvents: "none",
        }} />
      </div>

      <nav className="topnav" style={{ padding: "20px 24px", color: "var(--cream)" }}>
        <NavLogo src={LOGO.cream} color="var(--cream)" size={40} />
        <a className="nav-link" href="#" style={{ color: "var(--cream)", fontSize: 10 }}>Partner</a>
      </nav>

      <div style={{
        position: "absolute", left: 24, right: 24, bottom: 88,
        display: "flex", flexDirection: "column", alignItems: "center",
        color: "var(--cream)",
      }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 20, opacity: 0.75 }}>
          For the in-between
        </div>
        <h1 className="serif" style={{
          fontSize: 56,
          lineHeight: 1,
          margin: 0,
          letterSpacing: "-0.012em",
          fontWeight: 300,
          textAlign: "center",
        }}>
          Control your <em style={{ fontWeight: 300 }}>moments.</em>
        </h1>
      </div>

      <div style={{
        position: "absolute", left: 24, right: 24, bottom: 28,
        display: "flex", justifyContent: "space-between",
        color: "rgba(245,239,230,0.55)",
      }}>
        <span className="micro" style={{ fontFamily: "var(--mono)", fontSize: 9 }}>01 / 04</span>
        <span className="micro" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  HeroOneDesktop, HeroOneMobile,
  HeroTwoDesktop, HeroTwoMobile,
  HeroThreeDesktop, HeroThreeMobile,
});
