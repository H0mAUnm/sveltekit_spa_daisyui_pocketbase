import{o as $e,t as ge}from"../chunks/scheduler.a6287574.js";import{S as qe,a as Fe,I as C,g as Te,f as je,b as ye,c as le,s as Q,i as we,d as F,P as De,e as Ke}from"../chunks/singletons.1a817254.js";import{b as B}from"../chunks/paths.1b4de03e.js";function ze(n,s){return n==="/"||s==="ignore"?n:s==="never"?n.endsWith("/")?n.slice(0,-1):n:s==="always"&&!n.endsWith("/")?n+"/":n}function We(n){return n.split("%25").map(decodeURI).join("%25")}function Ye(n){for(const s in n)n[s]=decodeURIComponent(n[s]);return n}const Xe=["href","pathname","search","searchParams","toString","toJSON"];function Ze(n,s){const u=new URL(n);for(const o of Xe)Object.defineProperty(u,o,{get(){return s(),n[o]},enumerable:!0,configurable:!0});return Qe(u),u}function Qe(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const et="/__data.json";function tt(n){return n.replace(/\/$/,"")+et}function nt(...n){let s=5381;for(const u of n)if(typeof u=="string"){let o=u.length;for(;o;)s=s*33^u.charCodeAt(--o)}else if(ArrayBuffer.isView(u)){const o=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let p=o.length;for(;p;)s=s*33^o[--p]}else throw new TypeError("value must be a string or TypedArray");return(s>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,s)=>((n instanceof Request?n.method:s?.method||"GET")!=="GET"&&te.delete(Se(n)),fe(n,s));const te=new Map;function at(n,s){const u=Se(n,s),o=document.querySelector(u);if(o?.textContent){const{body:p,...c}=JSON.parse(o.textContent),S=o.getAttribute("data-ttl");return S&&te.set(u,{body:p,init:c,ttl:1e3*Number(S)}),Promise.resolve(new Response(p,c))}return fe(n,s)}function rt(n,s,u){if(te.size>0){const o=Se(n,u),p=te.get(o);if(p){if(performance.now()<p.ttl&&["default","force-cache","only-if-cached",void 0].includes(u?.cache))return new Response(p.body,p.init);te.delete(o)}}return fe(s,u)}function Se(n,s){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(s?.headers||s?.body){const p=[];s.headers&&p.push([...new Headers(s.headers)].join(",")),s.body&&(typeof s.body=="string"||ArrayBuffer.isView(s.body))&&p.push(s.body),o+=`[data-hash="${nt(...p)}"]`}return o}const ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function st(n){const s=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ct(n).map(o=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(p)return s.push({name:p[1],matcher:p[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(c)return s.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const S=o.split(/\[(.+?)\](?!\])/);return"/"+S.map((w,g)=>{if(g%2){if(w.startsWith("x+"))return ve(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ve(String.fromCharCode(...w.slice(2).split("-").map(j=>parseInt(j,16))));const d=ot.exec(w);if(!d)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,I,b,L]=d;return s.push({name:b,matcher:L,optional:!!U,rest:!!I,chained:I?g===1&&S[0]==="":!1}),I?"(.*?)":U?"([^/]*)?":"([^/]+?)"}return ve(w)}).join("")}).join("")}/?$`),params:s}}function it(n){return!/^\([^)]+\)$/.test(n)}function ct(n){return n.slice(1).split("/").filter(it)}function lt(n,s,u){const o={},p=n.slice(1);let c=0;for(let S=0;S<s.length;S+=1){const i=s[S];let w=p[S-c];if(i.chained&&i.rest&&c&&(w=p.slice(S-c,S+1).filter(g=>g).join("/"),c=0),w===void 0){i.rest&&(o[i.name]="");continue}if(!i.matcher||u[i.matcher](w)){o[i.name]=w;const g=s[S+1],d=p[S+1];g&&!g.rest&&g.optional&&d&&i.chained&&(c=0);continue}if(i.optional&&i.chained){c++;continue}return}if(!c)return o}function ve(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ft({nodes:n,server_loads:s,dictionary:u,matchers:o}){const p=new Set(s);return Object.entries(u).map(([i,[w,g,d]])=>{const{pattern:U,params:I}=st(i),b={id:i,exec:L=>{const j=U.exec(L);if(j)return lt(j,I,o)},errors:[1,...d||[]].map(L=>n[L]),layouts:[0,...g||[]].map(S),leaf:c(w)};return b.errors.length=b.layouts.length=Math.max(b.errors.length,b.layouts.length),b});function c(i){const w=i<0;return w&&(i=~i),[w,n[i]]}function S(i){return i===void 0?i:[p.has(i),n[i]]}}function He(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ce(n,s){const u=JSON.stringify(s);try{sessionStorage[n]=u}catch{}}const ut=-1,dt=-2,pt=-3,ht=-4,mt=-5,_t=-6;function gt(n,s){if(typeof n=="number")return p(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const u=n,o=Array(u.length);function p(c,S=!1){if(c===ut)return;if(c===pt)return NaN;if(c===ht)return 1/0;if(c===mt)return-1/0;if(c===_t)return-0;if(S)throw new Error("Invalid input");if(c in o)return o[c];const i=u[c];if(!i||typeof i!="object")o[c]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const w=i[0],g=s?.[w];if(g)return o[c]=g(p(i[1]));switch(w){case"Date":o[c]=new Date(i[1]);break;case"Set":const d=new Set;o[c]=d;for(let b=1;b<i.length;b+=1)d.add(p(i[b]));break;case"Map":const U=new Map;o[c]=U;for(let b=1;b<i.length;b+=2)U.set(p(i[b]),p(i[b+1]));break;case"RegExp":o[c]=new RegExp(i[1],i[2]);break;case"Object":o[c]=Object(i[1]);break;case"BigInt":o[c]=BigInt(i[1]);break;case"null":const I=Object.create(null);o[c]=I;for(let b=1;b<i.length;b+=2)I[i[b]]=p(i[b+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(i.length);o[c]=w;for(let g=0;g<i.length;g+=1){const d=i[g];d!==dt&&(w[g]=p(d))}}else{const w={};o[c]=w;for(const g in i){const d=i[g];w[g]=p(d)}}return o[c]}return p(0)}function yt(n){return n.filter(s=>s!=null)}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const wt=new Set([...Be]);[...wt];async function vt(n){for(const s in n)if(typeof n[s]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([u,o])=>[u,await o])));return n}class ee{constructor(s,u){this.status=s,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${s}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(s,u){this.status=s,this.location=u}}const bt="x-sveltekit-invalidated",Et="x-sveltekit-trailing-slash",G=He(qe)??{},Z=He(Fe)??{};function be(n){G[n]=Q()}function St(n,s){const u=ft(n),o=n.nodes[0],p=n.nodes[1];o(),p();const c=document.documentElement,S=[],i=[];let w=null;const g={before_navigate:[],after_navigate:[]};let d={branch:[],error:null,url:null},U=!1,I=!1,b=!0,L=!1,j=!1,V=!1,H=!1,J,O=history.state?.[C];O||(O=Date.now(),history.replaceState({...history.state,[C]:O},"",location.href));const ue=G[O];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,ne,z;async function ke(){if(z=z||Promise.resolve(),await z,!z)return;z=null;const e=new URL(location.href),t=Y(e,!0);w=null;const a=ne={},r=t&&await he(t);if(a===ne&&r){if(r.type==="redirect")return ae(new URL(r.location,e).href,{},[e.pathname],a);r.props.page!==void 0&&(q=r.props.page),J.$set(r.props)}}function Re(e){i.some(t=>t?.snapshot)&&(Z[e]=i.map(t=>t?.snapshot?.capture()))}function Ae(e){Z[e]?.forEach((t,a)=>{i[a]?.snapshot?.restore(t)})}function Ie(){be(O),Ce(qe,G),Re(O),Ce(Fe,Z)}async function ae(e,{noScroll:t=!1,replaceState:a=!1,keepFocus:r=!1,state:l={},invalidateAll:f=!1},m,y){return typeof e=="string"&&(e=new URL(e,Te(document))),ie({url:e,scroll:t?Q():null,keepfocus:r,redirect_chain:m,details:{state:l,replaceState:a},nav_token:y,accepted:()=>{f&&(H=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return w={id:e.id,promise:he(e).then(t=>(t.type==="loaded"&&t.state.error&&(w=null),t))},w.promise}async function re(...e){const a=u.filter(r=>e.some(l=>r.exec(l))).map(r=>Promise.all([...r.layouts,r.leaf].map(l=>l?.[1]())));await Promise.all(a)}function Oe(e){d=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),q=e.props.page,J=new n.root({target:s,props:{...e.props,stores:F,components:i},hydrate:!0}),Ae(O);const a={from:null,to:{params:d.params,route:{id:d.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};g.after_navigate.forEach(r=>r(a)),I=!0}async function W({url:e,params:t,branch:a,status:r,error:l,route:f,form:m}){let y="never";for(const h of a)h?.slash!==void 0&&(y=h.slash);e.pathname=ze(e.pathname,y),e.search=e.search;const E={type:"loaded",state:{url:e,params:t,branch:a,error:l,route:f},props:{constructors:yt(a).map(h=>h.node.component)}};m!==void 0&&(E.props.form=m);let v={},R=!q,_=0;for(let h=0;h<Math.max(a.length,d.branch.length);h+=1){const P=a[h],M=d.branch[h];P?.data!==M?.data&&(R=!0),P&&(v={...v,...P.data},R&&(E.props[`data_${_}`]=v),_+=1)}return(!d.url||e.href!==d.url.href||d.error!==l||m!==void 0&&m!==q.form||R)&&(E.props.page={error:l,params:t,route:{id:f?.id??null},status:r,url:new URL(e),form:m??null,data:R?v:q.data}),E}async function de({loader:e,parent:t,url:a,params:r,route:l,server_data_node:f}){let m=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await e();if(E.universal?.load){let v=function(..._){for(const k of _){const{href:h}=new URL(k,a);y.dependencies.add(h)}};const R={route:{get id(){return y.route=!0,l.id}},params:new Proxy(r,{get:(_,k)=>(y.params.add(k),_[k])}),data:f?.data??null,url:Ze(a,()=>{y.url=!0}),async fetch(_,k){let h;_ instanceof Request?(h=_.url,k={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...k}):h=_;const P=new URL(h,a);return v(P.href),P.origin===a.origin&&(h=P.href.slice(a.origin.length)),I?rt(h,P.href,k):at(h,k)},setHeaders:()=>{},depends:v,parent(){return y.parent=!0,t()}};m=await E.universal.load.call(null,R)??null,m=m?await vt(m):null}return{node:E,loader:e,server:f,universal:E.universal?.load?{type:"data",data:m,uses:y}:null,data:m??f?.data??null,slash:E.universal?.trailingSlash??f?.slash}}function Pe(e,t,a,r,l){if(H)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&a)return!0;for(const f of r.params)if(l[f]!==d.params[f])return!0;for(const f of r.dependencies)if(S.some(m=>m(new URL(f))))return!0;return!1}function pe(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}async function he({id:e,invalidating:t,url:a,params:r,route:l}){if(w?.id===e)return w.promise;const{errors:f,layouts:m,leaf:y}=l,E=[...m,y];f.forEach(A=>A?.().catch(()=>{})),E.forEach(A=>A?.[1]().catch(()=>{}));let v=null;const R=d.url?e!==d.url.pathname+d.url.search:!1,_=d.route?l.id!==d.route.id:!1;let k=!1;const h=E.map((A,N)=>{const T=d.branch[N],$=!!A?.[0]&&(T?.loader!==A[1]||Pe(k,_,R,T.server?.uses,r));return $&&(k=!0),$});if(h.some(Boolean)){try{v=await Ve(a,h)}catch(A){return oe({status:A instanceof ee?A.status:500,error:await X(A,{url:a,params:r,route:{id:l.id}}),url:a,route:l})}if(v.type==="redirect")return v}const P=v?.nodes;let M=!1;const x=E.map(async(A,N)=>{if(!A)return;const T=d.branch[N],$=P?.[N];if((!$||$.type==="skip")&&A[1]===T?.loader&&!Pe(M,_,R,T.universal?.uses,r))return T;if(M=!0,$?.type==="error")throw $;return de({loader:A[1],url:a,params:r,route:l,parent:async()=>{const me={};for(let _e=0;_e<N;_e+=1)Object.assign(me,(await x[_e])?.data);return me},server_data_node:pe($===void 0&&A[0]?{type:"skip"}:$??null,A[0]?T?.server:void 0)})});for(const A of x)A.catch(()=>{});const D=[];for(let A=0;A<E.length;A+=1)if(E[A])try{D.push(await x[A])}catch(N){if(N instanceof Me)return{type:"redirect",location:N.location};let T=500,$;if(P?.includes(N))T=N.status??T,$=N.error;else if(N instanceof ee)T=N.status,$=N.body;else{if(await F.updated.check())return await K(a);$=await X(N,{params:r,url:a,route:{id:l.id}})}const ce=await Ue(A,D,f);return ce?await W({url:a,params:r,branch:D.slice(0,ce.idx).concat(ce.node),status:T,error:$,route:l}):await Ne(a,{id:l.id},$,T)}else D.push(void 0);return await W({url:a,params:r,branch:D,status:200,error:null,route:l,form:t?void 0:null})}async function Ue(e,t,a){for(;e--;)if(a[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await a[e](),loader:a[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:t,url:a,route:r}){const l={};let f=null;if(n.server_loads[0]===0)try{const v=await Ve(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;f=v.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||U)&&await K(a)}const y=await de({loader:o,url:a,params:l,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(f)}),E={node:await p(),loader:p,universal:null,server:null,data:null};return await W({url:a,params:l,branch:[y,E],status:e,error:t,route:null})}function Y(e,t){if(we(e,B))return;const a=se(e);for(const r of u){const l=r.exec(a);if(l)return{id:e.pathname+e.search,invalidating:t,route:r,params:Ye(l),url:e}}}function se(e){return We(e.pathname.slice(B.length)||"/")}function xe({url:e,type:t,intent:a,delta:r}){let l=!1;const f={from:{params:d.params,route:{id:d.route?.id??null},url:d.url},to:{params:a?.params??null,route:{id:a?.route?.id??null},url:e},willUnload:!a,type:t};r!==void 0&&(f.delta=r);const m={...f,cancel:()=>{l=!0}};return j||g.before_navigate.forEach(y=>y(m)),l?null:f}async function ie({url:e,scroll:t,keepfocus:a,redirect_chain:r,details:l,type:f,delta:m,nav_token:y={},accepted:E,blocked:v}){const R=Y(e,!1),_=xe({url:e,type:f,delta:m,intent:R});if(!_){v();return}const k=O;E(),j=!0,I&&F.navigating.set(_),ne=y;let h=R&&await he(R);if(!h){if(we(e,B))return await K(e);h=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=R?.url||e,ne!==y)return!1;if(h.type==="redirect")if(r.length>10||r.includes(e.pathname))h=await oe({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ae(new URL(h.location,e).href,{},[...r,e.pathname],y),!1;else h.props.page?.status>=400&&await F.updated.check()&&await K(e);if(S.length=0,H=!1,L=!0,be(k),Re(k),h.props.page?.url&&h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page?.url.pathname),l){const x=l.replaceState?0:1;if(l.state[C]=O+=x,history[l.replaceState?"replaceState":"pushState"](l.state,"",e),!l.replaceState){let D=O+1;for(;Z[D]||G[D];)delete Z[D],delete G[D],D+=1}}w=null,I?(d=h.state,h.props.page&&(h.props.page.url=e),J.$set(h.props)):Oe(h);const{activeElement:P}=document;if(await ge(),b){const x=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));t?scrollTo(t.x,t.y):x?x.scrollIntoView():scrollTo(0,0)}const M=document.activeElement!==P&&document.activeElement!==document.body;!a&&!M&&Ee(),b=!0,h.props.page&&(q=h.props.page),j=!1,f==="popstate"&&Ae(O),g.after_navigate.forEach(x=>x(_)),F.navigating.set(null),L=!1}async function Ne(e,t,a,r){return e.origin===location.origin&&e.pathname===location.pathname&&!U?await oe({status:r,error:a,url:e,route:t}):await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function Je(){let e;c.addEventListener("mousemove",f=>{const m=f.target;clearTimeout(e),e=setTimeout(()=>{r(m,2)},20)});function t(f){r(f.composedPath()[0],1)}c.addEventListener("mousedown",t),c.addEventListener("touchstart",t,{passive:!0});const a=new IntersectionObserver(f=>{for(const m of f)m.isIntersecting&&(re(se(new URL(m.target.href))),a.unobserve(m.target))},{threshold:0});function r(f,m){const y=je(f,c);if(!y)return;const{url:E,external:v,download:R}=ye(y,B);if(v||R)return;const _=le(y);if(!_.reload)if(m<=_.preload_data){const k=Y(E,!1);k&&Le(k)}else m<=_.preload_code&&re(se(E))}function l(){a.disconnect();for(const f of c.querySelectorAll("a")){const{url:m,external:y,download:E}=ye(f,B);if(y||E)continue;const v=le(f);v.reload||(v.preload_code===De.viewport&&a.observe(f),v.preload_code===De.eager&&re(se(m)))}}g.after_navigate.push(l),l()}function X(e,t){return e instanceof ee?e.body:n.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{$e(()=>(g.after_navigate.push(e),()=>{const t=g.after_navigate.indexOf(e);g.after_navigate.splice(t,1)}))},before_navigate:e=>{$e(()=>(g.before_navigate.push(e),()=>{const t=g.before_navigate.indexOf(e);g.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(L||!I)&&(b=!1)},goto:(e,t={})=>ae(e,t,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:t}=new URL(e,location.href);S.push(a=>a.href===t)}return ke()},invalidate_all:()=>(H=!0,ke()),preload_data:async e=>{const t=new URL(e,Te(document)),a=Y(t,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Le(a)},preload_code:re,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:a,route:r}=d;if(!r)return;const l=await Ue(d.branch.length,a,r.errors);if(l){const f=await W({url:t,params:d.params,branch:a.slice(0,l.idx).concat(l.node),status:e.status??500,error:e.error,route:r});d=f.state,J.$set(f.props),ge().then(Ee)}}else e.type==="redirect"?ae(e.location,{invalidateAll:!0},[]):(J.$set({form:null,page:{...q,form:e.data,status:e.status}}),await ge(),J.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ie(),!j){const r={from:{params:d.params,route:{id:d.route?.id??null},url:d.url},to:null,willUnload:!0,type:"leave",cancel:()=>a=!0};g.before_navigate.forEach(l=>l(r))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),navigator.connection?.saveData||Je(),c.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=je(t.composedPath()[0],c);if(!a)return;const{url:r,external:l,target:f,download:m}=ye(a,B);if(!r)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const y=le(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||m)return;if(l||y.reload){xe({url:r,type:"link"})?j=!0:t.preventDefault();return}const[v,R]=r.href.split("#");if(R!==void 0&&v===location.href.split("#")[0]){if(d.url.hash===r.hash){t.preventDefault(),a.ownerDocument.getElementById(R)?.scrollIntoView();return}if(V=!0,be(O),e(r),!y.replace_state)return;V=!1,t.preventDefault()}ie({url:r,scroll:y.noscroll?Q():null,keepfocus:y.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:y.replace_state??r.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),c.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formMethod||a.method)!=="get")return;const f=new URL(r?.hasAttribute("formaction")&&r?.formAction||a.action);if(we(f,B))return;const m=t.target,{keep_focus:y,noscroll:E,reload:v,replace_state:R}=le(m);if(v)return;t.preventDefault(),t.stopPropagation();const _=new FormData(m),k=r?.getAttribute("name");k&&_.append(k,r?.getAttribute("value")??""),f.search=new URLSearchParams(_).toString(),ie({url:f,scroll:E?Q():null,keepfocus:y??!1,redirect_chain:[],details:{state:{},replaceState:R??f.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{if(t.state?.[C]){if(t.state[C]===O)return;const a=G[t.state[C]];if(d.url.href.split("#")[0]===location.href.split("#")[0]){G[O]=Q(),O=t.state[C],scrollTo(a.x,a.y);return}const r=t.state[C]-O;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=t.state[C]},blocked:()=>{history.go(-r)},type:"popstate",delta:r})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++O},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)});function e(t){d.url=t,F.page.set({...q,url:t}),F.page.notify()}},_hydrate:async({status:e=200,error:t,node_ids:a,params:r,route:l,data:f,form:m})=>{U=!0;const y=new URL(location.href);({params:r={},route:l={id:null}}=Y(y,!1)||{});let E;try{const v=a.map(async(k,h)=>{const P=f[h];return P?.uses&&(P.uses=Ge(P.uses)),de({loader:n.nodes[k],url:y,params:r,route:l,parent:async()=>{const M={};for(let x=0;x<h;x+=1)Object.assign(M,(await v[x]).data);return M},server_data_node:pe(P)})}),R=await Promise.all(v),_=u.find(({id:k})=>k===l.id);if(_){const k=_.layouts;for(let h=0;h<k.length;h++)k[h]||R.splice(h,0,void 0)}E=await W({url:y,params:r,branch:R,status:e,error:t,form:m,route:_??null})}catch(v){if(v instanceof Me){await K(new URL(v.location,location.href));return}E=await oe({status:v instanceof ee?v.status:500,error:await X(v,{url:y,params:r,route:l}),url:y,route:l})}Oe(E)}}}async function Ve(n,s){const u=new URL(n);u.pathname=tt(n.pathname),n.pathname.endsWith("/")&&u.searchParams.append(Et,"1"),u.searchParams.append(bt,s.map(p=>p?"1":"0").join(""));const o=await fe(u.href);if(!o.ok)throw new ee(o.status,await o.json());return new Promise(async p=>{const c=new Map,S=o.body.getReader(),i=new TextDecoder;function w(d){return gt(d,{Promise:U=>new Promise((I,b)=>{c.set(U,{fulfil:I,reject:b})})})}let g="";for(;;){const{done:d,value:U}=await S.read();if(d&&!g)break;for(g+=!U&&g?`
`:i.decode(U);;){const I=g.indexOf(`
`);if(I===-1)break;const b=JSON.parse(g.slice(0,I));if(g=g.slice(I+1),b.type==="redirect")return p(b);if(b.type==="data")b.nodes?.forEach(L=>{L?.type==="data"&&(L.uses=Ge(L.uses),L.data=w(L.data))}),p(b);else if(b.type==="chunk"){const{id:L,data:j,error:V}=b,H=c.get(L);c.delete(L),V?H.reject(w(V)):H.fulfil(w(j))}}}})}function Ge(n){return{dependencies:new Set(n?.dependencies??[]),params:new Set(n?.params??[]),parent:!!n?.parent,route:!!n?.route,url:!!n?.url}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const s=document.body,u=s.getAttribute("tabindex");s.tabIndex=-1,s.focus({preventScroll:!0,focusVisible:!1}),u!==null?s.setAttribute("tabindex",u):s.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const p=[];for(let c=0;c<o.rangeCount;c+=1)p.push(o.getRangeAt(c));setTimeout(()=>{if(o.rangeCount===p.length){for(let c=0;c<o.rangeCount;c+=1){const S=p[c],i=o.getRangeAt(c);if(S.commonAncestorContainer!==i.commonAncestorContainer||S.startContainer!==i.startContainer||S.endContainer!==i.endContainer||S.startOffset!==i.startOffset||S.endOffset!==i.endOffset)return}o.removeAllRanges()}})}}}async function It(n,s,u){const o=St(n,s);Ke({client:o}),u?await o._hydrate(u):o.goto(location.href,{replaceState:!0}),o._start_router()}export{It as start};