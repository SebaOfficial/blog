import {
  s as Ln,
  f as n,
  g as l,
  R as hl,
  j as v,
  i as Qt,
  v as Xt,
  d as g,
  l as m,
  h as x,
  m as f,
  u as t,
  n as cl,
  a as o,
  N as i,
  c as r,
  H as gl,
  x as pl,
} from '../chunks/scheduler.b261eb3c.js';
import { S as En, i as bn, b as E, d as b, m as H, a as M, t as G, e as S } from '../chunks/index.5ccb46b4.js';
import { P as vl } from '../chunks/post.06d5c26b.js';
import '../chunks/image_banner.8ab919dd.js';
import { C as xl } from '../chunks/code_copy.99453248.js';
const $l = '' + new URL('../assets/right-arrow.3907c376.svg', import.meta.url).href;
function Cl($) {
  let e, u;
  return {
    c() {
      (e = n('img')), this.h();
    },
    l(s) {
      (e = l(s, 'IMG', { src: !0, width: !0, height: !0, color: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      hl(e.src, (u = $l)) || v(e, 'src', u),
        v(e, 'width', '18'),
        v(e, 'height', '18'),
        v(e, 'color', '#fff'),
        v(e, 'alt', $[0]),
        v(e, 'class', 'svelte-zwpd2c');
    },
    m(s, h) {
      Qt(s, e, h);
    },
    p(s, [h]) {
      h & 1 && v(e, 'alt', s[0]);
    },
    i: Xt,
    o: Xt,
    d(s) {
      s && g(e);
    },
  };
}
function _l($, e, u) {
  let { text: s = 'and then' } = e;
  return (
    ($.$$set = (h) => {
      'text' in h && u(0, (s = h.text));
    }),
    [s]
  );
}
class ut extends En {
  constructor(e) {
    super(), bn(this, e, _l, Cl, Ln, { text: 0 });
  }
}
function yl($) {
  let e, u;
  return {
    c() {
      (e = n('span')), (u = m($[0]));
    },
    l(s) {
      e = l(s, 'SPAN', {});
      var h = x(e);
      (u = f(h, $[0])), h.forEach(g);
    },
    m(s, h) {
      Qt(s, e, h), t(e, u);
    },
    p(s, [h]) {
      h & 1 && cl(u, s[0]);
    },
    i: Xt,
    o: Xt,
    d(s) {
      s && g(e);
    },
  };
}
function wl($, e, u) {
  let { email: s = 'email@example.com' } = e;
  return (
    ($.$$set = (h) => {
      'email' in h && u(0, (s = h.email));
    }),
    [s]
  );
}
class Kt extends En {
  constructor(e) {
    super(), bn(this, e, wl, yl, Ln, { email: 0 });
  }
}
function Tl($) {
  let e,
    u,
    s,
    h =
      String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">"v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all"</div></div>` +
      '';
  return {
    c() {
      (e = n('pre')), (u = n('code')), (s = new gl(!1)), this.h();
    },
    l(C) {
      e = l(C, 'PRE', {});
      var B = x(e);
      u = l(B, 'CODE', { class: !0 });
      var mt = x(u);
      (s = pl(mt, !1)), mt.forEach(g), B.forEach(g), this.h();
    },
    h() {
      (s.a = null), v(u, 'class', 'language-txt');
    },
    m(C, B) {
      Qt(C, e, B), t(e, u), s.m(h, u);
    },
    p: Xt,
    d(C) {
      C && g(e);
    },
  };
}
function Ll($) {
  let e,
    u,
    s = '<a href="#create-a-custom-email-address-for-free">Create a Custom Email Address for Free</a>',
    h,
    C,
    B = `In the digital age, having a custom email address not only adds a professional touch to your communication but
      also enhances brand identity. In this tutorial, we'll walk you through the process of setting up a custom
      email address using Cloudflare Email Routing and Gmail SMTP. By the end of this guide, you'll be able to send
      and receive emails using your own domain, all while leveraging the power and reliability of Gmail.`,
    mt,
    D,
    Hn = '<a href="#prerequisites">Prerequisites</a>',
    Zt,
    ft,
    Mn = 'Before we dive into the steps, make sure you have the following prerequisites in place:',
    te,
    ht,
    Gn =
      '<li>An active Gmail account.</li> <li>A domain registered with Cloudflare.</li> <li>Access to your domain&#39;s DNS settings on Cloudflare.</li>',
    ee,
    U,
    Sn = '<a href="#setup-your-google-account">Setup Your Google Account</a>',
    ne,
    Y,
    Rn = '<a href="#enable-2-factor-authentification">Enable 2 Factor Authentification</a>',
    le,
    ct,
    An = 'If you already have enabled two factor authentification you can safely skip this step.',
    ae,
    gt,
    qn = `<li>Open your <a href="https://myaccount.google.com/" rel="external">Google Account</a>
        ;</li> <li>Select &quot;Security&quot; in the navigation panel;</li> <li>Under “Signing in to Google,” select&quot; 2-Step Verification&quot;, then &quot;Get started&quot;;</li> <li>Follow the on-screen steps.</li>`,
    oe,
    V,
    On = '<a href="#create-an-app-password">Create an App Password</a>',
    re,
    pt,
    Pn = `An app password is a 16-digit passcode that gives a less secure app or device permission to access your Google
      Account.`,
    se,
    vt,
    kn = `<li>Open the <a href="https://myaccount.google.com/apppasswords" rel="external">App Passwords console</a>
         on your Google account;</li> <li>Type a name for your applicatiom <em>i.e. &quot;My Custom Email&quot;</em></li> <li>Safely store the 16-digit passcode, you&#39;ll need this later.</li>`,
    ie,
    W,
    Nn = '<a href="#enable-cloudflare-and-39-s-email-routing">Enable Cloudflare&#39;s Email Routing</a>',
    de,
    xt,
    In = `Emails that are routed through Cloudflare to your preferred email inbox, benefit from enhanced security, spam
      filtering, and improved deliverability. Cloudflare Email Routing acts as a protective layer for your email
      infrastructure, shielding it from potential threats and optimizing the overall email experience.`,
    ue,
    _,
    $t,
    zn = `Go to the <strong><a href="https://dash.cloudflare.com" rel="external">Cloudflare Dashboard</a></strong>
         and select your domain;`,
    me,
    y,
    fe,
    Ct,
    jn = 'Email',
    he,
    X,
    ce,
    _t,
    Fn = 'Email Routing',
    ge,
    J,
    pe,
    yt,
    Bn = 'Get Started',
    ve,
    xe,
    k,
    $e,
    wt,
    Dn = 'Custom Address',
    Ce,
    Tt,
    _e,
    K,
    ye,
    we,
    N,
    Te,
    Lt,
    Un = 'Destination Address',
    Le,
    Et,
    Ee,
    Q,
    be,
    He,
    I,
    Me,
    bt,
    Yn = 'Create and Continue',
    Ge,
    Z,
    Se,
    Re,
    Ht,
    Vn = `Go to the <strong>DNS</strong>
         section of the dashboard and add a new TXT record with the following content:`,
    Ae,
    Mt,
    z,
    qe,
    tt,
    Wn = '<a href="#add-your-cloudflare-routed-email-to-gmail">Add Your Cloudflare-Routed Email to Gmail</a>',
    Oe,
    Gt,
    Xn = 'Once did all the previous we can finally add the custom address to gmail.',
    Pe,
    w,
    T,
    ke,
    j,
    Jn = 'Gmail Account',
    Ne,
    et,
    Ie,
    St,
    Kn = 'Settings',
    ze,
    nt,
    je,
    Rt,
    Qn = 'Accounts',
    Fe,
    Be,
    At,
    Zn = `Select <strong>Add another email address</strong>
        under
        <strong>Send Mail As</strong>
        ;`,
    De,
    O,
    Ue,
    qt,
    Ye,
    lt,
    Ve,
    at,
    We,
    Ot,
    tl = 'Treat as an alias',
    Xe,
    Je,
    c,
    Ke,
    Qe,
    Ze,
    Pt,
    el = 'SMTP Server',
    tn,
    en,
    nn,
    kt,
    nl = 'Port',
    ln,
    an,
    on,
    Nt,
    ll = 'Username',
    rn,
    It,
    sn,
    ot,
    dn,
    un,
    mn,
    zt,
    al = 'Password',
    fn,
    rt,
    ol = 'the app password',
    hn,
    P,
    cn,
    jt,
    rl = 'TLS',
    gn,
    st,
    pn,
    Ft,
    sl = 'Add Account',
    vn,
    Bt,
    il = "Confirm the email address with the code Google's sent you to your gmail account.",
    xn,
    it,
    dl = '<a href="#enjoy">Enjoy</a>',
    $n,
    Dt,
    ul = `You now have a fully working email that is routed through Cloudflare to receive emails and uses Google's SMTP
      server to send them.`,
    Cn,
    Ut,
    ml = 'Whenever you send a new email via GMail, make sure to switch the sender accordingly to your preferences.',
    Jt;
  return (
    (X = new ut({})),
    (J = new ut({ props: { text: 'then select' } })),
    (K = new Kt({ props: { email: 'cool-email@example.com' } })),
    (Q = new Kt({ props: { email: 'my-personal-email@gmail.com' } })),
    (Z = new ut({})),
    (z = new xl({ props: { $$slots: { default: [Tl] }, $$scope: { ctx: $ } } })),
    (et = new ut({ props: { text: 'then click on' } })),
    (nt = new ut({ props: { text: 'then select' } })),
    (lt = new Kt({ props: { email: 'cool-email@example.com' } })),
    (at = new ut({})),
    (ot = new Kt({ props: { email: 'my-personal-email@gmail.com' } })),
    (st = new ut({})),
    {
      c() {
        (e = n('article')),
          (u = n('h1')),
          (u.innerHTML = s),
          (h = o()),
          (C = n('p')),
          (C.textContent = B),
          (mt = o()),
          (D = n('h2')),
          (D.innerHTML = Hn),
          (Zt = o()),
          (ft = n('p')),
          (ft.textContent = Mn),
          (te = o()),
          (ht = n('ul')),
          (ht.innerHTML = Gn),
          (ee = o()),
          (U = n('h1')),
          (U.innerHTML = Sn),
          (ne = o()),
          (Y = n('h2')),
          (Y.innerHTML = Rn),
          (le = o()),
          (ct = n('p')),
          (ct.textContent = An),
          (ae = o()),
          (gt = n('ol')),
          (gt.innerHTML = qn),
          (oe = o()),
          (V = n('h2')),
          (V.innerHTML = On),
          (re = o()),
          (pt = n('p')),
          (pt.textContent = Pn),
          (se = o()),
          (vt = n('ol')),
          (vt.innerHTML = kn),
          (ie = o()),
          (W = n('h1')),
          (W.innerHTML = Nn),
          (de = o()),
          (xt = n('p')),
          (xt.textContent = In),
          (ue = o()),
          (_ = n('ol')),
          ($t = n('li')),
          ($t.innerHTML = zn),
          (me = o()),
          (y = n('li')),
          (fe = m('Go to ')),
          (Ct = n('strong')),
          (Ct.textContent = jn),
          (he = o()),
          E(X.$$.fragment),
          (ce = o()),
          (_t = n('strong')),
          (_t.textContent = Fn),
          (ge = o()),
          E(J.$$.fragment),
          (pe = o()),
          (yt = n('strong')),
          (yt.textContent = Bn),
          (ve = m(`
        ;`)),
          (xe = o()),
          (k = n('li')),
          ($e = m('Enter the custom email address in ')),
          (wt = n('strong')),
          (wt.textContent = Dn),
          (Ce = m(`
        (
        `)),
          (Tt = n('em')),
          (_e = m('i.e. ')),
          E(K.$$.fragment),
          (ye = m(`
        );`)),
          (we = o()),
          (N = n('li')),
          (Te = m('Enter the email address you want your emails to be forwarded to in ')),
          (Lt = n('strong')),
          (Lt.textContent = Un),
          (Le = m(`
        (
        `)),
          (Et = n('em')),
          (Ee = m('i.e. ')),
          E(Q.$$.fragment),
          (be = m(`
        );`)),
          (He = o()),
          (I = n('li')),
          (Me = m('Select ')),
          (bt = n('strong')),
          (bt.textContent = Yn),
          (Ge = o()),
          E(Z.$$.fragment),
          (Se = m(' follow the instruction sent to your gmail address.')),
          (Re = o()),
          (Ht = n('li')),
          (Ht.innerHTML = Vn),
          (Ae = o()),
          (Mt = n('div')),
          E(z.$$.fragment),
          (qe = o()),
          (tt = n('h1')),
          (tt.innerHTML = Wn),
          (Oe = o()),
          (Gt = n('p')),
          (Gt.textContent = Xn),
          (Pe = o()),
          (w = n('ol')),
          (T = n('li')),
          (ke = m('Go to your ')),
          (j = n('a')),
          (j.textContent = Jn),
          (Ne = o()),
          E(et.$$.fragment),
          (Ie = o()),
          (St = n('strong')),
          (St.textContent = Kn),
          (ze = o()),
          E(nt.$$.fragment),
          (je = o()),
          (Rt = n('strong')),
          (Rt.textContent = Qn),
          (Fe = m(`
        ;`)),
          (Be = o()),
          (At = n('li')),
          (At.innerHTML = Zn),
          (De = o()),
          (O = n('li')),
          (Ue = m(`Fill the form with the name of the email and the Cloudflare-routed email (
        `)),
          (qt = n('em')),
          (Ye = m('i.e. ')),
          E(lt.$$.fragment),
          (Ve = m(`
        ) `)),
          E(at.$$.fragment),
          (We = m(` untick "
        `)),
          (Ot = n('strong')),
          (Ot.textContent = tl),
          (Xe = m(`
        ";`)),
          (Je = o()),
          (c = n('li')),
          (Ke = m(`Fill the next form with the following information:
        `)),
          (Qe = n('br')),
          (Ze = o()),
          (Pt = n('strong')),
          (Pt.textContent = el),
          (tn = m(`
        : smtp.gmail.com
        `)),
          (en = n('br')),
          (nn = o()),
          (kt = n('strong')),
          (kt.textContent = nl),
          (ln = m(`
        : 587
        `)),
          (an = n('br')),
          (on = o()),
          (Nt = n('strong')),
          (Nt.textContent = ll),
          (rn = m(`
        : your gmail address (
        `)),
          (It = n('em')),
          (sn = m('i.e. ')),
          E(ot.$$.fragment),
          (dn = m(`
        )
        `)),
          (un = n('br')),
          (mn = o()),
          (zt = n('strong')),
          (zt.textContent = al),
          (fn = m(`
        :
        `)),
          (rt = n('a')),
          (rt.textContent = ol),
          (hn = o()),
          (P = n('li')),
          (cn = m('Leave ')),
          (jt = n('strong')),
          (jt.textContent = rl),
          (gn = m(`
        enabled `)),
          E(st.$$.fragment),
          (pn = m(` click
        `)),
          (Ft = n('strong')),
          (Ft.textContent = sl),
          (vn = o()),
          (Bt = n('li')),
          (Bt.textContent = il),
          (xn = o()),
          (it = n('h1')),
          (it.innerHTML = dl),
          ($n = o()),
          (Dt = n('p')),
          (Dt.textContent = ul),
          (Cn = o()),
          (Ut = n('p')),
          (Ut.textContent = ml),
          this.h();
      },
      l(d) {
        e = l(d, 'ARTICLE', { slot: !0 });
        var a = x(e);
        (u = l(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          i(u) !== 'svelte-umkbbz' && (u.innerHTML = s),
          (h = r(a)),
          (C = l(a, 'P', { 'data-svelte-h': !0 })),
          i(C) !== 'svelte-16cp50v' && (C.textContent = B),
          (mt = r(a)),
          (D = l(a, 'H2', { id: !0, 'data-svelte-h': !0 })),
          i(D) !== 'svelte-1jtdtp7' && (D.innerHTML = Hn),
          (Zt = r(a)),
          (ft = l(a, 'P', { 'data-svelte-h': !0 })),
          i(ft) !== 'svelte-1e76f9m' && (ft.textContent = Mn),
          (te = r(a)),
          (ht = l(a, 'UL', { 'data-svelte-h': !0 })),
          i(ht) !== 'svelte-1cirgse' && (ht.innerHTML = Gn),
          (ee = r(a)),
          (U = l(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          i(U) !== 'svelte-1c95l0q' && (U.innerHTML = Sn),
          (ne = r(a)),
          (Y = l(a, 'H2', { id: !0, 'data-svelte-h': !0 })),
          i(Y) !== 'svelte-1bsze8r' && (Y.innerHTML = Rn),
          (le = r(a)),
          (ct = l(a, 'P', { 'data-svelte-h': !0 })),
          i(ct) !== 'svelte-qbs4ax' && (ct.textContent = An),
          (ae = r(a)),
          (gt = l(a, 'OL', { 'data-svelte-h': !0 })),
          i(gt) !== 'svelte-51vtbd' && (gt.innerHTML = qn),
          (oe = r(a)),
          (V = l(a, 'H2', { id: !0, 'data-svelte-h': !0 })),
          i(V) !== 'svelte-qmlgfd' && (V.innerHTML = On),
          (re = r(a)),
          (pt = l(a, 'P', { 'data-svelte-h': !0 })),
          i(pt) !== 'svelte-1a1kw7i' && (pt.textContent = Pn),
          (se = r(a)),
          (vt = l(a, 'OL', { 'data-svelte-h': !0 })),
          i(vt) !== 'svelte-3ht6di' && (vt.innerHTML = kn),
          (ie = r(a)),
          (W = l(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          i(W) !== 'svelte-rqtpip' && (W.innerHTML = Nn),
          (de = r(a)),
          (xt = l(a, 'P', { 'data-svelte-h': !0 })),
          i(xt) !== 'svelte-kz1qhe' && (xt.textContent = In),
          (ue = r(a)),
          (_ = l(a, 'OL', {}));
        var L = x(_);
        ($t = l(L, 'LI', { 'data-svelte-h': !0 })),
          i($t) !== 'svelte-1becnl0' && ($t.innerHTML = zn),
          (me = r(L)),
          (y = l(L, 'LI', {}));
        var R = x(y);
        (fe = f(R, 'Go to ')),
          (Ct = l(R, 'STRONG', { 'data-svelte-h': !0 })),
          i(Ct) !== 'svelte-15nf3xm' && (Ct.textContent = jn),
          (he = r(R)),
          b(X.$$.fragment, R),
          (ce = r(R)),
          (_t = l(R, 'STRONG', { 'data-svelte-h': !0 })),
          i(_t) !== 'svelte-1t76ors' && (_t.textContent = Fn),
          (ge = r(R)),
          b(J.$$.fragment, R),
          (pe = r(R)),
          (yt = l(R, 'STRONG', { 'data-svelte-h': !0 })),
          i(yt) !== 'svelte-lkzvup' && (yt.textContent = Bn),
          (ve = f(
            R,
            `
        ;`,
          )),
          R.forEach(g),
          (xe = r(L)),
          (k = l(L, 'LI', {}));
        var Yt = x(k);
        ($e = f(Yt, 'Enter the custom email address in ')),
          (wt = l(Yt, 'STRONG', { 'data-svelte-h': !0 })),
          i(wt) !== 'svelte-19zzm9v' && (wt.textContent = Dn),
          (Ce = f(
            Yt,
            `
        (
        `,
          )),
          (Tt = l(Yt, 'EM', {}));
        var _n = x(Tt);
        (_e = f(_n, 'i.e. ')),
          b(K.$$.fragment, _n),
          _n.forEach(g),
          (ye = f(
            Yt,
            `
        );`,
          )),
          Yt.forEach(g),
          (we = r(L)),
          (N = l(L, 'LI', {}));
        var Vt = x(N);
        (Te = f(Vt, 'Enter the email address you want your emails to be forwarded to in ')),
          (Lt = l(Vt, 'STRONG', { 'data-svelte-h': !0 })),
          i(Lt) !== 'svelte-1v5k7xe' && (Lt.textContent = Un),
          (Le = f(
            Vt,
            `
        (
        `,
          )),
          (Et = l(Vt, 'EM', {}));
        var yn = x(Et);
        (Ee = f(yn, 'i.e. ')),
          b(Q.$$.fragment, yn),
          yn.forEach(g),
          (be = f(
            Vt,
            `
        );`,
          )),
          Vt.forEach(g),
          (He = r(L)),
          (I = l(L, 'LI', {}));
        var Wt = x(I);
        (Me = f(Wt, 'Select ')),
          (bt = l(Wt, 'STRONG', { 'data-svelte-h': !0 })),
          i(bt) !== 'svelte-1fumkmg' && (bt.textContent = Yn),
          (Ge = r(Wt)),
          b(Z.$$.fragment, Wt),
          (Se = f(Wt, ' follow the instruction sent to your gmail address.')),
          Wt.forEach(g),
          (Re = r(L)),
          (Ht = l(L, 'LI', { 'data-svelte-h': !0 })),
          i(Ht) !== 'svelte-510hiq' && (Ht.innerHTML = Vn),
          L.forEach(g),
          (Ae = r(a)),
          (Mt = l(a, 'DIV', { class: !0 }));
        var fl = x(Mt);
        b(z.$$.fragment, fl),
          fl.forEach(g),
          (qe = r(a)),
          (tt = l(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          i(tt) !== 'svelte-1xf7pqe' && (tt.innerHTML = Wn),
          (Oe = r(a)),
          (Gt = l(a, 'P', { 'data-svelte-h': !0 })),
          i(Gt) !== 'svelte-zpu462' && (Gt.textContent = Xn),
          (Pe = r(a)),
          (w = l(a, 'OL', {}));
        var A = x(w);
        T = l(A, 'LI', {});
        var q = x(T);
        (ke = f(q, 'Go to your ')),
          (j = l(q, 'A', { href: !0, rel: !0, 'data-svelte-h': !0 })),
          i(j) !== 'svelte-fpwz59' && (j.textContent = Jn),
          (Ne = r(q)),
          b(et.$$.fragment, q),
          (Ie = r(q)),
          (St = l(q, 'STRONG', { 'data-svelte-h': !0 })),
          i(St) !== 'svelte-nkez4p' && (St.textContent = Kn),
          (ze = r(q)),
          b(nt.$$.fragment, q),
          (je = r(q)),
          (Rt = l(q, 'STRONG', { 'data-svelte-h': !0 })),
          i(Rt) !== 'svelte-1dbo7g0' && (Rt.textContent = Qn),
          (Fe = f(
            q,
            `
        ;`,
          )),
          q.forEach(g),
          (Be = r(A)),
          (At = l(A, 'LI', { 'data-svelte-h': !0 })),
          i(At) !== 'svelte-rcimo' && (At.innerHTML = Zn),
          (De = r(A)),
          (O = l(A, 'LI', {}));
        var F = x(O);
        (Ue = f(
          F,
          `Fill the form with the name of the email and the Cloudflare-routed email (
        `,
        )),
          (qt = l(F, 'EM', {}));
        var wn = x(qt);
        (Ye = f(wn, 'i.e. ')),
          b(lt.$$.fragment, wn),
          wn.forEach(g),
          (Ve = f(
            F,
            `
        ) `,
          )),
          b(at.$$.fragment, F),
          (We = f(
            F,
            ` untick "
        `,
          )),
          (Ot = l(F, 'STRONG', { 'data-svelte-h': !0 })),
          i(Ot) !== 'svelte-1tcyuwr' && (Ot.textContent = tl),
          (Xe = f(
            F,
            `
        ";`,
          )),
          F.forEach(g),
          (Je = r(A)),
          (c = l(A, 'LI', {}));
        var p = x(c);
        (Ke = f(
          p,
          `Fill the next form with the following information:
        `,
        )),
          (Qe = l(p, 'BR', {})),
          (Ze = r(p)),
          (Pt = l(p, 'STRONG', { 'data-svelte-h': !0 })),
          i(Pt) !== 'svelte-11g36tv' && (Pt.textContent = el),
          (tn = f(
            p,
            `
        : smtp.gmail.com
        `,
          )),
          (en = l(p, 'BR', {})),
          (nn = r(p)),
          (kt = l(p, 'STRONG', { 'data-svelte-h': !0 })),
          i(kt) !== 'svelte-1ddpp7b' && (kt.textContent = nl),
          (ln = f(
            p,
            `
        : 587
        `,
          )),
          (an = l(p, 'BR', {})),
          (on = r(p)),
          (Nt = l(p, 'STRONG', { 'data-svelte-h': !0 })),
          i(Nt) !== 'svelte-2g7kik' && (Nt.textContent = ll),
          (rn = f(
            p,
            `
        : your gmail address (
        `,
          )),
          (It = l(p, 'EM', {}));
        var Tn = x(It);
        (sn = f(Tn, 'i.e. ')),
          b(ot.$$.fragment, Tn),
          Tn.forEach(g),
          (dn = f(
            p,
            `
        )
        `,
          )),
          (un = l(p, 'BR', {})),
          (mn = r(p)),
          (zt = l(p, 'STRONG', { 'data-svelte-h': !0 })),
          i(zt) !== 'svelte-stx6ql' && (zt.textContent = al),
          (fn = f(
            p,
            `
        :
        `,
          )),
          (rt = l(p, 'A', { href: !0, 'data-svelte-h': !0 })),
          i(rt) !== 'svelte-5qruny' && (rt.textContent = ol),
          p.forEach(g),
          (hn = r(A)),
          (P = l(A, 'LI', {}));
        var dt = x(P);
        (cn = f(dt, 'Leave ')),
          (jt = l(dt, 'STRONG', { 'data-svelte-h': !0 })),
          i(jt) !== 'svelte-guzrmx' && (jt.textContent = rl),
          (gn = f(
            dt,
            `
        enabled `,
          )),
          b(st.$$.fragment, dt),
          (pn = f(
            dt,
            ` click
        `,
          )),
          (Ft = l(dt, 'STRONG', { 'data-svelte-h': !0 })),
          i(Ft) !== 'svelte-k3mt4u' && (Ft.textContent = sl),
          dt.forEach(g),
          (vn = r(A)),
          (Bt = l(A, 'LI', { 'data-svelte-h': !0 })),
          i(Bt) !== 'svelte-1ovj4nl' && (Bt.textContent = il),
          A.forEach(g),
          (xn = r(a)),
          (it = l(a, 'H1', { id: !0, 'data-svelte-h': !0 })),
          i(it) !== 'svelte-umtpej' && (it.innerHTML = dl),
          ($n = r(a)),
          (Dt = l(a, 'P', { 'data-svelte-h': !0 })),
          i(Dt) !== 'svelte-rh5943' && (Dt.textContent = ul),
          (Cn = r(a)),
          (Ut = l(a, 'P', { 'data-svelte-h': !0 })),
          i(Ut) !== 'svelte-epby6b' && (Ut.textContent = ml),
          a.forEach(g),
          this.h();
      },
      h() {
        v(u, 'id', 'create-a-custom-email-address-for-free'),
          v(D, 'id', 'prerequisites'),
          v(U, 'id', 'setup-your-google-account'),
          v(Y, 'id', 'enable-2-factor-authentification'),
          v(V, 'id', 'create-an-app-password'),
          v(W, 'id', 'enable-cloudflare-and-39-s-email-routing'),
          v(Mt, 'class', 'code-block'),
          v(tt, 'id', 'add-your-cloudflare-routed-email-to-gmail'),
          v(j, 'href', 'https://gmail.com/'),
          v(j, 'rel', 'external'),
          v(rt, 'href', '#create-an-app-password'),
          v(it, 'id', 'enjoy'),
          v(e, 'slot', 'post_content');
      },
      m(d, a) {
        Qt(d, e, a),
          t(e, u),
          t(e, h),
          t(e, C),
          t(e, mt),
          t(e, D),
          t(e, Zt),
          t(e, ft),
          t(e, te),
          t(e, ht),
          t(e, ee),
          t(e, U),
          t(e, ne),
          t(e, Y),
          t(e, le),
          t(e, ct),
          t(e, ae),
          t(e, gt),
          t(e, oe),
          t(e, V),
          t(e, re),
          t(e, pt),
          t(e, se),
          t(e, vt),
          t(e, ie),
          t(e, W),
          t(e, de),
          t(e, xt),
          t(e, ue),
          t(e, _),
          t(_, $t),
          t(_, me),
          t(_, y),
          t(y, fe),
          t(y, Ct),
          t(y, he),
          H(X, y, null),
          t(y, ce),
          t(y, _t),
          t(y, ge),
          H(J, y, null),
          t(y, pe),
          t(y, yt),
          t(y, ve),
          t(_, xe),
          t(_, k),
          t(k, $e),
          t(k, wt),
          t(k, Ce),
          t(k, Tt),
          t(Tt, _e),
          H(K, Tt, null),
          t(k, ye),
          t(_, we),
          t(_, N),
          t(N, Te),
          t(N, Lt),
          t(N, Le),
          t(N, Et),
          t(Et, Ee),
          H(Q, Et, null),
          t(N, be),
          t(_, He),
          t(_, I),
          t(I, Me),
          t(I, bt),
          t(I, Ge),
          H(Z, I, null),
          t(I, Se),
          t(_, Re),
          t(_, Ht),
          t(e, Ae),
          t(e, Mt),
          H(z, Mt, null),
          t(e, qe),
          t(e, tt),
          t(e, Oe),
          t(e, Gt),
          t(e, Pe),
          t(e, w),
          t(w, T),
          t(T, ke),
          t(T, j),
          t(T, Ne),
          H(et, T, null),
          t(T, Ie),
          t(T, St),
          t(T, ze),
          H(nt, T, null),
          t(T, je),
          t(T, Rt),
          t(T, Fe),
          t(w, Be),
          t(w, At),
          t(w, De),
          t(w, O),
          t(O, Ue),
          t(O, qt),
          t(qt, Ye),
          H(lt, qt, null),
          t(O, Ve),
          H(at, O, null),
          t(O, We),
          t(O, Ot),
          t(O, Xe),
          t(w, Je),
          t(w, c),
          t(c, Ke),
          t(c, Qe),
          t(c, Ze),
          t(c, Pt),
          t(c, tn),
          t(c, en),
          t(c, nn),
          t(c, kt),
          t(c, ln),
          t(c, an),
          t(c, on),
          t(c, Nt),
          t(c, rn),
          t(c, It),
          t(It, sn),
          H(ot, It, null),
          t(c, dn),
          t(c, un),
          t(c, mn),
          t(c, zt),
          t(c, fn),
          t(c, rt),
          t(w, hn),
          t(w, P),
          t(P, cn),
          t(P, jt),
          t(P, gn),
          H(st, P, null),
          t(P, pn),
          t(P, Ft),
          t(w, vn),
          t(w, Bt),
          t(e, xn),
          t(e, it),
          t(e, $n),
          t(e, Dt),
          t(e, Cn),
          t(e, Ut),
          (Jt = !0);
      },
      p(d, a) {
        const L = {};
        a & 1 && (L.$$scope = { dirty: a, ctx: d }), z.$set(L);
      },
      i(d) {
        Jt ||
          (M(X.$$.fragment, d),
          M(J.$$.fragment, d),
          M(K.$$.fragment, d),
          M(Q.$$.fragment, d),
          M(Z.$$.fragment, d),
          M(z.$$.fragment, d),
          M(et.$$.fragment, d),
          M(nt.$$.fragment, d),
          M(lt.$$.fragment, d),
          M(at.$$.fragment, d),
          M(ot.$$.fragment, d),
          M(st.$$.fragment, d),
          (Jt = !0));
      },
      o(d) {
        G(X.$$.fragment, d),
          G(J.$$.fragment, d),
          G(K.$$.fragment, d),
          G(Q.$$.fragment, d),
          G(Z.$$.fragment, d),
          G(z.$$.fragment, d),
          G(et.$$.fragment, d),
          G(nt.$$.fragment, d),
          G(lt.$$.fragment, d),
          G(at.$$.fragment, d),
          G(ot.$$.fragment, d),
          G(st.$$.fragment, d),
          (Jt = !1);
      },
      d(d) {
        d && g(e), S(X), S(J), S(K), S(Q), S(Z), S(z), S(et), S(nt), S(lt), S(at), S(ot), S(st);
      },
    }
  );
}
function El($) {
  let e, u;
  return (
    (e = new vl({ props: { $$slots: { post_content: [Ll] }, $$scope: { ctx: $ } } })),
    {
      c() {
        E(e.$$.fragment);
      },
      l(s) {
        b(e.$$.fragment, s);
      },
      m(s, h) {
        H(e, s, h), (u = !0);
      },
      p(s, [h]) {
        const C = {};
        h & 1 && (C.$$scope = { dirty: h, ctx: s }), e.$set(C);
      },
      i(s) {
        u || (M(e.$$.fragment, s), (u = !0));
      },
      o(s) {
        G(e.$$.fragment, s), (u = !1);
      },
      d(s) {
        S(e, s);
      },
    }
  );
}
class Rl extends En {
  constructor(e) {
    super(), bn(this, e, null, El, Ln, {});
  }
}
export { Rl as component };