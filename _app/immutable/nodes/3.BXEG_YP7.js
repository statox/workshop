import{s as F,e as d,a as w,t as H,c as f,z as B,g as k,b as q,d as E,f as i,m as h,i as v,h as o,j as D,n as Y}from"../chunks/scheduler.BljvbZn4.js";import{S as N,i as Q}from"../chunks/index.BkauvWu_.js";function K(u){let a,x="About this website",c,s,J=`<div>This website is a collection of application I created for myself. You can access some
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
        R2 storage and various other technologies.</div>`,S,I,T,r,l,R='<img class="build-status-badge svelte-qyhcjz" src="https://github.com/statox/blog/actions/workflows/deploy.yml/badge.svg" alt="Build Status"/>',z,n,b,_=u[0].commitSha+"",C,L,G,g=u[0].commitMessage+"",M,P,m,y=u[0].buildTimeStr+"",j,A;return{c(){a=d("h2"),a.textContent=x,c=w(),s=d("div"),s.innerHTML=J,S=w(),I=d("br"),T=w(),r=d("div"),l=d("a"),l.innerHTML=R,z=w(),n=d("span"),b=d("a"),C=H(_),G=w(),M=H(g),P=H(`
        -
        `),m=d("a"),j=H(y),this.h()},l(t){a=f(t,"H2",{"data-svelte-h":!0}),B(a)!=="svelte-1f6uzy4"&&(a.textContent=x),c=k(t),s=f(t,"DIV",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-vfax8b"&&(s.innerHTML=J),S=k(t),I=f(t,"BR",{}),T=k(t),r=f(t,"DIV",{class:!0});var e=q(r);l=f(e,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),B(l)!=="svelte-1v2e5ul"&&(l.innerHTML=R),z=k(e),n=f(e,"SPAN",{});var p=q(n);b=f(p,"A",{href:!0});var U=q(b);C=E(U,_),U.forEach(i),G=k(p),M=E(p,g),P=E(p,`
        -
        `),m=f(p,"A",{href:!0});var V=q(m);j=E(V,y),V.forEach(i),p.forEach(i),e.forEach(i),this.h()},h(){h(s,"class","description"),h(l,"target","_blank"),h(l,"rel","noopener noreferrer"),h(l,"href","https://github.com/statox/apps/actions"),h(b,"href",L=u[0].commitLink),h(m,"href",A=u[0].buildUrl),h(r,"class","build-info svelte-qyhcjz")},m(t,e){v(t,a,e),v(t,c,e),v(t,s,e),v(t,S,e),v(t,I,e),v(t,T,e),v(t,r,e),o(r,l),o(r,z),o(r,n),o(n,b),o(b,C),o(n,G),o(n,M),o(n,P),o(n,m),o(m,j)},p(t,[e]){e&1&&_!==(_=t[0].commitSha+"")&&D(C,_),e&1&&L!==(L=t[0].commitLink)&&h(b,"href",L),e&1&&g!==(g=t[0].commitMessage+"")&&D(M,g),e&1&&y!==(y=t[0].buildTimeStr+"")&&D(j,y),e&1&&A!==(A=t[0].buildUrl)&&h(m,"href",A)},i:Y,o:Y,d(t){t&&(i(a),i(c),i(s),i(S),i(I),i(T),i(r))}}}function O(u,a,x){let{data:c}=a;return u.$$set=s=>{"data"in s&&x(0,c=s.data)},[c]}class Z extends N{constructor(a){super(),Q(this,a,O,K,F,{data:0})}}export{Z as component};
