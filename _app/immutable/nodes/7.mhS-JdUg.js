import{s as st,f as h,a as y,l as ht,g as d,h as k,M as P,c as V,m as dt,d as p,j as f,k as q,F,i as z,G as i,w as L,n as wt,r as R,A as ft,U as ut,V as ct,o as xt,H as Bt,e as gt}from"../chunks/scheduler.JOg8NEYR.js";import{S as it,i as ot,b as Y,d as J,m as X,a as tt,t as et,e as nt}from"../chunks/index.LkMwavup.js";import{a as Tt,o as Ct}from"../chunks/store._TEP_kO9.js";import{P as kt}from"../chunks/P5.JM8rPwsR.js";import{T as It}from"../chunks/TapTempo.Oc7is1s8.js";import{M as Mt}from"../chunks/Main.aSKv4q5N.js";class yt{audioContext;notesInQueue=[];currentBeatInBar;beatsPerBar;currentSubdivision;subdivisionsInBeat;tempo;lookahead;scheduleAheadTime;nextNoteTime;isRunning;intervalID;onBeatStart;onBeatEnd;constructor(e=80){this.audioContext=null,this.notesInQueue=[],this.currentBeatInBar=0,this.currentSubdivision=0,this.subdivisionsInBeat=1,this.beatsPerBar=4,this.tempo=e,this.lookahead=25,this.scheduleAheadTime=.1,this.nextNoteTime=0,this.isRunning=!1,this.intervalID=null}nextNote(){var e=60/this.subdivisionsInBeat/this.tempo;this.nextNoteTime+=e,this.currentSubdivision++,this.currentSubdivision>=this.subdivisionsInBeat&&(this.currentBeatInBar++,this.currentSubdivision=0),this.currentBeatInBar>=this.beatsPerBar&&(this.currentBeatInBar=0)}scheduleNote(e,n,t){if(!this.audioContext)return;this.notesInQueue.push({note:e,time:t});const s=this.audioContext.createOscillator(),u=this.audioContext.createGain(),a=1e3,l=400,b=200;n!==0?s.frequency.value=b:e%this.beatsPerBar===0?s.frequency.value=a:s.frequency.value=l,u.gain.value=1,u.gain.exponentialRampToValueAtTime(1,t+.001),u.gain.exponentialRampToValueAtTime(.001,t+.02),s.connect(u),u.connect(this.audioContext.destination);const m=this.audioContext.createConstantSource();m.onended=()=>{this.onBeatStart&&this.onBeatStart(e,n),s.start(),s.stop(t+.03),s.onended=()=>{this.onBeatEnd&&this.onBeatEnd()}},m.start(t),m.stop(this.audioContext.currentTime+1e-4)}scheduler(){if(this.audioContext)for(;this.nextNoteTime<this.audioContext.currentTime+this.scheduleAheadTime;)this.scheduleNote(this.currentBeatInBar,this.currentSubdivision,this.nextNoteTime),this.nextNote()}start(){this.isRunning||(this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.isRunning=!0,this.currentBeatInBar=0,this.currentSubdivision=0,this.nextNoteTime=this.audioContext.currentTime+.05,this.intervalID=setInterval(()=>this.scheduler(),this.lookahead))}stop(){this.isRunning=!1,this.intervalID&&clearInterval(this.intervalID)}startStop(){this.isRunning?this.stop():this.start()}}function Vt(o){let e,n,t,s="<h4>Beats in bar</h4>",u,a,l,b="-1",m,c,w=o[0].beatsPerBar+"",N,r,g,I="+1",M,S,_,C,$,H="<h4>Subdivisions in beat</h4>",x,B,E,Z='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M 4.3 0 v 9.6 A 2.9 2.9 0 0 0 0 12.1 A 3 3 0 0 0 3 15 c 1.5 0 2.8 -1.3 2.8 -2.9 V 3 V 0 H 4.3 Z"></path></svg>',v,T,j='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M4.3 0v9.6A2.9 2.9 0 0 0 0 12.1 3 3 0 0 0 3 15c1.5 0 2.8-1.3 2.8-2.9V3h7.7v6.6a2.9 2.9 0 0 0-4.3 2.5 2.9 2.9 0 0 0 5.8 0V0H4.3Z"></path></svg>',K,D,W='<svg width="24" height="21" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: auto; top: -3px;"><path clip-rule="evenodd" d="M4.3 15.6V6H24v12.1a3 3 0 0 1-3 2.9 2.9 2.9 0 0 1-2.8-2.9 2.9 2.9 0 0 1 4.3-2.5V9H15v9.1a2.9 2.9 0 0 1-3 2.9 3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 3-2.8c.5 0 1 0 1.3.3V9H5.8v9.1C5.8 19.7 4.5 21 3 21a3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 4.3-2.5Z"></path><path d="M12.6 2.2 13.9.5V0h-3.1v.4h2.5l-1.4 1.7v.4h.4c.9 0 1.3.4 1.3 1s-.4 1-1.2 1c-.7 0-1.3-.3-1.6-.6l-.2.4c.4.4 1 .6 1.8.6 1.1 0 1.7-.6 1.7-1.4 0-.8-.5-1.3-1.5-1.4Z"></path></svg>',Q,U,vt='<svg width="27" height="13" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 27px; height: auto;"><path clip-rule="evenodd" d="M3.5 0v7.9a2 2 0 0 0-1.1-.3C1 7.6 0 8.6 0 9.9c0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1 2.3-2.4V3.4H11V8a2 2 0 0 0-1.1-.3 2.3 2.3 0 1 0 0 4.7c1.3 0 2.4-1 2.4-2.4V3.4h6.1V8a2.4 2.4 0 0 0-1-.3c-1.4 0-2.5 1-2.5 2.3 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4V3.4h6.2V8l-1.2-.3c-1.3 0-2.3 1-2.3 2.3a2.3 2.3 0 1 0 4.7 0V0H3.5Zm7.4 2.7H4.7V1.5H11v1.2Zm7.4 0h-6.1V1.5h6.1v1.2Zm1.3 0h6.2V1.5h-6.2v1.2Z"></path></svg>',mt,pt;return{c(){e=h("div"),n=h("div"),t=h("label"),t.innerHTML=s,u=y(),a=h("div"),l=h("button"),l.textContent=b,m=y(),c=h("span"),N=ht(w),r=y(),g=h("button"),g.textContent=I,M=y(),S=h("br"),_=y(),C=h("div"),$=h("label"),$.innerHTML=H,x=y(),B=h("div"),E=h("button"),E.innerHTML=Z,v=y(),T=h("button"),T.innerHTML=j,K=y(),D=h("button"),D.innerHTML=W,Q=y(),U=h("button"),U.innerHTML=vt,this.h()},l(A){e=d(A,"DIV",{class:!0});var O=k(e);n=d(O,"DIV",{class:!0});var rt=k(n);t=d(rt,"LABEL",{for:!0,"data-svelte-h":!0}),P(t)!=="svelte-me1f1h"&&(t.innerHTML=s),u=V(rt),a=d(rt,"DIV",{class:!0});var at=k(a);l=d(at,"BUTTON",{"data-svelte-h":!0}),P(l)!=="svelte-1d4n1zi"&&(l.textContent=b),m=V(at),c=d(at,"SPAN",{style:!0});var bt=k(c);N=dt(bt,w),bt.forEach(p),r=V(at),g=d(at,"BUTTON",{"data-svelte-h":!0}),P(g)!=="svelte-g2gkw2"&&(g.textContent=I),at.forEach(p),rt.forEach(p),M=V(O),S=d(O,"BR",{}),_=V(O),C=d(O,"DIV",{class:!0});var lt=k(C);$=d(lt,"LABEL",{for:!0,"data-svelte-h":!0}),P($)!=="svelte-x5t5k1"&&($.innerHTML=H),x=V(lt),B=d(lt,"DIV",{class:!0});var G=k(B);E=d(G,"BUTTON",{class:!0,"data-svelte-h":!0}),P(E)!=="svelte-7czod"&&(E.innerHTML=Z),v=V(G),T=d(G,"BUTTON",{class:!0,"data-svelte-h":!0}),P(T)!=="svelte-1p2rqi1"&&(T.innerHTML=j),K=V(G),D=d(G,"BUTTON",{class:!0,"data-svelte-h":!0}),P(D)!=="svelte-72e2df"&&(D.innerHTML=W),Q=V(G),U=d(G,"BUTTON",{class:!0,"data-svelte-h":!0}),P(U)!=="svelte-rjuw0z"&&(U.innerHTML=vt),G.forEach(p),lt.forEach(p),O.forEach(p),this.h()},h(){f(t,"for","beatsInBar"),q(c,"font-size","large"),q(c,"margin-left","1em"),q(c,"margin-right","1em"),f(a,"class","subdivisions-container svelte-14nipte"),f(n,"class","controls-sub-container svelte-14nipte"),f($,"for","subdivisionsInBeat"),f(E,"class","svelte-14nipte"),F(E,"selected",o[0].subdivisionsInBeat===1),f(T,"class","svelte-14nipte"),F(T,"selected",o[0].subdivisionsInBeat===2),f(D,"class","svelte-14nipte"),F(D,"selected",o[0].subdivisionsInBeat===3),f(U,"class","svelte-14nipte"),F(U,"selected",o[0].subdivisionsInBeat===4),f(B,"class","subdivisions-container svelte-14nipte"),f(C,"class","controls-sub-container svelte-14nipte"),f(e,"class","controls-container svelte-14nipte")},m(A,O){z(A,e,O),i(e,n),i(n,t),i(n,u),i(n,a),i(a,l),i(a,m),i(a,c),i(c,N),i(a,r),i(a,g),i(e,M),i(e,S),i(e,_),i(e,C),i(C,$),i(C,x),i(C,B),i(B,E),i(B,v),i(B,T),i(B,K),i(B,D),i(B,Q),i(B,U),mt||(pt=[L(l,"click",o[1]),L(g,"click",o[2]),L(E,"click",o[3]),L(T,"click",o[4]),L(D,"click",o[5]),L(U,"click",o[6])],mt=!0)},p(A,[O]){O&1&&w!==(w=A[0].beatsPerBar+"")&&wt(N,w),O&1&&F(E,"selected",A[0].subdivisionsInBeat===1),O&1&&F(T,"selected",A[0].subdivisionsInBeat===2),O&1&&F(D,"selected",A[0].subdivisionsInBeat===3),O&1&&F(U,"selected",A[0].subdivisionsInBeat===4)},i:R,o:R,d(A){A&&p(e),mt=!1,ft(pt)}}}function $t(o,e,n){let{metronome:t}=e;const s=()=>n(0,t.beatsPerBar=Math.max(t.beatsPerBar-1,1),t),u=()=>n(0,t.beatsPerBar=Math.min(t.beatsPerBar+1,10),t),a=()=>n(0,t.subdivisionsInBeat=1,t),l=()=>n(0,t.subdivisionsInBeat=2,t),b=()=>n(0,t.subdivisionsInBeat=3,t),m=()=>n(0,t.subdivisionsInBeat=4,t);return o.$$set=c=>{"metronome"in c&&n(0,t=c.metronome)},[t,s,u,a,l,b,m]}class Et extends it{constructor(e){super(),ot(this,e,$t,Vt,st,{metronome:0})}}function Nt(o){let e,n,t,s="-5",u,a,l="-1",b,m,c,w,N,r,g,I,M="+1",S,_,C="+5",$,H;return{c(){e=h("div"),n=h("div"),t=h("button"),t.textContent=s,u=y(),a=h("button"),a.textContent=l,b=y(),m=h("div"),c=h("input"),N=ht(" BPM"),r=y(),g=h("div"),I=h("button"),I.textContent=M,S=y(),_=h("button"),_.textContent=C,this.h()},l(x){e=d(x,"DIV",{class:!0});var B=k(e);n=d(B,"DIV",{class:!0});var E=k(n);t=d(E,"BUTTON",{"data-svelte-h":!0}),P(t)!=="svelte-1ayjxgi"&&(t.textContent=s),u=V(E),a=d(E,"BUTTON",{"data-svelte-h":!0}),P(a)!=="svelte-1ri3s3e"&&(a.textContent=l),E.forEach(p),b=V(B),m=d(B,"DIV",{class:!0,style:!0});var Z=k(m);c=d(Z,"INPUT",{style:!0,type:!0,min:!0,max:!0}),N=dt(Z," BPM"),Z.forEach(p),r=V(B),g=d(B,"DIV",{class:!0});var v=k(g);I=d(v,"BUTTON",{"data-svelte-h":!0}),P(I)!=="svelte-1tvviti"&&(I.textContent=M),S=V(v),_=d(v,"BUTTON",{"data-svelte-h":!0}),P(_)!=="svelte-1vk0846"&&(_.textContent=C),v.forEach(p),B.forEach(p),this.h()},h(){f(n,"class","tempo-less svelte-oae4co"),q(c,"font-size","x-large"),q(c,"margin-right","0.1em"),f(c,"type","number"),f(c,"min","1"),f(c,"max","400"),c.value=w=o[0].tempo,f(m,"class","tempo-value svelte-oae4co"),q(m,"font-size","x-large"),f(g,"class","tempo-more svelte-oae4co"),f(e,"class","tempo-container svelte-oae4co")},m(x,B){z(x,e,B),i(e,n),i(n,t),i(n,u),i(n,a),i(e,b),i(e,m),i(m,c),i(m,N),i(e,r),i(e,g),i(g,I),i(g,S),i(g,_),$||(H=[L(t,"click",o[2]),L(a,"click",o[3]),L(c,"change",o[1]),L(I,"click",o[4]),L(_,"click",o[5])],$=!0)},p(x,[B]){B&1&&w!==(w=x[0].tempo)&&c.value!==w&&(c.value=w)},i:R,o:R,d(x){x&&p(e),$=!1,ft(H)}}}function Pt(o,e,n){let{metronome:t}=e;const s=m=>{if(!m||!m.target)return;const c=m.target,w=Number(c.value);!w||w<1||n(0,t.tempo=w,t)},u=()=>n(0,t.tempo=Number(t.tempo)-5,t),a=()=>n(0,t.tempo=Number(t.tempo)-1,t),l=()=>n(0,t.tempo=Number(t.tempo)+1,t),b=()=>n(0,t.tempo=Number(t.tempo)+5,t);return o.$$set=m=>{"metronome"in m&&n(0,t=m.metronome)},[t,s,u,a,l,b]}class St extends it{constructor(e){super(),ot(this,e,Pt,Nt,st,{metronome:0})}}function Ht(o){let e,n;return{c(){e=ut("svg"),n=ut("path"),this.h()},l(t){e=ct(t,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=k(e);n=ct(s,"path",{d:!0}),k(n).forEach(p),s.forEach(p),this.h()},h(){f(n,"d","M 0 0 V 20 L 17 10"),f(e,"width","20"),f(e,"height","20"),f(e,"fill","blue"),f(e,"xmlns","http://www.w3.org/2000/svg"),q(e,"width","20px"),q(e,"height","auto")},m(t,s){z(t,e,s),i(e,n)},d(t){t&&p(e)}}}function Dt(o){let e,n;return{c(){e=ut("svg"),n=ut("path"),this.h()},l(t){e=ct(t,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=k(e);n=ct(s,"path",{d:!0}),k(n).forEach(p),s.forEach(p),this.h()},h(){f(n,"d","M 0 0 V 20 L 6 20 L 6 0 L 0 0 M 9 0 V 20 H 15 V 0 H 9"),f(e,"width","20"),f(e,"height","20"),f(e,"fill","blue"),f(e,"xmlns","http://www.w3.org/2000/svg"),q(e,"width","20px"),q(e,"height","auto")},m(t,s){z(t,e,s),i(e,n)},d(t){t&&p(e)}}}function Lt(o){let e,n,t,s;function u(b,m){return b[0].isRunning?Dt:Ht}let a=u(o),l=a(o);return{c(){e=h("div"),n=h("button"),l.c(),this.h()},l(b){e=d(b,"DIV",{class:!0});var m=k(e);n=d(m,"BUTTON",{style:!0});var c=k(n);l.l(c),c.forEach(p),m.forEach(p),this.h()},h(){q(n,"min-width","300px"),f(e,"class","controls-container svelte-1jo8tk4")},m(b,m){z(b,e,m),i(e,n),l.m(n,null),t||(s=[L(window,"keydown",o[2]),L(n,"click",o[1])],t=!0)},p(b,[m]){a!==(a=u(b))&&(l.d(1),l=a(b),l&&(l.c(),l.m(n,null)))},i:R,o:R,d(b){b&&p(e),l.d(),t=!1,ft(s)}}}function Ot(o,e,n){let{metronome:t}=e;const s=()=>{t.startStop(),n(0,t)},u=a=>{const l=" ";if([l].includes(a.key)&&(a.preventDefault(),a.key===l)){s();return}};return o.$$set=a=>{"metronome"in a&&n(0,t=a.metronome)},[t,s,u]}class Ut extends it{constructor(e){super(),ot(this,e,Ot,Lt,st,{metronome:0})}}function qt(o){let e,n,t;return n=new kt({props:{sketch:o[0]}}),{c(){e=h("div"),Y(n.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0,class:!0});var u=k(e);J(n.$$.fragment,u),u.forEach(p),this.h()},h(){f(e,"id","canvas-container"),f(e,"class","d-flex justify-content-center")},m(s,u){z(s,e,u),X(n,e,null),t=!0},p:R,i(s){t||(tt(n.$$.fragment,s),t=!0)},o(s){et(n.$$.fragment,s),t=!1},d(s){s&&p(e),nt(n)}}}function At(o,e,n){let{metronome:t}=e,s=!1,u=0,a=0;const l=(r,g)=>{s=!0,u=r,a=g},b=()=>{s=!1};let m,c="white",w="white";const N=r=>{r.setup=()=>{m=r,r.createCanvas(600,300),r.textSize(40)},r.draw=()=>{const g=document.getElementById("canvas-container");if(g){const _=g?.clientWidth||600;r.width!==_&&r.resizeCanvas(_,Math.max(_/3,100))}r.clear(),r.stroke(c);const I=Math.min(r.width/t.beatsPerBar,r.height),M=r.height/t.subdivisionsInBeat;for(let _=0;_<t.beatsPerBar;_++){_===u?r.strokeWeight(5):r.strokeWeight(1),r.noFill(),r.circle(_*I+I/2,r.height/2,I*.9),r.strokeWeight(1);for(let C=0;C<t.subdivisionsInBeat;C++)s&&_===u&&C===a?r.fill(c):r.noFill(),r.circle(_*I+I/2,C*M+M/2,I/t.subdivisionsInBeat*.9)}s?r.fill(w):r.fill(c),r.fill(c);const S=(u+1).toString();r.text(S,u*I+I/2-r.textWidth(S)/2,r.height/2+r.textSize()/2)}};return xt(()=>{const r=getComputedStyle(document.body);c=r.getPropertyValue("--nc-tx-3"),w=r.getPropertyValue("--nc-tx-2"),n(1,t.onBeatStart=l,t),n(1,t.onBeatEnd=b,t)}),Bt(()=>{m?.remove()}),o.$$set=r=>{"metronome"in r&&n(1,t=r.metronome)},[N,t]}class zt extends it{constructor(e){super(),ot(this,e,At,qt,st,{metronome:1})}}function Rt(o){let e,n,t="Tap",s,u;return{c(){e=h("div"),n=h("button"),n.textContent=t,this.h()},l(a){e=d(a,"DIV",{class:!0});var l=k(e);n=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),P(n)!=="svelte-1ln40k6"&&(n.textContent=t),l.forEach(p),this.h()},h(){f(n,"class","svelte-1gwle9f"),F(n,"taped",o[0]),f(e,"class","controls-container svelte-1gwle9f")},m(a,l){z(a,e,l),i(e,n),s||(u=L(n,"click",o[1]),s=!0)},p(a,[l]){l&1&&F(n,"taped",a[0])},i:R,o:R,d(a){a&&p(e),s=!1,u()}}}function Wt(o,e,n){let{onNewBPM:t}=e,s=new It,u=!1;const a=()=>{s.addBeat(),n(0,u=!0),setTimeout(()=>n(0,u=!1),100),s.bpm>0&&t(Math.ceil(s.bpm))};return o.$$set=l=>{"onNewBPM"in l&&n(2,t=l.onNewBPM)},[u,a,t]}class Ft extends it{constructor(e){super(),ot(this,e,Wt,Rt,st,{onNewBPM:2})}}function _t(o){let e,n,t,s,u,a="Close",l,b,m=`This is a simple metronome:
                <ul><li>Use the play/pause button or the space bar to start and stop the metronome</li> <li>You can change the tempo by:</li> <ul><li>Entering a number directly in the input</li> <li>Using the -5, -1, +1 and +5 buttons</li> <li>Taping a tempo on the tap button. When taping the tempo each tap counts
                            for a subdivision if subdivisions are enabled. Stop taping for approx. 3
                            seconds to restart the tap counter.</li></ul> <li>The &quot;Beats in bar&quot; setting change the number of beats counted by the
                        metronome. The first beat is accented with a higher frequency tone.</li> <li>The &quot;Subdivisions in beat&quot; setting allow to change how the beats are
                        divided. The subdivisions after the first one are played with a lower
                        frequency tone.</li> <li>The visualization at the bottom follow the beats and their subdivisions.</li></ul>`,c,w,N,r,g="Bugs",I,M,S=`<li>While it goes against my opinion on what the web should look like, this page
                    works better with Chrome-based browsers.</li> <li>For some reason the display of the tempo settings is broken on Firefox, the
                    input doesn&#39;t resize properly.</li> <li>The sound doesn&#39;t work on Safari on iOS (and maybe on MacOS too).</li>`,_,C;return{c(){e=h("div"),n=h("div"),t=h("h4"),s=ht(`Metronome
                `),u=h("button"),u.textContent=a,l=y(),b=h("div"),b.innerHTML=m,c=y(),w=h("br"),N=y(),r=h("h5"),r.textContent=g,I=y(),M=h("ul"),M.innerHTML=S,this.h()},l($){e=d($,"DIV",{role:!0,class:!0});var H=k(e);n=d(H,"DIV",{class:!0});var x=k(n);t=d(x,"H4",{class:!0});var B=k(t);s=dt(B,`Metronome
                `),u=d(B,"BUTTON",{"data-svelte-h":!0}),P(u)!=="svelte-2m9p61"&&(u.textContent=a),B.forEach(p),l=V(x),b=d(x,"DIV",{"data-svelte-h":!0}),P(b)!=="svelte-1k2t2wt"&&(b.innerHTML=m),c=V(x),w=d(x,"BR",{}),N=V(x),r=d(x,"H5",{"data-svelte-h":!0}),P(r)!=="svelte-1fvxfob"&&(r.textContent=g),I=V(x),M=d(x,"UL",{"data-svelte-h":!0}),P(M)!=="svelte-19aw4nc"&&(M.innerHTML=S),x.forEach(p),H.forEach(p),this.h()},h(){f(t,"class","title-bar svelte-mmovoq"),f(n,"class","contents svelte-mmovoq"),f(e,"role","dialog"),f(e,"class","modal svelte-mmovoq")},m($,H){z($,e,H),i(e,n),i(n,t),i(t,s),i(t,u),i(n,l),i(n,b),i(n,c),i(n,w),i(n,N),i(n,r),i(n,I),i(n,M),_||(C=L(u,"click",Tt),_=!0)},d($){$&&p(e),_=!1,C()}}}function Zt(o){let e,n=o[0]&&_t();return{c(){n&&n.c(),e=gt()},l(t){n&&n.l(t),e=gt()},m(t,s){n&&n.m(t,s),z(t,e,s)},p(t,[s]){t[0]?n||(n=_t(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:R,o:R,d(t){t&&p(e),n&&n.d(t)}}}function jt(o,e,n){let{isOpen:t}=e;return o.$$set=s=>{"isOpen"in s&&n(0,t=s.isOpen)},[t]}class Kt extends it{constructor(e){super(),ot(this,e,jt,Zt,st,{isOpen:0})}}function Qt(o){let e,n,t,s,u,a,l,b='<i class="fa fa-info-circle" aria-hidden="true"></i>',m,c,w,N,r,g,I,M,S,_,C,$,H,x,B,E,Z;return e=new Mt({props:{title:"Metronome",description:"Metronome"}}),w=new Ut({props:{metronome:o[0]}}),g=new St({props:{metronome:o[0]}}),M=new Ft({props:{onNewBPM:o[2]}}),C=new Et({props:{metronome:o[0]}}),x=new zt({props:{metronome:o[0]}}),{c(){Y(e.$$.fragment),n=y(),t=h("div"),s=h("h3"),u=ht(`Metronome
        `),a=h("span"),l=h("button"),l.innerHTML=b,m=y(),c=h("div"),Y(w.$$.fragment),N=y(),r=h("div"),Y(g.$$.fragment),I=y(),Y(M.$$.fragment),S=y(),_=h("div"),Y(C.$$.fragment),$=y(),H=h("div"),Y(x.$$.fragment),this.h()},l(v){J(e.$$.fragment,v),n=V(v),t=d(v,"DIV",{class:!0});var T=k(t);s=d(T,"H3",{});var j=k(s);u=dt(j,`Metronome
        `),a=d(j,"SPAN",{});var K=k(a);l=d(K,"BUTTON",{"data-svelte-h":!0}),P(l)!=="svelte-13whskn"&&(l.innerHTML=b),K.forEach(p),j.forEach(p),m=V(T),c=d(T,"DIV",{});var D=k(c);J(w.$$.fragment,D),D.forEach(p),N=V(T),r=d(T,"DIV",{class:!0});var W=k(r);J(g.$$.fragment,W),I=V(W),J(M.$$.fragment,W),W.forEach(p),S=V(T),_=d(T,"DIV",{class:!0});var Q=k(_);J(C.$$.fragment,Q),Q.forEach(p),$=V(T),H=d(T,"DIV",{class:!0});var U=k(H);J(x.$$.fragment,U),U.forEach(p),T.forEach(p),this.h()},h(){q(l,"position","relative"),f(r,"class","section svelte-1kxlsex"),f(_,"class","section svelte-1kxlsex"),f(H,"class","section svelte-1kxlsex"),f(t,"class","main svelte-1kxlsex")},m(v,T){X(e,v,T),z(v,n,T),z(v,t,T),i(t,s),i(s,u),i(s,a),i(a,l),i(t,m),i(t,c),X(w,c,null),i(t,N),i(t,r),X(g,r,null),i(r,I),X(M,r,null),i(t,S),i(t,_),X(C,_,null),i(t,$),i(t,H),X(x,H,null),B=!0,E||(Z=L(l,"click",o[1]),E=!0)},p(v,[T]){const j={};T&1&&(j.metronome=v[0]),w.$set(j);const K={};T&1&&(K.metronome=v[0]),g.$set(K);const D={};T&1&&(D.onNewBPM=v[2]),M.$set(D);const W={};T&1&&(W.metronome=v[0]),C.$set(W);const Q={};T&1&&(Q.metronome=v[0]),x.$set(Q)},i(v){B||(tt(e.$$.fragment,v),tt(w.$$.fragment,v),tt(g.$$.fragment,v),tt(M.$$.fragment,v),tt(C.$$.fragment,v),tt(x.$$.fragment,v),B=!0)},o(v){et(e.$$.fragment,v),et(w.$$.fragment,v),et(g.$$.fragment,v),et(M.$$.fragment,v),et(C.$$.fragment,v),et(x.$$.fragment,v),B=!1},d(v){v&&(p(n),p(t)),nt(e,v),nt(w),nt(g),nt(M),nt(C),nt(x),E=!1,Z()}}}function Gt(o,e,n){let t=new yt(80);return Bt(()=>{t.stop()}),[t,()=>Ct(Kt),a=>{n(0,t.tempo=a/t.subdivisionsInBeat,t),n(0,t)}]}class se extends it{constructor(e){super(),ot(this,e,Gt,Qt,st,{})}}export{se as component};