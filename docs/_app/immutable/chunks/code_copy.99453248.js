import {
  s as A,
  A as F,
  f as k,
  a as G,
  g as y,
  h as v,
  c as L,
  d as p,
  j as d,
  i as C,
  u as N,
  B as g,
  C as O,
  D as U,
  E as H,
  F as J,
  v as K,
  I as D,
  G as m,
  p as M,
} from './scheduler.b261eb3c.js';
import { S as P, i as Q, a as b, g as I, t as h, c as S, h as q, j as z } from './index.5ccb46b4.js';
import { f as w, i as E } from './tippy.a1e8f09d.js';
function T(a) {
  let e,
    s = a[1],
    n,
    i,
    l,
    t,
    f,
    u,
    o = j(a);
  return {
    c() {
      (e = k('button')), o.c(), this.h();
    },
    l(r) {
      e = y(r, 'BUTTON', { 'aria-label': !0, type: !0, class: !0 });
      var c = v(e);
      o.l(c), c.forEach(p), this.h();
    },
    h() {
      d(e, 'aria-label', 'Copy all codes'),
        d(e, 'type', 'button'),
        d(
          e,
          'class',
          (n =
            'group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 ' +
            (a[1]
              ? 'border-green-400 focus:border-green-500 focus:outline-none'
              : 'border-gray-300 hover:border-sky-500')),
        );
    },
    m(r, c) {
      C(r, e, c), o.m(e, null), (t = !0), f || ((u = g(e, 'click', a[5])), (f = !0));
    },
    p(r, c) {
      c & 2 && A(s, (s = r[1])) ? (I(), h(o, 1, 1, K), S(), (o = j(r)), o.c(), b(o, 1), o.m(e, null)) : o.p(r, c),
        (!t ||
          (c & 2 &&
            n !==
              (n =
                'group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 ' +
                (r[1]
                  ? 'border-green-400 focus:border-green-500 focus:outline-none'
                  : 'border-gray-300 hover:border-sky-500')))) &&
          d(e, 'class', n);
    },
    i(r) {
      t ||
        (b(o),
        D(() => {
          t && (l && l.end(1), (i = q(e, w, { y: -25, duration: 300, delay: 300 })), i.start());
        }),
        (t = !0));
    },
    o(r) {
      h(o), i && i.invalidate(), (l = z(e, w, { y: -25, duration: 300 })), (t = !1);
    },
    d(r) {
      r && p(e), o.d(r), r && l && l.end(), (f = !1), u();
    },
  };
}
function j(a) {
  let e, s, n, i;
  return {
    c() {
      (e = k('div')), this.h();
    },
    l(l) {
      (e = y(l, 'DIV', { class: !0 })), v(e).forEach(p), this.h();
    },
    h() {
      d(e, 'class', '!w5 !h5 color-white m-auto'),
        m(e, 'i-carbon-document-blank', !a[1]),
        m(e, 'i-carbon-document-tasks', a[1]);
    },
    m(l, t) {
      C(l, e, t), (i = !0);
    },
    p(l, t) {
      (!i || t & 2) && m(e, 'i-carbon-document-blank', !l[1]), (!i || t & 2) && m(e, 'i-carbon-document-tasks', l[1]);
    },
    i(l) {
      i ||
        (D(() => {
          i && (n && n.end(1), (s = q(e, E, { duration: 300, delay: 300 })), s.start());
        }),
        (i = !0));
    },
    o(l) {
      s && s.invalidate(), (n = z(e, E, { duration: 300 })), (i = !1);
    },
    d(l) {
      l && p(e), l && n && n.end();
    },
  };
}
function R(a) {
  let e,
    s,
    n,
    i,
    l,
    t = a[0] && T(a);
  const f = a[7].default,
    u = F(f, a, a[6], null);
  return {
    c() {
      (e = k('div')), t && t.c(), (s = G()), u && u.c(), this.h();
    },
    l(o) {
      e = y(o, 'DIV', { class: !0, role: !0, tabindex: !0 });
      var r = v(e);
      t && t.l(r), (s = L(r)), u && u.l(r), r.forEach(p), this.h();
    },
    h() {
      d(e, 'class', 'relative overflow-hidden'), d(e, 'role', 'button'), d(e, 'tabindex', '0');
    },
    m(o, r) {
      C(o, e, r),
        t && t.m(e, null),
        N(e, s),
        u && u.m(e, null),
        a[8](e),
        (n = !0),
        i || ((l = [g(e, 'mouseenter', a[3]), g(e, 'mouseleave', a[4])]), (i = !0));
    },
    p(o, [r]) {
      o[0]
        ? t
          ? (t.p(o, r), r & 1 && b(t, 1))
          : ((t = T(o)), t.c(), b(t, 1), t.m(e, s))
        : t &&
          (I(),
          h(t, 1, 1, () => {
            t = null;
          }),
          S()),
        u && u.p && (!n || r & 64) && O(u, f, o, o[6], n ? H(f, o[6], r, null) : U(o[6]), null);
    },
    i(o) {
      n || (b(t), b(u, o), (n = !0));
    },
    o(o) {
      h(t), h(u, o), (n = !1);
    },
    d(o) {
      o && p(e), t && t.d(), u && u.d(o), a[8](null), (i = !1), J(l);
    },
  };
}
function W(a, e, s) {
  let { $$slots: n = {}, $$scope: i } = e,
    l = !1,
    t = !1,
    f;
  function u() {
    s(0, (l = !0));
  }
  function o() {
    s(0, (l = !1)), s(1, (t = !1));
  }
  function r() {
    s(1, (t = !0));
    const _ = f.querySelectorAll('.code-content'),
      B = Array.from(_).map((V) => V.textContent).join(`
`);
    navigator.clipboard.writeText(B),
      setTimeout(() => {
        s(1, (t = !1));
      }, 2e3);
  }
  function c(_) {
    M[_ ? 'unshift' : 'push'](() => {
      (f = _), s(2, f);
    });
  }
  return (
    (a.$$set = (_) => {
      '$$scope' in _ && s(6, (i = _.$$scope));
    }),
    [l, t, f, u, o, r, i, n, c]
  );
}
class $ extends P {
  constructor(e) {
    super(), Q(this, e, W, R, A, {});
  }
}
export { $ as C };
