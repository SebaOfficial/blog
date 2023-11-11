import { d as y, w as m } from './singletons.3d6b7982.js';
const k = '' + new URL('../assets/avatar.9d2117a3.png', import.meta.url).href,
  P = [
    '' + new URL('../assets/avatar.f6a08045.avif', import.meta.url).href,
    '' + new URL('../assets/avatar.ec2b368f.webp', import.meta.url).href,
  ],
  L = '' + new URL('../assets/avatar.3288fe50.jpeg', import.meta.url).href,
  j = '' + new URL('../assets/avatar.2149bba4.jpeg', import.meta.url).href,
  R = '' + new URL('../assets/avatar.fa6b069e.jpeg', import.meta.url).href,
  A = '' + new URL('../assets/avatar.df189fa7.jpeg', import.meta.url).href,
  O = '' + new URL('../assets/cover.ed3357af.webp', import.meta.url).href,
  p = {
    url: 'https://blog.racca.me',
    title: "Seba's Blog",
    subtitle: "Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more.",
    description: "Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more",
    lang: 'en',
    timeZone: 'Europe/Rome',
    since: 2022,
    cover: O,
    author: {
      name: 'Sebastiano Racca',
      status: '☕️',
      statusTip: `Give me a <a href="https://www.buymeacoffee.com/sebadev" rel="external" style="color:#0F0" onMouseOver="this.style.color='#0FF'" onMouseOut="this.style.color='#0F0'" >Coffee break</a>`,
      avatar: k,
      avatar_128: P,
      avatar_48_png: L,
      avatar_96_png: j,
      avatar_192_png: R,
      avatar_512_png: A,
      website: 'https://racca.me',
      github: 'https://github.com/SebaOfficial',
      email: 'sebastiano@racca.me',
      bio: "Just a few more lines<br>Wheter it's code or blog",
    },
  },
  q = {
    me: ['https://github.com/SebaOfficial'],
    custom: ({ dev: e }) =>
      e
        ? []
        : [
            `<script type="text/javascript">
            var infolinks_pid = 3408965;
            var infolinks_wsid = 0;
          <\/script>
          <script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"><\/script>`,
          ],
  },
  Q = {
    toPublishedString: {
      locales: 'en-US',
      options: { year: 'numeric', weekday: 'short', month: 'short', day: 'numeric', timeZone: `${p.timeZone}` },
    },
    toUpdatedString: {
      locales: 'en-US',
      options: { year: 'numeric', weekday: 'short', month: 'short', day: 'numeric', timeZone: `${p.timeZone}` },
    },
  },
  Y = {
    enable: !0,
    id: 'giscus-comment',
    repo: 'sebaofficial/blog',
    repoId: 'R_kgDOKsJ_Bg',
    category: 'Announcements',
    categoryId: 'DIC_kwDOKsJ_Bs4Ca36L',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    loading: 'lazy',
    lang: 'en',
    'data-strict': '0',
  },
  K = [
    { name: 'About', url: 'https://racca.me/', rel: 'external' },
    { name: 'Contacts', url: 'https://racca.me/contacts', rel: 'external' },
  ],
  ee = {
    orientation: 2,
    links: [
      { name: 'About', url: 'https://racca.me/' },
      { name: 'Contacts', url: 'https://racca.me/contacts', rel: 'external' },
    ],
  },
  f = () => {
    const e = y;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  te = {
    subscribe(e) {
      return f().page.subscribe(e);
    },
  },
  re = {
    subscribe(e) {
      return f().navigating.subscribe(e);
    },
  };
var h = () =>
    new Proxy(
      Object.assign(() => '', {}),
      { get: (e, t) => (t === 'length' ? 0 : h()) },
    ),
  S = (e) =>
    Object.fromEntries(
      Object.entries(e)
        .map(([t, r]) => t !== 'i' && r && r != '0' && [t, r])
        .filter(Boolean),
    ),
  C = (e) =>
    Object.fromEntries(
      Object.keys(e).map((t) => {
        const r = e[t];
        return [
          t,
          Array.isArray(r)
            ? r.map((s) => (s == null ? void 0 : s.trim()))
            : r === !!r
            ? r
            : r == null
            ? void 0
            : r.trim(),
        ];
      }),
    ),
  E = (e) => {
    const [t = '', ...r] = e.split('|'),
      [s = '', a] = t.split(':'),
      [n, o] = s.split('?');
    return { k: n, i: a, n: o === '', f: r };
  },
  U = (e) => !!(e.o || e.r),
  I = (e, t) => {
    let [r, s] = e.split(':');
    s || ((s = r), (r = t));
    const a = s.split('|'),
      [n, o, i, c, d, w] = a,
      l = a.filter((_) => _ !== void 0).length;
    return l === 1
      ? { k: r, r: n }
      : l === 2
      ? { k: r, o: n, r: o }
      : l === 3
      ? { k: r, z: n, o, r: i }
      : { k: r, z: n, o, t: i, f: c, m: d, r: w };
  },
  x = /^\{.*\}$/,
  z = (e) =>
    Object.fromEntries(
      u(e)
        .split(',')
        .map((t) => t.split(':'))
        .reduce(
          (t, r) => (r.length === 2 ? [...t, r.map((s) => s.trim())] : ((t[t.length - 1][1] += ',' + r[0]), t)),
          [],
        ),
    ),
  b = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,
  u = (e) => e.substring(1, e.length - 1),
  G = (e, t = !0, r = '', s = '') =>
    e
      .split(b)
      .map((a) => {
        if (!a.match(b)) return a;
        const n = u(a);
        if (n.startsWith('{')) return I(u(n), s);
        const o = E(n);
        return (s = o.k || s), !r && (r = s), o;
      })
      .map((a) => {
        if (typeof a == 'string') return a;
        a.k || (a.k = r || '0');
        const n = C(a);
        return t ? S(n) : n;
      }),
  T = (e, t, r) =>
    t.reduce((s, a) => {
      var n;
      return (a.match(x) ? ((o) => o[s] ?? o['*'])(z(a)) : (n = e[a]) == null ? void 0 : n.call(e, s)) ?? s;
    }, r),
  B = (e, { z: t, o: r, t: s, f: a, m: n, r: o }, i) => {
    switch (t && i == 0 ? 'zero' : e.select(i)) {
      case 'zero':
        return t;
      case 'one':
        return r;
      case 'two':
        return s;
      case 'few':
        return a ?? o;
      case 'many':
        return n ?? o;
      default:
        return o;
    }
  },
  F = /\?\?/g,
  N = (e, t, r, s) =>
    e
      .map((a) => {
        if (typeof a == 'string') return a;
        const { k: n = '0', f: o = [] } = a,
          i = s[n];
        return U(a)
          ? ((typeof i == 'boolean' ? (i ? a.o : a.r) : B(t, a, i)) || '').replace(F, i)
          : ('' + ((o.length ? T(r, o, i) : i) ?? '')).trim();
      })
      .join(''),
  D = (e, t, r, s) => {
    const a = s[0],
      n = a && typeof a == 'object' && a.constructor === Object,
      o = s.length === 1 && n ? a : s;
    return N(e, t, r, o);
  },
  V = (e, t) => e[t] || (e[t] = G(t)),
  Z = (e, t) => {
    const r = {},
      s = new Intl.PluralRules(e);
    return (a, ...n) => D(V(r, a), s, t, n);
  };
function J(e, t, r = {}) {
  return v(t, Z(e, r));
}
var g = (e = {}, t) =>
    typeof e == 'string'
      ? t.bind(null, e)
      : Object.assign(
          Object.defineProperty(() => '', 'name', { writable: !0 }),
          e,
        ),
  v = (e, t) =>
    new Proxy(g(e, t), {
      get: (r, s) =>
        s === Symbol.iterator ? [][Symbol.iterator].bind(Object.values(r).map((a) => g(a, t))) : v(r[s], t),
    }),
  W = (e, t = {}) => {
    const r = m(),
      s = m(h()),
      a = $(r),
      n = new Proxy({}, { get: (i, c) => (c === 'subscribe' ? s.subscribe : s[c]) });
    return {
      locale: a,
      LL: n,
      setLocale: (i) => {
        r.set(i), s.set(J(i, e[i], t[i]));
      },
    };
  };
function $(e) {
  return { subscribe: e.subscribe.bind(e) };
}
const ae = 'en',
  se = ['en', 'ja', 'zh', 'zh-Hans', 'zh-Hant'],
  H = {},
  M = {},
  { locale: ne, LL: oe, setLocale: ie } = W(H, M);
export {
  oe as L,
  K as a,
  M as b,
  se as c,
  ie as d,
  ae as e,
  Q as f,
  Y as g,
  q as h,
  H as l,
  ee as m,
  re as n,
  te as p,
  p as s,
};
