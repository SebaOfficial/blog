import {
  s as k,
  e as w,
  i as S,
  d as _,
  y as I,
  f as v,
  g as b,
  j as i,
  R as p,
  v as U,
  a as C,
  h as j,
  c as B,
  u as E,
  I as q,
  w as M,
  V as y,
} from './scheduler.b261eb3c.js';
import { S as G, i as z, a as N, t as O, h as P, j as V } from './index.5ccb46b4.js';
import { U as g, i as R, e as A } from './tippy.a1e8f09d.js';
import { r as D } from './singletons.af1bc4ce.js';
const F = '' + new URL('../assets/404.9de340c4.webp', import.meta.url).href,
  H = '' + new URL('../assets/404.3df25504.avif', import.meta.url).href,
  J = '' + new URL('../assets/avatar.9d2117a3.png', import.meta.url).href,
  K = '' + new URL('../assets/avatar.79e8785a.avif', import.meta.url).href,
  Q = '' + new URL('../assets/cover.591e2c0e.avif', import.meta.url).href,
  W = '' + new URL('../assets/cover.ed3357af.webp', import.meta.url).href,
  X = '' + new URL('../assets/cover.a3c999af.avif', import.meta.url).href,
  Y = '' + new URL('../assets/github-mark.7a0dd11e.svg', import.meta.url).href,
  Z = '' + new URL('../assets/github-mark.7a0dd11e.svg?w=768&h=320&format=avif&imagetools', import.meta.url).href,
  x = '' + new URL('../assets/right-arrow.3907c376.svg', import.meta.url).href,
  $ = '' + new URL('../assets/right-arrow.3907c376.svg?w=768&h=320&format=avif&imagetools', import.meta.url).href,
  ee = '' + new URL('../assets/cover.cc906006.avif', import.meta.url).href,
  te = '' + new URL('../assets/cover.0813ca5c.avif', import.meta.url).href,
  re = '' + new URL('../assets/cover.a9d2fd81.jpg', import.meta.url).href,
  ae = '' + new URL('../assets/cover.35b15004.avif', import.meta.url).href,
  ie = '' + new URL('../assets/cover.20b76685.avif', import.meta.url).href,
  se = '' + new URL('../assets/cover.76630b80.avif', import.meta.url).href,
  ne = '' + new URL('../assets/cover.b98f3e8c.jpg', import.meta.url).href,
  oe = '' + new URL('../assets/cover.fd1a5cd5.avif', import.meta.url).href,
  le = '' + new URL('../assets/cover.0ffb5f23.avif', import.meta.url).href,
  ce = '' + new URL('../assets/cover.45fd416f.avif', import.meta.url).href,
  fe = '' + new URL('../assets/cover.ec8ca6f4.jpg', import.meta.url).href,
  he = '' + new URL('../assets/cover.c6f2ad72.avif', import.meta.url).href,
  ue = '' + new URL('../assets/cover.047f793e.avif', import.meta.url).href,
  me = '' + new URL('../assets/cover.48a80b11.avif', import.meta.url).href,
  ge = '' + new URL('../assets/cover.d0517d18.jpg', import.meta.url).href,
  de = '' + new URL('../assets/cover.4cfcd9d4.avif', import.meta.url).href,
  _e = (() => {
    const s = new Map([
        ['/404.webp', { width: 500, height: 500, original: F, banner: H }],
        ['/avatar.png', { width: 640, height: 640, original: J, banner: K }],
        ['/cover.webp', { 800: Q, width: 1024, height: 576, original: W, banner: X }],
        ['/shared/github-mark.svg', { width: 98, height: 96, original: Y, banner: Z }],
        ['/shared/right-arrow.svg', { width: 24, height: 24, original: x, banner: $ }],
        [
          '/7-reasons-i-love-hetzner/cover.jpg',
          { 800: ee, 1280: te, width: 3956, height: 2220, original: re, banner: ae },
        ],
        ['/create-an-echo-bot/cover.jpg', { 800: ie, 1280: se, width: 6e3, height: 4e3, original: ne, banner: oe }],
        [
          '/create-your-first-bot/cover.jpg',
          { 800: le, 1280: ce, width: 9471, height: 6017, original: fe, banner: he },
        ],
        [
          '/custom-email-with-cloudflare-and-gmail/cover.jpg',
          { 800: ue, 1280: me, width: 5760, height: 3840, original: ge, banner: de },
        ],
      ]),
      { subscribe: e } = D(s);
    return { subscribe: e };
  })();
function T(s, e, a) {
  const t = s.slice();
  return (t[10] = e[a]), (t[12] = a), t;
}
function Se(s) {
  let e, a;
  return {
    c() {
      (e = v('img')), this.h();
    },
    l(t) {
      (e = b(t, 'IMG', {
        draggable: !0,
        itemprop: !0,
        class: !0,
        decoding: !0,
        loading: !0,
        src: !0,
        alt: !0,
        width: !0,
        height: !0,
      })),
        this.h();
    },
    h() {
      i(e, 'draggable', 'false'),
        i(e, 'itemprop', 'image'),
        i(e, 'class', s[3]),
        i(e, 'decoding', s[7]),
        i(e, 'loading', s[6]),
        p(e.src, (a = s[4])) || i(e, 'src', a),
        i(e, 'alt', s[5]),
        i(e, 'width', s[0]),
        i(e, 'height', s[1]);
    },
    m(t, r) {
      S(t, e, r);
    },
    p(t, r) {
      r & 8 && i(e, 'class', t[3]),
        r & 128 && i(e, 'decoding', t[7]),
        r & 64 && i(e, 'loading', t[6]),
        r & 16 && !p(e.src, (a = t[4])) && i(e, 'src', a),
        r & 32 && i(e, 'alt', t[5]),
        r & 1 && i(e, 'width', t[0]),
        r & 2 && i(e, 'height', t[1]);
    },
    i: U,
    o: U,
    d(t) {
      t && _(e);
    },
  };
}
function we(s) {
  let e,
    a,
    t,
    r,
    c,
    n,
    m,
    o,
    h = g.BannerImage && g.BannerImage.format && ve(s);
  return {
    c() {
      (e = v('picture')), h && h.c(), (a = C()), (t = v('img')), this.h();
    },
    l(l) {
      e = b(l, 'PICTURE', { class: !0 });
      var f = j(e);
      h && h.l(f),
        (a = B(f)),
        (t = b(f, 'IMG', {
          draggable: !0,
          itemprop: !0,
          class: !0,
          decoding: !0,
          loading: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
        f.forEach(_),
        this.h();
    },
    h() {
      i(t, 'draggable', 'false'),
        i(t, 'itemprop', 'image'),
        i(t, 'class', s[3]),
        i(t, 'decoding', s[7]),
        i(t, 'loading', s[6]),
        p(t.src, (r = s[8].original)) || i(t, 'src', r),
        i(t, 'alt', s[5]),
        i(t, 'width', s[0]),
        i(t, 'height', s[1]),
        i(e, 'class', (c = 'select-none ' + (s[2] ?? '')));
    },
    m(l, f) {
      S(l, e, f), h && h.m(e, null), E(e, a), E(e, t), (o = !0);
    },
    p(l, f) {
      g.BannerImage && g.BannerImage.format && h.p(l, f),
        (!o || f & 8) && i(t, 'class', l[3]),
        (!o || f & 128) && i(t, 'decoding', l[7]),
        (!o || f & 64) && i(t, 'loading', l[6]),
        (!o || f & 32) && i(t, 'alt', l[5]),
        (!o || f & 1) && i(t, 'width', l[0]),
        (!o || f & 2) && i(t, 'height', l[1]),
        (!o || (f & 4 && c !== (c = 'select-none ' + (l[2] ?? '')))) && i(e, 'class', c);
    },
    i(l) {
      o ||
        (q(() => {
          o && (m && m.end(1), (n = P(e, R, { duration: 300, delay: 300 })), n.start());
        }),
        (o = !0));
    },
    o(l) {
      n && n.invalidate(), (m = V(e, R, { duration: 300 })), (o = !1);
    },
    d(l) {
      l && _(e), h && h.d(), l && m && m.end();
    },
  };
}
function ve(s) {
  let e,
    a = A(g.BannerImage.format),
    t = [];
  for (let r = 0; r < a.length; r += 1) t[r] = L(T(s, a, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = w();
    },
    l(r) {
      for (let c = 0; c < t.length; c += 1) t[c].l(r);
      e = w();
    },
    m(r, c) {
      for (let n = 0; n < t.length; n += 1) t[n] && t[n].m(r, c);
      S(r, e, c);
    },
    p(r, c) {
      if (c & 256) {
        a = A(g.BannerImage.format);
        let n;
        for (n = 0; n < a.length; n += 1) {
          const m = T(r, a, n);
          t[n] ? t[n].p(m, c) : ((t[n] = L(m)), t[n].c(), t[n].m(e.parentNode, e));
        }
        for (; n < t.length; n += 1) t[n].d(1);
        t.length = a.length;
      }
    },
    d(r) {
      r && _(e), M(t, r);
    },
  };
}
function L(s) {
  let e, a;
  return {
    c() {
      (e = v('source')), this.h();
    },
    l(t) {
      (e = b(t, 'SOURCE', { srcset: !0, width: !0, height: !0, type: !0 })), this.h();
    },
    h() {
      y(e, (a = `${Array.isArray(s[8].banner) ? s[8].banner[s[12]] : s[8].banner}`.replace(/^\./, ''))) ||
        i(e, 'srcset', a),
        i(e, 'width', g.BannerImage.width),
        i(e, 'height', g.BannerImage.height),
        i(e, 'type', `image/${s[10]}`);
    },
    m(t, r) {
      S(t, e, r);
    },
    p: U,
    d(t) {
      t && _(e);
    },
  };
}
function be(s) {
  let e, a, t, r;
  const c = [we, Se],
    n = [];
  function m(o, h) {
    return o[8] ? 0 : 1;
  }
  return (
    (e = m(s)),
    (a = n[e] = c[e](s)),
    {
      c() {
        a.c(), (t = w());
      },
      l(o) {
        a.l(o), (t = w());
      },
      m(o, h) {
        n[e].m(o, h), S(o, t, h), (r = !0);
      },
      p(o, [h]) {
        a.p(o, h);
      },
      i(o) {
        r || (N(a), (r = !0));
      },
      o(o) {
        O(a), (r = !1);
      },
      d(o) {
        o && _(t), n[e].d(o);
      },
    }
  );
}
function pe(s, e, a) {
  let t;
  I(s, _e, (u) => a(9, (t = u)));
  let { pictureClass: r = void 0 } = e,
    { imgClass: c = void 0 } = e,
    { src: n } = e,
    { alt: m = n } = e,
    { loading: o = 'eager' } = e,
    { decoding: h = 'async' } = e,
    { width: l = void 0 } = e,
    { height: f = void 0 } = e,
    d = t.get(n);
  return (
    (s.$$set = (u) => {
      'pictureClass' in u && a(2, (r = u.pictureClass)),
        'imgClass' in u && a(3, (c = u.imgClass)),
        'src' in u && a(4, (n = u.src)),
        'alt' in u && a(5, (m = u.alt)),
        'loading' in u && a(6, (o = u.loading)),
        'decoding' in u && a(7, (h = u.decoding)),
        'width' in u && a(0, (l = u.width)),
        'height' in u && a(1, (f = u.height));
    }),
    a(0, (l = d == null ? void 0 : d.width)),
    a(1, (f = d == null ? void 0 : d.height)),
    [l, f, r, c, n, m, o, h, d]
  );
}
class Te extends G {
  constructor(e) {
    super(),
      z(this, e, pe, be, k, {
        pictureClass: 2,
        imgClass: 3,
        src: 4,
        alt: 5,
        loading: 6,
        decoding: 7,
        width: 0,
        height: 1,
      });
  }
}
export { Te as I, _e as a };
