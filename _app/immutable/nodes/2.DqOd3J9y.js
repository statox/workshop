import{s as D,H as C,i as _,n as $,f,M as U,e as g,t as y,a as M,c as k,b as v,d as S,g as T,r as w,h as d,j as A,C as q}from"../chunks/scheduler.C_O4dLgy.js";import{S as V,i as j,b as F,d as O,m as P,a as R,t as W,e as x}from"../chunks/index.DGUmas_3.js";import{e as b}from"../chunks/each.wPxVKH2l.js";import{g as G}from"../chunks/entry.CXFbpVLb.js";function N(l,t,o){const e=l.slice();return e[2]=t[o],e}function H(l,t,o){const e=l.slice();return e[5]=t[o],e}function I(l){let t,o,e=l[5].name+"",n,i,s,h=l[5].description+"",c,a,p;function r(){return l[1](l[5])}return{c(){t=g("button"),o=g("h3"),n=y(e),i=M(),s=g("div"),c=y(h),this.h()},l(m){t=k(m,"BUTTON",{class:!0});var u=v(t);o=k(u,"H3",{});var E=v(o);n=S(E,e),E.forEach(f),i=T(u),s=k(u,"DIV",{class:!0});var z=v(s);c=S(z,h),z.forEach(f),u.forEach(f),this.h()},h(){w(s,"class","description svelte-itnz50"),w(t,"class","app svelte-itnz50")},m(m,u){_(m,t,u),d(t,o),d(o,n),d(t,i),d(t,s),d(s,c),a||(p=q(t,"click",r),a=!0)},p(m,u){l=m,u&1&&e!==(e=l[5].name+"")&&A(n,e),u&1&&h!==(h=l[5].description+"")&&A(c,h)},d(m){m&&f(t),a=!1,p()}}}function B(l){let t,o=l[2].name+"",e,n,i,s,h=b(l[2].apps),c=[];for(let a=0;a<h.length;a+=1)c[a]=I(H(l,h,a));return{c(){t=g("h2"),e=y(o),n=M(),i=g("div");for(let a=0;a<c.length;a+=1)c[a].c();s=M(),this.h()},l(a){t=k(a,"H2",{});var p=v(t);e=S(p,o),p.forEach(f),n=T(a),i=k(a,"DIV",{class:!0});var r=v(i);for(let m=0;m<c.length;m+=1)c[m].l(r);s=T(r),r.forEach(f),this.h()},h(){w(i,"class","container svelte-itnz50")},m(a,p){_(a,t,p),d(t,e),_(a,n,p),_(a,i,p);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(i,null);d(i,s)},p(a,p){if(p&1&&o!==(o=a[2].name+"")&&A(e,o),p&1){h=b(a[2].apps);let r;for(r=0;r<h.length;r+=1){const m=H(a,h,r);c[r]?c[r].p(m,p):(c[r]=I(m),c[r].c(),c[r].m(i,s))}for(;r<c.length;r+=1)c[r].d(1);c.length=h.length}},d(a){a&&(f(t),f(n),f(i)),U(c,a)}}}function J(l){let t,o=b(l[0]),e=[];for(let n=0;n<o.length;n+=1)e[n]=B(N(l,o,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=C()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=C()},m(n,i){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,i);_(n,t,i)},p(n,[i]){if(i&1){o=b(n[0]);let s;for(s=0;s<o.length;s+=1){const h=N(n,o,s);e[s]?e[s].p(h,i):(e[s]=B(h),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=o.length}},i:$,o:$,d(n){n&&f(t),U(e,n)}}}function K(l,t,o){let{sections:e}=t;const n=i=>G(i.link);return l.$$set=i=>{"sections"in i&&o(0,e=i.sections)},[e,n]}class L extends V{constructor(t){super(),j(this,t,K,J,D,{sections:0})}}const Q={name:"Music",apps:[{name:"Song Book",description:"The list of my guitar tablatures",link:"/songbook"},{name:"Metronome",description:"Never miss a beat",link:"/metronome"},{name:"Scales",description:"A tool to visualize music scales and common chords progressions",link:"/scales"},{name:"Chord Wheel",description:"A tool to find the key of a song and work with scale degrees",link:"/chordwheel"},{name:"Tap Tempo",description:"Find a tempo by tapping it on the screen or the keyboard",link:"/taptempo"}]},X={name:"Utils",apps:[{name:"Notes",description:"A list of notes for stuff I keep forgetting",link:"/notes"},{name:"Clipboard",description:"My universal clipboard",link:"/clipboard"},{name:"Reactor",description:"My collection of memes and various reaction images",link:"/reactor"},{name:"About",description:"The about section of this website",link:"/about"}]},Y=[X,Q];function Z(l){let t,o;return t=new L({props:{sections:Y}}),{c(){F(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,n){P(t,e,n),o=!0},p:$,i(e){o||(R(t.$$.fragment,e),o=!0)},o(e){W(t.$$.fragment,e),o=!1},d(e){x(t,e)}}}class se extends V{constructor(t){super(),j(this,t,null,Z,D,{})}}export{se as component};
