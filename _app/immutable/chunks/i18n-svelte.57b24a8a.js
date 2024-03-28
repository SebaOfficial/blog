import{d as _,w as m}from"./singletons.27b63558.js";const L=""+new URL("../assets/avatar.9d2117a3.png",import.meta.url).href,P=[""+new URL("../assets/avatar.f6a08045.avif",import.meta.url).href,""+new URL("../assets/avatar.ec2b368f.webp",import.meta.url).href],C=""+new URL("../assets/avatar.3288fe50.jpeg",import.meta.url).href,A=""+new URL("../assets/avatar.2149bba4.jpeg",import.meta.url).href,E=""+new URL("../assets/avatar.fa6b069e.jpeg",import.meta.url).href,O=""+new URL("../assets/avatar.df189fa7.jpeg",import.meta.url).href,k=""+new URL("../assets/cover.ed3357af.webp",import.meta.url).href,p={url:"https://blog.racca.me",title:"Seba's Blog",subtitle:"Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more.",description:"Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more",lang:"en",timeZone:"Europe/Rome",since:2022,cover:k,author:{name:"Sebastiano Racca",status:"☕️",statusTip:`Support me with a <a href="https://www.buymeacoffee.com/sebadev" rel="external" style="color:#0F0" onMouseOver="this.style.color='#0FF'" onMouseOut="this.style.color='#0F0'" >Coffee</a>`,avatar:L,avatar_128:P,avatar_48_png:C,avatar_96_png:A,avatar_192_png:E,avatar_512_png:O,website:"https://racca.me",github:"https://github.com/SebaOfficial",email:"sebastiano@racca.me",bio:"Just a few more lines<br>Wheter it's code or blog"}},q={me:["https://github.com/SebaOfficial"],custom:({dev:e})=>e?[`<script>
            document.addEventListener("DOMContentLoaded", function() {
              var script = document.createElement('script');
              script.src = 'http://localhost:8000/newsletter.js';
              document.body.appendChild(script);
            });
          <\/script>`]:[`<!-- Cloudflare Web Analytics -->
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "a38d5ca271be4ef388d669f29078f2cc"}'><\/script>
          <!-- End Cloudflare Web Analytics -->`,`<script>
            document.addEventListener("DOMContentLoaded", function() {
              var script = document.createElement('script');
              script.src = 'https://api.racca.me/newsletter.js';
              document.body.appendChild(script);
            });
          <\/script>`]},Q={toPublishedString:{locales:"en-US",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}},toUpdatedString:{locales:"en-US",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}}},Y={enable:!0,id:"giscus-comment",repo:"sebaofficial/blog",repoId:"R_kgDOKsJ_Bg",category:"Announcements",categoryId:"DIC_kwDOKsJ_Bs4Ca36L",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",loading:"lazy",lang:"en","data-strict":"0"},K=[{name:"About",url:"https://racca.me/",rel:"external"},{name:"Contacts",url:"https://racca.me/contacts",rel:"external"}],ee={orientation:2,links:[{name:"About",url:"https://racca.me/",rel:"external"},{name:"Contacts",url:"https://racca.me/contacts",rel:"external"}]},f=()=>{const e=_;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},te={subscribe(e){return f().page.subscribe(e)}},re={subscribe(e){return f().navigating.subscribe(e)}};var d=()=>new Proxy(Object.assign(()=>"",{}),{get:(e,t)=>t==="length"?0:d()}),R=e=>Object.fromEntries(Object.entries(e).map(([t,r])=>t!=="i"&&r&&r!="0"&&[t,r]).filter(Boolean)),S=e=>Object.fromEntries(Object.keys(e).map(t=>{const r=e[t];return[t,Array.isArray(r)?r.map(s=>s==null?void 0:s.trim()):r===!!r?r:r==null?void 0:r.trim()]})),j=e=>{const[t="",...r]=e.split("|"),[s="",a]=t.split(":"),[n,o]=s.split("?");return{k:n,i:a,n:o==="",f:r}},U=e=>!!(e.o||e.r),I=(e,t)=>{let[r,s]=e.split(":");s||(s=r,r=t);const a=s.split("|"),[n,o,c,i,v,w]=a,l=a.filter(y=>y!==void 0).length;return l===1?{k:r,r:n}:l===2?{k:r,o:n,r:o}:l===3?{k:r,z:n,o,r:c}:{k:r,z:n,o,t:c,f:i,m:v,r:w}},z=/^\{.*\}$/,T=e=>Object.fromEntries(u(e).split(",").map(t=>t.split(":")).reduce((t,r)=>r.length===2?[...t,r.map(s=>s.trim())]:(t[t.length-1][1]+=","+r[0],t),[])),b=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,u=e=>e.substring(1,e.length-1),x=(e,t=!0,r="",s="")=>e.split(b).map(a=>{if(!a.match(b))return a;const n=u(a);if(n.startsWith("{"))return I(u(n),s);const o=j(n);return s=o.k||s,!r&&(r=s),o}).map(a=>{if(typeof a=="string")return a;a.k||(a.k=r||"0");const n=S(a);return t?R(n):n}),B=(e,t,r)=>t.reduce((s,a)=>{var n;return(a.match(z)?(o=>o[s]??o["*"])(T(a)):(n=e[a])==null?void 0:n.call(e,s))??s},r),D=(e,{z:t,o:r,t:s,f:a,m:n,r:o},c)=>{switch(t&&c==0?"zero":e.select(c)){case"zero":return t;case"one":return r;case"two":return s;case"few":return a??o;case"many":return n??o;default:return o}},G=/\?\?/g,F=(e,t,r,s)=>e.map(a=>{if(typeof a=="string")return a;const{k:n="0",f:o=[]}=a,c=s[n];return U(a)?((typeof c=="boolean"?c?a.o:a.r:D(t,a,c))||"").replace(G,c):(""+((o.length?B(r,o,c):c)??"")).trim()}).join(""),N=(e,t,r,s)=>{const a=s[0],n=a&&typeof a=="object"&&a.constructor===Object,o=s.length===1&&n?a:s;return F(e,t,r,o)},W=(e,t)=>e[t]||(e[t]=x(t)),M=(e,t)=>{const r={},s=new Intl.PluralRules(e);return(a,...n)=>N(W(r,a),s,t,n)};function V(e,t,r={}){return h(t,M(e,r))}var g=(e={},t)=>typeof e=="string"?t.bind(null,e):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),e),h=(e,t)=>new Proxy(g(e,t),{get:(r,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(r).map(a=>g(a,t))):h(r[s],t)}),Z=(e,t={})=>{const r=m(),s=m(d()),a=J(r),n=new Proxy({},{get:(c,i)=>i==="subscribe"?s.subscribe:s[i]});return{locale:a,LL:n,setLocale:c=>{r.set(c),s.set(V(c,e[c],t[c]))}}};function J(e){return{subscribe:e.subscribe.bind(e)}}const ae="en",se=["en","ja","zh","zh-Hans","zh-Hant"],$={},H={},{locale:ne,LL:oe,setLocale:ce}=Z($,H);export{oe as L,K as a,H as b,se as c,ce as d,ae as e,Q as f,Y as g,q as h,$ as l,ee as m,re as n,te as p,p as s};
