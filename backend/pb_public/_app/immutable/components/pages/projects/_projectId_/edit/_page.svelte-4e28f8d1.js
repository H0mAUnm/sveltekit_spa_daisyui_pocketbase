import{S as ke,i as je,s as Ee,e as K,b as z,t as U,d as ge,f as T,h as _,U as ye,g as ve,q as Q,r as X,B as J,k as $,a as y,w as M,l as w,m as k,c as I,x as Y,n as c,W as me,H as f,y as G,R as se,Z as $e,u as we,z as W,D as Ie,Y as Te}from"../../../../../chunks/index-aedd6872.js";import{p as pe,U as Ue}from"../../../../../chunks/stores-3f27b470.js";import{g as Le}from"../../../../../chunks/navigation-b75dba13.js";import{I as Pe,T as De}from"../../../../../chunks/Icon-befb2267.js";import{I as ne}from"../../../../../chunks/Input-ab618a3e.js";import"../../../../../chunks/forms-f02374ed.js";import{g as Ne,v as Re}from"../../../../../chunks/utils-04416275.js";import{t as Se}from"../../../../../chunks/toast-5c5c4103.js";import{T as Be}from"../../../../../chunks/TextArea-4a2cbcb3.js";import{e as Ae}from"../../../../../chunks/schemas-fdc952c7.js";import{s as Oe}from"../../../../../chunks/index-3da723cb.js";const Z=""+new URL("../../../../../assets/dummyThumbnail-5301149f.svg",import.meta.url).href;function de(n,l,t){const e=n.slice();return e[11]=l[t],e}function Ce(n){let l;return{c(){l=Q("Editing Forbidden! or Project Not found!")},l(t){l=X(t,"Editing Forbidden! or Project Not found!")},m(t,e){z(t,l,e)},p:J,i:J,o:J,d(t){t&&_(l)}}}function Fe(n){let l,t,e,a,u,r,o,i,g,v,A,H,p,j,E=n[1].name+"",S,O,L,x,P,ee,D,te,N,re,C,B,le,F,ae,oe,d=n[2]!=Z&&he(n),b=n[0]?.thumbnail&&_e(n);return L=new ne({props:{id:"name",label:"Project name",value:n[3]?.name??n[1].name,errors:n[0]?.name}}),P=new ne({props:{id:"tagline",label:"Project tagline",value:n[3]?.tagline??n[1].tagline,errors:n[0]?.tagline}}),D=new ne({props:{id:"url",label:"Project URL",value:n[3]?.url??n[1].url,errors:n[0]?.url}}),N=new Be({props:{id:"description",label:"Project description",value:n[3]?.description??n[1].description,errors:n[0]?.description}}),{c(){l=$("div"),t=$("div"),e=$("form"),a=$("input"),u=y(),r=$("label"),o=$("label"),d&&d.c(),i=y(),g=$("div"),v=$("img"),H=y(),b&&b.c(),p=y(),j=$("h3"),S=Q(E),O=y(),M(L.$$.fragment),x=y(),M(P.$$.fragment),ee=y(),M(D.$$.fragment),te=y(),M(N.$$.fragment),re=y(),C=$("div"),B=$("button"),le=Q("Save Changes"),this.h()},l(s){l=w(s,"DIV",{class:!0});var h=k(l);t=w(h,"DIV",{class:!0});var V=k(t);e=w(V,"FORM",{class:!0,enctype:!0});var m=k(e);a=w(m,"INPUT",{type:!0,name:!0,id:!0,class:!0}),u=I(m),r=w(m,"LABEL",{for:!0,class:!0});var R=k(r);o=w(R,"LABEL",{for:!0,class:!0});var q=k(o);d&&d.l(q),q.forEach(_),i=I(R),g=w(R,"DIV",{class:!0});var ie=k(g);v=w(ie,"IMG",{id:!0,src:!0,alt:!0}),ie.forEach(_),R.forEach(_),H=I(m),b&&b.l(m),p=I(m),j=w(m,"H3",{class:!0});var ue=k(j);S=X(ue,E),ue.forEach(_),O=I(m),Y(L.$$.fragment,m),x=I(m),Y(P.$$.fragment,m),ee=I(m),Y(D.$$.fragment,m),te=I(m),Y(N.$$.fragment,m),re=I(m),C=w(m,"DIV",{class:!0});var ce=k(C);B=w(ce,"BUTTON",{type:!0,class:!0});var fe=k(B);le=X(fe,"Save Changes"),fe.forEach(_),ce.forEach(_),m.forEach(_),V.forEach(_),h.forEach(_),this.h()},h(){c(a,"type","file"),c(a,"name","thumbnail"),c(a,"id","thumbnail"),c(a,"class","file-input file-input-bordered w-full max-w-lg mt-2"),a.hidden=!0,c(o,"for","thumbnail"),c(o,"class","absolute -top-3 -right-4 hover:cursor-pointer"),c(v,"id","thumbnail-preview"),me(v.src,A=n[2])||c(v,"src",A),c(v,"alt","project thumbnail"),c(g,"class","w-20 rounded"),c(r,"for","thumbnail"),c(r,"class","avatar w-20 hover:cursor-pointer "),c(j,"class","text-3xl font-bold"),c(B,"type","submit"),c(B,"class","btn btn-primary w-full max-w-lg"),c(C,"class","w-full max-w-lg pt-3"),c(e,"class","flex flex-col space-y-2 w-full items-center"),c(e,"enctype","multipart/form-data"),c(t,"class","w-full"),c(l,"class","flex flex-col w-full h-full p-2")},m(s,h){z(s,l,h),f(l,t),f(t,e),f(e,a),f(e,u),f(e,r),f(r,o),d&&d.m(o,null),f(r,i),f(r,g),f(g,v),f(e,H),b&&b.m(e,null),f(e,p),f(e,j),f(j,S),f(e,O),G(L,e,null),f(e,x),G(P,e,null),f(e,ee),G(D,e,null),f(e,te),G(N,e,null),f(e,re),f(e,C),f(C,B),f(B,le),F=!0,ae||(oe=[se(a,"change",n[5]),se(e,"submit",$e(n[4]))],ae=!0)},p(s,h){s[2]!=Z?d?(d.p(s,h),h&4&&T(d,1)):(d=he(s),d.c(),T(d,1),d.m(o,null)):d&&(ve(),U(d,1,1,()=>{d=null}),ge()),(!F||h&4&&!me(v.src,A=s[2]))&&c(v,"src",A),s[0]?.thumbnail?b?b.p(s,h):(b=_e(s),b.c(),b.m(e,p)):b&&(b.d(1),b=null),(!F||h&2)&&E!==(E=s[1].name+"")&&we(S,E);const V={};h&2&&(V.value=s[3]?.name??s[1].name),h&1&&(V.errors=s[0]?.name),L.$set(V);const m={};h&2&&(m.value=s[3]?.tagline??s[1].tagline),h&1&&(m.errors=s[0]?.tagline),P.$set(m);const R={};h&2&&(R.value=s[3]?.url??s[1].url),h&1&&(R.errors=s[0]?.url),D.$set(R);const q={};h&2&&(q.value=s[3]?.description??s[1].description),h&1&&(q.errors=s[0]?.description),N.$set(q)},i(s){F||(T(d),T(L.$$.fragment,s),T(P.$$.fragment,s),T(D.$$.fragment,s),T(N.$$.fragment,s),F=!0)},o(s){U(d),U(L.$$.fragment,s),U(P.$$.fragment,s),U(D.$$.fragment,s),U(N.$$.fragment,s),F=!1},d(s){s&&_(l),d&&d.d(),b&&b.d(),W(L),W(P),W(D),W(N),ae=!1,Ie(oe)}}}function he(n){let l,t,e,a,u;return t=new Pe({props:{src:De,class:"w-5 h-5 text-white"}}),{c(){l=$("button"),M(t.$$.fragment),this.h()},l(r){l=w(r,"BUTTON",{class:!0});var o=k(l);Y(t.$$.fragment,o),o.forEach(_),this.h()},h(){c(l,"class","btn btn-error btn-sm btn-circle")},m(r,o){z(r,l,o),G(t,l,null),e=!0,a||(u=se(l,"click",$e(n[6])),a=!0)},p:J,i(r){e||(T(t.$$.fragment,r),e=!0)},o(r){U(t.$$.fragment,r),e=!1},d(r){r&&_(l),W(t),a=!1,u()}}}function _e(n){let l,t=n[0]?.thumbnail,e=[];for(let a=0;a<t.length;a+=1)e[a]=be(de(n,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=K()},l(a){for(let u=0;u<e.length;u+=1)e[u].l(a);l=K()},m(a,u){for(let r=0;r<e.length;r+=1)e[r].m(a,u);z(a,l,u)},p(a,u){if(u&1){t=a[0]?.thumbnail;let r;for(r=0;r<t.length;r+=1){const o=de(a,t,r);e[r]?e[r].p(o,u):(e[r]=be(o),e[r].c(),e[r].m(l.parentNode,l))}for(;r<e.length;r+=1)e[r].d(1);e.length=t.length}},d(a){Te(e,a),a&&_(l)}}}function be(n){let l,t,e=n[11]+"",a,u;return{c(){l=$("label"),t=$("span"),a=Q(e),u=y(),this.h()},l(r){l=w(r,"LABEL",{for:!0,class:!0});var o=k(l);t=w(o,"SPAN",{class:!0});var i=k(t);a=X(i,e),i.forEach(_),u=I(o),o.forEach(_),this.h()},h(){c(t,"class","label-text-alt text-error"),c(l,"for","thumbnail"),c(l,"class","label py-0 pt-1")},m(r,o){z(r,l,o),f(l,t),f(t,a),f(l,u)},p(r,o){o&1&&e!==(e=r[11]+"")&&we(a,e)},d(r){r&&_(l)}}}function Ve(n){let l,t,e,a;const u=[Fe,Ce],r=[];function o(i,g){return i[1]?.id!=null?0:1}return l=o(n),t=r[l]=u[l](n),{c(){t.c(),e=K()},l(i){t.l(i),e=K()},m(i,g){r[l].m(i,g),z(i,e,g),a=!0},p(i,[g]){let v=l;l=o(i),l===v?r[l].p(i,g):(ve(),U(r[v],1,1,()=>{r[v]=null}),ge(),t=r[l],t?t.p(i,g):(t=r[l]=u[l](i),t.c()),T(t,1),t.m(e.parentNode,e))},i(i){a||(T(t),a=!0)},o(i){U(t),a=!1},d(i){r[l].d(i),i&&_(e)}}}function qe(n,l,t){let e;ye(n,Ue,p=>t(8,e=p));let a,u,{data:r}=l,o,i;const g=async()=>{try{const p=structuredClone(await pe.collection("projects").getOne(r.projectId));e.id==p.user?(t(1,o=p),o.thumbnail?t(2,i=Ne(o.collectionId,o.id,o.thumbnail,"80x80")):t(2,i=Z)):Se.error("You may fork this project!",{position:"bottom-center",style:" padding: 16px; color: white; background-color: coral;"})}catch(p){console.log(p.status,p.data)}};async function v(p){let j=new FormData(p.target);i==Z&&E.set("thumbnail",null);const{formData:E,err:S}=await Re(j,Ae);if(t(0,a=S?.fieldErrors),!S){try{await pe.collection("projects").update(r.projectId,Oe.serialize(E))}catch(O){console.log(O.status,O.data)}Le("/my/projects/")}}const A=p=>{const j=p.target.files;if(j.length>0){const E=URL.createObjectURL(j[0]);t(2,i=E)}};async function H(p){t(2,i=Z)}return n.$$set=p=>{"data"in p&&t(7,r=p.data)},n.$$.update=()=>{n.$$.dirty&256&&(e.id,e.id&&g())},[a,o,i,u,v,A,H,r,e]}class xe extends ke{constructor(l){super(),je(this,l,qe,Ve,Ee,{data:7})}}export{xe as default};