import { r as cr, w as ce } from './singletons.af1bc4ce.js';
import {
  X as Yt,
  Y as Ur,
  W as vt,
  s as xr,
  f as be,
  g as Qe,
  h as It,
  d as Se,
  j as G,
  i as bt,
  o as Jr,
  v as Gt,
  a as Ut,
  c as xt,
  V as Jt,
  R as Kr,
  Z as Kt,
  u as Je,
  I as Lr,
} from './scheduler.b261eb3c.js';
import { S as Wr, i as Hr, g as Vr, t as Lt, c as Nr, a as Wt, h as Zr, j as jr } from './index.5ccb46b4.js';
import { s as De } from './i18n-svelte.2f1c6e10.js';
const La = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function Wa(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Ar(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Ha(e) {
  return Math.pow(e, 4);
}
function Ht(e, { delay: t = 0, duration: r = 400, easing: n = Ur } = {}) {
  const a = +getComputedStyle(e).opacity;
  return { delay: t, duration: r, easing: n, css: (i) => `opacity: ${i * a}` };
}
function Va(e, { delay: t = 0, duration: r = 400, easing: n = Ar, x: a = 0, y: i = 0, opacity: l = 0 } = {}) {
  const u = getComputedStyle(e),
    s = +u.opacity,
    g = u.transform === 'none' ? '' : u.transform,
    A = s * (1 - l),
    [v, C] = Yt(a),
    [p, m] = Yt(i);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (h, w) => `
			transform: ${g} translate(${(1 - h) * v}${C}, ${(1 - h) * p}${m});
			opacity: ${s - A * w}`,
  };
}
function Na(e, { delay: t = 0, duration: r = 400, easing: n = Ar, axis: a = 'y' } = {}) {
  const i = getComputedStyle(e),
    l = +i.opacity,
    u = a === 'y' ? 'height' : 'width',
    s = parseFloat(i[u]),
    g = a === 'y' ? ['top', 'bottom'] : ['left', 'right'],
    A = g.map((E) => `${E[0].toUpperCase()}${E.slice(1)}`),
    v = parseFloat(i[`padding${A[0]}`]),
    C = parseFloat(i[`padding${A[1]}`]),
    p = parseFloat(i[`margin${A[0]}`]),
    m = parseFloat(i[`margin${A[1]}`]),
    h = parseFloat(i[`border${A[0]}Width`]),
    w = parseFloat(i[`border${A[1]}Width`]);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (E) =>
      `overflow: hidden;opacity: ${Math.min(E * 20, 1) * l};${u}: ${E * s}px;padding-${g[0]}: ${E * v}px;padding-${
        g[1]
      }: ${E * C}px;margin-${g[0]}: ${E * p}px;margin-${g[1]}: ${E * m}px;border-${g[0]}-width: ${E * h}px;border-${
        g[1]
      }-width: ${E * w}px;`,
  };
}
const Pr = { 2023: 4 },
  qr = { English: 4 },
  Xr = { FirstBot: 2 },
  zr = { Year: Pr, Language: qr, Series: Xr },
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
  Za = ce(!1),
  ja = ce(_r.DefaultDesktopShowTagFilter),
  Pa = cr($r),
  en = (() => {
    let e = new Map();
    const { subscribe: t, set: r } = ce(e),
      n = (i) => {
        var l;
        e.has(i.category) || e.set(i.category, new Set()), (l = e.get(i.category)) == null || l.add(i.name), r(e);
      },
      a = (i) => {
        var l, u;
        e.has(i.category) &&
          ((l = e.get(i.category)) == null || l.delete(i.name),
          ((u = e.get(i.category)) == null ? void 0 : u.size) === 0 && e.delete(i.category),
          r(e));
      };
    return {
      subscribe: t,
      init: () => {
        (e = new Map()), r(e);
      },
      add: (i, l) => {
        var u;
        e.has(i) || e.set(i, new Set()), (u = e.get(i)) == null || u.add(l), r(e);
      },
      addByTag: n,
      delByTag: a,
      has: (i) => {
        var l;
        return (l = e.get(i.category)) == null ? void 0 : l.has(i.name);
      },
      toggle: (i) => {
        var l;
        e.has(i.category) && (l = e.get(i.category)) != null && l.has(i.name) ? a(i) : n(i);
      },
      toString: () => {
        const i = [];
        return (
          e.forEach((l, u) => {
            i.push(`${u === 'tags' ? u : `tags-${u}`}=${Array.from(l).toString()}`);
          }),
          i.join('&')
        );
      },
    };
  })(),
  tn = [
    [
      'custom-email-with-cloudflare-and-gmail',
      {
        slug: 'custom-email-with-cloudflare-and-gmail',
        title: 'Create a Custom Email address with Gmail and Cloudflare',
        language: 'English',
        description: 'Create a custom email address using gmail and cloudflare for free',
        summary: '📩 Create a custom email address in 10 minutes',
        content:
          'MIJQogggKmAEG2AVQMpQPIFlZkxAkgDLwAiJ4KKsAYuiDeGAFBP4B2sALgBYCmsAEwCWAcyGcAhgBtYEkbwA0sbhIBuQtiNmwAxgFcAzpwD2AW1i9TEoTIkCBAJ14GDsNsc6xjbKQE9Z9q4SsAAODsYAZs4GQt7STCZ6OtxcxrC+xnoOumamemxCOhKcsRwARnqe0gZpvGwqbDrOsGUOEmwCsEICdSWcvgB0sOxc3EKunJXGDkLSCkwA7rwA5FIyC9IA1umZo+F6Iik8/GHGTS5eEbAGvJwlmrB6Idr6RmYWVjYBjtGPMZpMYBSTICCJSCROHCfGQgTL3LTtToAcWhsBQmCgAAUhgAhfzHCwdS6jcawER6bqKHZ6VYyMq8JgSMpSfgma51TqI2BOJpCVT8SzWKSuQwaLQZLJeBYcARmaxsJTSdZjFmwFn8tpiB7HJghYxLbJcpxSWZlGzifyRWAooUDFhMTHgcAARSQ+BQ+BgKBYON4EWm/CWgj5/A0bIJRl4IQMSism34Biy/AlyjUrL4sH9a31YtCTicAEcKTFOM0NLrwU0AFwsWAAKngHAkOhK/OtqObOkybE4dvr8EEco03N4YkjTk6C3EKSBILBEN4fYbEB05wmaQl2VlnzYy1cJAAclQbncxa5vIhgXpQeCnHaWCgwFAkJjYABNdBIehI9DoJGEOAIGAYBPwPKB7TAA8IBxADYAAJhoICMHoCAkCgAAJSCoHwah8GAaB8HQA8WHwK4U2kJw7H8FQ2zqJkWU6TgFjSCJmxMQ1Kj4HshAiQpilKaldHaa4JCiPxrk2IRnh4cYmEjEJ71gABGIZ0BCOpqWyJFjGMERVRXLt8k8ABtbg7mjKsAHpLNMXxO27XsRB0vTFy7UxLIAXQAbiYeChhQXgWRbWAACIAv0GZ+hCroOAJNg1FEfiLxCdpAp82AAGYhiQDpeGyQAcAhQUQCgeYc2W03SWQUQBcAnZILOGiuCAFoUFLZ4ADU8p4viSm8EKlGODgQqRW5fNgcajAhUsBBC9KABYhmoYxswWUZ+G8JqDB0JwNPkgx70BcBoEAg94ExV9MQgSgAHU6BIFgICbEJnhSlxmIcTpSWCJSADYmuEMRPFerbjB6UZijJEMgjVX4bgi/gJGerwt14dQml1PLTHGGILzZTtfk3a1nP01cHMUlTYDUjSCQgJHMQkN7pgEVwuzYGpVVM8yDCsmy7NJoyBicyrXLMSzEeehmDHe5mPLG8aL0JiqXNkfme3SuChigXx1O0eLTH4f1skJ8WTSKXrzCEAZF1CzB/GAQwTHMMBoRC3ysrRUTAv8N5IQJX7/tEcRQklrseiUCVaTcXheEYsZXHBUsHAOyDoNg4BCE/EhqEICBwGWKhcAIYgQE/bCDyRFhnaFCYVCqSF9mmvZMkOS851vVkN0ybIwj9PKJw+IUYrKYwAA8lHpNg/XEJgInCcw6gaJpOjhrILSUAwUvMXipETsVFSJIRTFOflOh6E0NSZc1+iGWdr3nJwmCrr5YUqXM2KCaHTlLFsQzVCRfDypmaYmkB5fA0LPBmnAHBJEmE4eYBgxiBWEKVTws93h6lLNxaQexeDFCCESYwIQShYwAF65gJMYC+axQEyF4CPdSMw6hNHJkMbSqQ1qtzvu3WAJAGbcGHhCTonNOAWWsgIPhAwdBXhvAuSRZgPKyCJDceqmk5aDh3OrVhaQ2RPxkLo2AL94TWluGiSQDhprpXdmAHsgCCSvEdjQ74TgLjDntm8cwEB7DONcAACkttbAAlPNIY1jE4cMFF8OwPwLgpg2D2EBEThTsPpEAhwGwPox3YeWca40SDOHuElDgnjom+P8UMIJvkACs/lAq8GCsASipZFGdGAN4e4egDbLWBKtAkGgjDQJ/heG48S2SExENCNRUTvF9h+lo9hBJDzHjqb1DgVoCTiIQQIj6zTvi614KtKAAANKAI4uzbKnDwNaaiszdNzKzTBnAaxMAAN4AAEzKmBkK1GYmgBhtAWAAAyYCFVQABeDeEQlIxSkdeXgVYAD6EKBimBHpI6R99FyT08BoGFPQEVIqFi5OR5gAB+SoQoAoAL72ggGQd8n56Dp0ztnXOYAmolzQmAEgOA8BEFgBga0vLCAsHQI0fgwhOTUIJD3dQmRXBBiKBwXi8U1j+CiRw+x7wpm/DZOM20tYKZsNGV3dsg8DIOVgMI0Rlk9U2GJZ5NEtx4SuHNUZAwmjHUqOKYojwfBsiJKcb8fIPRsgBSJJgM17q3aLRsDIAkhtzAXKOBmPW60rgEgDVyAkt8ZFOCag3TJiS1F+KtuUx43EdDbBClARpsh8GyBNAzWavkFo0FjRwyeI9UHTETdODhNycylTYAmwpNYclogxK+AKDgNRVmuKYERgtoTErUZiaYjzYCVIABwAHY1FIBuA4VNc6xkdi8b8EtgTV2S2lnOgk4tg6Mw+lUoYhBcFtigIQKgdFmSZKkYUbY3rXU9l8rMxA3heIOHMBms9JTYBJo1aDfgSsWR7nZPElMxrJS2qkJM1WvYIIHgAFLoDfCwN8ux3CrRogjTMehVXwemJJB4AaeAQ1JAW2O+wW45oxewnkvAQxMESfgzohhmgoZWK4dEWJ2QztsWkYZsdLD3mulxVGgCUxKb2atAN6hghIgjTYWMEh4zXCTOwqW4hkgcKU3lRkpMPpinElh7uTgohODFftIAA=',
        html: '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',
        created: '2023-12-03T14:58:03.553Z',
        published: '2023-12-03T15:58:03.000+01:00',
        updated: '2023-12-03T15:58:03.000+01:00',
        cover: '/custom-email-with-cloudflare-and-gmail/cover.jpg',
        coverCaption:
          'Photo by <a href="https://unsplash.com/@solenfeyissa">Solen Feyissa</a> on <a href="https://unsplash.com/photos/windows-7-logo-on-black-background-M7zS8puGg18">Unsplash</a>',
        coverStyle: 'IN',
        tags: [{ Year: '2023' }, { Language: 'English' }],
        toc: [
          {
            level: 1,
            heading: 'Create a Custom Email Address for Free',
            slug: '#create-a-custom-email-address-for-free',
            child: [{ level: 2, heading: 'Prerequisites', slug: '#prerequisites' }],
          },
          {
            level: 1,
            heading: 'Setup Your Google Account',
            slug: '#setup-your-google-account',
            child: [
              { level: 2, heading: 'Enable 2 Factor Authentification', slug: '#enable-2-factor-authentification' },
              { level: 2, heading: 'Create an App Password', slug: '#create-an-app-password' },
            ],
          },
          {
            level: 1,
            heading: 'Enable Cloudflare&#39;s Email Routing',
            slug: '#enable-cloudflare-and-39-s-email-routing',
          },
          {
            level: 1,
            heading: 'Add Your Cloudflare-Routed Email to Gmail',
            slug: '#add-your-cloudflare-routed-email-to-gmail',
          },
          { level: 1, heading: 'Enjoy', slug: '#enjoy' },
        ],
        prev: '7-reasons-i-love-hetzner',
      },
    ],
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
        next: 'custom-email-with-cloudflare-and-gmail',
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
  return new Worker('' + new URL('../workers/search-4ec9a56c.js', import.meta.url).href);
}
const Vt = ce(!1),
  qa = ce(!1),
  Ct = ce(void 0),
  Xa = (() => {
    const { subscribe: e, set: t } = ce('');
    let r;
    const n = () => {
        vt(Vt) ||
          ((r = new rn()),
          r.addEventListener('message', (l) => {
            const { type: u, payload: s } = l.data;
            u === 'query' && (Ct.set(s), Nt.filter());
          }),
          r.postMessage({ type: 'init' }),
          Vt.set(!0));
      },
      a = (l) => {
        t(l), l && l.length > 0 ? r.postMessage({ type: 'query', payload: l }) : i();
      },
      i = () => {
        t(''), Ct.set(void 0), Nt.filter();
      };
    return { subscribe: e, init: n, set: a, reset: i };
  })(),
  gr = tn,
  za = cr(new Map(gr)),
  Nt = (() => {
    const e = gr.filter((u) => !(u[1].options && u[1].options.includes('unlisted'))).flatMap((u) => u[1]),
      { subscribe: t, set: r } = ce(e),
      n = () => {
        r(e);
      },
      a = (u) => {
        let s = u;
        const g = vt(Ct);
        return g && (s = s.filter((A) => g.includes(A.slug))), s;
      },
      i = (u) => {
        let s = u;
        return (
          vt(en).forEach((g, A) => {
            A === 'tags'
              ? g.forEach((v) => {
                  s = s.filter((C) =>
                    C.tags
                      ? C.tags.find((p) => (typeof p == 'string' ? p === v : Array.isArray(p) ? p.includes(v) : !1))
                      : !1,
                  );
                })
              : g.forEach((v) => {
                  s = s.filter((C) =>
                    C.tags
                      ? C.tags.find((p) => {
                          if (typeof p == 'object' && p[A] !== void 0)
                            return Array.isArray(p[A]) ? p[A].includes(v) : p[A] === v;
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
        (u = i(u)), (u = a(u)), r(u);
      },
    };
  })();
function nn(e) {
  let t, r;
  return {
    c() {
      (t = be('div')), this.h();
    },
    l(n) {
      (t = Qe(n, 'DIV', { class: !0 })), It(t).forEach(Se), this.h();
    },
    h() {
      G(t, 'class', (r = 'i-line-md-github-loop ' + (e[0] ?? '!h-32 !w-32')));
    },
    m(n, a) {
      bt(n, t, a);
    },
    p(n, a) {
      a & 1 && r !== (r = 'i-line-md-github-loop ' + (n[0] ?? '!h-32 !w-32')) && G(t, 'class', r);
    },
    i: Gt,
    o: Gt,
    d(n) {
      n && Se(t);
    },
  };
}
function an(e) {
  let t, r, n, a, i, l, u, s, g, A, v, C, p;
  return {
    c() {
      (t = be('picture')), (r = be('source')), (a = Ut()), (i = be('source')), (u = Ut()), (s = be('img')), this.h();
    },
    l(m) {
      t = Qe(m, 'PICTURE', { class: !0 });
      var h = It(t);
      (r = Qe(h, 'SOURCE', { srcset: !0, type: !0 })),
        (a = xt(h)),
        (i = Qe(h, 'SOURCE', { srcset: !0, type: !0 })),
        (u = xt(h)),
        (s = Qe(h, 'IMG', { draggable: !0, src: !0, alt: !0, width: !0, height: !0, class: !0 })),
        h.forEach(Se),
        this.h();
    },
    h() {
      Jt(r, (n = `${De.author.avatar_128[0]}`.replace(/^\./, ''))) || G(r, 'srcset', n),
        G(r, 'type', 'image/avif'),
        Jt(i, (l = `${De.author.avatar_128[1]}`.replace(/^\./, ''))) || G(i, 'srcset', l),
        G(i, 'type', 'image/webp'),
        G(s, 'draggable', 'false'),
        Kr(s.src, (g = De.author.avatar)) || G(s, 'src', g),
        G(s, 'alt', De.author.avatar),
        G(s, 'width', e[1]),
        G(s, 'height', e[2]),
        G(
          s,
          'class',
          (A =
            Kt(
              e[0] ??
                'rounded-full shadow-xl !w-32 !h-32 aspect-auto object-cover hover:rotate-[360deg] transition-transform duration-1000 ease-in-out',
            ) + ' svelte-j9opb1'),
        ),
        G(t, 'class', 'u-photo');
    },
    m(m, h) {
      bt(m, t, h), Je(t, r), Je(t, a), Je(t, i), Je(t, u), Je(t, s), (p = !0);
    },
    p(m, h) {
      (!p || h & 2) && G(s, 'width', m[1]),
        (!p || h & 4) && G(s, 'height', m[2]),
        (!p ||
          (h & 1 &&
            A !==
              (A =
                Kt(
                  m[0] ??
                    'rounded-full shadow-xl !w-32 !h-32 aspect-auto object-cover hover:rotate-[360deg] transition-transform duration-1000 ease-in-out',
                ) + ' svelte-j9opb1'))) &&
          G(s, 'class', A);
    },
    i(m) {
      p ||
        (Lr(() => {
          p && (C && C.end(1), (v = Zr(t, Ht, { duration: 300, delay: 300 })), v.start());
        }),
        (p = !0));
    },
    o(m) {
      v && v.invalidate(), (C = jr(t, Ht, { duration: 300 })), (p = !1);
    },
    d(m) {
      m && Se(t), m && C && C.end();
    },
  };
}
function on(e) {
  let t, r, n, a;
  const i = [an, nn],
    l = [];
  function u(s, g) {
    return s[3] && De.author.avatar && De.author.avatar_128 ? 0 : 1;
  }
  return (
    (r = u(e)),
    (n = l[r] = i[r](e)),
    {
      c() {
        (t = be('figure')), n.c(), this.h();
      },
      l(s) {
        t = Qe(s, 'FIGURE', { class: !0 });
        var g = It(t);
        n.l(g), g.forEach(Se), this.h();
      },
      h() {
        G(t, 'class', 'avatar select-none svelte-j9opb1');
      },
      m(s, g) {
        bt(s, t, g), l[r].m(t, null), (a = !0);
      },
      p(s, [g]) {
        let A = r;
        (r = u(s)),
          r === A
            ? l[r].p(s, g)
            : (Vr(),
              Lt(l[A], 1, 1, () => {
                l[A] = null;
              }),
              Nr(),
              (n = l[r]),
              n ? n.p(s, g) : ((n = l[r] = i[r](s)), n.c()),
              Wt(n, 1),
              n.m(t, null));
      },
      i(s) {
        a || (Wt(n), (a = !0));
      },
      o(s) {
        Lt(n), (a = !1);
      },
      d(s) {
        s && Se(t), l[r].d();
      },
    }
  );
}
function sn(e, t, r) {
  let { class: n = void 0 } = t,
    { width: a = '128px' } = t,
    { height: i = '128px' } = t,
    l = !1;
  return (
    Jr(() => {
      r(3, (l = !0));
    }),
    (e.$$set = (u) => {
      'class' in u && r(0, (n = u.class)), 'width' in u && r(1, (a = u.width)), 'height' in u && r(2, (i = u.height));
    }),
    [n, a, i, l]
  );
}
class _a extends Wr {
  constructor(t) {
    super(), Hr(this, t, sn, on, xr, { class: 0, width: 1, height: 2 });
  }
}
var K = 'top',
  j = 'bottom',
  P = 'right',
  L = 'left',
  Qt = 'auto',
  Ze = [K, j, P, L],
  Oe = 'start',
  Ve = 'end',
  un = 'clippingParents',
  pr = 'viewport',
  Ke = 'popper',
  ln = 'reference',
  Zt = Ze.reduce(function (e, t) {
    return e.concat([t + '-' + Oe, t + '-' + Ve]);
  }, []),
  fr = [].concat(Ze, [Qt]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Oe, t + '-' + Ve]);
  }, []),
  cn = 'beforeRead',
  An = 'read',
  gn = 'afterRead',
  pn = 'beforeMain',
  fn = 'main',
  dn = 'afterMain',
  hn = 'beforeWrite',
  mn = 'write',
  vn = 'afterWrite',
  Cn = [cn, An, gn, pn, fn, dn, hn, mn, vn];
function re(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function V(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ve(e) {
  var t = V(e).Element;
  return e instanceof t || e instanceof Element;
}
function Z(e) {
  var t = V(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Dt(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = V(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Z(i) ||
      !re(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (l) {
        var u = a[l];
        u === !1 ? i.removeAttribute(l) : i.setAttribute(l, u === !0 ? '' : u);
      }));
  });
}
function En(e) {
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
        var a = t.elements[n],
          i = t.attributes[n] || {},
          l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = l.reduce(function (s, g) {
            return (s[g] = ''), s;
          }, {});
        !Z(a) ||
          !re(a) ||
          (Object.assign(a.style, u),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const dr = { name: 'applyStyles', enabled: !0, phase: 'write', fn: Bn, effect: En, requires: ['computeStyles'] };
function te(e) {
  return e.split('-')[0];
}
var me = Math.max,
  ut = Math.min,
  ke = Math.round;
function Bt() {
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
  return !/^((?!chrome|android).)*safari/i.test(Bt());
}
function Me(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Z(e) &&
    ((a = (e.offsetWidth > 0 && ke(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ke(n.height) / e.offsetHeight) || 1));
  var l = ve(e) ? V(e) : window,
    u = l.visualViewport,
    s = !hr() && r,
    g = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    A = (n.top + (s && u ? u.offsetTop : 0)) / i,
    v = n.width / a,
    C = n.height / i;
  return { width: v, height: C, top: A, right: g + v, bottom: A + C, left: g, x: g, y: A };
}
function St(e) {
  var t = Me(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function mr(e, t) {
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
  return V(e).getComputedStyle(e);
}
function wn(e) {
  return ['table', 'td', 'th'].indexOf(re(e)) >= 0;
}
function Ae(e) {
  return ((ve(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ct(e) {
  return re(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Dt(e) ? e.host : null) || Ae(e);
}
function jt(e) {
  return !Z(e) || se(e).position === 'fixed' ? null : e.offsetParent;
}
function yn(e) {
  var t = /firefox/i.test(Bt()),
    r = /Trident/i.test(Bt());
  if (r && Z(e)) {
    var n = se(e);
    if (n.position === 'fixed') return null;
  }
  var a = ct(e);
  for (Dt(a) && (a = a.host); Z(a) && ['html', 'body'].indexOf(re(a)) < 0; ) {
    var i = se(a);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function je(e) {
  for (var t = V(e), r = jt(e); r && wn(r) && se(r).position === 'static'; ) r = jt(r);
  return r && (re(r) === 'html' || (re(r) === 'body' && se(r).position === 'static')) ? t : r || yn(e) || t;
}
function Ot(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Le(e, t, r) {
  return me(e, ut(t, r));
}
function In(e, t, r) {
  var n = Le(e, t, r);
  return n > r ? r : n;
}
function vr() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Cr(e) {
  return Object.assign({}, vr(), e);
}
function Br(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var bn = function (t, r) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Cr(typeof t != 'number' ? t : Br(t, Ze))
  );
};
function Qn(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    l = r.modifiersData.popperOffsets,
    u = te(r.placement),
    s = Ot(u),
    g = [L, P].indexOf(u) >= 0,
    A = g ? 'height' : 'width';
  if (!(!i || !l)) {
    var v = bn(a.padding, r),
      C = St(i),
      p = s === 'y' ? K : L,
      m = s === 'y' ? j : P,
      h = r.rects.reference[A] + r.rects.reference[s] - l[s] - r.rects.popper[A],
      w = l[s] - r.rects.reference[s],
      E = je(i),
      Q = E ? (s === 'y' ? E.clientHeight || 0 : E.clientWidth || 0) : 0,
      S = h / 2 - w / 2,
      o = v[p],
      I = Q - C[A] - v[m],
      d = Q / 2 - C[A] / 2 + S,
      D = Le(o, d, I),
      F = s;
    r.modifiersData[n] = ((t = {}), (t[F] = D), (t.centerOffset = D - d), t);
  }
}
function Dn(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? '[data-popper-arrow]' : n;
  a != null &&
    ((typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (mr(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Sn = {
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
var On = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function kn(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: ke(r * a) / a || 0, y: ke(n * a) / a || 0 };
}
function Pt(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    l = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    g = e.adaptive,
    A = e.roundOffsets,
    v = e.isFixed,
    C = l.x,
    p = C === void 0 ? 0 : C,
    m = l.y,
    h = m === void 0 ? 0 : m,
    w = typeof A == 'function' ? A({ x: p, y: h }) : { x: p, y: h };
  (p = w.x), (h = w.y);
  var E = l.hasOwnProperty('x'),
    Q = l.hasOwnProperty('y'),
    S = L,
    o = K,
    I = window;
  if (g) {
    var d = je(r),
      D = 'clientHeight',
      F = 'clientWidth';
    if (
      (d === V(r) &&
        ((d = Ae(r)), se(d).position !== 'static' && u === 'absolute' && ((D = 'scrollHeight'), (F = 'scrollWidth'))),
      (d = d),
      a === K || ((a === L || a === P) && i === Ve))
    ) {
      o = j;
      var T = v && d === I && I.visualViewport ? I.visualViewport.height : d[D];
      (h -= T - n.height), (h *= s ? 1 : -1);
    }
    if (a === L || ((a === K || a === j) && i === Ve)) {
      S = P;
      var k = v && d === I && I.visualViewport ? I.visualViewport.width : d[F];
      (p -= k - n.width), (p *= s ? 1 : -1);
    }
  }
  var R = Object.assign({ position: u }, g && On),
    M = A === !0 ? kn({ x: p, y: h }, V(r)) : { x: p, y: h };
  if (((p = M.x), (h = M.y), s)) {
    var O;
    return Object.assign(
      {},
      R,
      ((O = {}),
      (O[o] = Q ? '0' : ''),
      (O[S] = E ? '0' : ''),
      (O.transform =
        (I.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + h + 'px)'
          : 'translate3d(' + p + 'px, ' + h + 'px, 0)'),
      O),
    );
  }
  return Object.assign(
    {},
    R,
    ((t = {}), (t[o] = Q ? h + 'px' : ''), (t[S] = E ? p + 'px' : ''), (t.transform = ''), t),
  );
}
function Mn(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    l = i === void 0 ? !0 : i,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    g = {
      placement: te(t.placement),
      variation: Te(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Pt(
        Object.assign({}, g, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Pt(
          Object.assign({}, g, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: s }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
}
const Tn = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Mn, data: {} };
var it = { passive: !0 };
function Fn(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    l = n.resize,
    u = l === void 0 ? !0 : l,
    s = V(t.elements.popper),
    g = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      g.forEach(function (A) {
        A.addEventListener('scroll', r.update, it);
      }),
    u && s.addEventListener('resize', r.update, it),
    function () {
      i &&
        g.forEach(function (A) {
          A.removeEventListener('scroll', r.update, it);
        }),
        u && s.removeEventListener('resize', r.update, it);
    }
  );
}
const Rn = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Fn, data: {} };
var Yn = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function st(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Yn[t];
  });
}
var Gn = { start: 'end', end: 'start' };
function qt(e) {
  return e.replace(/start|end/g, function (t) {
    return Gn[t];
  });
}
function kt(e) {
  var t = V(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Mt(e) {
  return Me(Ae(e)).left + kt(e).scrollLeft;
}
function Un(e, t) {
  var r = V(e),
    n = Ae(e),
    a = r.visualViewport,
    i = n.clientWidth,
    l = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    (i = a.width), (l = a.height);
    var g = hr();
    (g || (!g && t === 'fixed')) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: l, x: u + Mt(e), y: s };
}
function xn(e) {
  var t,
    r = Ae(e),
    n = kt(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = me(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    l = me(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    u = -n.scrollLeft + Mt(e),
    s = -n.scrollTop;
  return (
    se(a || r).direction === 'rtl' && (u += me(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: l, x: u, y: s }
  );
}
function Tt(e) {
  var t = se(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Er(e) {
  return ['html', 'body', '#document'].indexOf(re(e)) >= 0 ? e.ownerDocument.body : Z(e) && Tt(e) ? e : Er(ct(e));
}
function We(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Er(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = V(n),
    l = a ? [i].concat(i.visualViewport || [], Tt(n) ? n : []) : n,
    u = t.concat(l);
  return a ? u : u.concat(We(ct(l)));
}
function Et(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Jn(e, t) {
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
  return t === pr ? Et(Un(e, r)) : ve(t) ? Jn(t, r) : Et(xn(Ae(e)));
}
function Kn(e) {
  var t = We(ct(e)),
    r = ['absolute', 'fixed'].indexOf(se(e).position) >= 0,
    n = r && Z(e) ? je(e) : e;
  return ve(n)
    ? t.filter(function (a) {
        return ve(a) && mr(a, n) && re(a) !== 'body';
      })
    : [];
}
function Ln(e, t, r, n) {
  var a = t === 'clippingParents' ? Kn(e) : [].concat(t),
    i = [].concat(a, [r]),
    l = i[0],
    u = i.reduce(
      function (s, g) {
        var A = Xt(e, g, n);
        return (
          (s.top = me(A.top, s.top)),
          (s.right = ut(A.right, s.right)),
          (s.bottom = ut(A.bottom, s.bottom)),
          (s.left = me(A.left, s.left)),
          s
        );
      },
      Xt(e, l, n),
    );
  return (u.width = u.right - u.left), (u.height = u.bottom - u.top), (u.x = u.left), (u.y = u.top), u;
}
function wr(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? te(n) : null,
    i = n ? Te(n) : null,
    l = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case K:
      s = { x: l, y: t.y - r.height };
      break;
    case j:
      s = { x: l, y: t.y + t.height };
      break;
    case P:
      s = { x: t.x + t.width, y: u };
      break;
    case L:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var g = a ? Ot(a) : null;
  if (g != null) {
    var A = g === 'y' ? 'height' : 'width';
    switch (i) {
      case Oe:
        s[g] = s[g] - (t[A] / 2 - r[A] / 2);
        break;
      case Ve:
        s[g] = s[g] + (t[A] / 2 - r[A] / 2);
        break;
    }
  }
  return s;
}
function Ne(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    l = i === void 0 ? e.strategy : i,
    u = r.boundary,
    s = u === void 0 ? un : u,
    g = r.rootBoundary,
    A = g === void 0 ? pr : g,
    v = r.elementContext,
    C = v === void 0 ? Ke : v,
    p = r.altBoundary,
    m = p === void 0 ? !1 : p,
    h = r.padding,
    w = h === void 0 ? 0 : h,
    E = Cr(typeof w != 'number' ? w : Br(w, Ze)),
    Q = C === Ke ? ln : Ke,
    S = e.rects.popper,
    o = e.elements[m ? Q : C],
    I = Ln(ve(o) ? o : o.contextElement || Ae(e.elements.popper), s, A, l),
    d = Me(e.elements.reference),
    D = wr({ reference: d, element: S, strategy: 'absolute', placement: a }),
    F = Et(Object.assign({}, S, D)),
    T = C === Ke ? F : d,
    k = {
      top: I.top - T.top + E.top,
      bottom: T.bottom - I.bottom + E.bottom,
      left: I.left - T.left + E.left,
      right: T.right - I.right + E.right,
    },
    R = e.modifiersData.offset;
  if (C === Ke && R) {
    var M = R[a];
    Object.keys(k).forEach(function (O) {
      var W = [P, j].indexOf(O) >= 0 ? 1 : -1,
        H = [K, j].indexOf(O) >= 0 ? 'y' : 'x';
      k[O] += M[H] * W;
    });
  }
  return k;
}
function Wn(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    l = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    g = s === void 0 ? fr : s,
    A = Te(n),
    v = A
      ? u
        ? Zt
        : Zt.filter(function (m) {
            return Te(m) === A;
          })
      : Ze,
    C = v.filter(function (m) {
      return g.indexOf(m) >= 0;
    });
  C.length === 0 && (C = v);
  var p = C.reduce(function (m, h) {
    return (m[h] = Ne(e, { placement: h, boundary: a, rootBoundary: i, padding: l })[te(h)]), m;
  }, {});
  return Object.keys(p).sort(function (m, h) {
    return p[m] - p[h];
  });
}
function Hn(e) {
  if (te(e) === Qt) return [];
  var t = st(e);
  return [qt(e), t, qt(t)];
}
function Vn(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        l = r.altAxis,
        u = l === void 0 ? !0 : l,
        s = r.fallbackPlacements,
        g = r.padding,
        A = r.boundary,
        v = r.rootBoundary,
        C = r.altBoundary,
        p = r.flipVariations,
        m = p === void 0 ? !0 : p,
        h = r.allowedAutoPlacements,
        w = t.options.placement,
        E = te(w),
        Q = E === w,
        S = s || (Q || !m ? [st(w)] : Hn(w)),
        o = [w].concat(S).reduce(function (ne, q) {
          return ne.concat(
            te(q) === Qt
              ? Wn(t, {
                  placement: q,
                  boundary: A,
                  rootBoundary: v,
                  padding: g,
                  flipVariations: m,
                  allowedAutoPlacements: h,
                })
              : q,
          );
        }, []),
        I = t.rects.reference,
        d = t.rects.popper,
        D = new Map(),
        F = !0,
        T = o[0],
        k = 0;
      k < o.length;
      k++
    ) {
      var R = o[k],
        M = te(R),
        O = Te(R) === Oe,
        W = [K, j].indexOf(M) >= 0,
        H = W ? 'width' : 'height',
        U = Ne(t, { placement: R, boundary: A, rootBoundary: v, altBoundary: C, padding: g }),
        x = W ? (O ? P : L) : O ? j : K;
      I[H] > d[H] && (x = st(x));
      var Y = st(x),
        z = [];
      if (
        (i && z.push(U[M] <= 0),
        u && z.push(U[x] <= 0, U[Y] <= 0),
        z.every(function (ne) {
          return ne;
        }))
      ) {
        (T = R), (F = !1);
        break;
      }
      D.set(R, z);
    }
    if (F)
      for (
        var _ = m ? 3 : 1,
          ge = function (q) {
            var ae = o.find(function (Ce) {
              var ie = D.get(Ce);
              if (ie)
                return ie.slice(0, q).every(function (Be) {
                  return Be;
                });
            });
            if (ae) return (T = ae), 'break';
          },
          $ = _;
        $ > 0;
        $--
      ) {
        var pe = ge($);
        if (pe === 'break') break;
      }
    t.placement !== T && ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const Nn = { name: 'flip', enabled: !0, phase: 'main', fn: Vn, requiresIfExists: ['offset'], data: { _skip: !1 } };
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
  return [K, P, j, L].some(function (t) {
    return e[t] >= 0;
  });
}
function Zn(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    l = Ne(t, { elementContext: 'reference' }),
    u = Ne(t, { altBoundary: !0 }),
    s = zt(l, n),
    g = zt(u, a, i),
    A = _t(s),
    v = _t(g);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: g,
    isReferenceHidden: A,
    hasPopperEscaped: v,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': A,
      'data-popper-escaped': v,
    }));
}
const jn = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Zn };
function Pn(e, t, r) {
  var n = te(e),
    a = [L, K].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    l = i[0],
    u = i[1];
  return (l = l || 0), (u = (u || 0) * a), [L, P].indexOf(n) >= 0 ? { x: u, y: l } : { x: l, y: u };
}
function qn(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    l = fr.reduce(function (A, v) {
      return (A[v] = Pn(v, t.rects, i)), A;
    }, {}),
    u = l[t.placement],
    s = u.x,
    g = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += g)),
    (t.modifiersData[n] = l);
}
const Xn = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: qn };
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
function ea(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    l = r.altAxis,
    u = l === void 0 ? !1 : l,
    s = r.boundary,
    g = r.rootBoundary,
    A = r.altBoundary,
    v = r.padding,
    C = r.tether,
    p = C === void 0 ? !0 : C,
    m = r.tetherOffset,
    h = m === void 0 ? 0 : m,
    w = Ne(t, { boundary: s, rootBoundary: g, padding: v, altBoundary: A }),
    E = te(t.placement),
    Q = Te(t.placement),
    S = !Q,
    o = Ot(E),
    I = $n(o),
    d = t.modifiersData.popperOffsets,
    D = t.rects.reference,
    F = t.rects.popper,
    T = typeof h == 'function' ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    k = typeof T == 'number' ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (d) {
    if (i) {
      var O,
        W = o === 'y' ? K : L,
        H = o === 'y' ? j : P,
        U = o === 'y' ? 'height' : 'width',
        x = d[o],
        Y = x + w[W],
        z = x - w[H],
        _ = p ? -F[U] / 2 : 0,
        ge = Q === Oe ? D[U] : F[U],
        $ = Q === Oe ? -F[U] : -D[U],
        pe = t.elements.arrow,
        ne = p && pe ? St(pe) : { width: 0, height: 0 },
        q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : vr(),
        ae = q[W],
        Ce = q[H],
        ie = Le(0, D[U], ne[U]),
        Be = S ? D[U] / 2 - _ - ie - ae - k.mainAxis : ge - ie - ae - k.mainAxis,
        ue = S ? -D[U] / 2 + _ + ie + Ce + k.mainAxis : $ + ie + Ce + k.mainAxis,
        Ee = t.elements.arrow && je(t.elements.arrow),
        Pe = Ee ? (o === 'y' ? Ee.clientTop || 0 : Ee.clientLeft || 0) : 0,
        Re = (O = R == null ? void 0 : R[o]) != null ? O : 0,
        qe = x + Be - Re - Pe,
        Xe = x + ue - Re,
        Ye = Le(p ? ut(Y, qe) : Y, x, p ? me(z, Xe) : z);
      (d[o] = Ye), (M[o] = Ye - x);
    }
    if (u) {
      var Ge,
        ze = o === 'x' ? K : L,
        _e = o === 'x' ? j : P,
        oe = d[I],
        le = I === 'y' ? 'height' : 'width',
        Ue = oe + w[ze],
        fe = oe - w[_e],
        xe = [K, L].indexOf(E) !== -1,
        $e = (Ge = R == null ? void 0 : R[I]) != null ? Ge : 0,
        et = xe ? Ue : oe - D[le] - F[le] - $e + k.altAxis,
        tt = xe ? oe + D[le] + F[le] - $e - k.altAxis : fe,
        rt = p && xe ? In(et, oe, tt) : Le(p ? et : Ue, oe, p ? tt : fe);
      (d[I] = rt), (M[I] = rt - oe);
    }
    t.modifiersData[n] = M;
  }
}
const ta = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: ea, requiresIfExists: ['offset'] };
function ra(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function na(e) {
  return e === V(e) || !Z(e) ? kt(e) : ra(e);
}
function aa(e) {
  var t = e.getBoundingClientRect(),
    r = ke(t.width) / e.offsetWidth || 1,
    n = ke(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ia(e, t, r) {
  r === void 0 && (r = !1);
  var n = Z(t),
    a = Z(t) && aa(t),
    i = Ae(t),
    l = Me(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((re(t) !== 'body' || Tt(i)) && (u = na(t)),
      Z(t) ? ((s = Me(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = Mt(i))),
    { x: l.left + u.scrollLeft - s.x, y: l.top + u.scrollTop - s.y, width: l.width, height: l.height }
  );
}
function oa(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && a(s);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || a(i);
    }),
    n
  );
}
function sa(e) {
  var t = oa(e);
  return Cn.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function ua(e) {
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
function la(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
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
function ca(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? $t : a;
  return function (u, s, g) {
    g === void 0 && (g = i);
    var A = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, $t, i),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      v = [],
      C = !1,
      p = {
        state: A,
        setOptions: function (E) {
          var Q = typeof E == 'function' ? E(A.options) : E;
          h(),
            (A.options = Object.assign({}, i, A.options, Q)),
            (A.scrollParents = {
              reference: ve(u) ? We(u) : u.contextElement ? We(u.contextElement) : [],
              popper: We(s),
            });
          var S = sa(la([].concat(n, A.options.modifiers)));
          return (
            (A.orderedModifiers = S.filter(function (o) {
              return o.enabled;
            })),
            m(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!C) {
            var E = A.elements,
              Q = E.reference,
              S = E.popper;
            if (er(Q, S)) {
              (A.rects = { reference: ia(Q, je(S), A.options.strategy === 'fixed'), popper: St(S) }),
                (A.reset = !1),
                (A.placement = A.options.placement),
                A.orderedModifiers.forEach(function (k) {
                  return (A.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var o = 0; o < A.orderedModifiers.length; o++) {
                if (A.reset === !0) {
                  (A.reset = !1), (o = -1);
                  continue;
                }
                var I = A.orderedModifiers[o],
                  d = I.fn,
                  D = I.options,
                  F = D === void 0 ? {} : D,
                  T = I.name;
                typeof d == 'function' && (A = d({ state: A, options: F, name: T, instance: p }) || A);
              }
            }
          }
        },
        update: ua(function () {
          return new Promise(function (w) {
            p.forceUpdate(), w(A);
          });
        }),
        destroy: function () {
          h(), (C = !0);
        },
      };
    if (!er(u, s)) return p;
    p.setOptions(g).then(function (w) {
      !C && g.onFirstUpdate && g.onFirstUpdate(w);
    });
    function m() {
      A.orderedModifiers.forEach(function (w) {
        var E = w.name,
          Q = w.options,
          S = Q === void 0 ? {} : Q,
          o = w.effect;
        if (typeof o == 'function') {
          var I = o({ state: A, name: E, instance: p, options: S }),
            d = function () {};
          v.push(I || d);
        }
      });
    }
    function h() {
      v.forEach(function (w) {
        return w();
      }),
        (v = []);
    }
    return p;
  };
}
var Aa = [Rn, _n, Tn, dr, Xn, Nn, ta, Sn, jn],
  ga = ca({ defaultModifiers: Aa }),
  pa = 'tippy-box',
  yr = 'tippy-content',
  fa = 'tippy-backdrop',
  Ir = 'tippy-arrow',
  br = 'tippy-svg-arrow',
  he = { passive: !0, capture: !0 },
  Qr = function () {
    return document.body;
  };
function ft(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function Ft(e, t) {
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
function da(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Ie(e) {
  return [].concat(e);
}
function rr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ha(e) {
  return e.filter(function (t, r) {
    return e.indexOf(t) === r;
  });
}
function ma(e) {
  return e.split('-')[0];
}
function lt(e) {
  return [].slice.call(e);
}
function nr(e) {
  return Object.keys(e).reduce(function (t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function He() {
  return document.createElement('div');
}
function At(e) {
  return ['Element', 'Fragment'].some(function (t) {
    return Ft(e, t);
  });
}
function va(e) {
  return Ft(e, 'NodeList');
}
function Ca(e) {
  return Ft(e, 'MouseEvent');
}
function Ba(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Ea(e) {
  return At(e) ? [e] : va(e) ? lt(e) : Array.isArray(e) ? e : lt(document.querySelectorAll(e));
}
function dt(e, t) {
  e.forEach(function (r) {
    r && (r.style.transitionDuration = t + 'ms');
  });
}
function ar(e, t) {
  e.forEach(function (r) {
    r && r.setAttribute('data-state', t);
  });
}
function wa(e) {
  var t,
    r = Ie(e),
    n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function ya(e, t) {
  var r = t.clientX,
    n = t.clientY;
  return e.every(function (a) {
    var i = a.popperRect,
      l = a.popperState,
      u = a.props,
      s = u.interactiveBorder,
      g = ma(l.placement),
      A = l.modifiersData.offset;
    if (!A) return !0;
    var v = g === 'bottom' ? A.top.y : 0,
      C = g === 'top' ? A.bottom.y : 0,
      p = g === 'right' ? A.left.x : 0,
      m = g === 'left' ? A.right.x : 0,
      h = i.top - n + v > s,
      w = n - i.bottom - C > s,
      E = i.left - r + p > s,
      Q = r - i.right - m > s;
    return h || w || E || Q;
  });
}
function ht(e, t, r) {
  var n = t + 'EventListener';
  ['transitionend', 'webkitTransitionEnd'].forEach(function (a) {
    e[n](a, r);
  });
}
function ir(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r)) return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var ee = { isTouch: !1 },
  or = 0;
function Ia() {
  ee.isTouch || ((ee.isTouch = !0), window.performance && document.addEventListener('mousemove', Sr));
}
function Sr() {
  var e = performance.now();
  e - or < 20 && ((ee.isTouch = !1), document.removeEventListener('mousemove', Sr)), (or = e);
}
function ba() {
  var e = document.activeElement;
  if (Ba(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Qa() {
  document.addEventListener('touchstart', Ia, he), window.addEventListener('blur', ba);
}
var Da = typeof window < 'u' && typeof document < 'u',
  Sa = Da ? !!window.msCrypto : !1,
  Oa = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  ka = {
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
    Oa,
    ka,
  ),
  Ma = Object.keys(X),
  Ta = function (t) {
    var r = Object.keys(t);
    r.forEach(function (n) {
      X[n] = t[n];
    });
  };
function Or(e) {
  var t = e.plugins || [],
    r = t.reduce(function (n, a) {
      var i = a.name,
        l = a.defaultValue;
      if (i) {
        var u;
        n[i] = e[i] !== void 0 ? e[i] : (u = X[i]) != null ? u : l;
      }
      return n;
    }, {});
  return Object.assign({}, e, r);
}
function Fa(e, t) {
  var r = t ? Object.keys(Or(Object.assign({}, X, { plugins: t }))) : Ma,
    n = r.reduce(function (a, i) {
      var l = (e.getAttribute('data-tippy-' + i) || '').trim();
      if (!l) return a;
      if (i === 'content') a[i] = l;
      else
        try {
          a[i] = JSON.parse(l);
        } catch {
          a[i] = l;
        }
      return a;
    }, {});
  return n;
}
function sr(e, t) {
  var r = Object.assign({}, t, { content: Dr(t.content, [e]) }, t.ignoreAttributes ? {} : Fa(e, t.plugins));
  return (
    (r.aria = Object.assign({}, X.aria, r.aria)),
    (r.aria = {
      expanded: r.aria.expanded === 'auto' ? t.interactive : r.aria.expanded,
      content: r.aria.content === 'auto' ? (t.interactive ? null : 'describedby') : r.aria.content,
    }),
    r
  );
}
var Ra = function () {
  return 'innerHTML';
};
function wt(e, t) {
  e[Ra()] = t;
}
function ur(e) {
  var t = He();
  return e === !0 ? (t.className = Ir) : ((t.className = br), At(e) ? t.appendChild(e) : wt(t, e)), t;
}
function lr(e, t) {
  At(t.content)
    ? (wt(e, ''), e.appendChild(t.content))
    : typeof t.content != 'function' && (t.allowHTML ? wt(e, t.content) : (e.textContent = t.content));
}
function yt(e) {
  var t = e.firstElementChild,
    r = lt(t.children);
  return {
    box: t,
    content: r.find(function (n) {
      return n.classList.contains(yr);
    }),
    arrow: r.find(function (n) {
      return n.classList.contains(Ir) || n.classList.contains(br);
    }),
    backdrop: r.find(function (n) {
      return n.classList.contains(fa);
    }),
  };
}
function kr(e) {
  var t = He(),
    r = He();
  (r.className = pa), r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1');
  var n = He();
  (n.className = yr),
    n.setAttribute('data-state', 'hidden'),
    lr(n, e.props),
    t.appendChild(r),
    r.appendChild(n),
    a(e.props, e.props);
  function a(i, l) {
    var u = yt(t),
      s = u.box,
      g = u.content,
      A = u.arrow;
    l.theme ? s.setAttribute('data-theme', l.theme) : s.removeAttribute('data-theme'),
      typeof l.animation == 'string'
        ? s.setAttribute('data-animation', l.animation)
        : s.removeAttribute('data-animation'),
      l.inertia ? s.setAttribute('data-inertia', '') : s.removeAttribute('data-inertia'),
      (s.style.maxWidth = typeof l.maxWidth == 'number' ? l.maxWidth + 'px' : l.maxWidth),
      l.role ? s.setAttribute('role', l.role) : s.removeAttribute('role'),
      (i.content !== l.content || i.allowHTML !== l.allowHTML) && lr(g, e.props),
      l.arrow
        ? A
          ? i.arrow !== l.arrow && (s.removeChild(A), s.appendChild(ur(l.arrow)))
          : s.appendChild(ur(l.arrow))
        : A && s.removeChild(A);
  }
  return { popper: t, onUpdate: a };
}
kr.$$tippy = !0;
var Ya = 1,
  ot = [],
  mt = [];
function Ga(e, t) {
  var r = sr(e, Object.assign({}, X, Or(nr(t)))),
    n,
    a,
    i,
    l = !1,
    u = !1,
    s = !1,
    g = !1,
    A,
    v,
    C,
    p = [],
    m = tr(qe, r.interactiveDebounce),
    h,
    w = Ya++,
    E = null,
    Q = ha(r.plugins),
    S = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
    o = {
      id: w,
      reference: e,
      popper: He(),
      popperInstance: E,
      props: r,
      state: S,
      plugins: Q,
      clearDelayTimeouts: et,
      setProps: tt,
      setContent: rt,
      show: Mr,
      hide: Tr,
      hideWithInteractivity: Fr,
      enable: xe,
      disable: $e,
      unmount: Rr,
      destroy: Yr,
    };
  if (!r.render) return o;
  var I = r.render(o),
    d = I.popper,
    D = I.onUpdate;
  d.setAttribute('data-tippy-root', ''), (d.id = 'tippy-' + o.id), (o.popper = d), (e._tippy = o), (d._tippy = o);
  var F = Q.map(function (c) {
      return c.fn(o);
    }),
    T = e.hasAttribute('aria-expanded');
  return (
    Ee(),
    _(),
    x(),
    Y('onCreate', [o]),
    r.showOnCreate && Ue(),
    d.addEventListener('mouseenter', function () {
      o.props.interactive && o.state.isVisible && o.clearDelayTimeouts();
    }),
    d.addEventListener('mouseleave', function () {
      o.props.interactive && o.props.trigger.indexOf('mouseenter') >= 0 && W().addEventListener('mousemove', m);
    }),
    o
  );
  function k() {
    var c = o.props.touch;
    return Array.isArray(c) ? c : [c, 0];
  }
  function R() {
    return k()[0] === 'hold';
  }
  function M() {
    var c;
    return !!((c = o.props.render) != null && c.$$tippy);
  }
  function O() {
    return h || e;
  }
  function W() {
    var c = O().parentNode;
    return c ? wa(c) : document;
  }
  function H() {
    return yt(d);
  }
  function U(c) {
    return (o.state.isMounted && !o.state.isVisible) || ee.isTouch || (A && A.type === 'focus')
      ? 0
      : ft(o.props.delay, c ? 0 : 1, X.delay);
  }
  function x(c) {
    c === void 0 && (c = !1),
      (d.style.pointerEvents = o.props.interactive && !c ? '' : 'none'),
      (d.style.zIndex = '' + o.props.zIndex);
  }
  function Y(c, f, B) {
    if (
      (B === void 0 && (B = !0),
      F.forEach(function (y) {
        y[c] && y[c].apply(y, f);
      }),
      B)
    ) {
      var b;
      (b = o.props)[c].apply(b, f);
    }
  }
  function z() {
    var c = o.props.aria;
    if (c.content) {
      var f = 'aria-' + c.content,
        B = d.id,
        b = Ie(o.props.triggerTarget || e);
      b.forEach(function (y) {
        var J = y.getAttribute(f);
        if (o.state.isVisible) y.setAttribute(f, J ? J + ' ' + B : B);
        else {
          var N = J && J.replace(B, '').trim();
          N ? y.setAttribute(f, N) : y.removeAttribute(f);
        }
      });
    }
  }
  function _() {
    if (!(T || !o.props.aria.expanded)) {
      var c = Ie(o.props.triggerTarget || e);
      c.forEach(function (f) {
        o.props.interactive
          ? f.setAttribute('aria-expanded', o.state.isVisible && f === O() ? 'true' : 'false')
          : f.removeAttribute('aria-expanded');
      });
    }
  }
  function ge() {
    W().removeEventListener('mousemove', m),
      (ot = ot.filter(function (c) {
        return c !== m;
      }));
  }
  function $(c) {
    if (!(ee.isTouch && (s || c.type === 'mousedown'))) {
      var f = (c.composedPath && c.composedPath()[0]) || c.target;
      if (!(o.props.interactive && ir(d, f))) {
        if (
          Ie(o.props.triggerTarget || e).some(function (B) {
            return ir(B, f);
          })
        ) {
          if (ee.isTouch || (o.state.isVisible && o.props.trigger.indexOf('click') >= 0)) return;
        } else Y('onClickOutside', [o, c]);
        o.props.hideOnClick === !0 &&
          (o.clearDelayTimeouts(),
          o.hide(),
          (u = !0),
          setTimeout(function () {
            u = !1;
          }),
          o.state.isMounted || ae());
      }
    }
  }
  function pe() {
    s = !0;
  }
  function ne() {
    s = !1;
  }
  function q() {
    var c = W();
    c.addEventListener('mousedown', $, !0),
      c.addEventListener('touchend', $, he),
      c.addEventListener('touchstart', ne, he),
      c.addEventListener('touchmove', pe, he);
  }
  function ae() {
    var c = W();
    c.removeEventListener('mousedown', $, !0),
      c.removeEventListener('touchend', $, he),
      c.removeEventListener('touchstart', ne, he),
      c.removeEventListener('touchmove', pe, he);
  }
  function Ce(c, f) {
    Be(c, function () {
      !o.state.isVisible && d.parentNode && d.parentNode.contains(d) && f();
    });
  }
  function ie(c, f) {
    Be(c, f);
  }
  function Be(c, f) {
    var B = H().box;
    function b(y) {
      y.target === B && (ht(B, 'remove', b), f());
    }
    if (c === 0) return f();
    ht(B, 'remove', v), ht(B, 'add', b), (v = b);
  }
  function ue(c, f, B) {
    B === void 0 && (B = !1);
    var b = Ie(o.props.triggerTarget || e);
    b.forEach(function (y) {
      y.addEventListener(c, f, B), p.push({ node: y, eventType: c, handler: f, options: B });
    });
  }
  function Ee() {
    R() && (ue('touchstart', Re, { passive: !0 }), ue('touchend', Xe, { passive: !0 })),
      da(o.props.trigger).forEach(function (c) {
        if (c !== 'manual')
          switch ((ue(c, Re), c)) {
            case 'mouseenter':
              ue('mouseleave', Xe);
              break;
            case 'focus':
              ue(Sa ? 'focusout' : 'blur', Ye);
              break;
            case 'focusin':
              ue('focusout', Ye);
              break;
          }
      });
  }
  function Pe() {
    p.forEach(function (c) {
      var f = c.node,
        B = c.eventType,
        b = c.handler,
        y = c.options;
      f.removeEventListener(B, b, y);
    }),
      (p = []);
  }
  function Re(c) {
    var f,
      B = !1;
    if (!(!o.state.isEnabled || Ge(c) || u)) {
      var b = ((f = A) == null ? void 0 : f.type) === 'focus';
      (A = c),
        (h = c.currentTarget),
        _(),
        !o.state.isVisible &&
          Ca(c) &&
          ot.forEach(function (y) {
            return y(c);
          }),
        c.type === 'click' &&
        (o.props.trigger.indexOf('mouseenter') < 0 || l) &&
        o.props.hideOnClick !== !1 &&
        o.state.isVisible
          ? (B = !0)
          : Ue(c),
        c.type === 'click' && (l = !B),
        B && !b && fe(c);
    }
  }
  function qe(c) {
    var f = c.target,
      B = O().contains(f) || d.contains(f);
    if (!(c.type === 'mousemove' && B)) {
      var b = le()
        .concat(d)
        .map(function (y) {
          var J,
            N = y._tippy,
            we = (J = N.popperInstance) == null ? void 0 : J.state;
          return we ? { popperRect: y.getBoundingClientRect(), popperState: we, props: r } : null;
        })
        .filter(Boolean);
      ya(b, c) && (ge(), fe(c));
    }
  }
  function Xe(c) {
    var f = Ge(c) || (o.props.trigger.indexOf('click') >= 0 && l);
    if (!f) {
      if (o.props.interactive) {
        o.hideWithInteractivity(c);
        return;
      }
      fe(c);
    }
  }
  function Ye(c) {
    (o.props.trigger.indexOf('focusin') < 0 && c.target !== O()) ||
      (o.props.interactive && c.relatedTarget && d.contains(c.relatedTarget)) ||
      fe(c);
  }
  function Ge(c) {
    return ee.isTouch ? R() !== c.type.indexOf('touch') >= 0 : !1;
  }
  function ze() {
    _e();
    var c = o.props,
      f = c.popperOptions,
      B = c.placement,
      b = c.offset,
      y = c.getReferenceClientRect,
      J = c.moveTransition,
      N = M() ? yt(d).arrow : null,
      we = y ? { getBoundingClientRect: y, contextElement: y.contextElement || O() } : e,
      Rt = {
        name: '$$tippy',
        enabled: !0,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function (nt) {
          var ye = nt.state;
          if (M()) {
            var Gr = H(),
              pt = Gr.box;
            ['placement', 'reference-hidden', 'escaped'].forEach(function (at) {
              at === 'placement'
                ? pt.setAttribute('data-placement', ye.placement)
                : ye.attributes.popper['data-popper-' + at]
                ? pt.setAttribute('data-' + at, '')
                : pt.removeAttribute('data-' + at);
            }),
              (ye.attributes.popper = {});
          }
        },
      },
      de = [
        { name: 'offset', options: { offset: b } },
        { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
        { name: 'flip', options: { padding: 5 } },
        { name: 'computeStyles', options: { adaptive: !J } },
        Rt,
      ];
    M() && N && de.push({ name: 'arrow', options: { element: N, padding: 3 } }),
      de.push.apply(de, (f == null ? void 0 : f.modifiers) || []),
      (o.popperInstance = ga(we, d, Object.assign({}, f, { placement: B, onFirstUpdate: C, modifiers: de })));
  }
  function _e() {
    o.popperInstance && (o.popperInstance.destroy(), (o.popperInstance = null));
  }
  function oe() {
    var c = o.props.appendTo,
      f,
      B = O();
    (o.props.interactive && c === Qr) || c === 'parent' ? (f = B.parentNode) : (f = Dr(c, [B])),
      f.contains(d) || f.appendChild(d),
      (o.state.isMounted = !0),
      ze();
  }
  function le() {
    return lt(d.querySelectorAll('[data-tippy-root]'));
  }
  function Ue(c) {
    o.clearDelayTimeouts(), c && Y('onTrigger', [o, c]), q();
    var f = U(!0),
      B = k(),
      b = B[0],
      y = B[1];
    ee.isTouch && b === 'hold' && y && (f = y),
      f
        ? (n = setTimeout(function () {
            o.show();
          }, f))
        : o.show();
  }
  function fe(c) {
    if ((o.clearDelayTimeouts(), Y('onUntrigger', [o, c]), !o.state.isVisible)) {
      ae();
      return;
    }
    if (
      !(
        o.props.trigger.indexOf('mouseenter') >= 0 &&
        o.props.trigger.indexOf('click') >= 0 &&
        ['mouseleave', 'mousemove'].indexOf(c.type) >= 0 &&
        l
      )
    ) {
      var f = U(!1);
      f
        ? (a = setTimeout(function () {
            o.state.isVisible && o.hide();
          }, f))
        : (i = requestAnimationFrame(function () {
            o.hide();
          }));
    }
  }
  function xe() {
    o.state.isEnabled = !0;
  }
  function $e() {
    o.hide(), (o.state.isEnabled = !1);
  }
  function et() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(i);
  }
  function tt(c) {
    if (!o.state.isDestroyed) {
      Y('onBeforeUpdate', [o, c]), Pe();
      var f = o.props,
        B = sr(e, Object.assign({}, f, nr(c), { ignoreAttributes: !0 }));
      (o.props = B),
        Ee(),
        f.interactiveDebounce !== B.interactiveDebounce && (ge(), (m = tr(qe, B.interactiveDebounce))),
        f.triggerTarget && !B.triggerTarget
          ? Ie(f.triggerTarget).forEach(function (b) {
              b.removeAttribute('aria-expanded');
            })
          : B.triggerTarget && e.removeAttribute('aria-expanded'),
        _(),
        x(),
        D && D(f, B),
        o.popperInstance &&
          (ze(),
          le().forEach(function (b) {
            requestAnimationFrame(b._tippy.popperInstance.forceUpdate);
          })),
        Y('onAfterUpdate', [o, c]);
    }
  }
  function rt(c) {
    o.setProps({ content: c });
  }
  function Mr() {
    var c = o.state.isVisible,
      f = o.state.isDestroyed,
      B = !o.state.isEnabled,
      b = ee.isTouch && !o.props.touch,
      y = ft(o.props.duration, 0, X.duration);
    if (!(c || f || B || b) && !O().hasAttribute('disabled') && (Y('onShow', [o], !1), o.props.onShow(o) !== !1)) {
      if (
        ((o.state.isVisible = !0),
        M() && (d.style.visibility = 'visible'),
        x(),
        q(),
        o.state.isMounted || (d.style.transition = 'none'),
        M())
      ) {
        var J = H(),
          N = J.box,
          we = J.content;
        dt([N, we], 0);
      }
      (C = function () {
        var de;
        if (!(!o.state.isVisible || g)) {
          if (((g = !0), d.offsetHeight, (d.style.transition = o.props.moveTransition), M() && o.props.animation)) {
            var gt = H(),
              nt = gt.box,
              ye = gt.content;
            dt([nt, ye], y), ar([nt, ye], 'visible');
          }
          z(),
            _(),
            rr(mt, o),
            (de = o.popperInstance) == null || de.forceUpdate(),
            Y('onMount', [o]),
            o.props.animation &&
              M() &&
              ie(y, function () {
                (o.state.isShown = !0), Y('onShown', [o]);
              });
        }
      }),
        oe();
    }
  }
  function Tr() {
    var c = !o.state.isVisible,
      f = o.state.isDestroyed,
      B = !o.state.isEnabled,
      b = ft(o.props.duration, 1, X.duration);
    if (!(c || f || B) && (Y('onHide', [o], !1), o.props.onHide(o) !== !1)) {
      if (
        ((o.state.isVisible = !1),
        (o.state.isShown = !1),
        (g = !1),
        (l = !1),
        M() && (d.style.visibility = 'hidden'),
        ge(),
        ae(),
        x(!0),
        M())
      ) {
        var y = H(),
          J = y.box,
          N = y.content;
        o.props.animation && (dt([J, N], b), ar([J, N], 'hidden'));
      }
      z(), _(), o.props.animation ? M() && Ce(b, o.unmount) : o.unmount();
    }
  }
  function Fr(c) {
    W().addEventListener('mousemove', m), rr(ot, m), m(c);
  }
  function Rr() {
    o.state.isVisible && o.hide(),
      o.state.isMounted &&
        (_e(),
        le().forEach(function (c) {
          c._tippy.unmount();
        }),
        d.parentNode && d.parentNode.removeChild(d),
        (mt = mt.filter(function (c) {
          return c !== o;
        })),
        (o.state.isMounted = !1),
        Y('onHidden', [o]));
  }
  function Yr() {
    o.state.isDestroyed ||
      (o.clearDelayTimeouts(), o.unmount(), Pe(), delete e._tippy, (o.state.isDestroyed = !0), Y('onDestroy', [o]));
  }
}
function Fe(e, t) {
  t === void 0 && (t = {});
  var r = X.plugins.concat(t.plugins || []);
  Qa();
  var n = Object.assign({}, t, { plugins: r }),
    a = Ea(e),
    i = a.reduce(function (l, u) {
      var s = u && Ga(u, n);
      return s && l.push(s), l;
    }, []);
  return At(e) ? i[0] : i;
}
Fe.defaultProps = X;
Fe.setDefaultProps = Ta;
Fe.currentInput = ee;
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
Fe.setDefaultProps({ render: kr });
function $a(e, t = {}) {
  if (!Fe) return;
  const r = { appendTo: () => document.body, theme: 'material', animation: 'shift-away' },
    n = t.content,
    a = e.title,
    i = e.getAttribute('aria-label'),
    l = String(n || a || i),
    u = Fe(e, { content: l, ...r, ...t });
  return { update: () => u.setProps({ content: l, ...t }), destroy: () => u.destroy() };
}
export {
  _a as I,
  _r as U,
  qa as a,
  Xa as b,
  Za as c,
  en as d,
  Wa as e,
  Va as f,
  La as g,
  Nt as h,
  Ht as i,
  $a as j,
  Pa as k,
  za as p,
  Ha as q,
  Ct as r,
  Na as s,
  ja as t,
};
