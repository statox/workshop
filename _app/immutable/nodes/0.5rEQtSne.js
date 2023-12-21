import{r as O,u as ot,s as Z,v as lt,a as z,c as D,i as C,w as rt,x as it,y as at,d as $,z as K,e as j,A as et,q as J,B as Y,C as $t,D as Ut,f as N,g as M,h as I,j as y,E as nt,F as S,G,H as Bt,o as It,I as Vt,J as qt,K as Pt,L as bt,M as Gt,N as X,O as kt,l as ct,m as ut}from"../chunks/scheduler.vqADxFSB.js";import{n as zt,l as Dt,f as Ft,h as Kt,S as x,i as tt,a as v,g as U,t as w,c as V,b as L,d as P,m as R,e as H,j as Jt,k as Qt}from"../chunks/index.Q4c_4ZiM.js";import{b as _t}from"../chunks/paths.CbZNZRZ3.js";/* empty css                          */import{h as yt,u as Wt,t as dt,a as Xt,l as Yt,b as Zt,i as xt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.-nJsepss.js";import{e as st,u as Lt,o as te,f as ee}from"../chunks/each.tsRmA9lM.js";import{g as Q,a as W}from"../chunks/spread.rEx3vLA9.js";import{m as ne,t as pt,e as mt,c as se}from"../chunks/store.BvOkAtnk.js";import{w as oe}from"../chunks/index.f_wSwH1R.js";function le(l,t,s,r){if(!t)return O;const e=l.getBoundingClientRect();if(t.left===e.left&&t.right===e.right&&t.top===e.top&&t.bottom===e.bottom)return O;const{delay:o=0,duration:a=300,easing:n=ot,start:i=zt()+o,end:f=i+a,tick:_=O,css:u}=s(l,{from:t,to:e},r);let c=!0,h=!1,m;function p(){u&&(m=Ft(l,0,1,a,o,n,u)),o||(h=!0)}function g(){u&&Kt(l,m),c=!1}return Dt(b=>{if(!h&&b>=i&&(h=!0),h&&b>=f&&(_(1,0),g()),!c)return!1;if(h){const k=b-i,E=0+1*n(k/a);_(E,1-E)}return!0}),p(),_(0,1),g}function re(l){const t=getComputedStyle(l);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:s,height:r}=t,e=l.getBoundingClientRect();l.style.position="absolute",l.style.width=s,l.style.height=r,Rt(l,e)}}function Rt(l,t){const s=l.getBoundingClientRect();if(t.left!==s.left||t.top!==s.top){const r=getComputedStyle(l),e=r.transform==="none"?"":r.transform;l.style.transform=`${e} translate(${t.left-s.left}px, ${t.top-s.top}px)`}}const ie=!0,We=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"}));function vt(l,t,s){const r=l.slice();return r[9]=t[s],r[11]=s,r}const ae=l=>({}),wt=l=>({}),fe=l=>({}),Ct=l=>({});function Et(l){let t;const s=l[4].backdrop,r=lt(s,l,l[3],Ct);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,o){r&&r.m(e,o),t=!0},p(e,o){r&&r.p&&(!t||o&8)&&rt(r,s,e,e[3],t?at(s,e[3],o,fe):it(e[3]),Ct)},i(e){t||(v(r,e),t=!0)},o(e){w(r,e),t=!1},d(e){r&&r.d(e)}}}function ce(l){let t,s,r;const e=[{isOpen:l[11]===l[0].length-1&&!l[1]},l[9].props];var o=l[9].component;function a(n,i){let f={};if(i!==void 0&&i&3)f=Q(e,[{isOpen:n[11]===n[0].length-1&&!n[1]},i&1&&W(n[9].props)]);else for(let _=0;_<e.length;_+=1)f=Y(f,e[_]);return{props:f}}return o&&(t=J(o,a(l)),t.$on("introstart",l[7]),t.$on("outroend",l[8])),{c(){t&&L(t.$$.fragment),s=j()},l(n){t&&P(t.$$.fragment,n),s=j()},m(n,i){t&&R(t,n,i),C(n,s,i),r=!0},p(n,i){if(i&1&&o!==(o=n[9].component)){if(t){U();const f=t;w(f.$$.fragment,1,0,()=>{H(f,1)}),V()}o?(t=J(o,a(n,i)),t.$on("introstart",n[7]),t.$on("outroend",n[8]),L(t.$$.fragment),v(t.$$.fragment,1),R(t,s.parentNode,s)):t=null}else if(o){const f=i&3?Q(e,[{isOpen:n[11]===n[0].length-1&&!n[1]},i&1&&W(n[9].props)]):{};t.$set(f)}},i(n){r||(t&&v(t.$$.fragment,n),r=!0)},o(n){t&&w(t.$$.fragment,n),r=!1},d(n){n&&$(s),t&&H(t,n)}}}function ue(l){let t,s,r,e={ctx:l,current:null,token:null,hasCatch:!1,pending:me,then:pe,catch:_e,value:12,blocks:[,,,]};return yt(s=At(l[9].component),e),{c(){t=j(),e.block.c()},l(o){t=j(),e.block.l(o)},m(o,a){C(o,t,a),e.block.m(o,e.anchor=a),e.mount=()=>t.parentNode,e.anchor=t,r=!0},p(o,a){l=o,e.ctx=l,a&1&&s!==(s=At(l[9].component))&&yt(s,e)||Wt(e,l,a)},i(o){r||(v(e.block),r=!0)},o(o){for(let a=0;a<3;a+=1){const n=e.blocks[a];w(n)}r=!1},d(o){o&&$(t),e.block.d(o),e.token=null,e=null}}}function _e(l){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function pe(l){let t,s,r;const e=[{isOpen:l[11]===l[0].length-1&&!l[1]},l[9].props];var o=l[12];function a(n,i){let f={};if(i!==void 0&&i&3)f=Q(e,[{isOpen:n[11]===n[0].length-1&&!n[1]},i&1&&W(n[9].props)]);else for(let _=0;_<e.length;_+=1)f=Y(f,e[_]);return{props:f}}return o&&(t=J(o,a(l)),t.$on("introstart",l[5]),t.$on("outroend",l[6])),{c(){t&&L(t.$$.fragment),s=z()},l(n){t&&P(t.$$.fragment,n),s=D(n)},m(n,i){t&&R(t,n,i),C(n,s,i),r=!0},p(n,i){if(i&1&&o!==(o=n[12])){if(t){U();const f=t;w(f.$$.fragment,1,0,()=>{H(f,1)}),V()}o?(t=J(o,a(n,i)),t.$on("introstart",n[5]),t.$on("outroend",n[6]),L(t.$$.fragment),v(t.$$.fragment,1),R(t,s.parentNode,s)):t=null}else if(o){const f=i&3?Q(e,[{isOpen:n[11]===n[0].length-1&&!n[1]},i&1&&W(n[9].props)]):{};t.$set(f)}},i(n){r||(t&&v(t.$$.fragment,n),r=!0)},o(n){t&&w(t.$$.fragment,n),r=!1},d(n){n&&$(s),t&&H(t,n)}}}function me(l){let t,s;const r=l[4].loading,e=lt(r,l,l[3],wt);return{c(){e&&e.c(),t=z()},l(o){e&&e.l(o),t=D(o)},m(o,a){e&&e.m(o,a),C(o,t,a),s=!0},p(o,a){e&&e.p&&(!s||a&8)&&rt(e,r,o,o[3],s?at(r,o[3],a,ae):it(o[3]),wt)},i(o){s||(v(e,o),s=!0)},o(o){w(e,o),s=!1},d(o){o&&$(t),e&&e.d(o)}}}function Ot(l,t){let s,r,e,o,a,n;const i=[ue,ce],f=[];function _(u,c){return c&1&&(r=null),r==null&&(r=!!ge(u[9].component)),r?0:1}return e=_(t,-1),o=f[e]=i[e](t),{key:l,first:null,c(){s=j(),o.c(),a=j(),this.h()},l(u){s=j(),o.l(u),a=j(),this.h()},h(){this.first=s},m(u,c){C(u,s,c),f[e].m(u,c),C(u,a,c),n=!0},p(u,c){t=u;let h=e;e=_(t,c),e===h?f[e].p(t,c):(U(),w(f[h],1,1,()=>{f[h]=null}),V(),o=f[e],o?o.p(t,c):(o=f[e]=i[e](t),o.c()),v(o,1),o.m(a.parentNode,a))},i(u){n||(v(o),n=!0)},o(u){w(o),n=!1},d(u){u&&($(s),$(a)),f[e].d(u)}}}function he(l){let t=[],s=new Map,r,e,o=st(l[0]);const a=n=>n[11];for(let n=0;n<o.length;n+=1){let i=vt(l,o,n),f=a(i);s.set(f,t[n]=Ot(f,i))}return{c(){for(let n=0;n<t.length;n+=1)t[n].c();r=j()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);r=j()},m(n,i){for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(n,i);C(n,r,i),e=!0},p(n,i){i&15&&(o=st(n[0]),U(),t=Lt(t,i,a,1,n,o,s,r.parentNode,te,Ot,r,vt),V())},i(n){if(!e){for(let i=0;i<o.length;i+=1)v(t[i]);e=!0}},o(n){for(let i=0;i<t.length;i+=1)w(t[i]);e=!1},d(n){n&&$(r);for(let i=0;i<t.length;i+=1)t[i].d(n)}}}function de(l){let t,s,r=l[0].length>0&&Et(l);const e=l[4].default,o=lt(e,l,l[3],null),a=o||he(l);return{c(){r&&r.c(),t=z(),a&&a.c()},l(n){r&&r.l(n),t=D(n),a&&a.l(n)},m(n,i){r&&r.m(n,i),C(n,t,i),a&&a.m(n,i),s=!0},p(n,[i]){n[0].length>0?r?(r.p(n,i),i&1&&v(r,1)):(r=Et(n),r.c(),v(r,1),r.m(t.parentNode,t)):r&&(U(),w(r,1,1,()=>{r=null}),V()),o?o.p&&(!s||i&8)&&rt(o,e,n,n[3],s?at(e,n[3],i,null):it(n[3]),null):a&&a.p&&(!s||i&15)&&a.p(n,s?i:-1)},i(n){s||(v(r),v(a,n),s=!0)},o(n){w(r),w(a,n),s=!1},d(n){n&&$(t),r&&r.d(n),a&&a.d(n)}}}function ge(l){return typeof l.prototype>"u"}async function At(l){return l().then(t=>t.default)}function $e(l,t,s){let r,e,o;K(l,ne,c=>s(0,r=c)),K(l,pt,c=>s(1,e=c)),K(l,mt,c=>s(2,o=c));let{$$slots:a={},$$scope:n}=t;const i=()=>{et(mt,o=!0,o)},f=()=>{et(pt,e=!1,e)},_=()=>{et(mt,o=!0,o)},u=()=>{et(pt,e=!1,e)};return l.$$set=c=>{"$$scope"in c&&s(3,n=c.$$scope)},[r,e,o,n,a,i,f,_,u]}class be extends x{constructor(t){super(),tt(this,t,$e,de,Z,{})}}function Ht(l){const t=l-1;return t*t*t+1}function ke(l,{delay:t=0,duration:s=400,easing:r=ot}={}){const e=+getComputedStyle(l).opacity;return{delay:t,duration:s,easing:r,css:o=>`opacity: ${o*e}`}}function ye(l,{delay:t=0,duration:s=400,easing:r=Ht,x:e=0,y:o=0,opacity:a=0}={}){const n=getComputedStyle(l),i=+n.opacity,f=n.transform==="none"?"":n.transform,_=i*(1-a),[u,c]=$t(e),[h,m]=$t(o);return{delay:t,duration:s,easing:r,css:(p,g)=>`
			transform: ${f} translate(${(1-p)*u}${c}, ${(1-p)*h}${m});
			opacity: ${i-_*g}`}}function ve(l,{from:t,to:s},r={}){const e=getComputedStyle(l),o=e.transform==="none"?"":e.transform,[a,n]=e.transformOrigin.split(" ").map(parseFloat),i=t.left+t.width*a/s.width-(s.left+a),f=t.top+t.height*n/s.height-(s.top+n),{delay:_=0,duration:u=h=>Math.sqrt(h)*120,easing:c=Ht}=r;return{delay:_,duration:Ut(u)?u(Math.sqrt(i*i+f*f)):u,easing:c,css:(h,m)=>{const p=m*i,g=m*f,b=h+m*t.width/s.width,k=h+m*t.height/s.height;return`transform: ${o} translate(${p}px, ${g}px) scale(${b}, ${k});`}}}function Nt(l){return Object.prototype.toString.call(l)==="[object Date]"}function gt(l,t){if(l===t||l!==l)return()=>l;const s=typeof l;if(s!==typeof t||Array.isArray(l)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const r=t.map((e,o)=>gt(l[o],e));return e=>r.map(o=>o(e))}if(s==="object"){if(!l||!t)throw new Error("Object cannot be null");if(Nt(l)&&Nt(t)){l=l.getTime(),t=t.getTime();const o=t-l;return a=>new Date(l+a*o)}const r=Object.keys(t),e={};return r.forEach(o=>{e[o]=gt(l[o],t[o])}),o=>{const a={};return r.forEach(n=>{a[n]=e[n](o)}),a}}if(s==="number"){const r=t-l;return e=>l+e*r}throw new Error(`Cannot interpolate ${s} values`)}function we(l,t={}){const s=oe(l);let r,e=l;function o(a,n){if(l==null)return s.set(l=a),Promise.resolve();e=a;let i=r,f=!1,{delay:_=0,duration:u=400,easing:c=ot,interpolate:h=gt}=Y(Y({},t),n);if(u===0)return i&&(i.abort(),i=null),s.set(l=e),Promise.resolve();const m=zt()+_;let p;return r=Dt(g=>{if(g<m)return!0;f||(p=h(l,a),typeof u=="function"&&(u=u(l,a)),f=!0),i&&(i.abort(),i=null);const b=g-m;return b>u?(s.set(l=a),!1):(s.set(l=p(c(b/u))),!0)}),r.promise}return{set:o,update:(a,n)=>o(a(e,l),n),subscribe:s.subscribe}}function Ce(l){let t,s=l[0].msg+"",r;return{c(){t=new qt(!1),r=j(),this.h()},l(e){t=Pt(e,!1),r=j(),this.h()},h(){t.a=r},m(e,o){t.m(s,e,o),C(e,r,o)},p(e,o){o&1&&s!==(s=e[0].msg+"")&&t.p(s)},i:O,o:O,d(e){e&&($(r),t.d())}}}function Ee(l){let t,s,r;const e=[l[2]];var o=l[0].component.src;function a(n,i){let f={};if(i!==void 0&&i&4)f=Q(e,[W(n[2])]);else for(let _=0;_<e.length;_+=1)f=Y(f,e[_]);return{props:f}}return o&&(t=J(o,a(l))),{c(){t&&L(t.$$.fragment),s=j()},l(n){t&&P(t.$$.fragment,n),s=j()},m(n,i){t&&R(t,n,i),C(n,s,i),r=!0},p(n,i){if(i&1&&o!==(o=n[0].component.src)){if(t){U();const f=t;w(f.$$.fragment,1,0,()=>{H(f,1)}),V()}o?(t=J(o,a(n,i)),L(t.$$.fragment),v(t.$$.fragment,1),R(t,s.parentNode,s)):t=null}else if(o){const f=i&4?Q(e,[W(n[2])]):{};t.$set(f)}},i(n){r||(t&&v(t.$$.fragment,n),r=!0)},o(n){t&&w(t.$$.fragment,n),r=!1},d(n){n&&$(s),t&&H(t,n)}}}function Mt(l){let t,s,r;return{c(){t=N("div"),this.h()},l(e){t=M(e,"DIV",{class:!0,role:!0,tabindex:!0}),I(t).forEach($),this.h()},h(){y(t,"class","_toastBtn pe svelte-8s5i6t"),y(t,"role","button"),y(t,"tabindex","0")},m(e,o){C(e,t,o),s||(r=[G(t,"click",l[4]),G(t,"keydown",l[8])],s=!0)},p:O,d(e){e&&$(t),s=!1,Bt(r)}}}function Oe(l){let t,s,r,e,o,a,n,i,f,_;const u=[Ee,Ce],c=[];function h(p,g){return p[0].component?0:1}r=h(l),e=c[r]=u[r](l);let m=l[0].dismissable&&Mt(l);return{c(){t=N("div"),s=N("div"),e.c(),o=z(),m&&m.c(),a=z(),n=N("progress"),this.h()},l(p){t=M(p,"DIV",{role:!0,class:!0});var g=I(t);s=M(g,"DIV",{class:!0});var b=I(s);e.l(b),b.forEach($),o=D(g),m&&m.l(g),a=D(g),n=M(g,"PROGRESS",{class:!0}),I(n).forEach($),g.forEach($),this.h()},h(){y(s,"class","_toastMsg svelte-8s5i6t"),nt(s,"pe",l[0].component),y(n,"class","_toastBar svelte-8s5i6t"),n.value=l[1],y(t,"role","status"),y(t,"class","_toastItem svelte-8s5i6t"),nt(t,"pe",l[0].pausable)},m(p,g){C(p,t,g),S(t,s),c[r].m(s,null),S(t,o),m&&m.m(t,null),S(t,a),S(t,n),i=!0,f||(_=[G(t,"mouseenter",l[9]),G(t,"mouseleave",l[6])],f=!0)},p(p,[g]){let b=r;r=h(p),r===b?c[r].p(p,g):(U(),w(c[b],1,1,()=>{c[b]=null}),V(),e=c[r],e?e.p(p,g):(e=c[r]=u[r](p),e.c()),v(e,1),e.m(s,null)),(!i||g&1)&&nt(s,"pe",p[0].component),p[0].dismissable?m?m.p(p,g):(m=Mt(p),m.c(),m.m(t,a)):m&&(m.d(1),m=null),(!i||g&2)&&(n.value=p[1]),(!i||g&1)&&nt(t,"pe",p[0].pausable)},i(p){i||(v(e),i=!0)},o(p){w(e),i=!1},d(p){p&&$(t),c[r].d(),m&&m.d(),f=!1,Bt(_)}}}function ht(l,t="undefined"){return typeof l===t}function Ae(l,t,s){let r,{item:e}=t,o=e.initial,a=o,n=!1,i={},f;const _=we(e.initial,{duration:e.duration,easing:ot});K(l,_,k=>s(1,r=k));function u(){dt.pop(e.id)}function c(){(r===1||r===0)&&u()}function h(){!n&&r!==o&&(_.set(r,{duration:0}),n=!0)}function m(){if(n){const k=e.duration,E=k-k*((r-a)/(o-a));_.set(o,{duration:E}).then(c),n=!1}}function p(k=document){if(ht(k.hidden))return;const E=()=>k.hidden?h():m(),q="visibilitychange";k.addEventListener(q,E),f=()=>k.removeEventListener(q,E),E()}It(p),Vt(()=>{ht(e.onpop,"function")&&e.onpop(e.id),f&&f()});const g=k=>{k instanceof KeyboardEvent&&["Enter"," "].includes(k.key)&&u()},b=()=>{e.pausable&&h()};return l.$$set=k=>{"item"in k&&s(0,e=k.item)},l.$$.update=()=>{if(l.$$.dirty&1&&(ht(e.progress)||s(0,e.next=e.progress,e)),l.$$.dirty&131&&o!==e.next&&(s(7,o=e.next),a=r,n=!1,_.set(o).then(c)),l.$$.dirty&1&&e.component){const{props:k={},sendIdTo:E}=e.component;s(2,i={...k,...E&&{[E]:e.id}})}},[e,r,i,_,u,h,m,o,g,b]}class Ne extends x{constructor(t){super(),tt(this,t,Ae,Oe,Z,{item:0})}}function St(l,t,s){const r=l.slice();return r[4]=t[s],r}function jt(l,t){let s,r,e,o,a,n,i,f,_=O,u;return r=new Ne({props:{item:t[4]}}),{key:l,first:null,c(){s=N("li"),L(r.$$.fragment),e=z(),this.h()},l(c){s=M(c,"LI",{class:!0,style:!0});var h=I(s);P(r.$$.fragment,h),e=D(h),h.forEach($),this.h()},h(){y(s,"class",o=bt(t[4].classes?.join(" "))+" svelte-1ryffm3"),y(s,"style",a=Tt(t[4].theme)),this.first=s},m(c,h){C(c,s,h),R(r,s,null),S(s,e),u=!0},p(c,h){t=c;const m={};h&1&&(m.item=t[4]),r.$set(m),(!u||h&1&&o!==(o=bt(t[4].classes?.join(" "))+" svelte-1ryffm3"))&&y(s,"class",o),(!u||h&1&&a!==(a=Tt(t[4].theme)))&&y(s,"style",a)},r(){f=s.getBoundingClientRect()},f(){re(s),_(),Rt(s,f)},a(){_(),_=le(s,f,ve,{duration:200})},i(c){u||(v(r.$$.fragment,c),c&&Gt(()=>{u&&(i&&i.end(1),n=Jt(s,ye,t[4].intro),n.start())}),u=!0)},o(c){w(r.$$.fragment,c),n&&n.invalidate(),c&&(i=Qt(s,ke,{})),u=!1},d(c){c&&$(s),H(r),c&&i&&i.end()}}}function Me(l){let t,s=[],r=new Map,e,o=st(l[0]);const a=n=>n[4].id;for(let n=0;n<o.length;n+=1){let i=St(l,o,n),f=a(i);r.set(f,s[n]=jt(f,i))}return{c(){t=N("ul");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){t=M(n,"UL",{class:!0});var i=I(t);for(let f=0;f<s.length;f+=1)s[f].l(i);i.forEach($),this.h()},h(){y(t,"class","_toastContainer svelte-1ryffm3")},m(n,i){C(n,t,i);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);e=!0},p(n,[i]){if(i&1){o=st(n[0]),U();for(let f=0;f<s.length;f+=1)s[f].r();s=Lt(s,i,a,1,n,o,r,t,ee,jt,null,St);for(let f=0;f<s.length;f+=1)s[f].a();V()}},i(n){if(!e){for(let i=0;i<o.length;i+=1)v(s[i]);e=!0}},o(n){for(let i=0;i<s.length;i+=1)w(s[i]);e=!1},d(n){n&&$(t);for(let i=0;i<s.length;i+=1)s[i].d()}}}function Tt(l){return l?Object.keys(l).reduce((t,s)=>`${t}${s}:${l[s]};`,""):void 0}function Se(l,t,s){let r;K(l,dt,n=>s(3,r=n));let{options:e={}}=t,{target:o="default"}=t,a=[];return l.$$set=n=>{"options"in n&&s(1,e=n.options),"target"in n&&s(2,o=n.target)},l.$$.update=()=>{l.$$.dirty&6&&dt._init(o,e),l.$$.dirty&12&&s(0,a=r.filter(n=>n.target===o))},[a,e,o,r]}class je extends x{constructor(t){super(),tt(this,t,Se,Me,Z,{options:1,target:2})}}function Te(l){let t,s="Login",r,e;return{c(){t=N("button"),t.textContent=s,this.h()},l(o){t=M(o,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),X(t)!=="svelte-4psvdu"&&(t.textContent=s),this.h()},h(){y(t,"type","button"),y(t,"class","svelte-1bzsvn3")},m(o,a){C(o,t,a),r||(e=G(t,"click",l[2]),r=!0)},p:O,d(o){o&&$(t),r=!1,e()}}}function Be(l){let t,s,r,e,o;return{c(){t=N("button"),s=N("img"),this.h()},l(a){t=M(a,"BUTTON",{class:!0});var n=I(t);s=M(n,"IMG",{class:!0,alt:!0,src:!0}),n.forEach($),this.h()},h(){y(s,"class","user-profile svelte-1bzsvn3"),y(s,"alt","user profile"),kt(s.src,r=l[0].picture)||y(s,"src",r),y(t,"class","svelte-1bzsvn3")},m(a,n){C(a,t,n),S(t,s),e||(o=G(t,"click",l[1]),e=!0)},p(a,n){n&1&&!kt(s.src,r=a[0].picture)&&y(s,"src",r)},d(a){a&&$(t),e=!1,o()}}}function Ie(l){let t;function s(o,a){return o[0]?Be:Te}let r=s(l),e=r(l);return{c(){t=N("span"),e.c()},l(o){t=M(o,"SPAN",{});var a=I(t);e.l(a),a.forEach($)},m(o,a){C(o,t,a),e.m(t,null)},p(o,[a]){r===(r=s(o))&&e?e.p(o,a):(e.d(1),e=r(o),e&&(e.c(),e.m(t,null)))},i:O,o:O,d(o){o&&$(t),e.d()}}}function ze(l,t,s){let r;return K(l,Xt,a=>s(0,r=a)),[r,()=>Yt(),()=>Zt()]}class De extends x{constructor(t){super(),tt(this,t,ze,Ie,Z,{})}}function Le(l){let t,s,r;return{c(){t=N("button"),this.h()},l(e){t=M(e,"BUTTON",{slot:!0,class:!0}),I(t).forEach($),this.h()},h(){y(t,"slot","backdrop"),y(t,"class","backdrop svelte-hsnn6y")},m(e,o){C(e,t,o),s||(r=G(t,"click",se),s=!0)},p:O,d(e){e&&$(t),s=!1,r()}}}function Re(l){let t,s,r="My Apps",e,o,a,n="Home",i,f,_="Notes",u,c,h="Music",m,p,g,b,k,E,q,F;p=new De({}),b=new be({props:{$$slots:{backdrop:[Le]},$$scope:{ctx:l}}}),E=new je({});const ft=l[0].default,T=lt(ft,l,l[1],null);return{c(){t=N("header"),s=N("h1"),s.textContent=r,e=z(),o=N("nav"),a=N("a"),a.textContent=n,i=ct(` |
        `),f=N("a"),f.textContent=_,u=ct(` |
        `),c=N("a"),c.textContent=h,m=ct(` |
        `),L(p.$$.fragment),g=z(),L(b.$$.fragment),k=z(),L(E.$$.fragment),q=z(),T&&T.c(),this.h()},l(d){t=M(d,"HEADER",{});var A=I(t);s=M(A,"H1",{"data-svelte-h":!0}),X(s)!=="svelte-mkozng"&&(s.textContent=r),e=D(A),o=M(A,"NAV",{class:!0});var B=I(o);a=M(B,"A",{href:!0,"data-svelte-h":!0}),X(a)!=="svelte-1e6p6b9"&&(a.textContent=n),i=ut(B,` |
        `),f=M(B,"A",{href:!0,"data-svelte-h":!0}),X(f)!=="svelte-52yikw"&&(f.textContent=_),u=ut(B,` |
        `),c=M(B,"A",{href:!0,"data-svelte-h":!0}),X(c)!=="svelte-apky3s"&&(c.textContent=h),m=ut(B,` |
        `),P(p.$$.fragment,B),B.forEach($),A.forEach($),g=D(d),P(b.$$.fragment,d),k=D(d),P(E.$$.fragment,d),q=D(d),T&&T.l(d),this.h()},h(){y(a,"href",_t+"/"),y(f,"href",_t+"/notes"),y(c,"href",_t+"/music"),y(o,"class","svelte-hsnn6y")},m(d,A){C(d,t,A),S(t,s),S(t,e),S(t,o),S(o,a),S(o,i),S(o,f),S(o,u),S(o,c),S(o,m),R(p,o,null),C(d,g,A),R(b,d,A),C(d,k,A),R(E,d,A),C(d,q,A),T&&T.m(d,A),F=!0},p(d,[A]){const B={};A&2&&(B.$$scope={dirty:A,ctx:d}),b.$set(B),T&&T.p&&(!F||A&2)&&rt(T,ft,d,d[1],F?at(ft,d[1],A,null):it(d[1]),null)},i(d){F||(v(p.$$.fragment,d),v(b.$$.fragment,d),v(E.$$.fragment,d),v(T,d),F=!0)},o(d){w(p.$$.fragment,d),w(b.$$.fragment,d),w(E.$$.fragment,d),w(T,d),F=!1},d(d){d&&($(t),$(g),$(k),$(q)),H(p),H(b,d),H(E,d),T&&T.d(d)}}}function He(l,t,s){let{$$slots:r={},$$scope:e}=t;return It(async()=>{await xt()}),l.$$set=o=>{"$$scope"in o&&s(1,e=o.$$scope)},[r,e]}class Xe extends x{constructor(t){super(),tt(this,t,He,Re,Z,{})}}export{Xe as component,We as universal};
