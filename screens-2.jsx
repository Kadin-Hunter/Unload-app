// screens-2.jsx — MobileDetail, DesktopDashboard, DesktopComposer
// Picks up Icon, Pill, ConfDot, StatusBadge, TickChart, PhotoTile, etc from globals.

// ─────────────────────────────────────────────────────────────
// 2) MOBILE — ITEM DETAIL
// ─────────────────────────────────────────────────────────────
function MobileDetail() {
  const item = ITEMS[0]; // brass floor lamp
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '54px 12px 10px',
        borderBottom: 'var(--line-w) solid var(--line)',
        background: 'var(--bg)',
      }}>
        <button className="btn btn-ghost" style={{ padding: '8px 10px' }}><Icon.chevL s={16}/></button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div className="label" style={{ color: 'var(--muted)' }}>ITEM 18 / 247</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink)', fontWeight: 600 }}>UNL-0018-BL</div>
        </div>
        <button className="btn btn-ghost" style={{ padding: '8px 10px' }}><Icon.share s={16}/></button>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* hero photo */}
        <div style={{
          aspectRatio: '1/1', background: `linear-gradient(140deg, #2a1f12 0%, #0a0806 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          borderBottom: 'var(--line-w) solid var(--line)',
        }}>
          <ItemGlyph kind="lamp" tone="#c9a86b" size={240} ink="#000" />
          {/* photo strip indicator */}
          <div style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            display: 'flex', gap: 4, alignItems: 'center',
          }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                height: 3, flex: 1,
                background: i === 0 ? '#fff' : 'rgba(255,255,255,0.35)',
              }}/>
            ))}
          </div>
          {/* AI badge */}
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: 'rgba(0,0,0,0.7)', color: '#fff',
            padding: '5px 9px', display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--label)', fontWeight: 700, fontSize: 10, letterSpacing: '0.08em',
            backdropFilter: 'blur(6px)',
          }}>
            <Icon.spark s={11}/> AI · 92% MATCH
          </div>
        </div>

        {/* title + tags */}
        <div style={{ padding: '14px 16px 0' }}>
          <div className="label" style={{ color: 'var(--muted)', marginBottom: 4 }}>
            LIGHTING · MID-CENTURY
          </div>
          <div className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>
            Mid-century brass floor lamp
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {item.tags.map(t => <Pill key={t} soft>{t}</Pill>)}
          </div>
        </div>

        <hr className="hr-soft"/>

        {/* price block */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 6 }}>
            <div>
              <div className="label" style={{ color: 'var(--muted)' }}>SUGGESTED PRICE</div>
              <div className="h-display mono" style={{ fontSize: 44, color: 'var(--price)' }}>$145</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Pill accent><Icon.bolt s={11}/> SWEET SPOT</Pill>
              <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>
                8 COMPS · LAST 30d
              </div>
            </div>
          </div>
          <TickChart low={120} high={180} price={145} comps={18} height={32}/>
        </div>

        <hr className="hr-soft"/>

        {/* condition */}
        <div style={{ padding: '14px 16px' }}>
          <div className="label" style={{ color: 'var(--muted)', marginBottom: 8 }}>CONDITION</div>
          <div style={{ display: 'flex', gap: 6, overflow: 'hidden' }}>
            {['Mint','V. good','Good','Fair','Parts'].map((c, i) => (
              <button key={c} className={i === 2 ? 'chip chip-fill' : 'chip'} style={{ flex: 1, justifyContent: 'center' }}>
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <hr className="hr-soft"/>

        {/* AI description */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div className="label" style={{ color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Icon.spark s={11}/> AI WROTE THIS
            </div>
            <button style={{
              background: 'transparent', border: 0, color: 'var(--accent)',
              fontFamily: 'var(--label)', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em',
              cursor: 'pointer',
            }}>EDIT</button>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            Striking brass floor lamp in the mid-century style. Tripod base with original
            patina. Tested working — bulb included. Standard E26 socket, accepts
            shade up to 14″. Measures 58″ tall.
          </div>
        </div>

        <hr className="hr-soft"/>

        {/* specifics */}
        <div style={{ padding: '14px 16px 100px' }}>
          <div className="label" style={{ color: 'var(--muted)', marginBottom: 8 }}>DETAILS</div>
          <table style={{ width: '100%', fontSize: 12.5, borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['Brand', 'Unknown'],
                ['Material', 'Brass, walnut'],
                ['Height', '58 in.'],
                ['Era', '1960s'],
                ['Location', 'Unit 14 · Shelf B3'],
              ].map(([k,v]) => (
                <tr key={k} style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '8px 0', color: 'var(--muted)', width: '40%' }} className="label">{k.toUpperCase()}</td>
                  <td style={{ padding: '8px 0', color: 'var(--ink)', fontWeight: 500 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '12px 14px 36px',
        background: 'var(--bg)',
        borderTop: 'var(--line-w-strong) solid var(--line)',
        display: 'flex', gap: 10,
      }}>
        <button className="btn btn-ghost" style={{ padding: '14px 16px' }}>
          <Icon.edit s={16}/>
        </button>
        <button className="btn btn-accent" style={{
          flex: 1, padding: '14px', justifyContent: 'space-between', fontSize: 14,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon.bolt s={16}/> LIST EVERYWHERE
          </span>
          <span className="mono">→</span>
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3) DESKTOP — INVENTORY DASHBOARD
// ─────────────────────────────────────────────────────────────
function DesktopDashboard() {
  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar active="inv"/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar/>
        <KPIRow/>
        <FilterRow/>
        <div style={{
          flex: 1, padding: '20px 28px 120px',
          background: 'var(--bg)',
          overflow: 'auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 14,
          }}>
            {ITEMS.map(item => <InventoryCard key={item.id} item={item} selected={['i05','i06','i10'].includes(item.id)} />)}
            {/* a few duplicates to make grid feel full */}
            {ITEMS.slice(0, 3).map(item => <InventoryCard key={item.id + '-b'} item={item} selected={false} />)}
          </div>
        </div>
        <BulkBar/>
      </div>
    </div>
  );
}

function Sidebar({ active }) {
  return (
    <div style={{
      width: 224, background: 'var(--surface)',
      borderRight: 'var(--line-w) solid var(--line)',
      display: 'flex', flexDirection: 'column',
      padding: '20px 0',
    }}>
      <div style={{ padding: '0 20px 16px', display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span className="h-display" style={{ fontSize: 28 }}>UNLOAD</span>
        <span className="label" style={{ color: 'var(--accent)' }}>v2</span>
      </div>

      <div style={{ padding: '0 14px 14px' }}>
        <div style={{
          background: 'var(--surface-2)', border: 'var(--line-w) solid var(--line)',
          padding: '10px 12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <span className="label">UNIT 14</span>
            <span className="dot" style={{ background: 'var(--ok)' }}/>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>5×10 · BUILDING C</div>
        </div>
      </div>

      <nav style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          ['inv',  'Inventory', Icon.inv,   '247'],
          ['list', 'Listed',    Icon.list,  '32'],
          ['sold', 'Sold',      Icon.cash,  '14'],
          ['msg',  'Messages',  Icon.msg,   '3'],
          ['ship', 'Shipping',  Icon.truck, '6'],
        ].map(([k, label, IconC, n]) => {
          const on = k === active;
          return (
            <div key={k} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px',
              background: on ? 'var(--ink)' : 'transparent',
              color: on ? 'var(--bg)' : 'var(--ink)',
              borderLeft: on ? `4px solid var(--accent)` : '4px solid transparent',
              cursor: 'pointer',
            }}>
              <IconC s={16}/>
              <span style={{ fontFamily: 'var(--label)', fontWeight: 700, fontSize: 13, letterSpacing: '0.03em', flex: 1 }}>
                {label.toUpperCase()}
              </span>
              <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>{n}</span>
            </div>
          );
        })}
      </nav>

      <div style={{ flex: 1 }}/>

      <div style={{ padding: '0 14px 4px' }}>
        <div className="label" style={{ color: 'var(--muted)', marginBottom: 8 }}>THIS MONTH</div>
        <div style={{
          background: 'var(--surface-2)', border: 'var(--line-w) solid var(--line)',
          padding: 12,
        }}>
          <div className="mono" style={{ fontSize: 22, fontWeight: 700, color: 'var(--accent)' }}>$3,840</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>↑ 28% vs last</div>
        </div>
      </div>

      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <button className="btn btn-accent btn-block" style={{ padding: '12px' }}>
          <Icon.scan s={16}/> SCAN MORE
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 4px' }}>
          <div style={{
            width: 28, height: 28, background: 'var(--ink)', color: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--label)', fontWeight: 700, fontSize: 12,
          }}>JL</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 12 }}>Jamie Lee</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>PRO · 30 DAYS LEFT</div>
          </div>
          <Icon.cog s={14}/>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div style={{
      borderBottom: 'var(--line-w) solid var(--line)',
      padding: '14px 28px', background: 'var(--surface)',
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div>
        <div className="label" style={{ color: 'var(--muted)' }}>UNLOAD / INVENTORY</div>
        <div className="h-display" style={{ fontSize: 24 }}>Everything you own</div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
        background: 'var(--bg)', border: 'var(--line-w) solid var(--line)',
        minWidth: 280,
      }}>
        <Icon.search s={14}/>
        <input placeholder="Search 247 items, comps, tags…" style={{
          flex: 1, background: 'transparent', border: 0, outline: 'none',
          fontFamily: 'var(--body)', fontSize: 13, color: 'var(--ink)',
        }}/>
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', padding: '2px 5px', border: '1px solid var(--line-soft)' }}>⌘K</span>
      </div>
      <button className="btn btn-ghost"><Icon.unit s={14}/> UNIT 14</button>
      <button className="btn btn-accent"><Icon.scan s={14}/> NEW SCAN</button>
    </div>
  );
}

function KPIRow() {
  const kpis = [
    { label: 'TOTAL ITEMS',     v: '247',    sub: '↑ 32 this week',     accent: false },
    { label: 'EST. VALUE',      v: '$18,420',sub: '@ suggested prices',  accent: true  },
    { label: 'LIVE LISTINGS',   v: '32',     sub: 'ebay 32 · fb 32',      accent: false },
    { label: 'SOLD · 7 DAYS',   v: '$1,840', sub: '14 items · 5.7% sell-thru', accent: false },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      borderBottom: 'var(--line-w) solid var(--line)',
      background: 'var(--bg)',
    }}>
      {kpis.map((k, i) => (
        <div key={k.label} style={{
          padding: '14px 20px',
          borderRight: i < 3 ? 'var(--line-w) solid var(--line)' : 'none',
          display: 'flex', flexDirection: 'column', gap: 4,
          position: 'relative',
        }}>
          <span className="label" style={{ color: 'var(--muted)' }}>{k.label}</span>
          <span className="h-display mono" style={{ fontSize: 30, color: k.accent ? 'var(--accent)' : 'var(--ink)' }}>
            {k.v}
          </span>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>{k.sub}</span>
        </div>
      ))}
    </div>
  );
}

function FilterRow() {
  const status = [
    ['All', '247', true],
    ['Drafts', '215'],
    ['Live', '32'],
    ['Sold', '14'],
  ];
  const cats = ['Furniture','Tools','Electronics','Decor','Cameras','Music','Books'];
  return (
    <div style={{
      padding: '14px 28px',
      borderBottom: 'var(--line-w) solid var(--line)',
      background: 'var(--surface)',
      display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
    }}>
      {status.map(([l, n, sel]) => (
        <button key={l} className={sel ? 'chip chip-fill' : 'chip'}>
          {l.toUpperCase()} <span style={{ opacity: 0.6 }}>{n}</span>
        </button>
      ))}
      <div style={{ width: 1, height: 20, background: 'var(--line-soft)', margin: '0 6px' }}/>
      {cats.map(c => <button key={c} className="chip chip-soft">{c.toUpperCase()}</button>)}
      <div style={{ flex: 1 }}/>
      <span className="label" style={{ color: 'var(--muted)' }}>SORT</span>
      <button className="chip">VALUE ↓ <Icon.chev s={10}/></button>
    </div>
  );
}

function InventoryCard({ item, selected }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: 'var(--line-w) solid var(--line)',
      outline: selected ? `3px solid var(--accent)` : 'none',
      outlineOffset: -1,
      position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* photo */}
      <div style={{ aspectRatio: '1/1', borderBottom: 'var(--line-w) solid var(--line)', position: 'relative', overflow: 'hidden' }}>
        <PhotoTile item={item} size={300} framed={false} />
        {/* checkbox */}
        <div style={{
          position: 'absolute', top: 8, left: 8,
          width: 22, height: 22,
          background: selected ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
          border: `1.5px solid ${selected ? 'var(--accent)' : 'var(--line)'}`,
          color: selected ? 'var(--accent-fg)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {selected && <Icon.check s={14}/>}
        </div>
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <StatusBadge status={item.status}/>
        </div>
      </div>
      {/* meta */}
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div className="label" style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>{item.cat.toUpperCase()}</span>
          <span className="mono">{item.id.toUpperCase()}</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25, minHeight: 32, color: 'var(--ink)' }}>
          {item.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 2 }}>
          <span className="mono h-display" style={{ fontSize: 18, color: 'var(--price)' }}>${item.price}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10.5, color: 'var(--muted)' }}>
            <ConfDot v={item.conf} size={6}/> {item.conf}% · {item.comps} COMPS
          </span>
        </div>
      </div>
    </div>
  );
}

function BulkBar() {
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: 'var(--ink)', color: 'var(--bg)',
      border: 'var(--line-w) solid var(--ink)',
      padding: '10px 12px 10px 18px',
      display: 'flex', alignItems: 'center', gap: 16,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      minWidth: 640,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className="h-display mono" style={{ fontSize: 22, color: 'var(--accent)' }}>3</span>
        <div>
          <div className="label">SELECTED</div>
          <div className="mono" style={{ fontSize: 11, opacity: 0.7 }}>$1,250 EST. VALUE</div>
        </div>
      </div>
      <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.2)' }}/>
      <span style={{ fontSize: 12, opacity: 0.8 }}>
        <span style={{ opacity: 0.6 }}>Auto-list to</span>{' '}
        <span style={{ fontWeight: 700, color: 'var(--bg)' }}>eBay</span>
        {' + '}
        <span style={{ fontWeight: 700, color: 'var(--bg)' }}>Facebook Marketplace</span>
      </span>
      <div style={{ flex: 1 }}/>
      <button style={{
        background: 'transparent', color: 'var(--bg)', border: '1px solid rgba(255,255,255,0.3)',
        padding: '8px 12px', fontFamily: 'var(--label)', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em',
      }}>SAVE DRAFT</button>
      <button className="btn btn-accent" style={{ padding: '10px 16px' }}>
        <Icon.bolt s={14}/> AUTO-LIST 3 →
      </button>
    </div>
  );
}

Object.assign(window, { MobileDetail, DesktopDashboard });
