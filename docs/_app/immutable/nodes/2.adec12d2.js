import {
  s as ve,
  f as _,
  l as Q,
  a as U,
  H as ft,
  g as v,
  h as I,
  m as W,
  d,
  c as R,
  x as dt,
  j as u,
  i as V,
  u as m,
  Q as Me,
  N as xe,
  e as le,
  y as pe,
  I as se,
  B as ee,
  n as ue,
  F as Ne,
  v as be,
  G as ne,
  o as ot,
  w as Ae,
  O as Ce,
  P as je,
  J as mt,
  p as pt,
  S as ht,
  r as _t,
} from '../chunks/scheduler.b261eb3c.js';
import {
  S as ke,
  i as we,
  b as ce,
  d as fe,
  m as de,
  a as $,
  t as N,
  e as me,
  g as ie,
  c as oe,
  h as he,
  j as _e,
  f as Le,
} from '../chunks/index.5ccb46b4.js';
import { s as Z, p as Be, f as De, L as nt } from '../chunks/i18n-svelte.2f0d0f90.js';
import {
  I as vt,
  j as Pe,
  d as ge,
  f as ae,
  h as Ve,
  U as He,
  i as Ie,
  e as Se,
  s as $e,
  k as gt,
  g as bt,
  c as yt,
  t as kt,
} from '../chunks/tippy.6de01e5a.js';
import { I as at } from '../chunks/image_banner.32849a6c.js';
function wt(o) {
  let e,
    l = Z.author.email + '',
    t;
  return {
    c() {
      (e = _('p')), (t = Q(l)), this.h();
    },
    l(r) {
      e = v(r, 'P', { class: !0 });
      var i = I(e);
      (t = W(i, l)), i.forEach(d), this.h();
    },
    h() {
      u(e, 'class', 'hidden u-email');
    },
    m(r, i) {
      V(r, e, i), m(e, t);
    },
    d(r) {
      r && d(e);
    },
  };
}
function Et(o) {
  let e,
    l = '<div class="!w-[1.75rem] !h-[1.75rem] i-ic-baseline-mail"></div>',
    t,
    r;
  return {
    c() {
      (e = _('a')), (e.innerHTML = l), this.h();
    },
    l(i) {
      (e = v(i, 'A', { href: !0, rel: !0, class: !0, 'aria-label': !0, 'data-svelte-h': !0 })),
        xe(e) !== 'svelte-lspt8d' && (e.innerHTML = l),
        this.h();
    },
    h() {
      u(e, 'href', 'mailto:' + Z.author.email),
        u(e, 'rel', 'author external'),
        u(e, 'class', 'btn btn-ghost'),
        u(e, 'aria-label', 'Email');
    },
    m(i, a) {
      V(i, e, a), t || ((r = Me(Pe.call(null, e))), (t = !0));
    },
    d(i) {
      i && d(e), (t = !1), r();
    },
  };
}
function Tt(o) {
  let e,
    l = '<div class="!w-[1.75rem] !h-[1.75rem] i-carbon-logo-github"></div>',
    t,
    r;
  return {
    c() {
      (e = _('a')), (e.innerHTML = l), this.h();
    },
    l(i) {
      (e = v(i, 'A', { href: !0, rel: !0, class: !0, 'aria-label': !0, 'data-svelte-h': !0 })),
        xe(e) !== 'svelte-eaqo99' && (e.innerHTML = l),
        this.h();
    },
    h() {
      u(e, 'href', Z.author.github),
        u(e, 'rel', 'author external'),
        u(e, 'class', 'u-url u-uid btn btn-ghost'),
        u(e, 'aria-label', 'Github');
    },
    m(i, a) {
      V(i, e, a), t || ((r = Me(Pe.call(null, e))), (t = !0));
    },
    d(i) {
      i && d(e), (t = !1), r();
    },
  };
}
function It(o) {
  let e,
    l = '<div class="!w-[1.75rem] !h-[1.75rem] i-carbon-logo-twitter"></div>',
    t,
    r;
  return {
    c() {
      (e = _('a')), (e.innerHTML = l), this.h();
    },
    l(i) {
      (e = v(i, 'A', { href: !0, rel: !0, class: !0, 'aria-label': !0, 'data-svelte-h': !0 })),
        xe(e) !== 'svelte-4on03p' && (e.innerHTML = l),
        this.h();
    },
    h() {
      u(e, 'href', Z.author.twitter),
        u(e, 'rel', 'author external'),
        u(e, 'class', 'u-url u-uid btn btn-ghost'),
        u(e, 'aria-label', 'Twitter');
    },
    m(i, a) {
      V(i, e, a), t || ((r = Me(Pe.call(null, e))), (t = !0));
    },
    d(i) {
      i && d(e), (t = !1), r();
    },
  };
}
function St(o) {
  let e,
    l,
    t = Z.title + '',
    r,
    i,
    a,
    s,
    n,
    c,
    f,
    h = Z.author.status + '',
    p,
    g,
    T,
    b = Z.author.name + '',
    w,
    S,
    E,
    x,
    F = Z.author.bio + '',
    O,
    k,
    D,
    q,
    Y,
    A,
    M,
    H,
    B = wt();
  n = new vt({});
  let X = Et(),
    J = Tt(),
    z = Z.author.twitter && It();
  return {
    c() {
      (e = _('section')),
        (l = _('a')),
        (r = Q(t)),
        (i = U()),
        B && B.c(),
        (a = U()),
        (s = _('div')),
        ce(n.$$.fragment),
        (c = U()),
        (f = _('div')),
        (p = Q(h)),
        (g = U()),
        (T = _('h1')),
        (w = Q(b)),
        (S = U()),
        (E = _('p')),
        (x = new ft(!1)),
        (O = U()),
        (k = _('div')),
        X && X.c(),
        (D = U()),
        J && J.c(),
        (q = U()),
        z && z.c(),
        this.h();
    },
    l(C) {
      e = v(C, 'SECTION', { id: !0, class: !0 });
      var L = I(e);
      l = v(L, 'A', { href: !0, class: !0 });
      var P = I(l);
      (r = W(P, t)), P.forEach(d), (i = R(L)), B && B.l(L), (a = R(L)), (s = v(L, 'DIV', { class: !0 }));
      var re = I(s);
      fe(n.$$.fragment, re), (c = R(re)), (f = v(re, 'DIV', { id: !0, role: !0, 'data-tippy-content': !0, class: !0 }));
      var K = I(f);
      (p = W(K, h)), K.forEach(d), re.forEach(d), (g = R(L)), (T = v(L, 'H1', { class: !0 }));
      var j = I(T);
      (w = W(j, b)), j.forEach(d), (S = R(L)), (E = v(L, 'P', { class: !0 }));
      var G = I(E);
      (x = dt(G, !1)), G.forEach(d), (O = R(L)), (k = v(L, 'DIV', { class: !0 }));
      var y = I(k);
      X && X.l(y), (D = R(y)), J && J.l(y), (q = R(y)), z && z.l(y), y.forEach(d), L.forEach(d), this.h();
    },
    h() {
      u(l, 'href', Z.url),
        u(l, 'class', 'hidden u-url u-uid'),
        u(f, 'id', 'status-tip'),
        u(f, 'role', 'tooltip'),
        u(f, 'data-tippy-content', Z.author.statusTip),
        u(
          f,
          'class',
          'absolute rounded-full w-8 h-8 bottom-0 left-24 shadow-xl text-lg flex justify-center items-center animate-heart-beat svelte-ieqehl',
        ),
        u(s, 'class', 'relative group'),
        u(T, 'class', 'p-name text-2xl font-bold'),
        (x.a = null),
        u(E, 'class', 'p-note text-base op75'),
        u(k, 'class', 'flex'),
        u(e, 'id', 'index-profile'),
        u(e, 'class', (Y = 'h-card p-author rounded-2xl py10 px12 my4 ' + (o[0] ?? '') + ' svelte-ieqehl'));
    },
    m(C, L) {
      V(C, e, L),
        m(e, l),
        m(l, r),
        m(e, i),
        B && B.m(e, null),
        m(e, a),
        m(e, s),
        de(n, s, null),
        m(s, c),
        m(s, f),
        m(f, p),
        m(e, g),
        m(e, T),
        m(T, w),
        m(e, S),
        m(e, E),
        x.m(F, E),
        m(e, O),
        m(e, k),
        X && X.m(k, null),
        m(k, D),
        J && J.m(k, null),
        m(k, q),
        z && z.m(k, null),
        (A = !0),
        M || ((H = Me(Pe.call(null, f, { placement: 'right', interactive: !0, allowHTML: !0 }))), (M = !0));
    },
    p(C, [L]) {
      (!A || (L & 1 && Y !== (Y = 'h-card p-author rounded-2xl py10 px12 my4 ' + (C[0] ?? '') + ' svelte-ieqehl'))) &&
        u(e, 'class', Y);
    },
    i(C) {
      A || ($(n.$$.fragment, C), (A = !0));
    },
    o(C) {
      N(n.$$.fragment, C), (A = !1);
    },
    d(C) {
      C && d(e), B && B.d(), me(n), X && X.d(), J && J.d(), z && z.d(), (M = !1), H();
    },
  };
}
function xt(o, e, l) {
  let { class: t = void 0 } = e;
  return (
    (o.$$set = (r) => {
      'class' in r && l(0, (t = r.class));
    }),
    [t]
  );
}
class st extends ke {
  constructor(e) {
    super(), we(this, e, xt, St, ve, { class: 0 });
  }
}
function Ue(o) {
  let e,
    l,
    t,
    r,
    i,
    a,
    s,
    n = o[0].series_tag && o[0].series_title && Re(o);
  const c = [Lt, Dt],
    f = [];
  function h(p, g) {
    return p[0].cover && p[0].coverStyle !== 'NONE' ? 0 : 1;
  }
  return (
    (t = h(o)),
    (r = f[t] = c[t](o)),
    {
      c() {
        (e = _('article')), n && n.c(), (l = U()), r.c(), this.h();
      },
      l(p) {
        e = v(p, 'ARTICLE', { itemscope: !0, itemtype: !0, itemprop: !0, class: !0 });
        var g = I(e);
        n && n.l(g), (l = R(g)), r.l(g), g.forEach(d), this.h();
      },
      h() {
        u(e, 'itemscope', ''),
          u(e, 'itemtype', 'https://schema.org/BlogPosting'),
          u(e, 'itemprop', 'blogPost'),
          u(
            e,
            'class',
            'index-post flex flex-col relative w-full overflow-hidden group shadow-xl hover:shadow-2xl transform transition duration-300 md:w-3xl md:rounded-lg md:hover:scale-105 svelte-laeff7',
          );
      },
      m(p, g) {
        V(p, e, g), n && n.m(e, null), m(e, l), f[t].m(e, null), (s = !0);
      },
      p(p, g) {
        (o = p),
          o[0].series_tag && o[0].series_title
            ? n
              ? n.p(o, g)
              : ((n = Re(o)), n.c(), n.m(e, l))
            : n && (n.d(1), (n = null));
        let T = t;
        (t = h(o)),
          t === T
            ? f[t].p(o, g)
            : (ie(),
              N(f[T], 1, 1, () => {
                f[T] = null;
              }),
              oe(),
              (r = f[t]),
              r ? r.p(o, g) : ((r = f[t] = c[t](o)), r.c()),
              $(r, 1),
              r.m(e, null));
      },
      i(p) {
        s ||
          ($(r),
          se(() => {
            s && (a && a.end(1), (i = he(e, ae, { x: o[1] % 2 ? 100 : -100, duration: 300, delay: 300 })), i.start());
          }),
          (s = !0));
      },
      o(p) {
        N(r), i && i.invalidate(), (a = _e(e, ae, { x: o[1] % 2 ? -100 : 100, duration: 300 })), (s = !1);
      },
      d(p) {
        p && d(e), n && n.d(), f[t].d(), p && a && a.end();
      },
    }
  );
}
function Re(o) {
  let e,
    l,
    t,
    r,
    i = o[0].series_tag + '',
    a,
    s,
    n = He.SeriesTagName + '',
    c,
    f,
    h,
    p,
    g = o[0].series_title + '',
    T,
    b,
    w;
  return {
    c() {
      (e = _('div')),
        (l = _('div')),
        (t = _('div')),
        (r = Q('# ')),
        (a = Q(i)),
        (s = U()),
        (c = Q(n)),
        (f = U()),
        (h = _('div')),
        (p = _('div')),
        (T = Q(g)),
        this.h();
    },
    l(S) {
      e = v(S, 'DIV', { class: !0 });
      var E = I(e);
      l = v(E, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var x = I(l);
      t = v(x, 'DIV', { class: !0 });
      var F = I(t);
      (r = W(F, '# ')),
        (a = W(F, i)),
        (s = R(F)),
        (c = W(F, n)),
        F.forEach(d),
        x.forEach(d),
        (f = R(E)),
        (h = v(E, 'DIV', { class: !0 }));
      var O = I(h);
      p = v(O, 'DIV', { class: !0 });
      var k = I(p);
      (T = W(k, g)), k.forEach(d), O.forEach(d), E.forEach(d), this.h();
    },
    h() {
      u(t, 'class', 'pl-4 pr-3 text-sm font-bold'),
        u(l, 'role', 'button'),
        u(l, 'tabindex', '0'),
        u(l, 'class', 'series-tag py2 cursor-pointer svelte-laeff7'),
        u(
          p,
          'class',
          'px-3 text-sm font-semibold tracking-wide align-middle whitespace-normal line-clamp-1 text-ellipsis',
        ),
        u(h, 'class', 'series-title flex-1 py-2 md:rounded-tr-2xl svelte-laeff7'),
        u(e, 'class', 'series flex items-stretch gap-0 z10 svelte-laeff7');
    },
    m(S, E) {
      V(S, e, E),
        m(e, l),
        m(l, t),
        m(t, r),
        m(t, a),
        m(t, s),
        m(t, c),
        m(e, f),
        m(e, h),
        m(h, p),
        m(p, T),
        b || ((w = [ee(l, 'click', o[5]), ee(l, 'keydown', o[6])]), (b = !0));
    },
    p(S, E) {
      E & 1 && i !== (i = S[0].series_tag + '') && ue(a, i), E & 1 && g !== (g = S[0].series_title + '') && ue(T, g);
    },
    d(S) {
      S && d(e), (b = !1), Ne(w);
    },
  };
}
function Dt(o) {
  let e, l, t, r, i, a, s, n, c, f, h, p, g;
  function T(E, x) {
    return E[0].title ? Mt : $t;
  }
  let b = T(o),
    w = b(o),
    S = o[0].summary && ze(o);
  return {
    c() {
      (e = _('div')),
        (l = _('time')),
        (t = Q(o[2])),
        (i = U()),
        (a = _('time')),
        (s = Q(o[3])),
        (c = U()),
        (f = _('h2')),
        (h = _('a')),
        w.c(),
        (g = U()),
        S && S.c(),
        this.h();
    },
    l(E) {
      e = v(E, 'DIV', { class: !0 });
      var x = I(e);
      l = v(x, 'TIME', { class: !0, datetime: !0, itemprop: !0 });
      var F = I(l);
      (t = W(F, o[2])), F.forEach(d), (i = R(x)), (a = v(x, 'TIME', { class: !0, datetime: !0, itemprop: !0 }));
      var O = I(a);
      (s = W(O, o[3])), O.forEach(d), (c = R(x)), (f = v(x, 'H2', { class: !0, itemprop: !0 }));
      var k = I(f);
      h = v(k, 'A', { href: !0, class: !0, itemprop: !0 });
      var D = I(h);
      w.l(D), D.forEach(d), k.forEach(d), (g = R(x)), S && S.l(x), x.forEach(d), this.h();
    },
    h() {
      u(l, 'class', 'dt-published op80 group-hover:font-600'),
        u(l, 'datetime', (r = o[0].published)),
        u(l, 'itemprop', 'datePublished'),
        u(a, 'class', 'hidden dt-updated'),
        u(a, 'datetime', (n = o[0].updated)),
        u(a, 'itemprop', 'dateModified'),
        u(h, 'href', (p = o[0].slug)),
        u(h, 'class', 'u-url title-link-orange-500-orange-500 svelte-laeff7'),
        u(h, 'itemprop', 'url'),
        u(f, 'class', 'text-2xl font-bold line-clamp-2 text-ellipsis group-hover:font-900'),
        u(f, 'itemprop', 'name headline'),
        u(e, 'class', 'index-post-panel flex flex-col flex-1 gap2 px8 pt4 pb6 svelte-laeff7');
    },
    m(E, x) {
      V(E, e, x),
        m(e, l),
        m(l, t),
        m(e, i),
        m(e, a),
        m(a, s),
        m(e, c),
        m(e, f),
        m(f, h),
        w.m(h, null),
        m(e, g),
        S && S.m(e, null);
    },
    p(E, x) {
      x & 1 && r !== (r = E[0].published) && u(l, 'datetime', r),
        x & 1 && n !== (n = E[0].updated) && u(a, 'datetime', n),
        b === (b = T(E)) && w ? w.p(E, x) : (w.d(1), (w = b(E)), w && (w.c(), w.m(h, null))),
        x & 1 && p !== (p = E[0].slug) && u(h, 'href', p),
        E[0].summary ? (S ? S.p(E, x) : ((S = ze(E)), S.c(), S.m(e, null))) : S && (S.d(1), (S = null));
    },
    i: be,
    o: be,
    d(E) {
      E && d(e), w.d(), S && S.d();
    },
  };
}
function Lt(o) {
  let e, l, t, r;
  const i = [Pt, Nt],
    a = [];
  function s(n, c) {
    return n[0].coverStyle === 'IN' ? 0 : 1;
  }
  return (
    (e = s(o)),
    (l = a[e] = i[e](o)),
    {
      c() {
        l.c(), (t = le());
      },
      l(n) {
        l.l(n), (t = le());
      },
      m(n, c) {
        a[e].m(n, c), V(n, t, c), (r = !0);
      },
      p(n, c) {
        let f = e;
        (e = s(n)),
          e === f
            ? a[e].p(n, c)
            : (ie(),
              N(a[f], 1, 1, () => {
                a[f] = null;
              }),
              oe(),
              (l = a[e]),
              l ? l.p(n, c) : ((l = a[e] = i[e](n)), l.c()),
              $(l, 1),
              l.m(t.parentNode, t));
      },
      i(n) {
        r || ($(l), (r = !0));
      },
      o(n) {
        N(l), (r = !1);
      },
      d(n) {
        n && d(t), a[e].d(n);
      },
    }
  );
}
function $t(o) {
  let e;
  return {
    c() {
      e = Q('No Title');
    },
    l(l) {
      e = W(l, 'No Title');
    },
    m(l, t) {
      V(l, e, t);
    },
    p: be,
    d(l) {
      l && d(e);
    },
  };
}
function Mt(o) {
  let e = o[0].title + '',
    l;
  return {
    c() {
      l = Q(e);
    },
    l(t) {
      l = W(t, e);
    },
    m(t, r) {
      V(t, l, r);
    },
    p(t, r) {
      r & 1 && e !== (e = t[0].title + '') && ue(l, e);
    },
    d(t) {
      t && d(l);
    },
  };
}
function ze(o) {
  let e,
    l = o[0].summary + '',
    t;
  return {
    c() {
      (e = _('p')), (t = Q(l)), this.h();
    },
    l(r) {
      e = v(r, 'P', { class: !0, itemprop: !0 });
      var i = I(e);
      (t = W(i, l)), i.forEach(d), this.h();
    },
    h() {
      u(e, 'class', 'text-lg line-clamp-2 group-hover:font-600'), u(e, 'itemprop', 'description');
    },
    m(r, i) {
      V(r, e, i), m(e, t);
    },
    p(r, i) {
      i & 1 && l !== (l = r[0].summary + '') && ue(t, l);
    },
    d(r) {
      r && d(e);
    },
  };
}
function Nt(o) {
  let e,
    l,
    t,
    r,
    i,
    a,
    s,
    n,
    c,
    f,
    h,
    p,
    g,
    T,
    b,
    w,
    S,
    E,
    x = o[0].title + '',
    F,
    O,
    k,
    D,
    q = o[0].summary + '',
    Y,
    A;
  return (
    (r = new at({
      props: {
        src: o[0].cover,
        loading: o[1] < ye ? 'eager' : 'lazy',
        decoding: o[1] < ye ? 'auto' : 'async',
        imgClass: 'op90 group-hover:scale-110 transition transform duration-300 ease-in-out object-cover w-full h-full',
      },
    })),
    {
      c() {
        (e = _('div')),
          (l = _('div')),
          (t = _('a')),
          ce(r.$$.fragment),
          (s = U()),
          (n = _('div')),
          (c = _('time')),
          (f = Q(o[2])),
          (p = U()),
          (g = _('time')),
          (T = Q(o[3])),
          (w = U()),
          (S = _('h2')),
          (E = _('a')),
          (F = Q(x)),
          (k = U()),
          (D = _('p')),
          (Y = Q(q)),
          this.h();
      },
      l(M) {
        e = v(M, 'DIV', { class: !0 });
        var H = I(e);
        l = v(H, 'DIV', { class: !0 });
        var B = I(l);
        t = v(B, 'A', { href: !0, class: !0, itemprop: !0 });
        var X = I(t);
        fe(r.$$.fragment, X), X.forEach(d), B.forEach(d), (s = R(H)), (n = v(H, 'DIV', { class: !0 }));
        var J = I(n);
        c = v(J, 'TIME', { class: !0, datetime: !0, itemprop: !0 });
        var z = I(c);
        (f = W(z, o[2])), z.forEach(d), (p = R(J)), (g = v(J, 'TIME', { class: !0, datetime: !0, itemprop: !0 }));
        var C = I(g);
        (T = W(C, o[3])), C.forEach(d), (w = R(J)), (S = v(J, 'H2', { class: !0, itemprop: !0 }));
        var L = I(S);
        E = v(L, 'A', { href: !0, class: !0, itemprop: !0 });
        var P = I(E);
        (F = W(P, x)), P.forEach(d), L.forEach(d), (k = R(J)), (D = v(J, 'P', { class: !0, itemprop: !0 }));
        var re = I(D);
        (Y = W(re, q)), re.forEach(d), J.forEach(d), H.forEach(d), this.h();
      },
      h() {
        u(t, 'href', (i = o[0].slug)),
          u(t, 'class', 'cursor-pointer svelte-laeff7'),
          u(t, 'itemprop', 'url'),
          u(
            l,
            'class',
            (a =
              'overflow-hidden ' +
              (['TOP', 'BOT'].indexOf(o[0].coverStyle) !== -1 ? 'coverStyle-TOPnBOT' : '') +
              ' ' +
              (['RIGHT', 'LEFT'].indexOf(o[0].coverStyle) !== -1 ? 'coverStyle-RnL' : '') +
              ' svelte-laeff7'),
          ),
          ne(l, 'order-first', o[0].coverStyle === 'TOP' || o[0].coverStyle === 'LEFT'),
          ne(l, 'order-last', o[0].coverStyle === 'BOT' || o[0].coverStyle === 'RIGHT'),
          u(c, 'class', 'dt-published op80 group-hover:font-600'),
          u(c, 'datetime', (h = o[0].published)),
          u(c, 'itemprop', 'datePublished'),
          u(g, 'class', 'hidden dt-updated'),
          u(g, 'datetime', (b = o[0].updated)),
          u(g, 'itemprop', 'dateModified'),
          u(E, 'href', (O = o[0].slug)),
          u(E, 'class', 'u-url title-link-orange-500-orange-500 svelte-laeff7'),
          u(E, 'itemprop', 'url'),
          u(S, 'class', 'text-2xl font-bold line-clamp-2 text-ellipsis group-hover:font-900'),
          u(S, 'itemprop', 'name headline'),
          u(D, 'class', 'text-lg line-clamp-2 group-hover:font-600'),
          u(D, 'itemprop', 'description'),
          u(n, 'class', 'index-post-panel px8 pt4 pb6 flex flex-col gap2 flex-1 svelte-laeff7'),
          u(e, 'class', 'flex md:border-none relative'),
          ne(e, 'flex-col', ['TOP', 'BOT'].indexOf(o[0].coverStyle) !== -1);
      },
      m(M, H) {
        V(M, e, H),
          m(e, l),
          m(l, t),
          de(r, t, null),
          m(e, s),
          m(e, n),
          m(n, c),
          m(c, f),
          m(n, p),
          m(n, g),
          m(g, T),
          m(n, w),
          m(n, S),
          m(S, E),
          m(E, F),
          m(n, k),
          m(n, D),
          m(D, Y),
          (A = !0);
      },
      p(M, H) {
        const B = {};
        H & 1 && (B.src = M[0].cover),
          H & 2 && (B.loading = M[1] < ye ? 'eager' : 'lazy'),
          H & 2 && (B.decoding = M[1] < ye ? 'auto' : 'async'),
          r.$set(B),
          (!A || (H & 1 && i !== (i = M[0].slug))) && u(t, 'href', i),
          (!A ||
            (H & 1 &&
              a !==
                (a =
                  'overflow-hidden ' +
                  (['TOP', 'BOT'].indexOf(M[0].coverStyle) !== -1 ? 'coverStyle-TOPnBOT' : '') +
                  ' ' +
                  (['RIGHT', 'LEFT'].indexOf(M[0].coverStyle) !== -1 ? 'coverStyle-RnL' : '') +
                  ' svelte-laeff7'))) &&
            u(l, 'class', a),
          (!A || H & 1) && ne(l, 'order-first', M[0].coverStyle === 'TOP' || M[0].coverStyle === 'LEFT'),
          (!A || H & 1) && ne(l, 'order-last', M[0].coverStyle === 'BOT' || M[0].coverStyle === 'RIGHT'),
          (!A || (H & 1 && h !== (h = M[0].published))) && u(c, 'datetime', h),
          (!A || (H & 1 && b !== (b = M[0].updated))) && u(g, 'datetime', b),
          (!A || H & 1) && x !== (x = M[0].title + '') && ue(F, x),
          (!A || (H & 1 && O !== (O = M[0].slug))) && u(E, 'href', O),
          (!A || H & 1) && q !== (q = M[0].summary + '') && ue(Y, q),
          (!A || H & 1) && ne(e, 'flex-col', ['TOP', 'BOT'].indexOf(M[0].coverStyle) !== -1);
      },
      i(M) {
        A || ($(r.$$.fragment, M), (A = !0));
      },
      o(M) {
        N(r.$$.fragment, M), (A = !1);
      },
      d(M) {
        M && d(e), me(r);
      },
    }
  );
}
function Pt(o) {
  let e,
    l,
    t,
    r,
    i,
    a,
    s,
    n,
    c,
    f,
    h,
    p,
    g,
    T = o[0].title + '',
    b,
    w,
    S,
    E,
    x = o[0].summary + '',
    F,
    O;
  return (
    (e = new at({
      props: {
        loading: o[1] < ye ? 'eager' : 'lazy',
        decoding: o[1] < ye ? 'auto' : 'async',
        src: o[0].cover,
        imgClass:
          'z1 blur-sm op80 absolute object-cover w-full h-full transition transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-none',
      },
    })),
    {
      c() {
        ce(e.$$.fragment),
          (l = U()),
          (t = _('div')),
          (r = _('time')),
          (i = Q(o[2])),
          (s = U()),
          (n = _('time')),
          (c = Q(o[3])),
          (h = U()),
          (p = _('h2')),
          (g = _('a')),
          (b = Q(T)),
          (S = U()),
          (E = _('p')),
          (F = Q(x)),
          this.h();
      },
      l(k) {
        fe(e.$$.fragment, k), (l = R(k)), (t = v(k, 'DIV', { class: !0 }));
        var D = I(t);
        r = v(D, 'TIME', { class: !0, datetime: !0, itemprop: !0 });
        var q = I(r);
        (i = W(q, o[2])), q.forEach(d), (s = R(D)), (n = v(D, 'TIME', { class: !0, datetime: !0, itemprop: !0 }));
        var Y = I(n);
        (c = W(Y, o[3])), Y.forEach(d), (h = R(D)), (p = v(D, 'H2', { class: !0, itemprop: !0 }));
        var A = I(p);
        g = v(A, 'A', { href: !0, class: !0, itemprop: !0 });
        var M = I(g);
        (b = W(M, T)), M.forEach(d), A.forEach(d), (S = R(D)), (E = v(D, 'P', { class: !0, itemprop: !0 }));
        var H = I(E);
        (F = W(H, x)), H.forEach(d), D.forEach(d), this.h();
      },
      h() {
        u(r, 'class', 'dt-published op80 group-hover:font-600'),
          u(r, 'datetime', (a = o[0].published)),
          u(r, 'itemprop', 'datePublished'),
          u(n, 'class', 'hidden dt-updated'),
          u(n, 'datetime', (f = o[0].updated)),
          u(n, 'itemprop', 'dateModified'),
          u(g, 'href', (w = o[0].slug)),
          u(g, 'class', 'u-url title-link-orange-500-orange-500 svelte-laeff7'),
          u(g, 'itemprop', 'url'),
          u(p, 'class', 'text-2xl font-bold line-clamp-2 text-ellipsis group-hover:font-900'),
          u(p, 'itemprop', 'name headline'),
          u(E, 'class', 'text-lg line-clamp-2 group-hover:font-600'),
          u(E, 'itemprop', 'description'),
          u(
            t,
            'class',
            'coverStyle-IN z2 px8 pt4 pb6 flex flex-col gap2 bg-white/[0.25] dark:bg-black/[0.25] svelte-laeff7',
          );
      },
      m(k, D) {
        de(e, k, D),
          V(k, l, D),
          V(k, t, D),
          m(t, r),
          m(r, i),
          m(t, s),
          m(t, n),
          m(n, c),
          m(t, h),
          m(t, p),
          m(p, g),
          m(g, b),
          m(t, S),
          m(t, E),
          m(E, F),
          (O = !0);
      },
      p(k, D) {
        const q = {};
        D & 2 && (q.loading = k[1] < ye ? 'eager' : 'lazy'),
          D & 2 && (q.decoding = k[1] < ye ? 'auto' : 'async'),
          D & 1 && (q.src = k[0].cover),
          e.$set(q),
          (!O || (D & 1 && a !== (a = k[0].published))) && u(r, 'datetime', a),
          (!O || (D & 1 && f !== (f = k[0].updated))) && u(n, 'datetime', f),
          (!O || D & 1) && T !== (T = k[0].title + '') && ue(b, T),
          (!O || (D & 1 && w !== (w = k[0].slug))) && u(g, 'href', w),
          (!O || D & 1) && x !== (x = k[0].summary + '') && ue(F, x);
      },
      i(k) {
        O || ($(e.$$.fragment, k), (O = !0));
      },
      o(k) {
        N(e.$$.fragment, k), (O = !1);
      },
      d(k) {
        k && (d(l), d(t)), me(e, k);
      },
    }
  );
}
function Vt(o) {
  let e,
    l,
    t = o[0] && Ue(o);
  return {
    c() {
      t && t.c(), (e = le());
    },
    l(r) {
      t && t.l(r), (e = le());
    },
    m(r, i) {
      t && t.m(r, i), V(r, e, i), (l = !0);
    },
    p(r, [i]) {
      r[0]
        ? t
          ? (t.p(r, i), i & 1 && $(t, 1))
          : ((t = Ue(r)), t.c(), $(t, 1), t.m(e.parentNode, e))
        : t &&
          (ie(),
          N(t, 1, 1, () => {
            t = null;
          }),
          oe());
    },
    i(r) {
      l || ($(t), (l = !0));
    },
    o(r) {
      N(t), (l = !1);
    },
    d(r) {
      r && d(e), t && t.d(r);
    },
  };
}
const ye = 3;
function Ht(o, e, l) {
  let t, r;
  pe(o, ge, (p) => l(7, (t = p))), pe(o, Be, (p) => l(8, (r = p)));
  let { data: i } = e,
    { index: a } = e;
  const s = new Date(i.published).toLocaleString(De.toPublishedString.locales, De.toPublishedString.options),
    n = new Date(i.updated).toLocaleString(De.toUpdatedString.locales, De.toUpdatedString.options);
  function c(p) {
    if ((ge.toggle(p), Ve.filter(), window.location.pathname === '/')) {
      let g = new URLSearchParams();
      r.url.searchParams.forEach((b, w) => {
        w.match(/^(?!(tags(-.*)?))/) && g.append(w, b);
      }),
        t.forEach((b, w) => {
          g.append(w === 'tags' ? w : `tags-${encodeURI(w)}`, Array.from(b).join(','));
        });
      const T = g.toString();
      T ? window.history.replaceState({}, '', `?${T}`) : window.history.replaceState({}, '', '/');
    }
  }
  const f = () => c({ name: i.series_tag ?? '', category: He.SeriesTagName }),
    h = (p) => {
      p.key === 'Enter' && c({ name: i.series_tag ?? '', category: He.SeriesTagName });
    };
  return (
    (o.$$set = (p) => {
      'data' in p && l(0, (i = p.data)), 'index' in p && l(1, (a = p.index));
    }),
    [i, a, s, n, c, f, h]
  );
}
class Ot extends ke {
  constructor(e) {
    super(), we(this, e, Ht, Vt, ve, { data: 0, index: 1 });
  }
}
function Fe(o, e, l) {
  const t = o.slice();
  (t[5] = e[l]), (t[8] = l);
  const r = new Date(t[5].published).getFullYear();
  return (t[6] = r), t;
}
function At(o) {
  const e = o.slice(),
    l = [new Date().getFullYear()];
  return (e[4] = l), e;
}
function Bt(o) {
  let e,
    l,
    t = o[3].LoadingPosts() + '',
    r,
    i,
    a,
    s,
    n,
    c;
  return {
    c() {
      (e = _('div')), (l = _('h2')), (r = Q(t)), (i = U()), (a = _('div')), this.h();
    },
    l(f) {
      e = v(f, 'DIV', { class: !0 });
      var h = I(e);
      l = v(h, 'H2', { class: !0 });
      var p = I(l);
      (r = W(p, t)),
        p.forEach(d),
        (i = R(h)),
        (a = v(h, 'DIV', { class: !0 })),
        I(a).forEach(d),
        h.forEach(d),
        this.h();
    },
    h() {
      u(l, 'class', 'text-3xl'),
        u(a, 'class', 'i-line-md-loading-twotone-loop !h-16 !w-16'),
        u(e, 'class', 'h-[20rem] flex flex-col items-center justify-center gap4');
    },
    m(f, h) {
      V(f, e, h), m(e, l), m(l, r), m(e, i), m(e, a), (c = !0);
    },
    p(f, h) {
      (!c || h & 8) && t !== (t = f[3].LoadingPosts() + '') && ue(r, t);
    },
    i(f) {
      c ||
        (se(() => {
          c && (n && n.end(1), (s = he(e, Ie, { duration: 300, delay: 300 })), s.start());
        }),
        (c = !0));
    },
    o(f) {
      s && s.invalidate(), (n = _e(e, Ie, { duration: 300 })), (c = !1);
    },
    d(f) {
      f && d(e), f && n && n.end();
    },
  };
}
function Ct(o) {
  let e = o[2],
    l,
    t,
    r = Ge(o);
  return {
    c() {
      r.c(), (l = le());
    },
    l(i) {
      r.l(i), (l = le());
    },
    m(i, a) {
      r.m(i, a), V(i, l, a), (t = !0);
    },
    p(i, a) {
      a & 4 && ve(e, (e = i[2]))
        ? (ie(), N(r, 1, 1, be), oe(), (r = Ge(i)), r.c(), $(r, 1), r.m(l.parentNode, l))
        : r.p(i, a);
    },
    i(i) {
      t || ($(r), (t = !0));
    },
    o(i) {
      N(r), (t = !1);
    },
    d(i) {
      i && d(l), r.d(i);
    },
  };
}
function jt(o) {
  let e,
    l,
    t = Se(o[2]),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Ye(Fe(o, t, a));
  const i = (a) =>
    N(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = le();
    },
    l(a) {
      for (let s = 0; s < r.length; s += 1) r[s].l(a);
      e = le();
    },
    m(a, s) {
      for (let n = 0; n < r.length; n += 1) r[n] && r[n].m(a, s);
      V(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 4) {
        t = Se(a[2]);
        let n;
        for (n = 0; n < t.length; n += 1) {
          const c = Fe(a, t, n);
          r[n] ? (r[n].p(c, s), $(r[n], 1)) : ((r[n] = Ye(c)), r[n].c(), $(r[n], 1), r[n].m(e.parentNode, e));
        }
        for (ie(), n = t.length; n < r.length; n += 1) i(n);
        oe();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) $(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) N(r[s]);
      l = !1;
    },
    d(a) {
      a && d(e), Ae(r, a);
    },
  };
}
function Ut(o) {
  let e,
    l,
    t = o[3].NoPostFound() + '',
    r,
    i,
    a,
    s;
  return {
    c() {
      (e = _('div')), (l = _('h2')), (r = Q(t)), this.h();
    },
    l(n) {
      e = v(n, 'DIV', { class: !0 });
      var c = I(e);
      l = v(c, 'H2', { class: !0 });
      var f = I(l);
      (r = W(f, t)), f.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(l, 'class', 'text-3xl'), u(e, 'class', 'h-[20rem] flex items-center justify-center');
    },
    m(n, c) {
      V(n, e, c), m(e, l), m(l, r), (s = !0);
    },
    p(n, c) {
      (!s || c & 8) && t !== (t = n[3].NoPostFound() + '') && ue(r, t);
    },
    i(n) {
      s ||
        (se(() => {
          s && (a && a.end(1), (i = he(e, Ie, { duration: 300, delay: 300 })), i.start());
        }),
        (s = !0));
    },
    o(n) {
      i && i.invalidate(), (a = _e(e, Ie, { duration: 300 })), (s = !1);
    },
    d(n) {
      n && d(e), n && a && a.end();
    },
  };
}
function qe(o) {
  let e,
    l = (o[4].push(o[6]) && o[6]) + '',
    t,
    r,
    i,
    a;
  return {
    c() {
      (e = _('div')), (t = Q(l)), this.h();
    },
    l(s) {
      e = v(s, 'DIV', { class: !0 });
      var n = I(e);
      (t = W(n, l)), n.forEach(d), this.h();
    },
    h() {
      u(e, 'class', 'year-divider my-4 md:my-0 svelte-1gvkyqr');
    },
    m(s, n) {
      V(s, e, n), m(e, t), (a = !0);
    },
    p(s, n) {
      (!a || n & 4) && l !== (l = (s[4].push(s[6]) && s[6]) + '') && ue(t, l);
    },
    i(s) {
      a ||
        (se(() => {
          a && (i && i.end(1), (r = he(e, Ie, { duration: 300, delay: 300 })), r.start());
        }),
        (a = !0));
    },
    o(s) {
      r && r.invalidate(), (i = _e(e, Ie, { duration: 300 })), (a = !1);
    },
    d(s) {
      s && d(e), s && i && i.end();
    },
  };
}
function Ye(o) {
  let e = !isNaN(o[6]) && !o[4].includes(o[6]),
    l,
    t,
    r,
    i = e && qe(o);
  return (
    (t = new Ot({ props: { data: o[5], index: o[8] } })),
    {
      c() {
        i && i.c(), (l = U()), ce(t.$$.fragment);
      },
      l(a) {
        i && i.l(a), (l = R(a)), fe(t.$$.fragment, a);
      },
      m(a, s) {
        i && i.m(a, s), V(a, l, s), de(t, a, s), (r = !0);
      },
      p(a, s) {
        s & 4 && (e = !isNaN(a[6]) && !a[4].includes(a[6])),
          e
            ? i
              ? (i.p(a, s), s & 4 && $(i, 1))
              : ((i = qe(a)), i.c(), $(i, 1), i.m(l.parentNode, l))
            : i &&
              (ie(),
              N(i, 1, 1, () => {
                i = null;
              }),
              oe());
        const n = {};
        s & 4 && (n.data = a[5]), t.$set(n);
      },
      i(a) {
        r || ($(i), $(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        N(i), N(t.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && d(l), i && i.d(a), me(t, a);
      },
    }
  );
}
function Ge(o) {
  let e, l, t, r;
  const i = [Ut, jt],
    a = [];
  function s(c, f) {
    return c[2].length === 0 ? 0 : 1;
  }
  function n(c, f) {
    return f === 1 ? At(c) : c;
  }
  return (
    (e = s(o)),
    (l = a[e] = i[e](n(o, e))),
    {
      c() {
        l.c(), (t = le());
      },
      l(c) {
        l.l(c), (t = le());
      },
      m(c, f) {
        a[e].m(c, f), V(c, t, f), (r = !0);
      },
      p(c, f) {
        let h = e;
        (e = s(c)),
          e === h
            ? a[e].p(n(c, e), f)
            : (ie(),
              N(a[h], 1, 1, () => {
                a[h] = null;
              }),
              oe(),
              (l = a[e]),
              l ? l.p(n(c, e), f) : ((l = a[e] = i[e](n(c, e))), l.c()),
              $(l, 1),
              l.m(t.parentNode, t));
      },
      i(c) {
        r || ($(l), (r = !0));
      },
      o(c) {
        N(l), (r = !1);
      },
      d(c) {
        c && d(t), a[e].d(c);
      },
    }
  );
}
function Rt(o) {
  let e, l, t, r, i;
  const a = [Ct, Bt],
    s = [];
  function n(c, f) {
    return c[1] ? 0 : 1;
  }
  return (
    (l = n(o)),
    (t = s[l] = a[l](o)),
    {
      c() {
        (e = _('main')), t.c(), this.h();
      },
      l(c) {
        e = v(c, 'MAIN', { id: !0, class: !0, itemscope: !0, itemprop: !0, itemtype: !0 });
        var f = I(e);
        t.l(f), f.forEach(d), this.h();
      },
      h() {
        u(e, 'id', 'index-posts'),
          u(e, 'class', (r = 'flex flex-col items-center py4 gap6 ' + (o[0] ?? '') + ' svelte-1gvkyqr')),
          u(e, 'itemscope', ''),
          u(e, 'itemprop', 'mainEntityOfPage'),
          u(e, 'itemtype', 'https://schema.org/Blog');
      },
      m(c, f) {
        V(c, e, f), s[l].m(e, null), (i = !0);
      },
      p(c, [f]) {
        let h = l;
        (l = n(c)),
          l === h
            ? s[l].p(c, f)
            : (ie(),
              N(s[h], 1, 1, () => {
                s[h] = null;
              }),
              oe(),
              (t = s[l]),
              t ? t.p(c, f) : ((t = s[l] = a[l](c)), t.c()),
              $(t, 1),
              t.m(e, null)),
          (!i || (f & 1 && r !== (r = 'flex flex-col items-center py4 gap6 ' + (c[0] ?? '') + ' svelte-1gvkyqr'))) &&
            u(e, 'class', r);
      },
      i(c) {
        i || ($(t), (i = !0));
      },
      o(c) {
        N(t), (i = !1);
      },
      d(c) {
        c && d(e), s[l].d();
      },
    }
  );
}
function zt(o, e, l) {
  let t, r;
  pe(o, Ve, (s) => l(2, (t = s))), pe(o, nt, (s) => l(3, (r = s)));
  let { class: i = void 0 } = e,
    a = !1;
  return (
    ot(() => {
      l(1, (a = !0));
    }),
    (o.$$set = (s) => {
      'class' in s && l(0, (i = s.class));
    }),
    [i, a, t, r]
  );
}
class ut extends ke {
  constructor(e) {
    super(), we(this, e, zt, Rt, ve, { class: 0 });
  }
}
function Xe(o) {
  let e,
    l = o[0].name + '',
    t,
    r,
    i;
  return {
    c() {
      (e = _('button')), (t = Q(l)), this.h();
    },
    l(a) {
      e = v(a, 'BUTTON', { class: !0 });
      var s = I(e);
      (t = W(s, l)), s.forEach(d), this.h();
    },
    h() {
      u(
        e,
        'class',
        'text-sm m-1 normal-case border-2 border-dotted btn hover:border-[#007300] hover:border-solid border-black/[0.5] dark:border-white/[0.5] active:scale-80 active:transition-transform active:duration-250 active:ease-in-out svelte-1f33l9z',
      ),
        ne(e, 'btn_active', ge.has(o[0]));
    },
    m(a, s) {
      V(a, e, s), m(e, t), r || ((i = ee(e, 'click', o[2])), (r = !0));
    },
    p(a, s) {
      s & 1 && l !== (l = a[0].name + '') && ue(t, l), s & 1 && ne(e, 'btn_active', ge.has(a[0]));
    },
    d(a) {
      a && d(e), (r = !1), i();
    },
  };
}
function Ft(o) {
  let e = o[1],
    l,
    t = Xe(o);
  return {
    c() {
      t.c(), (l = le());
    },
    l(r) {
      t.l(r), (l = le());
    },
    m(r, i) {
      t.m(r, i), V(r, l, i);
    },
    p(r, [i]) {
      i & 2 && ve(e, (e = r[1])) ? (t.d(1), (t = Xe(r)), t.c(), t.m(l.parentNode, l)) : t.p(r, i);
    },
    i: be,
    o: be,
    d(r) {
      r && d(l), t.d(r);
    },
  };
}
function qt(o, e, l) {
  let t, r;
  pe(o, Be, (s) => l(3, (t = s))), pe(o, ge, (s) => l(1, (r = s)));
  let { data: i } = e;
  function a() {
    let s = i.category === 'tags' ? i.category : `tags-${encodeURI(i.category)}`;
    ge.has(i) && t.url.searchParams.delete(s), ge.toggle(i);
    const n = r.get(i.category);
    n && t.url.searchParams.set(s, Array.from(n).join(','));
    const c = t.url.searchParams.toString();
    window.history.replaceState({}, '', c.length > 0 ? `?${c}` : '/'), Ve.filter();
  }
  return (
    (o.$$set = (s) => {
      'data' in s && l(0, (i = s.data));
    }),
    [i, r, a]
  );
}
class Yt extends ke {
  constructor(e) {
    super(), we(this, e, qt, Ft, ve, { data: 0 });
  }
}
function Je(o, e, l) {
  const t = o.slice();
  return (t[6] = e[l]), t;
}
function Gt(o) {
  let e,
    l = '#';
  return {
    c() {
      (e = _('h3')), (e.textContent = l), this.h();
    },
    l(t) {
      (e = v(t, 'H3', { 'data-svelte-h': !0 })), xe(e) !== 'svelte-sd18oa' && (e.textContent = l), this.h();
    },
    h() {
      ne(e, 'expanded', o[0]);
    },
    m(t, r) {
      V(t, e, r);
    },
    p(t, r) {
      r & 1 && ne(e, 'expanded', t[0]);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Xt(o) {
  let e,
    l = o[2].name + '',
    t;
  return {
    c() {
      (e = _('h3')), (t = Q(l)), this.h();
    },
    l(r) {
      e = v(r, 'H3', {});
      var i = I(e);
      (t = W(i, l)), i.forEach(d), this.h();
    },
    h() {
      ne(e, 'expanded', o[0]);
    },
    m(r, i) {
      V(r, e, i), m(e, t);
    },
    p(r, i) {
      i & 4 && l !== (l = r[2].name + '') && ue(t, l), i & 1 && ne(e, 'expanded', r[0]);
    },
    d(r) {
      r && d(e);
    },
  };
}
function Ke(o) {
  let e,
    l,
    t,
    r = Se(o[3]),
    i = [];
  for (let s = 0; s < r.length; s += 1) i[s] = Qe(Je(o, r, s));
  const a = (s) =>
    N(i[s], 1, 1, () => {
      i[s] = null;
    });
  return {
    c() {
      e = _('div');
      for (let s = 0; s < i.length; s += 1) i[s].c();
      this.h();
    },
    l(s) {
      e = v(s, 'DIV', { class: !0 });
      var n = I(e);
      for (let c = 0; c < i.length; c += 1) i[c].l(n);
      n.forEach(d), this.h();
    },
    h() {
      u(e, 'class', 'flex flex-row flex-wrap my-2');
    },
    m(s, n) {
      V(s, e, n);
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(e, null);
      t = !0;
    },
    p(s, n) {
      if (n & 8) {
        r = Se(s[3]);
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Je(s, r, c);
          i[c] ? (i[c].p(f, n), $(i[c], 1)) : ((i[c] = Qe(f)), i[c].c(), $(i[c], 1), i[c].m(e, null));
        }
        for (ie(), c = r.length; c < i.length; c += 1) a(c);
        oe();
      }
    },
    i(s) {
      if (!t) {
        for (let n = 0; n < r.length; n += 1) $(i[n]);
        se(() => {
          t && (l || (l = Le(e, $e, { duration: 300 }, !0)), l.run(1));
        }),
          (t = !0);
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let n = 0; n < i.length; n += 1) N(i[n]);
      l || (l = Le(e, $e, { duration: 300 }, !1)), l.run(0), (t = !1);
    },
    d(s) {
      s && d(e), Ae(i, s), s && l && l.end();
    },
  };
}
function Qe(o) {
  let e, l;
  return (
    (e = new Yt({ props: { data: o[6] } })),
    {
      c() {
        ce(e.$$.fragment);
      },
      l(t) {
        fe(e.$$.fragment, t);
      },
      m(t, r) {
        de(e, t, r), (l = !0);
      },
      p: be,
      i(t) {
        l || ($(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Jt(o) {
  let e, l, t, r, i, a, s, n, c, f;
  function h(b, w) {
    return b[2].name !== 'tags' ? Xt : Gt;
  }
  let p = h(o),
    g = p(o),
    T = o[0] && o[3] && Ke(o);
  return {
    c() {
      (e = _('div')), g.c(), (l = U()), (t = _('div')), (a = U()), T && T.c(), (s = le()), this.h();
    },
    l(b) {
      e = v(b, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var w = I(e);
      g.l(w),
        (l = R(w)),
        (t = v(w, 'DIV', { class: !0 })),
        I(t).forEach(d),
        w.forEach(d),
        (a = R(b)),
        T && T.l(b),
        (s = le()),
        this.h();
    },
    h() {
      u(
        t,
        'class',
        (r =
          (o[0] ? 'i-tabler-fold-down' : 'i-tabler-fold-up') +
          ' display-inline-block !w-[1.25rem] !h-[1.25rem] ml-auto'),
      ),
        u(e, 'role', 'button'),
        u(e, 'tabindex', '0'),
        u(
          e,
          'class',
          (i =
            'flex justify-between items-center border-b-1 border-black dark:border-white py2 cursor-pointer ' +
            (o[1] ?? '')),
        );
    },
    m(b, w) {
      V(b, e, w),
        g.m(e, null),
        m(e, l),
        m(e, t),
        V(b, a, w),
        T && T.m(b, w),
        V(b, s, w),
        (n = !0),
        c || ((f = [ee(e, 'click', o[4]), ee(e, 'keydown', o[5])]), (c = !0));
    },
    p(b, [w]) {
      p === (p = h(b)) && g ? g.p(b, w) : (g.d(1), (g = p(b)), g && (g.c(), g.m(e, l))),
        (!n ||
          (w & 1 &&
            r !==
              (r =
                (b[0] ? 'i-tabler-fold-down' : 'i-tabler-fold-up') +
                ' display-inline-block !w-[1.25rem] !h-[1.25rem] ml-auto'))) &&
          u(t, 'class', r),
        (!n ||
          (w & 2 &&
            i !==
              (i =
                'flex justify-between items-center border-b-1 border-black dark:border-white py2 cursor-pointer ' +
                (b[1] ?? '')))) &&
          u(e, 'class', i),
        b[0] && b[3]
          ? T
            ? (T.p(b, w), w & 1 && $(T, 1))
            : ((T = Ke(b)), T.c(), $(T, 1), T.m(s.parentNode, s))
          : T &&
            (ie(),
            N(T, 1, 1, () => {
              T = null;
            }),
            oe());
    },
    i(b) {
      n || ($(T), (n = !0));
    },
    o(b) {
      N(T), (n = !1);
    },
    d(b) {
      b && (d(e), d(a), d(s)), g.d(), T && T.d(b), (c = !1), Ne(f);
    },
  };
}
function Kt(o, e, l) {
  var c;
  let { class: t = void 0 } = e,
    { expanded: r = !1 } = e,
    { data: i } = e;
  const a =
      (c = i.tags) == null ? void 0 : c.sort((f, h) => String(f.name).localeCompare(String(h.name), 'zh-u-co-zhuyin')),
    s = () => {
      l(0, (r = !r));
    },
    n = (f) => {
      f.key === 'Enter' && l(0, (r = !r));
    };
  return (
    (o.$$set = (f) => {
      'class' in f && l(1, (t = f.class)), 'expanded' in f && l(0, (r = f.expanded)), 'data' in f && l(2, (i = f.data));
    }),
    [r, t, i, a, s, n]
  );
}
class Qt extends ke {
  constructor(e) {
    super(), we(this, e, Kt, Jt, ve, { class: 1, expanded: 0, data: 2 });
  }
}
const { window: Oe } = bt;
function We(o, e, l) {
  const t = o.slice();
  return (t[37] = e[l]), t;
}
function Ze(o) {
  let e,
    l,
    t,
    r = o[10].Tags() + '',
    i,
    a,
    s,
    n,
    c,
    f,
    h,
    p,
    g,
    T,
    b,
    w,
    S,
    E,
    x,
    F = o[5],
    O,
    k,
    D,
    q,
    Y,
    A,
    M,
    H,
    B,
    X,
    J,
    z = o[6] && o[6].length > 0 && et(o),
    C = rt(o);
  return {
    c() {
      (e = _('div')),
        (l = _('div')),
        (t = _('h2')),
        (i = Q(r)),
        (a = U()),
        (s = _('div')),
        (c = U()),
        (f = _('form')),
        (h = _('input')),
        (g = U()),
        z && z.c(),
        (T = U()),
        (b = _('div')),
        (w = _('div')),
        (x = U()),
        C.c(),
        (O = U()),
        (k = _('div')),
        (D = _('div')),
        this.h();
    },
    l(L) {
      e = v(L, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var P = I(e);
      l = v(P, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var re = I(l);
      t = v(re, 'H2', { class: !0 });
      var K = I(t);
      (i = W(K, r)),
        K.forEach(d),
        (a = R(re)),
        (s = v(re, 'DIV', { class: !0 })),
        I(s).forEach(d),
        re.forEach(d),
        (c = R(P)),
        (f = v(P, 'FORM', { class: !0 }));
      var j = I(f);
      (h = v(j, 'INPUT', { placeholder: !0, class: !0 })),
        (g = R(j)),
        z && z.l(j),
        j.forEach(d),
        (T = R(P)),
        (b = v(P, 'DIV', { role: !0, tabindex: !0, class: !0 }));
      var G = I(b);
      (w = v(G, 'DIV', { class: !0 })),
        I(w).forEach(d),
        G.forEach(d),
        (x = R(P)),
        C.l(P),
        (O = R(P)),
        (k = v(P, 'DIV', { role: !0, tabindex: !0, class: !0 }));
      var y = I(k);
      (D = v(y, 'DIV', { class: !0 })), I(D).forEach(d), y.forEach(d), P.forEach(d), this.h();
    },
    h() {
      u(t, 'class', 'text-2xl my2'),
        ne(t, 'expaned', o[0]),
        u(
          s,
          'class',
          (n = (o[0] ? 'i-tabler-fold-down' : 'i-tabler-fold-up') + ' display-inline-block !w-[1.75rem] !h-[1.75rem]'),
        ),
        u(l, 'role', 'button'),
        u(l, 'tabindex', '0'),
        u(
          l,
          'class',
          'select-none flex justify-between items-center border-b-2 border-black dark:border-white cursor-pointer',
        ),
        u(h, 'placeholder', (p = o[10].FilterTags())),
        u(
          h,
          'class',
          'my2 px2 py1 bg-transparent border-2 border-x-2 border-black/[0.5] dark:border-white/[0.5] rounded flex-1 svelte-1ppy5m6',
        ),
        u(f, 'class', 'flex items-center relative'),
        u(w, 'class', (S = 'i-bxs-chevrons-up w6 h6 m-auto ' + (o[7] ? 'op100' : 'op0'))),
        u(b, 'role', 'button'),
        u(b, 'tabindex', '0'),
        u(b, 'class', (E = 'hidden xl:block xl:py1 ' + (o[7] ? 'cursor-pointer  hover:bg-gray/[0.5]' : ''))),
        u(D, 'class', (q = 'i-bxs-chevrons-down w6 h6 m-auto ' + (o[8] ? 'op100 ' : 'op0'))),
        u(k, 'role', 'button'),
        u(k, 'tabindex', '0'),
        u(k, 'class', (Y = 'hidden xl:block xl:py1 ' + (o[8] ? 'cursor-pointer hover:bg-gray/[0.5]' : ''))),
        u(e, 'role', 'button'),
        u(e, 'tabindex', '0'),
        u(e, 'class', (A = o[1] ?? ''));
    },
    m(L, P) {
      V(L, e, P),
        m(e, l),
        m(l, t),
        m(t, i),
        m(l, a),
        m(l, s),
        m(e, c),
        m(e, f),
        m(f, h),
        Ce(h, o[6]),
        m(f, g),
        z && z.m(f, null),
        m(e, T),
        m(e, b),
        m(b, w),
        m(e, x),
        C.m(e, null),
        m(e, O),
        m(e, k),
        m(k, D),
        (B = !0),
        X ||
          ((J = [
            ee(l, 'click', o[11]),
            ee(l, 'keydown', o[21]),
            ee(h, 'input', o[22]),
            ee(h, 'input', o[13]),
            ee(h, 'keydown', o[23]),
            ee(f, 'submit', je(o[19])),
            ee(b, 'click', o[17]),
            ee(b, 'touchend', o[17], { passive: !0 }),
            ee(b, 'keydown', o[26]),
            ee(k, 'click', o[18]),
            ee(k, 'touchend', o[18], { passive: !0 }),
            ee(k, 'keydown', o[29]),
            ee(e, 'mousedown', o[14]),
            ee(e, 'touchstart', je(o[15])),
          ]),
          (X = !0));
    },
    p(L, P) {
      (!B || P[0] & 1024) && r !== (r = L[10].Tags() + '') && ue(i, r),
        (!B || P[0] & 1) && ne(t, 'expaned', L[0]),
        (!B ||
          (P[0] & 1 &&
            n !==
              (n =
                (L[0] ? 'i-tabler-fold-down' : 'i-tabler-fold-up') +
                ' display-inline-block !w-[1.75rem] !h-[1.75rem]'))) &&
          u(s, 'class', n),
        (!B || (P[0] & 1024 && p !== (p = L[10].FilterTags()))) && u(h, 'placeholder', p),
        P[0] & 64 && h.value !== L[6] && Ce(h, L[6]),
        L[6] && L[6].length > 0 ? (z ? z.p(L, P) : ((z = et(L)), z.c(), z.m(f, null))) : z && (z.d(1), (z = null)),
        (!B || (P[0] & 128 && S !== (S = 'i-bxs-chevrons-up w6 h6 m-auto ' + (L[7] ? 'op100' : 'op0')))) &&
          u(w, 'class', S),
        (!B ||
          (P[0] & 128 &&
            E !== (E = 'hidden xl:block xl:py1 ' + (L[7] ? 'cursor-pointer  hover:bg-gray/[0.5]' : '')))) &&
          u(b, 'class', E),
        P[0] & 32 && ve(F, (F = L[5]))
          ? (ie(), N(C, 1, 1, be), oe(), (C = rt(L)), C.c(), $(C, 1), C.m(e, O))
          : C.p(L, P),
        (!B || (P[0] & 256 && q !== (q = 'i-bxs-chevrons-down w6 h6 m-auto ' + (L[8] ? 'op100 ' : 'op0')))) &&
          u(D, 'class', q),
        (!B ||
          (P[0] & 256 && Y !== (Y = 'hidden xl:block xl:py1 ' + (L[8] ? 'cursor-pointer hover:bg-gray/[0.5]' : '')))) &&
          u(k, 'class', Y),
        (!B || (P[0] & 2 && A !== (A = L[1] ?? ''))) && u(e, 'class', A);
    },
    i(L) {
      B ||
        ($(C),
        se(() => {
          B && (H && H.end(1), (M = he(e, ae, { x: 100, duration: 300, delay: 300 })), M.start());
        }),
        (B = !0));
    },
    o(L) {
      N(C), M && M.invalidate(), (H = _e(e, ae, { x: 100, duration: 300 })), (B = !1);
    },
    d(L) {
      L && d(e), z && z.d(), C.d(L), L && H && H.end(), (X = !1), Ne(J);
    },
  };
}
function et(o) {
  let e,
    l = '<div class="i-carbon-close-filled !w6 !h6"></div>',
    t,
    r;
  return {
    c() {
      (e = _('div')), (e.innerHTML = l), this.h();
    },
    l(i) {
      (e = v(i, 'DIV', { role: !0, tabindex: !0, class: !0, 'data-svelte-h': !0 })),
        xe(e) !== 'svelte-1tm8a4o' && (e.innerHTML = l),
        this.h();
    },
    h() {
      u(e, 'role', 'button'),
        u(e, 'tabindex', '0'),
        u(e, 'class', 'absolute right-0 cursor-pointer w10 h8 rounded flex items-center justify-center');
    },
    m(i, a) {
      V(i, e, a), t || ((r = [ee(e, 'click', o[24]), ee(e, 'keydown', o[25])]), (t = !0));
    },
    p: be,
    d(i) {
      i && d(e), (t = !1), Ne(r);
    },
  };
}
function tt(o) {
  let e,
    l,
    t,
    r,
    i,
    a,
    s = Se(o[5]),
    n = [];
  for (let f = 0; f < s.length; f += 1) n[f] = lt(We(o, s, f));
  const c = (f) =>
    N(n[f], 1, 1, () => {
      n[f] = null;
    });
  return {
    c() {
      e = _('div');
      for (let f = 0; f < n.length; f += 1) n[f].c();
      this.h();
    },
    l(f) {
      e = v(f, 'DIV', { id: !0, class: !0 });
      var h = I(e);
      for (let p = 0; p < n.length; p += 1) n[p].l(h);
      h.forEach(d), this.h();
    },
    h() {
      u(e, 'id', 'index-tags'),
        u(e, 'class', 'pb4 select-none pointer-grabbing xl:max-h-70vh xl:overflow-hidden svelte-1ppy5m6'),
        se(() => o[28].call(e));
    },
    m(f, h) {
      V(f, e, h);
      for (let p = 0; p < n.length; p += 1) n[p] && n[p].m(e, null);
      o[27](e), (l = ht(e, o[28].bind(e))), (r = !0), i || ((a = ee(e, 'scroll', o[16])), (i = !0));
    },
    p(f, h) {
      if (h[0] & 32) {
        s = Se(f[5]);
        let p;
        for (p = 0; p < s.length; p += 1) {
          const g = We(f, s, p);
          n[p] ? (n[p].p(g, h), $(n[p], 1)) : ((n[p] = lt(g)), n[p].c(), $(n[p], 1), n[p].m(e, null));
        }
        for (ie(), p = s.length; p < n.length; p += 1) c(p);
        oe();
      }
    },
    i(f) {
      if (!r) {
        for (let h = 0; h < s.length; h += 1) $(n[h]);
        se(() => {
          r && (t || (t = Le(e, $e, { duration: 300 }, !0)), t.run(1));
        }),
          (r = !0);
      }
    },
    o(f) {
      n = n.filter(Boolean);
      for (let h = 0; h < n.length; h += 1) N(n[h]);
      t || (t = Le(e, $e, { duration: 300 }, !1)), t.run(0), (r = !1);
    },
    d(f) {
      f && d(e), Ae(n, f), o[27](null), l(), f && t && t.end(), (i = !1), a();
    },
  };
}
function lt(o) {
  let e, l;
  return (
    (e = new Qt({ props: { data: o[37], expanded: !0 } })),
    {
      c() {
        ce(e.$$.fragment);
      },
      l(t) {
        fe(e.$$.fragment, t);
      },
      m(t, r) {
        de(e, t, r), (l = !0);
      },
      p(t, r) {
        const i = {};
        r[0] & 32 && (i.data = t[37]), e.$set(i);
      },
      i(t) {
        l || ($(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function rt(o) {
  let e,
    l,
    t = o[0] && tt(o);
  return {
    c() {
      t && t.c(), (e = le());
    },
    l(r) {
      t && t.l(r), (e = le());
    },
    m(r, i) {
      t && t.m(r, i), V(r, e, i), (l = !0);
    },
    p(r, i) {
      r[0]
        ? t
          ? (t.p(r, i), i[0] & 1 && $(t, 1))
          : ((t = tt(r)), t.c(), $(t, 1), t.m(e.parentNode, e))
        : t &&
          (ie(),
          N(t, 1, 1, () => {
            t = null;
          }),
          oe());
    },
    i(r) {
      l || ($(t), (l = !0));
    },
    o(r) {
      N(t), (l = !1);
    },
    d(r) {
      r && d(e), t && t.d(r);
    },
  };
}
function Wt(o) {
  let e = !1,
    l = () => {
      e = !1;
    },
    t,
    r,
    i,
    a,
    s;
  se(o[20]);
  let n = o[9].length && Ze(o);
  return {
    c() {
      n && n.c(), (r = le());
    },
    l(c) {
      n && n.l(c), (r = le());
    },
    m(c, f) {
      n && n.m(c, f),
        V(c, r, f),
        (i = !0),
        a ||
          ((s = ee(Oe, 'scroll', () => {
            (e = !0), clearTimeout(t), (t = setTimeout(l, 100)), o[20]();
          })),
          (a = !0));
    },
    p(c, f) {
      f[0] & 16 && !e && ((e = !0), clearTimeout(t), scrollTo(Oe.pageXOffset, c[4]), (t = setTimeout(l, 100))),
        c[9].length
          ? n
            ? (n.p(c, f), f[0] & 512 && $(n, 1))
            : ((n = Ze(c)), n.c(), $(n, 1), n.m(r.parentNode, r))
          : n &&
            (ie(),
            N(n, 1, 1, () => {
              n = null;
            }),
            oe());
    },
    i(c) {
      i || ($(n), (i = !0));
    },
    o(c) {
      N(n), (i = !1);
    },
    d(c) {
      c && d(r), n && n.d(c), (a = !1), s();
    },
  };
}
function Zt(o, e, l) {
  let t, r;
  pe(o, gt, (y) => l(9, (t = y))), pe(o, nt, (y) => l(10, (r = y)));
  let i = 0,
    { class: a = void 0 } = e,
    { expaned: s = !0 } = e;
  function n() {
    l(0, (s = !s));
  }
  let c = t,
    f = JSON.stringify(t),
    h,
    p;
  function g() {
    l(5, (c = JSON.parse(f))),
      !(!p || p.length === 0) &&
        (c.map((y) => ((y.tags = y.tags.filter((te) => te.name.toLowerCase().includes(p.toLowerCase()))), y)),
        l(5, (c = c.filter((y) => y.tags.length > 0))));
  }
  const T = () => {
    window.clearTimeout(h),
      (h = window.setTimeout(() => {
        g();
      }, 500));
  };
  let b = { top: 0, left: 0, x: 0, y: 0 };
  function w(y) {
    const te = document.getElementById('index-tags');
    te && (b = { left: te.scrollLeft, top: te.scrollTop, x: y.clientX, y: y.clientY }),
      document.addEventListener('mousemove', E),
      document.addEventListener('mouseup', F);
  }
  function S(y) {
    const te = document.getElementById('index-tags');
    te && (b = { left: te.scrollLeft, top: te.scrollTop, x: y.touches[0].clientX, y: y.touches[0].clientY }),
      document.addEventListener('touchmove', x),
      document.addEventListener('touchend', O);
  }
  function E(y) {
    const te = document.getElementById('index-tags');
    if (te) {
      const Ee = y.clientX - b.x,
        Te = y.clientY - b.y;
      (te.scrollTop = b.top + Te), (te.scrollLeft = b.left - Ee);
    }
  }
  function x(y) {
    const te = document.getElementById('index-tags');
    if (te) {
      const Ee = y.touches[0].clientX - b.x,
        Te = y.touches[0].clientY - b.y;
      (te.scrollTop = b.top + Te), (te.scrollLeft = b.left - Ee);
    }
  }
  function F() {
    const y = document.getElementById('index-tags');
    y && ((y.style.cursor = 'grab'), y.style.removeProperty('user-select')),
      document.removeEventListener('mousemove', E),
      document.removeEventListener('mouseup', F);
  }
  function O() {
    const y = document.getElementById('index-tags');
    y && ((y.style.cursor = 'grab'), y.style.removeProperty('user-select')),
      document.removeEventListener('touchmove', x),
      document.removeEventListener('touchend', O);
  }
  let k,
    D,
    q = !1,
    Y = !1;
  function A() {
    l(7, (q = k.scrollTop > 0)), l(8, (Y = D !== 0 && k.scrollHeight > k.scrollTop + D));
  }
  function M() {
    if (q) {
      const y = document.getElementById('index-tags');
      y && y.scrollBy({ top: -D, behavior: 'smooth' });
    }
  }
  function H() {
    if (Y) {
      const y = document.getElementById('index-tags');
      y && y.scrollBy({ top: D, behavior: 'smooth' });
    }
  }
  function B(y) {
    mt.call(this, o, y);
  }
  function X() {
    l(4, (i = Oe.pageYOffset));
  }
  const J = (y) => {
    y.key === 'Enter' && n();
  };
  function z() {
    (p = this.value), l(6, p);
  }
  const C = (y) => {
      p && p.length > 0 && y.key === 'Escape' && (l(6, (p = '')), g());
    },
    L = () => {
      l(6, (p = '')), g();
    },
    P = (y) => {
      y.key === 'Enter' && (l(6, (p = '')), g());
    },
    re = (y) => {
      y.key === 'Enter' && M();
    };
  function K(y) {
    pt[y ? 'unshift' : 'push'](() => {
      (k = y), l(2, k);
    });
  }
  function j() {
    (D = this.clientHeight), l(3, D);
  }
  const G = (y) => {
    y.key === 'Enter' && H();
  };
  return (
    (o.$$set = (y) => {
      'class' in y && l(1, (a = y.class)), 'expaned' in y && l(0, (s = y.expaned));
    }),
    (o.$$.update = () => {
      o.$$.dirty[0] & 12 && k && (l(7, (q = k.scrollTop > 0)), l(8, (Y = D !== 0 && k.scrollHeight > k.scrollTop + D)));
    }),
    [s, a, k, D, i, c, p, q, Y, t, r, n, g, T, w, S, A, M, H, B, X, J, z, C, L, P, re, K, j, G]
  );
}
class ct extends ke {
  constructor(e) {
    super(), we(this, e, Zt, Wt, ve, { class: 1, expaned: 0 }, null, [-1, -1]);
  }
}
function el(o) {
  let e, l, t, r, i, a, s, n, c;
  return (
    (t = new st({ props: { class: 'flex flex-col gap2 items-center text-center' } })),
    (a = new ut({})),
    {
      c() {
        (e = _('div')), (l = _('div')), ce(t.$$.fragment), (r = U()), (i = _('div')), ce(a.$$.fragment), this.h();
      },
      l(f) {
        e = v(f, 'DIV', { itemscope: !0, itemtype: !0, itemprop: !0, class: !0 });
        var h = I(e);
        l = v(h, 'DIV', { class: !0 });
        var p = I(l);
        fe(t.$$.fragment, p), p.forEach(d), (r = R(h)), (i = v(h, 'DIV', { class: !0 }));
        var g = I(i);
        fe(a.$$.fragment, g), g.forEach(d), h.forEach(d), this.h();
      },
      h() {
        u(l, 'class', 'max-w-screen-md flex-1 relative ml6'),
          u(i, 'class', 'h-feed min-h-50vh flex-none w-full'),
          u(e, 'itemscope', ''),
          u(e, 'itemtype', 'https://schema.org/Blog'),
          u(e, 'itemprop', 'blog'),
          u(e, 'class', 'flex flex-nowrap justify-center flex-col items-center xl:hidden');
      },
      m(f, h) {
        V(f, e, h), m(e, l), de(t, l, null), m(e, r), m(e, i), de(a, i, null), (c = !0);
      },
      i(f) {
        c ||
          ($(t.$$.fragment, f),
          $(a.$$.fragment, f),
          se(() => {
            c && (n && n.end(1), (s = he(e, ae, { y: 100, duration: 300, delay: 300 })), s.start());
          }),
          (c = !0));
      },
      o(f) {
        N(t.$$.fragment, f),
          N(a.$$.fragment, f),
          s && s.invalidate(),
          (n = _e(e, ae, { y: 100, duration: 300 })),
          (c = !1);
      },
      d(f) {
        f && d(e), me(t), me(a), f && n && n.end();
      },
    }
  );
}
function tl(o) {
  let e, l, t, r, i;
  return (
    (l = new ct({ props: { class: 'flex flex-col min-w-[12rem]' } })),
    {
      c() {
        (e = _('div')), ce(l.$$.fragment), this.h();
      },
      l(a) {
        e = v(a, 'DIV', { class: !0 });
        var s = I(e);
        fe(l.$$.fragment, s), s.forEach(d), this.h();
      },
      h() {
        u(e, 'class', 'mx6 my4 xl:hidden');
      },
      m(a, s) {
        V(a, e, s), de(l, e, null), (i = !0);
      },
      i(a) {
        i ||
          ($(l.$$.fragment, a),
          se(() => {
            i && (r && r.end(1), (t = he(e, ae, { x: -100, y: -100, duration: 300, delay: 300 })), t.start());
          }),
          (i = !0));
      },
      o(a) {
        N(l.$$.fragment, a), t && t.invalidate(), (r = _e(e, ae, { x: -100, y: -100, duration: 300 })), (i = !1);
      },
      d(a) {
        a && d(e), me(l), a && r && r.end();
      },
    }
  );
}
function it(o) {
  let e, l;
  return (
    (e = new ct({
      props: {
        class: 'hidden max-w-[20rem] my4 rounded-2xl p4 xl:flex xl:flex-col xl:min-w-[12rem] xl:sticky xl:top-[4rem]',
      },
    })),
    {
      c() {
        ce(e.$$.fragment);
      },
      l(t) {
        fe(e.$$.fragment, t);
      },
      m(t, r) {
        de(e, t, r), (l = !0);
      },
      i(t) {
        l || ($(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function ll(o) {
  let e, l, t, r, i, a, s, n, c, f, h, p, g, T, b, w, S, E, x, F, O, k, D, q, Y, A, M, H, B, X, J, z, C;
  document.title = Z.title;
  const L = [tl, el],
    P = [];
  function re(j, G) {
    return j[0] ? 0 : 1;
  }
  (w = re(o)),
    (S = P[w] = L[w](o)),
    (O = new st({
      props: {
        class:
          'flex flex-col gap2 ml-auto max-w-fit justify-end items-center text-center xl:sticky xl:top-[4rem] xl:min-w-[10rem]',
      },
    })),
    (A = new ut({}));
  let K = o[1] && it();
  return {
    c() {
      (e = _('meta')),
        (l = _('link')),
        (t = _('meta')),
        (r = _('meta')),
        (i = _('meta')),
        (a = _('meta')),
        (s = _('meta')),
        (n = _('meta')),
        (c = _('meta')),
        (f = _('meta')),
        (h = _('meta')),
        (p = _('meta')),
        (g = _('meta')),
        (T = _('meta')),
        (b = U()),
        S.c(),
        (E = U()),
        (x = _('div')),
        (F = _('div')),
        ce(O.$$.fragment),
        (q = U()),
        (Y = _('div')),
        ce(A.$$.fragment),
        (B = U()),
        (X = _('div')),
        K && K.c(),
        this.h();
    },
    l(j) {
      const G = _t('svelte-nc3rjc', document.head);
      (e = v(G, 'META', { name: !0, content: !0 })),
        (l = v(G, 'LINK', { rel: !0, href: !0 })),
        (t = v(G, 'META', { property: !0, content: !0 })),
        (r = v(G, 'META', { property: !0, content: !0 })),
        (i = v(G, 'META', { property: !0, content: !0 })),
        (a = v(G, 'META', { property: !0, content: !0 })),
        (s = v(G, 'META', { name: !0, content: !0 })),
        (n = v(G, 'META', { property: !0, content: !0 })),
        (c = v(G, 'META', { name: !0, content: !0 })),
        (f = v(G, 'META', { property: !0, content: !0 })),
        (h = v(G, 'META', { property: !0, content: !0 })),
        (p = v(G, 'META', { property: !0, content: !0 })),
        (g = v(G, 'META', { name: !0, content: !0 })),
        (T = v(G, 'META', { name: !0, content: !0 })),
        G.forEach(d),
        (b = R(j)),
        S.l(j),
        (E = R(j)),
        (x = v(j, 'DIV', { itemscope: !0, itemtype: !0, itemprop: !0, class: !0 }));
      var y = I(x);
      F = v(y, 'DIV', { class: !0 });
      var te = I(F);
      fe(O.$$.fragment, te), te.forEach(d), (q = R(y)), (Y = v(y, 'DIV', { class: !0 }));
      var Ee = I(Y);
      fe(A.$$.fragment, Ee), Ee.forEach(d), (B = R(y)), (X = v(y, 'DIV', { class: !0 }));
      var Te = I(X);
      K && K.l(Te), Te.forEach(d), y.forEach(d), this.h();
    },
    h() {
      u(e, 'name', 'description'),
        u(e, 'content', Z.description),
        u(l, 'rel', 'canonical'),
        u(l, 'href', Z.url),
        u(t, 'property', 'og:site_name'),
        u(t, 'content', Z.title),
        u(r, 'property', 'og:locale'),
        u(r, 'content', Z.lang),
        u(i, 'property', 'og:type'),
        u(i, 'content', 'website'),
        u(a, 'property', 'og:title'),
        u(a, 'content', Z.title),
        u(s, 'name', 'twitter:title'),
        u(s, 'content', Z.title),
        u(n, 'property', 'og:description'),
        u(n, 'content', Z.description),
        u(c, 'name', 'twitter:description'),
        u(c, 'content', Z.description),
        u(f, 'property', 'og:url'),
        u(f, 'content', Z.url),
        u(h, 'property', 'twitter:url'),
        u(h, 'content', Z.url),
        u(p, 'property', 'og:image'),
        u(p, 'content', new URL(Z.cover, Z.url).href),
        u(g, 'name', 'twitter:image'),
        u(g, 'content', new URL(Z.cover, Z.url).href),
        u(T, 'name', 'twitter:card'),
        u(T, 'content', 'summary_large_image'),
        u(F, 'class', 'min-w-12rem max-w-screen-md flex-1 relative'),
        u(Y, 'class', 'h-feed min-h-50vh flex-none w-full md:rounded-2xl md:w-[50rem] md:mx2'),
        u(X, 'class', 'min-w-12rem max-w-screen-md flex-1 relative mr6'),
        u(x, 'itemscope', ''),
        u(x, 'itemtype', 'https://schema.org/Blog'),
        u(x, 'itemprop', 'blog'),
        u(x, 'class', 'flex-nowrap justify-center flex-col items-center hidden xl:flex xl:flex-row xl:items-stretch');
    },
    m(j, G) {
      m(document.head, e),
        m(document.head, l),
        m(document.head, t),
        m(document.head, r),
        m(document.head, i),
        m(document.head, a),
        m(document.head, s),
        m(document.head, n),
        m(document.head, c),
        m(document.head, f),
        m(document.head, h),
        m(document.head, p),
        m(document.head, g),
        m(document.head, T),
        V(j, b, G),
        P[w].m(j, G),
        V(j, E, G),
        V(j, x, G),
        m(x, F),
        de(O, F, null),
        m(x, q),
        m(x, Y),
        de(A, Y, null),
        m(x, B),
        m(x, X),
        K && K.m(X, null),
        (C = !0);
    },
    p(j, [G]) {
      let y = w;
      (w = re(j)),
        w !== y &&
          (ie(),
          N(P[y], 1, 1, () => {
            P[y] = null;
          }),
          oe(),
          (S = P[w]),
          S || ((S = P[w] = L[w](j)), S.c()),
          $(S, 1),
          S.m(E.parentNode, E)),
        j[1]
          ? K
            ? G & 2 && $(K, 1)
            : ((K = it()), K.c(), $(K, 1), K.m(X, null))
          : K &&
            (ie(),
            N(K, 1, 1, () => {
              K = null;
            }),
            oe());
    },
    i(j) {
      C ||
        ($(S),
        $(O.$$.fragment, j),
        se(() => {
          C && (D && D.end(1), (k = he(F, ae, { x: -100, y: -100, duration: 300, delay: 300 })), k.start());
        }),
        $(A.$$.fragment, j),
        se(() => {
          C && (H && H.end(1), (M = he(Y, ae, { y: 100, duration: 300, delay: 300 })), M.start());
        }),
        $(K),
        se(() => {
          C && (z && z.end(1), (J = he(X, ae, { x: 100, y: -100, duration: 300, delay: 300 })), J.start());
        }),
        (C = !0));
    },
    o(j) {
      N(S),
        N(O.$$.fragment, j),
        k && k.invalidate(),
        (D = _e(F, ae, { x: -100, y: 100, duration: 300 })),
        N(A.$$.fragment, j),
        M && M.invalidate(),
        (H = _e(Y, ae, { y: -100, duration: 300 })),
        N(K),
        J && J.invalidate(),
        (z = _e(X, ae, { x: 100, y: 100, duration: 300 })),
        (C = !1);
    },
    d(j) {
      j && (d(b), d(E), d(x)),
        d(e),
        d(l),
        d(t),
        d(r),
        d(i),
        d(a),
        d(s),
        d(n),
        d(c),
        d(f),
        d(h),
        d(p),
        d(g),
        d(T),
        P[w].d(j),
        me(O),
        j && D && D.end(),
        me(A),
        j && H && H.end(),
        K && K.d(),
        j && z && z.end();
    },
  };
}
function rl(o, e, l) {
  let t, r, i;
  return (
    pe(o, Be, (a) => l(2, (t = a))),
    pe(o, yt, (a) => l(0, (r = a))),
    pe(o, kt, (a) => l(1, (i = a))),
    ot(() => {
      ge.init(),
        Ve.init(),
        t.url.searchParams.forEach((a, s) => {
          (s = decodeURI(s)),
            s.match(/^tags(-.*)?/) &&
              ((s = s.replace(/^tags-/, '')),
              a.split(',').forEach((n) => {
                ge.add(s, n);
              }));
        });
    }),
    [r, i]
  );
}
class ul extends ke {
  constructor(e) {
    super(), we(this, e, rl, ll, ve, {});
  }
}
export { ul as component };
