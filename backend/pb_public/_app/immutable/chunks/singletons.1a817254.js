import{w as u}from"./index.61ea6cac.js";import{a as b}from"./paths.1b4de03e.js";const v="1692324689773",A="sveltekit:snapshot",R="sveltekit:scroll",y="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!r||k(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===location.origin&&e.hasAttribute("download");return{url:n,external:s,target:r,download:l}}function O(e){let t=null,n=null,r=null,s=null,l=null,o=null,a=e;for(;a&&a!==document.documentElement;)r===null&&(r=c(a,"preload-code")),s===null&&(s=c(a,"preload-data")),t===null&&(t=c(a,"keepfocus")),n===null&&(n=c(a,"noscroll")),l===null&&(l=c(a,"reload")),o===null&&(o=c(a,"replacestate")),a=_(a);function i(g){switch(g){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[r??"off"],preload_data:d[s??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function r(){n=!0,t.update(o=>o)}function s(o){n=!1,t.set(o)}function l(o){let a;return t.subscribe(i=>{(a===void 0||n&&i!==a)&&o(a=i)})}return{notify:r,set:s,subscribe:l}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function r(){clearTimeout(n);try{const s=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!s.ok)return!1;const o=(await s.json()).version!==v;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:r}}function k(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let h;function U(e){h=e.client}function L(e){return(...t)=>h[e](...t)}const N={url:p({}),page:p({}),navigating:u(null),updated:m()};export{y as I,f as P,R as S,A as a,x as b,O as c,N as d,U as e,T as f,I as g,L as h,k as i,S as s};
