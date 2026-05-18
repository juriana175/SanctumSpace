/* SanctumSpace — Partners page · v2
 * Abstract revision: no named partners, no named airports, no named
 * design firms, no named advisors. Confident without depending on
 * anyone else's signature. All locked type/color/spacing preserved.
 */

const LOGO = {
  /* Transparent PNGs — mark sits directly on page bg, no container. */
  sage:  "assets/logomark-sage.png",
  cream: "assets/logomark-cream.png",
};

/* Photo slots — keyed to the SanctumSpace photography brief.
   When real images arrive, swap the placeholder render in PhotoPH
   for an <img> driven off the slot id below. Two slots used on
   the Partners page: a material study (Model panel) and a light
   study (Opportunity panel). */
const SLOTS = {
  "material-closeup-01": [
    "// CATEGORY 2 · MATERIAL CLOSE-UP · 01",
    "// raw plaster, brushed walnut, hand-finished brass, or woven linen",
    "// extreme close-up to mid-detail · honest, tactile, unstyled",
    "// low-angle directional warm light raking the surface",
    "// no plastic, no chrome · sits beside sage #5C6B5A cleanly",
  ].join("\n"),

  "light-study-02": [
    "// CATEGORY 3 · LIGHT STUDY · 02",
    "// curve of architectural form in shadow, or curtain catching dawn",
    "// abstract, brand-owned · no recognizable airport architecture",
    "// 2700–3200K · warm directional, raking angle preferred",
    "// 30/70 figure-to-space if subject present · otherwise pure texture",
    "// supports horizontal light-streak overlay treatment",
  ].join("\n"),
};

/* ── shared atoms ─────────────────────────────────────────── */

function Wordmark({ color = "currentColor", size = 22 }) {
  // 'Sanctum' regular + 'Space' bold italic, no separator. One lockup.
  return (
    <span style={{
      fontFamily: "var(--serif)", fontWeight: 400, fontSize: size,
      letterSpacing: "0.005em", color, lineHeight: 1, whiteSpace: "nowrap",
    }}>
      Sanctum<em style={{ fontStyle: "italic", fontWeight: 700 }}>Space</em>
    </span>
  );
}

function BrandLockup({ tone = "cream", size = 47 }) {
  // tone = page surface the lockup sits on.
  // 'cream' surface → sage mark + sage type. 'sage' surface → cream + cream.
  const fg = tone === "cream" ? "var(--sage)" : "var(--cream)";
  const src = tone === "cream" ? LOGO.sage : LOGO.cream;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, color: fg }}>
      <img src={src} alt="" style={{
        height: size, width: size, objectFit: "contain", background: "transparent",
      }} />
      <Wordmark color={fg} size={Math.round(size * 0.55)} />
    </div>
  );
}

function NavBar({ tone = "cream" }) {
  const fg = tone === "cream" ? "var(--sage)" : "var(--cream)";
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "32px 56px", color: fg,
    }}>
      <BrandLockup tone={tone} size={47} />
      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        <a className="nav-link" href="#" style={{ color: fg, opacity: 0.55 }}>The Pod</a>
        <a className="nav-link" href="#" style={{ color: fg }}>Partners</a>
        <a className="nav-link" href="#" style={{ color: fg, opacity: 0.55 }}>Why</a>
      </div>
    </nav>
  );
}

function NavBarMobile({ tone = "cream" }) {
  const fg = tone === "cream" ? "var(--sage)" : "var(--cream)";
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 24px", color: fg,
    }}>
      <BrandLockup tone={tone} size={40} />
      <span style={{
        fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.18em",
        textTransform: "uppercase", color: fg,
      }}>Menu</span>
    </nav>
  );
}

function Eyebrow({ children, color = "var(--ink-soft)", small = false }) {
  return (
    <div className="eyebrow" style={{ color, fontSize: small ? 10 : 11 }}>
      <span style={{
        display: "inline-block",
        width: small ? 22 : 32, height: 1,
        background: "currentColor", verticalAlign: "middle",
        marginRight: 14, opacity: 0.6,
      }} />
      {children}
    </div>
  );
}

/* Real-photo lookup. When a slot is populated here, PhotoPH renders
   an <img> sized to fill its parent (cover) instead of the placeholder
   treatment. Crop and composition are preserved by the parent div's
   existing width/height — we don't change layout, just swap pixels. */
const REALS = {
  "light-study-02": {
    src: "assets/photos/leather-shell.jpg",
    alt: "Cream nappa leather contoured into a brushed walnut chair shell — close-up edge view.",
    /* leather-shell is ultra-wide 3.2:1 going into a half-width plate
       (~660×720). Center-left framing keeps the curved walnut shoulder
       in view, which is the photo's strongest 'crafted object' cue. */
    objectPosition: "30% center",
  },
};

function PhotoPH({ tone = "warm", label, slot, style }) {
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
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 16, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.30,
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

/* ── 1. HERO ──────────────────────────────────────────────── */

function Hero({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="01 Hero" style={{
      position: "relative", width, background: "var(--cream)",
      paddingBottom: mobile ? 96 : 112,
    }}>
      {mobile ? <NavBarMobile tone="cream" /> : <NavBar tone="cream" />}

      <div style={{ padding: `${mobile ? 96 : 180}px ${px}px 0` }}>
        <Eyebrow color="var(--sage)" small={mobile}>Partnerships</Eyebrow>

        <h1 className="serif" style={{
          margin: mobile ? "28px 0 0" : "56px 0 0",
          fontSize: mobile ? 48 : 96,
          lineHeight: 0.98,
          color: "var(--sage)",
          fontWeight: 300,
          letterSpacing: "-0.014em",
          maxWidth: mobile ? "100%" : 1100,
          textWrap: "pretty",
        }}>
          Built with the people who <em style={{ fontWeight: 300 }}>define</em><br/>
          their categories.
        </h1>

        <p style={{
          margin: mobile ? "32px 0 0" : "56px 0 0",
          fontFamily: "var(--sans)", fontWeight: 400,
          fontSize: mobile ? 15 : 18,
          lineHeight: 1.55,
          color: "var(--ink-soft)",
          maxWidth: mobile ? "100%" : 540,
          letterSpacing: "0.005em",
        }}>
          SanctumSpace is a co-creation, not a vendor relationship.
        </p>
      </div>
    </section>
  );
}

/* ── 2. THE MODEL — single column, abstract ───────────────── */

/* Section divider — warmth treatment between cream sections.
   The cream-composite material image (smooth matte cream meeting brushed
   walnut) sits at low opacity behind the cream surface, reading as warmth
   without competing with body copy. Used at Hero→Model (both cream). */
function SectionDivider({ mobile = false }) {
  const h = mobile ? 64 : 96;
  return (
    <div aria-hidden="true" style={{
      position: "relative", width: "100%", height: h,
      background: "var(--cream)",
      overflow: "hidden",
    }}>
      {/* the photo itself, very low opacity, sepia-warm */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(assets/photos/cream-composite.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.18,
        mixBlendMode: "multiply",
      }} />
      {/* cream wash over top to push it back further — keeps the warmth
          without letting the texture compete with anything that sits next
          to the divider in scroll */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, var(--cream) 0%, rgba(245,239,230,0.55) 50%, var(--cream) 100%)",
      }} />
      {/* hairline at the bottom edge — preserves the divider rhythm the
          page already had via Model's borderTop, just relocated here */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        height: 1, background: "rgba(92,107,90,0.14)",
      }} />
    </div>
  );
}

function Model({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="02 Model" style={{
      position: "relative", width, background: "var(--cream)",
      padding: mobile ? `48px ${px}px 96px` : `84px ${px}px 180px`,
    }}>
      <Eyebrow color="var(--ink-soft)" small={mobile}>The model</Eyebrow>

      <h2 className="serif" style={{
        margin: mobile ? "24px 0 48px" : "40px 0 88px",
        fontSize: mobile ? 36 : 72,
        lineHeight: 1.0,
        color: "var(--ink)",
        fontWeight: 300,
        letterSpacing: "-0.014em",
        maxWidth: mobile ? "100%" : 980,
      }}>
        Two disciplines. <em style={{ fontWeight: 300 }}>One brief.</em>
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "minmax(0, 1.1fr) minmax(0, 0.9fr)",
        columnGap: 96,
      }}>
        <p style={{
          margin: 0,
          fontFamily: "var(--sans)", fontWeight: 400,
          fontSize: mobile ? 16 : 21,
          lineHeight: 1.55,
          color: "var(--ink)",
          letterSpacing: "0.005em",
          textWrap: "pretty",
        }}>
          SanctumSpace is built as a co-creation between two disciplines:
          solutions architecture and physical design. We hold the commercial
          model, the technology platform, the airport relationships, and the
          brand. Our design partner holds the physical pod, the materials, the
          sensory environment, and the cultural alignment to each airport we
          deploy in. Neither side is a vendor. Both names live on every pod
          we ship.
        </p>
      </div>
    </section>
  );
}

/* ── 3. THE OPPORTUNITY — sage panel, abstract ────────────── */

function Opportunity({ width = 1440, mobile = false }) {
  if (mobile) {
    return (
      <section data-screen-label="03 Opportunity" style={{
        position: "relative", width, background: "var(--sage)",
        color: "var(--cream)",
      }}>
        <div style={{ position: "relative", width: "100%", height: 320 }}>
          <PhotoPH
            tone="warm"
            slot="material-closeup-01"
            label={SLOTS["material-closeup-01"]}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="light-slash" style={{
            left: "-10%", right: "-10%", top: "44%", height: 12, transform: "rotate(-2deg)",
          }} />
        </div>
        <div style={{ padding: "56px 24px 80px" }}>
          <Eyebrow color="var(--sage-light)" small>The opportunity</Eyebrow>
          <h2 className="serif" style={{
            margin: "24px 0 40px",
            fontSize: 36,
            lineHeight: 0.98,
            color: "var(--cream)",
            fontWeight: 300,
            letterSpacing: "-0.014em",
          }}>
            The world's first premium airport pod <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>category.</em>
          </h2>
          <p style={{
            margin: 0,
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 14,
            lineHeight: 1.65, color: "rgba(245,239,230,0.82)",
            letterSpacing: "0.005em",
            textWrap: "pretty",
          }}>
            Global airports are designing for the next generation of traveler —
            premium, connected, demanding control over their own time. The pod
            category is unclaimed. We are building it with airport partners now,
            in alignment with the architectural and cultural language of each
            terminal. Flagship deployments scheduled for 2027.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section data-screen-label="03 Opportunity" style={{
      position: "relative", width, background: "var(--sage)",
      color: "var(--cream)",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
      minHeight: 720,
    }}>
      {/* left: copy */}
      <div style={{ padding: "140px 56px 140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Eyebrow color="var(--sage-light)">The opportunity</Eyebrow>
          <h2 className="serif" style={{
            margin: "48px 0 56px",
            fontSize: 76,
            lineHeight: 0.96,
            color: "var(--cream)",
            fontWeight: 300,
            letterSpacing: "-0.016em",
            maxWidth: 600,
            textWrap: "pretty",
          }}>
            The world's first premium airport pod <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>category.</em>
          </h2>
          <p style={{
            margin: 0,
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 17,
            lineHeight: 1.6, color: "rgba(245,239,230,0.82)",
            maxWidth: 480,
            letterSpacing: "0.005em",
            textWrap: "pretty",
          }}>
            Global airports are designing for the next generation of traveler —
            premium, connected, demanding control over their own time. The pod
            category is unclaimed. We are building it with airport partners now,
            in alignment with the architectural and cultural language of each
            terminal. Flagship deployments scheduled for 2027.
          </p>
        </div>
      </div>

      {/* right: photo plate w/ light slash */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <PhotoPH
          tone="warm"
          slot="light-study-02"
          label={SLOTS["light-study-02"]}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 18, transform: "rotate(-2deg)",
        }} />
      </div>
    </section>
  );
}

/* ── 4. THE INVITATION ────────────────────────────────────── */

function Invitation({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="04 Invitation" style={{
      position: "relative", width, background: "var(--sage)",
      color: "var(--cream)",
      padding: mobile ? `96px ${px}px` : `200px ${px}px 180px`,
      overflow: "hidden",
      borderTop: "1px solid rgba(245,239,230,0.12)",
    }}>
      <div className="halo" style={{
        width: mobile ? 360 : 720,
        height: mobile ? 360 : 720,
        right: mobile ? -160 : -240,
        top: mobile ? -80 : -120,
        opacity: 0.55,
      }} />

      <div style={{ position: "relative" }}>
        <Eyebrow color="var(--sage-light)" small={mobile}>The invitation</Eyebrow>
        <h2 className="serif" style={{
          margin: mobile ? "32px 0 56px" : "56px 0 96px",
          fontSize: mobile ? 40 : 88,
          lineHeight: 0.98,
          color: "var(--cream)",
          fontWeight: 300, letterSpacing: "-0.016em",
          maxWidth: mobile ? "100%" : 1080,
          textWrap: "balance",
        }}>
          The pod category is unclaimed.<br/>
          <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>Let's own it together.</em>
        </h2>

        <div style={{
          display: mobile ? "block" : "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 64,
          borderTop: "1px solid rgba(245,239,230,0.18)",
          paddingTop: mobile ? 32 : 48,
        }}>
          <div style={{
            fontFamily: "var(--sans)", fontWeight: 400,
            fontSize: mobile ? 13 : 16,
            color: "rgba(245,239,230,0.82)",
            lineHeight: 1.7, letterSpacing: "0.005em",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}>
            <div className="serif" style={{
              fontFamily: "var(--serif)", fontWeight: 400,
              fontSize: mobile ? 22 : 26, color: "var(--cream)",
              marginBottom: 8, letterSpacing: "0.005em",
            }}>
              Juriana Spierenburg
            </div>
            Founder &amp; CEO, SanctumSpace<br/>
            juriana@sanctum-space.com<br/>
            +1 (646) 599-4535
          </div>

          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 16,
            marginTop: mobile ? 40 : 0,
            padding: mobile ? "18px 28px" : "22px 36px",
            background: "var(--cream)",
            color: "var(--sage)",
            fontFamily: "var(--sans)", fontWeight: 500,
            fontSize: mobile ? 13 : 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: 0,
            whiteSpace: "nowrap",
          }}>
            Begin a conversation
            <span style={{ display: "inline-block", width: 28, height: 1, background: "currentColor" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */

function Footer({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <footer style={{
      width, background: "var(--cream)",
      padding: mobile ? `40px ${px}px` : `48px ${px}px`,
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: mobile ? "flex-start" : "center",
      gap: mobile ? 16 : 0,
      color: "var(--ink-soft)",
      borderTop: "1px solid rgba(92,107,90,0.14)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={LOGO.sage} alt="" style={{ height: 24, width: 24, objectFit: "contain", opacity: 0.7, background: "transparent" }} />
        <span style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: 14,
          letterSpacing: "0.005em", color: "var(--ink-soft)", lineHeight: 1,
        }}>
          Sanctum<em style={{ fontStyle: "italic", fontWeight: 700 }}>Space</em>
          <span style={{ opacity: 0.6, fontStyle: "normal", fontWeight: 400 }}> · © 2026</span>
        </span>
      </div>
      <div style={{
        fontFamily: "var(--sans)", fontSize: 11,
        letterSpacing: "0.06em", color: "rgba(74,74,72,0.55)",
      }}>
        info@sanctum-space.com
      </div>
    </footer>
  );
}

/* ── PAGES ────────────────────────────────────────────────── */

function PartnersDesktop() {
  const W = 1440;
  return (
    <div style={{ width: W, background: "var(--sage)" }}>
      <Hero width={W} />
      <SectionDivider />
      <Model width={W} />
      <Opportunity width={W} />
      <Invitation width={W} />
    </div>
  );
}

function PartnersMobile() {
  const W = 390;
  return (
    <div style={{ width: W, background: "var(--sage)" }}>
      <Hero width={W} mobile />
      <SectionDivider mobile />
      <Model width={W} mobile />
      <Opportunity width={W} mobile />
      <Invitation width={W} mobile />
    </div>
  );
}

Object.assign(window, { PartnersDesktop, PartnersMobile });
