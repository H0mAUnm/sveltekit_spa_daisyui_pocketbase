import{s as A,n as H,o as B,i as L}from"../chunks/scheduler.a6287574.js";import{S as F,i as J,e as N,a as U,f,g as u,s as S,m as w,h as m,j as h,c as D,n as M,k as d,x as i,o as O}from"../chunks/index.3e76b7a6.js";import{p as K}from"../chunks/stores.10c58602.js";import{g as R}from"../chunks/utils.85594516.js";const Q=async({locals:o,params:e})=>e,ee=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"}));function T(o){let e,t,a,l,p,c,r,v=o[0].name+"",I,P,_,g=o[0].tagline+"",y,k,b,j=o[0].description+"",E;return{c(){e=u("div"),t=u("div"),a=u("div"),l=u("img"),c=S(),r=u("h1"),I=w(v),P=S(),_=u("p"),y=w(g),k=S(),b=u("p"),E=w(j),this.h()},l(n){e=m(n,"DIV",{class:!0});var s=h(e);t=m(s,"DIV",{class:!0});var V=h(t);a=m(V,"DIV",{class:!0});var q=h(a);l=m(q,"IMG",{src:!0,alt:!0}),q.forEach(f),V.forEach(f),c=D(s),r=m(s,"H1",{class:!0});var C=h(r);I=M(C,v),C.forEach(f),P=D(s),_=m(s,"P",{class:!0});var z=h(_);y=M(z,g),z.forEach(f),k=D(s),b=m(s,"P",{});var G=h(b);E=M(G,j),G.forEach(f),s.forEach(f),this.h()},h(){L(l.src,p=o[0]?.thumbnail?R(o[0].collectionId,o[0].id,o[0].thumbnail,"80x80"):"")||d(l,"src",p),d(l,"alt","project thumbnail"),d(a,"class","w-20 rounded"),d(t,"class","avatar"),d(r,"class","text-2xl font-bold mt-4"),d(_,"class","text-2xl font-light mt-2"),d(e,"class","flex flex-col w-full mt-4")},m(n,s){U(n,e,s),i(e,t),i(t,a),i(a,l),i(e,c),i(e,r),i(r,I),i(e,P),i(e,_),i(_,y),i(e,k),i(e,b),i(b,E)},p(n,s){s&1&&!L(l.src,p=n[0]?.thumbnail?R(n[0].collectionId,n[0].id,n[0].thumbnail,"80x80"):"")&&d(l,"src",p),s&1&&v!==(v=n[0].name+"")&&O(I,v),s&1&&g!==(g=n[0].tagline+"")&&O(y,g),s&1&&j!==(j=n[0].description+"")&&O(E,j)},d(n){n&&f(e)}}}function W(o){let e,t=o[0]?.id!=null&&T(o);return{c(){t&&t.c(),e=N()},l(a){t&&t.l(a),e=N()},m(a,l){t&&t.m(a,l),U(a,e,l)},p(a,[l]){a[0]?.id!=null?t?t.p(a,l):(t=T(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(a){a&&f(e),t&&t.d(a)}}}function X(o,e,t){let{data:a}=e,l;B(async()=>{p(a.projectId)});const p=async c=>{try{t(0,l=structuredClone(await K.collection("projects").getOne(c)))}catch(r){console.log(r.status,r.data)}};return o.$$set=c=>{"data"in c&&t(1,a=c.data)},[l,a]}class te extends F{constructor(e){super(),J(this,e,X,W,A,{data:1})}}export{te as component,ee as universal};