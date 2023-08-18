import{s as R,n as q}from"../chunks/scheduler.a6287574.js";import{S as W,i as Y,g as c,s as _,m as G,h as d,j as H,B as L,c as y,n as J,f as M,k as o,a as N,x as a,A as K,D as Q}from"../chunks/index.3e76b7a6.js";import{g as X}from"../chunks/navigation.d1a89a94.js";import{p as k,U as Z}from"../chunks/stores.10c58602.js";import{v as $}from"../chunks/utils.85594516.js";import{l as ee}from"../chunks/schemas.0ec87125.js";import{t as z}from"../chunks/Toaster.svelte_svelte_type_style_lang.3e69948a.js";function A(x){let e,l='<div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>You must verify your email before you can login.</span></div>';return{c(){e=c("div"),e.innerHTML=l,this.h()},l(r){e=d(r,"DIV",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-mqd2by"&&(e.innerHTML=l),this.h()},h(){o(e,"class","alert alert-error shadow-lg w-full max-w-md")},m(r,f){N(r,e,f)},d(r){r&&M(e)}}}function te(x){let e,l,r="Login to your account",f,u,T='Or <a href="/register" class="text-primary font-medium hover:cursor-pointer hover:underline">register</a> if you don&#39;t already have an account.',b,t,n,P='<label for="email" class="label font-medium pb-1"><span class="label-text">Email</span></label> <input type="email" name="email" class="input input-bordered w-full max-w-md"/>',D,v,U='<label for="password" class="label font-medium pb-1"><span class="label-text">Password</span></label> <input type="password" name="password" class="input input-bordered w-full max-w-md"/>',C,w,B='<a href="/reset-password" class="font-medium text-primary hover:cursor-pointer hover:underline">Forgot Password?</a>',I,g,p,S,V,E,F,s=x[0]&&A();return{c(){e=c("div"),l=c("h2"),l.textContent=r,f=_(),u=c("p"),u.innerHTML=T,b=_(),t=c("form"),n=c("div"),n.innerHTML=P,D=_(),v=c("div"),v.innerHTML=U,C=_(),w=c("div"),w.innerHTML=B,I=_(),g=c("div"),p=c("button"),S=G("Login"),V=_(),s&&s.c(),this.h()},l(h){e=d(h,"DIV",{class:!0});var i=H(e);l=d(i,"H2",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-1wfmsgl"&&(l.textContent=r),f=y(i),u=d(i,"P",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-nsumvm"&&(u.innerHTML=T),b=y(i),t=d(i,"FORM",{class:!0});var m=H(t);n=d(m,"DIV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-1f13tyf"&&(n.innerHTML=P),D=y(m),v=d(m,"DIV",{class:!0,"data-svelte-h":!0}),L(v)!=="svelte-tdrnkn"&&(v.innerHTML=U),C=y(m),w=d(m,"DIV",{class:!0,"data-svelte-h":!0}),L(w)!=="svelte-fvr5eu"&&(w.innerHTML=B),I=y(m),g=d(m,"DIV",{class:!0});var O=H(g);p=d(O,"BUTTON",{type:!0,class:!0});var j=H(p);S=J(j,"Login"),j.forEach(M),O.forEach(M),V=y(m),s&&s.l(m),m.forEach(M),i.forEach(M),this.h()},h(){o(l,"class","mt-2 text-center text-3xl font-bold tracking-tight text-base-content"),o(u,"class","text-center mt-1"),o(n,"class","form-control w-full max-w-md"),o(v,"class","form-control w-full max-w-md"),o(w,"class","w-full max-w-md"),o(p,"type","submit"),o(p,"class","btn btn-primary w-full"),p.disabled=x[1],o(g,"class","w-full max-w-md pt-2"),o(t,"class","flex flex-col items-center space-y-2 w-full pt-4"),o(e,"class","flex flex-col items-center h-full w-full")},m(h,i){N(h,e,i),a(e,l),a(e,f),a(e,u),a(e,b),a(e,t),a(t,n),a(t,D),a(t,v),a(t,C),a(t,w),a(t,I),a(t,g),a(g,p),a(p,S),a(t,V),s&&s.m(t,null),E||(F=K(t,"submit",Q(x[2])),E=!0)},p(h,[i]){i&2&&(p.disabled=h[1]),h[0]?s||(s=A(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:q,o:q,d(h){h&&M(e),s&&s.d(),E=!1,F()}}}function se(x,e,l){let r=!1,f=!1;async function u(T){const{formData:b,err:t}=await $(new FormData(T.target),ee);if(t){z.error("Invalid credentials",{position:"bottom-center"});return}l(1,f=!0);try{await k.collection("users").authWithPassword(b.email,b.password),k?.authStore?.model?.verified?(Z.set(k.authStore.model),X("/")):(k.authStore.clear(),console.log("Email not verified!"),l(0,r=!0))}catch(n){z.error(n.data.message,{position:"bottom-center"}),console.log(n.status,n.data)}l(1,f=!1)}return[r,f,u]}class ce extends W{constructor(e){super(),Y(this,e,se,te,R,{})}}export{ce as component};