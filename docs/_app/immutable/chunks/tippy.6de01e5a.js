import { r as lr, w as le } from './singletons.3d6b7982.js';
import {
  X as Ut,
  Y as Gr,
  W as mt,
  s as Yr,
  f as Ie,
  g as Qe,
  h as Et,
  d as Oe,
  j as x,
  i as It,
  o as Lr,
  v as xt,
  a as Gt,
  c as Yt,
  V as Lt,
  R as Kr,
  Z as Kt,
  u as Le,
  I as Hr,
} from './scheduler.b261eb3c.js';
import { S as Vr, i as Wr, g as Jr, t as Ht, c as Nr, a as Vt, h as Zr, j as qr } from './index.5ccb46b4.js';
import { s as De } from './i18n-svelte.2f0d0f90.js';
const Hi = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function Vi(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function pr(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Wi(e) {
  return Math.pow(e, 4);
}
function Wt(e, { delay: t = 0, duration: r = 400, easing: n = Gr } = {}) {
  const i = +getComputedStyle(e).opacity;
  return { delay: t, duration: r, easing: n, css: (o) => `opacity: ${o * i}` };
}
function Ji(e, { delay: t = 0, duration: r = 400, easing: n = pr, x: i = 0, y: o = 0, opacity: c = 0 } = {}) {
  const u = getComputedStyle(e),
    s = +u.opacity,
    f = u.transform === 'none' ? '' : u.transform,
    p = s * (1 - c),
    [m, y] = Ut(i),
    [g, v] = Ut(o);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (h, w) => `
			transform: ${f} translate(${(1 - h) * m}${y}, ${(1 - h) * g}${v});
			opacity: ${s - p * w}`,
  };
}
function Ni(e, { delay: t = 0, duration: r = 400, easing: n = pr, axis: i = 'y' } = {}) {
  const o = getComputedStyle(e),
    c = +o.opacity,
    u = i === 'y' ? 'height' : 'width',
    s = parseFloat(o[u]),
    f = i === 'y' ? ['top', 'bottom'] : ['left', 'right'],
    p = f.map((B) => `${B[0].toUpperCase()}${B.slice(1)}`),
    m = parseFloat(o[`padding${p[0]}`]),
    y = parseFloat(o[`padding${p[1]}`]),
    g = parseFloat(o[`margin${p[0]}`]),
    v = parseFloat(o[`margin${p[1]}`]),
    h = parseFloat(o[`border${p[0]}Width`]),
    w = parseFloat(o[`border${p[1]}Width`]);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (B) =>
      `overflow: hidden;opacity: ${Math.min(B * 20, 1) * c};${u}: ${B * s}px;padding-${f[0]}: ${B * m}px;padding-${
        f[1]
      }: ${B * y}px;margin-${f[0]}: ${B * g}px;margin-${f[1]}: ${B * v}px;border-${f[0]}-width: ${B * h}px;border-${
        f[1]
      }-width: ${B * w}px;`,
  };
}
const Pr = { 2023: 3 },
  jr = { English: 3 },
  Xr = { FirstBot: 2 },
  zr = { Year: Pr, Language: jr, Series: Xr },
  _r = {
    DefaultDesktopShowTagFilter: !1,
    DefaultCoverStyle: 'IN',
    DefaultTagName: 'tags',
    DefaultPostLanguage: 'English',
    PostLanguageTagName: 'Language',
    SeriesTagName: 'Series',
    YearTagName: 'Year',
    BannerImage: { width: 768, height: 320, format: ['avif'] },
    ExtraResolutions: {
      1280: { width: 1280, format: ['avif'], minWidth: '1024px' },
      800: { width: 800, format: ['avif'], minWidth: '360px' },
    },
    PreserveFilesInRoutes: [
      'src/routes/+error.svelte',
      'src/routes/+layout.svelte',
      'src/routes/+page.svelte',
      'src/routes/atom.xml/+server.ts',
      'src/routes/feed.json/+server.ts',
      'src/routes/manifest.webmanifest/+server.ts',
      'src/routes/sitemap.xml/+server.ts',
      'src/routes/robots.txt/+server.ts',
    ],
    RoutingRules: { PostsYearMonthDate: !1 },
    languageConfig: {
      bash: 'bash',
      diff: 'diff',
      cmake: 'cmake',
      css: 'css',
      csharp: 'csharp',
      c: 'c',
      cpp: 'cpp',
      clike: 'clike',
      env: 'bash',
      elixir: 'elixir',
      erlang: 'erlang',
      go: 'go',
      html: 'markup',
      js: 'javascript',
      java: 'java',
      lua: 'lua',
      md: 'markdown',
      matlab: 'matlab',
      makefile: 'makefile',
      powershell: 'powershell',
      py: 'python',
      python: 'python',
      ts: 'typescript',
      ruby: 'ruby',
      rust: 'rust',
      svelte: 'svelte',
      sh: 'bash',
      shell: 'bash',
      sass: 'sass',
      scss: 'scss',
      solidity: 'solidity',
      sql: 'sql',
      swift: 'swift',
      wasm: 'wasm',
      yaml: 'yaml',
      '': '',
    },
  },
  $r = Object.entries(zr)
    .map((e) => ({ name: e[0], tags: Object.entries(e[1]).map((t) => ({ name: t[0], category: e[0] })) }))
    .sort((e, t) => {
      const r = e.name === 'tags',
        n = t.name === 'tags';
      return r && n ? 0 : r ? -1 : n ? 1 : String(e.name).localeCompare(String(t.name), 'zh-u-co-zhuyin');
    }),
  Zi = le(!1),
  qi = le(_r.DefaultDesktopShowTagFilter),
  Pi = lr($r),
  en = (() => {
    let e = new Map();
    const { subscribe: t, set: r } = le(e),
      n = (o) => {
        var c;
        e.has(o.category) || e.set(o.category, new Set()), (c = e.get(o.category)) == null || c.add(o.name), r(e);
      },
      i = (o) => {
        var c, u;
        e.has(o.category) &&
          ((c = e.get(o.category)) == null || c.delete(o.name),
          ((u = e.get(o.category)) == null ? void 0 : u.size) === 0 && e.delete(o.category),
          r(e));
      };
    return {
      subscribe: t,
      init: () => {
        (e = new Map()), r(e);
      },
      add: (o, c) => {
        var u;
        e.has(o) || e.set(o, new Set()), (u = e.get(o)) == null || u.add(c), r(e);
      },
      addByTag: n,
      delByTag: i,
      has: (o) => {
        var c;
        return (c = e.get(o.category)) == null ? void 0 : c.has(o.name);
      },
      toggle: (o) => {
        var c;
        e.has(o.category) && (c = e.get(o.category)) != null && c.has(o.name) ? i(o) : n(o);
      },
      toString: () => {
        const o = [];
        return (
          e.forEach((c, u) => {
            o.push(`${u === 'tags' ? u : `tags-${u}`}=${Array.from(c).toString()}`);
          }),
          o.join('&')
        );
      },
    };
  })(),
  tn = [
    [
      '7-reasons-i-love-hetzner',
      {
        slug: '7-reasons-i-love-hetzner',
        title: 'Why I Love Hetzner Cloud',
        language: 'English',
        description: '7 reasons why I love Hetzner Cloud, pros and cons of using it.',
        summary: '❤️ 7 reasons why I love Hetzner Cloud',
        content:
          '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',
        html: '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=',
        created: '2023-11-07T17:00:42.699Z',
        published: '2023-11-08T17:12:00.000+01:00',
        updated: '2023-11-08T17:12:00.000+01:00',
        cover: '/7-reasons-i-love-hetzner/cover.jpg',
        coverCaption:
          'Photo by <a href="https://unsplash.com/@tvick">Taylor Vick</a> on <a href="https://unsplash.com/photos/cable-network-M5tzZtFCOfs">Unsplash</a>',
        coverStyle: 'IN',
        series_tag: null,
        series_title: null,
        tags: [{ Year: '2023' }, { Language: 'English' }],
        toc: [
          {
            level: 1,
            heading: 'Why I Love Hetzner Cloud',
            slug: '#why-i-love-hetzner-cloud',
            child: [
              { level: 2, heading: 'Pros', slug: '#pros' },
              { level: 2, heading: 'Cons', slug: '#cons' },
            ],
          },
          { level: 1, heading: 'Conclusion', slug: '#conclusion' },
        ],
        prev: 'create-an-echo-bot',
      },
    ],
    [
      'create-an-echo-bot',
      {
        slug: 'create-an-echo-bot',
        title: 'Create a Telegram Echo Bot',
        language: 'English',
        description: 'Create a Telegram bot that replies to every message you send.',
        summary: '🤖 Create a Telegram Echo Bot',
        content:
          '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=',
        html: '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',
        created: '2023-11-06T20:01:48.971Z',
        published: '2023-11-07T12:00:00.000+01:00',
        updated: '2023-11-07T12:00:00.000+01:00',
        cover: '/create-an-echo-bot/cover.jpg',
        coverCaption:
          'Photo by <a href="https://unsplash.com/@rubaitulazad">Nitish Meena</a> on <a href="https://unsplash.com/photos/a-blue-and-white-square-button-with-a-paper-airplane-on-it-u4F54GIZWGI">Unsplash</a>',
        coverStyle: 'IN',
        series_tag: 'FirstBot',
        series_title: 'Create A PHP Telegram Bot',
        tags: [{ Series: 'FirstBot' }, { Year: '2023' }, { Language: 'English' }],
        toc: [
          { level: 1, heading: 'Introduction', slug: '#introduction' },
          { level: 1, heading: 'Telegram Updates', slug: '#telegram-updates' },
          {
            level: 1,
            heading: '🧑‍💻 Start Coding',
            slug: '#start-coding',
            child: [
              {
                level: 2,
                heading: 'Get Updates',
                slug: '#get-updates',
                child: [
                  {
                    level: 3,
                    heading: '🤔 What Am I Doing?',
                    slug: '#what-am-i-doing',
                    child: [
                      { level: 4, heading: 'Definitions', slug: '#definitions' },
                      { level: 4, heading: 'Instancing a new Bot', slug: '#instancing-a-new-bot' },
                      { level: 4, heading: 'Getting the updates', slug: '#getting-the-updates' },
                      { level: 4, heading: 'Replying to the user', slug: '#replying-to-the-user' },
                    ],
                  },
                  { level: 3, heading: 'Start the Bot', slug: '#start-the-bot' },
                ],
              },
              {
                level: 2,
                heading: 'Set Webhook',
                slug: '#set-webhook',
                child: [
                  { level: 3, heading: 'Directory Structure', slug: '#directory-structure' },
                  { level: 3, heading: 'Envirorment', slug: '#envirorment' },
                  { level: 3, heading: 'Bootstrap', slug: '#bootstrap' },
                  { level: 3, heading: 'Public file', slug: '#public-file' },
                  { level: 3, heading: 'Start the bot', slug: '#start-the-bot' },
                ],
              },
            ],
          },
          { level: 1, heading: 'Enjoy', slug: '#enjoy' },
        ],
        prev: 'create-your-first-bot',
        next: '7-reasons-i-love-hetzner',
      },
    ],
    [
      'create-your-first-bot',
      {
        slug: 'create-your-first-bot',
        title: 'Create Your First Telegram Bot',
        language: 'English',
        description: 'Create your first telegram bot in a few steps in PHP using telegramsdk/botapi',
        summary: '🤖 Create your first Telegram Bot using PHP in just a few steps',
        content:
          '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',
        html: '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',
        created: '2023-11-06T19:49:49.725Z',
        published: '2023-11-06T12:00:00.000+01:00',
        updated: '2023-11-07T12:00:00.000+01:00',
        cover: '/create-your-first-bot/cover.jpg',
        coverCaption:
          'Photo by <a href="https://unsplash.com/@rubaitulazad">Nitish Meena</a> on <a href="https://unsplash.com/photos/a-blue-and-white-square-button-with-a-paper-airplane-on-it-u4F54GIZWGI">Unsplash</a>',
        coverStyle: 'IN',
        series_tag: 'FirstBot',
        series_title: 'Create A PHP Telegram Bot',
        tags: [{ Series: 'FirstBot' }, { Year: '2023' }, { Language: 'English' }],
        toc: [
          {
            level: 1,
            heading: 'How to Build a Telegram Bot Using PHP',
            slug: '#how-to-build-a-telegram-bot-using-php',
            child: [{ level: 2, heading: 'Prerequisites', slug: '#prerequisites' }],
          },
          { level: 1, heading: 'Setup your Bot on Telegram', slug: '#setup-your-bot-on-telegram' },
          {
            level: 1,
            heading: 'Start Coding',
            slug: '#start-coding',
            child: [
              { level: 2, heading: 'Setup Local Envirorment', slug: '#setup-local-envirorment' },
              {
                level: 2,
                heading: 'Write the Logic',
                slug: '#write-the-logic',
                child: [
                  {
                    level: 3,
                    heading: '🤔 What Am I Doing?',
                    slug: '#what-am-i-doing',
                    child: [
                      { level: 4, heading: 'Instancing a new Bot', slug: '#instancing-a-new-bot' },
                      { level: 4, heading: 'Sending a Message', slug: '#sending-a-message' },
                    ],
                  },
                ],
              },
              { level: 2, heading: 'Test the bot', slug: '#test-the-bot' },
            ],
          },
        ],
        next: 'create-an-echo-bot',
      },
    ],
  ];
function rn() {
  return new Worker('' + new URL('../workers/search-ecd761dd.js', import.meta.url).href);
}
const Jt = le(!1),
  ji = le(!1),
  yt = le(void 0),
  Xi = (() => {
    const { subscribe: e, set: t } = le('');
    let r;
    const n = () => {
        mt(Jt) ||
          ((r = new rn()),
          r.addEventListener('message', (c) => {
            const { type: u, payload: s } = c.data;
            u === 'query' && (yt.set(s), Nt.filter());
          }),
          r.postMessage({ type: 'init' }),
          Jt.set(!0));
      },
      i = (c) => {
        t(c), c && c.length > 0 ? r.postMessage({ type: 'query', payload: c }) : o();
      },
      o = () => {
        t(''), yt.set(void 0), Nt.filter();
      };
    return { subscribe: e, init: n, set: i, reset: o };
  })(),
  fr = tn,
  zi = lr(new Map(fr)),
  Nt = (() => {
    const e = fr.filter((u) => !(u[1].options && u[1].options.includes('unlisted'))).flatMap((u) => u[1]),
      { subscribe: t, set: r } = le(e),
      n = () => {
        r(e);
      },
      i = (u) => {
        let s = u;
        const f = mt(yt);
        return f && (s = s.filter((p) => f.includes(p.slug))), s;
      },
      o = (u) => {
        let s = u;
        return (
          mt(en).forEach((f, p) => {
            p === 'tags'
              ? f.forEach((m) => {
                  s = s.filter((y) =>
                    y.tags
                      ? y.tags.find((g) => (typeof g == 'string' ? g === m : Array.isArray(g) ? g.includes(m) : !1))
                      : !1,
                  );
                })
              : f.forEach((m) => {
                  s = s.filter((y) =>
                    y.tags
                      ? y.tags.find((g) => {
                          if (typeof g == 'object' && g[p] !== void 0)
                            return Array.isArray(g[p]) ? g[p].includes(m) : g[p] === m;
                        })
                      : !1,
                  );
                });
          }),
          s
        );
      };
    return {
      subscribe: t,
      init: n,
      filter: () => {
        let u = e;
        (u = o(u)), (u = i(u)), r(u);
      },
    };
  })();
function nn(e) {
  let t, r;
  return {
    c() {
      (t = Ie('div')), this.h();
    },
    l(n) {
      (t = Qe(n, 'DIV', { class: !0 })), Et(t).forEach(Oe), this.h();
    },
    h() {
      x(t, 'class', (r = 'i-line-md-github-loop ' + (e[0] ?? '!h-32 !w-32')));
    },
    m(n, i) {
      It(n, t, i);
    },
    p(n, i) {
      i & 1 && r !== (r = 'i-line-md-github-loop ' + (n[0] ?? '!h-32 !w-32')) && x(t, 'class', r);
    },
    i: xt,
    o: xt,
    d(n) {
      n && Oe(t);
    },
  };
}
function on(e) {
  let t, r, n, i, o, c, u, s, f, p, m, y, g;
  return {
    c() {
      (t = Ie('picture')), (r = Ie('source')), (i = Gt()), (o = Ie('source')), (u = Gt()), (s = Ie('img')), this.h();
    },
    l(v) {
      t = Qe(v, 'PICTURE', { class: !0 });
      var h = Et(t);
      (r = Qe(h, 'SOURCE', { srcset: !0, type: !0 })),
        (i = Yt(h)),
        (o = Qe(h, 'SOURCE', { srcset: !0, type: !0 })),
        (u = Yt(h)),
        (s = Qe(h, 'IMG', { draggable: !0, src: !0, alt: !0, width: !0, height: !0, class: !0 })),
        h.forEach(Oe),
        this.h();
    },
    h() {
      Lt(r, (n = `${De.author.avatar_128[0]}`.replace(/^\./, ''))) || x(r, 'srcset', n),
        x(r, 'type', 'image/avif'),
        Lt(o, (c = `${De.author.avatar_128[1]}`.replace(/^\./, ''))) || x(o, 'srcset', c),
        x(o, 'type', 'image/webp'),
        x(s, 'draggable', 'false'),
        Kr(s.src, (f = De.author.avatar)) || x(s, 'src', f),
        x(s, 'alt', De.author.avatar),
        x(s, 'width', e[1]),
        x(s, 'height', e[2]),
        x(
          s,
          'class',
          (p =
            Kt(
              e[0] ??
                'rounded-full shadow-xl !w-32 !h-32 aspect-auto object-cover hover:rotate-[360deg] transition-transform duration-1000 ease-in-out',
            ) + ' svelte-j9opb1'),
        ),
        x(t, 'class', 'u-photo');
    },
    m(v, h) {
      It(v, t, h), Le(t, r), Le(t, i), Le(t, o), Le(t, u), Le(t, s), (g = !0);
    },
    p(v, h) {
      (!g || h & 2) && x(s, 'width', v[1]),
        (!g || h & 4) && x(s, 'height', v[2]),
        (!g ||
          (h & 1 &&
            p !==
              (p =
                Kt(
                  v[0] ??
                    'rounded-full shadow-xl !w-32 !h-32 aspect-auto object-cover hover:rotate-[360deg] transition-transform duration-1000 ease-in-out',
                ) + ' svelte-j9opb1'))) &&
          x(s, 'class', p);
    },
    i(v) {
      g ||
        (Hr(() => {
          g && (y && y.end(1), (m = Zr(t, Wt, { duration: 300, delay: 300 })), m.start());
        }),
        (g = !0));
    },
    o(v) {
      m && m.invalidate(), (y = qr(t, Wt, { duration: 300 })), (g = !1);
    },
    d(v) {
      v && Oe(t), v && y && y.end();
    },
  };
}
function an(e) {
  let t, r, n, i;
  const o = [on, nn],
    c = [];
  function u(s, f) {
    return s[3] && De.author.avatar && De.author.avatar_128 ? 0 : 1;
  }
  return (
    (r = u(e)),
    (n = c[r] = o[r](e)),
    {
      c() {
        (t = Ie('figure')), n.c(), this.h();
      },
      l(s) {
        t = Qe(s, 'FIGURE', { class: !0 });
        var f = Et(t);
        n.l(f), f.forEach(Oe), this.h();
      },
      h() {
        x(t, 'class', 'avatar select-none svelte-j9opb1');
      },
      m(s, f) {
        It(s, t, f), c[r].m(t, null), (i = !0);
      },
      p(s, [f]) {
        let p = r;
        (r = u(s)),
          r === p
            ? c[r].p(s, f)
            : (Jr(),
              Ht(c[p], 1, 1, () => {
                c[p] = null;
              }),
              Nr(),
              (n = c[r]),
              n ? n.p(s, f) : ((n = c[r] = o[r](s)), n.c()),
              Vt(n, 1),
              n.m(t, null));
      },
      i(s) {
        i || (Vt(n), (i = !0));
      },
      o(s) {
        Ht(n), (i = !1);
      },
      d(s) {
        s && Oe(t), c[r].d();
      },
    }
  );
}
function sn(e, t, r) {
  let { class: n = void 0 } = t,
    { width: i = '128px' } = t,
    { height: o = '128px' } = t,
    c = !1;
  return (
    Lr(() => {
      r(3, (c = !0));
    }),
    (e.$$set = (u) => {
      'class' in u && r(0, (n = u.class)), 'width' in u && r(1, (i = u.width)), 'height' in u && r(2, (o = u.height));
    }),
    [n, i, o, c]
  );
}
class _i extends Vr {
  constructor(t) {
    super(), Wr(this, t, sn, an, Yr, { class: 0, width: 1, height: 2 });
  }
}
var K = 'top',
  q = 'bottom',
  P = 'right',
  H = 'left',
  Qt = 'auto',
  Ze = [K, q, P, H],
  Se = 'start',
  Je = 'end',
  un = 'clippingParents',
  gr = 'viewport',
  Ke = 'popper',
  cn = 'reference',
  Zt = Ze.reduce(function (e, t) {
    return e.concat([t + '-' + Se, t + '-' + Je]);
  }, []),
  Ar = [].concat(Ze, [Qt]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Se, t + '-' + Je]);
  }, []),
  ln = 'beforeRead',
  pn = 'read',
  fn = 'afterRead',
  gn = 'beforeMain',
  An = 'main',
  dn = 'afterMain',
  hn = 'beforeWrite',
  vn = 'write',
  mn = 'afterWrite',
  yn = [ln, pn, fn, gn, An, dn, hn, vn, mn];
function re(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function J(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function me(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function Z(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Dt(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      o = t.elements[r];
    !Z(o) ||
      !re(o) ||
      (Object.assign(o.style, n),
      Object.keys(i).forEach(function (c) {
        var u = i[c];
        u === !1 ? o.removeAttribute(c) : o.setAttribute(c, u === !0 ? '' : u);
      }));
  });
}
function Bn(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var i = t.elements[n],
          o = t.attributes[n] || {},
          c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = c.reduce(function (s, f) {
            return (s[f] = ''), s;
          }, {});
        !Z(i) ||
          !re(i) ||
          (Object.assign(i.style, u),
          Object.keys(o).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const dr = { name: 'applyStyles', enabled: !0, phase: 'write', fn: Cn, effect: Bn, requires: ['computeStyles'] };
function te(e) {
  return e.split('-')[0];
}
var ve = Math.max,
  ut = Math.min,
  ke = Math.round;
function Ct() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function hr() {
  return !/^((?!chrome|android).)*safari/i.test(Ct());
}
function Me(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Z(e) &&
    ((i = (e.offsetWidth > 0 && ke(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && ke(n.height) / e.offsetHeight) || 1));
  var c = me(e) ? J(e) : window,
    u = c.visualViewport,
    s = !hr() && r,
    f = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    p = (n.top + (s && u ? u.offsetTop : 0)) / o,
    m = n.width / i,
    y = n.height / o;
  return { width: m, height: y, top: p, right: f + m, bottom: p + y, left: f, x: f, y: p };
}
function Ot(e) {
  var t = Me(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function vr(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Dt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function se(e) {
  return J(e).getComputedStyle(e);
}
function wn(e) {
  return ['table', 'td', 'th'].indexOf(re(e)) >= 0;
}
function pe(e) {
  return ((me(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function lt(e) {
  return re(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Dt(e) ? e.host : null) || pe(e);
}
function qt(e) {
  return !Z(e) || se(e).position === 'fixed' ? null : e.offsetParent;
}
function bn(e) {
  var t = /firefox/i.test(Ct()),
    r = /Trident/i.test(Ct());
  if (r && Z(e)) {
    var n = se(e);
    if (n.position === 'fixed') return null;
  }
  var i = lt(e);
  for (Dt(i) && (i = i.host); Z(i) && ['html', 'body'].indexOf(re(i)) < 0; ) {
    var o = se(i);
    if (
      o.transform !== 'none' ||
      o.perspective !== 'none' ||
      o.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === 'filter') ||
      (t && o.filter && o.filter !== 'none')
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function qe(e) {
  for (var t = J(e), r = qt(e); r && wn(r) && se(r).position === 'static'; ) r = qt(r);
  return r && (re(r) === 'html' || (re(r) === 'body' && se(r).position === 'static')) ? t : r || bn(e) || t;
}
function St(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function He(e, t, r) {
  return ve(e, ut(t, r));
}
function En(e, t, r) {
  var n = He(e, t, r);
  return n > r ? r : n;
}
function mr() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yr(e) {
  return Object.assign({}, mr(), e);
}
function Cr(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var In = function (t, r) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    yr(typeof t != 'number' ? t : Cr(t, Ze))
  );
};
function Qn(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    o = r.elements.arrow,
    c = r.modifiersData.popperOffsets,
    u = te(r.placement),
    s = St(u),
    f = [H, P].indexOf(u) >= 0,
    p = f ? 'height' : 'width';
  if (!(!o || !c)) {
    var m = In(i.padding, r),
      y = Ot(o),
      g = s === 'y' ? K : H,
      v = s === 'y' ? q : P,
      h = r.rects.reference[p] + r.rects.reference[s] - c[s] - r.rects.popper[p],
      w = c[s] - r.rects.reference[s],
      B = qe(o),
      Q = B ? (s === 'y' ? B.clientHeight || 0 : B.clientWidth || 0) : 0,
      O = h / 2 - w / 2,
      a = m[g],
      E = Q - y[p] - m[v],
      d = Q / 2 - y[p] / 2 + O,
      D = He(a, d, E),
      R = s;
    r.modifiersData[n] = ((t = {}), (t[R] = D), (t.centerOffset = D - d), t);
  }
}
function Dn(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? '[data-popper-arrow]' : n;
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (vr(t.elements.popper, i) && (t.elements.arrow = i)));
}
const On = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Qn,
  effect: Dn,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Te(e) {
  return e.split('-')[1];
}
var Sn = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function kn(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: ke(r * i) / i || 0, y: ke(n * i) / i || 0 };
}
function Pt(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    i = e.placement,
    o = e.variation,
    c = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    f = e.adaptive,
    p = e.roundOffsets,
    m = e.isFixed,
    y = c.x,
    g = y === void 0 ? 0 : y,
    v = c.y,
    h = v === void 0 ? 0 : v,
    w = typeof p == 'function' ? p({ x: g, y: h }) : { x: g, y: h };
  (g = w.x), (h = w.y);
  var B = c.hasOwnProperty('x'),
    Q = c.hasOwnProperty('y'),
    O = H,
    a = K,
    E = window;
  if (f) {
    var d = qe(r),
      D = 'clientHeight',
      R = 'clientWidth';
    if (
      (d === J(r) &&
        ((d = pe(r)), se(d).position !== 'static' && u === 'absolute' && ((D = 'scrollHeight'), (R = 'scrollWidth'))),
      (d = d),
      i === K || ((i === H || i === P) && o === Je))
    ) {
      a = q;
      var T = m && d === E && E.visualViewport ? E.visualViewport.height : d[D];
      (h -= T - n.height), (h *= s ? 1 : -1);
    }
    if (i === H || ((i === K || i === q) && o === Je)) {
      O = P;
      var k = m && d === E && E.visualViewport ? E.visualViewport.width : d[R];
      (g -= k - n.width), (g *= s ? 1 : -1);
    }
  }
  var F = Object.assign({ position: u }, f && Sn),
    M = p === !0 ? kn({ x: g, y: h }, J(r)) : { x: g, y: h };
  if (((g = M.x), (h = M.y), s)) {
    var S;
    return Object.assign(
      {},
      F,
      ((S = {}),
      (S[a] = Q ? '0' : ''),
      (S[O] = B ? '0' : ''),
      (S.transform =
        (E.devicePixelRatio || 1) <= 1
          ? 'translate(' + g + 'px, ' + h + 'px)'
          : 'translate3d(' + g + 'px, ' + h + 'px, 0)'),
      S),
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}), (t[a] = Q ? h + 'px' : ''), (t[O] = B ? g + 'px' : ''), (t.transform = ''), t),
  );
}
function Mn(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    o = r.adaptive,
    c = o === void 0 ? !0 : o,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    f = {
      placement: te(t.placement),
      variation: Te(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Pt(
        Object.assign({}, f, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: c,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Pt(
          Object.assign({}, f, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: s }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
}
const Tn = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Mn, data: {} };
var ot = { passive: !0 };
function Rn(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    o = i === void 0 ? !0 : i,
    c = n.resize,
    u = c === void 0 ? !0 : c,
    s = J(t.elements.popper),
    f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      f.forEach(function (p) {
        p.addEventListener('scroll', r.update, ot);
      }),
    u && s.addEventListener('resize', r.update, ot),
    function () {
      o &&
        f.forEach(function (p) {
          p.removeEventListener('scroll', r.update, ot);
        }),
        u && s.removeEventListener('resize', r.update, ot);
    }
  );
}
const Fn = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Rn, data: {} };
var Un = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function st(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Un[t];
  });
}
var xn = { start: 'end', end: 'start' };
function jt(e) {
  return e.replace(/start|end/g, function (t) {
    return xn[t];
  });
}
function kt(e) {
  var t = J(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Mt(e) {
  return Me(pe(e)).left + kt(e).scrollLeft;
}
function Gn(e, t) {
  var r = J(e),
    n = pe(e),
    i = r.visualViewport,
    o = n.clientWidth,
    c = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    (o = i.width), (c = i.height);
    var f = hr();
    (f || (!f && t === 'fixed')) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: o, height: c, x: u + Mt(e), y: s };
}
function Yn(e) {
  var t,
    r = pe(e),
    n = kt(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = ve(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    c = ve(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + Mt(e),
    s = -n.scrollTop;
  return (
    se(i || r).direction === 'rtl' && (u += ve(r.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: c, x: u, y: s }
  );
}
function Tt(e) {
  var t = se(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Br(e) {
  return ['html', 'body', '#document'].indexOf(re(e)) >= 0 ? e.ownerDocument.body : Z(e) && Tt(e) ? e : Br(lt(e));
}
function Ve(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Br(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = J(n),
    c = i ? [o].concat(o.visualViewport || [], Tt(n) ? n : []) : n,
    u = t.concat(c);
  return i ? u : u.concat(Ve(lt(c)));
}
function Bt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ln(e, t) {
  var r = Me(e, !1, t === 'fixed');
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Xt(e, t, r) {
  return t === gr ? Bt(Gn(e, r)) : me(t) ? Ln(t, r) : Bt(Yn(pe(e)));
}
function Kn(e) {
  var t = Ve(lt(e)),
    r = ['absolute', 'fixed'].indexOf(se(e).position) >= 0,
    n = r && Z(e) ? qe(e) : e;
  return me(n)
    ? t.filter(function (i) {
        return me(i) && vr(i, n) && re(i) !== 'body';
      })
    : [];
}
function Hn(e, t, r, n) {
  var i = t === 'clippingParents' ? Kn(e) : [].concat(t),
    o = [].concat(i, [r]),
    c = o[0],
    u = o.reduce(
      function (s, f) {
        var p = Xt(e, f, n);
        return (
          (s.top = ve(p.top, s.top)),
          (s.right = ut(p.right, s.right)),
          (s.bottom = ut(p.bottom, s.bottom)),
          (s.left = ve(p.left, s.left)),
          s
        );
      },
      Xt(e, c, n),
    );
  return (u.width = u.right - u.left), (u.height = u.bottom - u.top), (u.x = u.left), (u.y = u.top), u;
}
function wr(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? te(n) : null,
    o = n ? Te(n) : null,
    c = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case K:
      s = { x: c, y: t.y - r.height };
      break;
    case q:
      s = { x: c, y: t.y + t.height };
      break;
    case P:
      s = { x: t.x + t.width, y: u };
      break;
    case H:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var f = i ? St(i) : null;
  if (f != null) {
    var p = f === 'y' ? 'height' : 'width';
    switch (o) {
      case Se:
        s[f] = s[f] - (t[p] / 2 - r[p] / 2);
        break;
      case Je:
        s[f] = s[f] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return s;
}
function Ne(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    o = r.strategy,
    c = o === void 0 ? e.strategy : o,
    u = r.boundary,
    s = u === void 0 ? un : u,
    f = r.rootBoundary,
    p = f === void 0 ? gr : f,
    m = r.elementContext,
    y = m === void 0 ? Ke : m,
    g = r.altBoundary,
    v = g === void 0 ? !1 : g,
    h = r.padding,
    w = h === void 0 ? 0 : h,
    B = yr(typeof w != 'number' ? w : Cr(w, Ze)),
    Q = y === Ke ? cn : Ke,
    O = e.rects.popper,
    a = e.elements[v ? Q : y],
    E = Hn(me(a) ? a : a.contextElement || pe(e.elements.popper), s, p, c),
    d = Me(e.elements.reference),
    D = wr({ reference: d, element: O, strategy: 'absolute', placement: i }),
    R = Bt(Object.assign({}, O, D)),
    T = y === Ke ? R : d,
    k = {
      top: E.top - T.top + B.top,
      bottom: T.bottom - E.bottom + B.bottom,
      left: E.left - T.left + B.left,
      right: T.right - E.right + B.right,
    },
    F = e.modifiersData.offset;
  if (y === Ke && F) {
    var M = F[i];
    Object.keys(k).forEach(function (S) {
      var V = [P, q].indexOf(S) >= 0 ? 1 : -1,
        W = [K, q].indexOf(S) >= 0 ? 'y' : 'x';
      k[S] += M[W] * V;
    });
  }
  return k;
}
function Vn(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    o = r.rootBoundary,
    c = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    f = s === void 0 ? Ar : s,
    p = Te(n),
    m = p
      ? u
        ? Zt
        : Zt.filter(function (v) {
            return Te(v) === p;
          })
      : Ze,
    y = m.filter(function (v) {
      return f.indexOf(v) >= 0;
    });
  y.length === 0 && (y = m);
  var g = y.reduce(function (v, h) {
    return (v[h] = Ne(e, { placement: h, boundary: i, rootBoundary: o, padding: c })[te(h)]), v;
  }, {});
  return Object.keys(g).sort(function (v, h) {
    return g[v] - g[h];
  });
}
function Wn(e) {
  if (te(e) === Qt) return [];
  var t = st(e);
  return [jt(e), t, jt(t)];
}
function Jn(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var i = r.mainAxis,
        o = i === void 0 ? !0 : i,
        c = r.altAxis,
        u = c === void 0 ? !0 : c,
        s = r.fallbackPlacements,
        f = r.padding,
        p = r.boundary,
        m = r.rootBoundary,
        y = r.altBoundary,
        g = r.flipVariations,
        v = g === void 0 ? !0 : g,
        h = r.allowedAutoPlacements,
        w = t.options.placement,
        B = te(w),
        Q = B === w,
        O = s || (Q || !v ? [st(w)] : Wn(w)),
        a = [w].concat(O).reduce(function (ne, j) {
          return ne.concat(
            te(j) === Qt
              ? Vn(t, {
                  placement: j,
                  boundary: p,
                  rootBoundary: m,
                  padding: f,
                  flipVariations: v,
                  allowedAutoPlacements: h,
                })
              : j,
          );
        }, []),
        E = t.rects.reference,
        d = t.rects.popper,
        D = new Map(),
        R = !0,
        T = a[0],
        k = 0;
      k < a.length;
      k++
    ) {
      var F = a[k],
        M = te(F),
        S = Te(F) === Se,
        V = [K, q].indexOf(M) >= 0,
        W = V ? 'width' : 'height',
        G = Ne(t, { placement: F, boundary: p, rootBoundary: m, altBoundary: y, padding: f }),
        Y = V ? (S ? P : H) : S ? q : K;
      E[W] > d[W] && (Y = st(Y));
      var U = st(Y),
        z = [];
      if (
        (o && z.push(G[M] <= 0),
        u && z.push(G[Y] <= 0, G[U] <= 0),
        z.every(function (ne) {
          return ne;
        }))
      ) {
        (T = F), (R = !1);
        break;
      }
      D.set(F, z);
    }
    if (R)
      for (
        var _ = v ? 3 : 1,
          fe = function (j) {
            var ie = a.find(function (ye) {
              var oe = D.get(ye);
              if (oe)
                return oe.slice(0, j).every(function (Ce) {
                  return Ce;
                });
            });
            if (ie) return (T = ie), 'break';
          },
          $ = _;
        $ > 0;
        $--
      ) {
        var ge = fe($);
        if (ge === 'break') break;
      }
    t.placement !== T && ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const Nn = { name: 'flip', enabled: !0, phase: 'main', fn: Jn, requiresIfExists: ['offset'], data: { _skip: !1 } };
function zt(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function _t(e) {
  return [K, P, q, H].some(function (t) {
    return e[t] >= 0;
  });
}
function Zn(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    c = Ne(t, { elementContext: 'reference' }),
    u = Ne(t, { altBoundary: !0 }),
    s = zt(c, n),
    f = zt(u, i, o),
    p = _t(s),
    m = _t(f);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: f,
    isReferenceHidden: p,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': m,
    }));
}
const qn = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Zn };
function Pn(e, t, r) {
  var n = te(e),
    i = [H, K].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    c = o[0],
    u = o[1];
  return (c = c || 0), (u = (u || 0) * i), [H, P].indexOf(n) >= 0 ? { x: u, y: c } : { x: c, y: u };
}
function jn(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    o = i === void 0 ? [0, 0] : i,
    c = Ar.reduce(function (p, m) {
      return (p[m] = Pn(m, t.rects, o)), p;
    }, {}),
    u = c[t.placement],
    s = u.x,
    f = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += f)),
    (t.modifiersData[n] = c);
}
const Xn = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: jn };
function zn(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = wr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const _n = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: zn, data: {} };
function $n(e) {
  return e === 'x' ? 'y' : 'x';
}
function ei(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.mainAxis,
    o = i === void 0 ? !0 : i,
    c = r.altAxis,
    u = c === void 0 ? !1 : c,
    s = r.boundary,
    f = r.rootBoundary,
    p = r.altBoundary,
    m = r.padding,
    y = r.tether,
    g = y === void 0 ? !0 : y,
    v = r.tetherOffset,
    h = v === void 0 ? 0 : v,
    w = Ne(t, { boundary: s, rootBoundary: f, padding: m, altBoundary: p }),
    B = te(t.placement),
    Q = Te(t.placement),
    O = !Q,
    a = St(B),
    E = $n(a),
    d = t.modifiersData.popperOffsets,
    D = t.rects.reference,
    R = t.rects.popper,
    T = typeof h == 'function' ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    k = typeof T == 'number' ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (d) {
    if (o) {
      var S,
        V = a === 'y' ? K : H,
        W = a === 'y' ? q : P,
        G = a === 'y' ? 'height' : 'width',
        Y = d[a],
        U = Y + w[V],
        z = Y - w[W],
        _ = g ? -R[G] / 2 : 0,
        fe = Q === Se ? D[G] : R[G],
        $ = Q === Se ? -R[G] : -D[G],
        ge = t.elements.arrow,
        ne = g && ge ? Ot(ge) : { width: 0, height: 0 },
        j = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : mr(),
        ie = j[V],
        ye = j[W],
        oe = He(0, D[G], ne[G]),
        Ce = O ? D[G] / 2 - _ - oe - ie - k.mainAxis : fe - oe - ie - k.mainAxis,
        ue = O ? -D[G] / 2 + _ + oe + ye + k.mainAxis : $ + oe + ye + k.mainAxis,
        Be = t.elements.arrow && qe(t.elements.arrow),
        Pe = Be ? (a === 'y' ? Be.clientTop || 0 : Be.clientLeft || 0) : 0,
        Fe = (S = F == null ? void 0 : F[a]) != null ? S : 0,
        je = Y + Ce - Fe - Pe,
        Xe = Y + ue - Fe,
        Ue = He(g ? ut(U, je) : U, Y, g ? ve(z, Xe) : z);
      (d[a] = Ue), (M[a] = Ue - Y);
    }
    if (u) {
      var xe,
        ze = a === 'x' ? K : H,
        _e = a === 'x' ? q : P,
        ae = d[E],
        ce = E === 'y' ? 'height' : 'width',
        Ge = ae + w[ze],
        Ae = ae - w[_e],
        Ye = [K, H].indexOf(B) !== -1,
        $e = (xe = F == null ? void 0 : F[E]) != null ? xe : 0,
        et = Ye ? Ge : ae - D[ce] - R[ce] - $e + k.altAxis,
        tt = Ye ? ae + D[ce] + R[ce] - $e - k.altAxis : Ae,
        rt = g && Ye ? En(et, ae, tt) : He(g ? et : Ge, ae, g ? tt : Ae);
      (d[E] = rt), (M[E] = rt - ae);
    }
    t.modifiersData[n] = M;
  }
}
const ti = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: ei, requiresIfExists: ['offset'] };
function ri(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ni(e) {
  return e === J(e) || !Z(e) ? kt(e) : ri(e);
}
function ii(e) {
  var t = e.getBoundingClientRect(),
    r = ke(t.width) / e.offsetWidth || 1,
    n = ke(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function oi(e, t, r) {
  r === void 0 && (r = !1);
  var n = Z(t),
    i = Z(t) && ii(t),
    o = pe(t),
    c = Me(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((re(t) !== 'body' || Tt(o)) && (u = ni(t)),
      Z(t) ? ((s = Me(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = Mt(o))),
    { x: c.left + u.scrollLeft - s.x, y: c.top + u.scrollTop - s.y, width: c.width, height: c.height }
  );
}
function ai(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var c = [].concat(o.requires || [], o.requiresIfExists || []);
    c.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && i(s);
      }
    }),
      n.push(o);
  }
  return (
    e.forEach(function (o) {
      r.has(o.name) || i(o);
    }),
    n
  );
}
function si(e) {
  var t = ai(e);
  return yn.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function ui(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function ci(e) {
  var t = e.reduce(function (r, n) {
    var i = r[n.name];
    return (
      (r[n.name] = i
        ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var $t = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function er() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function li(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    o = i === void 0 ? $t : i;
  return function (u, s, f) {
    f === void 0 && (f = o);
    var p = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, $t, o),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      m = [],
      y = !1,
      g = {
        state: p,
        setOptions: function (B) {
          var Q = typeof B == 'function' ? B(p.options) : B;
          h(),
            (p.options = Object.assign({}, o, p.options, Q)),
            (p.scrollParents = {
              reference: me(u) ? Ve(u) : u.contextElement ? Ve(u.contextElement) : [],
              popper: Ve(s),
            });
          var O = si(ci([].concat(n, p.options.modifiers)));
          return (
            (p.orderedModifiers = O.filter(function (a) {
              return a.enabled;
            })),
            v(),
            g.update()
          );
        },
        forceUpdate: function () {
          if (!y) {
            var B = p.elements,
              Q = B.reference,
              O = B.popper;
            if (er(Q, O)) {
              (p.rects = { reference: oi(Q, qe(O), p.options.strategy === 'fixed'), popper: Ot(O) }),
                (p.reset = !1),
                (p.placement = p.options.placement),
                p.orderedModifiers.forEach(function (k) {
                  return (p.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var a = 0; a < p.orderedModifiers.length; a++) {
                if (p.reset === !0) {
                  (p.reset = !1), (a = -1);
                  continue;
                }
                var E = p.orderedModifiers[a],
                  d = E.fn,
                  D = E.options,
                  R = D === void 0 ? {} : D,
                  T = E.name;
                typeof d == 'function' && (p = d({ state: p, options: R, name: T, instance: g }) || p);
              }
            }
          }
        },
        update: ui(function () {
          return new Promise(function (w) {
            g.forceUpdate(), w(p);
          });
        }),
        destroy: function () {
          h(), (y = !0);
        },
      };
    if (!er(u, s)) return g;
    g.setOptions(f).then(function (w) {
      !y && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function v() {
      p.orderedModifiers.forEach(function (w) {
        var B = w.name,
          Q = w.options,
          O = Q === void 0 ? {} : Q,
          a = w.effect;
        if (typeof a == 'function') {
          var E = a({ state: p, name: B, instance: g, options: O }),
            d = function () {};
          m.push(E || d);
        }
      });
    }
    function h() {
      m.forEach(function (w) {
        return w();
      }),
        (m = []);
    }
    return g;
  };
}
var pi = [Fn, _n, Tn, dr, Xn, Nn, ti, On, qn],
  fi = li({ defaultModifiers: pi }),
  gi = 'tippy-box',
  br = 'tippy-content',
  Ai = 'tippy-backdrop',
  Er = 'tippy-arrow',
  Ir = 'tippy-svg-arrow',
  he = { passive: !0, capture: !0 },
  Qr = function () {
    return document.body;
  };
function At(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function Rt(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf('[object') === 0 && r.indexOf(t + ']') > -1;
}
function Dr(e, t) {
  return typeof e == 'function' ? e.apply(void 0, t) : e;
}
function tr(e, t) {
  if (t === 0) return e;
  var r;
  return function (n) {
    clearTimeout(r),
      (r = setTimeout(function () {
        e(n);
      }, t));
  };
}
function di(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Ee(e) {
  return [].concat(e);
}
function rr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hi(e) {
  return e.filter(function (t, r) {
    return e.indexOf(t) === r;
  });
}
function vi(e) {
  return e.split('-')[0];
}
function ct(e) {
  return [].slice.call(e);
}
function nr(e) {
  return Object.keys(e).reduce(function (t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function We() {
  return document.createElement('div');
}
function pt(e) {
  return ['Element', 'Fragment'].some(function (t) {
    return Rt(e, t);
  });
}
function mi(e) {
  return Rt(e, 'NodeList');
}
function yi(e) {
  return Rt(e, 'MouseEvent');
}
function Ci(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Bi(e) {
  return pt(e) ? [e] : mi(e) ? ct(e) : Array.isArray(e) ? e : ct(document.querySelectorAll(e));
}
function dt(e, t) {
  e.forEach(function (r) {
    r && (r.style.transitionDuration = t + 'ms');
  });
}
function ir(e, t) {
  e.forEach(function (r) {
    r && r.setAttribute('data-state', t);
  });
}
function wi(e) {
  var t,
    r = Ee(e),
    n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function bi(e, t) {
  var r = t.clientX,
    n = t.clientY;
  return e.every(function (i) {
    var o = i.popperRect,
      c = i.popperState,
      u = i.props,
      s = u.interactiveBorder,
      f = vi(c.placement),
      p = c.modifiersData.offset;
    if (!p) return !0;
    var m = f === 'bottom' ? p.top.y : 0,
      y = f === 'top' ? p.bottom.y : 0,
      g = f === 'right' ? p.left.x : 0,
      v = f === 'left' ? p.right.x : 0,
      h = o.top - n + m > s,
      w = n - o.bottom - y > s,
      B = o.left - r + g > s,
      Q = r - o.right - v > s;
    return h || w || B || Q;
  });
}
function ht(e, t, r) {
  var n = t + 'EventListener';
  ['transitionend', 'webkitTransitionEnd'].forEach(function (i) {
    e[n](i, r);
  });
}
function or(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r)) return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var ee = { isTouch: !1 },
  ar = 0;
function Ei() {
  ee.isTouch || ((ee.isTouch = !0), window.performance && document.addEventListener('mousemove', Or));
}
function Or() {
  var e = performance.now();
  e - ar < 20 && ((ee.isTouch = !1), document.removeEventListener('mousemove', Or)), (ar = e);
}
function Ii() {
  var e = document.activeElement;
  if (Ci(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Qi() {
  document.addEventListener('touchstart', Ei, he), window.addEventListener('blur', Ii);
}
var Di = typeof window < 'u' && typeof document < 'u',
  Oi = Di ? !!window.msCrypto : !1,
  Si = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  ki = {
    allowHTML: !1,
    animation: 'fade',
    arrow: !0,
    content: '',
    inertia: !1,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999,
  },
  X = Object.assign(
    {
      appendTo: Qr,
      aria: { content: 'auto', expanded: 'auto' },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: '',
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: 'top',
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: 'mouseenter focus',
      triggerTarget: null,
    },
    Si,
    ki,
  ),
  Mi = Object.keys(X),
  Ti = function (t) {
    var r = Object.keys(t);
    r.forEach(function (n) {
      X[n] = t[n];
    });
  };
function Sr(e) {
  var t = e.plugins || [],
    r = t.reduce(function (n, i) {
      var o = i.name,
        c = i.defaultValue;
      if (o) {
        var u;
        n[o] = e[o] !== void 0 ? e[o] : (u = X[o]) != null ? u : c;
      }
      return n;
    }, {});
  return Object.assign({}, e, r);
}
function Ri(e, t) {
  var r = t ? Object.keys(Sr(Object.assign({}, X, { plugins: t }))) : Mi,
    n = r.reduce(function (i, o) {
      var c = (e.getAttribute('data-tippy-' + o) || '').trim();
      if (!c) return i;
      if (o === 'content') i[o] = c;
      else
        try {
          i[o] = JSON.parse(c);
        } catch {
          i[o] = c;
        }
      return i;
    }, {});
  return n;
}
function sr(e, t) {
  var r = Object.assign({}, t, { content: Dr(t.content, [e]) }, t.ignoreAttributes ? {} : Ri(e, t.plugins));
  return (
    (r.aria = Object.assign({}, X.aria, r.aria)),
    (r.aria = {
      expanded: r.aria.expanded === 'auto' ? t.interactive : r.aria.expanded,
      content: r.aria.content === 'auto' ? (t.interactive ? null : 'describedby') : r.aria.content,
    }),
    r
  );
}
var Fi = function () {
  return 'innerHTML';
};
function wt(e, t) {
  e[Fi()] = t;
}
function ur(e) {
  var t = We();
  return e === !0 ? (t.className = Er) : ((t.className = Ir), pt(e) ? t.appendChild(e) : wt(t, e)), t;
}
function cr(e, t) {
  pt(t.content)
    ? (wt(e, ''), e.appendChild(t.content))
    : typeof t.content != 'function' && (t.allowHTML ? wt(e, t.content) : (e.textContent = t.content));
}
function bt(e) {
  var t = e.firstElementChild,
    r = ct(t.children);
  return {
    box: t,
    content: r.find(function (n) {
      return n.classList.contains(br);
    }),
    arrow: r.find(function (n) {
      return n.classList.contains(Er) || n.classList.contains(Ir);
    }),
    backdrop: r.find(function (n) {
      return n.classList.contains(Ai);
    }),
  };
}
function kr(e) {
  var t = We(),
    r = We();
  (r.className = gi), r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1');
  var n = We();
  (n.className = br),
    n.setAttribute('data-state', 'hidden'),
    cr(n, e.props),
    t.appendChild(r),
    r.appendChild(n),
    i(e.props, e.props);
  function i(o, c) {
    var u = bt(t),
      s = u.box,
      f = u.content,
      p = u.arrow;
    c.theme ? s.setAttribute('data-theme', c.theme) : s.removeAttribute('data-theme'),
      typeof c.animation == 'string'
        ? s.setAttribute('data-animation', c.animation)
        : s.removeAttribute('data-animation'),
      c.inertia ? s.setAttribute('data-inertia', '') : s.removeAttribute('data-inertia'),
      (s.style.maxWidth = typeof c.maxWidth == 'number' ? c.maxWidth + 'px' : c.maxWidth),
      c.role ? s.setAttribute('role', c.role) : s.removeAttribute('role'),
      (o.content !== c.content || o.allowHTML !== c.allowHTML) && cr(f, e.props),
      c.arrow
        ? p
          ? o.arrow !== c.arrow && (s.removeChild(p), s.appendChild(ur(c.arrow)))
          : s.appendChild(ur(c.arrow))
        : p && s.removeChild(p);
  }
  return { popper: t, onUpdate: i };
}
kr.$$tippy = !0;
var Ui = 1,
  at = [],
  vt = [];
function xi(e, t) {
  var r = sr(e, Object.assign({}, X, Sr(nr(t)))),
    n,
    i,
    o,
    c = !1,
    u = !1,
    s = !1,
    f = !1,
    p,
    m,
    y,
    g = [],
    v = tr(je, r.interactiveDebounce),
    h,
    w = Ui++,
    B = null,
    Q = hi(r.plugins),
    O = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
    a = {
      id: w,
      reference: e,
      popper: We(),
      popperInstance: B,
      props: r,
      state: O,
      plugins: Q,
      clearDelayTimeouts: et,
      setProps: tt,
      setContent: rt,
      show: Mr,
      hide: Tr,
      hideWithInteractivity: Rr,
      enable: Ye,
      disable: $e,
      unmount: Fr,
      destroy: Ur,
    };
  if (!r.render) return a;
  var E = r.render(a),
    d = E.popper,
    D = E.onUpdate;
  d.setAttribute('data-tippy-root', ''), (d.id = 'tippy-' + a.id), (a.popper = d), (e._tippy = a), (d._tippy = a);
  var R = Q.map(function (l) {
      return l.fn(a);
    }),
    T = e.hasAttribute('aria-expanded');
  return (
    Be(),
    _(),
    Y(),
    U('onCreate', [a]),
    r.showOnCreate && Ge(),
    d.addEventListener('mouseenter', function () {
      a.props.interactive && a.state.isVisible && a.clearDelayTimeouts();
    }),
    d.addEventListener('mouseleave', function () {
      a.props.interactive && a.props.trigger.indexOf('mouseenter') >= 0 && V().addEventListener('mousemove', v);
    }),
    a
  );
  function k() {
    var l = a.props.touch;
    return Array.isArray(l) ? l : [l, 0];
  }
  function F() {
    return k()[0] === 'hold';
  }
  function M() {
    var l;
    return !!((l = a.props.render) != null && l.$$tippy);
  }
  function S() {
    return h || e;
  }
  function V() {
    var l = S().parentNode;
    return l ? wi(l) : document;
  }
  function W() {
    return bt(d);
  }
  function G(l) {
    return (a.state.isMounted && !a.state.isVisible) || ee.isTouch || (p && p.type === 'focus')
      ? 0
      : At(a.props.delay, l ? 0 : 1, X.delay);
  }
  function Y(l) {
    l === void 0 && (l = !1),
      (d.style.pointerEvents = a.props.interactive && !l ? '' : 'none'),
      (d.style.zIndex = '' + a.props.zIndex);
  }
  function U(l, A, C) {
    if (
      (C === void 0 && (C = !0),
      R.forEach(function (b) {
        b[l] && b[l].apply(b, A);
      }),
      C)
    ) {
      var I;
      (I = a.props)[l].apply(I, A);
    }
  }
  function z() {
    var l = a.props.aria;
    if (l.content) {
      var A = 'aria-' + l.content,
        C = d.id,
        I = Ee(a.props.triggerTarget || e);
      I.forEach(function (b) {
        var L = b.getAttribute(A);
        if (a.state.isVisible) b.setAttribute(A, L ? L + ' ' + C : C);
        else {
          var N = L && L.replace(C, '').trim();
          N ? b.setAttribute(A, N) : b.removeAttribute(A);
        }
      });
    }
  }
  function _() {
    if (!(T || !a.props.aria.expanded)) {
      var l = Ee(a.props.triggerTarget || e);
      l.forEach(function (A) {
        a.props.interactive
          ? A.setAttribute('aria-expanded', a.state.isVisible && A === S() ? 'true' : 'false')
          : A.removeAttribute('aria-expanded');
      });
    }
  }
  function fe() {
    V().removeEventListener('mousemove', v),
      (at = at.filter(function (l) {
        return l !== v;
      }));
  }
  function $(l) {
    if (!(ee.isTouch && (s || l.type === 'mousedown'))) {
      var A = (l.composedPath && l.composedPath()[0]) || l.target;
      if (!(a.props.interactive && or(d, A))) {
        if (
          Ee(a.props.triggerTarget || e).some(function (C) {
            return or(C, A);
          })
        ) {
          if (ee.isTouch || (a.state.isVisible && a.props.trigger.indexOf('click') >= 0)) return;
        } else U('onClickOutside', [a, l]);
        a.props.hideOnClick === !0 &&
          (a.clearDelayTimeouts(),
          a.hide(),
          (u = !0),
          setTimeout(function () {
            u = !1;
          }),
          a.state.isMounted || ie());
      }
    }
  }
  function ge() {
    s = !0;
  }
  function ne() {
    s = !1;
  }
  function j() {
    var l = V();
    l.addEventListener('mousedown', $, !0),
      l.addEventListener('touchend', $, he),
      l.addEventListener('touchstart', ne, he),
      l.addEventListener('touchmove', ge, he);
  }
  function ie() {
    var l = V();
    l.removeEventListener('mousedown', $, !0),
      l.removeEventListener('touchend', $, he),
      l.removeEventListener('touchstart', ne, he),
      l.removeEventListener('touchmove', ge, he);
  }
  function ye(l, A) {
    Ce(l, function () {
      !a.state.isVisible && d.parentNode && d.parentNode.contains(d) && A();
    });
  }
  function oe(l, A) {
    Ce(l, A);
  }
  function Ce(l, A) {
    var C = W().box;
    function I(b) {
      b.target === C && (ht(C, 'remove', I), A());
    }
    if (l === 0) return A();
    ht(C, 'remove', m), ht(C, 'add', I), (m = I);
  }
  function ue(l, A, C) {
    C === void 0 && (C = !1);
    var I = Ee(a.props.triggerTarget || e);
    I.forEach(function (b) {
      b.addEventListener(l, A, C), g.push({ node: b, eventType: l, handler: A, options: C });
    });
  }
  function Be() {
    F() && (ue('touchstart', Fe, { passive: !0 }), ue('touchend', Xe, { passive: !0 })),
      di(a.props.trigger).forEach(function (l) {
        if (l !== 'manual')
          switch ((ue(l, Fe), l)) {
            case 'mouseenter':
              ue('mouseleave', Xe);
              break;
            case 'focus':
              ue(Oi ? 'focusout' : 'blur', Ue);
              break;
            case 'focusin':
              ue('focusout', Ue);
              break;
          }
      });
  }
  function Pe() {
    g.forEach(function (l) {
      var A = l.node,
        C = l.eventType,
        I = l.handler,
        b = l.options;
      A.removeEventListener(C, I, b);
    }),
      (g = []);
  }
  function Fe(l) {
    var A,
      C = !1;
    if (!(!a.state.isEnabled || xe(l) || u)) {
      var I = ((A = p) == null ? void 0 : A.type) === 'focus';
      (p = l),
        (h = l.currentTarget),
        _(),
        !a.state.isVisible &&
          yi(l) &&
          at.forEach(function (b) {
            return b(l);
          }),
        l.type === 'click' &&
        (a.props.trigger.indexOf('mouseenter') < 0 || c) &&
        a.props.hideOnClick !== !1 &&
        a.state.isVisible
          ? (C = !0)
          : Ge(l),
        l.type === 'click' && (c = !C),
        C && !I && Ae(l);
    }
  }
  function je(l) {
    var A = l.target,
      C = S().contains(A) || d.contains(A);
    if (!(l.type === 'mousemove' && C)) {
      var I = ce()
        .concat(d)
        .map(function (b) {
          var L,
            N = b._tippy,
            we = (L = N.popperInstance) == null ? void 0 : L.state;
          return we ? { popperRect: b.getBoundingClientRect(), popperState: we, props: r } : null;
        })
        .filter(Boolean);
      bi(I, l) && (fe(), Ae(l));
    }
  }
  function Xe(l) {
    var A = xe(l) || (a.props.trigger.indexOf('click') >= 0 && c);
    if (!A) {
      if (a.props.interactive) {
        a.hideWithInteractivity(l);
        return;
      }
      Ae(l);
    }
  }
  function Ue(l) {
    (a.props.trigger.indexOf('focusin') < 0 && l.target !== S()) ||
      (a.props.interactive && l.relatedTarget && d.contains(l.relatedTarget)) ||
      Ae(l);
  }
  function xe(l) {
    return ee.isTouch ? F() !== l.type.indexOf('touch') >= 0 : !1;
  }
  function ze() {
    _e();
    var l = a.props,
      A = l.popperOptions,
      C = l.placement,
      I = l.offset,
      b = l.getReferenceClientRect,
      L = l.moveTransition,
      N = M() ? bt(d).arrow : null,
      we = b ? { getBoundingClientRect: b, contextElement: b.contextElement || S() } : e,
      Ft = {
        name: '$$tippy',
        enabled: !0,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function (nt) {
          var be = nt.state;
          if (M()) {
            var xr = W(),
              gt = xr.box;
            ['placement', 'reference-hidden', 'escaped'].forEach(function (it) {
              it === 'placement'
                ? gt.setAttribute('data-placement', be.placement)
                : be.attributes.popper['data-popper-' + it]
                ? gt.setAttribute('data-' + it, '')
                : gt.removeAttribute('data-' + it);
            }),
              (be.attributes.popper = {});
          }
        },
      },
      de = [
        { name: 'offset', options: { offset: I } },
        { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
        { name: 'flip', options: { padding: 5 } },
        { name: 'computeStyles', options: { adaptive: !L } },
        Ft,
      ];
    M() && N && de.push({ name: 'arrow', options: { element: N, padding: 3 } }),
      de.push.apply(de, (A == null ? void 0 : A.modifiers) || []),
      (a.popperInstance = fi(we, d, Object.assign({}, A, { placement: C, onFirstUpdate: y, modifiers: de })));
  }
  function _e() {
    a.popperInstance && (a.popperInstance.destroy(), (a.popperInstance = null));
  }
  function ae() {
    var l = a.props.appendTo,
      A,
      C = S();
    (a.props.interactive && l === Qr) || l === 'parent' ? (A = C.parentNode) : (A = Dr(l, [C])),
      A.contains(d) || A.appendChild(d),
      (a.state.isMounted = !0),
      ze();
  }
  function ce() {
    return ct(d.querySelectorAll('[data-tippy-root]'));
  }
  function Ge(l) {
    a.clearDelayTimeouts(), l && U('onTrigger', [a, l]), j();
    var A = G(!0),
      C = k(),
      I = C[0],
      b = C[1];
    ee.isTouch && I === 'hold' && b && (A = b),
      A
        ? (n = setTimeout(function () {
            a.show();
          }, A))
        : a.show();
  }
  function Ae(l) {
    if ((a.clearDelayTimeouts(), U('onUntrigger', [a, l]), !a.state.isVisible)) {
      ie();
      return;
    }
    if (
      !(
        a.props.trigger.indexOf('mouseenter') >= 0 &&
        a.props.trigger.indexOf('click') >= 0 &&
        ['mouseleave', 'mousemove'].indexOf(l.type) >= 0 &&
        c
      )
    ) {
      var A = G(!1);
      A
        ? (i = setTimeout(function () {
            a.state.isVisible && a.hide();
          }, A))
        : (o = requestAnimationFrame(function () {
            a.hide();
          }));
    }
  }
  function Ye() {
    a.state.isEnabled = !0;
  }
  function $e() {
    a.hide(), (a.state.isEnabled = !1);
  }
  function et() {
    clearTimeout(n), clearTimeout(i), cancelAnimationFrame(o);
  }
  function tt(l) {
    if (!a.state.isDestroyed) {
      U('onBeforeUpdate', [a, l]), Pe();
      var A = a.props,
        C = sr(e, Object.assign({}, A, nr(l), { ignoreAttributes: !0 }));
      (a.props = C),
        Be(),
        A.interactiveDebounce !== C.interactiveDebounce && (fe(), (v = tr(je, C.interactiveDebounce))),
        A.triggerTarget && !C.triggerTarget
          ? Ee(A.triggerTarget).forEach(function (I) {
              I.removeAttribute('aria-expanded');
            })
          : C.triggerTarget && e.removeAttribute('aria-expanded'),
        _(),
        Y(),
        D && D(A, C),
        a.popperInstance &&
          (ze(),
          ce().forEach(function (I) {
            requestAnimationFrame(I._tippy.popperInstance.forceUpdate);
          })),
        U('onAfterUpdate', [a, l]);
    }
  }
  function rt(l) {
    a.setProps({ content: l });
  }
  function Mr() {
    var l = a.state.isVisible,
      A = a.state.isDestroyed,
      C = !a.state.isEnabled,
      I = ee.isTouch && !a.props.touch,
      b = At(a.props.duration, 0, X.duration);
    if (!(l || A || C || I) && !S().hasAttribute('disabled') && (U('onShow', [a], !1), a.props.onShow(a) !== !1)) {
      if (
        ((a.state.isVisible = !0),
        M() && (d.style.visibility = 'visible'),
        Y(),
        j(),
        a.state.isMounted || (d.style.transition = 'none'),
        M())
      ) {
        var L = W(),
          N = L.box,
          we = L.content;
        dt([N, we], 0);
      }
      (y = function () {
        var de;
        if (!(!a.state.isVisible || f)) {
          if (((f = !0), d.offsetHeight, (d.style.transition = a.props.moveTransition), M() && a.props.animation)) {
            var ft = W(),
              nt = ft.box,
              be = ft.content;
            dt([nt, be], b), ir([nt, be], 'visible');
          }
          z(),
            _(),
            rr(vt, a),
            (de = a.popperInstance) == null || de.forceUpdate(),
            U('onMount', [a]),
            a.props.animation &&
              M() &&
              oe(b, function () {
                (a.state.isShown = !0), U('onShown', [a]);
              });
        }
      }),
        ae();
    }
  }
  function Tr() {
    var l = !a.state.isVisible,
      A = a.state.isDestroyed,
      C = !a.state.isEnabled,
      I = At(a.props.duration, 1, X.duration);
    if (!(l || A || C) && (U('onHide', [a], !1), a.props.onHide(a) !== !1)) {
      if (
        ((a.state.isVisible = !1),
        (a.state.isShown = !1),
        (f = !1),
        (c = !1),
        M() && (d.style.visibility = 'hidden'),
        fe(),
        ie(),
        Y(!0),
        M())
      ) {
        var b = W(),
          L = b.box,
          N = b.content;
        a.props.animation && (dt([L, N], I), ir([L, N], 'hidden'));
      }
      z(), _(), a.props.animation ? M() && ye(I, a.unmount) : a.unmount();
    }
  }
  function Rr(l) {
    V().addEventListener('mousemove', v), rr(at, v), v(l);
  }
  function Fr() {
    a.state.isVisible && a.hide(),
      a.state.isMounted &&
        (_e(),
        ce().forEach(function (l) {
          l._tippy.unmount();
        }),
        d.parentNode && d.parentNode.removeChild(d),
        (vt = vt.filter(function (l) {
          return l !== a;
        })),
        (a.state.isMounted = !1),
        U('onHidden', [a]));
  }
  function Ur() {
    a.state.isDestroyed ||
      (a.clearDelayTimeouts(), a.unmount(), Pe(), delete e._tippy, (a.state.isDestroyed = !0), U('onDestroy', [a]));
  }
}
function Re(e, t) {
  t === void 0 && (t = {});
  var r = X.plugins.concat(t.plugins || []);
  Qi();
  var n = Object.assign({}, t, { plugins: r }),
    i = Bi(e),
    o = i.reduce(function (c, u) {
      var s = u && xi(u, n);
      return s && c.push(s), c;
    }, []);
  return pt(e) ? o[0] : o;
}
Re.defaultProps = X;
Re.setDefaultProps = Ti;
Re.currentInput = ee;
Object.assign({}, dr, {
  effect: function (t) {
    var r = t.state,
      n = {
        popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      };
    Object.assign(r.elements.popper.style, n.popper),
      (r.styles = n),
      r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  },
});
Re.setDefaultProps({ render: kr });
function $i(e, t = {}) {
  if (!Re) return;
  const r = { appendTo: () => document.body, theme: 'material', animation: 'shift-away' },
    n = t.content,
    i = e.title,
    o = e.getAttribute('aria-label'),
    c = String(n || i || o),
    u = Re(e, { content: c, ...r, ...t });
  return { update: () => u.setProps({ content: c, ...t }), destroy: () => u.destroy() };
}
export {
  _i as I,
  _r as U,
  ji as a,
  Xi as b,
  Zi as c,
  en as d,
  Vi as e,
  Ji as f,
  Hi as g,
  Nt as h,
  Wt as i,
  $i as j,
  Pi as k,
  zi as p,
  Wi as q,
  yt as r,
  Ni as s,
  qi as t,
};
