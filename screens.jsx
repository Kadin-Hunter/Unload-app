// screens.jsx — UNLOAD product screens (variant-agnostic).
// Every screen reads --vars from its container's data-variant.
// Composed: MobileCapture, MobileDetail, DesktopDashboard, DesktopComposer.

// ─────────────────────────────────────────────────────────────
// Tiny icon set (line, currentColor)
// ─────────────────────────────────────────────────────────────
const Icon = {
  scan:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8V4h4M21 8V4h-4M3 16v4h4M21 16v4h-4M7 12h10"/></svg>,
  spark:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="currentColor"><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"/></svg>,
  bolt:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>,
  flash:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L5 14h6l-1 8 9-12h-6z"/></svg>,
  close:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  chev:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l6 6-6 6"/></svg>,
  chevL:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6"/></svg>,
  search:  (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></svg>,
  plus:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>,
  share:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 11l8-4M8 13l8 4"/></svg>,
  edit:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 4l6 6-10 10H4v-6z"/></svg>,
  check:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5 9-11"/></svg>,
  inv:     (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9-4 9 4M3 7v10l9 4M3 7l9 4M21 7v10l-9 4M21 7l-9 4M12 11v10"/></svg>,
  list:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1.2" fill="currentColor"/><circle cx="4" cy="12" r="1.2" fill="currentColor"/><circle cx="4" cy="18" r="1.2" fill="currentColor"/></svg>,
  cash:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="12"/><circle cx="12" cy="12" r="2.5"/></svg>,
  msg:     (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v12H8l-4 4z"/></svg>,
  cog:     (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/></svg>,
  truck:   (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="12" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>,
  unit:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="14"/><path d="M3 10h18M8 6V4h8v2"/></svg>,
  ebay:    (p) => <svg viewBox="0 0 64 24" width={p.s||56} height={(p.s||56)*24/64}><text x="0" y="20" fontFamily="Archivo" fontWeight="900" fontSize="22" fill="currentColor" letterSpacing="-0.04em">eb<tspan fill="#E53238">a</tspan><tspan fill="#0064D2">y</tspan></text></svg>,
};

// ─────────────────────────────────────────────────────────────
// Common bits
// ─────────────────────────────────────────────────────────────
function Pill({ children, fill, accent, soft, style }) {
  const cls = ['chip', fill && 'chip-fill', accent && 'chip-accent', soft && 'chip-soft'].filter(Boolean).join(' ');
  return <span className={cls} style={style}>{children}</span>;
}

function ConfDot({ v, size = 8 }) {
  const col = v >= 90 ? 'var(--ok)' : v >= 80 ? 'var(--accent)' : 'var(--warn)';
  return <span className="dot" style={{ background: col, width: size, height: size }} />;
}

function StatusBadge({ status }) {
  const map = {
    draft: { label: 'DRAFT', fg: 'var(--muted)', bg: 'var(--surface-2)', bd: 'var(--line-soft)' },
    live:  { label: 'LIVE',  fg: 'var(--accent-fg)', bg: 'var(--accent)', bd: 'var(--accent)' },
    sold:  { label: 'SOLD',  fg: 'var(--bg)', bg: 'var(--ink)', bd: 'var(--ink)' },
  };
  const s = map[status];
  return (
    <span style={{
      fontFamily: 'var(--label)', fontWeight: 700, fontSize: 10,
      letterSpacing: '0.08em', padding: '3px 6px',
      color: s.fg, background: s.bg, border: `1px solid ${s.bd}`,
      display: 'inline-flex', alignItems: 'center', gap: 4,
    }}>{s.label}</span>
  );
}

function TickChart({ low, high, price, comps = 18, height = 36 }) {
  // simulated histogram of comp prices
  const seed = (price * 9301 + 49297) % 233280;
  const ticks = Array.from({ length: comps }, (_, i) => {
    const r = ((seed + i * 12345) % 1000) / 1000;
    const v = low + (high - low) * (0.5 + (r - 0.5) * 1.2);
    const h = 10 + ((seed + i * 7) % 100) / 100 * (height - 12);
    return { v, h };
  });
  return (
    <div style={{ position: 'relative', height, paddingTop: 4 }}>
      <div className="ticks" style={{ height }}>
        {ticks.map((t, i) => {
          const left = ((t.v - low) / (high - low)) * 100;
          return <span key={i} className="tk" style={{ left: `${left}%`, height: t.h }} />;
        })}
        <span className="tk ours" style={{
          left: `${((price - low) / (high - low)) * 100}%`, height: height,
        }} />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', marginTop: 4,
      }}>
        <span>${low}</span>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>OURS · ${price}</span>
        <span>${high}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 1) MOBILE — CAPTURE
// ─────────────────────────────────────────────────────────────
function MobileCapture() {
  return (
    <div className="app" style={{ background: '#0a0806', color: '#fff' }}>
      <div className="cam" />
      <div className="cam-grain" />

      {/* subtle frame in camera view */}
      <CamReticle />

      {/* faint item silhouettes living in the unit */}
      <CamScene />

      {/* TOP STATUS */}
      <div style={{
        position: 'absolute', top: 56, left: 12, right: 12,
        display: 'flex', alignItems: 'center', gap: 8, color: '#fff',
      }}>
        <button style={camIconBtn}><Icon.close s={18}/></button>
        <div style={{
          flex: 1,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.18)',
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="dot" style={{ background: '#46b377', boxShadow: '0 0 8px #46b377' }} />
            <span className="label" style={{ fontSize: 10, color: '#fff' }}>UNIT 14 · BACK CORNER</span>
          </div>
          <span className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>17 TODAY</span>
        </div>
        <button style={camIconBtn}><Icon.flash s={16}/></button>
      </div>

      {/* AI banner */}
      <div style={{
        position: 'absolute', top: 132, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{
          background: 'var(--accent)', color: 'var(--accent-fg)',
          padding: '7px 14px', display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--label)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em',
          border: '1.5px solid var(--accent)',
        }}>
          <span style={{ display: 'inline-flex' }}><Icon.spark s={12}/></span>
          AI · 3 ITEMS DETECTED
        </div>
      </div>

      {/* labels on visible items */}
      <FloatTag x={32} y={232} label="Brass floor lamp" price={145} conf={92} />
      <FloatTag x={196} y={310} label="Wool throw" price={38} conf={87} side="right" />
      <FloatTag x={88} y={400} label="Zenith radio" price={65} conf={79} />

      {/* BOTTOM PANEL */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'var(--bg)', color: 'var(--ink)',
        borderTop: 'var(--line-w-strong) solid var(--line)',
        padding: '14px 14px 36px',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <span className="label">In this frame</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>HOLD STEADY · TAP TO ADJUST</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {DETECTED.map(d => (
            <div key={d.id} style={{
              flex: 1, background: 'var(--surface)',
              border: 'var(--line-w) solid var(--line)',
              padding: 8, display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{ position: 'relative' }}>
                <PhotoTile item={d} size={88} />
                <div style={{
                  position: 'absolute', top: 4, right: 4,
                  background: 'rgba(0,0,0,0.7)', color: '#fff',
                  fontFamily: 'var(--mono)', fontSize: 10, padding: '2px 5px',
                }}>{d.conf}%</div>
              </div>
              <div style={{ fontFamily: 'var(--body)', fontWeight: 600, fontSize: 11.5, lineHeight: 1.2 }}>{d.title}</div>
              <div className="mono" style={{ fontSize: 13, fontWeight: 600, color: 'var(--price)' }}>${d.price}</div>
            </div>
          ))}
        </div>
        <button className="btn btn-accent btn-block" style={{
          padding: '16px', fontSize: 15, justifyContent: 'space-between',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon.plus s={18}/> ADD 3 ITEMS
          </span>
          <span className="mono" style={{ fontSize: 16 }}>+ $248 EST.</span>
        </button>
      </div>
    </div>
  );
}

const camIconBtn = {
  width: 36, height: 36, background: 'rgba(0,0,0,0.55)',
  border: '1px solid rgba(255,255,255,0.18)',
  color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  backdropFilter: 'blur(8px)',
};

function CamReticle() {
  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} viewBox="0 0 402 874" preserveAspectRatio="none">
      <g stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none">
        <path d="M30 200 L30 220 M30 200 L50 200" />
        <path d="M372 200 L372 220 M372 200 L352 200" />
        <path d="M30 500 L30 480 M30 500 L50 500" />
        <path d="M372 500 L372 480 M372 500 L352 500" />
      </g>
    </svg>
  );
}

function CamScene() {
  // faint scene shapes -- a lamp, a chair, boxes
  return (
    <svg style={{ position: 'absolute', inset: 0 }} viewBox="0 0 402 874" preserveAspectRatio="none">
      {/* floor */}
      <path d="M0 580 L402 580 L402 720 L0 720 Z" fill="rgba(60,40,20,0.35)" />
      {/* shadow gradient */}
      <defs>
        <linearGradient id="floorshade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(0,0,0,0)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.6)" />
        </linearGradient>
      </defs>
      <rect x="0" y="580" width="402" height="200" fill="url(#floorshade)" />
      {/* lamp */}
      <g opacity="0.92">
        <path d="M70 260 L52 300 L94 300 Z" fill="#a07840" stroke="#000" strokeWidth="0.5" />
        <rect x="70" y="300" width="3" height="190" fill="#1a1208" />
        <ellipse cx="71" cy="495" rx="22" ry="5" fill="#1a1208" />
      </g>
      {/* throw on chair */}
      <g opacity="0.88">
        <path d="M210 310 L260 305 L300 320 L300 380 L210 380 Z" fill="#5a3a2a" />
        <path d="M222 320 L290 320 L295 360 L218 360 Z" fill="#8a6b54" />
      </g>
      {/* radio box */}
      <g opacity="0.88">
        <rect x="110" y="420" width="90" height="60" fill="#3a2a20" />
        <rect x="118" y="430" width="74" height="32" fill="#1a1208" />
        <circle cx="130" cy="446" r="6" fill="#0a0806" />
      </g>
      {/* boxes in back */}
      <g opacity="0.55">
        <rect x="220" y="440" width="80" height="65" fill="#3a2818" />
        <rect x="310" y="450" width="60" height="55" fill="#2a1a10" />
      </g>
    </svg>
  );
}

function FloatTag({ x, y, label, price, conf, side = 'left' }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, zIndex: 5,
      display: 'flex', flexDirection: side === 'right' ? 'row-reverse' : 'row', alignItems: 'center', gap: 8,
    }}>
      <div style={{
        width: 14, height: 14, border: '2px solid #fff',
        background: 'transparent', borderRadius: '50%',
        boxShadow: '0 0 0 4px rgba(0,0,0,0.4)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 3, background: 'var(--accent)', borderRadius: '50%',
        }}/>
      </div>
      <div style={{
        background: 'rgba(0,0,0,0.78)', color: '#fff',
        border: '1px solid rgba(255,255,255,0.18)',
        padding: '5px 8px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        backdropFilter: 'blur(6px)',
      }}>
        <span style={{ fontFamily: 'var(--label)', fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.85)' }}>
          {label.toUpperCase()}
        </span>
        <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>${price} · {conf}%</span>
      </div>
    </div>
  );
}

Object.assign(window, { MobileCapture, Icon, Pill, ConfDot, StatusBadge, TickChart });
