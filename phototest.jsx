/* PhotoTest — reference photos rendered into each artboard slot.
 *
 * Six references uploaded April 2026. Each composite shows:
 *   1. The reference full-frame (so you can see what's in the photo)
 *   2. The reference cropped to slot dimensions, sitting next to the
 *      brand sage panel exactly as it would on the real page —
 *      so you can judge whether it 'holds against sage' per the brief.
 *
 * Slots tested:
 *   light-study-01      — HeroTwo full-bleed right (835×900 desktop)
 *   light-study-02      — Partners Opportunity right plate (~660×500)
 *   material-closeup-01 — Partners Model panel banner (1328×320)
 *
 * No figure-stillness slots tested — those need a real shoot per brief.
 */

const PHOTOS = [
  { id: "wall-wash",        file: "assets/photos/wall-wash.jpg",        label: "Wall wash · 2700K emerging glow",   cat: 3, native: "16:9"  },
  { id: "sage-wool",        file: "assets/photos/sage-wool.jpg",        label: "Sage wool · folded macro",          cat: 2, native: "16:9"  },
  { id: "leather-shell",    file: "assets/photos/leather-shell.jpg",    label: "Cream nappa · walnut shell",        cat: 2, native: "3.2:1" },
  { id: "cream-composite",  file: "assets/photos/cream-composite.jpg",  label: "Cream composite · meeting walnut",  cat: 2, native: "3.2:1" },
  { id: "leather-seam",     file: "assets/photos/leather-seam.jpg",     label: "Cream nappa · seam on walnut",      cat: 2, native: "3.2:1" },
];

/* ── tiny helpers ─────────────────────────────────────────── */

function PhotoCard({ src, label, w, h, captionTone = "ink" }) {
  const captionColor = captionTone === "cream" ? "rgba(245,239,230,0.7)" : "var(--ink-soft)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: w }}>
      <div style={{
        width: w, height: h,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1c1814",
        position: "relative",
      }}>
        {/* light-streak overlay — same treatment as hero photos */}
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "44%", height: 16, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.38,
        }} />
      </div>
      <div style={{
        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em",
        color: captionColor, textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}

function FullFrame({ src, label }) {
  // Show the reference at intrinsic-ish proportions, max 360 wide
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 360 }}>
      <img src={src} alt="" style={{
        width: 360, height: "auto", display: "block",
        background: "#1c1814",
      }} />
      <div style={{
        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em",
        color: "var(--ink-soft)", textTransform: "uppercase",
      }}>
        Full frame · {label}
      </div>
    </div>
  );
}

/* ── slot composites ──────────────────────────────────────── */

/* light-study-01 — HeroTwo full-bleed right (58% of 1440 = 835×900).
   Sits beside a sage panel on the LEFT (with the giant 'Designed for'
   serif tagline). Photo bleeds to right edge. */
function Slot_LightStudy01({ photo }) {
  return (
    <div className="device" style={{ width: 1440, height: 900, background: "var(--sage)", position: "relative", overflow: "hidden" }}>
      {/* sage panel left — exact replica of HeroTwo */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "42%", padding: "260px 0 0 56px" }}>
        <div className="eyebrow" style={{ color: "var(--sage-light)", marginBottom: 60 }}>
          <span style={{ display: "inline-block", width: 32, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 14, opacity: 0.6 }} />
          The architecture of stillness
        </div>
        <h1 className="serif" style={{
          fontSize: 132, lineHeight: 0.92, margin: 0, color: "var(--cream)",
          fontWeight: 300, letterSpacing: "-0.02em",
        }}>
          Designed<br/>for the<br/><em style={{ fontWeight: 300 }}>moments</em><br/>between.
        </h1>
      </div>
      {/* photo plate right — 58% width, full height */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "58%", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${photo.file})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 18, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.42,
        }} />
      </div>
    </div>
  );
}

/* light-study-02 — Partners Opportunity right plate.
   Sits beside body copy on cream ground. Photo plate ~660×500. */
function Slot_LightStudy02({ photo }) {
  return (
    <div className="device" style={{
      width: 1440, height: 720, background: "var(--cream)",
      display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch",
    }}>
      <div style={{ padding: "120px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="eyebrow" style={{ color: "var(--ink-soft)", marginBottom: 32 }}>
          <span style={{ display: "inline-block", width: 32, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 14, opacity: 0.6 }} />
          The opportunity
        </div>
        <h2 className="serif" style={{
          fontSize: 64, lineHeight: 1.02, margin: "0 0 32px",
          color: "var(--sage)", fontWeight: 400, letterSpacing: "-0.012em",
        }}>
          A new category,<br/>quietly defined.
        </h2>
        <p style={{
          fontFamily: "var(--sans)", fontSize: 16, lineHeight: 1.7,
          color: "var(--ink)", maxWidth: 460, margin: 0,
        }}>
          The pod category is unclaimed. We are building it with airport
          partners now, in alignment with the architectural and cultural
          language of each terminal.
        </p>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${photo.file})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "46%", height: 18, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.4,
        }} />
      </div>
    </div>
  );
}

/* material-closeup-01 — Partners Model panel banner.
   Wide, short — texture as backdrop. ~1328×320. */
function Slot_MaterialCloseup01({ photo }) {
  return (
    <div className="device" style={{
      width: 1440, height: 560, background: "var(--cream)", padding: "56px 56px",
    }}>
      <div className="eyebrow" style={{ color: "var(--ink-soft)", marginBottom: 32 }}>
        <span style={{ display: "inline-block", width: 32, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 14, opacity: 0.6 }} />
        The model
      </div>
      <h2 className="serif" style={{
        fontSize: 56, lineHeight: 1.02, margin: "0 0 40px",
        color: "var(--sage)", fontWeight: 400, letterSpacing: "-0.012em",
      }}>
        Co-creation, not vendor.
      </h2>
      <div style={{
        width: "100%", height: 320, position: "relative", overflow: "hidden",
        backgroundImage: `url(${photo.file})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="light-slash" style={{
          left: "-10%", right: "-10%", top: "44%", height: 14, transform: "rotate(-2deg)",
          mixBlendMode: "screen", opacity: 0.32,
        }} />
      </div>
    </div>
  );
}

/* ── reference grid ───────────────────────────────────────── */

function ReferenceGrid() {
  return (
    <div style={{
      width: 1440, padding: "56px",
      background: "var(--cream)",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
    }}>
      {PHOTOS.map(p => (
        <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <img src={p.file} alt="" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
            <span style={{
              fontFamily: "var(--serif)", fontSize: 18, color: "var(--sage)",
              letterSpacing: "0.005em",
            }}>
              {p.label}
            </span>
            <span style={{
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em",
              color: "var(--ink-soft)", textTransform: "uppercase",
            }}>
              Cat {p.cat} · {p.native} · {p.id}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* expose */
Object.assign(window, {
  PHOTOS,
  Slot_LightStudy01, Slot_LightStudy02, Slot_MaterialCloseup01,
  ReferenceGrid,
});
