import {
  s as P,
  e as A,
  i as N,
  d as _,
  A as z,
  f as p,
  a as U,
  g,
  h,
  c as V,
  j as v,
  G as c,
  u as m,
  C as B,
  D as F,
  E as H,
  l as q,
  m as G,
  n as O,
} from './scheduler.b261eb3c.js';
import { S as J, i as K, a as I, g as L, t as T, c as M } from './index.5ccb46b4.js';
function j(s) {
  let r, a, e, l, t, b, u, k, f;
  function D(i, o) {
    return i[0] ? R : Q;
  }
  let E = D(s),
    d = E(s);
  const C = s[3].default,
    n = z(C, s, s[2], null);
  return {
    c() {
      (r = p('aside')),
        (a = p('div')),
        (e = p('div')),
        (l = U()),
        (t = p('p')),
        d.c(),
        (b = U()),
        (u = p('section')),
        n && n.c(),
        this.h();
    },
    l(i) {
      r = g(i, 'ASIDE', { class: !0 });
      var o = h(r);
      a = g(o, 'DIV', { class: !0 });
      var y = h(a);
      (e = g(y, 'DIV', { class: !0 })), h(e).forEach(_), (l = V(y)), (t = g(y, 'P', { class: !0 }));
      var S = h(t);
      d.l(S), S.forEach(_), y.forEach(_), (b = V(o)), (u = g(o, 'SECTION', {}));
      var w = h(u);
      n && n.l(w), w.forEach(_), o.forEach(_), this.h();
    },
    h() {
      v(e, 'class', 'w5 h5'),
        c(e, 'i-ic-outline-info', s[1] === 'info'),
        c(e, 'i-ic-outline-tips-and-updates', s[1] === 'tip'),
        c(e, 'i-ic-round-warning-amber', s[1] === 'caution'),
        c(e, 'i-ic-round-error-outline', s[1] === 'error'),
        c(e, 'i-ic-outline-dangerous', s[1] === 'danger'),
        v(t, 'class', 'font-600'),
        v(a, 'class', 'flex items-center gap2'),
        v(
          r,
          'class',
          (k =
            'infobox flex flex-col border-l-5 my4 py1 px4 ' +
            (s[1] === 'info' ? 'bg-blue-400/[0.5] border-blue' : '') +
            ' ' +
            (s[1] === 'tip' ? 'bg-emerald-400/[0.5] border-emerald' : '') +
            ' ' +
            (s[1] === 'caution' ? 'bg-orange-400/[0.5] border-orange' : '') +
            ' ' +
            (s[1] === 'error' ? 'bg-red-400/[0.5] border-red' : '') +
            ' ' +
            (s[1] === 'danger' ? 'bg-red-600/[0.5] border-red-800' : '')),
        );
    },
    m(i, o) {
      N(i, r, o), m(r, a), m(a, e), m(a, l), m(a, t), d.m(t, null), m(r, b), m(r, u), n && n.m(u, null), (f = !0);
    },
    p(i, o) {
      (!f || o & 2) && c(e, 'i-ic-outline-info', i[1] === 'info'),
        (!f || o & 2) && c(e, 'i-ic-outline-tips-and-updates', i[1] === 'tip'),
        (!f || o & 2) && c(e, 'i-ic-round-warning-amber', i[1] === 'caution'),
        (!f || o & 2) && c(e, 'i-ic-round-error-outline', i[1] === 'error'),
        (!f || o & 2) && c(e, 'i-ic-outline-dangerous', i[1] === 'danger'),
        E === (E = D(i)) && d ? d.p(i, o) : (d.d(1), (d = E(i)), d && (d.c(), d.m(t, null))),
        n && n.p && (!f || o & 4) && B(n, C, i, i[2], f ? H(C, i[2], o, null) : F(i[2]), null),
        (!f ||
          (o & 2 &&
            k !==
              (k =
                'infobox flex flex-col border-l-5 my4 py1 px4 ' +
                (i[1] === 'info' ? 'bg-blue-400/[0.5] border-blue' : '') +
                ' ' +
                (i[1] === 'tip' ? 'bg-emerald-400/[0.5] border-emerald' : '') +
                ' ' +
                (i[1] === 'caution' ? 'bg-orange-400/[0.5] border-orange' : '') +
                ' ' +
                (i[1] === 'error' ? 'bg-red-400/[0.5] border-red' : '') +
                ' ' +
                (i[1] === 'danger' ? 'bg-red-600/[0.5] border-red-800' : '')))) &&
          v(r, 'class', k);
    },
    i(i) {
      f || (I(n, i), (f = !0));
    },
    o(i) {
      T(n, i), (f = !1);
    },
    d(i) {
      i && _(r), d.d(), n && n.d(i);
    },
  };
}
function Q(s) {
  let r = s[1].toUpperCase() + '',
    a;
  return {
    c() {
      a = q(r);
    },
    l(e) {
      a = G(e, r);
    },
    m(e, l) {
      N(e, a, l);
    },
    p(e, l) {
      l & 2 && r !== (r = e[1].toUpperCase() + '') && O(a, r);
    },
    d(e) {
      e && _(a);
    },
  };
}
function R(s) {
  let r;
  return {
    c() {
      r = q(s[0]);
    },
    l(a) {
      r = G(a, s[0]);
    },
    m(a, e) {
      N(a, r, e);
    },
    p(a, e) {
      e & 1 && O(r, a[0]);
    },
    d(a) {
      a && _(r);
    },
  };
}
function W(s) {
  let r,
    a,
    e = s[1] && j(s);
  return {
    c() {
      e && e.c(), (r = A());
    },
    l(l) {
      e && e.l(l), (r = A());
    },
    m(l, t) {
      e && e.m(l, t), N(l, r, t), (a = !0);
    },
    p(l, [t]) {
      l[1]
        ? e
          ? (e.p(l, t), t & 2 && I(e, 1))
          : ((e = j(l)), e.c(), I(e, 1), e.m(r.parentNode, r))
        : e &&
          (L(),
          T(e, 1, 1, () => {
            e = null;
          }),
          M());
    },
    i(l) {
      a || (I(e), (a = !0));
    },
    o(l) {
      T(e), (a = !1);
    },
    d(l) {
      l && _(r), e && e.d(l);
    },
  };
}
function X(s, r, a) {
  let { $$slots: e = {}, $$scope: l } = r,
    { statusName: t = void 0 } = r,
    { statusType: b = void 0 } = r;
  return (
    (s.$$set = (u) => {
      'statusName' in u && a(0, (t = u.statusName)),
        'statusType' in u && a(1, (b = u.statusType)),
        '$$scope' in u && a(2, (l = u.$$scope));
    }),
    [t, b, l, e]
  );
}
class $ extends J {
  constructor(r) {
    super(), K(this, r, X, W, P, { statusName: 0, statusType: 1 });
  }
}
export { $ as I };