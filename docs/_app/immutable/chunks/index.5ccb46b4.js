var K = Object.defineProperty;
var Q = (t, e, n) => (e in t ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var A = (t, e, n) => (Q(t, typeof e != 'symbol' ? e + '' : e, n), n);
import {
  v as x,
  _ as T,
  d as q,
  $ as W,
  F as E,
  a0 as j,
  I as O,
  a1 as X,
  Y as F,
  a2 as V,
  h as Z,
  a3 as tt,
  a4 as et,
  a5 as nt,
  a6 as it,
  a7 as Y,
  a8 as st,
  a9 as rt,
  aa as at,
  ab as ot,
  ac as ft,
} from './scheduler.b261eb3c.js';
const G = typeof window < 'u';
let N = G ? () => window.performance.now() : () => Date.now(),
  B = G ? (t) => requestAnimationFrame(t) : x;
const k = new Set();
function H(t) {
  k.forEach((e) => {
    e.c(t) || (k.delete(e), e.f());
  }),
    k.size !== 0 && B(H);
}
function D(t) {
  let e;
  return (
    k.size === 0 && B(H),
    {
      promise: new Promise((n) => {
        k.add((e = { c: t, f: n }));
      }),
      abort() {
        k.delete(e);
      },
    }
  );
}
const M = new Map();
let P = 0;
function ut(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function lt(t, e) {
  const n = { stylesheet: W(e), rules: {} };
  return M.set(t, n), n;
}
function R(t, e, n, r, u, a, l, i = 0) {
  const c = 16.666 / r;
  let s = `{
`;
  for (let $ = 0; $ <= 1; $ += c) {
    const g = e + (n - e) * a($);
    s +=
      $ * 100 +
      `%{${l(g, 1 - g)}}
`;
  }
  const _ =
      s +
      `100% {${l(n, 1 - n)}}
}`,
    f = `__svelte_${ut(_)}_${i}`,
    m = T(t),
    { stylesheet: h, rules: o } = M.get(m) || lt(m, t);
  o[f] || ((o[f] = !0), h.insertRule(`@keyframes ${f} ${_}`, h.cssRules.length));
  const d = t.style.animation || '';
  return (t.style.animation = `${d ? `${d}, ` : ''}${f} ${r}ms linear ${u}ms 1 both`), (P += 1), f;
}
function z(t, e) {
  const n = (t.style.animation || '').split(', '),
    r = n.filter(e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf('__svelte') === -1),
    u = n.length - r.length;
  u && ((t.style.animation = r.join(', ')), (P -= u), P || ct());
}
function ct() {
  B(() => {
    P ||
      (M.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && q(e);
      }),
      M.clear());
  });
}
let S;
function L() {
  return (
    S ||
      ((S = Promise.resolve()),
      S.then(() => {
        S = null;
      })),
    S
  );
}
function w(t, e, n) {
  t.dispatchEvent(X(`${e ? 'intro' : 'outro'}${n}`));
}
const I = new Set();
let p;
function yt() {
  p = { r: 0, c: [], p };
}
function vt() {
  p.r || E(p.c), (p = p.p);
}
function _t(t, e) {
  t && t.i && (I.delete(t), t.i(e));
}
function wt(t, e, n, r) {
  if (t && t.o) {
    if (I.has(t)) return;
    I.add(t),
      p.c.push(() => {
        I.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  } else r && r();
}
const U = { duration: 0 };
function xt(t, e, n) {
  const r = { direction: 'in' };
  let u = e(t, n, r),
    a = !1,
    l,
    i,
    c = 0;
  function s() {
    l && z(t, l);
  }
  function _() {
    const { delay: m = 0, duration: h = 300, easing: o = F, tick: d = x, css: $ } = u || U;
    $ && (l = R(t, 0, 1, h, m, o, $, c++)), d(0, 1);
    const g = N() + m,
      y = g + h;
    i && i.abort(),
      (a = !0),
      O(() => w(t, !0, 'start')),
      (i = D((v) => {
        if (a) {
          if (v >= y) return d(1, 0), w(t, !0, 'end'), s(), (a = !1);
          if (v >= g) {
            const b = o((v - g) / h);
            d(b, 1 - b);
          }
        }
        return a;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), z(t), j(u) ? ((u = u(r)), L().then(_)) : _());
    },
    invalidate() {
      f = !1;
    },
    end() {
      a && (s(), (a = !1));
    },
  };
}
function bt(t, e, n) {
  const r = { direction: 'out' };
  let u = e(t, n, r),
    a = !0,
    l;
  const i = p;
  i.r += 1;
  let c;
  function s() {
    const { delay: _ = 0, duration: f = 300, easing: m = F, tick: h = x, css: o } = u || U;
    o && (l = R(t, 1, 0, f, _, m, o));
    const d = N() + _,
      $ = d + f;
    O(() => w(t, !1, 'start')),
      'inert' in t && ((c = t.inert), (t.inert = !0)),
      D((g) => {
        if (a) {
          if (g >= $) return h(0, 1), w(t, !1, 'end'), --i.r || E(i.c), !1;
          if (g >= d) {
            const y = m((g - d) / f);
            h(1 - y, y);
          }
        }
        return a;
      });
  }
  return (
    j(u)
      ? L().then(() => {
          (u = u(r)), s();
        })
      : s(),
    {
      end(_) {
        _ && 'inert' in t && (t.inert = c), _ && u.tick && u.tick(1, 0), a && (l && z(t, l), (a = !1));
      },
    }
  );
}
function kt(t, e, n, r) {
  let a = e(t, n, { direction: 'both' }),
    l = r ? 0 : 1,
    i = null,
    c = null,
    s = null,
    _;
  function f() {
    s && z(t, s);
  }
  function m(o, d) {
    const $ = o.b - l;
    return (d *= Math.abs($)), { a: l, b: o.b, d: $, duration: d, start: o.start, end: o.start + d, group: o.group };
  }
  function h(o) {
    const { delay: d = 0, duration: $ = 300, easing: g = F, tick: y = x, css: v } = a || U,
      b = { start: N() + d, b: o };
    o || ((b.group = p), (p.r += 1)),
      'inert' in t && (o ? _ !== void 0 && (t.inert = _) : ((_ = t.inert), (t.inert = !0))),
      i || c
        ? (c = b)
        : (v && (f(), (s = R(t, l, o, $, d, g, v))),
          o && y(0, 1),
          (i = m(b, $)),
          O(() => w(t, o, 'start')),
          D((C) => {
            if (
              (c &&
                C > c.start &&
                ((i = m(c, $)),
                (c = null),
                w(t, i.b, 'start'),
                v && (f(), (s = R(t, l, i.b, i.duration, 0, g, a.css)))),
              i)
            ) {
              if (C >= i.end)
                y((l = i.b), 1 - l), w(t, i.b, 'end'), c || (i.b ? f() : --i.group.r || E(i.group.c)), (i = null);
              else if (C >= i.start) {
                const J = C - i.start;
                (l = i.a + i.d * g(J / i.duration)), y(l, 1 - l);
              }
            }
            return !!(i || c);
          }));
  }
  return {
    run(o) {
      j(a)
        ? L().then(() => {
            (a = a({ direction: o ? 'in' : 'out' })), h(o);
          })
        : h(o);
    },
    end() {
      f(), (i = c = null);
    },
  };
}
function Et(t) {
  t && t.c();
}
function St(t, e) {
  t && t.l(e);
}
function dt(t, e, n) {
  const { fragment: r, after_update: u } = t.$$;
  r && r.m(e, n),
    O(() => {
      const a = t.$$.on_mount.map(st).filter(j);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : E(a), (t.$$.on_mount = []);
    }),
    u.forEach(O);
}
function $t(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (nt(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), at(), t.$$.dirty.fill(0)), (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ot(t, e, n, r, u, a, l = null, i = [-1]) {
  const c = it;
  Y(t);
  const s = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: x,
    not_equal: u,
    bound: V(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: V(),
    dirty: i,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  l && l(s.root);
  let _ = !1;
  if (
    ((s.ctx = n
      ? n(t, e.props || {}, (f, m, ...h) => {
          const o = h.length ? h[0] : m;
          return (
            s.ctx && u(s.ctx[f], (s.ctx[f] = o)) && (!s.skip_bound && s.bound[f] && s.bound[f](o), _ && ht(t, f)), m
          );
        })
      : []),
    s.update(),
    (_ = !0),
    E(s.before_update),
    (s.fragment = r ? r(s.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      ot();
      const f = Z(e.target);
      s.fragment && s.fragment.l(f), f.forEach(q);
    } else s.fragment && s.fragment.c();
    e.intro && _t(t.$$.fragment), dt(t, e.target, e.anchor), ft(), tt();
  }
  Y(c);
}
class jt {
  constructor() {
    A(this, '$$');
    A(this, '$$set');
  }
  $destroy() {
    $t(this, 1), (this.$destroy = x);
  }
  $on(e, n) {
    if (!j(n)) return x;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const u = r.indexOf(n);
        u !== -1 && r.splice(u, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !et(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const mt = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(mt);
export {
  jt as S,
  _t as a,
  Et as b,
  vt as c,
  St as d,
  $t as e,
  kt as f,
  yt as g,
  xt as h,
  Ot as i,
  bt as j,
  dt as m,
  wt as t,
};
