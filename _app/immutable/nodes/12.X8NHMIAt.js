import{s as se,e as k,a as U,A as K,c as C,g as I,b as A,f as u,m as g,i as y,O as J,E as z,n as M,B as be,t as ae,d as ie,z as S,h as $,j as oe,C as X,G as Ce,k as we,p as ye,K as Ee,y as Te}from"../chunks/scheduler.B3gxbuV4.js";import{h as pe,u as Pe}from"../chunks/await_block.hv1NBf3l.js";import{S as ce,i as ue,b as ee,d as te,m as le,a as Q,t as W,e as ne}from"../chunks/index.D4Ghn6ud.js";import{P as F}from"../chunks/public.xpUinP6t.js";import{r as $e,A as Le}from"../chunks/index.BgpY2piB.js";import{g as Ue,t as ke,u as Ie,U as Ne}from"../chunks/service.CLaslaYc.js";import{s as Ae}from"../chunks/client.CXFlBm-D.js";import{M as Be}from"../chunks/Main.DhctXHZH.js";import{e as Y}from"../chunks/each.BG3x12hU.js";const Se=!1,at=Object.freeze(Object.defineProperty({__proto__:null,ssr:Se},Symbol.toStringTag,{value:"Module"})),he=()=>$e({path:"/reactor/getEntriesForPublic"}),De=async l=>{const e=F+"/reactor/addEntry",n=await Ue();typeof n=="string"&&await Ae.post(e).auth(n,{type:"bearer"}).field("name",l.name).field("commaSeparatedTags",l.commaSeparatedTags).attach("file",l.file)};function me(l,e,n){const t=l.slice();return t[10]=e[n],t}function _e(l,e,n){const t=l.slice();return t[13]=e[n],t}function de(l){let e,n=l[13]+"",t;return{c(){e=k("span"),t=ae(n),this.h()},l(r){e=C(r,"SPAN",{class:!0});var s=A(e);t=ie(s,n),s.forEach(u),this.h()},h(){g(e,"class","tag svelte-16m67n3")},m(r,s){y(r,e,s),$(e,t)},p(r,s){s&8&&n!==(n=r[13]+"")&&oe(t,n)},d(r){r&&u(e)}}}function Me(l){let e,n,t;return{c(){e=k("img"),this.h()},l(r){e=C(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){g(e,"class","medium-margin svelte-16m67n3"),X(e.src,n=F+l[10].uri)||g(e,"src",n),g(e,"alt",t=l[10].name)},m(r,s){y(r,e,s)},p(r,s){s&8&&!X(e.src,n=F+r[10].uri)&&g(e,"src",n),s&8&&t!==(t=r[10].name)&&g(e,"alt",t)},d(r){r&&u(e)}}}function Oe(l){let e,n;return{c(){e=k("video"),this.h()},l(t){e=C(t,"VIDEO",{class:!0,style:!0,src:!0}),A(e).forEach(u),this.h()},h(){g(e,"class","medium-margin svelte-16m67n3"),Ce(e,"max-width","100%"),e.controls=!0,X(e.src,n=F+l[10].uri)||g(e,"src",n)},m(t,r){y(t,e,r)},p(t,r){r&8&&!X(e.src,n=F+t[10].uri)&&g(e,"src",n)},d(t){t&&u(e)}}}function ve(l){let e,n,t,r=l[10].name+"",s,o,_,p,f,d,i=`<i class="fas fa-copy"></i>
                    Copy link`,v,a,h,w,N,E,c,T,D,H=Y(l[10].tags),L=[];for(let P=0;P<H.length;P+=1)L[P]=de(_e(l,H,P));function q(){return l[7](l[10])}function O(P,m){return m&8&&(w=null),w==null&&(w=!!P[5](P[10])),w?Oe:Me}let j=O(l,-1),B=j(l);return{c(){e=k("div"),n=k("div"),t=k("b"),s=ae(r),o=U(),_=k("div");for(let P=0;P<L.length;P+=1)L[P].c();p=U(),f=k("div"),d=k("button"),d.innerHTML=i,v=U(),a=k("div"),h=k("a"),B.c(),c=U(),this.h()},l(P){e=C(P,"DIV",{});var m=A(e);n=C(m,"DIV",{});var b=A(n);t=C(b,"B",{});var V=A(t);s=ie(V,r),V.forEach(u),b.forEach(u),o=I(m),_=C(m,"DIV",{class:!0});var x=A(_);for(let Z=0;Z<L.length;Z+=1)L[Z].l(x);x.forEach(u),p=I(m),f=C(m,"DIV",{});var R=A(f);d=C(R,"BUTTON",{class:!0,"data-svelte-h":!0}),S(d)!=="svelte-2xhnct"&&(d.innerHTML=i),R.forEach(u),m.forEach(u),v=I(P),a=C(P,"DIV",{});var G=A(a);h=C(G,"A",{href:!0,download:!0,rel:!0,target:!0});var fe=A(h);B.l(fe),fe.forEach(u),c=I(G),G.forEach(u),this.h()},h(){g(_,"class","svelte-16m67n3"),g(d,"class","full-width svelte-16m67n3"),g(h,"href",N=F+l[10].uri),g(h,"download",E=l[10].name),g(h,"rel","noopener noreferrer"),g(h,"target","blank")},m(P,m){y(P,e,m),$(e,n),$(n,t),$(t,s),$(e,o),$(e,_);for(let b=0;b<L.length;b+=1)L[b]&&L[b].m(_,null);$(e,p),$(e,f),$(f,d),y(P,v,m),y(P,a,m),$(a,h),B.m(h,null),$(a,c),T||(D=z(d,"click",q),T=!0)},p(P,m){if(l=P,m&8&&r!==(r=l[10].name+"")&&oe(s,r),m&8){H=Y(l[10].tags);let b;for(b=0;b<H.length;b+=1){const V=_e(l,H,b);L[b]?L[b].p(V,m):(L[b]=de(V),L[b].c(),L[b].m(_,null))}for(;b<L.length;b+=1)L[b].d(1);L.length=H.length}j===(j=O(l,m))&&B?B.p(l,m):(B.d(1),B=j(l),B&&(B.c(),B.m(h,null))),m&8&&N!==(N=F+l[10].uri)&&g(h,"href",N),m&8&&E!==(E=l[10].name)&&g(h,"download",E)},d(P){P&&(u(e),u(v),u(a)),be(L,P),B.d(),T=!1,D()}}}function ge(l){let e,n="More...",t,r;return{c(){e=k("button"),e.textContent=n,this.h()},l(s){e=C(s,"BUTTON",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-3fputj"&&(e.textContent=n),this.h()},h(){g(e,"class","full-width medium-margin svelte-16m67n3")},m(s,o){y(s,e,o),t||(r=z(e,"click",l[8]),t=!0)},p:M,d(s){s&&u(e),t=!1,r()}}}function Ve(l){let e,n,t,r,s,o,_,p=Y(l[3]),f=[];for(let i=0;i<p.length;i+=1)f[i]=ve(me(l,p,i));let d=l[2].length===0&&l[1]*re<l[0].length&&ge(l);return{c(){e=k("input"),n=U(),t=k("div");for(let i=0;i<f.length;i+=1)f[i].c();r=U(),d&&d.c(),s=K(),this.h()},l(i){e=C(i,"INPUT",{class:!0,type:!0,placeholder:!0}),n=I(i),t=C(i,"DIV",{class:!0});var v=A(t);for(let a=0;a<f.length;a+=1)f[a].l(v);v.forEach(u),r=I(i),d&&d.l(i),s=K(),this.h()},h(){g(e,"class","full-width medium-margin svelte-16m67n3"),g(e,"type","text"),g(e,"placeholder","Search by tags or name"),g(t,"class","container svelte-16m67n3")},m(i,v){y(i,e,v),J(e,l[2]),y(i,n,v),y(i,t,v);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(t,null);y(i,r,v),d&&d.m(i,v),y(i,s,v),o||(_=z(e,"input",l[6]),o=!0)},p(i,[v]){if(v&4&&e.value!==i[2]&&J(e,i[2]),v&56){p=Y(i[3]);let a;for(a=0;a<p.length;a+=1){const h=me(i,p,a);f[a]?f[a].p(h,v):(f[a]=ve(h),f[a].c(),f[a].m(t,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=p.length}i[2].length===0&&i[1]*re<i[0].length?d?d.p(i,v):(d=ge(i),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i:M,o:M,d(i){i&&(u(e),u(n),u(t),u(r),u(s)),be(f,i),d&&d.d(i),o=!1,_()}}}const re=10;function He(l,e,n){let{reactions:t}=e,r=1,s=[],o="";const _=(a,h)=>{if(!h.length||a.name.toLowerCase().includes(h.toLowerCase()))return!0;for(const N of a.tags)if(N.toLowerCase().includes(h.toLowerCase()))return!0;return!1},p=a=>{navigator.clipboard.writeText(F+a.uri),ke.push('<i class="fas fa-check"></i> Link copied to clipboard',{duration:1e3,theme:{"--toastBarHeight":0}})},f=a=>a.s3PresignedUrl.includes(".mp4");function d(){o=this.value,n(2,o)}const i=a=>p(a),v=()=>n(1,r++,r);return l.$$set=a=>{"reactions"in a&&n(0,t=a.reactions)},l.$$.update=()=>{l.$$.dirty&7&&n(3,s=t.filter(a=>_(a,o)).sort((a,h)=>h.creationDateUnix-a.creationDateUnix).slice(0,o.length?void 0:r*re))},[t,r,o,s,p,f,d,i,v]}class Re extends ce{constructor(e){super(),ue(this,e,He,Ve,se,{reactions:0})}}function qe(l){let e,n="Login to upload content";return{c(){e=k("p"),e.textContent=n},l(t){e=C(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-k7lhwu"&&(e.textContent=n)},m(t,r){y(t,e,r)},p:M,d(t){t&&u(e)}}}function ze(l){let e,n,t,r="Name",s,o,_,p,f,d="Tags",i,v,a,h,w,N="File",E,c,T,D,H='<i class="fas fa-times-circle"></i>',L,q,O,j="Upload",B,P;return{c(){e=k("div"),n=k("p"),t=k("label"),t.textContent=r,s=U(),o=k("input"),_=U(),p=k("p"),f=k("label"),f.textContent=d,i=U(),v=k("input"),a=U(),h=k("p"),w=k("label"),w.textContent=N,E=U(),c=k("input"),T=U(),D=k("button"),D.innerHTML=H,L=U(),q=k("p"),O=k("button"),O.textContent=j,this.h()},l(m){e=C(m,"DIV",{class:!0});var b=A(e);n=C(b,"P",{class:!0});var V=A(n);t=C(V,"LABEL",{for:!0,"data-svelte-h":!0}),S(t)!=="svelte-bs9sy6"&&(t.textContent=r),s=I(V),o=C(V,"INPUT",{type:!0,class:!0}),V.forEach(u),_=I(b),p=C(b,"P",{class:!0});var x=A(p);f=C(x,"LABEL",{for:!0,"data-svelte-h":!0}),S(f)!=="svelte-1myp42m"&&(f.textContent=d),i=I(x),v=C(x,"INPUT",{type:!0,class:!0}),x.forEach(u),b.forEach(u),a=I(m),h=C(m,"P",{class:!0});var R=A(h);w=C(R,"LABEL",{for:!0,"data-svelte-h":!0}),S(w)!=="svelte-180hc3e"&&(w.textContent=N),E=I(R),c=C(R,"INPUT",{class:!0,type:!0}),T=I(R),D=C(R,"BUTTON",{"data-svelte-h":!0}),S(D)!=="svelte-1q80dng"&&(D.innerHTML=H),R.forEach(u),L=I(m),q=C(m,"P",{});var G=A(q);O=C(G,"BUTTON",{"data-svelte-h":!0}),S(O)!=="svelte-15774uw"&&(O.textContent=j),G.forEach(u),this.h()},h(){g(t,"for","name"),g(o,"type","text"),g(o,"class","svelte-248e0t"),g(n,"class","meta-section-item svelte-248e0t"),g(f,"for","content"),g(v,"type","textarea"),g(v,"class","svelte-248e0t"),g(p,"class","meta-section-item svelte-248e0t"),g(e,"class","meta-section svelte-248e0t"),g(w,"for","file"),g(c,"class","file-input svelte-248e0t"),g(c,"type","file"),g(h,"class","file-section svelte-248e0t")},m(m,b){y(m,e,b),$(e,n),$(n,t),$(n,s),$(n,o),J(o,l[0]),$(e,_),$(e,p),$(p,f),$(p,i),$(p,v),J(v,l[1]),y(m,a,b),y(m,h,b),$(h,w),$(h,E),$(h,c),l[9](c),$(h,T),$(h,D),y(m,L,b),y(m,q,b),$(q,O),B||(P=[z(o,"input",l[6]),z(v,"input",l[7]),z(c,"change",l[8]),z(D,"click",l[10]),z(O,"click",l[5])],B=!0)},p(m,b){b&1&&o.value!==m[0]&&J(o,m[0]),b&2&&J(v,m[1])},d(m){m&&(u(e),u(a),u(h),u(L),u(q)),l[9](null),B=!1,Te(P)}}}function Fe(l){let e;function n(s,o){return s[4]?ze:qe}let t=n(l),r=t(l);return{c(){r.c(),e=K()},l(s){r.l(s),e=K()},m(s,o){r.m(s,o),y(s,e,o)},p(s,[o]){t===(t=n(s))&&r?r.p(s,o):(r.d(1),r=t(s),r&&(r.c(),r.m(e.parentNode,e)))},i:M,o:M,d(s){s&&u(e),r.d(s)}}}function je(l,e,n){let t;we(l,Ie,w=>n(4,t=w));const r=ye();let s,o="",_,p;const f=async()=>{try{if(!(s!=null&&s.length))throw new Error("A name is required for upload");let w;if(p&&p.length&&(w=p[0]),!w)throw new Error("A file is required for upload");await De({name:s,commaSeparatedTags:o,file:w}),r("upload")}catch(w){let N=w.message;w instanceof Le&&w.code===401?N="Invalid logged in user":w instanceof Ne&&(N="User is logged out");const E=`<strong>Entry not created</strong><br/> ${N}`;ke.push(E,{theme:{"--toastBarBackground":"#FF0000"}})}};function d(){s=this.value,n(0,s)}function i(){o=this.value,n(1,o)}function v(){p=this.files,n(3,p)}function a(w){Ee[w?"unshift":"push"](()=>{_=w,n(2,_)})}return[s,o,_,p,t,f,d,i,v,a,()=>{n(2,_.value="",_)}]}class xe extends ce{constructor(e){super(),ue(this,e,je,Fe,se,{})}}function Ge(l){let e,n="Something went wrong",t,r,s=JSON.stringify(l[3])+"",o;return{c(){e=k("p"),e.textContent=n,t=U(),r=k("p"),o=ae(s)},l(_){e=C(_,"P",{"data-svelte-h":!0}),S(e)!=="svelte-171fb2d"&&(e.textContent=n),t=I(_),r=C(_,"P",{});var p=A(r);o=ie(p,s),p.forEach(u)},m(_,p){y(_,e,p),y(_,t,p),y(_,r,p),$(r,o)},p(_,p){p&1&&s!==(s=JSON.stringify(_[3])+"")&&oe(o,s)},i:M,o:M,d(_){_&&(u(e),u(t),u(r))}}}function Je(l){let e,n;return e=new Re({props:{reactions:l[2]}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,r){le(e,t,r),n=!0},p(t,r){const s={};r&1&&(s.reactions=t[2]),e.$set(s)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){ne(e,t)}}}function Ke(l){let e,n="Loading data";return{c(){e=k("p"),e.textContent=n},l(t){e=C(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-ezyzhc"&&(e.textContent=n)},m(t,r){y(t,e,r)},p:M,i:M,o:M,d(t){t&&u(e)}}}function Qe(l){let e,n,t,r="Reactor",s,o,_="Upload",p,f,d,i,v="Content",a,h,w,N;e=new Be({props:{title:"Reactor",description:"My collection of memes"}}),f=new xe({}),f.$on("upload",l[1]);let E={ctx:l,current:null,token:null,hasCatch:!0,pending:Ke,then:Je,catch:Ge,value:2,error:3,blocks:[,,,]};return pe(w=l[0],E),{c(){ee(e.$$.fragment),n=U(),t=k("h2"),t.textContent=r,s=U(),o=k("h3"),o.textContent=_,p=U(),ee(f.$$.fragment),d=U(),i=k("h3"),i.textContent=v,a=U(),h=K(),E.block.c()},l(c){te(e.$$.fragment,c),n=I(c),t=C(c,"H2",{"data-svelte-h":!0}),S(t)!=="svelte-3o4hy8"&&(t.textContent=r),s=I(c),o=C(c,"H3",{"data-svelte-h":!0}),S(o)!=="svelte-18fi3zp"&&(o.textContent=_),p=I(c),te(f.$$.fragment,c),d=I(c),i=C(c,"H3",{"data-svelte-h":!0}),S(i)!=="svelte-1qnf76d"&&(i.textContent=v),a=I(c),h=K(),E.block.l(c)},m(c,T){le(e,c,T),y(c,n,T),y(c,t,T),y(c,s,T),y(c,o,T),y(c,p,T),le(f,c,T),y(c,d,T),y(c,i,T),y(c,a,T),y(c,h,T),E.block.m(c,E.anchor=T),E.mount=()=>h.parentNode,E.anchor=h,N=!0},p(c,[T]){l=c,E.ctx=l,T&1&&w!==(w=l[0])&&pe(w,E)||Pe(E,l,T)},i(c){N||(Q(e.$$.fragment,c),Q(f.$$.fragment,c),Q(E.block),N=!0)},o(c){W(e.$$.fragment,c),W(f.$$.fragment,c);for(let T=0;T<3;T+=1){const D=E.blocks[T];W(D)}N=!1},d(c){c&&(u(n),u(t),u(s),u(o),u(p),u(d),u(i),u(a),u(h)),ne(e,c),ne(f,c),E.block.d(c),E.token=null,E=null}}}function We(l,e,n){let t=he();return[t,()=>n(0,t=he())]}class it extends ce{constructor(e){super(),ue(this,e,We,Qe,se,{})}}export{it as component,at as universal};
