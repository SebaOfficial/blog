import {
  s as fn,
  f as d,
  a as f,
  l as $t,
  g as c,
  h as b,
  d as h,
  c as u,
  m as Tt,
  j as m,
  i as x,
  u as t,
  n as Et,
  v as I,
  e as ut,
  B as ht,
  F as Ct,
  w as xt,
  T as kt,
  N as g,
  H as R,
  x as U,
} from '../chunks/scheduler.b261eb3c.js';
import {
  S as un,
  i as hn,
  a as T,
  g as $s,
  t as C,
  c as Ts,
  b as H,
  d as L,
  m as D,
  e as M,
} from '../chunks/index.5ccb46b4.js';
import { P as yt } from '../chunks/post.06d5c26b.js';
import '../chunks/image_banner.8ab919dd.js';
import { C as O } from '../chunks/code_copy.99453248.js';
import { I as Ht } from '../chunks/info_box.1f925e92.js';
import { e as mt } from '../chunks/tippy.a1e8f09d.js';
function Lt(v, e) {
  const n = {},
    s = {},
    o = { $$scope: 1 };
  let i = v.length;
  for (; i--; ) {
    const l = v[i],
      r = e[i];
    if (r) {
      for (const p in l) p in r || (s[p] = 1);
      for (const p in r) o[p] || ((n[p] = r[p]), (o[p] = 1));
      v[i] = r;
    } else for (const p in l) o[p] = 1;
  }
  for (const l in s) l in n || (n[l] = void 0);
  return n;
}
function Dt(v) {
  return typeof v == 'object' && v !== null ? v : {};
}
function Mt(v) {
  let e, n, s, o, i, l;
  return {
    c() {
      (e = d('div')), (n = d('div')), (o = f()), (i = d('div')), (l = $t(v[0])), this.h();
    },
    l(r) {
      e = c(r, 'DIV', { class: !0 });
      var p = b(e);
      (n = c(p, 'DIV', { class: !0 })), b(n).forEach(h), (o = u(p)), (i = c(p, 'DIV', { class: !0 }));
      var $ = b(i);
      (l = Tt($, v[0])), $.forEach(h), p.forEach(h), this.h();
    },
    h() {
      m(n, 'class', (s = v[1] + ' !w8 !h8 shrink-0')),
        m(i, 'class', 'px2'),
        m(e, 'class', 'flex items-center justify-start cursor-pointer');
    },
    m(r, p) {
      x(r, e, p), t(e, n), t(e, o), t(e, i), t(i, l);
    },
    p(r, [p]) {
      p & 2 && s !== (s = r[1] + ' !w8 !h8 shrink-0') && m(n, 'class', s), p & 1 && Et(l, r[0]);
    },
    i: I,
    o: I,
    d(r) {
      r && h(e);
    },
  };
}
function Pt(v, e, n) {
  let { name: s } = e,
    { icon: o } = e;
  return (
    (v.$$set = (i) => {
      'name' in i && n(0, (s = i.name)), 'icon' in i && n(1, (o = i.icon));
    }),
    [s, o]
  );
}
class It extends un {
  constructor(e) {
    super(), hn(this, e, Pt, Mt, fn, { name: 0, icon: 1 });
  }
}
function gt(v, e, n) {
  const s = v.slice();
  return (s[5] = e[n]), s;
}
function _t(v) {
  let e,
    n,
    s = mt(v[2]),
    o = [];
  for (let l = 0; l < s.length; l += 1) o[l] = bt(gt(v, s, l));
  const i = (l) =>
    C(o[l], 1, 1, () => {
      o[l] = null;
    });
  return {
    c() {
      e = d('ul');
      for (let l = 0; l < o.length; l += 1) o[l].c();
      this.h();
    },
    l(l) {
      e = c(l, 'UL', { class: !0 });
      var r = b(e);
      for (let p = 0; p < o.length; p += 1) o[p].l(r);
      r.forEach(h), this.h();
    },
    h() {
      m(e, 'class', 'svelte-ryh3kg');
    },
    m(l, r) {
      x(l, e, r);
      for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(e, null);
      n = !0;
    },
    p(l, r) {
      if (r & 4) {
        s = mt(l[2]);
        let p;
        for (p = 0; p < s.length; p += 1) {
          const $ = gt(l, s, p);
          o[p] ? (o[p].p($, r), T(o[p], 1)) : ((o[p] = bt($)), o[p].c(), T(o[p], 1), o[p].m(e, null));
        }
        for ($s(), p = s.length; p < o.length; p += 1) i(p);
        Ts();
      }
    },
    i(l) {
      if (!n) {
        for (let r = 0; r < s.length; r += 1) T(o[r]);
        n = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let r = 0; r < o.length; r += 1) C(o[r]);
      n = !1;
    },
    d(l) {
      l && h(e), xt(o, l);
    },
  };
}
function Ot(v) {
  let e, n;
  return (
    (e = new It({ props: { name: v[5].name, icon: v[5].icon } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(s) {
        L(e.$$.fragment, s);
      },
      m(s, o) {
        D(e, s, o), (n = !0);
      },
      p(s, o) {
        const i = {};
        o & 4 && (i.name = s[5].name), o & 4 && (i.icon = s[5].icon), e.$set(i);
      },
      i(s) {
        n || (T(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        M(e, s);
      },
    }
  );
}
function Rt(v) {
  let e, n;
  const s = [v[5]];
  let o = {};
  for (let i = 0; i < s.length; i += 1) o = kt(o, s[i]);
  return (
    (e = new wt({ props: o })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(i) {
        L(e.$$.fragment, i);
      },
      m(i, l) {
        D(e, i, l), (n = !0);
      },
      p(i, l) {
        const r = l & 4 ? Lt(s, [Dt(i[5])]) : {};
        e.$set(r);
      },
      i(i) {
        n || (T(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        M(e, i);
      },
    }
  );
}
function bt(v) {
  let e, n, s, o, i;
  const l = [Rt, Ot],
    r = [];
  function p($, y) {
    return $[5].files ? 0 : 1;
  }
  return (
    (n = p(v)),
    (s = r[n] = l[n](v)),
    {
      c() {
        (e = d('li')), s.c(), (o = f()), this.h();
      },
      l($) {
        e = c($, 'LI', { class: !0 });
        var y = b(e);
        s.l(y), (o = u(y)), y.forEach(h), this.h();
      },
      h() {
        m(e, 'class', 'svelte-ryh3kg');
      },
      m($, y) {
        x($, e, y), r[n].m(e, null), t(e, o), (i = !0);
      },
      p($, y) {
        let P = n;
        (n = p($)),
          n === P
            ? r[n].p($, y)
            : ($s(),
              C(r[P], 1, 1, () => {
                r[P] = null;
              }),
              Ts(),
              (s = r[n]),
              s ? s.p($, y) : ((s = r[n] = l[n]($)), s.c()),
              T(s, 1),
              s.m(e, o));
      },
      i($) {
        i || (T(s), (i = !0));
      },
      o($) {
        C(s), (i = !1);
      },
      d($) {
        $ && h(e), r[n].d();
      },
    }
  );
}
function Ut(v) {
  let e,
    n,
    s,
    o,
    i,
    l,
    r,
    p,
    $,
    y,
    P,
    E = v[0] && _t(v);
  return {
    c() {
      (e = d('div')),
        (n = d('div')),
        (o = f()),
        (i = d('div')),
        (l = $t(v[1])),
        (r = f()),
        E && E.c(),
        (p = ut()),
        this.h();
    },
    l(w) {
      e = c(w, 'DIV', { role: !0, tabindex: !0, class: !0 });
      var k = b(e);
      (n = c(k, 'DIV', { class: !0 })), b(n).forEach(h), (o = u(k)), (i = c(k, 'DIV', { class: !0 }));
      var on = b(i);
      (l = Tt(on, v[1])), on.forEach(h), k.forEach(h), (r = u(w)), E && E.l(w), (p = ut()), this.h();
    },
    h() {
      m(
        n,
        'class',
        (s = (v[0] ? 'i-fluent-emoji-flat-open-file-folder' : 'i-fluent-emoji-flat-file-folder') + ' !w8 !h8 shrink-0'),
      ),
        m(i, 'class', 'px2'),
        m(e, 'role', 'button'),
        m(e, 'tabindex', '0'),
        m(e, 'class', 'flex justify-start items-center cursor-pointer');
    },
    m(w, k) {
      x(w, e, k),
        t(e, n),
        t(e, o),
        t(e, i),
        t(i, l),
        x(w, r, k),
        E && E.m(w, k),
        x(w, p, k),
        ($ = !0),
        y || ((P = [ht(e, 'click', v[3]), ht(e, 'keydown', v[4])]), (y = !0));
    },
    p(w, [k]) {
      (!$ ||
        (k & 1 &&
          s !==
            (s =
              (w[0] ? 'i-fluent-emoji-flat-open-file-folder' : 'i-fluent-emoji-flat-file-folder') +
              ' !w8 !h8 shrink-0'))) &&
        m(n, 'class', s),
        (!$ || k & 2) && Et(l, w[1]),
        w[0]
          ? E
            ? (E.p(w, k), k & 1 && T(E, 1))
            : ((E = _t(w)), E.c(), T(E, 1), E.m(p.parentNode, p))
          : E &&
            ($s(),
            C(E, 1, 1, () => {
              E = null;
            }),
            Ts());
    },
    i(w) {
      $ || (T(E), ($ = !0));
    },
    o(w) {
      C(E), ($ = !1);
    },
    d(w) {
      w && (h(e), h(r), h(p)), E && E.d(w), (y = !1), Ct(P);
    },
  };
}
function St(v, e, n) {
  let { expanded: s = !0 } = e,
    { name: o } = e,
    { files: i = [] } = e;
  function l() {
    n(0, (s = !s));
  }
  const r = (p) => {
    p.key === 'Enter' && l();
  };
  return (
    (v.$$set = (p) => {
      'expanded' in p && n(0, (s = p.expanded)), 'name' in p && n(1, (o = p.name)), 'files' in p && n(2, (i = p.files));
    }),
    [s, o, i, l, r]
  );
}
class wt extends un {
  constructor(e) {
    super(), hn(this, e, St, Ut, fn, { expanded: 0, name: 1, files: 2 });
  }
}
function Bt(v) {
  let e, n, s;
  return (
    (n = new wt({ props: { expanded: !0, name: v[0].name, files: v[0].files } })),
    {
      c() {
        (e = d('div')), H(n.$$.fragment), this.h();
      },
      l(o) {
        e = c(o, 'DIV', { class: !0 });
        var i = b(e);
        L(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        m(e, 'class', 'nested-folder svelte-17nfefh');
      },
      m(o, i) {
        x(o, e, i), D(n, e, null), (s = !0);
      },
      p(o, [i]) {
        const l = {};
        i & 1 && (l.name = o[0].name), i & 1 && (l.files = o[0].files), n.$set(l);
      },
      i(o) {
        s || (T(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        C(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && h(e), M(n);
      },
    }
  );
}
function Nt(v, e, n) {
  let { folderData: s } = e;
  return (
    (v.$$set = (o) => {
      'folderData' in o && n(0, (s = o.folderData));
    }),
    [s]
  );
}
class At extends un {
  constructor(e) {
    super(), hn(this, e, Nt, Bt, fn, { folderData: 0 });
  }
}
function Xt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"><span class="token function">composer</span> require telegramsdk/botapi</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-bash');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function jt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">define("GREEN_TEXT", "\033[0;32m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">define("RED_TEXT", "\033[0;31m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">define("DEFAULT_TEXT", "\033[0m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">12</span><span class="no-line-diff"></span></div><div class="code-content">echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">13</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">14</span><span class="no-line-diff"></span></div><div class="code-content">while(true){</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">15</span><span class="no-line-diff"></span></div><div class="code-content">    &#36;updates = &#36;bot-&gt;updates(true, &#36;updates-&gt;lastUpdateID ?? null);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">16</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">17</span><span class="no-line-diff"></span></div><div class="code-content">    foreach(&#36;updates-&gt;result as &#36;update){</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">18</span><span class="no-line-diff"></span></div><div class="code-content">        if(isset(&#36;update-&gt;message)){</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">19</span><span class="no-line-diff"></span></div><div class="code-content">            &#36;res = &#36;bot-&gt;copyMessage([</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">20</span><span class="no-line-diff"></span></div><div class="code-content">                "chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">21</span><span class="no-line-diff"></span></div><div class="code-content">                "from_chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">22</span><span class="no-line-diff"></span></div><div class="code-content">                "message_id" =&gt; &#36;update-&gt;message-&gt;message_id</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">23</span><span class="no-line-diff"></span></div><div class="code-content">            ]);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">24</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">25</span><span class="no-line-diff"></span></div><div class="code-content">            if(&#36;res-&gt;body-&gt;ok){</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">26</span><span class="no-line-diff"></span></div><div class="code-content">                echo GREEN_TEXT . "Replied to " . &#36;update-&gt;chat-&gt;id . "\n" . DEFAULT_TEXT;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">27</span><span class="no-line-diff"></span></div><div class="code-content">            } else{</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">28</span><span class="no-line-diff"></span></div><div class="code-content">                echo RED_TEXT . "Coulnd't reply to " . &#36;update-&gt;chat-&gt;id . ": " . &#36;res-&gt;body-&gt;error . "\n" . DEFAULT_TEXT;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">29</span><span class="no-line-diff"></span></div><div class="code-content">            }</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">30</span><span class="no-line-diff"></span></div><div class="code-content">        }</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">31</span><span class="no-line-diff"></span></div><div class="code-content">    }</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">32</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">33</span><span class="no-line-diff"></span></div><div class="code-content">    sleep(5);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">34</span><span class="no-line-diff"></span></div><div class="code-content">}</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Ft(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">define("GREEN_TEXT", "\033[0;32m");</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">define("RED_TEXT", "\033[0;31m");</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">define("DEFAULT_TEXT", "\033[0m");</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function qt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">define("GREEN_TEXT", "\033[0;32m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">define("RED_TEXT", "\033[0;31m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">define("DEFAULT_TEXT", "\033[0m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Vt(v) {
  let e,
    n = `Please remember to replace <code class="inline-code-block">YOUR_BOT_TOKEN</code>
        with the actual bot token that
        <a href="https://t.me/botfather" rel="external">@botfather</a>
         sent you.`,
    s,
    o,
    i = `See &quot;
        <a href="/create-your-first-bot#setup-your-bot-on-telegram">Setup your Bot on Telegram</a>
        &quot; if you don&#39;t know how to do it.`;
  return {
    c() {
      (e = d('p')), (e.innerHTML = n), (s = f()), (o = d('p')), (o.innerHTML = i);
    },
    l(l) {
      (e = c(l, 'P', { 'data-svelte-h': !0 })),
        g(e) !== 'svelte-hsm6p1' && (e.innerHTML = n),
        (s = u(l)),
        (o = c(l, 'P', { 'data-svelte-h': !0 })),
        g(o) !== 'svelte-1v92adu' && (o.innerHTML = i);
    },
    m(l, r) {
      x(l, e, r), x(l, s, r), x(l, o, r);
    },
    p: I,
    d(l) {
      l && (h(e), h(s), h(o));
    },
  };
}
function Gt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">define("GREEN_TEXT", "\033[0;32m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">define("RED_TEXT", "\033[0;31m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">define("DEFAULT_TEXT", "\033[0m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">12</span><span class="no-line-diff"></span></div><div class="code-content">echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">13</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">14</span><span class="no-line-diff"></span></div><div class="code-content">while(true){</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">15</span><span class="no-line-diff"></span></div><div class="code-content">    &#36;updates = &#36;bot-&gt;updates(true, &#36;updates-&gt;lastUpdateID ?? null);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">16</span><span class="no-line-diff"></span></div><div class="code-content">    ...</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">17</span><span class="no-line-diff"></span></div><div class="code-content">    sleep(5);</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">18</span><span class="no-line-diff"></span></div><div class="code-content">}</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Kt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">define("GREEN_TEXT", "\033[0;32m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">define("RED_TEXT", "\033[0;31m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">define("DEFAULT_TEXT", "\033[0m");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_GET_UPDATES);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">12</span><span class="no-line-diff"></span></div><div class="code-content">echo GREEN_TEXT . "Bot Started!\n" . DEFAULT_TEXT;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">13</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">14</span><span class="no-line-diff"></span></div><div class="code-content">while(true){</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">15</span><span class="no-line-diff"></span></div><div class="code-content">    &#36;updates = &#36;bot-&gt;updates(true, &#36;updates-&gt;lastUpdateID ?? null);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">16</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">17</span><span class="no-line-diff"></span></div><div class="code-content">    foreach(&#36;updates-&gt;result as &#36;update){</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">18</span><span class="no-line-diff"></span></div><div class="code-content">        if(isset(&#36;update-&gt;message)){</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">19</span><span class="no-line-diff"></span></div><div class="code-content">            &#36;res = &#36;bot-&gt;copyMessage([</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">20</span><span class="no-line-diff"></span></div><div class="code-content">                "chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">21</span><span class="no-line-diff"></span></div><div class="code-content">                "from_chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">22</span><span class="no-line-diff"></span></div><div class="code-content">                "message_id" =&gt; &#36;update-&gt;message-&gt;message_id</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">23</span><span class="no-line-diff"></span></div><div class="code-content">            ]);</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">24</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">25</span><span class="no-line-diff"></span></div><div class="code-content">            if(&#36;res-&gt;body-&gt;ok){</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">26</span><span class="no-line-diff"></span></div><div class="code-content">                echo GREEN_TEXT . "Replied to " . &#36;update-&gt;chat-&gt;id . "\n" . DEFAULT_TEXT;</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">27</span><span class="no-line-diff"></span></div><div class="code-content">            } else{</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">28</span><span class="no-line-diff"></span></div><div class="code-content">                echo RED_TEXT . "Coulnd't reply to " . &#36;update-&gt;chat-&gt;id . ": " . &#36;res-&gt;body-&gt;error . "\n" . DEFAULT_TEXT;</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">29</span><span class="no-line-diff"></span></div><div class="code-content">            }</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">30</span><span class="no-line-diff"></span></div><div class="code-content">        }</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">31</span><span class="no-line-diff"></span></div><div class="code-content">    }</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">32</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">33</span><span class="no-line-diff"></span></div><div class="code-content">    sleep(5);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">34</span><span class="no-line-diff"></span></div><div class="code-content">}</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Wt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">php bot.php</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-bash');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Yt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">define("PRODUCTION", false);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">require_once __DIR__ . "/../vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN", Bot::UPDATES_FROM_WEBHOOK);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content">&#36;update = &#36;bot-&gt;updates(true); // Getting the updates</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function zt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once __DIR__ . "/envirorment.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot-&gt;setWebhook([</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">    "url" =&gt; "https://example.com", // Remember to use https</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">    "drop_pending_updates" =&gt; true,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content">]);</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Jt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content">require_once __DIR__ . "/../envirorment.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content">if(isset(&#36;update-&gt;update_id)){ // Check if there is an update</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content">    if(isset(&#36;update-&gt;message)){ // Check if a message was sent</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content">        &#36;bot-&gt;copyMessage([ // Copy the message</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">            "chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">            "from_chat_id" =&gt; &#36;update-&gt;chat-&gt;id,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content">            "message_id" =&gt; &#36;update-&gt;message-&gt;message_id</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">12</span><span class="no-line-diff"></span></div><div class="code-content">        ]);</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">13</span><span class="no-line-diff"></span></div><div class="code-content">    }</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">14</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">15</span><span class="no-line-diff"></span></div><div class="code-content">} else{</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">16</span><span class="no-line-diff"></span></div><div class="code-content">    echo "No updates from telegram where found.\n";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">17</span><span class="no-line-diff"></span></div><div class="code-content">}</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-php');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Qt(v) {
  let e,
    n,
    s,
    o =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">php src/bootstrap.php</div></div>` +
      '';
  return {
    c() {
      (e = d('pre')), (n = d('code')), (s = new R(!1)), this.h();
    },
    l(i) {
      e = c(i, 'PRE', {});
      var l = b(e);
      n = c(l, 'CODE', { class: !0 });
      var r = b(n);
      (s = U(r, !1)), r.forEach(h), l.forEach(h), this.h();
    },
    h() {
      (s.a = null), m(n, 'class', 'language-bash');
    },
    m(i, l) {
      x(i, e, l), t(e, n), s.m(o, n);
    },
    p: I,
    d(i) {
      i && h(e);
    },
  };
}
function Zt(v) {
  let e,
    n,
    s = '<a href="#introduction">Introduction</a>',
    o,
    i,
    l = `This article is part of the <a href="/?tags-Series=PHPBot">FirstBot</a>
      serie. We recommend reading the
      <a href="/create-your-first-bot">introcution chapter</a>
       before continuing.`,
    r,
    p,
    $,
    y,
    P,
    E = '<a href="#telegram-updates">Telegram Updates</a>',
    w,
    k,
    on = 'Before writing the code we have to mention that there are 2 methods to get updates from our Telegram bot.',
    mn,
    Oe,
    Es = `<li><a href="https://core.telegram.org/bots/api#getupdates" rel="external">getUpdates</a>
         : used for long polling , usefull if you don&#39;t have a public ip or an https url.</li> <li><a href="https://core.telegram.org/bots/api#setwebhook" rel="external">setWebhook</a>
         : more efficient way for recinving incoming updates, you need to have a public ip address with an https url.</li>`,
    gn,
    Re,
    ws = "In this article we'll look into both ways of creating a Telegram Bot.",
    _n,
    se,
    Cs = '<a href="#start-coding">🧑‍💻 Start Coding</a>',
    bn,
    te,
    xs = '<a href="#get-updates">Get Updates</a>',
    $n,
    Ue,
    ks =
      "Here's a simple example on how to get updates from Telegram and reply to them with the same message they sent.",
    Tn,
    S,
    ie,
    ys = 'bot.php',
    En,
    B,
    wn,
    ae,
    Hs = '<a href="#what-am-i-doing">🤔 What Am I Doing?</a>',
    Cn,
    Se,
    Ls = `If you already worked with <a href="https://github.com/TelegramSDK/BotAPI" rel="external">TelegramSDK</a>
      you might already know what I&#39;ve just written, but I still reccommend having a look at the
      <a href="https://botapi.racca.me/docs/examples/echo-bot" rel="external">official documentation</a>
       where this example is explained.`,
    xn,
    le,
    Ds = '<a href="#definitions">Definitions</a>',
    kn,
    Be,
    Ms = `<a href="https://botapi.racca.me" rel="external">TelegramSDK</a>
      uses the
      <code class="inline-code-block">PRODUCTION</code>
       as the method to show errors. Here&#39;s how it works:`,
    yn,
    Ne,
    Ps = `<li><code class="inline-code-block">false</code>
        : set
        <code class="inline-code-block">PRODUCTION</code>
        to
        <code class="inline-code-block">false</code>
         to throw exceptions whenever there is an API error;</li> <li><code class="inline-code-block">true</code>
        : set
        <code class="inline-code-block">PRODUCTION</code>
        to
        <code class="inline-code-block">true</code>
         to suppress exceptions and throw warnings instead.</li>`,
    Hn,
    Ae,
    Is = 'The other definitions are useful in our program to output the result of every API call.',
    Ln,
    N,
    oe,
    Os = 'bot.php',
    Dn,
    A,
    Mn,
    de,
    Rs = '<a href="#instancing-a-new-bot">Instancing a new Bot</a>',
    Pn,
    Xe,
    Us = `In this lines we&#39;re importing the library from the <code class="inline-code-block">vendor/</code>
       directory and instancing a new Bot object.`,
    In,
    X,
    ce,
    Ss = 'bot.php',
    On,
    j,
    Rn,
    F,
    Un,
    re,
    Bs = '<a href="#getting-the-updates">Getting the updates</a>',
    Sn,
    je,
    Ns = `<li><code class="inline-code-block">while(1)</code>
        is used to to continuously
        <a href="(https://en.wikipedia.org/wiki/Push_technology#Long_polling)" rel="external">poll</a>
         the Telegram server for new updates.</li> <li><code class="inline-code-block">sleep(5)</code>
         creates an interval from each request to aviod getting timed out.</li> <li><code class="inline-code-block">$bot-&gt;updates()</code>
        is one of the few built-in functions of the
        <a href="https://botapi.racca.me/docs/usage/general" rel="external">Bot</a>
        class. See
        <a href="https://botapi.racca.me/docs/usage/updates#default-updates" rel="external">Default Updates</a>
         for the first parameter. The second parameter sets the last update to get only the most recent ones.</li>`,
    Bn,
    q,
    ve,
    As = 'bot.php',
    Nn,
    V,
    An,
    pe,
    Xs = '<a href="#replying-to-the-user">Replying to the user</a>',
    Xn,
    Fe,
    js = `Once we have received the update we can finally reply to the user with the same message they sent by just copying
      it with <a href="https://core.telegram.org/bots/api#copymessage" rel="external">copyMessage</a>
      .`,
    jn,
    qe,
    Fs = `<li><code class="inline-code-block">foreach($updates-&gt;result as $update)</code>
         loops through the updates</li> <li><code class="inline-code-block">if(isset($update-&gt;message))</code>
        check if a message was sent. See the
        <a href="https://core.telegram.org/bots/api#update" rel="external">update</a>
         object.</li> <li><code class="inline-code-block">$bot-&gt;copyMessage()</code>
        copies the message and sends it to the user that sent the update (
        <code class="inline-code-block">$update-&gt;chat-&gt;id</code>
        ).</li> <li><code class="inline-code-block">if($res-&gt;body-&gt;ok)</code>
         checks if the message was sent successfully.</li>`,
    Fn,
    G,
    fe,
    qs = 'bot.php',
    qn,
    K,
    Vn,
    ue,
    Vs = '<a href="#start-the-bot">Start the Bot</a>',
    Gn,
    Ve,
    Gs = "That's it, now you can start the bot with",
    Kn,
    Ge,
    W,
    Wn,
    Ke,
    Ks = 'Send to it a message and see it replying!',
    Yn,
    he,
    Ws = '<a href="#set-webhook">Set Webhook</a>',
    zn,
    We,
    Ys = `Setting a <a href="https://core.telegram.org/bots/api#setwebhook" rel="external">webhook</a>
      with Telegram is bit more complicated than working with
      <a href="https://core.telegram.org/bots/api#getupdates" rel="external">getUpdates</a>
       as it requires an HTTPS url. In this article will assume that you already have it.`,
    Jn,
    me,
    zs = '<a href="#directory-structure">Directory Structure</a>',
    Qn,
    Ye,
    Js = "Here's an example of directory structure you might follow:",
    Zn,
    ze,
    ge,
    es,
    _e,
    Qs = '<a href="#envirorment">Envirorment</a>',
    ns,
    Je,
    Zs = `Let&#39;s start with <code class="inline-code-block">envirorment.php</code>
      , a file that will hamdle common tasks such as creating a new instance of the bot.`,
    ss,
    Y,
    be,
    et = 'src/envirorment.php',
    ts,
    z,
    is,
    Qe,
    nt = `As you can see, getting updates from the webhook is much easier than doing it with <code class="inline-code-block">getUpdates</code>
      .`,
    as,
    $e,
    st = '<a href="#bootstrap">Bootstrap</a>',
    ls,
    Ze,
    tt = `The <code class="inline-code-block">bootstrap.php</code>
       file simply sets the webhook to the specified url.`,
    os,
    J,
    Te,
    it = 'src/bootstrap.php',
    ds,
    Q,
    cs,
    en,
    at = `See <a href="https://core.telegram.org/bots/api#setwebhook" rel="external">setWebhook</a>
       for more information.`,
    rs,
    Ee,
    lt = '<a href="#public-file">Public file</a>',
    vs,
    nn,
    ot = `The <code class="inline-code-block">src/public/</code>
      directory will be the one exposed to your web server and it will contain only one file,
      <code class="inline-code-block">index.php</code>`,
    ps,
    Z,
    we,
    dt = 'src/public/index.php',
    fs,
    ee,
    us,
    Ce,
    ct = '<a href="#start-the-bot">Start the bot</a>',
    hs,
    sn,
    rt = 'Once you have those files you just need to bootstrap your bot:',
    ms,
    tn,
    ne,
    gs,
    xe,
    vt = '<a href="#enjoy">Enjoy</a>',
    _s,
    an,
    pt = 'You now have a full functioning bot that replies to every message sent by the users.',
    bs,
    ln,
    ft = "If you have any question please leave a comment below and I'll be happy to reply.",
    pn;
  return (
    ($ = new O({ props: { $$slots: { default: [Xt] }, $$scope: { ctx: v } } })),
    (B = new O({ props: { $$slots: { default: [jt] }, $$scope: { ctx: v } } })),
    (A = new O({ props: { $$slots: { default: [Ft] }, $$scope: { ctx: v } } })),
    (j = new O({ props: { $$slots: { default: [qt] }, $$scope: { ctx: v } } })),
    (F = new Ht({
      props: { statusType: 'info', statusName: 'Replace the Token!', $$slots: { default: [Vt] }, $$scope: { ctx: v } },
    })),
    (V = new O({ props: { $$slots: { default: [Gt] }, $$scope: { ctx: v } } })),
    (K = new O({ props: { $$slots: { default: [Kt] }, $$scope: { ctx: v } } })),
    (W = new O({ props: { $$slots: { default: [Wt] }, $$scope: { ctx: v } } })),
    (ge = new At({ props: { folderData: v[0] } })),
    (z = new O({ props: { $$slots: { default: [Yt] }, $$scope: { ctx: v } } })),
    (Q = new O({ props: { $$slots: { default: [zt] }, $$scope: { ctx: v } } })),
    (ee = new O({ props: { $$slots: { default: [Jt] }, $$scope: { ctx: v } } })),
    (ne = new O({ props: { $$slots: { default: [Qt] }, $$scope: { ctx: v } } })),
    {
      c() {
        (e = d('article')),
          (n = d('h1')),
          (n.innerHTML = s),
          (o = f()),
          (i = d('p')),
          (i.innerHTML = l),
          (r = f()),
          (p = d('div')),
          H($.$$.fragment),
          (y = f()),
          (P = d('h1')),
          (P.innerHTML = E),
          (w = f()),
          (k = d('p')),
          (k.textContent = on),
          (mn = f()),
          (Oe = d('ol')),
          (Oe.innerHTML = Es),
          (gn = f()),
          (Re = d('p')),
          (Re.textContent = ws),
          (_n = f()),
          (se = d('h1')),
          (se.innerHTML = Cs),
          (bn = f()),
          (te = d('h2')),
          (te.innerHTML = xs),
          ($n = f()),
          (Ue = d('p')),
          (Ue.textContent = ks),
          (Tn = f()),
          (S = d('div')),
          (ie = d('h2')),
          (ie.textContent = ys),
          (En = f()),
          H(B.$$.fragment),
          (wn = f()),
          (ae = d('h3')),
          (ae.innerHTML = Hs),
          (Cn = f()),
          (Se = d('p')),
          (Se.innerHTML = Ls),
          (xn = f()),
          (le = d('h4')),
          (le.innerHTML = Ds),
          (kn = f()),
          (Be = d('p')),
          (Be.innerHTML = Ms),
          (yn = f()),
          (Ne = d('ul')),
          (Ne.innerHTML = Ps),
          (Hn = f()),
          (Ae = d('p')),
          (Ae.textContent = Is),
          (Ln = f()),
          (N = d('div')),
          (oe = d('h2')),
          (oe.textContent = Os),
          (Dn = f()),
          H(A.$$.fragment),
          (Mn = f()),
          (de = d('h4')),
          (de.innerHTML = Rs),
          (Pn = f()),
          (Xe = d('p')),
          (Xe.innerHTML = Us),
          (In = f()),
          (X = d('div')),
          (ce = d('h2')),
          (ce.textContent = Ss),
          (On = f()),
          H(j.$$.fragment),
          (Rn = f()),
          H(F.$$.fragment),
          (Un = f()),
          (re = d('h4')),
          (re.innerHTML = Bs),
          (Sn = f()),
          (je = d('ul')),
          (je.innerHTML = Ns),
          (Bn = f()),
          (q = d('div')),
          (ve = d('h2')),
          (ve.textContent = As),
          (Nn = f()),
          H(V.$$.fragment),
          (An = f()),
          (pe = d('h4')),
          (pe.innerHTML = Xs),
          (Xn = f()),
          (Fe = d('p')),
          (Fe.innerHTML = js),
          (jn = f()),
          (qe = d('ul')),
          (qe.innerHTML = Fs),
          (Fn = f()),
          (G = d('div')),
          (fe = d('h2')),
          (fe.textContent = qs),
          (qn = f()),
          H(K.$$.fragment),
          (Vn = f()),
          (ue = d('h3')),
          (ue.innerHTML = Vs),
          (Gn = f()),
          (Ve = d('p')),
          (Ve.textContent = Gs),
          (Kn = f()),
          (Ge = d('div')),
          H(W.$$.fragment),
          (Wn = f()),
          (Ke = d('p')),
          (Ke.textContent = Ks),
          (Yn = f()),
          (he = d('h2')),
          (he.innerHTML = Ws),
          (zn = f()),
          (We = d('p')),
          (We.innerHTML = Ys),
          (Jn = f()),
          (me = d('h3')),
          (me.innerHTML = zs),
          (Qn = f()),
          (Ye = d('p')),
          (Ye.textContent = Js),
          (Zn = f()),
          (ze = d('div')),
          H(ge.$$.fragment),
          (es = f()),
          (_e = d('h3')),
          (_e.innerHTML = Qs),
          (ns = f()),
          (Je = d('p')),
          (Je.innerHTML = Zs),
          (ss = f()),
          (Y = d('div')),
          (be = d('h2')),
          (be.textContent = et),
          (ts = f()),
          H(z.$$.fragment),
          (is = f()),
          (Qe = d('p')),
          (Qe.innerHTML = nt),
          (as = f()),
          ($e = d('h3')),
          ($e.innerHTML = st),
          (ls = f()),
          (Ze = d('p')),
          (Ze.innerHTML = tt),
          (os = f()),
          (J = d('div')),
          (Te = d('h2')),
          (Te.textContent = it),
          (ds = f()),
          H(Q.$$.fragment),
          (cs = f()),
          (en = d('p')),
          (en.innerHTML = at),
          (rs = f()),
          (Ee = d('h3')),
          (Ee.innerHTML = lt),
          (vs = f()),
          (nn = d('p')),
          (nn.innerHTML = ot),
          (ps = f()),
          (Z = d('div')),
          (we = d('h2')),
          (we.textContent = dt),
          (fs = f()),
          H(ee.$$.fragment),
          (us = f()),
          (Ce = d('h3')),
          (Ce.innerHTML = ct),
          (hs = f()),
          (sn = d('p')),
          (sn.textContent = rt),
          (ms = f()),
          (tn = d('div')),
          H(ne.$$.fragment),
          (gs = f()),
          (xe = d('h1')),
          (xe.innerHTML = vt),
          (_s = f()),
          (an = d('p')),
          (an.textContent = pt),
          (bs = f()),
          (ln = d('p')),
          (ln.textContent = ft),
          this.h();
      },
      l(_) {
        e = c(_, 'ARTICLE', { slot: !0 });
        var a = b(e);
        (n = c(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          g(n) !== 'svelte-7mio9y' && (n.innerHTML = s),
          (o = u(a)),
          (i = c(a, 'P', { 'data-svelte-h': !0 })),
          g(i) !== 'svelte-6mwdk0' && (i.innerHTML = l),
          (r = u(a)),
          (p = c(a, 'DIV', { class: !0 }));
        var dn = b(p);
        L($.$$.fragment, dn),
          dn.forEach(h),
          (y = u(a)),
          (P = c(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          g(P) !== 'svelte-ssfcev' && (P.innerHTML = E),
          (w = u(a)),
          (k = c(a, 'P', { 'data-svelte-h': !0 })),
          g(k) !== 'svelte-ndh2ts' && (k.textContent = on),
          (mn = u(a)),
          (Oe = c(a, 'OL', { 'data-svelte-h': !0 })),
          g(Oe) !== 'svelte-yhffh8' && (Oe.innerHTML = Es),
          (gn = u(a)),
          (Re = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Re) !== 'svelte-1uss75e' && (Re.textContent = ws),
          (_n = u(a)),
          (se = c(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          g(se) !== 'svelte-wm8r3o' && (se.innerHTML = Cs),
          (bn = u(a)),
          (te = c(a, 'H2', { id: !0, 'data-svelte-h': !0 })),
          g(te) !== 'svelte-1in8mm0' && (te.innerHTML = xs),
          ($n = u(a)),
          (Ue = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ue) !== 'svelte-1nbr9td' && (Ue.textContent = ks),
          (Tn = u(a)),
          (S = c(a, 'DIV', { class: !0 }));
        var ke = b(S);
        (ie = c(ke, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(ie) !== 'svelte-8ulcs' && (ie.textContent = ys),
          (En = u(ke)),
          L(B.$$.fragment, ke),
          ke.forEach(h),
          (wn = u(a)),
          (ae = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(ae) !== 'svelte-wfdauz' && (ae.innerHTML = Hs),
          (Cn = u(a)),
          (Se = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Se) !== 'svelte-13daxgg' && (Se.innerHTML = Ls),
          (xn = u(a)),
          (le = c(a, 'H4', { id: !0, 'data-svelte-h': !0 })),
          g(le) !== 'svelte-7a76x2' && (le.innerHTML = Ds),
          (kn = u(a)),
          (Be = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Be) !== 'svelte-18xhhtn' && (Be.innerHTML = Ms),
          (yn = u(a)),
          (Ne = c(a, 'UL', { 'data-svelte-h': !0 })),
          g(Ne) !== 'svelte-lzl7lp' && (Ne.innerHTML = Ps),
          (Hn = u(a)),
          (Ae = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ae) !== 'svelte-8yqtd4' && (Ae.textContent = Is),
          (Ln = u(a)),
          (N = c(a, 'DIV', { class: !0 }));
        var ye = b(N);
        (oe = c(ye, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(oe) !== 'svelte-8ulcs' && (oe.textContent = Os),
          (Dn = u(ye)),
          L(A.$$.fragment, ye),
          ye.forEach(h),
          (Mn = u(a)),
          (de = c(a, 'H4', { id: !0, 'data-svelte-h': !0 })),
          g(de) !== 'svelte-19sgisk' && (de.innerHTML = Rs),
          (Pn = u(a)),
          (Xe = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Xe) !== 'svelte-bgg7ri' && (Xe.innerHTML = Us),
          (In = u(a)),
          (X = c(a, 'DIV', { class: !0 }));
        var He = b(X);
        (ce = c(He, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(ce) !== 'svelte-8ulcs' && (ce.textContent = Ss),
          (On = u(He)),
          L(j.$$.fragment, He),
          He.forEach(h),
          (Rn = u(a)),
          L(F.$$.fragment, a),
          (Un = u(a)),
          (re = c(a, 'H4', { id: !0, 'data-svelte-h': !0 })),
          g(re) !== 'svelte-16ydvet' && (re.innerHTML = Bs),
          (Sn = u(a)),
          (je = c(a, 'UL', { 'data-svelte-h': !0 })),
          g(je) !== 'svelte-gwl1wa' && (je.innerHTML = Ns),
          (Bn = u(a)),
          (q = c(a, 'DIV', { class: !0 }));
        var Le = b(q);
        (ve = c(Le, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(ve) !== 'svelte-8ulcs' && (ve.textContent = As),
          (Nn = u(Le)),
          L(V.$$.fragment, Le),
          Le.forEach(h),
          (An = u(a)),
          (pe = c(a, 'H4', { id: !0, 'data-svelte-h': !0 })),
          g(pe) !== 'svelte-1dmjlvl' && (pe.innerHTML = Xs),
          (Xn = u(a)),
          (Fe = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Fe) !== 'svelte-mgwrq5' && (Fe.innerHTML = js),
          (jn = u(a)),
          (qe = c(a, 'UL', { 'data-svelte-h': !0 })),
          g(qe) !== 'svelte-1bnlwuk' && (qe.innerHTML = Fs),
          (Fn = u(a)),
          (G = c(a, 'DIV', { class: !0 }));
        var De = b(G);
        (fe = c(De, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(fe) !== 'svelte-8ulcs' && (fe.textContent = qs),
          (qn = u(De)),
          L(K.$$.fragment, De),
          De.forEach(h),
          (Vn = u(a)),
          (ue = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(ue) !== 'svelte-1i1r1su' && (ue.innerHTML = Vs),
          (Gn = u(a)),
          (Ve = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ve) !== 'svelte-dksi6c' && (Ve.textContent = Gs),
          (Kn = u(a)),
          (Ge = c(a, 'DIV', { class: !0 }));
        var cn = b(Ge);
        L(W.$$.fragment, cn),
          cn.forEach(h),
          (Wn = u(a)),
          (Ke = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ke) !== 'svelte-1f9q46g' && (Ke.textContent = Ks),
          (Yn = u(a)),
          (he = c(a, 'H2', { id: !0, 'data-svelte-h': !0 })),
          g(he) !== 'svelte-1t6akfb' && (he.innerHTML = Ws),
          (zn = u(a)),
          (We = c(a, 'P', { 'data-svelte-h': !0 })),
          g(We) !== 'svelte-1sf3ba1' && (We.innerHTML = Ys),
          (Jn = u(a)),
          (me = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(me) !== 'svelte-5qdxpo' && (me.innerHTML = zs),
          (Qn = u(a)),
          (Ye = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ye) !== 'svelte-1o15p02' && (Ye.textContent = Js),
          (Zn = u(a)),
          (ze = c(a, 'DIV', { class: !0 }));
        var rn = b(ze);
        L(ge.$$.fragment, rn),
          rn.forEach(h),
          (es = u(a)),
          (_e = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(_e) !== 'svelte-1xckxo5' && (_e.innerHTML = Qs),
          (ns = u(a)),
          (Je = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Je) !== 'svelte-ibxgc5' && (Je.innerHTML = Zs),
          (ss = u(a)),
          (Y = c(a, 'DIV', { class: !0 }));
        var Me = b(Y);
        (be = c(Me, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(be) !== 'svelte-ogfbwd' && (be.textContent = et),
          (ts = u(Me)),
          L(z.$$.fragment, Me),
          Me.forEach(h),
          (is = u(a)),
          (Qe = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Qe) !== 'svelte-1pqz0cc' && (Qe.innerHTML = nt),
          (as = u(a)),
          ($e = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g($e) !== 'svelte-9ngahi' && ($e.innerHTML = st),
          (ls = u(a)),
          (Ze = c(a, 'P', { 'data-svelte-h': !0 })),
          g(Ze) !== 'svelte-3y1mfk' && (Ze.innerHTML = tt),
          (os = u(a)),
          (J = c(a, 'DIV', { class: !0 }));
        var Pe = b(J);
        (Te = c(Pe, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(Te) !== 'svelte-1lbv8su' && (Te.textContent = it),
          (ds = u(Pe)),
          L(Q.$$.fragment, Pe),
          Pe.forEach(h),
          (cs = u(a)),
          (en = c(a, 'P', { 'data-svelte-h': !0 })),
          g(en) !== 'svelte-sbbf35' && (en.innerHTML = at),
          (rs = u(a)),
          (Ee = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(Ee) !== 'svelte-1hmyqez' && (Ee.innerHTML = lt),
          (vs = u(a)),
          (nn = c(a, 'P', { 'data-svelte-h': !0 })),
          g(nn) !== 'svelte-2co3c' && (nn.innerHTML = ot),
          (ps = u(a)),
          (Z = c(a, 'DIV', { class: !0 }));
        var Ie = b(Z);
        (we = c(Ie, 'H2', { class: !0, 'data-svelte-h': !0 })),
          g(we) !== 'svelte-1ar7xai' && (we.textContent = dt),
          (fs = u(Ie)),
          L(ee.$$.fragment, Ie),
          Ie.forEach(h),
          (us = u(a)),
          (Ce = c(a, 'H3', { id: !0, 'data-svelte-h': !0 })),
          g(Ce) !== 'svelte-1fqzlry' && (Ce.innerHTML = ct),
          (hs = u(a)),
          (sn = c(a, 'P', { 'data-svelte-h': !0 })),
          g(sn) !== 'svelte-ytov1i' && (sn.textContent = rt),
          (ms = u(a)),
          (tn = c(a, 'DIV', { class: !0 }));
        var vn = b(tn);
        L(ne.$$.fragment, vn),
          vn.forEach(h),
          (gs = u(a)),
          (xe = c(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          g(xe) !== 'svelte-umtpej' && (xe.innerHTML = vt),
          (_s = u(a)),
          (an = c(a, 'P', { 'data-svelte-h': !0 })),
          g(an) !== 'svelte-h2k26s' && (an.textContent = pt),
          (bs = u(a)),
          (ln = c(a, 'P', { 'data-svelte-h': !0 })),
          g(ln) !== 'svelte-jwzj0i' && (ln.textContent = ft),
          a.forEach(h),
          this.h();
      },
      h() {
        m(n, 'id', 'introduction'),
          m(p, 'class', 'code-block'),
          m(P, 'id', 'telegram-updates'),
          m(se, 'id', 'start-coding'),
          m(te, 'id', 'get-updates'),
          m(ie, 'class', 'code-title'),
          m(S, 'class', 'code-block titled showLineNumber'),
          m(ae, 'id', 'what-am-i-doing'),
          m(le, 'id', 'definitions'),
          m(oe, 'class', 'code-title'),
          m(N, 'class', 'code-block titled showLineNumber'),
          m(de, 'id', 'instancing-a-new-bot'),
          m(ce, 'class', 'code-title'),
          m(X, 'class', 'code-block titled showLineNumber'),
          m(re, 'id', 'getting-the-updates'),
          m(ve, 'class', 'code-title'),
          m(q, 'class', 'code-block titled showLineNumber'),
          m(pe, 'id', 'replying-to-the-user'),
          m(fe, 'class', 'code-title'),
          m(G, 'class', 'code-block titled showLineNumber'),
          m(ue, 'id', 'start-the-bot'),
          m(Ge, 'class', 'code-block'),
          m(he, 'id', 'set-webhook'),
          m(me, 'id', 'directory-structure'),
          m(ze, 'class', 'p4 border-1 shadow-xl rounded-xl border-black dark:border-white overflow-auto'),
          m(_e, 'id', 'envirorment'),
          m(be, 'class', 'code-title'),
          m(Y, 'class', 'code-block titled showLineNumber'),
          m($e, 'id', 'bootstrap'),
          m(Te, 'class', 'code-title'),
          m(J, 'class', 'code-block titled showLineNumber'),
          m(Ee, 'id', 'public-file'),
          m(we, 'class', 'code-title'),
          m(Z, 'class', 'code-block titled showLineNumber'),
          m(Ce, 'id', 'start-the-bot'),
          m(tn, 'class', 'code-block'),
          m(xe, 'id', 'enjoy'),
          m(e, 'slot', 'post_content');
      },
      m(_, a) {
        x(_, e, a),
          t(e, n),
          t(e, o),
          t(e, i),
          t(e, r),
          t(e, p),
          D($, p, null),
          t(e, y),
          t(e, P),
          t(e, w),
          t(e, k),
          t(e, mn),
          t(e, Oe),
          t(e, gn),
          t(e, Re),
          t(e, _n),
          t(e, se),
          t(e, bn),
          t(e, te),
          t(e, $n),
          t(e, Ue),
          t(e, Tn),
          t(e, S),
          t(S, ie),
          t(S, En),
          D(B, S, null),
          t(e, wn),
          t(e, ae),
          t(e, Cn),
          t(e, Se),
          t(e, xn),
          t(e, le),
          t(e, kn),
          t(e, Be),
          t(e, yn),
          t(e, Ne),
          t(e, Hn),
          t(e, Ae),
          t(e, Ln),
          t(e, N),
          t(N, oe),
          t(N, Dn),
          D(A, N, null),
          t(e, Mn),
          t(e, de),
          t(e, Pn),
          t(e, Xe),
          t(e, In),
          t(e, X),
          t(X, ce),
          t(X, On),
          D(j, X, null),
          t(e, Rn),
          D(F, e, null),
          t(e, Un),
          t(e, re),
          t(e, Sn),
          t(e, je),
          t(e, Bn),
          t(e, q),
          t(q, ve),
          t(q, Nn),
          D(V, q, null),
          t(e, An),
          t(e, pe),
          t(e, Xn),
          t(e, Fe),
          t(e, jn),
          t(e, qe),
          t(e, Fn),
          t(e, G),
          t(G, fe),
          t(G, qn),
          D(K, G, null),
          t(e, Vn),
          t(e, ue),
          t(e, Gn),
          t(e, Ve),
          t(e, Kn),
          t(e, Ge),
          D(W, Ge, null),
          t(e, Wn),
          t(e, Ke),
          t(e, Yn),
          t(e, he),
          t(e, zn),
          t(e, We),
          t(e, Jn),
          t(e, me),
          t(e, Qn),
          t(e, Ye),
          t(e, Zn),
          t(e, ze),
          D(ge, ze, null),
          t(e, es),
          t(e, _e),
          t(e, ns),
          t(e, Je),
          t(e, ss),
          t(e, Y),
          t(Y, be),
          t(Y, ts),
          D(z, Y, null),
          t(e, is),
          t(e, Qe),
          t(e, as),
          t(e, $e),
          t(e, ls),
          t(e, Ze),
          t(e, os),
          t(e, J),
          t(J, Te),
          t(J, ds),
          D(Q, J, null),
          t(e, cs),
          t(e, en),
          t(e, rs),
          t(e, Ee),
          t(e, vs),
          t(e, nn),
          t(e, ps),
          t(e, Z),
          t(Z, we),
          t(Z, fs),
          D(ee, Z, null),
          t(e, us),
          t(e, Ce),
          t(e, hs),
          t(e, sn),
          t(e, ms),
          t(e, tn),
          D(ne, tn, null),
          t(e, gs),
          t(e, xe),
          t(e, _s),
          t(e, an),
          t(e, bs),
          t(e, ln),
          (pn = !0);
      },
      p(_, a) {
        const dn = {};
        a & 2 && (dn.$$scope = { dirty: a, ctx: _ }), $.$set(dn);
        const ke = {};
        a & 2 && (ke.$$scope = { dirty: a, ctx: _ }), B.$set(ke);
        const ye = {};
        a & 2 && (ye.$$scope = { dirty: a, ctx: _ }), A.$set(ye);
        const He = {};
        a & 2 && (He.$$scope = { dirty: a, ctx: _ }), j.$set(He);
        const Le = {};
        a & 2 && (Le.$$scope = { dirty: a, ctx: _ }), F.$set(Le);
        const De = {};
        a & 2 && (De.$$scope = { dirty: a, ctx: _ }), V.$set(De);
        const cn = {};
        a & 2 && (cn.$$scope = { dirty: a, ctx: _ }), K.$set(cn);
        const rn = {};
        a & 2 && (rn.$$scope = { dirty: a, ctx: _ }), W.$set(rn);
        const Me = {};
        a & 2 && (Me.$$scope = { dirty: a, ctx: _ }), z.$set(Me);
        const Pe = {};
        a & 2 && (Pe.$$scope = { dirty: a, ctx: _ }), Q.$set(Pe);
        const Ie = {};
        a & 2 && (Ie.$$scope = { dirty: a, ctx: _ }), ee.$set(Ie);
        const vn = {};
        a & 2 && (vn.$$scope = { dirty: a, ctx: _ }), ne.$set(vn);
      },
      i(_) {
        pn ||
          (T($.$$.fragment, _),
          T(B.$$.fragment, _),
          T(A.$$.fragment, _),
          T(j.$$.fragment, _),
          T(F.$$.fragment, _),
          T(V.$$.fragment, _),
          T(K.$$.fragment, _),
          T(W.$$.fragment, _),
          T(ge.$$.fragment, _),
          T(z.$$.fragment, _),
          T(Q.$$.fragment, _),
          T(ee.$$.fragment, _),
          T(ne.$$.fragment, _),
          (pn = !0));
      },
      o(_) {
        C($.$$.fragment, _),
          C(B.$$.fragment, _),
          C(A.$$.fragment, _),
          C(j.$$.fragment, _),
          C(F.$$.fragment, _),
          C(V.$$.fragment, _),
          C(K.$$.fragment, _),
          C(W.$$.fragment, _),
          C(ge.$$.fragment, _),
          C(z.$$.fragment, _),
          C(Q.$$.fragment, _),
          C(ee.$$.fragment, _),
          C(ne.$$.fragment, _),
          (pn = !1);
      },
      d(_) {
        _ && h(e), M($), M(B), M(A), M(j), M(F), M(V), M(K), M(W), M(ge), M(z), M(Q), M(ee), M(ne);
      },
    }
  );
}
function ei(v) {
  let e, n;
  return (
    (e = new yt({ props: { $$slots: { post_content: [Zt] }, $$scope: { ctx: v } } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(s) {
        L(e.$$.fragment, s);
      },
      m(s, o) {
        D(e, s, o), (n = !0);
      },
      p(s, [o]) {
        const i = {};
        o & 2 && (i.$$scope = { dirty: o, ctx: s }), e.$set(i);
      },
      i(s) {
        n || (T(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        M(e, s);
      },
    }
  );
}
function ni(v) {
  return [
    {
      name: 'MyBot',
      files: [
        {
          name: 'src',
          files: [
            { name: 'public', files: [{ name: 'index.php', icon: 'i-vscode-icons-file-type-php' }] },
            { name: 'bootstrap.php', icon: 'i-vscode-icons-file-type-php' },
            { name: 'envirorment.php', icon: 'i-vscode-icons-file-type-php' },
          ],
        },
        { name: 'vendor', files: [] },
        { name: 'composer.json', icon: 'i-vscode-icons-file-type-json' },
        { name: 'composer.lock', icon: 'i-vscode-icons-file-type-json' },
      ],
    },
  ];
}
class ci extends un {
  constructor(e) {
    super(), hn(this, e, ni, ei, fn, {});
  }
}
export { ci as component };
