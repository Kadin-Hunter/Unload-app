// data.jsx — mock inventory + helpers used across screens
// Items, comps, and inline SVG silhouettes (no external assets).

const ITEMS = [
  { id: 'i01', title: 'Mid-century brass floor lamp', cat: 'Lighting',  cond: 'Good',      price: 145, low: 120, high: 180, comps: 8,  status: 'draft', conf: 92, tags: ['mid-century','brass','floor lamp'], glyph: 'lamp',   tone: '#c9a86b' },
  { id: 'i02', title: 'DeWalt 20V cordless drill kit', cat: 'Tools',    cond: 'Very good', price:  85, low:  70, high: 105, comps: 14, status: 'live',  conf: 96, tags: ['dewalt','power tool','20V'],         glyph: 'drill',  tone: '#f5c518' },
  { id: 'i03', title: 'Walnut sideboard, 4 doors',     cat: 'Furniture',cond: 'Good',      price: 620, low: 540, high: 720, comps: 4,  status: 'live',  conf: 88, tags: ['walnut','MCM','credenza'],           glyph: 'sideb',  tone: '#7a4a2a' },
  { id: 'i04', title: 'PlayStation 4 + 6 games',       cat: 'Electronics',cond:'Good',     price: 180, low: 150, high: 220, comps: 22, status: 'live',  conf: 97, tags: ['ps4','sony','console'],              glyph: 'ps4',    tone: '#2a2f3a' },
  { id: 'i05', title: 'Eames-style lounge & ottoman',  cat: 'Furniture',cond: 'Fair',      price: 340, low: 260, high: 420, comps: 6,  status: 'draft', conf: 78, tags: ['lounge','replica','leather'],        glyph: 'chair',  tone: '#4a2e1f' },
  { id: 'i06', title: 'Vinyl LP lot · 84 records',     cat: 'Media',    cond: 'Used',      price: 220, low: 180, high: 280, comps: 11, status: 'draft', conf: 82, tags: ['vinyl','records','jazz'],            glyph: 'vinyl',  tone: '#1a1a1a' },
  { id: 'i07', title: 'Singer 401A sewing machine',    cat: 'Tools',    cond: 'Good',      price:  95, low:  75, high: 130, comps: 9,  status: 'live',  conf: 90, tags: ['singer','sewing','vintage'],         glyph: 'sewing', tone: '#a8a098' },
  { id: 'i08', title: 'Cast iron skillet set, 4 pcs',  cat: 'Kitchen',  cond: 'Very good', price: 110, low:  90, high: 140, comps: 18, status: 'sold',  conf: 95, tags: ['cast iron','skillet','cookware'],    glyph: 'pan',    tone: '#2a1a14' },
  { id: 'i09', title: 'Polaroid SX-70 (working)',      cat: 'Cameras',  cond: 'Good',      price: 165, low: 130, high: 210, comps: 16, status: 'live',  conf: 94, tags: ['polaroid','sx-70','camera'],         glyph: 'cam',    tone: '#c4a878' },
  { id: 'i10', title: 'Persian-style rug, 8×10',       cat: 'Decor',    cond: 'Good',      price: 290, low: 240, high: 380, comps: 7,  status: 'draft', conf: 81, tags: ['rug','persian','wool'],              glyph: 'rug',    tone: '#7a2a2a' },
  { id: 'i11', title: 'Yamaha FG-180 acoustic guitar', cat: 'Music',    cond: 'Good',      price: 175, low: 150, high: 220, comps: 10, status: 'live',  conf: 93, tags: ['yamaha','guitar','acoustic'],        glyph: 'guitar', tone: '#a06a3a' },
  { id: 'i12', title: 'Nat Geo magazines, 1960–75',    cat: 'Books',    cond: 'Used',      price:  40, low:  30, high:  60, comps: 12, status: 'sold',  conf: 88, tags: ['magazines','national geographic'],  glyph: 'stack',  tone: '#d4b042' },
];

// AI just-detected (capture screen)
const DETECTED = [
  { id: 'd1', title: 'Brass floor lamp', price: 145, conf: 92, glyph: 'lamp',   tone: '#c9a86b' },
  { id: 'd2', title: 'Wool throw blanket', price: 38, conf: 87, glyph: 'cloth',  tone: '#8a7560' },
  { id: 'd3', title: 'Tabletop radio (Zenith)', price: 65, conf: 79, glyph: 'radio', tone: '#5a4030' },
];

// item silhouette glyphs — flat 2-tone SVGs for placeholder photos.
function ItemGlyph({ kind, tone, size = 80, ink = '#0a0a0a' }) {
  const w = size, h = size;
  const fill = tone || '#888';
  const stroke = ink;
  const sw = 2;
  const paths = {
    lamp:   <g><path d={`M${w*.5} ${h*.18} l${-w*.18} ${h*.18} h${w*.36} z`} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.49} y={h*.36} width={w*.02} height={h*.4} fill={stroke}/><rect x={w*.34} y={h*.78} width={w*.32} height={h*.06} fill={fill} stroke={stroke} strokeWidth={sw}/></g>,
    drill:  <g><rect x={w*.18} y={h*.34} width={w*.42} height={h*.22} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.6} y={h*.4} width={w*.22} height={h*.1} fill={stroke}/><rect x={w*.3} y={h*.56} width={w*.16} height={h*.24} fill={fill} stroke={stroke} strokeWidth={sw}/></g>,
    sideb:  <g><rect x={w*.12} y={h*.32} width={w*.76} height={h*.42} fill={fill} stroke={stroke} strokeWidth={sw}/><line x1={w*.5} y1={h*.32} x2={w*.5} y2={h*.74} stroke={stroke} strokeWidth={sw}/><circle cx={w*.42} cy={h*.53} r={2} fill={stroke}/><circle cx={w*.58} cy={h*.53} r={2} fill={stroke}/><line x1={w*.2} y1={h*.74} x2={w*.2} y2={h*.82} stroke={stroke} strokeWidth={sw}/><line x1={w*.8} y1={h*.74} x2={w*.8} y2={h*.82} stroke={stroke} strokeWidth={sw}/></g>,
    ps4:    <g><rect x={w*.12} y={h*.42} width={w*.76} height={h*.16} fill={fill} stroke={stroke} strokeWidth={sw}/><line x1={w*.12} y1={h*.5} x2={w*.88} y2={h*.5} stroke={stroke} strokeWidth={sw}/><circle cx={w*.78} cy={h*.46} r={2} fill={stroke}/></g>,
    chair:  <g><path d={`M${w*.25} ${h*.7} L${w*.3} ${h*.3} Q${w*.5} ${h*.18} ${w*.7} ${h*.3} L${w*.75} ${h*.7} Z`} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.3} y={h*.7} width={w*.4} height={h*.08} fill={stroke}/></g>,
    vinyl:  <g><circle cx={w*.5} cy={h*.5} r={w*.32} fill={fill} stroke={stroke} strokeWidth={sw}/><circle cx={w*.5} cy={h*.5} r={w*.08} fill={stroke}/><circle cx={w*.5} cy={h*.5} r={w*.02} fill={fill}/></g>,
    sewing: <g><rect x={w*.16} y={h*.5} width={w*.68} height={h*.16} fill={fill} stroke={stroke} strokeWidth={sw}/><path d={`M${w*.2} ${h*.5} Q${w*.3} ${h*.3} ${w*.5} ${h*.32} L${w*.7} ${h*.32}`} fill="none" stroke={stroke} strokeWidth={sw}/><circle cx={w*.7} cy={h*.5} r={w*.05} fill={stroke}/></g>,
    pan:    <g><circle cx={w*.42} cy={h*.55} r={w*.26} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.68} y={h*.52} width={w*.24} height={h*.06} fill={stroke}/></g>,
    cam:    <g><rect x={w*.18} y={h*.36} width={w*.64} height={h*.34} fill={fill} stroke={stroke} strokeWidth={sw}/><circle cx={w*.5} cy={h*.53} r={w*.12} fill={stroke}/><circle cx={w*.5} cy={h*.53} r={w*.07} fill={fill}/><rect x={w*.66} y={h*.4} width={w*.1} height={w*.05} fill={stroke}/></g>,
    rug:    <g><rect x={w*.14} y={h*.34} width={w*.72} height={h*.42} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.22} y={h*.42} width={w*.56} height={h*.26} fill="none" stroke={stroke} strokeWidth={1.5}/><line x1={w*.22} y1={h*.55} x2={w*.78} y2={h*.55} stroke={stroke} strokeWidth={1}/></g>,
    guitar: <g><circle cx={w*.4} cy={h*.62} r={w*.2} fill={fill} stroke={stroke} strokeWidth={sw}/><circle cx={w*.4} cy={h*.62} r={w*.06} fill={stroke}/><rect x={w*.54} y={h*.48} width={w*.04} height={h*.4} fill={fill} stroke={stroke} strokeWidth={sw} transform={`rotate(-40 ${w*.56} ${h*.58})`}/></g>,
    stack:  <g><rect x={w*.2} y={h*.34} width={w*.6} height={h*.1} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.2} y={h*.46} width={w*.6} height={h*.1} fill={fill} stroke={stroke} strokeWidth={sw}/><rect x={w*.2} y={h*.58} width={w*.6} height={h*.1} fill={fill} stroke={stroke} strokeWidth={sw}/></g>,
    cloth:  <g><path d={`M${w*.2} ${h*.7} L${w*.25} ${h*.3} L${w*.5} ${h*.35} L${w*.75} ${h*.3} L${w*.8} ${h*.7} Z`} fill={fill} stroke={stroke} strokeWidth={sw}/></g>,
    radio:  <g><rect x={w*.18} y={h*.34} width={w*.64} height={h*.4} fill={fill} stroke={stroke} strokeWidth={sw}/><circle cx={w*.35} cy={h*.54} r={w*.07} fill={stroke}/><line x1={w*.5} y1={h*.4} x2={w*.78} y2={h*.4} stroke={stroke} strokeWidth={sw}/><line x1={w*.5} y1={h*.48} x2={w*.78} y2={h*.48} stroke={stroke} strokeWidth={sw}/><line x1={w*.5} y1={h*.56} x2={w*.78} y2={h*.56} stroke={stroke} strokeWidth={sw}/></g>,
  };
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      {paths[kind] || paths.cam}
    </svg>
  );
}

// PhotoTile — a background tile with an item glyph centered, used as a stand-in for a real photo
function PhotoTile({ item, size = 120, dark = false, framed = true }) {
  const bgA = item.tone;
  const bgB = '#0a0a0a';
  return (
    <div style={{
      width: size, height: size,
      background: `radial-gradient(ellipse at 30% 25%, ${hexA(bgA, 0.7)} 0%, ${bgB} 90%)`,
      border: framed ? `1px solid rgba(0,0,0,0.2)` : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      flexShrink: 0,
    }}>
      <ItemGlyph kind={item.glyph} tone={hexA(bgA, 0.95)} size={size * 0.62} ink={'#000'} />
    </div>
  );
}

function hexA(hex, a) {
  const h = hex.replace('#','');
  const n = h.length === 3 ? h.split('').map(c=>c+c).join('') : h;
  const r = parseInt(n.slice(0,2),16), g = parseInt(n.slice(2,4),16), b = parseInt(n.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

Object.assign(window, { ITEMS, DETECTED, ItemGlyph, PhotoTile, hexA });
