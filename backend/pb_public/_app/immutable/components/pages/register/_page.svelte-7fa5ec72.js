import{S as X,i as Y,s as ee,k as _,q as P,a as x,w as k,l as v,m as w,r as q,h as $,c as S,x as F,n as f,b as te,H as t,y as H,R as ae,Z as re,f as N,t as T,z as j}from"../../../chunks/index-aedd6872.js";import{I as z}from"../../../chunks/Input-ab618a3e.js";import"../../../chunks/forms-f02374ed.js";import{v as se,a as ne}from"../../../chunks/utils-04416275.js";import{g as oe}from"../../../chunks/navigation-b75dba13.js";import{p as J,U as le}from"../../../chunks/stores-3f27b470.js";import{r as ie}from"../../../chunks/schemas-fdc952c7.js";function me(i){let s,m,b,y,l,U,o,E,I,C,a,u,A,c,B,p,L,d,M,D,h,Z,V,G,K;return u=new z({props:{id:"name",label:"Name",value:i[1]?.name,errors:i[0]?.name}}),c=new z({props:{type:"email",id:"email",label:"Email",value:i[1]?.email,errors:i[0]?.email}}),p=new z({props:{type:"password",id:"password",label:"Password",errors:i[0]?.password}}),d=new z({props:{type:"password",id:"passwordConfirm",label:"Confirm Password",errors:i[0]?.passwordConfirm}}),{c(){s=_("div"),m=_("h2"),b=P("Register for an account"),y=x(),l=_("p"),U=P("Or "),o=_("a"),E=P("sign in"),I=P(" if you already have an account."),C=x(),a=_("form"),k(u.$$.fragment),A=x(),k(c.$$.fragment),B=x(),k(p.$$.fragment),L=x(),k(d.$$.fragment),M=x(),D=_("div"),h=_("button"),Z=P("Register"),this.h()},l(e){s=v(e,"DIV",{class:!0});var r=w(s);m=v(r,"H2",{class:!0});var R=w(m);b=q(R,"Register for an account"),R.forEach($),y=S(r),l=v(r,"P",{class:!0});var g=w(l);U=q(g,"Or "),o=v(g,"A",{href:!0,class:!0});var O=w(o);E=q(O,"sign in"),O.forEach($),I=q(g," if you already have an account."),g.forEach($),C=S(r),a=v(r,"FORM",{class:!0});var n=w(a);F(u.$$.fragment,n),A=S(n),F(c.$$.fragment,n),B=S(n),F(p.$$.fragment,n),L=S(n),F(d.$$.fragment,n),M=S(n),D=v(n,"DIV",{class:!0});var Q=w(D);h=v(Q,"BUTTON",{type:!0,class:!0});var W=w(h);Z=q(W,"Register"),W.forEach($),Q.forEach($),n.forEach($),r.forEach($),this.h()},h(){f(m,"class","mt-2 text-center text-3xl font-bold tracking-tight text-base-content"),f(o,"href","/login"),f(o,"class","text-primary font-medium hover:cursor-pointer hover:underline"),f(l,"class","text-center mt-1"),f(h,"type","submit"),f(h,"class","btn btn-primary w-full"),f(D,"class","w-full max-w-lg pt-2"),f(a,"class","flex flex-col items-center space-y-2 w-full pt-4"),f(s,"class","flex flex-col items-center h-full w-full")},m(e,r){te(e,s,r),t(s,m),t(m,b),t(s,y),t(s,l),t(l,U),t(l,o),t(o,E),t(l,I),t(s,C),t(s,a),H(u,a,null),t(a,A),H(c,a,null),t(a,B),H(p,a,null),t(a,L),H(d,a,null),t(a,M),t(a,D),t(D,h),t(h,Z),V=!0,G||(K=ae(a,"submit",re(i[2])),G=!0)},p(e,[r]){const R={};r&2&&(R.value=e[1]?.name),r&1&&(R.errors=e[0]?.name),u.$set(R);const g={};r&2&&(g.value=e[1]?.email),r&1&&(g.errors=e[0]?.email),c.$set(g);const O={};r&1&&(O.errors=e[0]?.password),p.$set(O);const n={};r&1&&(n.errors=e[0]?.passwordConfirm),d.$set(n)},i(e){V||(N(u.$$.fragment,e),N(c.$$.fragment,e),N(p.$$.fragment,e),N(d.$$.fragment,e),V=!0)},o(e){T(u.$$.fragment,e),T(c.$$.fragment,e),T(p.$$.fragment,e),T(d.$$.fragment,e),V=!1},d(e){e&&$(s),j(u),j(c),j(p),j(d),G=!1,K()}}}function fe(i,s,m){let b,y;async function l(U){const{formData:o,err:E}=await se(new FormData(U.target),ie);if(m(0,b=E?.fieldErrors),E){m(1,y=o);return}let I=ne(o.name.split(" ").join("")).toLowerCase();try{await J.collection("users").create({username:I,...o}),await J.collection("users").requestVerification(o.email),J.authStore.clear(),le.set(void 0),oe("/login")}catch(C){console.log(C.status,C.data)}}return[b,y,l]}class _e extends X{constructor(s){super(),Y(this,s,fe,me,ee,{})}}export{_e as default};
