// app.jsx — main composition: design canvas + variation-tagged artboards.

const { useState, useEffect } = React;

const VARIANTS = [
  { id: 'A', label: 'A · Workwear neutral', sub: 'Cream + deep green · sharp 1.5px rules' },
  { id: 'B', label: 'B · Dark utility',     sub: 'Charcoal + safety orange · low-light shop' },
  { id: 'C', label: 'C · Newsprint bold',   sub: 'Heavy ink rules · Anton display · marketplace front-page' },
];

function VariantWrap({ id, w, h, children }) {
  return (
    <div data-variant={id} style={{ width: w, height: h, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
}

// Mobile artboards wrap their screen in IOSDevice. Desktop artboards just
// drop the screen into a 1440×900 frame.
function MobileBoard({ id, children }) {
  return (
    <VariantWrap id={id} w={402} h={874}>
      <IOSDevice width={402} height={874}>
        {children}
      </IOSDevice>
    </VariantWrap>
  );
}

function DesktopBoard({ id, children }) {
  return (
    <VariantWrap id={id} w={1440} h={900}>
      <div style={{
        width: 1440, height: 900, overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
      }}>{children}</div>
    </VariantWrap>
  );
}

function App() {
  return (
    <div>
      <TopReadme/>
      <DesignCanvas>
        <DCSection id="capture" title="01 · Capture flow" subtitle="Camera-first. AI tags items live; one tap adds them to inventory.">
          {VARIANTS.map(v => (
            <DCArtboard key={v.id} id={`cap-${v.id}`} label={v.label} width={402} height={874}>
              <MobileBoard id={v.id}>
                <MobileCapture/>
              </MobileBoard>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="detail" title="02 · Item detail" subtitle="AI-suggested title, condition, comp-based price. Editable but defaults are right.">
          {VARIANTS.map(v => (
            <DCArtboard key={v.id} id={`det-${v.id}`} label={v.label} width={402} height={874}>
              <MobileBoard id={v.id}>
                <MobileDetail/>
              </MobileBoard>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="dash" title="03 · Inventory dashboard" subtitle="Desktop view of the whole unit. Bulk-select, then auto-list to both marketplaces in one shot.">
          {VARIANTS.map(v => (
            <DCArtboard key={v.id} id={`dash-${v.id}`} label={v.label} width={1440} height={900}>
              <DesktopBoard id={v.id}>
                <DesktopDashboard/>
              </DesktopBoard>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="composer" title="04 · Listing composer" subtitle="One editor, two live previews — eBay + Facebook Marketplace render the same draft side-by-side. Publish once.">
          {VARIANTS.map(v => (
            <DCArtboard key={v.id} id={`comp-${v.id}`} label={v.label} width={1440} height={900}>
              <DesktopBoard id={v.id}>
                <DesktopComposer/>
              </DesktopBoard>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="legend" title="System reference" subtitle="Tokens used across all three variations.">
          {VARIANTS.map(v => (
            <DCArtboard key={v.id} id={`legend-${v.id}`} label={v.label} width={640} height={420}>
              <VariantWrap id={v.id} w={640} h={420}>
                <Legend variant={v}/>
              </VariantWrap>
            </DCArtboard>
          ))}
        </DCSection>
      </DesignCanvas>
    </div>
  );
}

function TopReadme() {
  return (
    <div style={{
      position: 'fixed', top: 12, left: 12, zIndex: 100,
      background: 'rgba(255,253,247,0.92)',
      backdropFilter: 'blur(10px)',
      border: '1.5px solid #16130d',
      padding: '10px 14px',
      maxWidth: 360,
      fontFamily: 'Archivo, sans-serif', color: '#16130d',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 22, letterSpacing: '-0.025em', textTransform: 'uppercase', lineHeight: 1 }}>UNLOAD</span>
        <span style={{ fontFamily: 'Archivo Narrow, sans-serif', fontWeight: 700, fontSize: 10, letterSpacing: '0.08em', color: '#6b6557' }}>STORAGE → CASH</span>
      </div>
      <div style={{ fontSize: 12, lineHeight: 1.45, color: '#2c2820' }}>
        Snap a unit → AI inventories everything → auto-list to eBay + Facebook
        Marketplace from one unified draft. Three visual directions below, four
        screens each. Click any artboard for fullscreen.
      </div>
    </div>
  );
}

function Legend({ variant }) {
  return (
    <div className="app" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div>
          <div className="label" style={{ color: 'var(--muted)' }}>VARIATION {variant.id}</div>
          <div className="h-display" style={{ fontSize: 26 }}>{variant.label.split('· ')[1]}</div>
        </div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>UNL-{variant.id}-01</span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{variant.sub}</div>
      <hr className="hr"/>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <div className="label" style={{ color: 'var(--muted)', marginBottom: 8 }}>COLOR</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[
              { name: 'BG',     v: 'var(--bg)' },
              { name: 'SURF',   v: 'var(--surface)' },
              { name: 'INK',    v: 'var(--ink)' },
              { name: 'ACCENT', v: 'var(--accent)' },
              { name: 'WARN',   v: 'var(--warn)' },
            ].map(s => (
              <div key={s.name} style={{ flex: 1 }}>
                <div style={{ aspectRatio: '1/1', background: s.v, border: '1.5px solid var(--line)' }}/>
                <div className="label" style={{ fontSize: 9, color: 'var(--muted)', marginTop: 4, textAlign: 'center' }}>{s.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="label" style={{ color: 'var(--muted)', marginBottom: 8 }}>TYPE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="h-display" style={{ fontSize: 30 }}>List it.</span>
            <span style={{ fontSize: 13, color: 'var(--ink)' }}>Body copy at 13/19 in Archivo.</span>
            <span className="label" style={{ color: 'var(--muted)' }}>LABEL · NARROW · 0.06em</span>
            <span className="mono" style={{ fontSize: 14, color: 'var(--ink)' }}>$1,840 · 14 sold</span>
          </div>
        </div>
      </div>

      <hr className="hr-soft"/>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <button className="btn btn-accent" style={{ padding: '8px 12px' }}>PRIMARY</button>
        <button className="btn">INK</button>
        <button className="btn btn-ghost">GHOST</button>
        <span className="chip chip-fill">FILLED</span>
        <span className="chip">OUTLINE</span>
        <span className="chip chip-accent">ACCENT</span>
        <span className="chip chip-soft">SOFT</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
