import{s as Q,f as h,a as N,l as ct,g as d,h as x,N as $,c as P,m as ht,d as b,j as v,k as q,G as Z,i as F,H as i,w as D,n as wt,r as R,A as vt,V as lt,W as ut,o as xt,I as Bt,e as gt}from"../chunks/scheduler.c1HY8KFf.js";import{S as G,i as Y,b as X,d as tt,m as et,a as nt,t as st,e as it}from"../chunks/index.HRhZFR8d.js";import{a as Tt,o as Ct}from"../chunks/store.xfbYrcjM.js";import{P as It}from"../chunks/P5.w2Pv077y.js";import{T as kt}from"../chunks/TapTempo.Oc7is1s8.js";class yt{audioContext;notesInQueue=[];currentBeatInBar;beatsPerBar;currentSubdivision;subdivisionsInBeat;tempo;lookahead;scheduleAheadTime;nextNoteTime;isRunning;intervalID;onBeatStart;onBeatEnd;constructor(t=80){this.audioContext=null,this.notesInQueue=[],this.currentBeatInBar=0,this.currentSubdivision=0,this.subdivisionsInBeat=1,this.beatsPerBar=4,this.tempo=t,this.lookahead=25,this.scheduleAheadTime=.1,this.nextNoteTime=0,this.isRunning=!1,this.intervalID=null}nextNote(){var t=60/this.subdivisionsInBeat/this.tempo;this.nextNoteTime+=t,this.currentSubdivision++,this.currentSubdivision>=this.subdivisionsInBeat&&(this.currentBeatInBar++,this.currentSubdivision=0),this.currentBeatInBar>=this.beatsPerBar&&(this.currentBeatInBar=0)}scheduleNote(t,n,e){if(!this.audioContext)return;this.notesInQueue.push({note:t,time:e});const s=this.audioContext.createOscillator(),a=this.audioContext.createGain(),r=1e3,u=400,f=200;n!==0?s.frequency.value=f:t%this.beatsPerBar===0?s.frequency.value=r:s.frequency.value=u,a.gain.value=1,a.gain.exponentialRampToValueAtTime(1,e+.001),a.gain.exponentialRampToValueAtTime(.001,e+.02),s.connect(a),a.connect(this.audioContext.destination);const c=this.audioContext.createConstantSource();c.onended=()=>{this.onBeatStart&&this.onBeatStart(t,n),s.start(),s.stop(e+.03),s.onended=()=>{this.onBeatEnd&&this.onBeatEnd()}},c.start(e),c.stop(this.audioContext.currentTime+1e-4)}scheduler(){if(this.audioContext)for(;this.nextNoteTime<this.audioContext.currentTime+this.scheduleAheadTime;)this.scheduleNote(this.currentBeatInBar,this.currentSubdivision,this.nextNoteTime),this.nextNote()}start(){this.isRunning||(this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.isRunning=!0,this.currentBeatInBar=0,this.currentSubdivision=0,this.nextNoteTime=this.audioContext.currentTime+.05,this.intervalID=setInterval(()=>this.scheduler(),this.lookahead))}stop(){this.isRunning=!1,this.intervalID&&clearInterval(this.intervalID)}startStop(){this.isRunning?this.stop():this.start()}}function Mt(o){let t,n,e,s="<h4>Beats in bar</h4>",a,r,u,f="-1",c,m,_=o[0].beatsPerBar+"",M,l,g,T="+1",V,E,B,C,I,L="<h4>Subdivisions in beat</h4>",k,w,p,y='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M 4.3 0 v 9.6 A 2.9 2.9 0 0 0 0 12.1 A 3 3 0 0 0 3 15 c 1.5 0 2.8 -1.3 2.8 -2.9 V 3 V 0 H 4.3 Z"></path></svg>',O,S,j='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M4.3 0v9.6A2.9 2.9 0 0 0 0 12.1 3 3 0 0 0 3 15c1.5 0 2.8-1.3 2.8-2.9V3h7.7v6.6a2.9 2.9 0 0 0-4.3 2.5 2.9 2.9 0 0 0 5.8 0V0H4.3Z"></path></svg>',A,H,ot='<svg width="24" height="21" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: auto; top: -3px;"><path clip-rule="evenodd" d="M4.3 15.6V6H24v12.1a3 3 0 0 1-3 2.9 2.9 2.9 0 0 1-2.8-2.9 2.9 2.9 0 0 1 4.3-2.5V9H15v9.1a2.9 2.9 0 0 1-3 2.9 3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 3-2.8c.5 0 1 0 1.3.3V9H5.8v9.1C5.8 19.7 4.5 21 3 21a3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 4.3-2.5Z"></path><path d="M12.6 2.2 13.9.5V0h-3.1v.4h2.5l-1.4 1.7v.4h.4c.9 0 1.3.4 1.3 1s-.4 1-1.2 1c-.7 0-1.3-.3-1.6-.6l-.2.4c.4.4 1 .6 1.8.6 1.1 0 1.7-.6 1.7-1.4 0-.8-.5-1.3-1.5-1.4Z"></path></svg>',dt,W,ft='<svg width="27" height="13" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 27px; height: auto;"><path clip-rule="evenodd" d="M3.5 0v7.9a2 2 0 0 0-1.1-.3C1 7.6 0 8.6 0 9.9c0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1 2.3-2.4V3.4H11V8a2 2 0 0 0-1.1-.3 2.3 2.3 0 1 0 0 4.7c1.3 0 2.4-1 2.4-2.4V3.4h6.1V8a2.4 2.4 0 0 0-1-.3c-1.4 0-2.5 1-2.5 2.3 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4V3.4h6.2V8l-1.2-.3c-1.3 0-2.3 1-2.3 2.3a2.3 2.3 0 1 0 4.7 0V0H3.5Zm7.4 2.7H4.7V1.5H11v1.2Zm7.4 0h-6.1V1.5h6.1v1.2Zm1.3 0h6.2V1.5h-6.2v1.2Z"></path></svg>',mt,pt;return{c(){t=h("div"),n=h("div"),e=h("label"),e.innerHTML=s,a=N(),r=h("div"),u=h("button"),u.textContent=f,c=N(),m=h("span"),M=ct(_),l=N(),g=h("button"),g.textContent=T,V=N(),E=h("br"),B=N(),C=h("div"),I=h("label"),I.innerHTML=L,k=N(),w=h("div"),p=h("button"),p.innerHTML=y,O=N(),S=h("button"),S.innerHTML=j,A=N(),H=h("button"),H.innerHTML=ot,dt=N(),W=h("button"),W.innerHTML=ft,this.h()},l(z){t=d(z,"DIV",{class:!0});var U=x(t);n=d(U,"DIV",{class:!0});var at=x(n);e=d(at,"LABEL",{for:!0,"data-svelte-h":!0}),$(e)!=="svelte-me1f1h"&&(e.innerHTML=s),a=P(at),r=d(at,"DIV",{class:!0});var J=x(r);u=d(J,"BUTTON",{"data-svelte-h":!0}),$(u)!=="svelte-1d4n1zi"&&(u.textContent=f),c=P(J),m=d(J,"SPAN",{style:!0});var bt=x(m);M=ht(bt,_),bt.forEach(b),l=P(J),g=d(J,"BUTTON",{"data-svelte-h":!0}),$(g)!=="svelte-g2gkw2"&&(g.textContent=T),J.forEach(b),at.forEach(b),V=P(U),E=d(U,"BR",{}),B=P(U),C=d(U,"DIV",{class:!0});var rt=x(C);I=d(rt,"LABEL",{for:!0,"data-svelte-h":!0}),$(I)!=="svelte-x5t5k1"&&(I.innerHTML=L),k=P(rt),w=d(rt,"DIV",{class:!0});var K=x(w);p=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(p)!=="svelte-7czod"&&(p.innerHTML=y),O=P(K),S=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(S)!=="svelte-1p2rqi1"&&(S.innerHTML=j),A=P(K),H=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(H)!=="svelte-72e2df"&&(H.innerHTML=ot),dt=P(K),W=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(W)!=="svelte-rjuw0z"&&(W.innerHTML=ft),K.forEach(b),rt.forEach(b),U.forEach(b),this.h()},h(){v(e,"for","beatsInBar"),q(m,"font-size","large"),q(m,"margin-left","1em"),q(m,"margin-right","1em"),v(r,"class","subdivisions-container svelte-14nipte"),v(n,"class","controls-sub-container svelte-14nipte"),v(I,"for","subdivisionsInBeat"),v(p,"class","svelte-14nipte"),Z(p,"selected",o[0].subdivisionsInBeat===1),v(S,"class","svelte-14nipte"),Z(S,"selected",o[0].subdivisionsInBeat===2),v(H,"class","svelte-14nipte"),Z(H,"selected",o[0].subdivisionsInBeat===3),v(W,"class","svelte-14nipte"),Z(W,"selected",o[0].subdivisionsInBeat===4),v(w,"class","subdivisions-container svelte-14nipte"),v(C,"class","controls-sub-container svelte-14nipte"),v(t,"class","controls-container svelte-14nipte")},m(z,U){F(z,t,U),i(t,n),i(n,e),i(n,a),i(n,r),i(r,u),i(r,c),i(r,m),i(m,M),i(r,l),i(r,g),i(t,V),i(t,E),i(t,B),i(t,C),i(C,I),i(C,k),i(C,w),i(w,p),i(w,O),i(w,S),i(w,A),i(w,H),i(w,dt),i(w,W),mt||(pt=[D(u,"click",o[1]),D(g,"click",o[2]),D(p,"click",o[3]),D(S,"click",o[4]),D(H,"click",o[5]),D(W,"click",o[6])],mt=!0)},p(z,[U]){U&1&&_!==(_=z[0].beatsPerBar+"")&&wt(M,_),U&1&&Z(p,"selected",z[0].subdivisionsInBeat===1),U&1&&Z(S,"selected",z[0].subdivisionsInBeat===2),U&1&&Z(H,"selected",z[0].subdivisionsInBeat===3),U&1&&Z(W,"selected",z[0].subdivisionsInBeat===4)},i:R,o:R,d(z){z&&b(t),mt=!1,vt(pt)}}}function Vt(o,t,n){let{metronome:e}=t;const s=()=>n(0,e.beatsPerBar=Math.max(e.beatsPerBar-1,1),e),a=()=>n(0,e.beatsPerBar=Math.min(e.beatsPerBar+1,10),e),r=()=>n(0,e.subdivisionsInBeat=1,e),u=()=>n(0,e.subdivisionsInBeat=2,e),f=()=>n(0,e.subdivisionsInBeat=3,e),c=()=>n(0,e.subdivisionsInBeat=4,e);return o.$$set=m=>{"metronome"in m&&n(0,e=m.metronome)},[e,s,a,r,u,f,c]}class Et extends G{constructor(t){super(),Y(this,t,Vt,Mt,Q,{metronome:0})}}function Nt(o){let t,n,e,s="-5",a,r,u="-1",f,c,m,_,M,l,g,T,V="+1",E,B,C="+5",I,L;return{c(){t=h("div"),n=h("div"),e=h("button"),e.textContent=s,a=N(),r=h("button"),r.textContent=u,f=N(),c=h("div"),m=h("input"),M=ct(" BPM"),l=N(),g=h("div"),T=h("button"),T.textContent=V,E=N(),B=h("button"),B.textContent=C,this.h()},l(k){t=d(k,"DIV",{class:!0});var w=x(t);n=d(w,"DIV",{class:!0});var p=x(n);e=d(p,"BUTTON",{"data-svelte-h":!0}),$(e)!=="svelte-1ayjxgi"&&(e.textContent=s),a=P(p),r=d(p,"BUTTON",{"data-svelte-h":!0}),$(r)!=="svelte-1ri3s3e"&&(r.textContent=u),p.forEach(b),f=P(w),c=d(w,"DIV",{class:!0,style:!0});var y=x(c);m=d(y,"INPUT",{style:!0,type:!0,min:!0,max:!0}),M=ht(y," BPM"),y.forEach(b),l=P(w),g=d(w,"DIV",{class:!0});var O=x(g);T=d(O,"BUTTON",{"data-svelte-h":!0}),$(T)!=="svelte-1tvviti"&&(T.textContent=V),E=P(O),B=d(O,"BUTTON",{"data-svelte-h":!0}),$(B)!=="svelte-1vk0846"&&(B.textContent=C),O.forEach(b),w.forEach(b),this.h()},h(){v(n,"class","tempo-less svelte-oae4co"),q(m,"font-size","x-large"),q(m,"margin-right","0.1em"),v(m,"type","number"),v(m,"min","1"),v(m,"max","400"),m.value=_=o[0].tempo,v(c,"class","tempo-value svelte-oae4co"),q(c,"font-size","x-large"),v(g,"class","tempo-more svelte-oae4co"),v(t,"class","tempo-container svelte-oae4co")},m(k,w){F(k,t,w),i(t,n),i(n,e),i(n,a),i(n,r),i(t,f),i(t,c),i(c,m),i(c,M),i(t,l),i(t,g),i(g,T),i(g,E),i(g,B),I||(L=[D(e,"click",o[2]),D(r,"click",o[3]),D(m,"change",o[1]),D(T,"click",o[4]),D(B,"click",o[5])],I=!0)},p(k,[w]){w&1&&_!==(_=k[0].tempo)&&m.value!==_&&(m.value=_)},i:R,o:R,d(k){k&&b(t),I=!1,vt(L)}}}function Pt(o,t,n){let{metronome:e}=t;const s=c=>{if(!c||!c.target)return;const m=c.target,_=Number(m.value);!_||_<1||n(0,e.tempo=_,e)},a=()=>n(0,e.tempo=Number(e.tempo)-5,e),r=()=>n(0,e.tempo=Number(e.tempo)-1,e),u=()=>n(0,e.tempo=Number(e.tempo)+1,e),f=()=>n(0,e.tempo=Number(e.tempo)+5,e);return o.$$set=c=>{"metronome"in c&&n(0,e=c.metronome)},[e,s,a,r,u,f]}class $t extends G{constructor(t){super(),Y(this,t,Pt,Nt,Q,{metronome:0})}}function St(o){let t,n;return{c(){t=lt("svg"),n=lt("path"),this.h()},l(e){t=ut(e,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=x(t);n=ut(s,"path",{d:!0}),x(n).forEach(b),s.forEach(b),this.h()},h(){v(n,"d","M 0 0 V 20 L 17 10"),v(t,"width","20"),v(t,"height","20"),v(t,"fill","blue"),v(t,"xmlns","http://www.w3.org/2000/svg"),q(t,"width","20px"),q(t,"height","auto")},m(e,s){F(e,t,s),i(t,n)},d(e){e&&b(t)}}}function Ht(o){let t,n;return{c(){t=lt("svg"),n=lt("path"),this.h()},l(e){t=ut(e,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=x(t);n=ut(s,"path",{d:!0}),x(n).forEach(b),s.forEach(b),this.h()},h(){v(n,"d","M 0 0 V 20 L 6 20 L 6 0 L 0 0 M 9 0 V 20 H 15 V 0 H 9"),v(t,"width","20"),v(t,"height","20"),v(t,"fill","blue"),v(t,"xmlns","http://www.w3.org/2000/svg"),q(t,"width","20px"),q(t,"height","auto")},m(e,s){F(e,t,s),i(t,n)},d(e){e&&b(t)}}}function Dt(o){let t,n,e,s;function a(f,c){return f[0].isRunning?Ht:St}let r=a(o),u=r(o);return{c(){t=h("div"),n=h("button"),u.c(),this.h()},l(f){t=d(f,"DIV",{class:!0});var c=x(t);n=d(c,"BUTTON",{style:!0});var m=x(n);u.l(m),m.forEach(b),c.forEach(b),this.h()},h(){q(n,"min-width","300px"),v(t,"class","controls-container svelte-1jo8tk4")},m(f,c){F(f,t,c),i(t,n),u.m(n,null),e||(s=[D(window,"keydown",o[2]),D(n,"click",o[1])],e=!0)},p(f,[c]){r!==(r=a(f))&&(u.d(1),u=r(f),u&&(u.c(),u.m(n,null)))},i:R,o:R,d(f){f&&b(t),u.d(),e=!1,vt(s)}}}function Lt(o,t,n){let{metronome:e}=t;const s=()=>{e.startStop(),n(0,e)},a=r=>{const u=" ";if([u].includes(r.key)&&(r.preventDefault(),r.key===u)){s();return}};return o.$$set=r=>{"metronome"in r&&n(0,e=r.metronome)},[e,s,a]}class Ot extends G{constructor(t){super(),Y(this,t,Lt,Dt,Q,{metronome:0})}}function Ut(o){let t,n,e;return n=new It({props:{sketch:o[0]}}),{c(){t=h("div"),X(n.$$.fragment),this.h()},l(s){t=d(s,"DIV",{id:!0,class:!0});var a=x(t);tt(n.$$.fragment,a),a.forEach(b),this.h()},h(){v(t,"id","canvas-container"),v(t,"class","d-flex justify-content-center")},m(s,a){F(s,t,a),et(n,t,null),e=!0},p:R,i(s){e||(nt(n.$$.fragment,s),e=!0)},o(s){st(n.$$.fragment,s),e=!1},d(s){s&&b(t),it(n)}}}function qt(o,t,n){let{metronome:e}=t,s=!1,a=0,r=0;const u=(l,g)=>{s=!0,a=l,r=g},f=()=>{s=!1};let c,m="white",_="white";const M=l=>{l.setup=()=>{c=l,l.createCanvas(600,300),l.textSize(40)},l.draw=()=>{const g=document.getElementById("canvas-container");if(g){const B=g?.clientWidth||600;l.width!==B&&l.resizeCanvas(B,Math.max(B/3,100))}l.clear(),l.stroke(m);const T=Math.min(l.width/e.beatsPerBar,l.height),V=l.height/e.subdivisionsInBeat;for(let B=0;B<e.beatsPerBar;B++){B===a?l.strokeWeight(5):l.strokeWeight(1),l.noFill(),l.circle(B*T+T/2,l.height/2,T*.9),l.strokeWeight(1);for(let C=0;C<e.subdivisionsInBeat;C++)s&&B===a&&C===r?l.fill(m):l.noFill(),l.circle(B*T+T/2,C*V+V/2,T/e.subdivisionsInBeat*.9)}s?l.fill(_):l.fill(m),l.fill(m);const E=(a+1).toString();l.text(E,a*T+T/2-l.textWidth(E)/2,l.height/2+l.textSize()/2)}};return xt(()=>{const l=getComputedStyle(document.body);m=l.getPropertyValue("--nc-tx-3"),_=l.getPropertyValue("--nc-tx-2"),n(1,e.onBeatStart=u,e),n(1,e.onBeatEnd=f,e)}),Bt(()=>{c?.remove()}),o.$$set=l=>{"metronome"in l&&n(1,e=l.metronome)},[M,e]}class At extends G{constructor(t){super(),Y(this,t,qt,Ut,Q,{metronome:1})}}function zt(o){let t,n,e="Tap",s,a;return{c(){t=h("div"),n=h("button"),n.textContent=e,this.h()},l(r){t=d(r,"DIV",{class:!0});var u=x(t);n=d(u,"BUTTON",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-1ln40k6"&&(n.textContent=e),u.forEach(b),this.h()},h(){v(n,"class","svelte-1gwle9f"),Z(n,"taped",o[0]),v(t,"class","controls-container svelte-1gwle9f")},m(r,u){F(r,t,u),i(t,n),s||(a=D(n,"click",o[1]),s=!0)},p(r,[u]){u&1&&Z(n,"taped",r[0])},i:R,o:R,d(r){r&&b(t),s=!1,a()}}}function Rt(o,t,n){let{onNewBPM:e}=t,s=new kt,a=!1;const r=()=>{s.addBeat(),n(0,a=!0),setTimeout(()=>n(0,a=!1),100),s.bpm>0&&e(Math.ceil(s.bpm))};return o.$$set=u=>{"onNewBPM"in u&&n(2,e=u.onNewBPM)},[a,r,e]}class Wt extends G{constructor(t){super(),Y(this,t,Rt,zt,Q,{onNewBPM:2})}}function _t(o){let t,n,e,s,a,r="Close",u,f,c=`This is a simple metronome:
                <ul><li>Use the play/pause button or the space bar to start and stop the metronome</li> <li>You can change the tempo by:</li> <ul><li>Entering a number directly in the input</li> <li>Using the -5, -1, +1 and +5 buttons</li> <li>Taping a tempo on the tap button. When taping the tempo each tap counts
                            for a subdivision if subdivisions are enabled. Stop taping for approx. 3
                            seconds to restart the tap counter.</li></ul> <li>The &quot;Beats in bar&quot; setting change the number of beats counted by the
                        metronome. The first beat is accented with a higher frequency tone.</li> <li>The &quot;Subdivisions in beat&quot; setting allow to change how the beats are
                        divided. The subdivisions after the first one are played with a lower
                        frequency tone.</li> <li>The visualization at the bottom follow the beats and their subdivisions.</li></ul>`,m,_,M,l,g="Bugs",T,V,E=`<li>While it goes against my opinion on what the web should look like, this page
                    works better with Chrome-based browsers.</li> <li>For some reason the display of the tempo settings is broken on Firefox, the
                    input doesn&#39;t resize properly.</li> <li>The sound doesn&#39;t work on Safari on iOS (and maybe on MacOS too).</li>`,B,C;return{c(){t=h("div"),n=h("div"),e=h("h4"),s=ct(`Metronome
                `),a=h("button"),a.textContent=r,u=N(),f=h("div"),f.innerHTML=c,m=N(),_=h("br"),M=N(),l=h("h5"),l.textContent=g,T=N(),V=h("ul"),V.innerHTML=E,this.h()},l(I){t=d(I,"DIV",{role:!0,class:!0});var L=x(t);n=d(L,"DIV",{class:!0});var k=x(n);e=d(k,"H4",{class:!0});var w=x(e);s=ht(w,`Metronome
                `),a=d(w,"BUTTON",{"data-svelte-h":!0}),$(a)!=="svelte-2m9p61"&&(a.textContent=r),w.forEach(b),u=P(k),f=d(k,"DIV",{"data-svelte-h":!0}),$(f)!=="svelte-1k2t2wt"&&(f.innerHTML=c),m=P(k),_=d(k,"BR",{}),M=P(k),l=d(k,"H5",{"data-svelte-h":!0}),$(l)!=="svelte-1fvxfob"&&(l.textContent=g),T=P(k),V=d(k,"UL",{"data-svelte-h":!0}),$(V)!=="svelte-19aw4nc"&&(V.innerHTML=E),k.forEach(b),L.forEach(b),this.h()},h(){v(e,"class","title-bar svelte-mmovoq"),v(n,"class","contents svelte-mmovoq"),v(t,"role","dialog"),v(t,"class","modal svelte-mmovoq")},m(I,L){F(I,t,L),i(t,n),i(n,e),i(e,s),i(e,a),i(n,u),i(n,f),i(n,m),i(n,_),i(n,M),i(n,l),i(n,T),i(n,V),B||(C=D(a,"click",Tt),B=!0)},d(I){I&&b(t),B=!1,C()}}}function Zt(o){let t,n=o[0]&&_t();return{c(){n&&n.c(),t=gt()},l(e){n&&n.l(e),t=gt()},m(e,s){n&&n.m(e,s),F(e,t,s)},p(e,[s]){e[0]?n||(n=_t(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:R,o:R,d(e){e&&b(t),n&&n.d(e)}}}function Ft(o,t,n){let{isOpen:e}=t;return o.$$set=s=>{"isOpen"in s&&n(0,e=s.isOpen)},[e]}class jt extends G{constructor(t){super(),Y(this,t,Ft,Zt,Q,{isOpen:0})}}function Kt(o){let t,n,e,s,a,r='<i class="fa fa-info-circle" aria-hidden="true"></i>',u,f,c,m,_,M,l,g,T,V,E,B,C,I,L,k,w;return c=new Ot({props:{metronome:o[0]}}),M=new $t({props:{metronome:o[0]}}),g=new Wt({props:{onNewBPM:o[2]}}),E=new Et({props:{metronome:o[0]}}),I=new At({props:{metronome:o[0]}}),{c(){t=h("div"),n=h("h3"),e=ct(`Metronome
        `),s=h("span"),a=h("button"),a.innerHTML=r,u=N(),f=h("div"),X(c.$$.fragment),m=N(),_=h("div"),X(M.$$.fragment),l=N(),X(g.$$.fragment),T=N(),V=h("div"),X(E.$$.fragment),B=N(),C=h("div"),X(I.$$.fragment),this.h()},l(p){t=d(p,"DIV",{class:!0});var y=x(t);n=d(y,"H3",{});var O=x(n);e=ht(O,`Metronome
        `),s=d(O,"SPAN",{});var S=x(s);a=d(S,"BUTTON",{"data-svelte-h":!0}),$(a)!=="svelte-13whskn"&&(a.innerHTML=r),S.forEach(b),O.forEach(b),u=P(y),f=d(y,"DIV",{});var j=x(f);tt(c.$$.fragment,j),j.forEach(b),m=P(y),_=d(y,"DIV",{class:!0});var A=x(_);tt(M.$$.fragment,A),l=P(A),tt(g.$$.fragment,A),A.forEach(b),T=P(y),V=d(y,"DIV",{class:!0});var H=x(V);tt(E.$$.fragment,H),H.forEach(b),B=P(y),C=d(y,"DIV",{class:!0});var ot=x(C);tt(I.$$.fragment,ot),ot.forEach(b),y.forEach(b),this.h()},h(){q(a,"position","relative"),v(_,"class","section svelte-1kxlsex"),v(V,"class","section svelte-1kxlsex"),v(C,"class","section svelte-1kxlsex"),v(t,"class","main svelte-1kxlsex")},m(p,y){F(p,t,y),i(t,n),i(n,e),i(n,s),i(s,a),i(t,u),i(t,f),et(c,f,null),i(t,m),i(t,_),et(M,_,null),i(_,l),et(g,_,null),i(t,T),i(t,V),et(E,V,null),i(t,B),i(t,C),et(I,C,null),L=!0,k||(w=D(a,"click",o[1]),k=!0)},p(p,[y]){const O={};y&1&&(O.metronome=p[0]),c.$set(O);const S={};y&1&&(S.metronome=p[0]),M.$set(S);const j={};y&1&&(j.onNewBPM=p[2]),g.$set(j);const A={};y&1&&(A.metronome=p[0]),E.$set(A);const H={};y&1&&(H.metronome=p[0]),I.$set(H)},i(p){L||(nt(c.$$.fragment,p),nt(M.$$.fragment,p),nt(g.$$.fragment,p),nt(E.$$.fragment,p),nt(I.$$.fragment,p),L=!0)},o(p){st(c.$$.fragment,p),st(M.$$.fragment,p),st(g.$$.fragment,p),st(E.$$.fragment,p),st(I.$$.fragment,p),L=!1},d(p){p&&b(t),it(c),it(M),it(g),it(E),it(I),k=!1,w()}}}function Qt(o,t,n){let e=new yt(80);return Bt(()=>{e.stop()}),[e,()=>Ct(jt),r=>{n(0,e.tempo=r/e.subdivisionsInBeat,e),n(0,e)}]}class ee extends G{constructor(t){super(),Y(this,t,Qt,Kt,Q,{})}}export{ee as component};
