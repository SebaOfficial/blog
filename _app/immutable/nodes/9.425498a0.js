import{s as we,f as d,a as h,g as u,h as q,N as m,c as f,d as y,j as w,i as U,u as a,O as pe,B as he,v as J,F as ye,o as be,l as fe,m as me,n as Ce,H as He,x as Te}from"../chunks/scheduler.b261eb3c.js";import{S as _e,i as $e,b as X,d as Y,m as Z,a as ee,t as te,e as se}from"../chunks/index.5ccb46b4.js";import{P as xe}from"../chunks/post.dc127507.js";import"../chunks/image_banner.69d8b9f5.js";import{C as Me}from"../chunks/code_copy.c7223dd6.js";function ve(p){let e,t,r;return{c(){e=d("p"),t=fe("Estimated time to crack: "),r=fe(p[1])},l(i){e=u(i,"P",{});var s=q(e);t=me(s,"Estimated time to crack: "),r=me(s,p[1]),s.forEach(y)},m(i,s){U(i,e,s),a(e,t),a(e,r)},p(i,s){s&2&&Ce(r,i[1])},d(i){i&&y(e)}}}function Le(p){let e,t,r="Enter the password:",i,s,v,_,$,o=p[1]&&ve(p);return{c(){e=d("div"),t=d("label"),t.textContent=r,i=h(),s=d("input"),v=h(),o&&o.c(),this.h()},l(c){e=u(c,"DIV",{id:!0,class:!0});var l=q(e);t=u(l,"LABEL",{for:!0,"data-svelte-h":!0}),m(t)!=="svelte-15dmhlf"&&(t.textContent=r),i=f(l),s=u(l,"INPUT",{type:!0,class:!0}),v=f(l),o&&o.l(l),l.forEach(y),this.h()},h(){w(t,"for","password"),w(s,"type","password"),w(s,"class","svelte-r6mqdh"),w(e,"id","password-crack"),w(e,"class","svelte-r6mqdh")},m(c,l){U(c,e,l),a(e,t),a(e,i),a(e,s),pe(s,p[0]),a(e,v),o&&o.m(e,null),_||($=[he(s,"input",p[3]),he(s,"input",p[2])],_=!0)},p(c,[l]){l&1&&s.value!==c[0]&&pe(s,c[0]),c[1]?o?o.p(c,l):(o=ve(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:J,o:J,d(c){c&&y(e),o&&o.d(),_=!1,ye($)}}}function ge(p,e,t){return p*(1-t)+e*t}function ke(p,e,t){let r="",i;const s=()=>{const b=Math.pow(94,r.length/1.35)/1e9;console.log(b),t(1,i=v(b)),_(r.length)},v=o=>{const c=[{unit:"aeon",divisor:31536e11},{unit:"epoch",divisor:31536e9},{unit:"centum millennia",divisor:31536e8},{unit:"decem millennia",divisor:31536e7},{unit:"millennia",divisor:31536e6},{unit:"centuries",divisor:31536e5},{unit:"decades",divisor:31536e4},{unit:"years",divisor:31536e3},{unit:"months",divisor:2592e3},{unit:"days",divisor:86400},{unit:"hours",divisor:3600},{unit:"minutes",divisor:60},{unit:"seconds",divisor:1}];for(const{unit:l,divisor:b}of c){const C=o/b;if(C>=1)return`${Math.floor(C)} ${l}`}return`${Math.floor(o)} seconds`},_=o=>{o=Math.max(0,Math.min(o,15));const c=o/15,l=Math.round(ge(255,0,c)),b=Math.round(ge(0,255,c)),C=document.getElementById("password-crack");C&&(C.style.border=`2px solid rgb(${l}, ${b}, 0)`)};be(()=>{s()});function $(){r=this.value,t(0,r)}return[r,i,s,$]}class Pe extends _e{constructor(e){super(),$e(this,e,ke,Le,we,{})}}function Ee(p){let e,t,r,i=String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">pwgen <span class="token number">16</span> <span class="token number">1</span></div></div>`+"";return{c(){e=d("pre"),t=d("code"),r=new He(!1),this.h()},l(s){e=u(s,"PRE",{});var v=q(e);t=u(v,"CODE",{class:!0});var _=q(t);r=Te(_,!1),_.forEach(y),v.forEach(y),this.h()},h(){r.a=null,w(t,"class","language-bash")},m(s,v){U(s,e,v),a(e,t),r.m(i,t)},p:J,d(s){s&&y(e)}}}function Ie(p){let e,t,r='<a href="#introduction">Introduction</a>',i,s,v=`A password is a string of characters used to verify the identity of a user during the authentication process.
Passwords are typically used in tandem with a username; they are designed to be known only to the user and allow that user to gain access to a device, application or website.
Passwords can vary in length and can contain letters, numbers and special characters.`,_,$,o='<a href="#how-to-create-a-secure-password">How to create a secure password</a>',c,l,b=`Passwords, when carefully created and protected, increase safe and secure interactions online and in the workplace and can prevent password cracking.
To maximize the strength and efficacy of passwords, organizations often establish password policies.
These policies are designed to help users create strong passwords and adopt best practices for managing login credentials.
According to the traditional advice, a strong password has:`,C,k,ne="<li><strong>Minumum 12 Characters</strong>;</li> <li><strong>Both uppercase and lowercase letters</strong>;</li> <li><strong>At least one number</strong>;</li> <li><strong>At least one special character</strong>.</li>",D,T,ae='<a href="#what-you-shouldn-and-39-t-include">What you shouldn&#39;t include</a>',R,P,re="<li><strong>Dictionary Word</strong> or Combination of them;</li> <li><strong>Easily guessed elements</strong>, such as names of children, pet names and birthdays;</li> <li><strong>Obvious Substitutions</strong>, such as <em>H3llo</em> or <em>H0use</em></li>",j,x,oe='<a href="#use-password-managers">Use password managers</a>',N,E,ie='One of the best advices I always give is to store your password with a password manager like <a href="https://bitwarden.com/" rel="external">bitwarden</a> and use passwords generators you trust to generate them for you, because:',V,I,le="<p>If you can remember a password, a computer can remember it too.</p>",W,S,ce='Bitwardern offers a <a href="https://bitwarden.com/password-generator/" rel="external">password generator</a> but if you&#39;re a linux user you could use <code class="inline-code-block">pwgen</code>, here&#39;s an example to generate a password with 16 characters:',F,z,H,G,M,de='<a href="#test-your-password">Test your password</a>',K,B,ue="Here's how you can test the effectiveness of your password:",Q,L,O;return H=new Me({props:{$$slots:{default:[Ee]},$$scope:{ctx:p}}}),L=new Pe({}),{c(){e=d("article"),t=d("h2"),t.innerHTML=r,i=h(),s=d("p"),s.textContent=v,_=h(),$=d("h2"),$.innerHTML=o,c=h(),l=d("p"),l.textContent=b,C=h(),k=d("ul"),k.innerHTML=ne,D=h(),T=d("h3"),T.innerHTML=ae,R=h(),P=d("ul"),P.innerHTML=re,j=h(),x=d("h2"),x.innerHTML=oe,N=h(),E=d("p"),E.innerHTML=ie,V=h(),I=d("blockquote"),I.innerHTML=le,W=h(),S=d("p"),S.innerHTML=ce,F=h(),z=d("div"),X(H.$$.fragment),G=h(),M=d("h2"),M.innerHTML=de,K=h(),B=d("p"),B.textContent=ue,Q=h(),X(L.$$.fragment),this.h()},l(g){e=u(g,"ARTICLE",{slot:!0});var n=q(e);t=u(n,"H2",{id:!0,"data-svelte-h":!0}),m(t)!=="svelte-ccveyw"&&(t.innerHTML=r),i=f(n),s=u(n,"P",{"data-svelte-h":!0}),m(s)!=="svelte-1tzliwb"&&(s.textContent=v),_=f(n),$=u(n,"H2",{id:!0,"data-svelte-h":!0}),m($)!=="svelte-1r3zmmq"&&($.innerHTML=o),c=f(n),l=u(n,"P",{"data-svelte-h":!0}),m(l)!=="svelte-1c4ufw3"&&(l.textContent=b),C=f(n),k=u(n,"UL",{"data-svelte-h":!0}),m(k)!=="svelte-1axheal"&&(k.innerHTML=ne),D=f(n),T=u(n,"H3",{id:!0,"data-svelte-h":!0}),m(T)!=="svelte-14bwjgi"&&(T.innerHTML=ae),R=f(n),P=u(n,"UL",{"data-svelte-h":!0}),m(P)!=="svelte-1ror442"&&(P.innerHTML=re),j=f(n),x=u(n,"H2",{id:!0,"data-svelte-h":!0}),m(x)!=="svelte-ea8huc"&&(x.innerHTML=oe),N=f(n),E=u(n,"P",{"data-svelte-h":!0}),m(E)!=="svelte-zdnh2w"&&(E.innerHTML=ie),V=f(n),I=u(n,"BLOCKQUOTE",{"data-svelte-h":!0}),m(I)!=="svelte-am9pem"&&(I.innerHTML=le),W=f(n),S=u(n,"P",{"data-svelte-h":!0}),m(S)!=="svelte-zwtn29"&&(S.innerHTML=ce),F=f(n),z=u(n,"DIV",{class:!0});var A=q(z);Y(H.$$.fragment,A),A.forEach(y),G=f(n),M=u(n,"H2",{id:!0,"data-svelte-h":!0}),m(M)!=="svelte-1v8ff6w"&&(M.innerHTML=de),K=f(n),B=u(n,"P",{"data-svelte-h":!0}),m(B)!=="svelte-fozdxs"&&(B.textContent=ue),Q=f(n),Y(L.$$.fragment,n),n.forEach(y),this.h()},h(){w(t,"id","introduction"),w($,"id","how-to-create-a-secure-password"),w(T,"id","what-you-shouldn-and-39-t-include"),w(x,"id","use-password-managers"),w(z,"class","code-block "),w(M,"id","test-your-password"),w(e,"slot","post_content")},m(g,n){U(g,e,n),a(e,t),a(e,i),a(e,s),a(e,_),a(e,$),a(e,c),a(e,l),a(e,C),a(e,k),a(e,D),a(e,T),a(e,R),a(e,P),a(e,j),a(e,x),a(e,N),a(e,E),a(e,V),a(e,I),a(e,W),a(e,S),a(e,F),a(e,z),Z(H,z,null),a(e,G),a(e,M),a(e,K),a(e,B),a(e,Q),Z(L,e,null),O=!0},p(g,n){const A={};n&1&&(A.$$scope={dirty:n,ctx:g}),H.$set(A)},i(g){O||(ee(H.$$.fragment,g),ee(L.$$.fragment,g),O=!0)},o(g){te(H.$$.fragment,g),te(L.$$.fragment,g),O=!1},d(g){g&&y(e),se(H),se(L)}}}function Se(p){let e,t;return e=new xe({props:{$$slots:{post_content:[Ie]},$$scope:{ctx:p}}}),{c(){X(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,i){Z(e,r,i),t=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(ee(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}class Ue extends _e{constructor(e){super(),$e(this,e,null,Se,we,{})}}export{Ue as component};