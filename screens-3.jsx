// screens-3.jsx — DesktopComposer (listing composer with eBay + FB preview)

function DesktopComposer() {
  const item = ITEMS[0]; // brass lamp
  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar active="list"/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: 'var(--bg)' }}>
        <ComposerHeader item={item}/>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr', minHeight: 0 }}>
          <ComposerEditor item={item}/>
          <ComposerPreview item={item}/>
        </div>
        <ComposerFooter item={item}/>
      </div>
    </div>
  );
}

function ComposerHeader({ item }) {
  return (
    <div style={{
      borderBottom: 'var(--line-w) solid var(--line)',
      padding: '12px 28px', background: 'var(--surface)',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <button className="btn btn-ghost" style={{ padding: '8px 10px' }}><Icon.chevL s={14}/></button>
      <div style={{ fontFamily: 'var(--label)', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
        INVENTORY <Icon.chev s={9}/> DRAFTS <Icon.chev s={9}/>
        <span style={{ color: 'var(--ink)' }}>UNL-0018-BL</span>
      </div>
      <div style={{ flex: 1 }}/>
      <Pill soft><span className="dot" style={{ background: 'var(--accent)' }}/> AUTOSAVED · 12s</Pill>
      <button className="btn btn-ghost" style={{ padding: '8px 12px' }}>PREVIEW</button>
      <button className="btn btn-ghost" style={{ padding: '8px 12px' }}>SAVE DRAFT</button>
      <button className="btn btn-accent" style={{ padding: '8px 14px' }}>
        <Icon.bolt s={14}/> PUBLISH TO BOTH
      </button>
    </div>
  );
}

function ComposerEditor({ item }) {
  return (
    <div style={{
      borderRight: 'var(--line-w) solid var(--line)',
      overflow: 'auto', padding: 24,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      {/* photos */}
      <Section title="Photos" rhs="4 of 12 ideal · auto-cropped">
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{
            flex: 1, aspectRatio: '1/1',
            background: `linear-gradient(140deg, #2a1f12 0%, #0a0806 100%)`,
            border: 'var(--line-w) solid var(--line)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <ItemGlyph kind="lamp" tone="#c9a86b" size={140} ink="#000"/>
            <div style={{
              position: 'absolute', top: 8, left: 8,
              background: 'rgba(0,0,0,0.7)', color: '#fff',
              fontFamily: 'var(--label)', fontWeight: 700, fontSize: 9, letterSpacing: '0.08em',
              padding: '3px 6px',
            }}>HERO</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flex: 1 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                aspectRatio: '1/1',
                background: `linear-gradient(${140 + i*20}deg, #3a2a18 0%, #0a0806 100%)`,
                border: 'var(--line-w) solid var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ItemGlyph kind="lamp" tone="#c9a86b" size={50} ink="#000"/>
              </div>
            ))}
            <div style={{
              aspectRatio: '1/1',
              border: `var(--line-w) dashed var(--line)`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
              color: 'var(--muted)', cursor: 'pointer',
            }}>
              <Icon.plus s={20}/>
              <span style={{ fontFamily: 'var(--label)', fontSize: 10, fontWeight: 700 }}>ADD</span>
            </div>
          </div>
        </div>
      </Section>

      {/* title */}
      <Section title="Title" rhs={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon.spark s={11}/> <span style={{ color: 'var(--accent)' }}>AI-OPTIMIZED · 76/80</span>
      </span>}>
        <div style={{
          background: 'var(--surface)', border: 'var(--line-w) solid var(--line)',
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>
            Vintage Mid-Century Brass Floor Lamp · Tripod Base · Tested Works · 58"
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, alignItems: 'center' }}>
          <span className="label" style={{ color: 'var(--muted)' }}>ALT TITLES</span>
          <button className="chip chip-soft">Brass Tripod Floor Lamp — Atomic Era</button>
          <button className="chip chip-soft">MCM Floor Lamp · Walnut + Brass · Working</button>
        </div>
      </Section>

      {/* price + category row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
        <Section title="Price" rhs="auto-suggested">
          <div style={{
            background: 'var(--surface)', border: 'var(--line-w) solid var(--line)', padding: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span className="mono h-display" style={{ fontSize: 38, color: 'var(--price)' }}>$145</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>+ $14 SHIP</span>
              <div style={{ flex: 1 }}/>
              <Pill accent><Icon.bolt s={10}/> SWEET SPOT</Pill>
            </div>
            <TickChart low={120} high={180} price={145} comps={18} height={28}/>
            <div style={{ display: 'flex', gap: 6, marginTop: 10, alignItems: 'center' }}>
              <span className="label" style={{ color: 'var(--muted)' }}>STRATEGY</span>
              <button className="chip chip-fill">QUICK SALE</button>
              <button className="chip">MAX PRICE</button>
              <button className="chip">AUCTION</button>
              <div style={{ flex: 1 }}/>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>Best Offer:</span>
              <button className="chip chip-accent">ON</button>
            </div>
          </div>
        </Section>
        <Section title="Category" rhs="auto-mapped">
          <div style={{
            background: 'var(--surface)', border: 'var(--line-w) solid var(--line)', padding: 14,
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <div className="label" style={{ color: 'var(--muted)' }}>EBAY</div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Home & Garden › Lamps, Lighting › Lamps › Floor</div>
            <div className="label" style={{ color: 'var(--muted)', marginTop: 4 }}>FACEBOOK</div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Home & Garden › Furniture › Home Décor › Lamps</div>
            <div className="label" style={{ color: 'var(--muted)', marginTop: 4 }}>CONDITION</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['Mint','V.good','Good','Fair','Parts'].map((c, i) => (
                <button key={c} className={i===2 ? 'chip chip-fill' : 'chip'} style={{ flex: 1, justifyContent: 'center' }}>{c.toUpperCase()}</button>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* description */}
      <Section title="Description" rhs={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon.spark s={11}/> <span style={{ color: 'var(--accent)' }}>AI WROTE THIS</span>
        <button className="chip">REWRITE</button>
      </span>}>
        <div style={{
          background: 'var(--surface)', border: 'var(--line-w) solid var(--line)', padding: 14,
          fontSize: 13, lineHeight: 1.55, color: 'var(--ink-soft)',
        }}>
          <p style={{ margin: 0, marginBottom: 10 }}>
            <strong style={{ color: 'var(--ink)' }}>A striking mid-century brass floor lamp.</strong>{' '}
            Tripod base with original patina, walnut detail at the joints. Stands 58″ tall.
            Tested working — bulb included. Standard E26 socket; accepts a shade up to 14″.
          </p>
          <p style={{ margin: 0, marginBottom: 10 }}>
            <strong style={{ color: 'var(--ink)' }}>Condition.</strong> Solid and stable. Light surface wear
            consistent with age. No cracks, no rewires required. Original cord in good shape.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--ink)' }}>Pickup or ship.</strong> Local pickup welcome in the
            metro area. Will ship via FedEx ground, double-boxed.
          </p>
        </div>
      </Section>

      {/* specifics */}
      <Section title="Item specifics" rhs="6 of 8 filled · ↑ visibility">
        <div style={{
          background: 'var(--surface)', border: 'var(--line-w) solid var(--line)', padding: 4,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }}>
          {[
            ['Brand', 'Unbranded'],
            ['Style', 'Mid-Century Modern'],
            ['Material', 'Brass · Walnut'],
            ['Height', '58 in.'],
            ['Era', 'c. 1960s'],
            ['Color', 'Brass / Brown'],
            ['Bulb type', 'E26 (not LED)'],
            ['Origin', 'United States'],
          ].map(([k,v], i) => (
            <div key={k} style={{
              padding: '9px 12px',
              borderBottom: i < 6 ? '1px solid var(--line-soft)' : 'none',
              borderRight: i % 2 === 0 ? '1px solid var(--line-soft)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
            }}>
              <span className="label" style={{ color: 'var(--muted)' }}>{k.toUpperCase()}</span>
              <span style={{ fontSize: 12, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* shipping */}
      <Section title="Shipping" rhs="pre-quoted">
        <div style={{
          background: 'var(--surface)', border: 'var(--line-w) solid var(--line)', padding: 14,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {[
            ['LOCAL PICKUP', 'Free · 5 mi radius', true],
            ['FEDEX GROUND', '$14 · 3–5 days · double-boxed', true],
            ['INTERNATIONAL', 'Off — fragile item', false],
          ].map(([k, v, on]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 28, height: 16,
                background: on ? 'var(--accent)' : 'var(--surface-2)',
                border: `1.5px solid ${on ? 'var(--accent)' : 'var(--line)'}`,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 1, left: on ? 13 : 1, width: 11, height: 11,
                  background: on ? 'var(--accent-fg)' : 'var(--ink)',
                }}/>
              </div>
              <span className="label">{k}</span>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--muted)' }}>{v}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, rhs, children }) {
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: 8,
      }}>
        <h3 className="h-display" style={{ fontSize: 16, margin: 0 }}>{title}</h3>
        <span className="label" style={{ color: 'var(--muted)', fontSize: 10 }}>
          {rhs}
        </span>
      </div>
      {children}
    </div>
  );
}

function ComposerPreview({ item }) {
  return (
    <div style={{
      background: 'var(--surface-2)',
      display: 'flex', flexDirection: 'column', minHeight: 0,
    }}>
      {/* tabs */}
      <div style={{
        padding: '14px 22px',
        borderBottom: 'var(--line-w) solid var(--line)',
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--surface)',
      }}>
        <span className="label">LIVE PREVIEW</span>
        <div style={{ flex: 1 }}/>
        <button className="chip chip-fill">BOTH</button>
        <button className="chip">EBAY</button>
        <button className="chip">FACEBOOK</button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: 22, display: 'flex', flexDirection: 'column', gap: 22 }}>
        {/* eBay preview */}
        <PreviewCard platform="ebay" />
        {/* FB preview */}
        <PreviewCard platform="fb" />
      </div>
    </div>
  );
}

function PreviewCard({ platform }) {
  if (platform === 'ebay') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="label" style={{ color: 'var(--muted)' }}>RENDERED ON</span>
          <span style={{ display: 'inline-flex', color: 'var(--ink)' }}><Icon.ebay s={48}/></span>
          <div style={{ flex: 1 }}/>
          <Pill soft>~14,200 SEARCHES/MO</Pill>
        </div>
        <div style={{
          background: '#fff', border: '1px solid #ddd',
          borderRadius: 0,
          color: '#1a1a1a',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 13,
          display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16,
          padding: 14,
        }}>
          <div style={{
            aspectRatio: '1/1', background: `linear-gradient(140deg, #2a1f12 0%, #0a0806 100%)`,
            border: '1px solid #ddd',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ItemGlyph kind="lamp" tone="#c9a86b" size={110} ink="#000"/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <a style={{ color: '#0653b6', fontSize: 16, fontWeight: 500, textDecoration: 'none', lineHeight: 1.25 }}>
              Vintage Mid-Century Brass Floor Lamp · Tripod Base · Tested Works · 58"
            </a>
            <div style={{ fontSize: 12, color: '#555' }}>Pre-owned · Home &amp; Garden › Lamps › Floor</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 22, fontWeight: 500 }}>$145.00</span>
              <span style={{ fontSize: 12, color: '#3665f3' }}>or Best Offer</span>
            </div>
            <div style={{ fontSize: 12, color: '#1a8348' }}>Free shipping · Free returns</div>
            <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#666', marginTop: 4 }}>
              <span>From <strong style={{ color: '#1a1a1a' }}>jamie_l_unload</strong></span>
              <span>★ 99.4% · 247 reviews</span>
              <span style={{ color: '#e53238', fontWeight: 600 }}>Top Rated Plus</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <button style={{ background: '#3665f3', color: '#fff', border: 0, padding: '8px 14px', borderRadius: 24, fontWeight: 600, fontSize: 12 }}>Buy It Now</button>
              <button style={{ background: '#fff', color: '#3665f3', border: '1px solid #3665f3', padding: '8px 14px', borderRadius: 24, fontWeight: 600, fontSize: 12 }}>Add to cart</button>
              <button style={{ background: '#fff', color: '#1a1a1a', border: '1px solid #ccc', padding: '8px 14px', borderRadius: 24, fontSize: 12 }}>Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // FB Marketplace
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span className="label" style={{ color: 'var(--muted)' }}>RENDERED ON</span>
        <span style={{
          fontFamily: '"Helvetica Neue", system-ui', fontWeight: 800, fontSize: 18,
          color: '#1877f2',
        }}>facebook</span>
        <span style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500 }}>Marketplace</span>
        <div style={{ flex: 1 }}/>
        <Pill soft>5MI · 28k LOCALS</Pill>
      </div>
      <div style={{
        background: '#fff', borderRadius: 8, overflow: 'hidden',
        color: '#1c1e21', fontFamily: '"Helvetica Neue", system-ui',
        fontSize: 14,
        boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.08)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr' }}>
          <div style={{
            aspectRatio: '1/1', background: `linear-gradient(140deg, #2a1f12 0%, #0a0806 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ItemGlyph kind="lamp" tone="#c9a86b" size={150} ink="#000"/>
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#1c1e21' }}>$145</div>
            <div style={{ fontSize: 15, color: '#1c1e21', lineHeight: 1.3 }}>
              Mid-Century Brass Floor Lamp · Tripod Base · Tested Working
            </div>
            <div style={{ fontSize: 12, color: '#65676b' }}>Listed just now in Brooklyn, NY · 5 mi</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <button style={{ background: '#1877f2', color: '#fff', border: 0, padding: '8px 14px', borderRadius: 6, fontWeight: 600, fontSize: 13 }}>Message seller</button>
              <button style={{ background: '#e4e6eb', color: '#1c1e21', border: 0, padding: '8px 14px', borderRadius: 6, fontWeight: 600, fontSize: 13 }}>Save</button>
              <button style={{ background: '#e4e6eb', color: '#1c1e21', border: 0, padding: '8px 14px', borderRadius: 6, fontWeight: 600, fontSize: 13 }}>Share</button>
            </div>
            <div style={{ marginTop: 8, paddingTop: 12, borderTop: '1px solid #e4e6eb', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: '#1877f2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>JL</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 12, fontWeight: 600 }}>Jamie Lee</span>
                <span style={{ fontSize: 11, color: '#65676b' }}>Joined 2022 · Very responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComposerFooter({ item }) {
  return (
    <div style={{
      borderTop: 'var(--line-w) solid var(--line)',
      background: 'var(--ink)', color: 'var(--bg)',
      padding: '12px 28px',
      display: 'flex', alignItems: 'center', gap: 24,
    }}>
      <div>
        <div className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>YOU GET</div>
        <div className="h-display mono" style={{ fontSize: 26, color: 'var(--accent)' }}>$128.45</div>
      </div>
      <div style={{ display: 'flex', gap: 18, fontSize: 11, opacity: 0.85 }}>
        <FeeLine label="LIST" v="$145.00"/>
        <FeeLine label="EBAY FEE 13.25%" v="–$19.21"/>
        <FeeLine label="PAYMENT" v="–$3.04"/>
        <FeeLine label="FB FEE" v="$0.00"/>
        <FeeLine label="SHIP" v="LOCAL OR +$14"/>
      </div>
      <div style={{ flex: 1 }}/>
      <Pill soft style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--bg)', borderColor: 'rgba(255,255,255,0.2)' }}>
        AUTO-RELIST IN 7d IF NO BITES
      </Pill>
      <button className="btn btn-accent" style={{ padding: '12px 20px', fontSize: 13 }}>
        <Icon.bolt s={14}/> PUBLISH TO BOTH → 
      </button>
    </div>
  );
}

function FeeLine({ label, v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontFamily: 'var(--label)', fontWeight: 700, fontSize: 9, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)' }}>{label}</span>
      <span className="mono" style={{ fontSize: 12, color: 'var(--bg)', fontWeight: 600 }}>{v}</span>
    </div>
  );
}

Object.assign(window, { DesktopComposer });
