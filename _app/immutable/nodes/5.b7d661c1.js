import{s as pe,f as g,a as S,l as Y,g as v,u as X,c as W,h as N,d as _,m as Z,j as D,O as ee,i as E,y as d,P as q,M as te,n as ge,z as G,E as le,Q as ve,L as ae,R as ne}from"../chunks/scheduler.11d62034.js";import{S as me,i as de,b as Ee,d as Ce,m as be,a as Le,t as Ie,e as Se}from"../chunks/index.ec572ff7.js";import{e as F}from"../chunks/each.8c454f5c.js";function re(n,t,o){const a=n.slice();return a[2]=t[o],a}function ce(n,t,o){const a=n.slice();return a[1]=t[o],a}function _e(n,t,o){const a=n.slice();return a[14]=t[o],a}function fe(n){let t,o=n[14]+"",a,r;return{c(){t=g("option"),a=Y(o),r=S(),this.h()},l(s){t=v(s,"OPTION",{});var c=N(t);a=Z(c,o),r=W(c),c.forEach(_),this.h()},h(){t.__value=n[14],ae(t,t.__value)},m(s,c){E(s,t,c),d(t,a),d(t,r)},p:G,d(s){s&&_(t)}}}function he(n){let t,o=n[1].name+"",a,r;return{c(){t=g("option"),a=Y(o),r=S(),this.h()},l(s){t=v(s,"OPTION",{});var c=N(t);a=Z(c,o),r=W(c),c.forEach(_),this.h()},h(){t.__value=n[1],ae(t,t.__value)},m(s,c){E(s,t,c),d(t,a),d(t,r)},p:G,d(s){s&&_(t)}}}function ue(n){let t,o=n[2].name+"",a,r;return{c(){t=g("option"),a=Y(o),r=S(),this.h()},l(s){t=v(s,"OPTION",{});var c=N(t);a=Z(c,o),r=W(c),c.forEach(_),this.h()},h(){t.__value=n[2],ae(t,t.__value)},m(s,c){E(s,t,c),d(t,a),d(t,r)},p:G,d(s){s&&_(t)}}}function We(n){let t,o="Scales",a,r,s,c="Tonic",O,m,B,A,k,y="Scale",T,C,H,P,b,R="mode",j,p,J,K,U,z=n[6](n[0],n[1],n[2]).join(" ")+"",Q,x,oe,w=F(n[3]),f=[];for(let e=0;e<w.length;e+=1)f[e]=fe(_e(n,w,e));let M=F(n[4]),h=[];for(let e=0;e<M.length;e+=1)h[e]=he(ce(n,M,e));let $=F(n[5]),u=[];for(let e=0;e<$.length;e+=1)u[e]=ue(re(n,$,e));return{c(){t=g("h2"),t.textContent=o,a=S(),r=g("span"),s=g("label"),s.textContent=c,O=S(),m=g("select");for(let e=0;e<f.length;e+=1)f[e].c();B=S(),A=g("span"),k=g("label"),k.textContent=y,T=S(),C=g("select");for(let e=0;e<h.length;e+=1)h[e].c();H=S(),P=g("span"),b=g("label"),b.textContent=R,j=S(),p=g("select");for(let e=0;e<u.length;e+=1)u[e].c();J=S(),K=g("br"),U=S(),Q=Y(z),this.h()},l(e){t=v(e,"H2",{"data-svelte-h":!0}),X(t)!=="svelte-b2sc71"&&(t.textContent=o),a=W(e),r=v(e,"SPAN",{});var i=N(r);s=v(i,"LABEL",{for:!0,"data-svelte-h":!0}),X(s)!=="svelte-n599bs"&&(s.textContent=c),O=W(i),m=v(i,"SELECT",{id:!0});var l=N(m);for(let I=0;I<f.length;I+=1)f[I].l(l);l.forEach(_),i.forEach(_),B=W(e),A=v(e,"SPAN",{});var L=N(A);k=v(L,"LABEL",{for:!0,"data-svelte-h":!0}),X(k)!=="svelte-jc9lqs"&&(k.textContent=y),T=W(L),C=v(L,"SELECT",{id:!0});var se=N(C);for(let I=0;I<h.length;I+=1)h[I].l(se);se.forEach(_),L.forEach(_),H=W(e),P=v(e,"SPAN",{});var V=N(P);b=v(V,"LABEL",{for:!0,"data-svelte-h":!0}),X(b)!=="svelte-lnw5rg"&&(b.textContent=R),j=W(V),p=v(V,"SELECT",{id:!0});var ie=N(p);for(let I=0;I<u.length;I+=1)u[I].l(ie);ie.forEach(_),V.forEach(_),J=W(e),K=v(e,"BR",{}),U=W(e),Q=Z(e,z),this.h()},h(){D(s,"for","tonicInput"),D(m,"id","tonicInput"),n[0]===void 0&&ee(()=>n[7].call(m)),D(k,"for","scaleInput"),D(C,"id","scaleInput"),n[1]===void 0&&ee(()=>n[8].call(C)),D(b,"for","modeInput"),D(p,"id","modeInput"),n[2]===void 0&&ee(()=>n[9].call(p))},m(e,i){E(e,t,i),E(e,a,i),E(e,r,i),d(r,s),d(r,O),d(r,m);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(m,null);q(m,n[0],!0),E(e,B,i),E(e,A,i),d(A,k),d(A,T),d(A,C);for(let l=0;l<h.length;l+=1)h[l]&&h[l].m(C,null);q(C,n[1],!0),E(e,H,i),E(e,P,i),d(P,b),d(P,j),d(P,p);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(p,null);q(p,n[2],!0),E(e,J,i),E(e,K,i),E(e,U,i),E(e,Q,i),x||(oe=[te(m,"change",n[7]),te(C,"change",n[8]),te(p,"change",n[9])],x=!0)},p(e,[i]){if(i&8){w=F(e[3]);let l;for(l=0;l<w.length;l+=1){const L=_e(e,w,l);f[l]?f[l].p(L,i):(f[l]=fe(L),f[l].c(),f[l].m(m,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=w.length}if(i&9&&q(m,e[0]),i&16){M=F(e[4]);let l;for(l=0;l<M.length;l+=1){const L=ce(e,M,l);h[l]?h[l].p(L,i):(h[l]=he(L),h[l].c(),h[l].m(C,null))}for(;l<h.length;l+=1)h[l].d(1);h.length=M.length}if(i&18&&q(C,e[1]),i&32){$=F(e[5]);let l;for(l=0;l<$.length;l+=1){const L=re(e,$,l);u[l]?u[l].p(L,i):(u[l]=ue(L),u[l].c(),u[l].m(p,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=$.length}i&36&&q(p,e[2]),i&7&&z!==(z=e[6](e[0],e[1],e[2]).join(" ")+"")&&ge(Q,z)},i:G,o:G,d(e){e&&(_(t),_(a),_(r),_(B),_(A),_(H),_(P),_(J),_(K),_(U),_(Q)),le(f,e),le(h,e),le(u,e),x=!1,ve(oe)}}}function Ae(n,t,o){const a=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],r=[{name:"Major",intervals:["W","W","H","W","W","W","H"]},{name:"Natural minor",intervals:["W","H","W","W","H","W","W"]}],s=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let c="C",O=r[0],m=s[0];const B=(T,C,H)=>{const{intervals:P}=C,b=[T],R=a.indexOf(T);if(R===-1)throw new Error(`Tonic ${T} not found`);let j=R;for(const p of P)j=(j+(p==="W"?2:1))%a.length,b.push(a[j]);b.pop();for(let p=1;p<H.degree;p++)b.push(b.shift());return b};function A(){c=ne(this),o(0,c),o(3,a)}function k(){O=ne(this),o(1,O),o(4,r)}function y(){m=ne(this),o(2,m),o(5,s)}return[c,O,m,a,r,s,B,A,k,y]}class Pe extends me{constructor(t){super(),de(this,t,Ae,We,pe,{})}}function ke(n){let t,o;return t=new Pe({}),{c(){Ee(t.$$.fragment)},l(a){Ce(t.$$.fragment,a)},m(a,r){be(t,a,r),o=!0},p:G,i(a){o||(Le(t.$$.fragment,a),o=!0)},o(a){Ie(t.$$.fragment,a),o=!1},d(a){Se(t,a)}}}class je extends me{constructor(t){super(),de(this,t,null,ke,pe,{})}}export{je as component};
