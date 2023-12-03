import {
  s as Xt,
  f as i,
  e as Wt,
  g as o,
  h as w,
  d as g,
  j as c,
  i as T,
  u as n,
  v as $,
  R as Be,
  a as p,
  N as v,
  c as h,
  H as ke,
  x as Ee,
} from '../chunks/scheduler.b261eb3c.js';
import { S as Zt, i as en, b as H, d as y, m as L, a as M, t as x, e as P } from '../chunks/index.5ccb46b4.js';
import { P as tn } from '../chunks/post.06d5c26b.js';
import '../chunks/image_banner.8ab919dd.js';
import { C as $e } from '../chunks/code_copy.99453248.js';
import { I as Gt } from '../chunks/info_box.1f925e92.js';
function Qt(u) {
  let e, s;
  return {
    c() {
      (e = i('source')), this.h();
    },
    l(a) {
      (e = o(a, 'SOURCE', { title: !0, src: !0, type: !0 })), this.h();
    },
    h() {
      c(e, 'title', u[6]), Be(e.src, (s = u[10])) || c(e, 'src', s), c(e, 'type', 'video/mp4');
    },
    m(a, f) {
      T(a, e, f);
    },
    p(a, f) {
      f & 64 && c(e, 'title', a[6]), f & 1024 && !Be(e.src, (s = a[10])) && c(e, 'src', s);
    },
    d(a) {
      a && g(e);
    },
  };
}
function Jt(u) {
  let e, s;
  return {
    c() {
      (e = i('source')), this.h();
    },
    l(a) {
      (e = o(a, 'SOURCE', { title: !0, src: !0, type: !0 })), this.h();
    },
    h() {
      c(e, 'title', u[6]), Be(e.src, (s = u[9])) || c(e, 'src', s), c(e, 'type', 'video/webm');
    },
    m(a, f) {
      T(a, e, f);
    },
    p(a, f) {
      f & 64 && c(e, 'title', a[6]), f & 512 && !Be(e.src, (s = a[9])) && c(e, 'src', s);
    },
    d(a) {
      a && g(e);
    },
  };
}
function nn(u) {
  let e,
    s,
    a,
    f,
    l = u[10] && Qt(u),
    d = u[9] && Jt(u);
  return {
    c() {
      (e = i('video')), l && l.c(), (s = Wt()), d && d.c(), (a = i('track')), this.h();
    },
    l(r) {
      e = o(r, 'VIDEO', { id: !0, width: !0, height: !0, class: !0, style: !0, poster: !0, 'data-poster': !0 });
      var b = w(e);
      l && l.l(b), (s = Wt()), d && d.l(b), (a = o(b, 'TRACK', { kind: !0 })), b.forEach(g), this.h();
    },
    h() {
      c(a, 'kind', 'captions'),
        c(e, 'id', u[7]),
        (e.autoplay = u[1]),
        (e.loop = u[2]),
        c(e, 'width', u[4]),
        c(e, 'height', u[5]),
        c(e, 'class', (f = '!h-full !w-auto m-auto ' + (u[0] ?? ''))),
        (e.controls = !0),
        c(e, 'style', u[8]),
        c(e, 'poster', u[3]),
        c(e, 'data-poster', u[3]);
    },
    m(r, b) {
      T(r, e, b), l && l.m(e, null), n(e, s), d && d.m(e, null), n(e, a);
    },
    p(r, [b]) {
      r[10] ? (l ? l.p(r, b) : ((l = Qt(r)), l.c(), l.m(e, s))) : l && (l.d(1), (l = null)),
        r[9] ? (d ? d.p(r, b) : ((d = Jt(r)), d.c(), d.m(e, a))) : d && (d.d(1), (d = null)),
        b & 128 && c(e, 'id', r[7]),
        b & 2 && (e.autoplay = r[1]),
        b & 4 && (e.loop = r[2]),
        b & 16 && c(e, 'width', r[4]),
        b & 32 && c(e, 'height', r[5]),
        b & 1 && f !== (f = '!h-full !w-auto m-auto ' + (r[0] ?? '')) && c(e, 'class', f),
        b & 256 && c(e, 'style', r[8]),
        b & 8 && c(e, 'poster', r[3]),
        b & 8 && c(e, 'data-poster', r[3]);
    },
    i: $,
    o: $,
    d(r) {
      r && g(e), l && l.d(), d && d.d();
    },
  };
}
function sn(u, e, s) {
  let { class: a = void 0 } = e,
    { autoplay: f = !0 } = e,
    { loop: l = !0 } = e,
    { poster: d = void 0 } = e,
    { width: r = void 0 } = e,
    { height: b = void 0 } = e,
    { title: He = void 0 } = e,
    { id: te = void 0 } = e,
    { style: C = '' } = e,
    { webm: ye = void 0 } = e,
    { mp4: ne = void 0 } = e;
  return (
    (u.$$set = (_) => {
      'class' in _ && s(0, (a = _.class)),
        'autoplay' in _ && s(1, (f = _.autoplay)),
        'loop' in _ && s(2, (l = _.loop)),
        'poster' in _ && s(3, (d = _.poster)),
        'width' in _ && s(4, (r = _.width)),
        'height' in _ && s(5, (b = _.height)),
        'title' in _ && s(6, (He = _.title)),
        'id' in _ && s(7, (te = _.id)),
        'style' in _ && s(8, (C = _.style)),
        'webm' in _ && s(9, (ye = _.webm)),
        'mp4' in _ && s(10, (ne = _.mp4));
    }),
    [a, f, l, d, r, b, He, te, C, ye, ne]
  );
}
class an extends Zt {
  constructor(e) {
    super(),
      en(this, e, sn, nn, Xt, {
        class: 0,
        autoplay: 1,
        loop: 2,
        poster: 3,
        width: 4,
        height: 5,
        title: 6,
        id: 7,
        style: 8,
        webm: 9,
        mp4: 10,
      });
  }
}
function ln(u) {
  let e,
    s,
    a,
    f =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"><span class="token function">composer</span> require telegramsdk/botapi</div></div>` +
      '';
  return {
    c() {
      (e = i('pre')), (s = i('code')), (a = new ke(!1)), this.h();
    },
    l(l) {
      e = o(l, 'PRE', {});
      var d = w(e);
      s = o(d, 'CODE', { class: !0 });
      var r = w(s);
      (a = Ee(r, !1)), r.forEach(g), d.forEach(g), this.h();
    },
    h() {
      (a.a = null), c(s, 'class', 'language-bash');
    },
    m(l, d) {
      T(l, e, d), n(e, s), a.m(f, s);
    },
    p: $,
    d(l) {
      l && g(e);
    },
  };
}
function on(u) {
  let e,
    s,
    a,
    f =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="line-diff"> </span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="line-diff"> </span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="line-diff"> </span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="line-diff"> </span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="line-diff"> </span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="line-diff"> </span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="line-diff"> </span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">8</span><span class="line-diff"> </span></div><div class="code-content">&#36;bot-&gt;sendMessage([</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">9</span><span class="line-diff"> </span></div><div class="code-content">    "chat_id" =&gt; YOUR_CHAT_ID,</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">10</span><span class="line-diff"> </span></div><div class="code-content">    "text" =&gt; "My First Telegram bot!"</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">11</span><span class="line-diff"> </span></div><div class="code-content">]);</div></div>` +
      '';
  return {
    c() {
      (e = i('pre')), (s = i('code')), (a = new ke(!1)), this.h();
    },
    l(l) {
      e = o(l, 'PRE', {});
      var d = w(e);
      s = o(d, 'CODE', { class: !0 });
      var r = w(s);
      (a = Ee(r, !1)), r.forEach(g), d.forEach(g), this.h();
    },
    h() {
      (a.a = null), c(s, 'class', 'language-php');
    },
    m(l, d) {
      T(l, e, d), n(e, s), a.m(f, s);
    },
    p: $,
    d(l) {
      l && g(e);
    },
  };
}
function dn(u) {
  let e,
    s,
    a,
    f =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN");</div></div>` +
      '';
  return {
    c() {
      (e = i('pre')), (s = i('code')), (a = new ke(!1)), this.h();
    },
    l(l) {
      e = o(l, 'PRE', {});
      var d = w(e);
      s = o(d, 'CODE', { class: !0 });
      var r = w(s);
      (a = Ee(r, !1)), r.forEach(g), d.forEach(g), this.h();
    },
    h() {
      (a.a = null), c(s, 'class', 'language-php');
    },
    m(l, d) {
      T(l, e, d), n(e, s), a.m(f, s);
    },
    p: $,
    d(l) {
      l && g(e);
    },
  };
}
function cn(u) {
  let e,
    s = `Please remember to replace <code class="inline-code-block">YOUR_BOT_TOKEN</code>
        with the actual bot token that
        <a href="https://t.me/botfather" rel="external">@botfather</a>
         sent you.`,
    a,
    f,
    l = `See &quot;
        <a href="#setup-your-bot-on-telegram">Setup your Bot on Telegram</a>
        &quot; if you don&#39;t know how to do it.`;
  return {
    c() {
      (e = i('p')), (e.innerHTML = s), (a = p()), (f = i('p')), (f.innerHTML = l);
    },
    l(d) {
      (e = o(d, 'P', { 'data-svelte-h': !0 })),
        v(e) !== 'svelte-hsm6p1' && (e.innerHTML = s),
        (a = h(d)),
        (f = o(d, 'P', { 'data-svelte-h': !0 })),
        v(f) !== 'svelte-tgpi32' && (f.innerHTML = l);
    },
    m(d, r) {
      T(d, e, r), T(d, a, r), T(d, f, r);
    },
    p: $,
    d(d) {
      d && (g(e), g(a), g(f));
    },
  };
}
function rn(u) {
  let e,
    s,
    a,
    f =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="line-number">1</span><span class="no-line-diff"></span></div><div class="code-content">&lt;?php</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">2</span><span class="no-line-diff"></span></div><div class="code-content">require_once "vendor/autoload.php";</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">3</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">4</span><span class="no-line-diff"></span></div><div class="code-content">use TelegramSDK\BotAPI\Telegram\Bot;</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">5</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">6</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot = new Bot("YOUR_BOT_TOKEN");</div></div><div class="code-line"><div class="code-linenotation"><span class="line-number">7</span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">8</span><span class="no-line-diff"></span></div><div class="code-content">&#36;bot-&gt;sendMessage([</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">9</span><span class="no-line-diff"></span></div><div class="code-content">   "chat_id" =&gt; YOUR_CHAT_ID,</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">10</span><span class="no-line-diff"></span></div><div class="code-content">   "text" =&gt; "My First Telegram bot!"</div></div><div class="code-line line-highlight"><div class="code-linenotation"><span class="line-number">11</span><span class="no-line-diff"></span></div><div class="code-content">]);</div></div>` +
      '';
  return {
    c() {
      (e = i('pre')), (s = i('code')), (a = new ke(!1)), this.h();
    },
    l(l) {
      e = o(l, 'PRE', {});
      var d = w(e);
      s = o(d, 'CODE', { class: !0 });
      var r = w(s);
      (a = Ee(r, !1)), r.forEach(g), d.forEach(g), this.h();
    },
    h() {
      (a.a = null), c(s, 'class', 'language-php');
    },
    m(l, d) {
      T(l, e, d), n(e, s), a.m(f, s);
    },
    p: $,
    d(l) {
      l && g(e);
    },
  };
}
function fn(u) {
  let e,
    s,
    a,
    f =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">php bot.php</div></div>` +
      '';
  return {
    c() {
      (e = i('pre')), (s = i('code')), (a = new ke(!1)), this.h();
    },
    l(l) {
      e = o(l, 'PRE', {});
      var d = w(e);
      s = o(d, 'CODE', { class: !0 });
      var r = w(s);
      (a = Ee(r, !1)), r.forEach(g), d.forEach(g), this.h();
    },
    h() {
      (a.a = null), c(s, 'class', 'language-bash');
    },
    m(l, d) {
      T(l, e, d), n(e, s), a.m(f, s);
    },
    p: $,
    d(l) {
      l && g(e);
    },
  };
}
function pn(u) {
  let e,
    s = `If you don&#39;t <strong>start the bot you created</strong>
        , the program won&#39;t be able to send you the message.`;
  return {
    c() {
      (e = i('p')), (e.innerHTML = s);
    },
    l(a) {
      (e = o(a, 'P', { 'data-svelte-h': !0 })), v(e) !== 'svelte-77w4v' && (e.innerHTML = s);
    },
    m(a, f) {
      T(a, e, f);
    },
    p: $,
    d(a) {
      a && g(e);
    },
  };
}
function hn(u) {
  let e,
    s,
    a = '<a href="#how-to-build-a-telegram-bot-using-php">How to Build a Telegram Bot Using PHP</a>',
    f,
    l,
    d = `Telegram bots are special accounts that serve as an interface for code running on a server, allowing for a variety
      of functionalities within the Telegram platform. They can be used to automate tasks, provide information, interact
      with users, and even replace entire websites.`,
    r,
    b,
    He = `In this article, we&#39;ll explore how to build a PHP Telegram bot using the <a href="https://core.telegram.org/bots/api" rel="external">Telegram Bot Api</a>
      and
      <a href="https://botapi.racca.me" rel="external">TelegramSDK</a>
      . We&#39;ll walk through the process of setting up the bot, configuring it, and testing it.`,
    te,
    C,
    ye = '<a href="#prerequisites">Prerequisites</a>',
    ne,
    _,
    gt = 'Before we begin, ensure that you have the following:',
    Oe,
    se,
    _t = `<li>PHP installed on your machine. If not, you can download it from the official <a href="https://www.php.net/download" rel="external">PHP website</a>
        .</li> <li>Composer, a dependency manager for PHP. If you don&#39;t have it, you can download it from the official Composer
        website.</li>`,
    De,
    j,
    bt = '<a href="#setup-your-bot-on-telegram">Setup your Bot on Telegram</a>',
    Se,
    ae,
    wt = `The first step is to create a Bot to which users will chat with. Go to <a href="https://t.me/BotFather" rel="external">@botfather</a>
      , start it and type
      <code class="inline-code-block">/newbot</code>`,
    Re,
    Le,
    K,
    qe,
    U,
    Tt = '<a href="#start-coding">Start Coding</a>',
    Ae,
    N,
    Ct = '<a href="#setup-local-envirorment">Setup Local Envirorment</a>',
    je,
    le,
    Ht = "Before actually writing the bot's logic we need to install the lirary we're going to use:",
    Ke,
    ie,
    k,
    Ue,
    oe,
    yt = `<a href="https://github.com/TelegramSDK/BotAPI" rel="external">telegramsdk/botapi</a>
      is a light weight library that lets us access the
      <a href="https://core.telegram.org" rel="external">Telegram API</a>
       easly and freely.`,
    Ne,
    Y,
    Lt = '<a href="#write-the-logic">Write the Logic</a>',
    Ye,
    de,
    Mt = "It's time for the fun part!",
    ze,
    ce,
    xt = `All you need to do is create a new file named <code class="inline-code-block">bot.php</code>
      (
      <em>or whatever you like</em>
      ) and write this code:`,
    Ve,
    E,
    z,
    Pt = 'bot.php',
    Fe,
    I,
    We,
    V,
    $t = '<a href="#what-am-i-doing">🤔 What Am I Doing?</a>',
    Ge,
    re,
    kt = `If this is your first approach to Telegram or to <a href="https://github.com/TelegramSDK/BotAPI" rel="external">telegramsdk/botapi</a>
      , you may wonder:`,
    Qe,
    fe,
    Et = '<p>What am I Doing?</p>',
    Je,
    pe,
    It = 'Otherwise you can skip this explanation.',
    Xe,
    he,
    Bt = "Let's have a look a the code you've just written:",
    Ze,
    F,
    Ot = '<a href="#instancing-a-new-bot">Instancing a new Bot</a>',
    et,
    ue,
    Dt = `In this lines we&#39;re importing the library from the <code class="inline-code-block">vendor/</code>
       directory and instancing a new Bot object.`,
    tt,
    B,
    W,
    St = 'bot.php',
    nt,
    O,
    st,
    D,
    at,
    G,
    Rt = '<a href="#sending-a-message">Sending a Message</a>',
    lt,
    ve,
    qt = `The lines are an API call to the Telegram <code class="inline-code-block">sendMessage</code>
       method.`,
    it,
    me,
    At = 'This call will send a message to the specified user saying "My First Telegram bot!"',
    ot,
    S,
    Q,
    jt = 'bot.php',
    dt,
    R,
    ct,
    ge,
    Kt = `Please remember to replace <code class="inline-code-block">YOUR_CHAT_ID</code>
       with your actual id.`,
    rt,
    _e,
    Ut = `If you don&#39;t know how to get your char id start, <a href="https://t.me/userinfobot" rel="external">@userinfobot</a>
       and get your id.`,
    ft,
    J,
    Nt = '<a href="#test-the-bot">Test the bot</a>',
    pt,
    be,
    Yt = 'Testing the bot is super easy, you just need to start the file!',
    ht,
    we,
    q,
    ut,
    A,
    vt,
    Te,
    zt = "That's it! You now have a fully working telegram bot.",
    mt,
    Ce,
    Vt = '<a href="/create-an-echo-bot">Or do you?</a>',
    Ie;
  return (
    (K = new an({
      props: {
        autoplay: !0,
        loop: !0,
        style: 'max-height: 700px !important;',
        title: 'BotFather Tutorial',
        mp4: '/create-your-first-bot/botfather.mp4',
      },
    })),
    (k = new $e({ props: { $$slots: { default: [ln] }, $$scope: { ctx: u } } })),
    (I = new $e({ props: { $$slots: { default: [on] }, $$scope: { ctx: u } } })),
    (O = new $e({ props: { $$slots: { default: [dn] }, $$scope: { ctx: u } } })),
    (D = new Gt({
      props: { statusType: 'info', statusName: 'Replace the Token!', $$slots: { default: [cn] }, $$scope: { ctx: u } },
    })),
    (R = new $e({ props: { $$slots: { default: [rn] }, $$scope: { ctx: u } } })),
    (q = new $e({ props: { $$slots: { default: [fn] }, $$scope: { ctx: u } } })),
    (A = new Gt({
      props: { statusType: 'info', statusName: 'Start the Bot', $$slots: { default: [pn] }, $$scope: { ctx: u } },
    })),
    {
      c() {
        (e = i('article')),
          (s = i('h1')),
          (s.innerHTML = a),
          (f = p()),
          (l = i('p')),
          (l.textContent = d),
          (r = p()),
          (b = i('p')),
          (b.innerHTML = He),
          (te = p()),
          (C = i('h2')),
          (C.innerHTML = ye),
          (ne = p()),
          (_ = i('p')),
          (_.textContent = gt),
          (Oe = p()),
          (se = i('ul')),
          (se.innerHTML = _t),
          (De = p()),
          (j = i('h1')),
          (j.innerHTML = bt),
          (Se = p()),
          (ae = i('p')),
          (ae.innerHTML = wt),
          (Re = p()),
          (Le = i('p')),
          H(K.$$.fragment),
          (qe = p()),
          (U = i('h1')),
          (U.innerHTML = Tt),
          (Ae = p()),
          (N = i('h2')),
          (N.innerHTML = Ct),
          (je = p()),
          (le = i('p')),
          (le.textContent = Ht),
          (Ke = p()),
          (ie = i('div')),
          H(k.$$.fragment),
          (Ue = p()),
          (oe = i('p')),
          (oe.innerHTML = yt),
          (Ne = p()),
          (Y = i('h2')),
          (Y.innerHTML = Lt),
          (Ye = p()),
          (de = i('p')),
          (de.textContent = Mt),
          (ze = p()),
          (ce = i('p')),
          (ce.innerHTML = xt),
          (Ve = p()),
          (E = i('div')),
          (z = i('h2')),
          (z.textContent = Pt),
          (Fe = p()),
          H(I.$$.fragment),
          (We = p()),
          (V = i('h3')),
          (V.innerHTML = $t),
          (Ge = p()),
          (re = i('p')),
          (re.innerHTML = kt),
          (Qe = p()),
          (fe = i('blockquote')),
          (fe.innerHTML = Et),
          (Je = p()),
          (pe = i('p')),
          (pe.textContent = It),
          (Xe = p()),
          (he = i('p')),
          (he.textContent = Bt),
          (Ze = p()),
          (F = i('h4')),
          (F.innerHTML = Ot),
          (et = p()),
          (ue = i('p')),
          (ue.innerHTML = Dt),
          (tt = p()),
          (B = i('div')),
          (W = i('h2')),
          (W.textContent = St),
          (nt = p()),
          H(O.$$.fragment),
          (st = p()),
          H(D.$$.fragment),
          (at = p()),
          (G = i('h4')),
          (G.innerHTML = Rt),
          (lt = p()),
          (ve = i('p')),
          (ve.innerHTML = qt),
          (it = p()),
          (me = i('p')),
          (me.textContent = At),
          (ot = p()),
          (S = i('div')),
          (Q = i('h2')),
          (Q.textContent = jt),
          (dt = p()),
          H(R.$$.fragment),
          (ct = p()),
          (ge = i('p')),
          (ge.innerHTML = Kt),
          (rt = p()),
          (_e = i('p')),
          (_e.innerHTML = Ut),
          (ft = p()),
          (J = i('h2')),
          (J.innerHTML = Nt),
          (pt = p()),
          (be = i('p')),
          (be.textContent = Yt),
          (ht = p()),
          (we = i('div')),
          H(q.$$.fragment),
          (ut = p()),
          H(A.$$.fragment),
          (vt = p()),
          (Te = i('p')),
          (Te.textContent = zt),
          (mt = p()),
          (Ce = i('p')),
          (Ce.innerHTML = Vt),
          this.h();
      },
      l(m) {
        e = o(m, 'ARTICLE', { slot: !0 });
        var t = w(e);
        (s = o(t, 'H1', { id: !0, 'data-svelte-h': !0 })),
          v(s) !== 'svelte-kfj2pa' && (s.innerHTML = a),
          (f = h(t)),
          (l = o(t, 'P', { 'data-svelte-h': !0 })),
          v(l) !== 'svelte-sok42x' && (l.textContent = d),
          (r = h(t)),
          (b = o(t, 'P', { 'data-svelte-h': !0 })),
          v(b) !== 'svelte-1mvfnz8' && (b.innerHTML = He),
          (te = h(t)),
          (C = o(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
          v(C) !== 'svelte-1jtdtp7' && (C.innerHTML = ye),
          (ne = h(t)),
          (_ = o(t, 'P', { 'data-svelte-h': !0 })),
          v(_) !== 'svelte-18lisrk' && (_.textContent = gt),
          (Oe = h(t)),
          (se = o(t, 'UL', { 'data-svelte-h': !0 })),
          v(se) !== 'svelte-7dhuzh' && (se.innerHTML = _t),
          (De = h(t)),
          (j = o(t, 'H1', { id: !0, 'data-svelte-h': !0 })),
          v(j) !== 'svelte-5i8myj' && (j.innerHTML = bt),
          (Se = h(t)),
          (ae = o(t, 'P', { 'data-svelte-h': !0 })),
          v(ae) !== 'svelte-kk1aig' && (ae.innerHTML = wt),
          (Re = h(t)),
          (Le = o(t, 'P', {}));
        var Me = w(Le);
        y(K.$$.fragment, Me),
          Me.forEach(g),
          (qe = h(t)),
          (U = o(t, 'H1', { id: !0, 'data-svelte-h': !0 })),
          v(U) !== 'svelte-l3x5is' && (U.innerHTML = Tt),
          (Ae = h(t)),
          (N = o(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
          v(N) !== 'svelte-1qzpcvn' && (N.innerHTML = Ct),
          (je = h(t)),
          (le = o(t, 'P', { 'data-svelte-h': !0 })),
          v(le) !== 'svelte-1nyn1ge' && (le.textContent = Ht),
          (Ke = h(t)),
          (ie = o(t, 'DIV', { class: !0 }));
        var xe = w(ie);
        y(k.$$.fragment, xe),
          xe.forEach(g),
          (Ue = h(t)),
          (oe = o(t, 'P', { 'data-svelte-h': !0 })),
          v(oe) !== 'svelte-1afk8n2' && (oe.innerHTML = yt),
          (Ne = h(t)),
          (Y = o(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
          v(Y) !== 'svelte-j5iqj2' && (Y.innerHTML = Lt),
          (Ye = h(t)),
          (de = o(t, 'P', { 'data-svelte-h': !0 })),
          v(de) !== 'svelte-19s1fn8' && (de.textContent = Mt),
          (ze = h(t)),
          (ce = o(t, 'P', { 'data-svelte-h': !0 })),
          v(ce) !== 'svelte-xvel92' && (ce.innerHTML = xt),
          (Ve = h(t)),
          (E = o(t, 'DIV', { class: !0 }));
        var X = w(E);
        (z = o(X, 'H2', { class: !0, 'data-svelte-h': !0 })),
          v(z) !== 'svelte-8ulcs' && (z.textContent = Pt),
          (Fe = h(X)),
          y(I.$$.fragment, X),
          X.forEach(g),
          (We = h(t)),
          (V = o(t, 'H3', { id: !0, 'data-svelte-h': !0 })),
          v(V) !== 'svelte-wfdauz' && (V.innerHTML = $t),
          (Ge = h(t)),
          (re = o(t, 'P', { 'data-svelte-h': !0 })),
          v(re) !== 'svelte-1sm8gg1' && (re.innerHTML = kt),
          (Qe = h(t)),
          (fe = o(t, 'BLOCKQUOTE', { 'data-svelte-h': !0 })),
          v(fe) !== 'svelte-1b7p5ea' && (fe.innerHTML = Et),
          (Je = h(t)),
          (pe = o(t, 'P', { 'data-svelte-h': !0 })),
          v(pe) !== 'svelte-11t4iej' && (pe.textContent = It),
          (Xe = h(t)),
          (he = o(t, 'P', { 'data-svelte-h': !0 })),
          v(he) !== 'svelte-1robbe2' && (he.textContent = Bt),
          (Ze = h(t)),
          (F = o(t, 'H4', { id: !0, 'data-svelte-h': !0 })),
          v(F) !== 'svelte-19sgisk' && (F.innerHTML = Ot),
          (et = h(t)),
          (ue = o(t, 'P', { 'data-svelte-h': !0 })),
          v(ue) !== 'svelte-bgg7ri' && (ue.innerHTML = Dt),
          (tt = h(t)),
          (B = o(t, 'DIV', { class: !0 }));
        var Z = w(B);
        (W = o(Z, 'H2', { class: !0, 'data-svelte-h': !0 })),
          v(W) !== 'svelte-8ulcs' && (W.textContent = St),
          (nt = h(Z)),
          y(O.$$.fragment, Z),
          Z.forEach(g),
          (st = h(t)),
          y(D.$$.fragment, t),
          (at = h(t)),
          (G = o(t, 'H4', { id: !0, 'data-svelte-h': !0 })),
          v(G) !== 'svelte-noouy6' && (G.innerHTML = Rt),
          (lt = h(t)),
          (ve = o(t, 'P', { 'data-svelte-h': !0 })),
          v(ve) !== 'svelte-1xbv9dx' && (ve.innerHTML = qt),
          (it = h(t)),
          (me = o(t, 'P', { 'data-svelte-h': !0 })),
          v(me) !== 'svelte-ddrbqz' && (me.textContent = At),
          (ot = h(t)),
          (S = o(t, 'DIV', { class: !0 }));
        var ee = w(S);
        (Q = o(ee, 'H2', { class: !0, 'data-svelte-h': !0 })),
          v(Q) !== 'svelte-8ulcs' && (Q.textContent = jt),
          (dt = h(ee)),
          y(R.$$.fragment, ee),
          ee.forEach(g),
          (ct = h(t)),
          (ge = o(t, 'P', { 'data-svelte-h': !0 })),
          v(ge) !== 'svelte-13k2w7' && (ge.innerHTML = Kt),
          (rt = h(t)),
          (_e = o(t, 'P', { 'data-svelte-h': !0 })),
          v(_e) !== 'svelte-1r5iyp2' && (_e.innerHTML = Ut),
          (ft = h(t)),
          (J = o(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
          v(J) !== 'svelte-16pzhhm' && (J.innerHTML = Nt),
          (pt = h(t)),
          (be = o(t, 'P', { 'data-svelte-h': !0 })),
          v(be) !== 'svelte-ja0j1d' && (be.textContent = Yt),
          (ht = h(t)),
          (we = o(t, 'DIV', { class: !0 }));
        var Pe = w(we);
        y(q.$$.fragment, Pe),
          Pe.forEach(g),
          (ut = h(t)),
          y(A.$$.fragment, t),
          (vt = h(t)),
          (Te = o(t, 'P', { 'data-svelte-h': !0 })),
          v(Te) !== 'svelte-aygabv' && (Te.textContent = zt),
          (mt = h(t)),
          (Ce = o(t, 'P', { 'data-svelte-h': !0 })),
          v(Ce) !== 'svelte-1gtzbou' && (Ce.innerHTML = Vt),
          t.forEach(g),
          this.h();
      },
      h() {
        c(s, 'id', 'how-to-build-a-telegram-bot-using-php'),
          c(C, 'id', 'prerequisites'),
          c(j, 'id', 'setup-your-bot-on-telegram'),
          c(U, 'id', 'start-coding'),
          c(N, 'id', 'setup-local-envirorment'),
          c(ie, 'class', 'code-block'),
          c(Y, 'id', 'write-the-logic'),
          c(z, 'class', 'code-title'),
          c(E, 'class', 'code-block titled showLineNumber'),
          c(V, 'id', 'what-am-i-doing'),
          c(F, 'id', 'instancing-a-new-bot'),
          c(W, 'class', 'code-title'),
          c(B, 'class', 'code-block titled showLineNumber'),
          c(G, 'id', 'sending-a-message'),
          c(Q, 'class', 'code-title'),
          c(S, 'class', 'code-block titled showLineNumber'),
          c(J, 'id', 'test-the-bot'),
          c(we, 'class', 'code-block'),
          c(e, 'slot', 'post_content');
      },
      m(m, t) {
        T(m, e, t),
          n(e, s),
          n(e, f),
          n(e, l),
          n(e, r),
          n(e, b),
          n(e, te),
          n(e, C),
          n(e, ne),
          n(e, _),
          n(e, Oe),
          n(e, se),
          n(e, De),
          n(e, j),
          n(e, Se),
          n(e, ae),
          n(e, Re),
          n(e, Le),
          L(K, Le, null),
          n(e, qe),
          n(e, U),
          n(e, Ae),
          n(e, N),
          n(e, je),
          n(e, le),
          n(e, Ke),
          n(e, ie),
          L(k, ie, null),
          n(e, Ue),
          n(e, oe),
          n(e, Ne),
          n(e, Y),
          n(e, Ye),
          n(e, de),
          n(e, ze),
          n(e, ce),
          n(e, Ve),
          n(e, E),
          n(E, z),
          n(E, Fe),
          L(I, E, null),
          n(e, We),
          n(e, V),
          n(e, Ge),
          n(e, re),
          n(e, Qe),
          n(e, fe),
          n(e, Je),
          n(e, pe),
          n(e, Xe),
          n(e, he),
          n(e, Ze),
          n(e, F),
          n(e, et),
          n(e, ue),
          n(e, tt),
          n(e, B),
          n(B, W),
          n(B, nt),
          L(O, B, null),
          n(e, st),
          L(D, e, null),
          n(e, at),
          n(e, G),
          n(e, lt),
          n(e, ve),
          n(e, it),
          n(e, me),
          n(e, ot),
          n(e, S),
          n(S, Q),
          n(S, dt),
          L(R, S, null),
          n(e, ct),
          n(e, ge),
          n(e, rt),
          n(e, _e),
          n(e, ft),
          n(e, J),
          n(e, pt),
          n(e, be),
          n(e, ht),
          n(e, we),
          L(q, we, null),
          n(e, ut),
          L(A, e, null),
          n(e, vt),
          n(e, Te),
          n(e, mt),
          n(e, Ce),
          (Ie = !0);
      },
      p(m, t) {
        const Me = {};
        t & 1 && (Me.$$scope = { dirty: t, ctx: m }), k.$set(Me);
        const xe = {};
        t & 1 && (xe.$$scope = { dirty: t, ctx: m }), I.$set(xe);
        const X = {};
        t & 1 && (X.$$scope = { dirty: t, ctx: m }), O.$set(X);
        const Z = {};
        t & 1 && (Z.$$scope = { dirty: t, ctx: m }), D.$set(Z);
        const ee = {};
        t & 1 && (ee.$$scope = { dirty: t, ctx: m }), R.$set(ee);
        const Pe = {};
        t & 1 && (Pe.$$scope = { dirty: t, ctx: m }), q.$set(Pe);
        const Ft = {};
        t & 1 && (Ft.$$scope = { dirty: t, ctx: m }), A.$set(Ft);
      },
      i(m) {
        Ie ||
          (M(K.$$.fragment, m),
          M(k.$$.fragment, m),
          M(I.$$.fragment, m),
          M(O.$$.fragment, m),
          M(D.$$.fragment, m),
          M(R.$$.fragment, m),
          M(q.$$.fragment, m),
          M(A.$$.fragment, m),
          (Ie = !0));
      },
      o(m) {
        x(K.$$.fragment, m),
          x(k.$$.fragment, m),
          x(I.$$.fragment, m),
          x(O.$$.fragment, m),
          x(D.$$.fragment, m),
          x(R.$$.fragment, m),
          x(q.$$.fragment, m),
          x(A.$$.fragment, m),
          (Ie = !1);
      },
      d(m) {
        m && g(e), P(K), P(k), P(I), P(O), P(D), P(R), P(q), P(A);
      },
    }
  );
}
function un(u) {
  let e, s;
  return (
    (e = new tn({ props: { $$slots: { post_content: [hn] }, $$scope: { ctx: u } } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(a) {
        y(e.$$.fragment, a);
      },
      m(a, f) {
        L(e, a, f), (s = !0);
      },
      p(a, [f]) {
        const l = {};
        f & 1 && (l.$$scope = { dirty: f, ctx: a }), e.$set(l);
      },
      i(a) {
        s || (M(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        x(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        P(e, a);
      },
    }
  );
}
class Tn extends Zt {
  constructor(e) {
    super(), en(this, e, null, un, Xt, {});
  }
}
export { Tn as component };