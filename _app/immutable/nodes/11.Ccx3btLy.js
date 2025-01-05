import{s as Z,A as I,i as B,f as b,k as ee,e as g,t as de,a as O,c as v,b as L,d as me,z as w,g as T,l as y,h as p,L as J,E as P,M as te,B as _e,y as pe,n as V}from"../chunks/scheduler.D1KS-ADa.js";import{S as ne,i as le,a as k,g as z,t as U,c as H,b as oe,d as re,m as se,e as ae}from"../chunks/index.8CYbRCgU.js";import{c as ie,o as he}from"../chunks/store.Bh8JxMfW.js";import{u as ce,M as ue,U as ge}from"../chunks/Main.uqbXCYyl.js";import{e as K}from"../chunks/each.EXCWbmV2.js";import{a as ve,A as be}from"../chunks/index.Bk8NUqBJ.js";import{t as ke}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BchAyzsS.js";const ye=async r=>ve({path:"/personalTracker/upload",data:r});function Q(r,e,n){const t=r.slice();return t[7]=e[n],t}function X(r){let e,n,t,l,o,f="Close",_,u,d,c,$="Weight",M,x,F,S,q,N,D,W,E=K(r[1]),i=[];for(let s=0;s<E.length;s+=1)i[s]=Y(Q(r,E,s));const fe=s=>U(i[s],1,1,()=>{i[s]=null});function G(s,m){return s[3]?Ce:xe}let j=G(r),h=j(r);return{c(){e=g("div"),n=g("div"),t=g("h4"),l=de(`Add a new event
                `),o=g("button"),o.textContent=f,_=O();for(let s=0;s<i.length;s+=1)i[s].c();u=O(),d=g("form"),c=g("label"),c.textContent=$,M=O(),x=g("input"),F=O(),S=g("br"),q=O(),h.c(),this.h()},l(s){e=v(s,"DIV",{role:!0,class:!0});var m=L(e);n=v(m,"DIV",{class:!0});var a=L(n);t=v(a,"H4",{class:!0});var A=L(t);l=me(A,`Add a new event
                `),o=v(A,"BUTTON",{"data-svelte-h":!0}),w(o)!=="svelte-2m9p61"&&(o.textContent=f),A.forEach(b),_=T(a);for(let R=0;R<i.length;R+=1)i[R].l(a);u=T(a),d=v(a,"FORM",{class:!0});var C=L(d);c=v(C,"LABEL",{for:!0,"data-svelte-h":!0}),w(c)!=="svelte-1wni8ci"&&(c.textContent=$),M=T(C),x=v(C,"INPUT",{type:!0}),F=T(C),S=v(C,"BR",{}),q=T(C),h.l(C),C.forEach(b),a.forEach(b),m.forEach(b),this.h()},h(){y(t,"class","title-bar svelte-1cixduj"),y(c,"for","weight"),y(x,"type","number"),y(d,"class","form-content svelte-1cixduj"),y(n,"class","contents svelte-1cixduj"),y(e,"role","dialog"),y(e,"class","modal svelte-1cixduj")},m(s,m){B(s,e,m),p(e,n),p(n,t),p(t,l),p(t,o),p(n,_);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null);p(n,u),p(n,d),p(d,c),p(d,M),p(d,x),J(x,r[2]),p(d,F),p(d,S),p(d,q),h.m(d,null),N=!0,D||(W=[P(o,"click",ie),P(x,"input",r[6])],D=!0)},p(s,m){if(m&2){E=K(s[1]);let a;for(a=0;a<E.length;a+=1){const A=Q(s,E,a);i[a]?(i[a].p(A,m),k(i[a],1)):(i[a]=Y(A),i[a].c(),k(i[a],1),i[a].m(n,u))}for(z(),a=E.length;a<i.length;a+=1)fe(a);H()}m&4&&te(x.value)!==s[2]&&J(x,s[2]),j===(j=G(s))&&h?h.p(s,m):(h.d(1),h=j(s),h&&(h.c(),h.m(d,null)))},i(s){if(!N){for(let m=0;m<E.length;m+=1)k(i[m]);N=!0}},o(s){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)U(i[m]);N=!1},d(s){s&&b(e),_e(i,s),h.d(),D=!1,pe(W)}}}function Y(r){let e,n;return e=new ue({props:{item:r[7]}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.item=t[7]),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function xe(r){let e,n="Login to upload an entry";return{c(){e=g("span"),e.textContent=n,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-4ab4io"&&(e.textContent=n),this.h()},h(){y(e,"class","form-action svelte-1cixduj")},m(t,l){B(t,e,l)},p:V,d(t){t&&b(e)}}}function Ce(r){let e,n="Submit",t,l;return{c(){e=g("button"),e.textContent=n,this.h()},l(o){e=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-1nfv1d"&&(e.textContent=n),this.h()},h(){y(e,"class","form-action svelte-1cixduj")},m(o,f){B(o,e,f),t||(l=P(e,"click",r[4]),t=!0)},p:V,d(o){o&&b(e),t=!1,l()}}}function Ue(r){let e,n,t=r[0]&&X(r);return{c(){t&&t.c(),e=I()},l(l){t&&t.l(l),e=I()},m(l,o){t&&t.m(l,o),B(l,e,o),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&k(t,1)):(t=X(l),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(z(),U(t,1,1,()=>{t=null}),H())},i(l){n||(k(t),n=!0)},o(l){U(t),n=!1},d(l){l&&b(e),t&&t.d(l)}}}function Ee(r,e,n){let t;ee(r,ce,c=>n(3,t=c));let{isOpen:l}=e,{onUpload:o}=e,f=[],_;const u=async()=>{if(n(1,f=[]),_!==Math.floor(_)&&f.push({level:"error",header:"Value must not have a decimal part"}),(_<80||_>110)&&f.push({level:"error",header:"Value must be in kg"}),!f.length)try{await ye({eventType:"weight",eventValue:_*100}),o(),ie()}catch(c){let $=c.message;c instanceof be&&c.code===401?$="Invalid logged in user":c instanceof ge&&($="User is logged out");const M=`<strong>Entry not created</strong><br/> ${$}`;ke.push(M,{theme:{"--toastBarBackground":"#FF0000"}})}};function d(){_=te(this.value),n(2,_)}return r.$$set=c=>{"isOpen"in c&&n(0,l=c.isOpen),"onUpload"in c&&n(5,o=c.onUpload)},[l,f,_,t,u,o,d]}class $e extends ne{constructor(e){super(),le(this,e,Ee,Ue,Z,{isOpen:0,onUpload:5})}}function Ae(r){let e,n;return e=new ue({props:{item:{level:"info",header:"Login to add an entry"}}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function Be(r){let e,n="Add an entry",t,l;return{c(){e=g("button"),e.textContent=n},l(o){e=v(o,"BUTTON",{"data-svelte-h":!0}),w(e)!=="svelte-ank2u2"&&(e.textContent=n)},m(o,f){B(o,e,f),t||(l=P(e,"click",r[1]),t=!0)},i:V,o:V,d(o){o&&b(e),t=!1,l()}}}function Me(r){let e,n,t,l;const o=[Be,Ae],f=[];function _(u,d){return u[0]?0:1}return e=_(r),n=f[e]=o[e](r),{c(){n.c(),t=I()},l(u){n.l(u),t=I()},m(u,d){f[e].m(u,d),B(u,t,d),l=!0},p(u,[d]){let c=e;e=_(u),e!==c&&(z(),U(f[c],1,1,()=>{f[c]=null}),H(),n=f[e],n||(n=f[e]=o[e](u),n.c()),k(n,1),n.m(t.parentNode,t))},i(u){l||(k(n),l=!0)},o(u){U(n),l=!1},d(u){u&&b(t),f[e].d(u)}}}function Oe(r,e,n){let t;return ee(r,ce,o=>n(0,t=o)),[t,()=>he($e,{onUpload:()=>{}})]}class Ve extends ne{constructor(e){super(),le(this,e,Oe,Me,Z,{})}}export{Ve as component};
