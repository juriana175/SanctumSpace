/* SanctumSpace — Partners page
 * Locked direction: Architectural (Direction 02).
 * Sage primary, cream ground, Cormorant Garamond display, Inter body.
 * Restrained, single-direction, partner-facing.
 */

const LOGO = {
  sageOnCream: "assets/logo-sage-on-cream.png",
  stoneOnSage: "assets/logo-stone-on-sage.png",
  sandOnWhite: "assets/logo-sand-on-white.png",
};

/* ── shared atoms ─────────────────────────────────────────── */

function Wordmark({ color = "currentColor" }) {
  return (
    <span className="wordmark" style={{
      fontFamily: "var(--serif)", fontWeight: 400, fontSize: 16,
      letterSpacing: "0.02em", color,
    }}>
      Sanctum<em style={{ fontStyle: "italic", fontWeight: 300 }}>&nbsp;Space</em>
    </span>
  );
}

function NavBar({ tone = "cream" }) {
  // tone: 'cream' (sage on cream) or 'sage' (cream on sage)
  const fg = tone === "cream" ? "var(--sage)" : "var(--cream)";
  const logoSrc = tone === "cream" ? LOGO.sageOnCream : LOGO.stoneOnSage;
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "32px 56px", color: fg,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={logoSrc} alt="" style={{ height: 28, width: 28, objectFit: "contain" }} />
        <Wordmark color={fg} />
      </div>
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
  const logoSrc = tone === "cream" ? LOGO.sageOnCream : LOGO.stoneOnSage;
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 24px", color: fg,
    }}>
      <img src={logoSrc} alt="" style={{ height: 24, width: 24, objectFit: "contain" }} />
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

function PhotoPH({ tone = "warm", label, style }) {
  return (
    <div className="photo-ph" data-tone={tone} style={style}>
      <div className="ph-label">{label}</div>
    </div>
  );
}

/* Refined Cormorant wordmark used for partner names where no logo is available */
function PartnerMark({ name, tone = "ink" }) {
  const color = tone === "ink" ? "var(--ink)" : "var(--cream)";
  return (
    <span className="serif" style={{
      fontFamily: "var(--serif)", fontWeight: 400, fontStyle: "normal",
      fontSize: 28, letterSpacing: "0.005em", color,
      lineHeight: 1, display: "inline-block",
    }}>
      {name}
    </span>
  );
}

/* ── HERO ─────────────────────────────────────────────────── */

function Hero({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="01 Hero" style={{
      position: "relative", width, background: "var(--cream)",
      paddingBottom: mobile ? 96 : 160,
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

/* ── 2. THE PARTNERSHIP MODEL ─────────────────────────────── */

function ModelColumn({ title, lines, mobile }) {
  return (
    <div>
      <div className="serif" style={{
        fontFamily: "var(--serif)", fontWeight: 400,
        fontSize: mobile ? 24 : 28,
        color: "var(--sage)",
        letterSpacing: "-0.005em",
        marginBottom: mobile ? 24 : 36,
        lineHeight: 1.15,
      }}>
        {title}
      </div>
      <ul style={{
        listStyle: "none", margin: 0, padding: 0,
        borderTop: "1px solid rgba(92,107,90,0.18)",
      }}>
        {lines.map((line, i) => (
          <li key={i} style={{
            fontFamily: "var(--sans)", fontWeight: 400,
            fontSize: mobile ? 14 : 15,
            color: "var(--ink)",
            padding: mobile ? "16px 0" : "20px 0",
            borderBottom: "1px solid rgba(92,107,90,0.18)",
            letterSpacing: "0.005em",
            lineHeight: 1.45,
          }}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function PartnershipModel({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="02 Model" style={{
      position: "relative", width, background: "var(--cream)",
      padding: mobile ? `48px ${px}px 96px` : `120px ${px}px 160px`,
      borderTop: "1px solid rgba(92,107,90,0.14)",
    }}>
      <Eyebrow color="var(--ink-soft)" small={mobile}>The model</Eyebrow>

      <h2 className="serif" style={{
        margin: mobile ? "24px 0 56px" : "40px 0 96px",
        fontSize: mobile ? 36 : 64,
        lineHeight: 1.0,
        color: "var(--ink)",
        fontWeight: 300,
        letterSpacing: "-0.012em",
        maxWidth: mobile ? "100%" : 920,
      }}>
        Two firms. <em style={{ fontWeight: 300 }}>One brief.</em>
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 56 : 96,
      }}>
        <ModelColumn
          mobile={mobile}
          title={<>SanctumSpace<br/>— <em style={{ fontStyle: "italic", color: "var(--ink-soft)" }}>Solutions Architect</em></>}
          lines={[
            "Market strategy and commercial model",
            "KSIA relationship and negotiations",
            "Booking app and technology platform",
            "Brand, marketing, and operations",
          ]}
        />
        <ModelColumn
          mobile={mobile}
          title={<>Teague<br/>— <em style={{ fontStyle: "italic", color: "var(--ink-soft)" }}>Design Partner</em></>}
          lines={[
            "Physical pod design across all three tiers",
            "Materials, finish, and sensory environment",
            "In-pod UX: lighting, climate, scent",
            "KSIA cultural and architectural alignment",
          ]}
        />
      </div>

      <div style={{
        marginTop: mobile ? 56 : 96,
        textAlign: "center",
        fontFamily: "var(--serif)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: mobile ? 16 : 19,
        color: "var(--ink-soft)",
        letterSpacing: "0.005em",
        lineHeight: 1.5,
      }}>
        SanctumSpace, Designed with Teague — co-branded on every pod deployed, globally.
      </div>
    </section>
  );
}

/* ── 3. THE FLAGSHIP — KSIA ───────────────────────────────── */

function Flagship({ width = 1440, mobile = false }) {
  if (mobile) {
    return (
      <section data-screen-label="03 Flagship KSIA" style={{
        position: "relative", width, background: "var(--sage)",
        color: "var(--cream)",
      }}>
        <div style={{ position: "relative", width: "100%", height: 320 }}>
          <PhotoPH
            tone="warm"
            label={"// RENDERING\n// KSIA pod, exterior\n// Foster + Partners alignment\n// directional warm light"}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="light-slash" style={{
            left: "-10%", right: "-10%", top: "44%", height: 12, transform: "rotate(-2deg)",
          }} />
        </div>
        <div style={{ padding: "56px 24px 72px" }}>
          <Eyebrow color="var(--sage-light)" small>Flagship deployment</Eyebrow>
          <h2 className="serif" style={{
            margin: "24px 0 32px",
            fontSize: 36,
            lineHeight: 0.98,
            color: "var(--cream)",
            fontWeight: 300,
            letterSpacing: "-0.014em",
          }}>
            King Salman<br/>International<br/>Airport.<br/>
            <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>Opening 2027.</em>
          </h2>
          <p style={{
            margin: 0,
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 14,
            lineHeight: 1.65, color: "rgba(245,239,230,0.82)",
            letterSpacing: "0.005em",
            textWrap: "pretty",
          }}>
            KSIA is the launch site for the world's first premium airport pod category.
            The deployment is co-designed in alignment with Foster + Partners' terminal
            architecture, co-branded with KSIA, and operated under a revenue-share model
            in which KSIA carries no infrastructure cost.
          </p>
          <div style={{
            marginTop: 32, fontFamily: "var(--mono)", fontSize: 10,
            letterSpacing: "0.06em", color: "rgba(245,239,230,0.55)",
          }}>
            120M+ passengers/yr · Riyadh
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-screen-label="03 Flagship KSIA" style={{
      position: "relative", width, background: "var(--sage)",
      color: "var(--cream)",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
      minHeight: 720,
    }}>
      {/* left: copy */}
      <div style={{ padding: "140px 56px 120px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Eyebrow color="var(--sage-light)">Flagship deployment</Eyebrow>
          <h2 className="serif" style={{
            margin: "48px 0 56px",
            fontSize: 76,
            lineHeight: 0.96,
            color: "var(--cream)",
            fontWeight: 300,
            letterSpacing: "-0.016em",
          }}>
            King Salman<br/>International Airport.<br/>
            <em style={{ fontWeight: 300, color: "var(--accent-soft)" }}>Opening 2027.</em>
          </h2>
          <p style={{
            margin: 0,
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 17,
            lineHeight: 1.6, color: "rgba(245,239,230,0.82)",
            maxWidth: 460,
            letterSpacing: "0.005em",
            textWrap: "pretty",
          }}>
            KSIA is the launch site for the world's first premium airport pod
            category. The deployment is co-designed in alignment with Foster +
            Partners' terminal architecture, co-branded with KSIA, and operated
            under a revenue-share model in which KSIA carries no infrastructure
            cost.
          </p>
        </div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 10,
          letterSpacing: "0.08em", color: "rgba(245,239,230,0.55)",
        }}>
          120M+ passengers/yr &nbsp;·&nbsp; Riyadh &nbsp;·&nbsp; Foster + Partners
        </div>
      </div>

      {/* right: photo plate w/ light slash */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <PhotoPH
          tone="warm"
          label={"// ARCHITECTURAL RENDERING\n// KSIA terminal, pod cluster in volume\n// Foster + Partners alignment, daylit interior\n// hard directional warm light from above\n// 30/70 figure-to-space"}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 18, transform: "rotate(-2deg)",
        }} />
        <div style={{
          position: "absolute", right: 28, bottom: 28,
          fontFamily: "var(--mono)", fontSize: 10,
          letterSpacing: "0.06em", color: "rgba(245,239,230,0.65)",
        }}>
          KSIA · Tier 03 · Concept
        </div>
      </div>
    </section>
  );
}

/* ── 4. STRATEGIC ADVISOR — MICHAEL LEVIE ─────────────────── */

function Advisor({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  if (mobile) {
    return (
      <section data-screen-label="04 Advisor" style={{
        position: "relative", width, background: "var(--cream)",
        padding: "96px 24px",
      }}>
        <Eyebrow color="var(--ink-soft)" small>Strategic advisor</Eyebrow>
        <div style={{ height: 320, marginTop: 32 }}>
          <PhotoPH
            tone="cream"
            label={"// PORTRAIT\n// Michael Levie, hospitality\n// quiet 3/4, warm directional"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h3 className="serif" style={{
          margin: "40px 0 28px", fontSize: 40, lineHeight: 1.0,
          color: "var(--ink)", fontWeight: 400, letterSpacing: "-0.008em",
        }}>
          Michael Levie
        </h3>
        <div style={{
          fontFamily: "var(--sans)", fontWeight: 400, fontSize: 14,
          color: "var(--ink-soft)", lineHeight: 1.7, letterSpacing: "0.005em",
          borderTop: "1px solid rgba(92,107,90,0.18)",
          paddingTop: 20,
        }}>
          Co-Founder &amp; COO, citizenM Hotels (17 years)<br/>
          Strategic Advisor, NEOM Hospitality Development<br/>
          Co-Founder, KUBE Ventures
        </div>
        <blockquote className="serif" style={{
          margin: "40px 0 0", padding: 0,
          fontStyle: "italic", fontWeight: 300, fontSize: 22,
          lineHeight: 1.35, color: "var(--sage)",
          letterSpacing: "0.005em", textWrap: "pretty",
        }}>
          “citizenM is the proof of concept for what we're building at airport scale.”
        </blockquote>
      </section>
    );
  }

  return (
    <section data-screen-label="04 Advisor" style={{
      position: "relative", width, background: "var(--cream)",
      padding: `160px ${px}px`,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
        gap: 96,
        alignItems: "start",
      }}>
        <div style={{ height: 540 }}>
          <PhotoPH
            tone="cream"
            label={"// PORTRAIT\n// Michael Levie\n// quiet 3/4 portrait\n// warm directional light\n// architectural backdrop, blurred"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ paddingTop: 24 }}>
          <Eyebrow color="var(--ink-soft)">Strategic advisor</Eyebrow>
          <h3 className="serif" style={{
            margin: "48px 0 40px", fontSize: 72, lineHeight: 0.98,
            color: "var(--ink)", fontWeight: 400, letterSpacing: "-0.012em",
          }}>
            Michael Levie
          </h3>
          <div style={{
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 16,
            color: "var(--ink-soft)", lineHeight: 1.85,
            letterSpacing: "0.005em",
            borderTop: "1px solid rgba(92,107,90,0.18)",
            paddingTop: 24,
            maxWidth: 480,
          }}>
            Co-Founder &amp; COO, citizenM Hotels (17 years)<br/>
            Strategic Advisor, NEOM Hospitality Development<br/>
            Co-Founder, KUBE Ventures
          </div>
          <blockquote className="serif" style={{
            margin: "64px 0 0", padding: 0,
            fontStyle: "italic", fontWeight: 300, fontSize: 32,
            lineHeight: 1.3, color: "var(--sage)",
            letterSpacing: "0.005em", maxWidth: 580,
            textWrap: "pretty",
          }}>
            “citizenM is the proof of concept for what we're building at airport scale.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ── 5. ACTIVE PARTNERSHIPS ───────────────────────────────── */

const PARTNERS = [
  { name: "King Salman Int'l", line: "NDA in place. Vendor registered. Q2 2026 budget confirmation pending." },
  { name: "Teague",             line: "Design partner. Aerospace, transit, and advanced technology heritage." },
  { name: "Sea-Tac Airport",    line: "In active discussions." },
  { name: "Alaska Airlines",    line: "Conversations underway." },
  { name: "American Express",   line: "Premium cardholder partnership scoping." },
];

function PartnersStrip({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="05 Partners" style={{
      position: "relative", width, background: "var(--cream)",
      padding: mobile ? `48px ${px}px 96px` : `40px ${px}px 160px`,
      borderTop: "1px solid rgba(92,107,90,0.14)",
    }}>
      <Eyebrow color="var(--ink-soft)" small={mobile}>Active partnerships</Eyebrow>
      <h2 className="serif" style={{
        margin: mobile ? "24px 0 48px" : "40px 0 96px",
        fontSize: mobile ? 36 : 64,
        lineHeight: 1.0, color: "var(--ink)",
        fontWeight: 300, letterSpacing: "-0.012em",
        maxWidth: mobile ? "100%" : 900,
      }}>
        The room we're <em style={{ fontWeight: 300 }}>building.</em>
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        columnGap: 96,
        rowGap: 0,
      }}>
        {PARTNERS.map((p, i) => (
          <div key={p.name} style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "minmax(220px, 1fr) minmax(0, 1.4fr)",
            alignItems: "baseline",
            columnGap: 48,
            padding: mobile ? "24px 0" : "32px 0",
            borderTop: "1px solid rgba(92,107,90,0.18)",
            borderBottom: i >= PARTNERS.length - (mobile ? 1 : 2) ? "1px solid rgba(92,107,90,0.18)" : "none",
          }}>
            <PartnerMark name={p.name} />
            <div style={{
              fontFamily: "var(--sans)", fontWeight: 400,
              fontSize: mobile ? 13 : 14,
              color: "var(--ink-soft)",
              lineHeight: 1.5,
              letterSpacing: "0.005em",
              marginTop: mobile ? 12 : 0,
              textWrap: "pretty",
            }}>
              {p.line}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 6. THE INVITATION ────────────────────────────────────── */

function Invitation({ width = 1440, mobile = false }) {
  const px = mobile ? 24 : 56;
  return (
    <section data-screen-label="06 Invitation" style={{
      position: "relative", width, background: "var(--sage)",
      color: "var(--cream)",
      padding: mobile ? `96px ${px}px` : `200px ${px}px 180px`,
      overflow: "hidden",
    }}>
      {/* subtle warm halo, far right edge */}
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
            fontSize: mobile ? 14 : 16,
            color: "rgba(245,239,230,0.82)",
            lineHeight: 1.7, letterSpacing: "0.005em",
          }}>
            <div className="serif" style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: mobile ? 22 : 26, color: "var(--cream)", marginBottom: 8, letterSpacing: "0.005em" }}>
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
        <img src={LOGO.sageOnCream} alt="" style={{ height: 20, width: 20, objectFit: "contain", opacity: 0.7 }} />
        <span style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: 13,
          color: "var(--ink-soft)",
        }}>
          Sanctum<em style={{ fontStyle: "italic", fontWeight: 300 }}>&nbsp;Space</em> · © 2026
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
    <div style={{ width: W, background: "var(--cream)" }}>
      <Hero width={W} />
      <PartnershipModel width={W} />
      <Flagship width={W} />
      <Advisor width={W} />
      <PartnersStrip width={W} />
      <Invitation width={W} />
      <Footer width={W} />
    </div>
  );
}

function PartnersMobile() {
  const W = 390;
  return (
    <div style={{ width: W, background: "var(--cream)" }}>
      <Hero width={W} mobile />
      <PartnershipModel width={W} mobile />
      <Flagship width={W} mobile />
      <Advisor width={W} mobile />
      <PartnersStrip width={W} mobile />
      <Invitation width={W} mobile />
      <Footer width={W} mobile />
    </div>
  );
}

Object.assign(window, { PartnersDesktop, PartnersMobile });
