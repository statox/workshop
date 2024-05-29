import{s as Me,H as ie,i as y,f as d,k as Ye,p as ct,e as f,c as p,z as S,n as Q,J as it,a as k,b as w,g as $,m as u,h as o,O as ce,C as Le,a0 as ut,y as ft,t as je,d as Te,j as Ge,M as pt}from"../chunks/scheduler.DteOhpMk.js";import{h as lt,u as dt}from"../chunks/await_block.DXiInOCA.js";import{S as Ve,i as Fe,g as Oe,t as T,c as ze,a as N,f as ht,b as ke,d as $e,m as xe,e as we}from"../chunks/index.CrBFWU7O.js";import{u as Ke,t as We}from"../chunks/service.BsT5ZtnN.js";import{r as vt,a as _t}from"../chunks/index.C1Z2xXLg.js";import{M as mt,D as bt,a as gt,b as Ct}from"../chunks/Main.hpydHerO.js";import{e as nt}from"../chunks/each.DUVIV4zj.js";const kt=!1,Yt=Object.freeze(Object.defineProperty({__proto__:null,ssr:kt},Symbol.toStringTag,{value:"Module"})),$t=async()=>await vt({path:"/webWatcher/getAllWatchers"}),xt=async r=>_t({path:"/webWatcher/createWatcher",data:r});function wt(r){let e,n="Login to upload content";return{c(){e=f("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-k7lhwu"&&(e.textContent=n)},m(t,l){y(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&d(e)}}}function Et(r){let e,n,t,l="Name",c,a,i,s,h,b="Check interval",_,x,g,C,m,E,q,Ee="Notification message (the @mention is automatically added)",ue,D,X,V,U,A,Z="URL",_e,z,F,W,H,fe="CSS selector",pe,B,R,ee,j,me="Upload",M,se,be;function te(v){r[8](v)}let Y={allowedUnits:["minutes","hours","days"],defaultDuration:{value:1,unit:"hours"}};return r[4]!==void 0&&(Y.valueInSeconds=r[4]),x=new mt({props:Y}),it.push(()=>ht(x,"valueInSeconds",te)),{c(){e=f("div"),n=f("p"),t=f("label"),t.textContent=l,c=k(),a=f("input"),i=k(),s=f("p"),h=f("label"),h.textContent=b,_=k(),ke(x.$$.fragment),C=k(),m=f("div"),E=f("p"),q=f("label"),q.textContent=Ee,ue=k(),D=f("input"),X=k(),V=f("div"),U=f("p"),A=f("label"),A.textContent=Z,_e=k(),z=f("input"),F=k(),W=f("p"),H=f("label"),H.textContent=fe,pe=k(),B=f("input"),R=k(),ee=f("p"),j=f("button"),j.textContent=me,this.h()},l(v){e=p(v,"DIV",{class:!0});var P=w(e);n=p(P,"P",{class:!0});var K=w(n);t=p(K,"LABEL",{for:!0,"data-svelte-h":!0}),S(t)!=="svelte-bs9sy6"&&(t.textContent=l),c=$(K),a=p(K,"INPUT",{type:!0,class:!0}),K.forEach(d),i=$(P),s=p(P,"P",{class:!0});var J=w(s);h=p(J,"LABEL",{for:!0,"data-svelte-h":!0}),S(h)!=="svelte-q7xqd"&&(h.textContent=b),_=$(J),$e(x.$$.fragment,J),J.forEach(d),P.forEach(d),C=$(v),m=p(v,"DIV",{class:!0});var ge=w(m);E=p(ge,"P",{class:!0});var O=w(E);q=p(O,"LABEL",{for:!0,"data-svelte-h":!0}),S(q)!=="svelte-dkopgm"&&(q.textContent=Ee),ue=$(O),D=p(O,"INPUT",{type:!0,class:!0}),O.forEach(d),ge.forEach(d),X=$(v),V=p(v,"DIV",{class:!0});var G=w(V);U=p(G,"P",{class:!0});var de=w(U);A=p(de,"LABEL",{for:!0,"data-svelte-h":!0}),S(A)!=="svelte-47691s"&&(A.textContent=Z),_e=$(de),z=p(de,"INPUT",{type:!0,class:!0}),de.forEach(d),F=$(G),W=p(G,"P",{class:!0});var re=w(W);H=p(re,"LABEL",{for:!0,"data-svelte-h":!0}),S(H)!=="svelte-1ib74yx"&&(H.textContent=fe),pe=$(re),B=p(re,"INPUT",{type:!0,class:!0}),re.forEach(d),G.forEach(d),R=$(v),ee=p(v,"P",{});var le=w(ee);j=p(le,"BUTTON",{"data-svelte-h":!0}),S(j)!=="svelte-15774uw"&&(j.textContent=me),le.forEach(d),this.h()},h(){u(t,"for","name"),u(a,"type","text"),u(a,"class","svelte-19dtsjx"),u(n,"class","section-1-item svelte-19dtsjx"),u(h,"for","check-interval"),u(s,"class","section-1-item svelte-19dtsjx"),u(e,"class","section svelte-19dtsjx"),u(q,"for","notification-message"),u(D,"type","textarea"),u(D,"class","svelte-19dtsjx"),u(E,"class","section-2-item svelte-19dtsjx"),u(m,"class","section svelte-19dtsjx"),u(A,"for","content"),u(z,"type","textarea"),u(z,"class","svelte-19dtsjx"),u(U,"class","section-3-item svelte-19dtsjx"),u(H,"for","css-selector"),u(B,"type","textarea"),u(B,"class","svelte-19dtsjx"),u(W,"class","section-3-item svelte-19dtsjx"),u(V,"class","section svelte-19dtsjx")},m(v,P){y(v,e,P),o(e,n),o(n,t),o(n,c),o(n,a),ce(a,r[0]),o(e,i),o(e,s),o(s,h),o(s,_),xe(x,s,null),y(v,C,P),y(v,m,P),o(m,E),o(E,q),o(E,ue),o(E,D),ce(D,r[1]),y(v,X,P),y(v,V,P),o(V,U),o(U,A),o(U,_e),o(U,z),ce(z,r[2]),o(V,F),o(V,W),o(W,H),o(W,pe),o(W,B),ce(B,r[3]),y(v,R,P),y(v,ee,P),o(ee,j),M=!0,se||(be=[Le(a,"input",r[7]),Le(D,"input",r[9]),Le(z,"input",r[10]),Le(B,"input",r[11]),Le(j,"click",r[6])],se=!0)},p(v,P){P&1&&a.value!==v[0]&&ce(a,v[0]);const K={};!g&&P&16&&(g=!0,K.valueInSeconds=v[4],ut(()=>g=!1)),x.$set(K),P&2&&ce(D,v[1]),P&4&&ce(z,v[2]),P&8&&ce(B,v[3])},i(v){M||(N(x.$$.fragment,v),M=!0)},o(v){T(x.$$.fragment,v),M=!1},d(v){v&&(d(e),d(C),d(m),d(X),d(V),d(R),d(ee)),we(x),se=!1,ft(be)}}}function yt(r){let e,n,t,l;const c=[Et,wt],a=[];function i(s,h){return s[5]?0:1}return e=i(r),n=a[e]=c[e](r),{c(){n.c(),t=ie()},l(s){n.l(s),t=ie()},m(s,h){a[e].m(s,h),y(s,t,h),l=!0},p(s,[h]){let b=e;e=i(s),e===b?a[e].p(s,h):(Oe(),T(a[b],1,1,()=>{a[b]=null}),ze(),n=a[e],n?n.p(s,h):(n=a[e]=c[e](s),n.c()),N(n,1),n.m(t.parentNode,t))},i(s){l||(N(n),l=!0)},o(s){T(n),l=!1},d(s){s&&d(t),a[e].d(s)}}}function Lt(r,e,n){let t;Ye(r,Ke,E=>n(5,t=E));const l=ct();let c,a,i,s,h;const b=async()=>{if(!c.length||!a||!s){console.error("name should be defined");return}try{new URL(i)}catch{We.push("<strong>URL is invalid</strong>",{theme:{"--toastBarBackground":"#FF0000"}});return}if(h<15*60){We.push("<strong>Check interval too small</strong><br/>Must be >= 15mn",{theme:{"--toastBarBackground":"#FF0000"}});return}try{await xt({name:c,notificationMessage:a,url:i,cssSelector:s,checkIntervalSeconds:h}),l("upload")}catch(E){const q=`<strong>Entry not created</strong><br/> ${E.message}`;We.push(q,{theme:{"--toastBarBackground":"#FF0000"}})}};function _(){c=this.value,n(0,c)}function x(E){h=E,n(4,h)}function g(){a=this.value,n(1,a)}function C(){i=this.value,n(2,i)}function m(){s=this.value,n(3,s)}return[c,a,i,s,h,t,b,_,x,g,C,m]}class Pt extends Ve{constructor(e){super(),Fe(this,e,Lt,yt,Me,{})}}function st(r){let e,n,t=r[0].name+"",l,c,a,i,s,h,b,_="Check interval (seconds)",x,g,C,m,E,q,Ee="Notification message",ue,D,X,V,U,A,Z,_e="URL",z,F,W=r[0].url+"",H,fe,pe,B,R,ee,j,me,M,se,be,te,Y,v,P="Last check",K,J,ge,O,G,de="Last content change",re,le,He,Ce,oe,he,Qe="Last content",Re,ae,ye,ne;return a=new gt({}),a.$on("delete",r[5]),j=new Ct({props:{content:r[0].cssSelector}}),{c(){e=f("div"),n=f("h4"),l=je(t),c=k(),ke(a.$$.fragment),i=k(),s=f("div"),h=f("p"),b=f("label"),b.textContent=_,x=k(),g=f("input"),C=k(),m=f("div"),E=f("p"),q=f("label"),q.textContent=Ee,ue=k(),D=f("input"),V=k(),U=f("div"),A=f("p"),Z=f("label"),Z.textContent=_e,z=k(),F=f("a"),H=je(W),pe=k(),B=f("p"),R=f("label"),ee=je(`CSS selector
                    `),ke(j.$$.fragment),me=k(),M=f("input"),be=k(),te=f("div"),Y=f("p"),v=f("label"),v.textContent=P,K=k(),J=f("input"),ge=k(),O=f("p"),G=f("label"),G.textContent=de,re=k(),le=f("input"),He=k(),Ce=f("div"),oe=f("p"),he=f("label"),he.textContent=Qe,Re=k(),ae=f("input"),this.h()},l(I){e=p(I,"DIV",{class:!0});var L=w(e);n=p(L,"H4",{class:!0});var ve=w(n);l=Te(ve,t),c=$(ve),$e(a.$$.fragment,ve),ve.forEach(d),i=$(L),s=p(L,"DIV",{class:!0});var Xe=w(s);h=p(Xe,"P",{class:!0});var Pe=w(h);b=p(Pe,"LABEL",{for:!0,"data-svelte-h":!0}),S(b)!=="svelte-fnhv3x"&&(b.textContent=_),x=$(Pe),g=p(Pe,"INPUT",{type:!0,class:!0}),Pe.forEach(d),Xe.forEach(d),C=$(L),m=p(L,"DIV",{class:!0});var Ze=w(m);E=p(Ze,"P",{class:!0});var Ie=w(E);q=p(Ie,"LABEL",{for:!0,"data-svelte-h":!0}),S(q)!=="svelte-1rjok9v"&&(q.textContent=Ee),ue=$(Ie),D=p(Ie,"INPUT",{type:!0,class:!0}),Ie.forEach(d),Ze.forEach(d),V=$(L),U=p(L,"DIV",{class:!0});var Se=w(U);A=p(Se,"P",{class:!0});var qe=w(A);Z=p(qe,"LABEL",{for:!0,"data-svelte-h":!0}),S(Z)!=="svelte-47691s"&&(Z.textContent=_e),z=$(qe),F=p(qe,"A",{target:!0,rel:!0,href:!0});var et=w(F);H=Te(et,W),et.forEach(d),qe.forEach(d),pe=$(Se),B=p(Se,"P",{class:!0});var De=w(B);R=p(De,"LABEL",{for:!0});var Je=w(R);ee=Te(Je,`CSS selector
                    `),$e(j.$$.fragment,Je),Je.forEach(d),me=$(De),M=p(De,"INPUT",{type:!0,class:!0}),De.forEach(d),Se.forEach(d),be=$(L),te=p(L,"DIV",{class:!0});var Ue=w(te);Y=p(Ue,"P",{class:!0});var Be=w(Y);v=p(Be,"LABEL",{for:!0,"data-svelte-h":!0}),S(v)!=="svelte-l58ce3"&&(v.textContent=P),K=$(Be),J=p(Be,"INPUT",{type:!0,class:!0}),Be.forEach(d),ge=$(Ue),O=p(Ue,"P",{class:!0});var Ne=w(O);G=p(Ne,"LABEL",{for:!0,"data-svelte-h":!0}),S(G)!=="svelte-r6rd2z"&&(G.textContent=de),re=$(Ne),le=p(Ne,"INPUT",{type:!0,class:!0}),Ne.forEach(d),Ue.forEach(d),He=$(L),Ce=p(L,"DIV",{class:!0});var tt=w(Ce);oe=p(tt,"P",{class:!0});var Ae=w(oe);he=p(Ae,"LABEL",{for:!0,"data-svelte-h":!0}),S(he)!=="svelte-1hxqr7r"&&(he.textContent=Qe),Re=$(Ae),ae=p(Ae,"INPUT",{type:!0,class:!0}),Ae.forEach(d),tt.forEach(d),L.forEach(d),this.h()},h(){u(n,"class","item-title svelte-198graq"),u(b,"for","check-interval"),g.disabled=!0,u(g,"type","textarea"),g.value=r[4],u(g,"class","svelte-198graq"),u(h,"class","section-1-item svelte-198graq"),u(s,"class","section svelte-198graq"),u(q,"for","notification-message"),D.disabled=!0,u(D,"type","textarea"),D.value=X=r[0].notificationMessage,u(D,"class","svelte-198graq"),u(E,"class","section-2-item svelte-198graq"),u(m,"class","section svelte-198graq"),u(Z,"for","content"),u(F,"target","_blank"),u(F,"rel","noopener noreferrer"),u(F,"href",fe=r[0].url),u(A,"class","section-3-item svelte-198graq"),u(R,"for","css-selector"),M.disabled=!0,u(M,"type","textarea"),M.value=se=r[0].cssSelector,u(M,"class","svelte-198graq"),u(B,"class","section-3-item svelte-198graq"),u(U,"class","section svelte-198graq"),u(v,"for","last-check"),J.disabled=!0,u(J,"type","textarea"),J.value=r[2],u(J,"class","svelte-198graq"),u(Y,"class","section-4-item svelte-198graq"),u(G,"for","last-update"),le.disabled=!0,u(le,"type","textarea"),le.value=r[3],u(le,"class","svelte-198graq"),u(O,"class","section-4-item svelte-198graq"),u(te,"class","section svelte-198graq"),u(he,"for","last-update"),ae.disabled=!0,u(ae,"type","textarea"),ae.value=ye=r[0].lastContent,u(ae,"class","svelte-198graq"),u(oe,"class","section-3-item svelte-198graq"),u(Ce,"class","section svelte-198graq"),u(e,"class","item svelte-198graq")},m(I,L){y(I,e,L),o(e,n),o(n,l),o(n,c),xe(a,n,null),o(e,i),o(e,s),o(s,h),o(h,b),o(h,x),o(h,g),o(e,C),o(e,m),o(m,E),o(E,q),o(E,ue),o(E,D),o(e,V),o(e,U),o(U,A),o(A,Z),o(A,z),o(A,F),o(F,H),o(U,pe),o(U,B),o(B,R),o(R,ee),xe(j,R,null),o(B,me),o(B,M),o(e,be),o(e,te),o(te,Y),o(Y,v),o(Y,K),o(Y,J),o(te,ge),o(te,O),o(O,G),o(O,re),o(O,le),o(e,He),o(e,Ce),o(Ce,oe),o(oe,he),o(oe,Re),o(oe,ae),ne=!0},p(I,L){(!ne||L&1)&&t!==(t=I[0].name+"")&&Ge(l,t),(!ne||L&1&&X!==(X=I[0].notificationMessage)&&D.value!==X)&&(D.value=X),(!ne||L&1)&&W!==(W=I[0].url+"")&&Ge(H,W),(!ne||L&1&&fe!==(fe=I[0].url))&&u(F,"href",fe);const ve={};L&1&&(ve.content=I[0].cssSelector),j.$set(ve),(!ne||L&1&&se!==(se=I[0].cssSelector)&&M.value!==se)&&(M.value=se),(!ne||L&1&&ye!==(ye=I[0].lastContent)&&ae.value!==ye)&&(ae.value=ye)},i(I){ne||(N(a.$$.fragment,I),N(j.$$.fragment,I),ne=!0)},o(I){T(a.$$.fragment,I),T(j.$$.fragment,I),ne=!1},d(I){I&&d(e),we(a),we(j)}}}function It(r){let e,n,t=r[1]&&st(r);return{c(){t&&t.c(),e=ie()},l(l){t&&t.l(l),e=ie()},m(l,c){t&&t.m(l,c),y(l,e,c),n=!0},p(l,[c]){l[1]?t?(t.p(l,c),c&2&&N(t,1)):(t=st(l),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(Oe(),T(t,1,1,()=>{t=null}),ze())},i(l){n||(N(t),n=!0)},o(l){T(t),n=!1},d(l){l&&d(e),t&&t.d(l)}}}function St(r,e,n){let t;Ye(r,Ke,b=>n(1,t=b));let{watcher:l}=e;const c=b=>{const _=new Date(b*1e3);return _.toLocaleDateString()+" "+_.toLocaleTimeString()},a=l.lastCheckDateUnix===0?"Never checked before":c(l.lastCheckDateUnix),i=l.lastUpdateDateUnix===0?"Never changed":c(l.lastUpdateDateUnix),s=bt.fromMillis(l.checkIntervalSeconds*1e3).rescale().toHuman(),h=async()=>{if(!l.id){console.error("id must be defined");return}We.push("TODO implement deletion",{theme:{"--toastBarBackground":"#FF0000"}})};return r.$$set=b=>{"watcher"in b&&n(0,l=b.watcher)},[l,t,a,i,s,h]}class qt extends Ve{constructor(e){super(),Fe(this,e,St,It,Me,{watcher:0})}}function at(r,e,n){const t=r.slice();return t[1]=e[n],t}function rt(r){let e,n;return e=new qt({props:{watcher:r[1]}}),{c(){ke(e.$$.fragment)},l(t){$e(e.$$.fragment,t)},m(t,l){xe(e,t,l),n=!0},p(t,l){const c={};l&1&&(c.watcher=t[1]),e.$set(c)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function Dt(r){let e,n,t=nt(r[0].sort(ot)),l=[];for(let a=0;a<t.length;a+=1)l[a]=rt(at(r,t,a));const c=a=>T(l[a],1,1,()=>{l[a]=null});return{c(){e=f("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=p(a,"DIV",{class:!0});var i=w(e);for(let s=0;s<l.length;s+=1)l[s].l(i);i.forEach(d),this.h()},h(){u(e,"class","container svelte-c8nodu")},m(a,i){y(a,e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);n=!0},p(a,[i]){if(i&1){t=nt(a[0].sort(ot));let s;for(s=0;s<t.length;s+=1){const h=at(a,t,s);l[s]?(l[s].p(h,i),N(l[s],1)):(l[s]=rt(h),l[s].c(),N(l[s],1),l[s].m(e,null))}for(Oe(),s=t.length;s<l.length;s+=1)c(s);ze()}},i(a){if(!n){for(let i=0;i<t.length;i+=1)N(l[i]);n=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)T(l[i]);n=!1},d(a){a&&d(e),pt(l,a)}}}const ot=(r,e)=>e.id-r.id;function Ut(r,e,n){let{watchers:t}=e;return r.$$set=l=>{"watchers"in l&&n(0,t=l.watchers)},[t]}class Bt extends Ve{constructor(e){super(),Fe(this,e,Ut,Dt,Me,{watchers:0})}}function Nt(r){let e,n="Login to list the watchers";return{c(){e=f("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-jtzxnq"&&(e.textContent=n)},m(t,l){y(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&d(e)}}}function At(r){let e,n,t="Create a new watcher",l,c,a,i,s="Watchers",h,b,_,x;c=new Pt({}),c.$on("upload",r[3]);let g={ctx:r,current:null,token:null,hasCatch:!0,pending:Wt,then:Tt,catch:jt,value:4,error:5,blocks:[,,,]};return lt(_=r[0],g),{c(){e=f("details"),n=f("summary"),n.textContent=t,l=k(),ke(c.$$.fragment),a=k(),i=f("h3"),i.textContent=s,h=k(),b=ie(),g.block.c()},l(C){e=p(C,"DETAILS",{});var m=w(e);n=p(m,"SUMMARY",{"data-svelte-h":!0}),S(n)!=="svelte-155u8eb"&&(n.textContent=t),l=$(m),$e(c.$$.fragment,m),m.forEach(d),a=$(C),i=p(C,"H3",{"data-svelte-h":!0}),S(i)!=="svelte-1d5313d"&&(i.textContent=s),h=$(C),b=ie(),g.block.l(C)},m(C,m){y(C,e,m),o(e,n),o(e,l),xe(c,e,null),y(C,a,m),y(C,i,m),y(C,h,m),y(C,b,m),g.block.m(C,g.anchor=m),g.mount=()=>b.parentNode,g.anchor=b,x=!0},p(C,m){r=C,g.ctx=r,m&1&&_!==(_=r[0])&&lt(_,g)||dt(g,r,m)},i(C){x||(N(c.$$.fragment,C),N(g.block),x=!0)},o(C){T(c.$$.fragment,C);for(let m=0;m<3;m+=1){const E=g.blocks[m];T(E)}x=!1},d(C){C&&(d(e),d(a),d(i),d(h),d(b)),we(c),g.block.d(C),g.token=null,g=null}}}function jt(r){let e,n="Something went wrong",t,l,c=JSON.stringify(r[5])+"",a;return{c(){e=f("p"),e.textContent=n,t=k(),l=f("p"),a=je(c)},l(i){e=p(i,"P",{"data-svelte-h":!0}),S(e)!=="svelte-171fb2d"&&(e.textContent=n),t=$(i),l=p(i,"P",{});var s=w(l);a=Te(s,c),s.forEach(d)},m(i,s){y(i,e,s),y(i,t,s),y(i,l,s),o(l,a)},p(i,s){s&1&&c!==(c=JSON.stringify(i[5])+"")&&Ge(a,c)},i:Q,o:Q,d(i){i&&(d(e),d(t),d(l))}}}function Tt(r){let e,n;return e=new Bt({props:{watchers:r[4]}}),{c(){ke(e.$$.fragment)},l(t){$e(e.$$.fragment,t)},m(t,l){xe(e,t,l),n=!0},p(t,l){const c={};l&1&&(c.watchers=t[4]),e.$set(c)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function Wt(r){let e,n="Loading data";return{c(){e=f("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-ezyzhc"&&(e.textContent=n)},m(t,l){y(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&d(e)}}}function Mt(r){let e,n="Web Watchers",t,l,c,a,i;const s=[At,Nt],h=[];function b(_,x){return _[1]?0:1}return l=b(r),c=h[l]=s[l](r),{c(){e=f("h2"),e.textContent=n,t=k(),c.c(),a=ie()},l(_){e=p(_,"H2",{"data-svelte-h":!0}),S(e)!=="svelte-1xt9l7p"&&(e.textContent=n),t=$(_),c.l(_),a=ie()},m(_,x){y(_,e,x),y(_,t,x),h[l].m(_,x),y(_,a,x),i=!0},p(_,[x]){let g=l;l=b(_),l===g?h[l].p(_,x):(Oe(),T(h[g],1,1,()=>{h[g]=null}),ze(),c=h[l],c?c.p(_,x):(c=h[l]=s[l](_),c.c()),N(c,1),c.m(a.parentNode,a))},i(_){i||(N(c),i=!0)},o(_){T(c),i=!1},d(_){_&&(d(e),d(t),d(a)),h[l].d(_)}}}function Vt(r,e,n){let t;Ye(r,Ke,i=>n(1,t=i));const l=()=>t?$t():[];let c=l();return[c,t,l,()=>n(0,c=l())]}class Kt extends Ve{constructor(e){super(),Fe(this,e,Vt,Mt,Me,{})}}export{Kt as component,Yt as universal};
