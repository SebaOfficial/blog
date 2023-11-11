import {
  s as V,
  A as H,
  f as v,
  a as D,
  g as y,
  h as C,
  c as S,
  d as m,
  j as g,
  i as I,
  u as w,
  B as A,
  C as J,
  D as K,
  E as M,
  F as ee,
  v as re,
  I as Q,
  G as h,
  p as oe,
  e as B,
  l as R,
  m as W,
  n as X,
} from './scheduler.b261eb3c.js';
import { S as Y, i as Z, a as k, g as j, t as E, c as U, h as $, j as x } from './index.5ccb46b4.js';
import { f as O, i as F } from './tippy.6de01e5a.js';
function G(l) {
  let e,
    o = l[1],
    r,
    n,
    s,
    a,
    f,
    d,
    t = L(l);
  return {
    c() {
      (e = v('button')), t.c(), this.h();
    },
    l(i) {
      e = y(i, 'BUTTON', { 'aria-label': !0, type: !0, class: !0 });
      var _ = C(e);
      t.l(_), _.forEach(m), this.h();
    },
    h() {
      g(e, 'aria-label', 'Copy all codes'),
        g(e, 'type', 'button'),
        g(
          e,
          'class',
          (r =
            'group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 ' +
            (l[1]
              ? 'border-green-400 focus:border-green-500 focus:outline-none'
              : 'border-gray-300 hover:border-sky-500')),
        );
    },
    m(i, _) {
      I(i, e, _), t.m(e, null), (a = !0), f || ((d = A(e, 'click', l[5])), (f = !0));
    },
    p(i, _) {
      _ & 2 && V(o, (o = i[1])) ? (j(), E(t, 1, 1, re), U(), (t = L(i)), t.c(), k(t, 1), t.m(e, null)) : t.p(i, _),
        (!a ||
          (_ & 2 &&
            r !==
              (r =
                'group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 ' +
                (i[1]
                  ? 'border-green-400 focus:border-green-500 focus:outline-none'
                  : 'border-gray-300 hover:border-sky-500')))) &&
          g(e, 'class', r);
    },
    i(i) {
      a ||
        (k(t),
        Q(() => {
          a && (s && s.end(1), (n = $(e, O, { y: -25, duration: 300, delay: 300 })), n.start());
        }),
        (a = !0));
    },
    o(i) {
      E(t), n && n.invalidate(), (s = x(e, O, { y: -25, duration: 300 })), (a = !1);
    },
    d(i) {
      i && m(e), t.d(i), i && s && s.end(), (f = !1), d();
    },
  };
}
function L(l) {
  let e, o, r, n;
  return {
    c() {
      (e = v('div')), this.h();
    },
    l(s) {
      (e = y(s, 'DIV', { class: !0 })), C(e).forEach(m), this.h();
    },
    h() {
      g(e, 'class', '!w5 !h5 color-white m-auto'),
        h(e, 'i-carbon-document-blank', !l[1]),
        h(e, 'i-carbon-document-tasks', l[1]);
    },
    m(s, a) {
      I(s, e, a), (n = !0);
    },
    p(s, a) {
      (!n || a & 2) && h(e, 'i-carbon-document-blank', !s[1]), (!n || a & 2) && h(e, 'i-carbon-document-tasks', s[1]);
    },
    i(s) {
      n ||
        (Q(() => {
          n && (r && r.end(1), (o = $(e, F, { duration: 300, delay: 300 })), o.start());
        }),
        (n = !0));
    },
    o(s) {
      o && o.invalidate(), (r = x(e, F, { duration: 300 })), (n = !1);
    },
    d(s) {
      s && m(e), s && r && r.end();
    },
  };
}
function le(l) {
  let e,
    o,
    r,
    n,
    s,
    a = l[0] && G(l);
  const f = l[7].default,
    d = H(f, l, l[6], null);
  return {
    c() {
      (e = v('div')), a && a.c(), (o = D()), d && d.c(), this.h();
    },
    l(t) {
      e = y(t, 'DIV', { class: !0, role: !0, tabindex: !0 });
      var i = C(e);
      a && a.l(i), (o = S(i)), d && d.l(i), i.forEach(m), this.h();
    },
    h() {
      g(e, 'class', 'relative overflow-hidden'), g(e, 'role', 'button'), g(e, 'tabindex', '0');
    },
    m(t, i) {
      I(t, e, i),
        a && a.m(e, null),
        w(e, o),
        d && d.m(e, null),
        l[8](e),
        (r = !0),
        n || ((s = [A(e, 'mouseenter', l[3]), A(e, 'mouseleave', l[4])]), (n = !0));
    },
    p(t, [i]) {
      t[0]
        ? a
          ? (a.p(t, i), i & 1 && k(a, 1))
          : ((a = G(t)), a.c(), k(a, 1), a.m(e, o))
        : a &&
          (j(),
          E(a, 1, 1, () => {
            a = null;
          }),
          U()),
        d && d.p && (!r || i & 64) && J(d, f, t, t[6], r ? M(f, t[6], i, null) : K(t[6]), null);
    },
    i(t) {
      r || (k(a), k(d, t), (r = !0));
    },
    o(t) {
      E(a), E(d, t), (r = !1);
    },
    d(t) {
      t && m(e), a && a.d(), d && d.d(t), l[8](null), (n = !1), ee(s);
    },
  };
}
function te(l, e, o) {
  let { $$slots: r = {}, $$scope: n } = e,
    s = !1,
    a = !1,
    f;
  function d() {
    o(0, (s = !0));
  }
  function t() {
    o(0, (s = !1)), o(1, (a = !1));
  }
  function i() {
    o(1, (a = !0));
    const c = f.querySelectorAll('.code-content'),
      T = Array.from(c).map((p) => p.textContent).join(`
`);
    navigator.clipboard.writeText(T),
      setTimeout(() => {
        o(1, (a = !1));
      }, 2e3);
  }
  function _(c) {
    oe[c ? 'unshift' : 'push'](() => {
      (f = c), o(2, f);
    });
  }
  return (
    (l.$$set = (c) => {
      '$$scope' in c && o(6, (n = c.$$scope));
    }),
    [s, a, f, d, t, i, n, r, _]
  );
}
class ce extends Y {
  constructor(e) {
    super(), Z(this, e, te, le, V, {});
  }
}
function P(l) {
  let e, o, r, n, s, a, f, d, t;
  function i(u, b) {
    return u[0] ? ae : ne;
  }
  let _ = i(l),
    c = _(l);
  const T = l[3].default,
    p = H(T, l, l[2], null);
  return {
    c() {
      (e = v('aside')),
        (o = v('div')),
        (r = v('div')),
        (n = D()),
        (s = v('p')),
        c.c(),
        (a = D()),
        (f = v('section')),
        p && p.c(),
        this.h();
    },
    l(u) {
      e = y(u, 'ASIDE', { class: !0 });
      var b = C(e);
      o = y(b, 'DIV', { class: !0 });
      var N = C(o);
      (r = y(N, 'DIV', { class: !0 })), C(r).forEach(m), (n = S(N)), (s = y(N, 'P', { class: !0 }));
      var q = C(s);
      c.l(q), q.forEach(m), N.forEach(m), (a = S(b)), (f = y(b, 'SECTION', {}));
      var z = C(f);
      p && p.l(z), z.forEach(m), b.forEach(m), this.h();
    },
    h() {
      g(r, 'class', 'w5 h5'),
        h(r, 'i-ic-outline-info', l[1] === 'info'),
        h(r, 'i-ic-outline-tips-and-updates', l[1] === 'tip'),
        h(r, 'i-ic-round-warning-amber', l[1] === 'caution'),
        h(r, 'i-ic-round-error-outline', l[1] === 'error'),
        h(r, 'i-ic-outline-dangerous', l[1] === 'danger'),
        g(s, 'class', 'font-600'),
        g(o, 'class', 'flex items-center gap2'),
        g(
          e,
          'class',
          (d =
            'infobox flex flex-col border-l-5 my4 py1 px4 ' +
            (l[1] === 'info' ? 'bg-blue-400/[0.5] border-blue' : '') +
            ' ' +
            (l[1] === 'tip' ? 'bg-emerald-400/[0.5] border-emerald' : '') +
            ' ' +
            (l[1] === 'caution' ? 'bg-orange-400/[0.5] border-orange' : '') +
            ' ' +
            (l[1] === 'error' ? 'bg-red-400/[0.5] border-red' : '') +
            ' ' +
            (l[1] === 'danger' ? 'bg-red-600/[0.5] border-red-800' : '')),
        );
    },
    m(u, b) {
      I(u, e, b), w(e, o), w(o, r), w(o, n), w(o, s), c.m(s, null), w(e, a), w(e, f), p && p.m(f, null), (t = !0);
    },
    p(u, b) {
      (!t || b & 2) && h(r, 'i-ic-outline-info', u[1] === 'info'),
        (!t || b & 2) && h(r, 'i-ic-outline-tips-and-updates', u[1] === 'tip'),
        (!t || b & 2) && h(r, 'i-ic-round-warning-amber', u[1] === 'caution'),
        (!t || b & 2) && h(r, 'i-ic-round-error-outline', u[1] === 'error'),
        (!t || b & 2) && h(r, 'i-ic-outline-dangerous', u[1] === 'danger'),
        _ === (_ = i(u)) && c ? c.p(u, b) : (c.d(1), (c = _(u)), c && (c.c(), c.m(s, null))),
        p && p.p && (!t || b & 4) && J(p, T, u, u[2], t ? M(T, u[2], b, null) : K(u[2]), null),
        (!t ||
          (b & 2 &&
            d !==
              (d =
                'infobox flex flex-col border-l-5 my4 py1 px4 ' +
                (u[1] === 'info' ? 'bg-blue-400/[0.5] border-blue' : '') +
                ' ' +
                (u[1] === 'tip' ? 'bg-emerald-400/[0.5] border-emerald' : '') +
                ' ' +
                (u[1] === 'caution' ? 'bg-orange-400/[0.5] border-orange' : '') +
                ' ' +
                (u[1] === 'error' ? 'bg-red-400/[0.5] border-red' : '') +
                ' ' +
                (u[1] === 'danger' ? 'bg-red-600/[0.5] border-red-800' : '')))) &&
          g(e, 'class', d);
    },
    i(u) {
      t || (k(p, u), (t = !0));
    },
    o(u) {
      E(p, u), (t = !1);
    },
    d(u) {
      u && m(e), c.d(), p && p.d(u);
    },
  };
}
function ne(l) {
  let e = l[1].toUpperCase() + '',
    o;
  return {
    c() {
      o = R(e);
    },
    l(r) {
      o = W(r, e);
    },
    m(r, n) {
      I(r, o, n);
    },
    p(r, n) {
      n & 2 && e !== (e = r[1].toUpperCase() + '') && X(o, e);
    },
    d(r) {
      r && m(o);
    },
  };
}
function ae(l) {
  let e;
  return {
    c() {
      e = R(l[0]);
    },
    l(o) {
      e = W(o, l[0]);
    },
    m(o, r) {
      I(o, e, r);
    },
    p(o, r) {
      r & 1 && X(e, o[0]);
    },
    d(o) {
      o && m(e);
    },
  };
}
function se(l) {
  let e,
    o,
    r = l[1] && P(l);
  return {
    c() {
      r && r.c(), (e = B());
    },
    l(n) {
      r && r.l(n), (e = B());
    },
    m(n, s) {
      r && r.m(n, s), I(n, e, s), (o = !0);
    },
    p(n, [s]) {
      n[1]
        ? r
          ? (r.p(n, s), s & 2 && k(r, 1))
          : ((r = P(n)), r.c(), k(r, 1), r.m(e.parentNode, e))
        : r &&
          (j(),
          E(r, 1, 1, () => {
            r = null;
          }),
          U());
    },
    i(n) {
      o || (k(r), (o = !0));
    },
    o(n) {
      E(r), (o = !1);
    },
    d(n) {
      n && m(e), r && r.d(n);
    },
  };
}
function ie(l, e, o) {
  let { $$slots: r = {}, $$scope: n } = e,
    { statusName: s = void 0 } = e,
    { statusType: a = void 0 } = e;
  return (
    (l.$$set = (f) => {
      'statusName' in f && o(0, (s = f.statusName)),
        'statusType' in f && o(1, (a = f.statusType)),
        '$$scope' in f && o(2, (n = f.$$scope));
    }),
    [s, a, n, r]
  );
}
class be extends Y {
  constructor(e) {
    super(), Z(this, e, ie, se, V, { statusName: 0, statusType: 1 });
  }
}
export { ce as C, be as I };
