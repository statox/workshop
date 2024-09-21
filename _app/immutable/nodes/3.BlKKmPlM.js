import{s as R,e as m,a as M,t as j,c as p,z as J,g as A,b as q,d as E,f as l,l as n,i as w,h as s,j as G,n as N}from"../chunks/scheduler.gZqC1beF.js";import{S as U,i as V}from"../chunks/index.qAIlD2bD.js";import"../chunks/entry.CVMf-p-A.js";import{p as Y}from"../chunks/Main.svelte_svelte_type_style_lang.40RNQviR.js";import"../chunks/auth0-spa-js.production.esm.D13UjCU2.js";function F(h){let a,y=`<div>This website is a collection of application I created for myself. You can access some
        features (mostly reading non-sensitive data) but any modification or access to sensitive
        data (theoretically) requires to login as myself, so you shouldn&#39;t be able to do it. (For
        now the authentication is handled via <a target="_blank" href="https://auth0.com/">auth0</a>
        and uses Github as the identity provider.</div> <br/> <div>If you are trying to find out more about me, you probably want to check out my blog
        <a target="_blank" href="https://www.statox.fr/">statox.fr</a> where I discuss some of the applications
        I created here as well as other projects.</div> <br/> <div>If you are curious about this website the sources are
        <a target="_blank" href="https://github.com/statox/apps.statox.fr">on Github</a>. It is
        deployed via Github pages (see the badge below for the latest build status and a quick
        access to the CI) and made with
        <a target="_blank" href="https://svelte.dev/">SvelteJS</a>.</div> <br/> <div>You can also find the sources of
        <a target="_blank" href="https://github.com/statox/api.statox.fr">the api I created</a> to
        power this website (and other projects). The API is hosted on Heroku, is made with
        <a target="_blank" href="https://expressjs.com/">ExpressJS</a> and uses a MySQL db, cloudflare
        R2 storage and various other technologies.</div>`,u,d,k,i,o,P='<img class="build-status-badge svelte-qyhcjz" src="https://github.com/statox/blog/actions/workflows/deploy.yml/badge.svg" alt="Build Status"/>',H,r,c,v=h[0].commitSha+"",S,I,C,_=h[0].commitMessage+"",x,z,f,g=h[0].buildTimeStr+"",T,L;return{c(){a=m("div"),a.innerHTML=y,u=M(),d=m("br"),k=M(),i=m("div"),o=m("a"),o.innerHTML=P,H=M(),r=m("span"),c=m("a"),S=j(v),C=M(),x=j(_),z=j(`
        -
        `),f=m("a"),T=j(g),this.h()},l(t){a=p(t,"DIV",{class:!0,"data-svelte-h":!0}),J(a)!=="svelte-vfax8b"&&(a.innerHTML=y),u=A(t),d=p(t,"BR",{}),k=A(t),i=p(t,"DIV",{class:!0});var e=q(i);o=p(e,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),J(o)!=="svelte-1v2e5ul"&&(o.innerHTML=P),H=A(e),r=p(e,"SPAN",{});var b=q(r);c=p(b,"A",{href:!0});var B=q(c);S=E(B,v),B.forEach(l),C=A(b),x=E(b,_),z=E(b,`
        -
        `),f=p(b,"A",{href:!0});var D=q(f);T=E(D,g),D.forEach(l),b.forEach(l),e.forEach(l),this.h()},h(){n(a,"class","description"),n(o,"target","_blank"),n(o,"rel","noopener noreferrer"),n(o,"href","https://github.com/statox/apps/actions"),n(c,"href",I=h[0].commitLink),n(f,"href",L=h[0].buildUrl),n(i,"class","build-info svelte-qyhcjz")},m(t,e){w(t,a,e),w(t,u,e),w(t,d,e),w(t,k,e),w(t,i,e),s(i,o),s(i,H),s(i,r),s(r,c),s(c,S),s(r,C),s(r,x),s(r,z),s(r,f),s(f,T)},p(t,[e]){e&1&&v!==(v=t[0].commitSha+"")&&G(S,v),e&1&&I!==(I=t[0].commitLink)&&n(c,"href",I),e&1&&_!==(_=t[0].commitMessage+"")&&G(x,_),e&1&&g!==(g=t[0].buildTimeStr+"")&&G(T,g),e&1&&L!==(L=t[0].buildUrl)&&n(f,"href",L)},i:N,o:N,d(t){t&&(l(a),l(u),l(d),l(k),l(i))}}}function Q(h,a,y){Y.set("About this website");let{data:u}=a;return h.$$set=d=>{"data"in d&&y(0,u=d.data)},[u]}class $ extends U{constructor(a){super(),V(this,a,Q,F,R,{data:0})}}export{$ as component};
