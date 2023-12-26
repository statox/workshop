import{s as fe,f as C,g as E,h as S,d as v,j as V,i as $,r as U,I as ot,a as M,e as ee,N as te,c as B,F as w,G as me,H as rt,T as Q,l as X,m as q,M as Ne,Y as ae,X as Ie,n as st,Z as $e}from"../chunks/scheduler.vqADxFSB.js";import{S as _e,i as ve,b as he,d as de,m as ue,a as P,t as G,e as ge,g as ye,c as we}from"../chunks/index.Q4c_4ZiM.js";import{e as W}from"../chunks/each.tsRmA9lM.js";import{P as it}from"../chunks/P5.QuiWw2fC.js";const z=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],Ce=r=>{if(r<1||r>7)throw new Error(`Unkown degree ${r}`);return["I","II","III","IV","V","VI","VII"][r-1]};function at(r){let e,o,t;return o=new it({props:{sketch:r[0]}}),{c(){e=C("div"),he(o.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var n=S(e);de(o.$$.fragment,n),n.forEach(v),this.h()},h(){V(e,"class","d-flex justify-content-center")},m(l,n){$(l,e,n),ue(o,e,null),t=!0},p:U,i(l){t||(P(o.$$.fragment,l),t=!0)},o(l){G(o.$$.fragment,l),t=!1},d(l){l&&v(e),ge(o)}}}const Te=14;function ct(r,e,o){let t,{labelMode:l="name"}=e,{notesToDisplay:n}=e;const c=["C","D","E","F","G","A","B"],g=["C#","D#","F#","G#","A#"],_=h=>{const a=[80,70,60,150],T=[80,70,60],d=h.width/Te;for(let b=0;b<Te;b++){const p=c[b%c.length];h.strokeWeight(1),h.stroke(a),h.noFill(),h.rect(d*b,0,d,h.height);const f=p+"#";g.includes(f)&&(h.fill(T),h.rect(d*b+2*d/3,0,d/2,h.height*.65))}},y=(h,a,T)=>{if(T==="name")return a;const d=h.indexOf(a);if(d===-1)throw new Error("note not in scale");return Ce(d+1)},I=h=>{const a=h.width/Te;for(let T=0;T<Te;T++){const d=c[T%c.length],b=n.indexOf(d);if(b>=0){b===0?h.fill([250,80,80]):h.fill("black");const u=a*T+a/2,s=h.height*.8;h.circle(u,s,20),h.noStroke(),h.fill("white");const m=y(n,d,l);h.text(m,u-h.textWidth(m)/2,s+h.textSize()/2)}const p=d+"#",f=n.indexOf(p);if(f>=0){f===0?h.fill([250,80,80]):h.fill("black");const u=a*T+a,s=h.height*.5;h.circle(u,s,20),h.noStroke(),h.fill("white");const m=y(n,p,l);h.text(m,u-h.textWidth(m)/2,s+h.textSize()/2)}}},x=h=>{h.setup=()=>{o(3,t=h),h.createCanvas(900,300),h.textStyle(h.BOLD)},h.draw=()=>{h.background([200,190,170]),_(h),I(h),h.noLoop()}};return ot(()=>{t?.remove()}),r.$$set=h=>{"labelMode"in h&&o(1,l=h.labelMode),"notesToDisplay"in h&&o(2,n=h.notesToDisplay)},r.$$.update=()=>{r.$$.dirty&14&&(n||l)&&t?.draw()},[x,l,n,t]}class ft extends _e{constructor(e){super(),ve(this,e,ct,at,fe,{labelMode:1,notesToDisplay:2})}}function ht(r){let e,o,t;return o=new it({props:{sketch:r[0]}}),{c(){e=C("div"),he(o.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var n=S(e);de(o.$$.fragment,n),n.forEach(v),this.h()},h(){V(e,"class","d-flex justify-content-center")},m(l,n){$(l,e,n),ue(o,e,null),t=!0},p:U,i(l){t||(P(o.$$.fragment,l),t=!0)},o(l){G(o.$$.fragment,l),t=!1},d(l){l&&v(e),ge(o)}}}const He=15,ce=30;function dt(r,e,o){let t,{labelMode:l="name"}=e,{notesToDisplay:n}=e;const c=["E","A","D","G","B","E"],g=c.map(a=>{const T=z.indexOf(a);if(T===-1)throw new Error(`Base ${a} not found`);const d=[a];for(let b=1;b<He;b++){const p=z[(T+b)%z.length];d.push(p)}return d}),_=a=>{const T=[80,70,60,150],d=a.height/6;for(let u=0;u<g.length;u++){const s=c[u],m=d*u+d/2;a.strokeWeight(1),a.stroke(T),a.noFill(),a.line(ce,m,a.width,m),a.noStroke(),a.fill(T),a.text(s,5,a.height-m+a.textSize()/2)}a.strokeWeight(5),a.stroke(T),a.noFill(),a.line(ce,d/2,ce,a.height-d/2),a.strokeWeight(1);const b=a.width/g[0].length;for(let u=1;u<He;u++){const s=ce+b*u;a.line(s,d/2,s,a.height-d/2)}const p=[3,5,7,9,15];for(const u of p){let{x:s,y:m}=x({string:2,fret:u});m-=d/2,a.fill(T),a.circle(s,m,10)}const f=[1,3];for(const u of f){let{x:s,y:m}=x({string:u,fret:12});m-=d/2,a.fill(T),a.circle(s,m,10)}},y=(a,T,d)=>{if(d==="name")return T;const b=a.indexOf(T);if(b===-1)throw new Error("note not in scale");return Ce(b+1)},I=a=>{for(let T=0;T<6;T++){const d=g[T];for(let b=0;b<d.length;b++){const p=d[b];if(!n.includes(p))continue;const f={string:T,fret:b},{x:u,y:s}=x(f);n.indexOf(p)===0?a.fill([250,80,80]):a.fill("black"),a.circle(u,s,20),a.noStroke(),a.fill("white");const m=y(n,p,l);a.text(m,u-a.textWidth(m)/2,s+a.textSize()/2)}}},x=a=>{const{string:T,fret:d}=a,b=t.height/6,p=b*(5-T)+b/2;if(d===0)return{x:ce,y:p};const f=t.width/g[0].length;return{x:ce+f*(d-1)+f*.5,y:p}},h=a=>{a.setup=()=>{o(3,t=a),a.createCanvas(900,300),a.textStyle(a.BOLD)},a.draw=()=>{a.background([200,190,170]),_(a),I(a),a.noLoop()}};return ot(()=>{t?.remove()}),r.$$set=a=>{"labelMode"in a&&o(1,l=a.labelMode),"notesToDisplay"in a&&o(2,n=a.notesToDisplay)},r.$$.update=()=>{r.$$.dirty&14&&(n||l)&&t?.draw()},[h,l,n,t]}class ut extends _e{constructor(e){super(),ve(this,e,dt,ht,fe,{labelMode:1,notesToDisplay:2})}}function Re(r){let e,o;return e=new ut({props:{notesToDisplay:r[0],labelMode:r[1]}}),{c(){he(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){ue(e,t,l),o=!0},p(t,l){const n={};l&1&&(n.notesToDisplay=t[0]),l&2&&(n.labelMode=t[1]),e.$set(n)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),o=!1},d(t){ge(e,t)}}}function Pe(r){let e,o;return e=new ft({props:{notesToDisplay:r[0],labelMode:r[1]}}),{c(){he(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){ue(e,t,l),o=!0},p(t,l){const n={};l&1&&(n.notesToDisplay=t[0]),l&2&&(n.labelMode=t[1]),e.$set(n)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),o=!1},d(t){ge(e,t)}}}function gt(r){let e,o="Instrument",t,l,n,c="C / IV",g,_,y='<i class="fas fa-guitar"></i> / <i class="fas fa-keyboard"></i>',I,x=["neck","both"].includes(r[3][r[2]]),h,a=["keyboard","both"].includes(r[3][r[2]]),T,d,b,p,f=x&&Re(r),u=a&&Pe(r);return{c(){e=C("h3"),e.textContent=o,t=M(),l=C("div"),n=C("button"),n.textContent=c,g=M(),_=C("button"),_.innerHTML=y,I=M(),f&&f.c(),h=M(),u&&u.c(),T=ee()},l(s){e=E(s,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-r64p2h"&&(e.textContent=o),t=B(s),l=E(s,"DIV",{});var m=S(l);n=E(m,"BUTTON",{"data-svelte-h":!0}),te(n)!=="svelte-16iriab"&&(n.textContent=c),g=B(m),_=E(m,"BUTTON",{"data-svelte-h":!0}),te(_)!=="svelte-1rhgwvu"&&(_.innerHTML=y),m.forEach(v),I=B(s),f&&f.l(s),h=B(s),u&&u.l(s),T=ee()},m(s,m){$(s,e,m),$(s,t,m),$(s,l,m),w(l,n),w(l,g),w(l,_),$(s,I,m),f&&f.m(s,m),$(s,h,m),u&&u.m(s,m),$(s,T,m),d=!0,b||(p=[me(n,"click",r[4]),me(_,"click",r[5])],b=!0)},p(s,[m]){m&4&&(x=["neck","both"].includes(s[3][s[2]])),x?f?(f.p(s,m),m&4&&P(f,1)):(f=Re(s),f.c(),P(f,1),f.m(h.parentNode,h)):f&&(ye(),G(f,1,1,()=>{f=null}),we()),m&4&&(a=["keyboard","both"].includes(s[3][s[2]])),a?u?(u.p(s,m),m&4&&P(u,1)):(u=Pe(s),u.c(),P(u,1),u.m(T.parentNode,T)):u&&(ye(),G(u,1,1,()=>{u=null}),we())},i(s){d||(P(f),P(u),d=!0)},o(s){G(f),G(u),d=!1},d(s){s&&(v(e),v(t),v(l),v(I),v(h),v(T)),f&&f.d(s),u&&u.d(s),b=!1,rt(p)}}}function mt(r,e,o){let{notesToDisplay:t}=e,l="name";const n=["neck","keyboard","both"];let c=0;const g=()=>o(1,l=l==="name"?"degree":"name"),_=()=>o(2,c=(c+1)%n.length);return r.$$set=y=>{"notesToDisplay"in y&&o(0,t=y.notesToDisplay)},[t,l,c,n,g,_]}class _t extends _e{constructor(e){super(),ve(this,e,mt,gt,fe,{notesToDisplay:0})}}const We=[{name:"Axis progression",examples:["Let it be","Take on me","Someone like you","Don't step believin'","Can you feel the love tonight","Let it go"],chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:4}]},{name:"Other axis progression",examples:["Numb - Linkin Park","Kids - MGMT","Africa - Toto","Rivers flow in you (piano thingy)","Complicated - Avril Lavigne","Grenade","San Francisco","Save tonight"],chords:[{degree:6,minor:!0},{degree:4},{degree:1},{degree:5}]},{name:"Third axis progression",examples:["What's my age again?","Umbrella - Rihanna","Dragosta Din Tei","Boulevard of broken dreams (chorus)","Alejandro - Lady Gaga"],chords:[{degree:4},{degree:1},{degree:5},{degree:6,minor:!0}]},{name:"Andalusian cadence",examples:["Hit the road Jack","Good vibrations - The Beach boys","Happy together","Vanina"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:5}]},{name:"Aeolian vamp",examples:["Rolling in the deep","All along the watchtower","Stairway to heaven","My hear will go on","Somebody that I used to know"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:7,flat:!0}]},{name:"Doo-Woop change",examples:["I will always love you","Crocodile rock","Let's twist again","Baby - Justin Bieber"],chords:[{degree:1},{degree:6,minor:!0},{degree:4},{degree:5}]},{name:"Major scale vamp",examples:["Your body is a wonderland","All the small things - Blink 182"],chords:[{degree:1},{degree:5},{degree:4},{degree:5}]},{name:"Mixolydyan vamp",examples:["Hey Jude (Lalalalaa)","Sympathy for the devil","Sweet child o' mine","Royals - Lorde","Sweet home Alabama"],chords:[{degree:1},{degree:7,flat:!0},{degree:4},{degree:5}]},{name:"pachelbel's cannon",chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:3,minor:!0},{degree:4},{degree:1},{degree:4},{degree:5}]},{name:"Plagal cascade",examples:["Wonderwall","Boulevard of broken dreams (couplet)","Mad world","Pumped up kids","Radioactive - Imagine Dragons"],chords:[{degree:1,minor:!0},{degree:3,flat:!0},{degree:7,flat:!0},{degree:4}]},{name:`"Can't stop" progression`,examples:["Can't stop","Cant't hold us - Mackelmore & Ryan Lewis"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:5,minor:!0},{degree:6,flat:!0}]},{name:'"Closing time" progression',examples:["Closing time - Semisonic","SOS - ABBA","Believe - Cher","All star (Shrek)"],chords:[{degree:1},{degree:5},{degree:2,minor:!0},{degree:4}]},{name:'"More than a feeling" progression',examples:["More than a feeling","Mr Brightside - The Killers"],chords:[{degree:1},{degree:4},{degree:6,minor:!0},{degree:5}]},{name:"Classic blues slow change",chords:[{degree:1},{degree:1},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic blues quick change",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic rock",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:5},{degree:1},{degree:1}]}];function Fe(r,e,o){const t=r.slice();return t[3]=e[o],t}function Ge(r,e,o){const t=r.slice();return t[6]=e[o],t}function Ke(r,e,o){const t=r.slice();return t[6]=e[o],t}function vt(r){let e,o,t="Examples:",l,n=r[3].examples.join(", ")+"",c;return{c(){e=C("span"),o=C("b"),o.textContent=t,l=M(),c=X(n)},l(g){e=E(g,"SPAN",{});var _=S(e);o=E(_,"B",{"data-svelte-h":!0}),te(o)!=="svelte-1jvpsk3"&&(o.textContent=t),l=B(_),c=q(_,n),_.forEach(v)},m(g,_){$(g,e,_),w(e,o),w(e,l),w(e,c)},d(g){g&&v(e)}}}function Ve(r){let e,o=r[0](r[6])+"",t;return{c(){e=C("th"),t=X(o),this.h()},l(l){e=E(l,"TH",{class:!0});var n=S(e);t=q(n,o),n.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,n){$(l,e,n),w(e,t)},p:U,d(l){l&&v(e)}}}function ze(r){let e,o=r[1](r[6])+"",t;return{c(){e=C("td"),t=X(o),this.h()},l(l){e=E(l,"TD",{class:!0});var n=S(e);t=q(n,o),n.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,n){$(l,e,n),w(e,t)},p:U,d(l){l&&v(e)}}}function Ue(r){let e,o,t=r[3].name+"",l,n,c,g,_,y,I,x,h,a=r[3].examples&&vt(r),T=W(r[3].chords),d=[];for(let f=0;f<T.length;f+=1)d[f]=Ve(Ke(r,T,f));let b=W(r[3].chords),p=[];for(let f=0;f<b.length;f+=1)p[f]=ze(Ge(r,b,f));return{c(){e=C("div"),o=C("h4"),l=X(t),n=M(),a&&a.c(),c=M(),g=C("table"),_=C("tr");for(let f=0;f<d.length;f+=1)d[f].c();y=M(),I=C("tr");for(let f=0;f<p.length;f+=1)p[f].c();x=M(),h=C("br")},l(f){e=E(f,"DIV",{});var u=S(e);o=E(u,"H4",{});var s=S(o);l=q(s,t),s.forEach(v),n=B(u),a&&a.l(u),c=B(u),g=E(u,"TABLE",{});var m=S(g);_=E(m,"TR",{});var le=S(_);for(let K=0;K<d.length;K+=1)d[K].l(le);le.forEach(v),y=B(m),I=E(m,"TR",{});var Y=S(I);for(let K=0;K<p.length;K+=1)p[K].l(Y);Y.forEach(v),m.forEach(v),u.forEach(v),x=B(f),h=E(f,"BR",{})},m(f,u){$(f,e,u),w(e,o),w(o,l),w(e,n),a&&a.m(e,null),w(e,c),w(e,g),w(g,_);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(_,null);w(g,y),w(g,I);for(let s=0;s<p.length;s+=1)p[s]&&p[s].m(I,null);$(f,x,u),$(f,h,u)},p(f,u){if(u&1){T=W(f[3].chords);let s;for(s=0;s<T.length;s+=1){const m=Ke(f,T,s);d[s]?d[s].p(m,u):(d[s]=Ve(m),d[s].c(),d[s].m(_,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=T.length}if(u&2){b=W(f[3].chords);let s;for(s=0;s<b.length;s+=1){const m=Ge(f,b,s);p[s]?p[s].p(m,u):(p[s]=ze(m),p[s].c(),p[s].m(I,null))}for(;s<p.length;s+=1)p[s].d(1);p.length=b.length}},d(f){f&&(v(e),v(x),v(h)),a&&a.d(),Q(d,f),Q(p,f)}}}function bt(r){let e,o="Progressions",t,l,n=W(We),c=[];for(let g=0;g<n.length;g+=1)c[g]=Ue(Fe(r,n,g));return{c(){e=C("h3"),e.textContent=o,t=M();for(let g=0;g<c.length;g+=1)c[g].c();l=ee()},l(g){e=E(g,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-xukbl8"&&(e.textContent=o),t=B(g);for(let _=0;_<c.length;_+=1)c[_].l(g);l=ee()},m(g,_){$(g,e,_),$(g,t,_);for(let y=0;y<c.length;y+=1)c[y]&&c[y].m(g,_);$(g,l,_)},p(g,[_]){if(_&3){n=W(We);let y;for(y=0;y<n.length;y+=1){const I=Fe(g,n,y);c[y]?c[y].p(I,_):(c[y]=Ue(I),c[y].c(),c[y].m(l.parentNode,l))}for(;y<c.length;y+=1)c[y].d(1);c.length=n.length}},i:U,o:U,d(g){g&&(v(e),v(t),v(l)),Q(c,g)}}}function kt(r,e,o){let{scaleNotes:t=[]}=e;const l=c=>{let g=Ce(c.degree);return c.minor&&(g=g.toLowerCase()),c.flat&&(g="b"+g),g},n=c=>{const g=t[c.degree-1];let _=z.indexOf(g);c.flat&&(_--,_===-1&&(_=z.length-1));let y=z[_];return c.minor&&(y+="m"),y};return r.$$set=c=>{"scaleNotes"in c&&o(2,t=c.scaleNotes)},[l,n,t]}class pt extends _e{constructor(e){super(),ve(this,e,kt,bt,fe,{scaleNotes:2})}}function Ye(r,e,o){const t=r.slice();t[12]=e[o],t[15]=o;const l=t[1].chords[t[15]];return t[13]=l,t}function Je(r,e,o){const t=r.slice();return t[16]=e[o],t[15]=o,t}function Xe(r,e,o){const t=r.slice();return t[2]=e[o],t}function qe(r,e,o){const t=r.slice();return t[1]=e[o],t}function Tt(r,e,o){const t=r.slice();return t[12]=e[o],t}function yt(r){let e,o,t;return{c(){e=C("option"),o=X(r[12]),t=M(),this.h()},l(l){e=E(l,"OPTION",{});var n=S(e);o=q(n,r[12]),t=B(n),n.forEach(v),this.h()},h(){e.__value=r[12],Ie(e,e.__value)},m(l,n){$(l,e,n),w(e,o),w(e,t)},p:U,d(l){l&&v(e)}}}function Ze(r){let e,o=r[1].name+"",t,l;return{c(){e=C("option"),t=X(o),l=M(),this.h()},l(n){e=E(n,"OPTION",{});var c=S(e);t=q(c,o),l=B(c),c.forEach(v),this.h()},h(){e.__value=r[1],Ie(e,e.__value)},m(n,c){$(n,e,c),w(e,t),w(e,l)},p:U,d(n){n&&v(e)}}}function Qe(r){let e,o=r[2].name+"",t,l;return{c(){e=C("option"),t=X(o),l=M(),this.h()},l(n){e=E(n,"OPTION",{});var c=S(e);t=q(c,o),l=B(c),c.forEach(v),this.h()},h(){e.__value=r[2],Ie(e,e.__value)},m(n,c){$(n,e,c),w(e,t),w(e,l)},p:U,d(n){n&&v(e)}}}function et(r){let e,o=r[6](r[15]+1,r[16])+"",t;return{c(){e=C("th"),t=X(o),this.h()},l(l){e=E(l,"TH",{class:!0});var n=S(e);t=q(n,o),n.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,n){$(l,e,n),w(e,t)},p(l,n){n&2&&o!==(o=l[6](l[15]+1,l[16])+"")&&st(t,o)},d(l){l&&v(e)}}}function tt(r){let e,o=r[7](r[12],r[13])+"",t;return{c(){e=C("td"),t=X(o),this.h()},l(l){e=E(l,"TD",{class:!0});var n=S(e);t=q(n,o),n.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,n){$(l,e,n),w(e,t)},p(l,n){n&10&&o!==(o=l[7](l[12],l[13])+"")&&st(t,o)},d(l){l&&v(e)}}}function lt(r){let e=r[3],o,t,l=nt(r);return{c(){l.c(),o=ee()},l(n){l.l(n),o=ee()},m(n,c){l.m(n,c),$(n,o,c),t=!0},p(n,c){c&8&&fe(e,e=n[3])?(ye(),G(l,1,1,U),we(),l=nt(n),l.c(),P(l,1),l.m(o.parentNode,o)):l.p(n,c)},i(n){t||(P(l),t=!0)},o(n){G(l),t=!1},d(n){n&&v(o),l.d(n)}}}function nt(r){let e,o;return e=new pt({props:{scaleNotes:r[3]}}),{c(){he(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){ue(e,t,l),o=!0},p(t,l){const n={};l&8&&(n.scaleNotes=t[3]),e.$set(n)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),o=!1},d(t){ge(e,t)}}}function wt(r){let e,o="Scales",t,l,n,c='<th class="svelte-gg3pfu"><label for="tonicInput">Tonic</label></th> <th class="svelte-gg3pfu"><label for="scaleInput">Scale</label></th> <th class="svelte-gg3pfu"><label for="modeInput">mode</label></th>',g,_,y,I,x,h,a,T,d,b,p,f,u,s,m,le,Y,K,Z,be,Ee=["Major","Natural minor"].includes(r[1].name),ne,ke,De,Se,Me=W(z),J=[];for(let i=0;i<Me.length;i+=1)J[i]=yt(Tt(r,Me,i));let oe=W(r[4]),A=[];for(let i=0;i<oe.length;i+=1)A[i]=Ze(qe(r,oe,i));let re=W(r[5]),O=[];for(let i=0;i<re.length;i+=1)O[i]=Qe(Xe(r,re,i));let se=W(r[1].chords),H=[];for(let i=0;i<se.length;i+=1)H[i]=et(Je(r,se,i));let ie=W(r[3]),R=[];for(let i=0;i<ie.length;i+=1)R[i]=tt(Ye(r,ie,i));Z=new _t({props:{notesToDisplay:r[3]}});let L=Ee&&lt(r);return{c(){e=C("h2"),e.textContent=o,t=M(),l=C("table"),n=C("tr"),n.innerHTML=c,g=M(),_=C("tr"),y=C("td"),I=C("select");for(let i=0;i<J.length;i+=1)J[i].c();x=M(),h=C("td"),a=C("select");for(let i=0;i<A.length;i+=1)A[i].c();T=M(),d=C("td"),b=C("select");for(let i=0;i<O.length;i+=1)O[i].c();p=M(),f=C("br"),u=M(),s=C("table"),m=C("tr");for(let i=0;i<H.length;i+=1)H[i].c();le=M(),Y=C("tr");for(let i=0;i<R.length;i+=1)R[i].c();K=M(),he(Z.$$.fragment),be=M(),L&&L.c(),ne=ee(),this.h()},l(i){e=E(i,"H2",{"data-svelte-h":!0}),te(e)!=="svelte-b2sc71"&&(e.textContent=o),t=B(i),l=E(i,"TABLE",{});var N=S(l);n=E(N,"TR",{"data-svelte-h":!0}),te(n)!=="svelte-1edz06s"&&(n.innerHTML=c),g=B(N),_=E(N,"TR",{});var D=S(_);y=E(D,"TD",{class:!0});var k=S(y);I=E(k,"SELECT",{id:!0});var F=S(I);for(let j=0;j<J.length;j+=1)J[j].l(F);F.forEach(v),k.forEach(v),x=B(D),h=E(D,"TD",{class:!0});var Be=S(h);a=E(Be,"SELECT",{id:!0});var xe=S(a);for(let j=0;j<A.length;j+=1)A[j].l(xe);xe.forEach(v),Be.forEach(v),T=B(D),d=E(D,"TD",{class:!0});var Le=S(d);b=E(Le,"SELECT",{id:!0});var je=S(b);for(let j=0;j<O.length;j+=1)O[j].l(je);je.forEach(v),Le.forEach(v),D.forEach(v),N.forEach(v),p=B(i),f=E(i,"BR",{}),u=B(i),s=E(i,"TABLE",{});var pe=S(s);m=E(pe,"TR",{});var Ae=S(m);for(let j=0;j<H.length;j+=1)H[j].l(Ae);Ae.forEach(v),le=B(pe),Y=E(pe,"TR",{});var Oe=S(Y);for(let j=0;j<R.length;j+=1)R[j].l(Oe);Oe.forEach(v),pe.forEach(v),K=B(i),de(Z.$$.fragment,i),be=B(i),L&&L.l(i),ne=ee(),this.h()},h(){V(I,"id","tonicInput"),r[0]===void 0&&Ne(()=>r[8].call(I)),V(y,"class","svelte-gg3pfu"),V(a,"id","scaleInput"),r[1]===void 0&&Ne(()=>r[9].call(a)),V(h,"class","svelte-gg3pfu"),V(b,"id","modeInput"),r[2]===void 0&&Ne(()=>r[10].call(b)),V(d,"class","svelte-gg3pfu")},m(i,N){$(i,e,N),$(i,t,N),$(i,l,N),w(l,n),w(l,g),w(l,_),w(_,y),w(y,I);for(let D=0;D<J.length;D+=1)J[D]&&J[D].m(I,null);ae(I,r[0],!0),w(_,x),w(_,h),w(h,a);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(a,null);ae(a,r[1],!0),w(_,T),w(_,d),w(d,b);for(let D=0;D<O.length;D+=1)O[D]&&O[D].m(b,null);ae(b,r[2],!0),$(i,p,N),$(i,f,N),$(i,u,N),$(i,s,N),w(s,m);for(let D=0;D<H.length;D+=1)H[D]&&H[D].m(m,null);w(s,le),w(s,Y);for(let D=0;D<R.length;D+=1)R[D]&&R[D].m(Y,null);$(i,K,N),ue(Z,i,N),$(i,be,N),L&&L.m(i,N),$(i,ne,N),ke=!0,De||(Se=[me(I,"change",r[8]),me(a,"change",r[9]),me(b,"change",r[10])],De=!0)},p(i,[N]){if(N&1&&ae(I,i[0]),N&16){oe=W(i[4]);let k;for(k=0;k<oe.length;k+=1){const F=qe(i,oe,k);A[k]?A[k].p(F,N):(A[k]=Ze(F),A[k].c(),A[k].m(a,null))}for(;k<A.length;k+=1)A[k].d(1);A.length=oe.length}if(N&18&&ae(a,i[1]),N&32){re=W(i[5]);let k;for(k=0;k<re.length;k+=1){const F=Xe(i,re,k);O[k]?O[k].p(F,N):(O[k]=Qe(F),O[k].c(),O[k].m(b,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=re.length}if(N&36&&ae(b,i[2]),N&66){se=W(i[1].chords);let k;for(k=0;k<se.length;k+=1){const F=Je(i,se,k);H[k]?H[k].p(F,N):(H[k]=et(F),H[k].c(),H[k].m(m,null))}for(;k<H.length;k+=1)H[k].d(1);H.length=se.length}if(N&138){ie=W(i[3]);let k;for(k=0;k<ie.length;k+=1){const F=Ye(i,ie,k);R[k]?R[k].p(F,N):(R[k]=tt(F),R[k].c(),R[k].m(Y,null))}for(;k<R.length;k+=1)R[k].d(1);R.length=ie.length}const D={};N&8&&(D.notesToDisplay=i[3]),Z.$set(D),N&2&&(Ee=["Major","Natural minor"].includes(i[1].name)),Ee?L?(L.p(i,N),N&2&&P(L,1)):(L=lt(i),L.c(),P(L,1),L.m(ne.parentNode,ne)):L&&(ye(),G(L,1,1,()=>{L=null}),we())},i(i){ke||(P(Z.$$.fragment,i),P(L),ke=!0)},o(i){G(Z.$$.fragment,i),G(L),ke=!1},d(i){i&&(v(e),v(t),v(l),v(p),v(f),v(u),v(s),v(K),v(be),v(ne)),Q(J,i),Q(A,i),Q(O,i),Q(H,i),Q(R,i),ge(Z,i),L&&L.d(i),De=!1,rt(Se)}}}function Ct(r,e,o){const t=[{name:"Major",intervals:[2,2,1,2,2,2,1],chords:["major","minor","minor","diminished","major","minor","major"]},{name:"Natural minor",intervals:[2,1,2,2,1,2,2],chords:["minor","diminished","major","minor","major","major","minor"]},{name:"Pentatonic major",intervals:[2,2,3,2,3],chords:["major","minor","minor","major","minor"]},{name:"Pentatonic minor",intervals:[3,2,2,3,2],chords:["minor","major","minor","major","major"]}],l=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let n="C",c=t[0],g=l[0],_=[];const y=(d,b,p)=>{const{intervals:f}=b;o(3,_=[d]);const u=z.indexOf(d);if(u===-1)throw new Error(`Tonic ${d} not found`);let s=u;for(const m of f)s=(s+m)%z.length,_.push(z[s]);_.pop();for(let m=1;m<p.degree;m++)_.push(_.shift())},I=(d,b)=>{let p=Ce(d);return b==="minor"?p=p.toLowerCase():b==="diminished"&&(p+="°"),p},x=(d,b)=>{let p=d;return b==="minor"?p+="m":b==="diminished"&&(p+="°"),p};function h(){n=$e(this),o(0,n)}function a(){c=$e(this),o(1,c),o(4,t)}function T(){g=$e(this),o(2,g),o(5,l)}return r.$$.update=()=>{r.$$.dirty&7&&y(n,c,g)},[n,c,g,_,t,l,I,x,h,a,T]}class It extends _e{constructor(e){super(),ve(this,e,Ct,wt,fe,{})}}export{It as component};
