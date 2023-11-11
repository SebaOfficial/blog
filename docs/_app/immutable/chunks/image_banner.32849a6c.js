import {
  s as k,
  e as w,
  i as S,
  d,
  y as I,
  f as b,
  g as v,
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
import { U as m, i as R, e as A } from './tippy.6de01e5a.js';
import { r as D } from './singletons.3d6b7982.js';
const F = '' + new URL('../assets/404.9de340c4.webp', import.meta.url).href,
  H = '' + new URL('../assets/404.3df25504.avif', import.meta.url).href,
  J = '' + new URL('../assets/avatar.9d2117a3.png', import.meta.url).href,
  K = '' + new URL('../assets/avatar.79e8785a.avif', import.meta.url).href,
  Q = '' + new URL('../assets/cover.591e2c0e.avif', import.meta.url).href,
  W = '' + new URL('../assets/cover.ed3357af.webp', import.meta.url).href,
  X = '' + new URL('../assets/cover.a3c999af.avif', import.meta.url).href,
  Y = '' + new URL('../assets/github-mark.7a0dd11e.svg', import.meta.url).href,
  Z = '' + new URL('../assets/github-mark.7a0dd11e.svg?w=768&h=320&format=avif&imagetools', import.meta.url).href,
  x = '' + new URL('../assets/cover.cc906006.avif', import.meta.url).href,
  $ = '' + new URL('../assets/cover.0813ca5c.avif', import.meta.url).href,
  ee = '' + new URL('../assets/cover.a9d2fd81.jpg', import.meta.url).href,
  te = '' + new URL('../assets/cover.35b15004.avif', import.meta.url).href,
  ae = '' + new URL('../assets/cover.20b76685.avif', import.meta.url).href,
  re = '' + new URL('../assets/cover.76630b80.avif', import.meta.url).href,
  ie = '' + new URL('../assets/cover.b98f3e8c.jpg', import.meta.url).href,
  se = '' + new URL('../assets/cover.fd1a5cd5.avif', import.meta.url).href,
  ne = '' + new URL('../assets/cover.0ffb5f23.avif', import.meta.url).href,
  le = '' + new URL('../assets/cover.45fd416f.avif', import.meta.url).href,
  oe = '' + new URL('../assets/cover.ec8ca6f4.jpg', import.meta.url).href,
  ce = '' + new URL('../assets/cover.c6f2ad72.avif', import.meta.url).href,
  fe = (() => {
    const s = new Map([
        ['/404.webp', { width: 500, height: 500, original: F, banner: H }],
        ['/avatar.png', { width: 640, height: 640, original: J, banner: K }],
        ['/cover.webp', { 800: Q, width: 1024, height: 576, original: W, banner: X }],
        ['/shared/github-mark.svg', { width: 98, height: 96, original: Y, banner: Z }],
        [
          '/7-reasons-i-love-hetzner/cover.jpg',
          { 800: x, 1280: $, width: 3956, height: 2220, original: ee, banner: te },
        ],
        ['/create-an-echo-bot/cover.jpg', { 800: ae, 1280: re, width: 6e3, height: 4e3, original: ie, banner: se }],
        [
          '/create-your-first-bot/cover.jpg',
          { 800: ne, 1280: le, width: 9471, height: 6017, original: oe, banner: ce },
        ],
      ]),
      { subscribe: e } = D(s);
    return { subscribe: e };
  })();
function T(s, e, r) {
  const t = s.slice();
  return (t[10] = e[r]), (t[12] = r), t;
}
function he(s) {
  let e, r;
  return {
    c() {
      (e = b('img')), this.h();
    },
    l(t) {
      (e = v(t, 'IMG', {
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
        p(e.src, (r = s[4])) || i(e, 'src', r),
        i(e, 'alt', s[5]),
        i(e, 'width', s[0]),
        i(e, 'height', s[1]);
    },
    m(t, a) {
      S(t, e, a);
    },
    p(t, a) {
      a & 8 && i(e, 'class', t[3]),
        a & 128 && i(e, 'decoding', t[7]),
        a & 64 && i(e, 'loading', t[6]),
        a & 16 && !p(e.src, (r = t[4])) && i(e, 'src', r),
        a & 32 && i(e, 'alt', t[5]),
        a & 1 && i(e, 'width', t[0]),
        a & 2 && i(e, 'height', t[1]);
    },
    i: U,
    o: U,
    d(t) {
      t && d(e);
    },
  };
}
function ue(s) {
  let e,
    r,
    t,
    a,
    c,
    n,
    g,
    l,
    h = m.BannerImage && m.BannerImage.format && ge(s);
  return {
    c() {
      (e = b('picture')), h && h.c(), (r = C()), (t = b('img')), this.h();
    },
    l(o) {
      e = v(o, 'PICTURE', { class: !0 });
      var f = j(e);
      h && h.l(f),
        (r = B(f)),
        (t = v(f, 'IMG', {
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
        f.forEach(d),
        this.h();
    },
    h() {
      i(t, 'draggable', 'false'),
        i(t, 'itemprop', 'image'),
        i(t, 'class', s[3]),
        i(t, 'decoding', s[7]),
        i(t, 'loading', s[6]),
        p(t.src, (a = s[8].original)) || i(t, 'src', a),
        i(t, 'alt', s[5]),
        i(t, 'width', s[0]),
        i(t, 'height', s[1]),
        i(e, 'class', (c = 'select-none ' + (s[2] ?? '')));
    },
    m(o, f) {
      S(o, e, f), h && h.m(e, null), E(e, r), E(e, t), (l = !0);
    },
    p(o, f) {
      m.BannerImage && m.BannerImage.format && h.p(o, f),
        (!l || f & 8) && i(t, 'class', o[3]),
        (!l || f & 128) && i(t, 'decoding', o[7]),
        (!l || f & 64) && i(t, 'loading', o[6]),
        (!l || f & 32) && i(t, 'alt', o[5]),
        (!l || f & 1) && i(t, 'width', o[0]),
        (!l || f & 2) && i(t, 'height', o[1]),
        (!l || (f & 4 && c !== (c = 'select-none ' + (o[2] ?? '')))) && i(e, 'class', c);
    },
    i(o) {
      l ||
        (q(() => {
          l && (g && g.end(1), (n = P(e, R, { duration: 300, delay: 300 })), n.start());
        }),
        (l = !0));
    },
    o(o) {
      n && n.invalidate(), (g = V(e, R, { duration: 300 })), (l = !1);
    },
    d(o) {
      o && d(e), h && h.d(), o && g && g.end();
    },
  };
}
function ge(s) {
  let e,
    r = A(m.BannerImage.format),
    t = [];
  for (let a = 0; a < r.length; a += 1) t[a] = L(T(s, r, a));
  return {
    c() {
      for (let a = 0; a < t.length; a += 1) t[a].c();
      e = w();
    },
    l(a) {
      for (let c = 0; c < t.length; c += 1) t[c].l(a);
      e = w();
    },
    m(a, c) {
      for (let n = 0; n < t.length; n += 1) t[n] && t[n].m(a, c);
      S(a, e, c);
    },
    p(a, c) {
      if (c & 256) {
        r = A(m.BannerImage.format);
        let n;
        for (n = 0; n < r.length; n += 1) {
          const g = T(a, r, n);
          t[n] ? t[n].p(g, c) : ((t[n] = L(g)), t[n].c(), t[n].m(e.parentNode, e));
        }
        for (; n < t.length; n += 1) t[n].d(1);
        t.length = r.length;
      }
    },
    d(a) {
      a && d(e), M(t, a);
    },
  };
}
function L(s) {
  let e, r;
  return {
    c() {
      (e = b('source')), this.h();
    },
    l(t) {
      (e = v(t, 'SOURCE', { srcset: !0, width: !0, height: !0, type: !0 })), this.h();
    },
    h() {
      y(e, (r = `${Array.isArray(s[8].banner) ? s[8].banner[s[12]] : s[8].banner}`.replace(/^\./, ''))) ||
        i(e, 'srcset', r),
        i(e, 'width', m.BannerImage.width),
        i(e, 'height', m.BannerImage.height),
        i(e, 'type', `image/${s[10]}`);
    },
    m(t, a) {
      S(t, e, a);
    },
    p: U,
    d(t) {
      t && d(e);
    },
  };
}
function me(s) {
  let e, r, t, a;
  const c = [ue, he],
    n = [];
  function g(l, h) {
    return l[8] ? 0 : 1;
  }
  return (
    (e = g(s)),
    (r = n[e] = c[e](s)),
    {
      c() {
        r.c(), (t = w());
      },
      l(l) {
        r.l(l), (t = w());
      },
      m(l, h) {
        n[e].m(l, h), S(l, t, h), (a = !0);
      },
      p(l, [h]) {
        r.p(l, h);
      },
      i(l) {
        a || (N(r), (a = !0));
      },
      o(l) {
        O(r), (a = !1);
      },
      d(l) {
        l && d(t), n[e].d(l);
      },
    }
  );
}
function _e(s, e, r) {
  let t;
  I(s, fe, (u) => r(9, (t = u)));
  let { pictureClass: a = void 0 } = e,
    { imgClass: c = void 0 } = e,
    { src: n } = e,
    { alt: g = n } = e,
    { loading: l = 'eager' } = e,
    { decoding: h = 'async' } = e,
    { width: o = void 0 } = e,
    { height: f = void 0 } = e,
    _ = t.get(n);
  return (
    (s.$$set = (u) => {
      'pictureClass' in u && r(2, (a = u.pictureClass)),
        'imgClass' in u && r(3, (c = u.imgClass)),
        'src' in u && r(4, (n = u.src)),
        'alt' in u && r(5, (g = u.alt)),
        'loading' in u && r(6, (l = u.loading)),
        'decoding' in u && r(7, (h = u.decoding)),
        'width' in u && r(0, (o = u.width)),
        'height' in u && r(1, (f = u.height));
    }),
    r(0, (o = _ == null ? void 0 : _.width)),
    r(1, (f = _ == null ? void 0 : _.height)),
    [o, f, a, c, n, g, l, h, _]
  );
}
class ve extends G {
  constructor(e) {
    super(),
      z(this, e, _e, me, k, {
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
export { ve as I, fe as a };
