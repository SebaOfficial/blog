import{v as p,s as m}from"./scheduler.b261eb3c.js";const u=[];function y(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=p){let s;const o=new Set;function r(n){if(m(e,n)&&(e=n,s)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(n){r(n(e))}function a(n,c=p){const i=[n,c];return o.add(i),o.size===1&&(s=t(r,l)||p),n(e),()=>{o.delete(i),o.size===0&&s&&(s(),s=null)}}return{set:r,update:l,subscribe:a}}var g;const w=((g=globalThis.__sveltekit_vs3pks)==null?void 0:g.base)??"";var k;const E=((k=globalThis.__sveltekit_vs3pks)==null?void 0:k.assets)??w,A="1702579561756",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||S(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:r,target:o,download:l}}function V(e){let t=null,s=null,o=null,r=null,l=null,a=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),r===null&&(r=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),l===null&&(l=f(n,"reload")),a===null&&(a=f(n,"replacestate")),n=v(n);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keep_focus:c(t),noscroll:c(s),reload:c(l),replace_state:c(a)}}function h(e){const t=d(e);let s=!0;function o(){s=!0,t.update(a=>a)}function r(a){s=!1,t.set(a)}function l(a){let n;return t.subscribe(c=>{(n===void 0||s&&c!==n)&&a(n=c)})}return{notify:o,set:r,subscribe:l}}function R(){const{set:e,subscribe:t}=d(!1);let s;async function o(){clearTimeout(s);try{const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function Y(e){e.client}const q={url:h({}),page:h({}),navigating:d(null),updated:R()};export{O as I,b as P,x as S,I as a,P as b,V as c,q as d,w as e,N as f,U as g,Y as h,S as i,y as r,L as s,d as w};
