import{S as re,i as se,s as le,k as i,a as y,q as K,w as N,l as o,m as u,h as c,c as A,r as O,x as Q,W as T,n as a,b as ne,H as t,y as X,u as Y,f as Z,t as x,z as ee}from"./index-aedd6872.js";import{I as ae,P as ie,E as oe}from"./Icon-befb2267.js";import{g as te}from"./utils-04416275.js";function ce(s){let r,m,n,v,B,d,F,I=s[0].name+"",V,G,w,P=s[0].tagline+"",q,H,h,g,p,$,D,L,b,_,E,C,f;return $=new ae({props:{src:ie,class:"w-4 h-4"}}),E=new ae({props:{src:oe,class:"w-4 h-4"}}),{c(){r=i("div"),m=i("figure"),n=i("img"),B=y(),d=i("div"),F=i("h2"),V=K(I),G=y(),w=i("p"),q=K(P),H=y(),h=i("div"),g=i("div"),p=i("a"),N($.$$.fragment),L=y(),b=i("div"),_=i("a"),N(E.$$.fragment),this.h()},l(e){r=o(e,"DIV",{class:!0});var l=u(r);m=o(l,"FIGURE",{class:!0});var R=u(m);n=o(R,"IMG",{src:!0,alt:!0}),R.forEach(c),B=A(l),d=o(l,"DIV",{class:!0});var j=u(d);F=o(j,"H2",{class:!0});var S=u(F);V=O(S,I),S.forEach(c),G=A(j),w=o(j,"P",{});var U=u(w);q=O(U,P),U.forEach(c),H=A(j),h=o(j,"DIV",{class:!0});var k=u(h);g=o(k,"DIV",{class:!0,"data-tip":!0});var z=u(g);p=o(z,"A",{href:!0,class:!0});var M=u(p);Q($.$$.fragment,M),M.forEach(c),z.forEach(c),L=A(k),b=o(k,"DIV",{class:!0,"data-tip":!0});var W=u(b);_=o(W,"A",{href:!0,class:!0});var J=u(_);Q(E.$$.fragment,J),J.forEach(c),W.forEach(c),k.forEach(c),j.forEach(c),l.forEach(c),this.h()},h(){T(n.src,v=s[0]?.thumbnail?te(s[0].collectionId,s[0].id,s[0].thumbnail):`https://via.placeholder.com/500/4506CB/FFFFFF/?text=${s[0].name}`)||a(n,"src",v),a(n,"alt","project thumbnail"),a(m,"class","max-h-32"),a(F,"class","card-title"),a(p,"href",D="/projects/"+s[0].id+"/edit"),a(p,"class","btn btn-square btn-sm"),a(g,"class","tooltip"),a(g,"data-tip","Edit Project"),a(_,"href",C="/projects/"+s[0].id),a(_,"class","btn btn-square btn-sm"),a(b,"class","tooltip"),a(b,"data-tip","View Project"),a(h,"class","card-actions"),a(d,"class","card-body p-4"),a(r,"class","card w-72 bg-base-100 shadow-xl border border-gray-200")},m(e,l){ne(e,r,l),t(r,m),t(m,n),t(r,B),t(r,d),t(d,F),t(F,V),t(d,G),t(d,w),t(w,q),t(d,H),t(d,h),t(h,g),t(g,p),X($,p,null),t(h,L),t(h,b),t(b,_),X(E,_,null),f=!0},p(e,[l]){(!f||l&1&&!T(n.src,v=e[0]?.thumbnail?te(e[0].collectionId,e[0].id,e[0].thumbnail):`https://via.placeholder.com/500/4506CB/FFFFFF/?text=${e[0].name}`))&&a(n,"src",v),(!f||l&1)&&I!==(I=e[0].name+"")&&Y(V,I),(!f||l&1)&&P!==(P=e[0].tagline+"")&&Y(q,P),(!f||l&1&&D!==(D="/projects/"+e[0].id+"/edit"))&&a(p,"href",D),(!f||l&1&&C!==(C="/projects/"+e[0].id))&&a(_,"href",C)},i(e){f||(Z($.$$.fragment,e),Z(E.$$.fragment,e),f=!0)},o(e){x($.$$.fragment,e),x(E.$$.fragment,e),f=!1},d(e){e&&c(r),ee($),ee(E)}}}function de(s,r,m){let{project:n}=r;return s.$$set=v=>{"project"in v&&m(0,n=v.project)},[n]}class he extends re{constructor(r){super(),se(this,r,de,ce,le,{project:0})}}export{he as P};