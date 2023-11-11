import {
  s as Ee,
  e as K,
  i as N,
  v as x,
  d as m,
  y as ce,
  o as Xe,
  f as E,
  l as oe,
  a as B,
  g as y,
  h as H,
  m as re,
  c as V,
  j as s,
  u as _,
  n as ge,
  H as xe,
  x as et,
  G as pe,
  B as Q,
  F as We,
  I as _e,
  w as Pe,
  U as Zt,
  P as Yt,
  S as Gt,
  p as $e,
  A as Dt,
  C as Ut,
  D as Nt,
  E as jt,
  R as Je,
  V as Rt,
  Q as Ze,
  r as $t,
} from './scheduler.b261eb3c.js';
import {
  S as ze,
  i as Le,
  a as D,
  g as ve,
  t as R,
  c as be,
  f as lt,
  b as ue,
  d as de,
  m as fe,
  e as me,
  h as Ae,
  j as Ce,
} from './index.5ccb46b4.js';
import { L as Ke, g as se, s as G, f as Ve, p as qt } from './i18n-svelte.2f0d0f90.js';
import { e as ae, s as it, g as Xt, i as ie, U as Me, I as Wt, j as Ye, f as at, p as Kt } from './tippy.6de01e5a.js';
import { w as Jt } from './singletons.3d6b7982.js';
import { a as Bt, I as Vt } from './image_banner.32849a6c.js';
import { d as st, a as ct, l as ut, t as Qt } from './timeFormat.64a220de.js';
const qe = (() => {
  let r = new Map();
  const { subscribe: e, update: n, set: t } = Jt(r);
  return {
    subscribe: e,
    init: () => {
      (r = new Map()), t(r);
    },
    addTOC: (o) => {
      n((l) => {
        if (l) {
          l || (l = new Map());
          const i = l.get(o) || 0;
          l.set(o, i + 1);
        }
        return l;
      });
    },
    delTOC: (o) => {
      n((l) => {
        if (l) {
          const i = l.get(o);
          i && (i - 1 === 0 ? l.delete(o) : l.set(o, i - 1));
        }
        return l;
      });
    },
  };
})();
function xt(r) {
  let e,
    n,
    t,
    o = r[0].LoadingGiscus() + '',
    l,
    i,
    a,
    u,
    c;
  return {
    c() {
      (e = E('div')),
        (n = E('div')),
        (t = E('h2')),
        (l = oe(o)),
        (i = B()),
        (a = E('div')),
        (u = B()),
        (c = E('div')),
        this.h();
    },
    l(f) {
      e = y(f, 'DIV', { id: !0 });
      var d = H(e);
      n = y(d, 'DIV', { id: !0, class: !0 });
      var p = H(n);
      t = y(p, 'H2', {});
      var b = H(t);
      (l = re(b, o)),
        b.forEach(m),
        (i = V(p)),
        (a = y(p, 'DIV', { class: !0 })),
        H(a).forEach(m),
        p.forEach(m),
        (u = V(d)),
        (c = y(d, 'DIV', { id: !0, class: !0 })),
        H(c).forEach(m),
        d.forEach(m),
        this.h();
    },
    h() {
      s(a, 'class', 'i-line-md-loading-twotone-loop !h-16 !w-16'),
        s(n, 'id', 'giscus-loading'),
        s(n, 'class', 'flex flex-col items-center gap2'),
        s(c, 'id', 'giscus'),
        s(c, 'class', 'giscus'),
        s(e, 'id', 'giscus-container');
    },
    m(f, d) {
      N(f, e, d), _(e, n), _(n, t), _(t, l), _(n, i), _(n, a), _(e, u), _(e, c);
    },
    p(f, d) {
      d & 1 && o !== (o = f[0].LoadingGiscus() + '') && ge(l, o);
    },
    d(f) {
      f && m(e);
    },
  };
}
function en(r) {
  let e,
    n = xt(r);
  return {
    c() {
      n && n.c(), (e = K());
    },
    l(t) {
      n && n.l(t), (e = K());
    },
    m(t, o) {
      n && n.m(t, o), N(t, e, o);
    },
    p(t, [o]) {
      n.p(t, o);
    },
    i: x,
    o: x,
    d(t) {
      t && m(e), n && n.d(t);
    },
  };
}
function tn(r, e, n) {
  let t;
  ce(r, Ke, (l) => n(0, (t = l)));
  let { theme: o } = e;
  return (
    Xe(() => {
      const l = document.createElement('script');
      Object.entries({
        src: se.src ?? 'https://giscus.app/client.js',
        'data-repo': se.repo,
        'data-repo-id': se.repoId,
        'data-category': se.category,
        'data-category-id': se.categoryId,
        'data-mapping': se.mapping,
        'data-reactions-enabled': se.reactionsEnabled,
        'data-input-position': se.inputPosition,
        'data-theme': o ?? 'preferred_color_scheme',
        'data-lang': se.lang,
        'data-loading': se.loading,
        'data-strict': se['data-strict'],
        crossorigin: 'anonymous',
        async: '',
      }).forEach(([i, a]) => {
        a && l.setAttribute(i, a);
      }),
        setTimeout(() => {
          var u;
          const i = new MutationObserver(() => {
              var c;
              (c = document.getElementById('giscus-loading')) == null || c.remove(), i.disconnect();
            }),
            a = document.getElementById('giscus');
          a && i.observe(a, { childList: !0 }),
            (u = document.getElementById('giscus-container')) == null || u.appendChild(l);
        }, 1e3);
    }),
    (r.$$set = (l) => {
      'theme' in l && n(1, (o = l.theme));
    }),
    [t, o]
  );
}
class nn extends ze {
  constructor(e) {
    super(), Le(this, e, tn, en, Ee, { theme: 1 });
  }
}
function dt(r, e, n) {
  const t = r.slice();
  return (t[12] = e[n]), t;
}
function on(r) {
  let e;
  return {
    c() {
      (e = E('span')), this.h();
    },
    l(n) {
      (e = y(n, 'SPAN', { class: !0 })), H(e).forEach(m), this.h();
    },
    h() {
      s(e, 'class', '!w-[1.25rem] !h-[1.25rem] i-akar-icons-circle inline-block shrink-0');
    },
    m(n, t) {
      N(n, e, t);
    },
    p: x,
    d(n) {
      n && m(e);
    },
  };
}
function rn(r) {
  let e, n, t, o;
  return {
    c() {
      (e = E('span')), this.h();
    },
    l(l) {
      (e = y(l, 'SPAN', { role: !0, tabindex: !0, class: !0 })), H(e).forEach(m), this.h();
    },
    h() {
      s(e, 'role', 'button'),
        s(e, 'tabindex', '0'),
        s(
          e,
          'class',
          (n =
            'cursor-pointer z10 !w-[1.25rem] !h-[1.25rem] inline-block transition-transform duration-300 ease-out shrink-0 ' +
            (r[0]
              ? 'i-akar-icons-circle-chevron-up active:translate-y--1 hover:i-akar-icons-circle-chevron-up-fill'
              : 'i-akar-icons-circle-chevron-down active:translate-y-1 hover:i-akar-icons-circle-chevron-down-fill')),
        );
    },
    m(l, i) {
      N(l, e, i), t || ((o = [Q(e, 'click', Zt(r[7])), Q(e, 'keydown', r[8])]), (t = !0));
    },
    p(l, i) {
      i & 1 &&
        n !==
          (n =
            'cursor-pointer z10 !w-[1.25rem] !h-[1.25rem] inline-block transition-transform duration-300 ease-out shrink-0 ' +
            (l[0]
              ? 'i-akar-icons-circle-chevron-up active:translate-y--1 hover:i-akar-icons-circle-chevron-up-fill'
              : 'i-akar-icons-circle-chevron-down active:translate-y-1 hover:i-akar-icons-circle-chevron-down-fill')) &&
        s(e, 'class', n);
    },
    d(l) {
      l && m(e), (t = !1), We(o);
    },
  };
}
function ft(r) {
  let e,
    n,
    t = r[0] && mt(r);
  return {
    c() {
      t && t.c(), (e = K());
    },
    l(o) {
      t && t.l(o), (e = K());
    },
    m(o, l) {
      t && t.m(o, l), N(o, e, l), (n = !0);
    },
    p(o, l) {
      o[0]
        ? t
          ? (t.p(o, l), l & 1 && D(t, 1))
          : ((t = mt(o)), t.c(), D(t, 1), t.m(e.parentNode, e))
        : t &&
          (ve(),
          R(t, 1, 1, () => {
            t = null;
          }),
          be());
    },
    i(o) {
      n || (D(t), (n = !0));
    },
    o(o) {
      R(t), (n = !1);
    },
    d(o) {
      o && m(e), t && t.d(o);
    },
  };
}
function mt(r) {
  let e,
    n,
    t,
    o = ae(r[1].child),
    l = [];
  for (let a = 0; a < o.length; a += 1) l[a] = ht(dt(r, o, a));
  const i = (a) =>
    R(l[a], 1, 1, () => {
      l[a] = null;
    });
  return {
    c() {
      e = E('ul');
      for (let a = 0; a < l.length; a += 1) l[a].c();
      this.h();
    },
    l(a) {
      e = y(a, 'UL', { class: !0 });
      var u = H(e);
      for (let c = 0; c < l.length; c += 1) l[c].l(u);
      u.forEach(m), this.h();
    },
    h() {
      s(e, 'class', 'flex flex-col');
    },
    m(a, u) {
      N(a, e, u);
      for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(e, null);
      t = !0;
    },
    p(a, u) {
      if (u & 6) {
        o = ae(a[1].child);
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = dt(a, o, c);
          l[c] ? (l[c].p(f, u), D(l[c], 1)) : ((l[c] = ht(f)), l[c].c(), D(l[c], 1), l[c].m(e, null));
        }
        for (ve(), c = o.length; c < l.length; c += 1) i(c);
        be();
      }
    },
    i(a) {
      if (!t) {
        for (let u = 0; u < o.length; u += 1) D(l[u]);
        _e(() => {
          t && (n || (n = lt(e, it, { duration: 300 }, !0)), n.run(1));
        }),
          (t = !0);
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1) R(l[u]);
      n || (n = lt(e, it, { duration: 300 }, !1)), n.run(0), (t = !1);
    },
    d(a) {
      a && m(e), Pe(l, a), a && n && n.end();
    },
  };
}
function ht(r) {
  let e, n;
  return (
    (e = new Ft({ props: { content: r[12], depth: r[2] + 1, expanded: !0 } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p(t, o) {
        const l = {};
        o & 2 && (l.content = t[12]), o & 4 && (l.depth = t[2] + 1), e.$set(l);
      },
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function ln(r) {
  let e,
    n,
    t,
    o,
    l,
    i = r[1].heading + '',
    a,
    u,
    c,
    f,
    d,
    p,
    b;
  function I(g, z) {
    return g[1].child && g[1].child.length > 0 ? rn : on;
  }
  let k = I(r),
    S = k(r),
    w = r[1].child && r[1].child.length > 0 && ft(r);
  return {
    c() {
      (e = E('li')),
        (n = E('div')),
        S.c(),
        (t = B()),
        (o = E('span')),
        (l = new xe(!1)),
        (c = B()),
        w && w.c(),
        this.h();
    },
    l(g) {
      e = y(g, 'LI', { id: !0 });
      var z = H(e);
      n = y(z, 'DIV', { role: !0, tabindex: !0, 'data-toc-link': !0, class: !0 });
      var v = H(n);
      S.l(v), (t = V(v)), (o = y(v, 'SPAN', { class: !0 }));
      var C = H(o);
      (l = et(C, !1)), C.forEach(m), v.forEach(m), (c = V(z)), w && w.l(z), z.forEach(m), this.h();
    },
    h() {
      (l.a = null),
        s(
          o,
          'class',
          (a =
            (r[3].get(r[1].slug) ? '!text-black !font-900 scale-105 !dark:text-white' : '') +
            ' cursor-pointer select-none text-black/[0.6] group-hover:text-black dark:text-white/[0.6] dark:group-hover:text-white !dark:group-active:text-black'),
        ),
        s(n, 'role', 'button'),
        s(n, 'tabindex', '0'),
        s(n, 'data-toc-link', ''),
        s(
          n,
          'class',
          (u =
            'z1 group flex items-center gap2 py2 ' +
            (r[3].get(r[1].slug) ? 'border-[#0096FF]' : 'border-transparent') +
            ' svelte-19vg5wt'),
        ),
        pe(n, 'pl4', r[2] === 1),
        pe(n, 'pl8', r[2] === 2),
        pe(n, 'pl12', r[2] === 3),
        pe(n, 'pl16', r[2] === 4),
        pe(n, 'pl18', r[2] === 5),
        s(e, 'id', (f = r[1].slug));
    },
    m(g, z) {
      N(g, e, z),
        _(e, n),
        S.m(n, null),
        _(n, t),
        _(n, o),
        l.m(i, o),
        _(e, c),
        w && w.m(e, null),
        (d = !0),
        p ||
          ((b = [
            Q(n, 'click', r[4]),
            Q(n, 'touchstart', r[5], { passive: !0 }),
            Q(n, 'touchend', r[6], { passive: !0 }),
            Q(n, 'keydown', r[9]),
          ]),
          (p = !0));
    },
    p(g, [z]) {
      k === (k = I(g)) && S ? S.p(g, z) : (S.d(1), (S = k(g)), S && (S.c(), S.m(n, t))),
        (!d || z & 2) && i !== (i = g[1].heading + '') && l.p(i),
        (!d ||
          (z & 10 &&
            a !==
              (a =
                (g[3].get(g[1].slug) ? '!text-black !font-900 scale-105 !dark:text-white' : '') +
                ' cursor-pointer select-none text-black/[0.6] group-hover:text-black dark:text-white/[0.6] dark:group-hover:text-white !dark:group-active:text-black'))) &&
          s(o, 'class', a),
        (!d ||
          (z & 10 &&
            u !==
              (u =
                'z1 group flex items-center gap2 py2 ' +
                (g[3].get(g[1].slug) ? 'border-[#0096FF]' : 'border-transparent') +
                ' svelte-19vg5wt'))) &&
          s(n, 'class', u),
        (!d || z & 14) && pe(n, 'pl4', g[2] === 1),
        (!d || z & 14) && pe(n, 'pl8', g[2] === 2),
        (!d || z & 14) && pe(n, 'pl12', g[2] === 3),
        (!d || z & 14) && pe(n, 'pl16', g[2] === 4),
        (!d || z & 14) && pe(n, 'pl18', g[2] === 5),
        g[1].child && g[1].child.length > 0
          ? w
            ? (w.p(g, z), z & 2 && D(w, 1))
            : ((w = ft(g)), w.c(), D(w, 1), w.m(e, null))
          : w &&
            (ve(),
            R(w, 1, 1, () => {
              w = null;
            }),
            be()),
        (!d || (z & 2 && f !== (f = g[1].slug))) && s(e, 'id', f);
    },
    i(g) {
      d || (D(w), (d = !0));
    },
    o(g) {
      R(w), (d = !1);
    },
    d(g) {
      g && m(e), S.d(), w && w.d(), (p = !1), We(b);
    },
  };
}
function an(r, e, n) {
  let t;
  ce(r, qe, (k) => n(3, (t = k)));
  let { content: o } = e,
    { expanded: l = !1 } = e,
    { depth: i = 1 } = e;
  function a() {
    const k = document.getElementById(`${o.slug.substring(1)}`),
      S = document.getElementById('header-nav');
    if (k && S) {
      const w = k.offsetTop - S.clientHeight;
      window.scrollTo({ top: w, behavior: 'smooth' });
    }
  }
  let u = !1;
  function c() {
    document.addEventListener('touchmove', f);
  }
  function f() {
    u = !0;
  }
  function d() {
    u ? (u = !1) : a(), document.removeEventListener('touchmove', f);
  }
  const p = () => {
      n(0, (l = !l));
    },
    b = (k) => {
      k.key === 'Enter' && n(0, (l = !l));
    },
    I = (k) => {
      k.key === 'Enter' && a();
    };
  return (
    (r.$$set = (k) => {
      'content' in k && n(1, (o = k.content)),
        'expanded' in k && n(0, (l = k.expanded)),
        'depth' in k && n(2, (i = k.depth));
    }),
    [l, o, i, t, a, c, d, p, b, I]
  );
}
class Ft extends ze {
  constructor(e) {
    super(), Le(this, e, an, ln, Ee, { content: 1, expanded: 0, depth: 2 });
  }
}
const { window: Qe } = Xt;
function pt(r, e, n) {
  const t = r.slice();
  return (t[28] = e[n]), t;
}
function gt(r) {
  let e,
    n,
    t,
    o = r[6].TableOfContent() + '',
    l,
    i,
    a,
    u,
    c,
    f,
    d,
    p,
    b,
    I,
    k,
    S,
    w,
    g,
    z,
    v = r[0] && r[0].length > 0 && _t(r);
  return {
    c() {
      (e = E('aside')),
        (n = E('div')),
        (t = E('span')),
        (l = oe(o)),
        (i = B()),
        (a = E('div')),
        (u = E('div')),
        (d = B()),
        v && v.c(),
        (p = B()),
        (b = E('div')),
        (I = E('div')),
        this.h();
    },
    l(C) {
      e = y(C, 'ASIDE', { 'aria-label': !0, class: !0 });
      var O = H(e);
      n = y(O, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var L = H(n);
      t = y(L, 'SPAN', { role: !0, tabindex: !0, class: !0 });
      var h = H(t);
      (l = re(h, o)), h.forEach(m), (i = V(L)), (a = y(L, 'DIV', { role: !0, tabindex: !0, class: !0 }));
      var q = H(a);
      (u = y(q, 'DIV', { class: !0 })),
        H(u).forEach(m),
        q.forEach(m),
        (d = V(L)),
        v && v.l(L),
        (p = V(L)),
        (b = y(L, 'DIV', { role: !0, tabindex: !0, class: !0 }));
      var F = H(b);
      (I = y(F, 'DIV', { class: !0 })), H(I).forEach(m), F.forEach(m), L.forEach(m), O.forEach(m), this.h();
    },
    h() {
      s(t, 'role', 'button'),
        s(t, 'tabindex', '0'),
        s(t, 'class', 'text-2xl font-bold px4 py2 text-center cursor-pointer'),
        s(u, 'class', (c = 'i-bxs-chevrons-up w6 h6 m-auto ' + (r[4] ? 'op100' : 'op0'))),
        s(a, 'role', 'button'),
        s(a, 'tabindex', '0'),
        s(a, 'class', (f = r[4] ? 'cursor-pointer  hover:bg-gray/[0.5]' : '')),
        s(I, 'class', (k = 'i-bxs-chevrons-down w6 h6 m-auto ' + (r[5] ? 'op100 ' : 'op0'))),
        s(b, 'role', 'button'),
        s(b, 'tabindex', '0'),
        s(b, 'class', (S = r[5] ? 'cursor-pointer hover:bg-gray/[0.5]' : '')),
        s(n, 'role', 'button'),
        s(n, 'tabindex', '0'),
        s(n, 'class', 'flex-col'),
        s(e, 'aria-label', 'Table Of Content'),
        s(e, 'class', 'sticky top-[4rem] hidden xl:block pb8');
    },
    m(C, O) {
      N(C, e, O),
        _(e, n),
        _(n, t),
        _(t, l),
        _(n, i),
        _(n, a),
        _(a, u),
        _(n, d),
        v && v.m(n, null),
        _(n, p),
        _(n, b),
        _(b, I),
        (w = !0),
        g ||
          ((z = [
            Q(t, 'click', r[16]),
            Q(t, 'keydown', r[17]),
            Q(a, 'click', r[10]),
            Q(a, 'touchend', r[10], { passive: !0 }),
            Q(a, 'keydown', r[18]),
            Q(b, 'click', r[11]),
            Q(b, 'touchend', r[11], { passive: !0 }),
            Q(b, 'keydown', r[21]),
            Q(n, 'mousedown', r[7]),
            Q(n, 'touchstart', Yt(r[8])),
          ]),
          (g = !0));
    },
    p(C, O) {
      (!w || O & 64) && o !== (o = C[6].TableOfContent() + '') && ge(l, o),
        (!w || (O & 16 && c !== (c = 'i-bxs-chevrons-up w6 h6 m-auto ' + (C[4] ? 'op100' : 'op0')))) &&
          s(u, 'class', c),
        (!w || (O & 16 && f !== (f = C[4] ? 'cursor-pointer  hover:bg-gray/[0.5]' : ''))) && s(a, 'class', f),
        C[0] && C[0].length > 0
          ? v
            ? (v.p(C, O), O & 1 && D(v, 1))
            : ((v = _t(C)), v.c(), D(v, 1), v.m(n, p))
          : v &&
            (ve(),
            R(v, 1, 1, () => {
              v = null;
            }),
            be()),
        (!w || (O & 32 && k !== (k = 'i-bxs-chevrons-down w6 h6 m-auto ' + (C[5] ? 'op100 ' : 'op0')))) &&
          s(I, 'class', k),
        (!w || (O & 32 && S !== (S = C[5] ? 'cursor-pointer hover:bg-gray/[0.5]' : ''))) && s(b, 'class', S);
    },
    i(C) {
      w || (D(v), (w = !0));
    },
    o(C) {
      R(v), (w = !1);
    },
    d(C) {
      C && m(e), v && v.d(), (g = !1), We(z);
    },
  };
}
function _t(r) {
  let e,
    n,
    t,
    o,
    l,
    i = ae(r[0]),
    a = [];
  for (let c = 0; c < i.length; c += 1) a[c] = vt(pt(r, i, c));
  const u = (c) =>
    R(a[c], 1, 1, () => {
      a[c] = null;
    });
  return {
    c() {
      e = E('ul');
      for (let c = 0; c < a.length; c += 1) a[c].c();
      this.h();
    },
    l(c) {
      e = y(c, 'UL', { id: !0, class: !0 });
      var f = H(e);
      for (let d = 0; d < a.length; d += 1) a[d].l(f);
      f.forEach(m), this.h();
    },
    h() {
      s(e, 'id', 'post-toc'),
        s(e, 'class', 'my2 text-base font-semibold flex flex-col max-h-60vh cursor-grab overflow-hidden'),
        _e(() => r[20].call(e));
    },
    m(c, f) {
      N(c, e, f);
      for (let d = 0; d < a.length; d += 1) a[d] && a[d].m(e, null);
      r[19](e), (n = Gt(e, r[20].bind(e))), (t = !0), o || ((l = Q(e, 'scroll', r[9])), (o = !0));
    },
    p(c, f) {
      if (f & 1) {
        i = ae(c[0]);
        let d;
        for (d = 0; d < i.length; d += 1) {
          const p = pt(c, i, d);
          a[d] ? (a[d].p(p, f), D(a[d], 1)) : ((a[d] = vt(p)), a[d].c(), D(a[d], 1), a[d].m(e, null));
        }
        for (ve(), d = i.length; d < a.length; d += 1) u(d);
        be();
      }
    },
    i(c) {
      if (!t) {
        for (let f = 0; f < i.length; f += 1) D(a[f]);
        t = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let f = 0; f < a.length; f += 1) R(a[f]);
      t = !1;
    },
    d(c) {
      c && m(e), Pe(a, c), r[19](null), n(), (o = !1), l();
    },
  };
}
function vt(r) {
  let e, n;
  return (
    (e = new Ft({ props: { content: r[28], expanded: !0 } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p(t, o) {
        const l = {};
        o & 1 && (l.content = t[28]), e.$set(l);
      },
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function sn(r) {
  let e = !1,
    n = () => {
      e = !1;
    },
    t,
    o,
    l,
    i,
    a;
  _e(r[15]);
  let u = r[0] && r[0].length > 0 && gt(r);
  return {
    c() {
      u && u.c(), (o = K());
    },
    l(c) {
      u && u.l(c), (o = K());
    },
    m(c, f) {
      u && u.m(c, f),
        N(c, o, f),
        (l = !0),
        i ||
          ((a = Q(Qe, 'scroll', () => {
            (e = !0), clearTimeout(t), (t = setTimeout(n, 100)), r[15]();
          })),
          (i = !0));
    },
    p(c, [f]) {
      f & 8 && !e && ((e = !0), clearTimeout(t), scrollTo(Qe.pageXOffset, c[3]), (t = setTimeout(n, 100))),
        c[0] && c[0].length > 0
          ? u
            ? (u.p(c, f), f & 1 && D(u, 1))
            : ((u = gt(c)), u.c(), D(u, 1), u.m(o.parentNode, o))
          : u &&
            (ve(),
            R(u, 1, 1, () => {
              u = null;
            }),
            be());
    },
    i(c) {
      l || (D(u), (l = !0));
    },
    o(c) {
      R(u), (l = !1);
    },
    d(c) {
      c && m(o), u && u.d(c), (i = !1), a();
    },
  };
}
function cn(r, e, n) {
  let t, o;
  ce(r, qe, (T) => n(14, (t = T))), ce(r, Ke, (T) => n(6, (o = T)));
  let { toc: l } = e,
    i = { top: 0, left: 0, x: 0, y: 0 };
  function a(T) {
    const A = document.getElementById('post-toc');
    A &&
      ((A.style.cursor = 'grabbing'),
      (A.style.userSelect = 'none'),
      (i = { left: A.scrollLeft, top: A.scrollTop, x: T.clientX, y: T.clientY })),
      document.addEventListener('mousemove', u),
      document.addEventListener('mouseup', c);
  }
  function u(T) {
    const A = document.getElementById('post-toc');
    if (A) {
      const Y = T.clientX - i.x,
        U = T.clientY - i.y;
      (A.scrollTop = i.top + U), (A.scrollLeft = i.left - Y);
    }
  }
  function c() {
    const T = document.getElementById('post-toc');
    T && ((T.style.cursor = 'grab'), T.style.removeProperty('user-select')),
      document.removeEventListener('mousemove', u),
      document.removeEventListener('mouseup', c);
  }
  let f = !1;
  function d(T) {
    const A = document.getElementById('post-toc');
    A &&
      ((A.style.cursor = 'grabbing'),
      (A.style.userSelect = 'none'),
      (i = { left: A.scrollLeft, top: A.scrollTop, x: T.touches[0].clientX, y: T.touches[0].clientY })),
      document.addEventListener('touchmove', p),
      document.addEventListener('touchend', b);
  }
  function p(T) {
    const A = document.getElementById('post-toc');
    if (A) {
      const Y = T.touches[0].clientX - i.x,
        U = T.touches[0].clientY - i.y;
      (A.scrollTop = i.top + U), (A.scrollLeft = i.left - Y), (f = !0);
    }
  }
  function b(T) {
    const A = document.getElementById('post-toc');
    A &&
      ((A.style.cursor = 'grab'),
      A.style.removeProperty('user-select'),
      f && ((f = !1), T.preventDefault(), T.stopPropagation())),
      document.removeEventListener('touchmove', p),
      document.removeEventListener('touchend', b);
  }
  let I,
    k,
    S = !1,
    w = !1;
  function g() {
    const A = I.scrollHeight - k;
    n(4, (S = I.scrollTop > 0)), n(5, (w = I.scrollTop < A));
  }
  function z() {
    if (S) {
      const T = document.getElementById('post-toc');
      T && T.scrollBy({ top: -k, behavior: 'smooth' });
    }
  }
  function v() {
    if (w) {
      const T = document.getElementById('post-toc');
      T && T.scrollBy({ top: k, behavior: 'smooth' });
    }
  }
  let C,
    O = 0,
    L = !1;
  function h() {
    n(3, (C = Qe.pageYOffset));
  }
  const q = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    F = (T) => {
      T.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    X = (T) => {
      T.key === 'Enter' && z();
    };
  function P(T) {
    $e[T ? 'unshift' : 'push'](() => {
      (I = T), n(1, I);
    });
  }
  function M() {
    (k = this.clientHeight), n(2, k);
  }
  const Z = (T) => {
    T.key === 'Enter' && v();
  };
  return (
    (r.$$set = (T) => {
      'toc' in T && n(0, (l = T.toc));
    }),
    (r.$$.update = () => {
      if (r.$$.dirty & 6 && I) {
        const A = I.scrollHeight - k;
        n(4, (S = I.scrollTop > 0)), n(5, (w = I.scrollTop < A));
      }
      if (r.$$.dirty & 28680) {
        n(13, (L = O - C > 0)), n(12, (O = C));
        const T = document.getElementById('post-toc'),
          A = Array.from(t.keys()),
          Y = A.length > 0 ? document.getElementById(A[A.length - 1]) : void 0;
        if (T && Y) {
          const U = T.scrollTop,
            j = U + T.clientHeight,
            te = Y.offsetTop,
            ne = te + Y.clientHeight;
          if (!(te >= U && ne <= j)) {
            const ke = L ? te : ne;
            T.scrollTo({ top: ke, behavior: 'smooth' });
          }
        }
      }
    }),
    [l, I, k, C, S, w, o, a, d, g, z, v, O, L, t, h, q, F, X, P, M, Z]
  );
}
class un extends ze {
  constructor(e) {
    super(), Le(this, e, cn, sn, Ee, { toc: 0 });
  }
}
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */ var Te =
    Object.assign ||
    function (r) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
      }
      return r;
    },
  Fe = function (e) {
    return e.tagName === 'IMG';
  },
  dn = function (e) {
    return NodeList.prototype.isPrototypeOf(e);
  },
  Ge = function (e) {
    return e && e.nodeType === 1;
  },
  bt = function (e) {
    var n = e.currentSrc || e.src;
    return n.substr(-4).toLowerCase() === '.svg';
  },
  wt = function (e) {
    try {
      return Array.isArray(e)
        ? e.filter(Fe)
        : dn(e)
        ? [].slice.call(e).filter(Fe)
        : Ge(e)
        ? [e].filter(Fe)
        : typeof e == 'string'
        ? [].slice.call(document.querySelectorAll(e)).filter(Fe)
        : [];
    } catch {
      throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
    }
  },
  fn = function (e) {
    var n = document.createElement('div');
    return n.classList.add('medium-zoom-overlay'), (n.style.background = e), n;
  },
  mn = function (e) {
    var n = e.getBoundingClientRect(),
      t = n.top,
      o = n.left,
      l = n.width,
      i = n.height,
      a = e.cloneNode(),
      u = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      c = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return (
      a.removeAttribute('id'),
      (a.style.position = 'absolute'),
      (a.style.top = t + u + 'px'),
      (a.style.left = o + c + 'px'),
      (a.style.width = l + 'px'),
      (a.style.height = i + 'px'),
      (a.style.transform = ''),
      a
    );
  },
  Oe = function (e, n) {
    var t = Te({ bubbles: !1, cancelable: !1, detail: void 0 }, n);
    if (typeof window.CustomEvent == 'function') return new CustomEvent(e, t);
    var o = document.createEvent('CustomEvent');
    return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o;
  },
  hn = function r(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t =
        window.Promise ||
        function (P) {
          function M() {}
          P(M, M);
        },
      o = function (P) {
        var M = P.target;
        if (M === q) {
          I();
          return;
        }
        z.indexOf(M) !== -1 && k({ target: M });
      },
      l = function () {
        if (!(C || !h.original)) {
          var P = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          Math.abs(O - P) > L.scrollOffset && setTimeout(I, 150);
        }
      },
      i = function (P) {
        var M = P.key || P.keyCode;
        (M === 'Escape' || M === 'Esc' || M === 27) && I();
      },
      a = function () {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          M = P;
        if (
          (P.background && (q.style.background = P.background),
          P.container && P.container instanceof Object && (M.container = Te({}, L.container, P.container)),
          P.template)
        ) {
          var Z = Ge(P.template) ? P.template : document.querySelector(P.template);
          M.template = Z;
        }
        return (
          (L = Te({}, L, M)),
          z.forEach(function (T) {
            T.dispatchEvent(Oe('medium-zoom:update', { detail: { zoom: F } }));
          }),
          F
        );
      },
      u = function () {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return r(Te({}, L, P));
      },
      c = function () {
        for (var P = arguments.length, M = Array(P), Z = 0; Z < P; Z++) M[Z] = arguments[Z];
        var T = M.reduce(function (A, Y) {
          return [].concat(A, wt(Y));
        }, []);
        return (
          T.filter(function (A) {
            return z.indexOf(A) === -1;
          }).forEach(function (A) {
            z.push(A), A.classList.add('medium-zoom-image');
          }),
          v.forEach(function (A) {
            var Y = A.type,
              U = A.listener,
              j = A.options;
            T.forEach(function (te) {
              te.addEventListener(Y, U, j);
            });
          }),
          F
        );
      },
      f = function () {
        for (var P = arguments.length, M = Array(P), Z = 0; Z < P; Z++) M[Z] = arguments[Z];
        h.zoomed && I();
        var T =
          M.length > 0
            ? M.reduce(function (A, Y) {
                return [].concat(A, wt(Y));
              }, [])
            : z;
        return (
          T.forEach(function (A) {
            A.classList.remove('medium-zoom-image'), A.dispatchEvent(Oe('medium-zoom:detach', { detail: { zoom: F } }));
          }),
          (z = z.filter(function (A) {
            return T.indexOf(A) === -1;
          })),
          F
        );
      },
      d = function (P, M) {
        var Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          z.forEach(function (T) {
            T.addEventListener('medium-zoom:' + P, M, Z);
          }),
          v.push({ type: 'medium-zoom:' + P, listener: M, options: Z }),
          F
        );
      },
      p = function (P, M) {
        var Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          z.forEach(function (T) {
            T.removeEventListener('medium-zoom:' + P, M, Z);
          }),
          (v = v.filter(function (T) {
            return !(T.type === 'medium-zoom:' + P && T.listener.toString() === M.toString());
          })),
          F
        );
      },
      b = function () {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          M = P.target,
          Z = function () {
            var A = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              Y = void 0,
              U = void 0;
            if (L.container)
              if (L.container instanceof Object)
                (A = Te({}, A, L.container)),
                  (Y = A.width - A.left - A.right - L.margin * 2),
                  (U = A.height - A.top - A.bottom - L.margin * 2);
              else {
                var j = Ge(L.container) ? L.container : document.querySelector(L.container),
                  te = j.getBoundingClientRect(),
                  ne = te.width,
                  ye = te.height,
                  ke = te.left,
                  De = te.top;
                A = Te({}, A, { width: ne, height: ye, left: ke, top: De });
              }
            (Y = Y || A.width - L.margin * 2), (U = U || A.height - L.margin * 2);
            var le = h.zoomedHd || h.original,
              ee = bt(le) ? Y : le.naturalWidth || Y,
              Ue = bt(le) ? U : le.naturalHeight || U,
              Ie = le.getBoundingClientRect(),
              J = Ie.top,
              $ = Ie.left,
              W = Ie.width,
              he = Ie.height,
              Ne = Math.min(Math.max(W, ee), Y) / W,
              He = Math.min(Math.max(he, Ue), U) / he,
              Se = Math.min(Ne, He),
              je = (-$ + (Y - W) / 2 + L.margin + A.left) / Se,
              Re = (-J + (U - he) / 2 + L.margin + A.top) / Se,
              we = 'scale(' + Se + ') translate3d(' + je + 'px, ' + Re + 'px, 0)';
            (h.zoomed.style.transform = we), h.zoomedHd && (h.zoomedHd.style.transform = we);
          };
        return new t(function (T) {
          if (M && z.indexOf(M) === -1) {
            T(F);
            return;
          }
          var A = function ne() {
            (C = !1),
              h.zoomed.removeEventListener('transitionend', ne),
              h.original.dispatchEvent(Oe('medium-zoom:opened', { detail: { zoom: F } })),
              T(F);
          };
          if (h.zoomed) {
            T(F);
            return;
          }
          if (M) h.original = M;
          else if (z.length > 0) {
            var Y = z;
            h.original = Y[0];
          } else {
            T(F);
            return;
          }
          if (
            (h.original.dispatchEvent(Oe('medium-zoom:open', { detail: { zoom: F } })),
            (O = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            (C = !0),
            (h.zoomed = mn(h.original)),
            document.body.appendChild(q),
            L.template)
          ) {
            var U = Ge(L.template) ? L.template : document.querySelector(L.template);
            (h.template = document.createElement('div')),
              h.template.appendChild(U.content.cloneNode(!0)),
              document.body.appendChild(h.template);
          }
          if (
            (h.original.parentElement &&
              h.original.parentElement.tagName === 'PICTURE' &&
              h.original.currentSrc &&
              (h.zoomed.src = h.original.currentSrc),
            document.body.appendChild(h.zoomed),
            window.requestAnimationFrame(function () {
              document.body.classList.add('medium-zoom--opened');
            }),
            h.original.classList.add('medium-zoom-image--hidden'),
            h.zoomed.classList.add('medium-zoom-image--opened'),
            h.zoomed.addEventListener('click', I),
            h.zoomed.addEventListener('transitionend', A),
            h.original.getAttribute('data-zoom-src'))
          ) {
            (h.zoomedHd = h.zoomed.cloneNode()),
              h.zoomedHd.removeAttribute('srcset'),
              h.zoomedHd.removeAttribute('sizes'),
              h.zoomedHd.removeAttribute('loading'),
              (h.zoomedHd.src = h.zoomed.getAttribute('data-zoom-src')),
              (h.zoomedHd.onerror = function () {
                clearInterval(j),
                  console.warn('Unable to reach the zoom image target ' + h.zoomedHd.src),
                  (h.zoomedHd = null),
                  Z();
              });
            var j = setInterval(function () {
              h.zoomedHd.complete &&
                (clearInterval(j),
                h.zoomedHd.classList.add('medium-zoom-image--opened'),
                h.zoomedHd.addEventListener('click', I),
                document.body.appendChild(h.zoomedHd),
                Z());
            }, 10);
          } else if (h.original.hasAttribute('srcset')) {
            (h.zoomedHd = h.zoomed.cloneNode()),
              h.zoomedHd.removeAttribute('sizes'),
              h.zoomedHd.removeAttribute('loading');
            var te = h.zoomedHd.addEventListener('load', function () {
              h.zoomedHd.removeEventListener('load', te),
                h.zoomedHd.classList.add('medium-zoom-image--opened'),
                h.zoomedHd.addEventListener('click', I),
                document.body.appendChild(h.zoomedHd),
                Z();
            });
          } else Z();
        });
      },
      I = function () {
        return new t(function (P) {
          if (C || !h.original) {
            P(F);
            return;
          }
          var M = function Z() {
            h.original.classList.remove('medium-zoom-image--hidden'),
              document.body.removeChild(h.zoomed),
              h.zoomedHd && document.body.removeChild(h.zoomedHd),
              document.body.removeChild(q),
              h.zoomed.classList.remove('medium-zoom-image--opened'),
              h.template && document.body.removeChild(h.template),
              (C = !1),
              h.zoomed.removeEventListener('transitionend', Z),
              h.original.dispatchEvent(Oe('medium-zoom:closed', { detail: { zoom: F } })),
              (h.original = null),
              (h.zoomed = null),
              (h.zoomedHd = null),
              (h.template = null),
              P(F);
          };
          (C = !0),
            document.body.classList.remove('medium-zoom--opened'),
            (h.zoomed.style.transform = ''),
            h.zoomedHd && (h.zoomedHd.style.transform = ''),
            h.template && ((h.template.style.transition = 'opacity 150ms'), (h.template.style.opacity = 0)),
            h.original.dispatchEvent(Oe('medium-zoom:close', { detail: { zoom: F } })),
            h.zoomed.addEventListener('transitionend', M);
        });
      },
      k = function () {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          M = P.target;
        return h.original ? I() : b({ target: M });
      },
      S = function () {
        return L;
      },
      w = function () {
        return z;
      },
      g = function () {
        return h.original;
      },
      z = [],
      v = [],
      C = !1,
      O = 0,
      L = n,
      h = { original: null, zoomed: null, zoomedHd: null, template: null };
    Object.prototype.toString.call(e) === '[object Object]' ? (L = e) : (e || typeof e == 'string') && c(e),
      (L = Te({ margin: 0, background: '#fff', scrollOffset: 40, container: null, template: null }, L));
    var q = fn(L.background);
    document.addEventListener('click', o),
      document.addEventListener('keyup', i),
      document.addEventListener('scroll', l),
      window.addEventListener('resize', I);
    var F = {
      open: b,
      close: I,
      toggle: k,
      update: a,
      clone: u,
      attach: c,
      detach: f,
      on: d,
      off: p,
      getOptions: S,
      getImages: w,
      getZoomedImage: g,
    };
    return F;
  };
function pn(r, e) {
  e === void 0 && (e = {});
  var n = e.insertAt;
  if (!(!r || typeof document > 'u')) {
    var t = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      n === 'top' && t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o),
      o.styleSheet ? (o.styleSheet.cssText = r) : o.appendChild(document.createTextNode(r));
  }
}
var gn =
  '.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}';
pn(gn);
const _n = hn;
function Et(r, e, n) {
  const t = r.slice();
  return (t[17] = e[n]), (t[19] = n), t;
}
function yt(r, e, n) {
  const t = r.slice();
  return (t[20] = e[n][0]), (t[21] = e[n][1]), t;
}
function kt(r, e, n) {
  const t = r.slice();
  return (t[17] = e[n]), (t[19] = n), t;
}
function vn(r) {
  let e, n, t;
  return {
    c() {
      (e = E('img')), this.h();
    },
    l(o) {
      (e = y(o, 'IMG', {
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
      s(e, 'draggable', 'false'),
        s(e, 'itemprop', 'image'),
        s(
          e,
          'class',
          (n = 'z-50 m-auto md:rounded-2xl md:shadow-xl ' + (r[2] ?? 'h-full w-auto aspect-auto object-cover')),
        ),
        s(e, 'decoding', r[7]),
        s(e, 'loading', r[6]),
        Je(e.src, (t = r[4])) || s(e, 'src', t),
        s(e, 'alt', r[5]),
        s(e, 'width', r[0]),
        s(e, 'height', r[1]);
    },
    m(o, l) {
      N(o, e, l), r[15](e);
    },
    p(o, l) {
      l & 4 &&
        n !== (n = 'z-50 m-auto md:rounded-2xl md:shadow-xl ' + (o[2] ?? 'h-full w-auto aspect-auto object-cover')) &&
        s(e, 'class', n),
        l & 128 && s(e, 'decoding', o[7]),
        l & 64 && s(e, 'loading', o[6]),
        l & 16 && !Je(e.src, (t = o[4])) && s(e, 'src', t),
        l & 32 && s(e, 'alt', o[5]),
        l & 1 && s(e, 'width', o[0]),
        l & 2 && s(e, 'height', o[1]);
    },
    d(o) {
      o && m(e), r[15](null);
    },
  };
}
function bn(r) {
  let e,
    n,
    t = Me.ExtraResolutions && Object.keys(Me.ExtraResolutions).length,
    o,
    l,
    i,
    a,
    u = r[10] && wn(r),
    c = t && En(r);
  return {
    c() {
      (e = E('picture')), u && u.c(), (n = B()), c && c.c(), (o = B()), (l = E('img')), this.h();
    },
    l(f) {
      e = y(f, 'PICTURE', {});
      var d = H(e);
      u && u.l(d),
        (n = V(d)),
        c && c.l(d),
        (o = V(d)),
        (l = y(d, 'IMG', {
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
        d.forEach(m),
        this.h();
    },
    h() {
      s(l, 'draggable', 'false'),
        s(l, 'itemprop', 'image'),
        s(
          l,
          'class',
          (i = 'z-50 m-auto md:rounded-2xl md:shadow-xl ' + (r[2] ?? 'h-full w-auto aspect-auto object-cover')),
        ),
        s(l, 'decoding', r[7]),
        s(l, 'loading', r[6]),
        Je(l.src, (a = r[9].original)) || s(l, 'src', a),
        s(l, 'alt', r[5]),
        s(l, 'width', r[0]),
        s(l, 'height', r[1]);
    },
    m(f, d) {
      N(f, e, d), u && u.m(e, null), _(e, n), c && c.m(e, null), _(e, o), _(e, l), r[14](l);
    },
    p(f, d) {
      f[10] && u.p(f, d),
        t && c.p(f, d),
        d & 4 &&
          i !== (i = 'z-50 m-auto md:rounded-2xl md:shadow-xl ' + (f[2] ?? 'h-full w-auto aspect-auto object-cover')) &&
          s(l, 'class', i),
        d & 128 && s(l, 'decoding', f[7]),
        d & 64 && s(l, 'loading', f[6]),
        d & 32 && s(l, 'alt', f[5]),
        d & 1 && s(l, 'width', f[0]),
        d & 2 && s(l, 'height', f[1]);
    },
    d(f) {
      f && m(e), u && u.d(), c && c.d(), r[14](null);
    },
  };
}
function wn(r) {
  let e,
    n = ae(r[10]),
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = Lt(yt(r, n, o));
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = K();
    },
    l(o) {
      for (let l = 0; l < t.length; l += 1) t[l].l(o);
      e = K();
    },
    m(o, l) {
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(o, l);
      N(o, e, l);
    },
    p(o, l) {
      if (l & 3072) {
        n = ae(o[10]);
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = yt(o, n, i);
          t[i] ? t[i].p(a, l) : ((t[i] = Lt(a)), t[i].c(), t[i].m(e.parentNode, e));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = n.length;
      }
    },
    d(o) {
      o && m(e), Pe(t, o);
    },
  };
}
function zt(r) {
  let e, n;
  return {
    c() {
      (e = E('source')), this.h();
    },
    l(t) {
      (e = y(t, 'SOURCE', { media: !0, srcset: !0, width: !0, type: !0 })), this.h();
    },
    h() {
      s(e, 'media', `(min-width: ${r[21].minWidth})`),
        Rt(e, (n = `${r[11](r[20], r[19])}`.replace(/^\./, ''))) || s(e, 'srcset', n),
        s(e, 'width', r[21].width),
        s(e, 'type', `image/${r[17]}`);
    },
    m(t, o) {
      N(t, e, o);
    },
    p: x,
    d(t) {
      t && m(e);
    },
  };
}
function Lt(r) {
  let e,
    n = ae(r[21].format),
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = zt(kt(r, n, o));
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = K();
    },
    l(o) {
      for (let l = 0; l < t.length; l += 1) t[l].l(o);
      e = K();
    },
    m(o, l) {
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(o, l);
      N(o, e, l);
    },
    p(o, l) {
      if (l & 3072) {
        n = ae(o[21].format);
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = kt(o, n, i);
          t[i] ? t[i].p(a, l) : ((t[i] = zt(a)), t[i].c(), t[i].m(e.parentNode, e));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = n.length;
      }
    },
    d(o) {
      o && m(e), Pe(t, o);
    },
  };
}
function En(r) {
  let e,
    n = ae(Object.entries(Me.ExtraResolutions)),
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = It(Et(r, n, o));
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = K();
    },
    l(o) {
      for (let l = 0; l < t.length; l += 1) t[l].l(o);
      e = K();
    },
    m(o, l) {
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(o, l);
      N(o, e, l);
    },
    p(o, l) {
      if (l & 512) {
        n = ae(Object.entries(Me.ExtraResolutions));
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = Et(o, n, i);
          t[i] ? t[i].p(a, l) : ((t[i] = It(a)), t[i].c(), t[i].m(e.parentNode, e));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = n.length;
      }
    },
    d(o) {
      o && m(e), Pe(t, o);
    },
  };
}
function It(r) {
  let e, n;
  return {
    c() {
      (e = E('source')), this.h();
    },
    l(t) {
      (e = y(t, 'SOURCE', { type: !0, srcset: !0 })), this.h();
    },
    h() {
      s(e, 'type', `image/${r[17]}`),
        Rt(
          e,
          (n = `${Array.isArray(r[9].extraFormats) ? r[9].extraFormats[r[19]] : r[9].extraFormats}`.replace(/^\./, '')),
        ) || s(e, 'srcset', n);
    },
    m(t, o) {
      N(t, e, o);
    },
    p: x,
    d(t) {
      t && m(e);
    },
  };
}
function yn(r) {
  let e, n, t, o, l, i, a;
  function u(b, I) {
    return b[9] ? bn : vn;
  }
  let f = u(r)(r);
  const d = r[13].default,
    p = Dt(d, r, r[12], null);
  return {
    c() {
      (e = E('figure')), f.c(), (n = B()), (t = E('figcaption')), p && p.c(), this.h();
    },
    l(b) {
      e = y(b, 'FIGURE', { class: !0 });
      var I = H(e);
      f.l(I), (n = V(I)), (t = y(I, 'FIGCAPTION', { class: !0 }));
      var k = H(t);
      p && p.l(k), k.forEach(m), I.forEach(m), this.h();
    },
    h() {
      s(t, 'class', (o = r[3] ?? 'italic op70 text-center mt2')), s(e, 'class', 'my6 select-none');
    },
    m(b, I) {
      N(b, e, I), f.m(e, null), _(e, n), _(e, t), p && p.m(t, null), (a = !0);
    },
    p(b, [I]) {
      f.p(b, I),
        p && p.p && (!a || I & 4096) && Ut(p, d, b, b[12], a ? jt(d, b[12], I, null) : Nt(b[12]), null),
        (!a || (I & 8 && o !== (o = b[3] ?? 'italic op70 text-center mt2'))) && s(t, 'class', o);
    },
    i(b) {
      a ||
        (D(p, b),
        _e(() => {
          a && (i && i.end(1), (l = Ae(e, ie, { duration: 300, delay: 300 })), l.start());
        }),
        (a = !0));
    },
    o(b) {
      R(p, b), l && l.invalidate(), (i = Ce(e, ie, { duration: 300 })), (a = !1);
    },
    d(b) {
      b && m(e), f.d(), p && p.d(b), b && i && i.end();
    },
  };
}
function kn(r, e, n) {
  let t;
  ce(r, Bt, (v) => n(16, (t = v)));
  let { $$slots: o = {}, $$scope: l } = e,
    i,
    { class: a = void 0 } = e,
    { captionClass: u = void 0 } = e,
    { src: c } = e,
    { alt: f = c } = e,
    { loading: d = 'lazy' } = e,
    { decoding: p = 'async' } = e,
    { width: b = void 0 } = e,
    { height: I = void 0 } = e,
    k = t.get(c);
  const S =
      Me.ExtraResolutions &&
      Object.entries(Me.ExtraResolutions)
        .filter((v) => k && k[v[0]])
        .sort((v, C) => +C[0] - +v[0]),
    w = function (v, C) {
      if (!k) return;
      let O = k[v];
      return O && Array.isArray(O) ? O[C] : O;
    };
  Xe(() => {
    _n(i, { scrollOffset: 0, background: 'rgba(25, 18, 25, .9)' });
  });
  function g(v) {
    $e[v ? 'unshift' : 'push'](() => {
      (i = v), n(8, i);
    });
  }
  function z(v) {
    $e[v ? 'unshift' : 'push'](() => {
      (i = v), n(8, i);
    });
  }
  return (
    (r.$$set = (v) => {
      'class' in v && n(2, (a = v.class)),
        'captionClass' in v && n(3, (u = v.captionClass)),
        'src' in v && n(4, (c = v.src)),
        'alt' in v && n(5, (f = v.alt)),
        'loading' in v && n(6, (d = v.loading)),
        'decoding' in v && n(7, (p = v.decoding)),
        'width' in v && n(0, (b = v.width)),
        'height' in v && n(1, (I = v.height)),
        '$$scope' in v && n(12, (l = v.$$scope));
    }),
    n(0, (b = k == null ? void 0 : k.width)),
    n(1, (I = k == null ? void 0 : k.height)),
    [b, I, a, u, c, f, d, p, i, k, S, w, l, o, g, z]
  );
}
class zn extends ze {
  constructor(e) {
    super(),
      Le(this, e, kn, yn, Ee, {
        class: 2,
        captionClass: 3,
        src: 4,
        alt: 5,
        loading: 6,
        decoding: 7,
        width: 0,
        height: 1,
      });
  }
}
function Tt(r) {
  let e, n;
  return (
    (e = new zn({
      props: {
        src: r[0].cover,
        class: 'w-full h-auto aspect-auto object-cover md:rounded-2xl md:shadow-xl',
        loading: 'eager',
        $$slots: { default: [Ln] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p(t, o) {
        const l = {};
        o & 1 && (l.src = t[0].cover), o & 5 && (l.$$scope = { dirty: o, ctx: t }), e.$set(l);
      },
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function At(r) {
  let e,
    n = r[0].coverCaption + '',
    t;
  return {
    c() {
      (e = new xe(!1)), (t = K()), this.h();
    },
    l(o) {
      (e = et(o, !1)), (t = K()), this.h();
    },
    h() {
      e.a = t;
    },
    m(o, l) {
      e.m(n, o, l), N(o, t, l);
    },
    p(o, l) {
      l & 1 && n !== (n = o[0].coverCaption + '') && e.p(n);
    },
    d(o) {
      o && (m(t), e.d());
    },
  };
}
function Ln(r) {
  let e,
    n = r[0].coverCaption && At(r);
  return {
    c() {
      n && n.c(), (e = K());
    },
    l(t) {
      n && n.l(t), (e = K());
    },
    m(t, o) {
      n && n.m(t, o), N(t, e, o);
    },
    p(t, o) {
      t[0].coverCaption ? (n ? n.p(t, o) : ((n = At(t)), n.c(), n.m(e.parentNode, e))) : n && (n.d(1), (n = null));
    },
    d(t) {
      t && m(e), n && n.d(t);
    },
  };
}
function In(r) {
  let e,
    n,
    t,
    o = new URL(r[0].slug, G.url).href + '',
    l,
    i,
    a,
    u,
    c,
    f,
    d,
    p,
    b,
    I = G.author.name + '',
    k,
    S,
    w,
    g,
    z = st(r[0].published) + '',
    v,
    C,
    O,
    L,
    h,
    q = ct(r[0].updated) + '',
    F,
    X,
    P,
    M,
    Z = r[1].Updated() + '',
    T,
    A,
    Y = ut(r[0].updated) + '',
    U,
    j,
    te,
    ne,
    ye = r[0].title + '',
    ke,
    De,
    le,
    ee,
    Ue,
    Ie;
  c = new Wt({
    props: {
      width: '32px',
      height: '32px',
      class:
        'inline-block !w-8 !h-8 mr-1 object-cover aspect-1 rounded-full hover:rotate-[360deg] transition-transform duration-1000 ease-in-out',
    },
  });
  let J = r[0].cover && Tt(r);
  return {
    c() {
      (e = E('div')),
        (n = E('div')),
        (t = E('a')),
        (l = oe(o)),
        (a = B()),
        (u = E('div')),
        ue(c.$$.fragment),
        (f = B()),
        (d = E('span')),
        (p = E('a')),
        (b = E('span')),
        (k = oe(I)),
        (S = B()),
        (w = E('div')),
        (g = E('time')),
        (v = oe(z)),
        (L = B()),
        (h = E('time')),
        (F = oe(q)),
        (P = B()),
        (M = E('span')),
        (T = oe(Z)),
        (A = B()),
        (U = oe(Y)),
        (te = B()),
        (ne = E('h1')),
        (ke = oe(ye)),
        (De = B()),
        (le = E('div')),
        J && J.c(),
        this.h();
    },
    l($) {
      e = y($, 'DIV', { class: !0 });
      var W = H(e);
      n = y(W, 'DIV', { class: !0 });
      var he = H(n);
      t = y(he, 'A', { class: !0, href: !0 });
      var Ne = H(t);
      (l = re(Ne, o)), Ne.forEach(m), (a = V(he)), (u = y(he, 'DIV', { class: !0 }));
      var He = H(u);
      de(c.$$.fragment, He), (f = V(He)), (d = y(He, 'SPAN', { class: !0 }));
      var Se = H(d);
      p = y(Se, 'A', { 'aria-label': !0, rel: !0, href: !0, class: !0 });
      var je = H(p);
      b = y(je, 'SPAN', { class: !0 });
      var Re = H(b);
      (k = re(Re, I)),
        Re.forEach(m),
        je.forEach(m),
        Se.forEach(m),
        He.forEach(m),
        (S = V(he)),
        (w = y(he, 'DIV', { class: !0 }));
      var we = H(w);
      g = y(we, 'TIME', { class: !0, 'aria-label': !0, datetime: !0, itemprop: !0 });
      var tt = H(g);
      (v = re(tt, z)), tt.forEach(m), (L = V(we)), (h = y(we, 'TIME', { class: !0, datetime: !0, itemprop: !0 }));
      var nt = H(h);
      (F = re(nt, q)), nt.forEach(m), (P = V(we)), (M = y(we, 'SPAN', { 'aria-label': !0 }));
      var Be = H(M);
      (T = re(Be, Z)),
        (A = V(Be)),
        (U = re(Be, Y)),
        Be.forEach(m),
        we.forEach(m),
        he.forEach(m),
        (te = V(W)),
        (ne = y(W, 'H1', { itemprop: !0, class: !0 }));
      var ot = H(ne);
      (ke = re(ot, ye)), ot.forEach(m), (De = V(W)), (le = y(W, 'DIV', { class: !0 }));
      var rt = H(le);
      J && J.l(rt), rt.forEach(m), W.forEach(m), this.h();
    },
    h() {
      s(t, 'class', 'hidden u-url u-uid'),
        s(t, 'href', (i = new URL(r[0].slug, G.url).href)),
        s(b, 'class', 'p-name'),
        s(p, 'aria-label', 'Github Page'),
        s(p, 'rel', 'author external'),
        s(p, 'href', G.author.github),
        s(p, 'class', 'u-url u-uid'),
        s(d, 'class', 'font-bold text-base'),
        s(u, 'class', 'p-author h-card flex items-center gap-1 pl-0 shrink-0'),
        s(g, 'class', 'dt-published'),
        s(
          g,
          'aria-label',
          (C =
            r[1].FirstPublishedAt() +
            ' ' +
            new Date(r[0].published).toLocaleString(Ve.toPublishedString.locales, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              timeZone: `${G.timeZone}`,
            })),
        ),
        s(g, 'datetime', (O = r[0].published)),
        s(g, 'itemprop', 'datePublished'),
        s(h, 'class', 'hidden dt-updated'),
        s(h, 'datetime', (X = r[0].updated)),
        s(h, 'itemprop', 'dateModified'),
        s(
          M,
          'aria-label',
          (j =
            r[1].LastUpdatedAt() +
            ' ' +
            new Date(r[0].updated).toLocaleString(Ve.toPublishedString.locales, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              timeZone: `${G.timeZone}`,
            })),
        ),
        s(w, 'class', 'flex flex-col gap1 text-right text-sm font-semibold op80'),
        s(n, 'class', 'flex justify-between items-center mx--4 md:mx0'),
        s(ne, 'itemprop', 'name headline'),
        s(ne, 'class', 'p-name text-4xl my4 mx--4 md:mx0'),
        s(le, 'class', 'mx--8 md:mx0'),
        s(e, 'class', 'flex flex-col pt8 mx8');
    },
    m($, W) {
      N($, e, W),
        _(e, n),
        _(n, t),
        _(t, l),
        _(n, a),
        _(n, u),
        fe(c, u, null),
        _(u, f),
        _(u, d),
        _(d, p),
        _(p, b),
        _(b, k),
        _(n, S),
        _(n, w),
        _(w, g),
        _(g, v),
        _(w, L),
        _(w, h),
        _(h, F),
        _(w, P),
        _(w, M),
        _(M, T),
        _(M, A),
        _(M, U),
        _(e, te),
        _(e, ne),
        _(ne, ke),
        _(e, De),
        _(e, le),
        J && J.m(le, null),
        (ee = !0),
        Ue || ((Ie = [Ze(Ye.call(null, p)), Ze(Ye.call(null, g)), Ze(Ye.call(null, M))]), (Ue = !0));
    },
    p($, [W]) {
      (!ee || W & 1) && o !== (o = new URL($[0].slug, G.url).href + '') && ge(l, o),
        (!ee || (W & 1 && i !== (i = new URL($[0].slug, G.url).href))) && s(t, 'href', i),
        (!ee || W & 1) && z !== (z = st($[0].published) + '') && ge(v, z),
        (!ee ||
          (W & 3 &&
            C !==
              (C =
                $[1].FirstPublishedAt() +
                ' ' +
                new Date($[0].published).toLocaleString(Ve.toPublishedString.locales, {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: `${G.timeZone}`,
                })))) &&
          s(g, 'aria-label', C),
        (!ee || (W & 1 && O !== (O = $[0].published))) && s(g, 'datetime', O),
        (!ee || W & 1) && q !== (q = ct($[0].updated) + '') && ge(F, q),
        (!ee || (W & 1 && X !== (X = $[0].updated))) && s(h, 'datetime', X),
        (!ee || W & 2) && Z !== (Z = $[1].Updated() + '') && ge(T, Z),
        (!ee || W & 1) && Y !== (Y = ut($[0].updated) + '') && ge(U, Y),
        (!ee ||
          (W & 3 &&
            j !==
              (j =
                $[1].LastUpdatedAt() +
                ' ' +
                new Date($[0].updated).toLocaleString(Ve.toPublishedString.locales, {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: `${G.timeZone}`,
                })))) &&
          s(M, 'aria-label', j),
        (!ee || W & 1) && ye !== (ye = $[0].title + '') && ge(ke, ye),
        $[0].cover
          ? J
            ? (J.p($, W), W & 1 && D(J, 1))
            : ((J = Tt($)), J.c(), D(J, 1), J.m(le, null))
          : J &&
            (ve(),
            R(J, 1, 1, () => {
              J = null;
            }),
            be());
    },
    i($) {
      ee || (D(c.$$.fragment, $), D(J), (ee = !0));
    },
    o($) {
      R(c.$$.fragment, $), R(J), (ee = !1);
    },
    d($) {
      $ && m(e), me(c), J && J.d(), (Ue = !1), We(Ie);
    },
  };
}
function Tn(r, e, n) {
  let t;
  ce(r, Ke, (l) => n(1, (t = l)));
  let { data: o } = e;
  return (
    (r.$$set = (l) => {
      'data' in l && n(0, (o = l.data));
    }),
    [o, t]
  );
}
class An extends ze {
  constructor(e) {
    super(), Le(this, e, Tn, In, Ee, { data: 0 });
  }
}
function Cn(r) {
  let e, n, t;
  return {
    c() {
      (e = E('meta')), (n = B()), (t = E('meta')), this.h();
    },
    l(o) {
      (e = y(o, 'META', { property: !0, content: !0 })),
        (n = V(o)),
        (t = y(o, 'META', { name: !0, content: !0 })),
        this.h();
    },
    h() {
      s(e, 'property', 'og:image'),
        s(e, 'content', new URL(G.cover, G.url).href),
        s(t, 'name', 'twitter:image'),
        s(t, 'content', new URL(G.cover, G.url).href);
    },
    m(o, l) {
      N(o, e, l), N(o, n, l), N(o, t, l);
    },
    p: x,
    d(o) {
      o && (m(e), m(n), m(t));
    },
  };
}
function Hn(r) {
  let e, n, t, o, l, i, a;
  return {
    c() {
      (e = E('meta')), (n = B()), (t = E('meta')), (o = B()), (l = E('meta')), (i = B()), (a = E('meta')), this.h();
    },
    l(u) {
      (e = y(u, 'META', { property: !0, content: !0 })),
        (n = V(u)),
        (t = y(u, 'META', { property: !0, content: !0 })),
        (o = V(u)),
        (l = y(u, 'META', { property: !0, content: !0 })),
        (i = V(u)),
        (a = y(u, 'META', { name: !0, content: !0 })),
        this.h();
    },
    h() {
      s(e, 'property', 'og:image'),
        s(e, 'content', new URL(r[1].original, G.url).href),
        s(t, 'property', 'og:image:width'),
        s(t, 'content', '' + r[1].width),
        s(l, 'property', 'og:image:height'),
        s(l, 'content', '' + r[1].height),
        s(a, 'name', 'twitter:image'),
        s(a, 'content', new URL(r[1].original, G.url).href);
    },
    m(u, c) {
      N(u, e, c), N(u, n, c), N(u, t, c), N(u, o, c), N(u, l, c), N(u, i, c), N(u, a, c);
    },
    p: x,
    d(u) {
      u && (m(e), m(n), m(t), m(o), m(l), m(i), m(a));
    },
  };
}
function Sn(r) {
  let e,
    n,
    t,
    o,
    l,
    i,
    a,
    u,
    c,
    f,
    d,
    p,
    b,
    I,
    k,
    S,
    w,
    g,
    z,
    v,
    C,
    O,
    L,
    h,
    q,
    F,
    X,
    P,
    M = `<script type="application/ld+json">${
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: r[0].title,
        image: r[1] ? [new URL(r[1].original, G.url).href] : [],
        datePublished: r[0].published,
        dateModified: r[0].updated,
        author: [{ '@type': 'Person', name: G.author.name, url: G.author.github }],
      }) + '<'
    }/script>`,
    Z;
  document.title = e = r[0].title + ' | ' + G.title;
  function T(U, j) {
    return U[1] && U[1].original ? Hn : Cn;
  }
  let Y = T(r)(r);
  return {
    c() {
      (n = E('meta')),
        (o = E('link')),
        (i = E('meta')),
        (a = E('meta')),
        (u = E('meta')),
        (c = E('meta')),
        (d = E('meta')),
        (b = E('meta')),
        (k = E('meta')),
        (w = E('meta')),
        (z = E('meta')),
        (C = E('meta')),
        (O = E('meta')),
        (h = E('meta')),
        (F = E('meta')),
        Y.c(),
        (X = K()),
        (P = new xe(!1)),
        (Z = K()),
        this.h();
    },
    l(U) {
      const j = $t('svelte-15famg8', document.head);
      (n = y(j, 'META', { name: !0, content: !0 })),
        (o = y(j, 'LINK', { rel: !0, href: !0 })),
        (i = y(j, 'META', { property: !0, content: !0 })),
        (a = y(j, 'META', { property: !0, content: !0 })),
        (u = y(j, 'META', { property: !0, content: !0 })),
        (c = y(j, 'META', { property: !0, content: !0 })),
        (d = y(j, 'META', { name: !0, content: !0 })),
        (b = y(j, 'META', { property: !0, content: !0 })),
        (k = y(j, 'META', { name: !0, content: !0 })),
        (w = y(j, 'META', { property: !0, content: !0 })),
        (z = y(j, 'META', { property: !0, content: !0 })),
        (C = y(j, 'META', { property: !0, content: !0 })),
        (O = y(j, 'META', { property: !0, content: !0 })),
        (h = y(j, 'META', { property: !0, content: !0 })),
        (F = y(j, 'META', { name: !0, content: !0 })),
        Y.l(j),
        (X = K()),
        (P = et(j, !1)),
        (Z = K()),
        j.forEach(m),
        this.h();
    },
    h() {
      s(n, 'name', 'description'),
        s(n, 'content', (t = r[0].description)),
        s(o, 'rel', 'canonical'),
        s(o, 'href', (l = new URL(r[0].slug, G.url).href)),
        s(i, 'property', 'og:site_name'),
        s(i, 'content', G.title),
        s(a, 'property', 'og:locale'),
        s(a, 'content', G.lang),
        s(u, 'property', 'og:type'),
        s(u, 'content', 'article'),
        s(c, 'property', 'og:title'),
        s(c, 'content', (f = r[0].title)),
        s(d, 'name', 'twitter:title'),
        s(d, 'content', (p = new URL(r[0].slug, G.url).href)),
        s(b, 'property', 'og:description'),
        s(b, 'content', (I = r[0].description)),
        s(k, 'name', 'twitter:description'),
        s(k, 'content', (S = r[0].description)),
        s(w, 'property', 'og:url'),
        s(w, 'content', (g = new URL(r[0].slug, G.url).href)),
        s(z, 'property', 'twitter:url'),
        s(z, 'content', (v = new URL(r[0].slug, G.url).href)),
        s(C, 'property', 'article:author'),
        s(C, 'content', G.author.name),
        s(O, 'property', 'article:published_time'),
        s(O, 'content', (L = r[0].published)),
        s(h, 'property', 'article:modified_time'),
        s(h, 'content', (q = r[0].updated)),
        s(F, 'name', 'twitter:card'),
        s(F, 'content', 'summary_large_image'),
        (P.a = Z);
    },
    m(U, j) {
      _(document.head, n),
        _(document.head, o),
        _(document.head, i),
        _(document.head, a),
        _(document.head, u),
        _(document.head, c),
        _(document.head, d),
        _(document.head, b),
        _(document.head, k),
        _(document.head, w),
        _(document.head, z),
        _(document.head, C),
        _(document.head, O),
        _(document.head, h),
        _(document.head, F),
        Y.m(document.head, null),
        _(document.head, X),
        P.m(M, document.head),
        _(document.head, Z);
    },
    p(U, [j]) {
      j & 1 && e !== (e = U[0].title + ' | ' + G.title) && (document.title = e),
        j & 1 && t !== (t = U[0].description) && s(n, 'content', t),
        j & 1 && l !== (l = new URL(U[0].slug, G.url).href) && s(o, 'href', l),
        j & 1 && f !== (f = U[0].title) && s(c, 'content', f),
        j & 1 && p !== (p = new URL(U[0].slug, G.url).href) && s(d, 'content', p),
        j & 1 && I !== (I = U[0].description) && s(b, 'content', I),
        j & 1 && S !== (S = U[0].description) && s(k, 'content', S),
        j & 1 && g !== (g = new URL(U[0].slug, G.url).href) && s(w, 'content', g),
        j & 1 && v !== (v = new URL(U[0].slug, G.url).href) && s(z, 'content', v),
        j & 1 && L !== (L = U[0].published) && s(O, 'content', L),
        j & 1 && q !== (q = U[0].updated) && s(h, 'content', q),
        Y.p(U, j),
        j & 1 &&
          M !==
            (M = `<script type="application/ld+json">${
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: U[0].title,
                image: U[1] ? [new URL(U[1].original, G.url).href] : [],
                datePublished: U[0].published,
                dateModified: U[0].updated,
                author: [{ '@type': 'Person', name: G.author.name, url: G.author.github }],
              }) + '<'
            }/script>`) &&
          P.p(M);
    },
    i: x,
    o: x,
    d(U) {
      U && P.d(),
        m(n),
        m(o),
        m(i),
        m(a),
        m(u),
        m(c),
        m(d),
        m(b),
        m(k),
        m(w),
        m(z),
        m(C),
        m(O),
        m(h),
        m(F),
        Y.d(U),
        m(X),
        m(Z);
    },
  };
}
function On(r, e, n) {
  let t;
  ce(r, Bt, (i) => n(2, (t = i)));
  let { post: o } = e,
    l = t.get(o.cover ?? '');
  return (
    (r.$$set = (i) => {
      'post' in i && n(0, (o = i.post));
    }),
    [o, l]
  );
}
class Mn extends ze {
  constructor(e) {
    super(), Le(this, e, On, Sn, Ee, { post: 0 });
  }
}
function Ct(r, e, n) {
  const t = r.slice();
  return (t[2] = e[n]), t;
}
function Ht(r) {
  let e,
    n,
    t,
    o = ae(r[0]),
    l = [];
  for (let i = 0; i < o.length; i += 1) l[i] = St(Ct(r, o, i));
  return {
    c() {
      (e = E('div')), (n = B()), (t = E('div'));
      for (let i = 0; i < l.length; i += 1) l[i].c();
      this.h();
    },
    l(i) {
      (e = y(i, 'DIV', { class: !0 })), H(e).forEach(m), (n = V(i)), (t = y(i, 'DIV', { class: !0 }));
      var a = H(t);
      for (let u = 0; u < l.length; u += 1) l[u].l(a);
      a.forEach(m), this.h();
    },
    h() {
      s(e, 'class', 'divider'), s(t, 'class', 'flex gap-x-2 mx8 flex-wrap');
    },
    m(i, a) {
      N(i, e, a), N(i, n, a), N(i, t, a);
      for (let u = 0; u < l.length; u += 1) l[u] && l[u].m(t, null);
    },
    p(i, a) {
      if (a & 1) {
        o = ae(i[0]);
        let u;
        for (u = 0; u < o.length; u += 1) {
          const c = Ct(i, o, u);
          l[u] ? l[u].p(c, a) : ((l[u] = St(c)), l[u].c(), l[u].m(t, null));
        }
        for (; u < l.length; u += 1) l[u].d(1);
        l.length = o.length;
      }
    },
    d(i) {
      i && (m(e), m(n), m(t)), Pe(l, i);
    },
  };
}
function St(r) {
  let e,
    n,
    t = r[2].name + '',
    o,
    l,
    i,
    a,
    u,
    c;
  return {
    c() {
      (e = E('a')), (n = oe('#')), (o = oe(t)), (l = B()), this.h();
    },
    l(f) {
      e = y(f, 'A', { class: !0, rel: !0, href: !0, 'aria-label': !0 });
      var d = H(e);
      (n = re(d, '#')), (o = re(d, t)), (l = V(d)), d.forEach(m), this.h();
    },
    h() {
      s(e, 'class', 'btn btn-ghost'),
        s(e, 'rel', 'tag'),
        s(e, 'href', (i = r[2].url)),
        s(e, 'aria-label', (a = r[2].category + ': ' + r[2].name));
    },
    m(f, d) {
      N(f, e, d), _(e, n), _(e, o), _(e, l), u || ((c = Ze(Ye.call(null, e))), (u = !0));
    },
    p(f, d) {
      d & 1 && t !== (t = f[2].name + '') && ge(o, t),
        d & 1 && i !== (i = f[2].url) && s(e, 'href', i),
        d & 1 && a !== (a = f[2].category + ': ' + f[2].name) && s(e, 'aria-label', a);
    },
    d(f) {
      f && m(e), (u = !1), c();
    },
  };
}
function Pn(r) {
  let e,
    n = r[0] && Ht(r);
  return {
    c() {
      n && n.c(), (e = K());
    },
    l(t) {
      n && n.l(t), (e = K());
    },
    m(t, o) {
      n && n.m(t, o), N(t, e, o);
    },
    p(t, [o]) {
      t[0] ? (n ? n.p(t, o) : ((n = Ht(t)), n.c(), n.m(e.parentNode, e))) : n && (n.d(1), (n = null));
    },
    i: x,
    o: x,
    d(t) {
      t && m(e), n && n.d(t);
    },
  };
}
function Dn(r, e, n) {
  let { tags: t } = e,
    o;
  return (
    Xe(async () => {
      n(
        0,
        (o =
          t == null
            ? void 0
            : t
                .map((l) => {
                  if (typeof l == 'string') return { category: 'tags', name: l, url: `/?tags=${l}` };
                  if (Array.isArray(l)) return l.map((u) => ({ category: 'tags', name: u, url: `/?tags=${u}` }));
                  const [i, a] = Object.entries(l)[0];
                  return Array.isArray(a)
                    ? a.map((u) => ({ category: i, name: u, url: `/?tags-${i}=${u}` }))
                    : { category: i, name: a, url: `/?tags-${i}=${a}` };
                })
                .flat()),
      );
    }),
    (r.$$set = (l) => {
      'tags' in l && n(1, (t = l.tags));
    }),
    [o, t]
  );
}
class Un extends ze {
  constructor(e) {
    super(), Le(this, e, Dn, Pn, Ee, { tags: 1 });
  }
}
const Nn = (r) => ({}),
  Ot = (r) => ({});
function jn(r) {
  let e, n;
  return (
    (e = new Mn({ props: { post: r[4] } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Rn(r) {
  let e,
    n,
    t = r[2].LoadingPost() + '',
    o,
    l,
    i,
    a,
    u,
    c;
  return {
    c() {
      (e = E('div')), (n = E('h2')), (o = oe(t)), (l = B()), (i = E('div')), this.h();
    },
    l(f) {
      e = y(f, 'DIV', { class: !0 });
      var d = H(e);
      n = y(d, 'H2', { class: !0 });
      var p = H(n);
      (o = re(p, t)),
        p.forEach(m),
        (l = V(d)),
        (i = y(d, 'DIV', { class: !0 })),
        H(i).forEach(m),
        d.forEach(m),
        this.h();
    },
    h() {
      s(n, 'class', 'text-3xl'),
        s(i, 'class', 'i-line-md-loading-twotone-loop !h-16 !w-16'),
        s(e, 'class', 'h-[20rem] flex flex-col items-center justify-center gap4');
    },
    m(f, d) {
      N(f, e, d), _(e, n), _(n, o), _(e, l), _(e, i), (c = !0);
    },
    p(f, d) {
      (!c || d & 4) && t !== (t = f[2].LoadingPost() + '') && ge(o, t);
    },
    i(f) {
      c ||
        (_e(() => {
          c && (u && u.end(1), (a = Ae(e, ie, { duration: 300, delay: 300 })), a.start());
        }),
        (c = !0));
    },
    o(f) {
      a && a.invalidate(), (u = Ce(e, ie, { duration: 300 })), (c = !1);
    },
    d(f) {
      f && m(e), f && u && u.end();
    },
  };
}
function Bn(r) {
  let e,
    n,
    t,
    o,
    l,
    i,
    a,
    u,
    c = r[4] && Vn(r);
  const f = r[9].post_content,
    d = Dt(f, r, r[8], Ot);
  return {
    c() {
      (e = E('div')), c && c.c(), (o = B()), (l = E('div')), d && d.c(), this.h();
    },
    l(p) {
      e = y(p, 'DIV', { class: !0 });
      var b = H(e);
      c && c.l(b), b.forEach(m), (o = V(p)), (l = y(p, 'DIV', { itemprop: !0, class: !0 }));
      var I = H(l);
      d && d.l(I), I.forEach(m), this.h();
    },
    h() {
      s(e, 'class', 'max-w-[55rem]'),
        s(l, 'itemprop', 'articleBody'),
        s(l, 'class', 'e-content prose prose-slate dark:prose-invert max-w-[55rem]');
    },
    m(p, b) {
      N(p, e, b), c && c.m(e, null), N(p, o, b), N(p, l, b), d && d.m(l, null), r[10](l), (u = !0);
    },
    p(p, b) {
      p[4] && c.p(p, b), d && d.p && (!u || b & 256) && Ut(d, f, p, p[8], u ? jt(f, p[8], b, Nn) : Nt(p[8]), Ot);
    },
    i(p) {
      u ||
        (D(c),
        _e(() => {
          u && (t && t.end(1), (n = Ae(e, ie, { duration: 300, delay: 300 })), n.start());
        }),
        D(d, p),
        _e(() => {
          u && (a && a.end(1), (i = Ae(l, ie, { duration: 300, delay: 300 })), i.start());
        }),
        (u = !0));
    },
    o(p) {
      R(c),
        n && n.invalidate(),
        (t = Ce(e, ie, { duration: 300 })),
        R(d, p),
        i && i.invalidate(),
        (a = Ce(l, ie, { duration: 300 })),
        (u = !1);
    },
    d(p) {
      p && (m(e), m(o), m(l)), c && c.d(), p && t && t.end(), d && d.d(p), r[10](null), p && a && a.end();
    },
  };
}
function Vn(r) {
  let e, n;
  return (
    (e = new An({ props: { data: r[4] } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Fn(r) {
  let e, n;
  return (
    (e = new un({ props: { toc: r[4].toc } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Mt(r) {
  let e,
    n,
    t,
    o,
    l,
    i,
    a,
    u,
    c = r[3],
    f,
    d,
    p,
    b,
    I,
    k = r[4] && Zn(r),
    S = (r[6] || r[5]) && Yn(r),
    w = Pt(r);
  return {
    c() {
      (e = E('div')),
        (n = E('div')),
        (t = B()),
        (o = E('div')),
        k && k.c(),
        (l = B()),
        (i = E('div')),
        (a = B()),
        S && S.c(),
        (u = B()),
        w.c(),
        (f = B()),
        (d = E('div')),
        this.h();
    },
    l(g) {
      e = y(g, 'DIV', { class: !0 });
      var z = H(e);
      (n = y(z, 'DIV', { class: !0 })), H(n).forEach(m), (t = V(z)), (o = y(z, 'DIV', { id: !0, class: !0 }));
      var v = H(o);
      k && k.l(v),
        (l = V(v)),
        (i = y(v, 'DIV', { class: !0 })),
        H(i).forEach(m),
        (a = V(v)),
        S && S.l(v),
        (u = V(v)),
        w.l(v),
        v.forEach(m),
        (f = V(z)),
        (d = y(z, 'DIV', { class: !0 })),
        H(d).forEach(m),
        z.forEach(m),
        this.h();
    },
    h() {
      s(n, 'class', 'max-w-screen-md flex-1'),
        s(i, 'class', 'divider'),
        s(o, 'id', 'post-bottom'),
        s(o, 'class', 'flex-none flex flex-col max-w-[55rem] w-full xl:rounded-b-2xl svelte-111wrjd'),
        s(d, 'class', 'max-w-screen-md flex-1'),
        s(e, 'class', 'flex flex-nowrap justify-center');
    },
    m(g, z) {
      N(g, e, z),
        _(e, n),
        _(e, t),
        _(e, o),
        k && k.m(o, null),
        _(o, l),
        _(o, i),
        _(o, a),
        S && S.m(o, null),
        _(o, u),
        w.m(o, null),
        _(e, f),
        _(e, d),
        (I = !0);
    },
    p(g, z) {
      g[4] && k.p(g, z),
        (g[6] || g[5]) && S.p(g, z),
        z & 8 && Ee(c, (c = g[3])) ? (ve(), R(w, 1, 1, x), be(), (w = Pt(g)), w.c(), D(w, 1), w.m(o, null)) : w.p(g, z);
    },
    i(g) {
      I ||
        (D(k),
        D(S),
        D(w),
        _e(() => {
          I && (b && b.end(1), (p = Ae(e, ie, { duration: 300, delay: 300 })), p.start());
        }),
        (I = !0));
    },
    o(g) {
      R(k), R(S), R(w), p && p.invalidate(), (b = Ce(e, ie, { duration: 300 })), (I = !1);
    },
    d(g) {
      g && m(e), k && k.d(), S && S.d(), w.d(g), g && b && b.end();
    },
  };
}
function Zn(r) {
  let e, n;
  return (
    (e = new Un({ props: { tags: r[4].tags } })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Yn(r) {
  let e,
    n,
    t,
    o = r[6] && Gn(r),
    l = r[5] && qn(r);
  return {
    c() {
      (e = E('nav')), o && o.c(), (n = B()), l && l.c(), this.h();
    },
    l(i) {
      e = y(i, 'NAV', { class: !0 });
      var a = H(e);
      o && o.l(a), (n = V(a)), l && l.l(a), a.forEach(m), this.h();
    },
    h() {
      s(e, 'class', 'flex flex-col h-[20rem] md:flex-row md:h-[12rem] my8');
    },
    m(i, a) {
      N(i, e, a), o && o.m(e, null), _(e, n), l && l.m(e, null), (t = !0);
    },
    p(i, a) {
      i[6] && o.p(i, a), i[5] && l.p(i, a);
    },
    i(i) {
      t || (D(o), D(l), (t = !0));
    },
    o(i) {
      R(o), R(l), (t = !1);
    },
    d(i) {
      i && m(e), o && o.d(), l && l.d();
    },
  };
}
function Gn(r) {
  let e,
    n,
    t,
    o,
    l = r[6].title + '',
    i,
    a,
    u,
    c = r[6].cover && $n(r);
  return {
    c() {
      (e = E('div')), (n = E('div')), (t = B()), (o = E('a')), (i = oe(l)), (a = B()), c && c.c(), this.h();
    },
    l(f) {
      e = y(f, 'DIV', { id: !0, class: !0 });
      var d = H(e);
      (n = y(d, 'DIV', { class: !0 })), H(n).forEach(m), (t = V(d)), (o = y(d, 'A', { rel: !0, href: !0, class: !0 }));
      var p = H(o);
      (i = re(p, l)), p.forEach(m), (a = V(d)), c && c.l(d), d.forEach(m), this.h();
    },
    h() {
      s(
        n,
        'class',
        'absolute z-10 i-mdi-chevron-left !w-[1.5rem] !h-[1.5rem] top-[1.25rem] left-[0.75rem] animate-bounce-left svelte-111wrjd',
      ),
        s(o, 'rel', 'next'),
        s(o, 'href', '/' + r[6].slug),
        s(
          o,
          'class',
          'absolute text-2xl font-bold z-10 !decoration-none !underline-none title-link-orange-500-orange-500 top-[3rem] left-[1rem] mr8',
        ),
        s(e, 'id', 'next-post'),
        s(e, 'class', 'relative flex-1 group overflow-hidden bg-white/[0.5] dark:bg-black/[0.5]');
    },
    m(f, d) {
      N(f, e, d), _(e, n), _(e, t), _(e, o), _(o, i), _(e, a), c && c.m(e, null), (u = !0);
    },
    p(f, d) {
      f[6].cover && c.p(f, d);
    },
    i(f) {
      u || (D(c), (u = !0));
    },
    o(f) {
      R(c), (u = !1);
    },
    d(f) {
      f && m(e), c && c.d();
    },
  };
}
function $n(r) {
  let e, n;
  return (
    (e = new Vt({
      props: {
        src: r[6].cover,
        imgClass:
          'absolute z-1 w-full h-full object-cover op70 group-hover:scale-110 transition-transform duration-300 ease-in-out',
      },
    })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function qn(r) {
  let e,
    n,
    t = r[5].title + '',
    o,
    l,
    i,
    a,
    u,
    c = r[5].cover && Xn(r);
  return {
    c() {
      (e = E('div')), (n = E('a')), (o = oe(t)), (l = B()), (i = E('div')), (a = B()), c && c.c(), this.h();
    },
    l(f) {
      e = y(f, 'DIV', { id: !0, class: !0 });
      var d = H(e);
      n = y(d, 'A', { rel: !0, href: !0, class: !0 });
      var p = H(n);
      (o = re(p, t)),
        p.forEach(m),
        (l = V(d)),
        (i = y(d, 'DIV', { class: !0 })),
        H(i).forEach(m),
        (a = V(d)),
        c && c.l(d),
        d.forEach(m),
        this.h();
    },
    h() {
      s(n, 'rel', 'prev'),
        s(n, 'href', '/' + r[5].slug),
        s(
          n,
          'class',
          'absolute text-2xl font-bold z-10 !decoration-none !underline-none title-link-orange-500-orange-500 top-[3rem] right-[1rem] ml8',
        ),
        s(
          i,
          'class',
          'absolute z-10 i-mdi-chevron-right !w-[1.5rem] !h-[1.5rem] top-[6rem] right-[0.75rem] animate-bounce-right svelte-111wrjd',
        ),
        s(e, 'id', 'prev-post'),
        s(e, 'class', 'relative flex-1 group overflow-hidden bg-white/[0.5] dark:bg-black/[0.5]');
    },
    m(f, d) {
      N(f, e, d), _(e, n), _(n, o), _(e, l), _(e, i), _(e, a), c && c.m(e, null), (u = !0);
    },
    p(f, d) {
      f[5].cover && c.p(f, d);
    },
    i(f) {
      u || (D(c), (u = !0));
    },
    o(f) {
      R(c), (u = !1);
    },
    d(f) {
      f && m(e), c && c.d();
    },
  };
}
function Xn(r) {
  let e, n;
  return (
    (e = new Vt({
      props: {
        src: r[5].cover,
        imgClass:
          'absolute z-1 w-full h-full object-cover op70 group-hover:scale-110 transition-transform duration-300 ease-in-out',
      },
    })),
    {
      c() {
        ue(e.$$.fragment);
      },
      l(t) {
        de(e.$$.fragment, t);
      },
      m(t, o) {
        fe(e, t, o), (n = !0);
      },
      p: x,
      i(t) {
        n || (D(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        me(e, t);
      },
    }
  );
}
function Pt(r) {
  let e, n, t;
  return (
    (n = new nn({ props: { theme: r[3] } })),
    {
      c() {
        (e = E('div')), ue(n.$$.fragment), this.h();
      },
      l(o) {
        e = y(o, 'DIV', { itemscope: !0, itemtype: !0, itemprop: !0, class: !0 });
        var l = H(e);
        de(n.$$.fragment, l), l.forEach(m), this.h();
      },
      h() {
        s(e, 'itemscope', ''),
          s(e, 'itemtype', 'https://schema.org/Comment'),
          s(e, 'itemprop', 'comment'),
          s(e, 'class', 'my8 mx6');
      },
      m(o, l) {
        N(o, e, l), fe(n, e, null), (t = !0);
      },
      p(o, l) {
        const i = {};
        l & 8 && (i.theme = o[3]), n.$set(i);
      },
      i(o) {
        t || (D(n.$$.fragment, o), (t = !0));
      },
      o(o) {
        R(n.$$.fragment, o), (t = !1);
      },
      d(o) {
        o && m(e), me(n);
      },
    }
  );
}
function Wn(r) {
  let e,
    n,
    t,
    o,
    l,
    i,
    a,
    u,
    c,
    f,
    d,
    p,
    b,
    I,
    k,
    S,
    w = r[4] && jn(r);
  const g = [Bn, Rn],
    z = [];
  function v(L, h) {
    return L[1] ? 0 : 1;
  }
  (i = v(r)), (a = z[i] = g[i](r));
  let C = r[4] && r[4].toc && Fn(r),
    O = r[1] && Mt(r);
  return {
    c() {
      w && w.c(),
        (e = B()),
        (n = E('main')),
        (t = E('div')),
        (o = B()),
        (l = E('article')),
        a.c(),
        (u = B()),
        (c = E('div')),
        C && C.c(),
        (I = B()),
        O && O.c(),
        (k = K()),
        this.h();
    },
    l(L) {
      w && w.l(L), (e = V(L)), (n = y(L, 'MAIN', { class: !0 }));
      var h = H(n);
      (t = y(h, 'DIV', { class: !0 })),
        H(t).forEach(m),
        (o = V(h)),
        (l = y(h, 'ARTICLE', { id: !0, itemscope: !0, itemtype: !0, itemprop: !0, class: !0 }));
      var q = H(l);
      a.l(q), q.forEach(m), (u = V(h)), (c = y(h, 'DIV', { class: !0 }));
      var F = H(c);
      C && C.l(F), F.forEach(m), h.forEach(m), (I = V(L)), O && O.l(L), (k = K()), this.h();
    },
    h() {
      s(t, 'class', 'max-w-screen-md flex-1'),
        s(l, 'id', 'post'),
        s(l, 'itemscope', ''),
        s(l, 'itemtype', 'https://schema.org/BlogPosting'),
        s(l, 'itemprop', 'blogPost'),
        s(l, 'class', 'h-entry flex-none flex flex-col max-w-[55rem] w-full xl:rounded-t-2xl svelte-111wrjd'),
        s(c, 'class', 'max-w-screen-md flex-1 relative'),
        s(n, 'class', 'flex flex-nowrap justify-center');
    },
    m(L, h) {
      w && w.m(L, h),
        N(L, e, h),
        N(L, n, h),
        _(n, t),
        _(n, o),
        _(n, l),
        z[i].m(l, null),
        _(n, u),
        _(n, c),
        C && C.m(c, null),
        N(L, I, h),
        O && O.m(L, h),
        N(L, k, h),
        (S = !0);
    },
    p(L, [h]) {
      L[4] && w.p(L, h);
      let q = i;
      (i = v(L)),
        i === q
          ? z[i].p(L, h)
          : (ve(),
            R(z[q], 1, 1, () => {
              z[q] = null;
            }),
            be(),
            (a = z[i]),
            a ? a.p(L, h) : ((a = z[i] = g[i](L)), a.c()),
            D(a, 1),
            a.m(l, null)),
        L[4] && L[4].toc && C.p(L, h),
        L[1]
          ? O
            ? (O.p(L, h), h & 2 && D(O, 1))
            : ((O = Mt(L)), O.c(), D(O, 1), O.m(k.parentNode, k))
          : O &&
            (ve(),
            R(O, 1, 1, () => {
              O = null;
            }),
            be());
    },
    i(L) {
      S ||
        (D(w),
        D(a),
        D(C),
        _e(() => {
          S && (d && d.end(1), (f = Ae(c, at, { x: 100, y: -100, duration: 300, delay: 300 })), f.start());
        }),
        _e(() => {
          S && (b && b.end(1), (p = Ae(n, ie, { duration: 300, delay: 300 })), p.start());
        }),
        D(O),
        (S = !0));
    },
    o(L) {
      R(w),
        R(a),
        R(C),
        f && f.invalidate(),
        (d = Ce(c, at, { x: 100, y: 100, duration: 300 })),
        p && p.invalidate(),
        (b = Ce(n, ie, { duration: 300 })),
        R(O),
        (S = !1);
    },
    d(L) {
      L && (m(e), m(n), m(I), m(k)),
        w && w.d(L),
        z[i].d(),
        C && C.d(),
        L && d && d.end(),
        L && b && b.end(),
        O && O.d(L);
    },
  };
}
function Kn(r) {
  const e = document.getElementById(`${r.substring(1)}`),
    n = document.getElementById('header-nav');
  if (e && n) {
    const t = e.offsetTop - n.clientHeight;
    window.scrollTo({ top: t, behavior: 'smooth' });
  }
}
function Jn(r, e, n) {
  var S, w;
  let t, o, l, i;
  ce(r, Kt, (g) => n(11, (t = g))),
    ce(r, qt, (g) => n(12, (o = g))),
    ce(r, Ke, (g) => n(2, (l = g))),
    ce(r, Qt, (g) => n(3, (i = g)));
  let { $$slots: a = {}, $$scope: u } = e;
  const c = t.get(((w = (S = o.route) == null ? void 0 : S.id) == null ? void 0 : w.substring(1)) ?? ''),
    f = c != null && c.prev ? t.get(c.prev) : void 0,
    d = c != null && c.next ? t.get(c.next) : void 0;
  let p,
    b,
    I = !1;
  Xe(() => {
    n(1, (I = !0)),
      setTimeout(() => {
        Kn(window.location.hash);
      }, 1e3);
  });
  function k(g) {
    $e[g ? 'unshift' : 'push'](() => {
      (b = g), n(0, b);
    });
  }
  return (
    (r.$$set = (g) => {
      '$$scope' in g && n(8, (u = g.$$scope));
    }),
    (r.$$.update = () => {
      if (r.$$.dirty & 131 && I && b) {
        n(
          7,
          (p = new IntersectionObserver(
            (z) => {
              z.forEach((v) => {
                const C = v.target.getAttribute('toc-heading');
                if (C) {
                  if (v.isIntersecting) {
                    qe.addTOC(C);
                    return;
                  }
                  qe.delTOC(C);
                }
              });
            },
            { rootMargin: '-64px 0px -64px 0px' },
          )),
        );
        let g = b.querySelector('article');
        if (g && g.children && g.children.length > 0) {
          let z = '';
          for (let v = 0; v < g.children.length; v += 1)
            /^h[1-6]/i.test(g.children[v].tagName) && (z = `#${g.children[v].id}`),
              g.children[v].setAttribute('toc-heading', z),
              p.observe(g.children[v]);
        }
      }
    }),
    [b, I, l, i, c, f, d, p, u, a, k]
  );
}
class lo extends ze {
  constructor(e) {
    super(), Le(this, e, Jn, Wn, Ee, {});
  }
}
export { lo as P };
