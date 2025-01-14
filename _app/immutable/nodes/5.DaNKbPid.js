import"../chunks/disclose-version.Bg9kRutz.js";import{i as K}from"../chunks/legacy.EqIdVoM0.js";import{y as N,ae as f,z as I,af as g,A as X,m as U,aV as J,x as Q,g as O,aI as P,s as H,ag as Z}from"../chunks/index-client.S3REcJgE.js";import{c as tt,a as F,e as p,t as Y}from"../chunks/template.B5pchg3w.js";import{s as et}from"../chunks/style.PwPRnE0L.js";import{r as ot}from"../chunks/misc.BZIIG4wT.js";import{P as it}from"../chunks/P5.CIpUrZEU.js";import{c as at,o as rt}from"../chunks/store.DF07ihmy.js";import{i as nt}from"../chunks/if.BYsj_AMu.js";import{p as st}from"../chunks/props.C2aoZBXh.js";import"../chunks/entry.c2uDQm9S.js";import{p as lt}from"../chunks/Main.svelte_svelte_type_style_lang.CsTDB6ng.js";import"../chunks/auth0-spa-js.production.esm.Dzqc2IBy.js";var ct=Y(`<div role="dialog" class="modal svelte-5yv1o0"><div class="contents svelte-5yv1o0"><h4 class="title-bar svelte-5yv1o0">Chord Wheel <button>Close</button></h4> <div>This page is an implementation of <a href="https://chordwheel.com/" target="_blank" rel="noopener noreferrer">Jim Fleser's Chord Wheel</a> it is intended for my personal use. If you are using this implementation you should definitely <a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=16&amp;Itemid=4" target="_blank" rel="noopener noreferrer">buy his book</a> or <a href="https://apps.apple.com/us/app/the-chord-wheel/id444931977" target="_blank" rel="noopener noreferrer">buy his app</a> (which is much more complete than this page).</div> <div>This tool only works for songs in major keys. <ul><li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=5&amp;Itemid=17" target="_blank" rel="noopener noreferrer">Analyzing songs and compositional styles</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=8:soloing-and-improvisation&amp;catid=8:using-the-chordwheel&amp;Itemid=8" target="_blank" rel="noopener noreferrer">Soloing and improvisation</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=9&amp;Itemid=5" target="_blank" rel="noopener noreferrer">Transpositions</a></li></ul></div></div></div>`);function mt(t,o){let i=st(o,"isOpen",8);var r=tt(),n=N(r);{var m=l=>{var c=ct(),u=f(c),a=f(u),h=I(f(a));g(a),X(4),g(u),g(c),p("click",h,function(...s){var x;(x=at)==null||x.apply(this,s)}),F(l,c)};nt(n,l=>{i()&&l(m)})}F(t,r)}const w=Math.PI,dt={scale:1,position:0,outerRing:{labels:["B°","F♯°","C♯°","G♯°","D♯°","A♯°","F°","C°","G°","D°","A°","E°"],cellSize:2*w/48,ratio:4,innerDiameter:.82,outerDiameter:1},middleRing:{labels:["Em","Am","Bm","Em","F♯m","Bm","C♯m","F♯m","G♯m","C♯m","D♯m","G♯m","A♯m","E♭m","Fm","B♭m","Cm","Fm","Gm","Cm","Dm","Gm","Am","Dm"],cellSize:2*w/24,ratio:1,innerDiameter:.6,outerDiameter:.82},innerRing:{labels:["C","G","D","A","F♭/E","C♭/B","G♭/F♯","D♭/C♯","A♭/G♯","E♭","B♭","F"],cellSize:2*w/12,ratio:1,innerDiameter:.35,outerDiameter:.6}},k=(t,o)=>{if(t>=0)return t%o;for(;t<0;)t+=o;return t},E=(t,o,i,r,n)=>{if(i<0||i>=o.labels.length)throw new Error(`OOB labelIndex: ${i}`);const{cellSize:m,innerDiameter:l,outerDiameter:c,ratio:u}=o,a=t.createVector();a.x=0,a.y=-c/2;const h=i*m*u;a.rotate(h);const s=m/2,x=[a.copy().rotate(-s).setMag(l),a.copy().rotate(-s).setMag(c),a.copy().setMag(c*1.02),a.copy().rotate(s).setMag(c),a.copy().rotate(s).setMag(l),a.copy().setMag(l*1.02)].map(b=>b.mult(n)),W=a.copy().setMag(l+(c-l)/2).mult(n),y=k(i+r,o.labels.length)*360/o.labels.length;return{vertices:x,center:W,label:o.labels[i],color:`hsb(${y}, 50%, 80%)`,colorHue:y}},T=(t,o)=>{const{scale:i}=o,r=o.innerRing.labels.map((l,c)=>E(t,o.innerRing,c,o.position,i)),n=o.middleRing.labels.map((l,c)=>E(t,o.middleRing,c,o.position*2,i)),m=o.outerRing.labels.map((l,c)=>E(t,o.outerRing,c,o.position,i));return{tilesInnerRing:r,tilesMiddleRing:n,tilesOuterRing:m}},z=(t,o)=>{t.strokeWeight(2),t.stroke([0,0,0,.5]),t.fill(`hsb(${o.colorHue}, 50%, 70%)`);const[i,r,n,m,l,c]=o.vertices;t.beginShape(),t.vertex(i.x,i.y),t.vertex(r.x,r.y),t.quadraticVertex(n.x,n.y,m.x,m.y),t.vertex(m.x,m.y),t.vertex(l.x,l.y),t.quadraticVertex(c.x,c.y,i.x,i.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.text(o.label,o.center.x-t.textWidth(o.label)/2,o.center.y)},ht=(t,o,i,r,n)=>{const m=[i[k(o-1,i.length)],i[k(o,i.length)],i[k(o+1,i.length)],r[k(2*o-1,r.length)],r[k(2*o,r.length)],r[k(2*o+1,r.length)],n[k(o,n.length)]];for(const l of m){t.strokeWeight(3),t.stroke([0,0,0,1]),t.fill(`hsb(${l.colorHue}, 60%, 90%)`);const[c,u,a,h,s,x]=l.vertices;t.beginShape(),t.vertex(c.x,c.y),t.vertex(u.x,u.y),t.quadraticVertex(a.x,a.y,h.x,h.y),t.vertex(h.x,h.y),t.vertex(s.x,s.y),t.quadraticVertex(x.x,x.y,c.x,c.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.textStyle(t.BOLD),t.text(l.label,l.center.x-t.textWidth(l.label)/2,l.center.y),t.textStyle(t.NORMAL)}},xt=(t,o,i)=>{const{scale:r}=i;t.textSize(10),t.push(),t.rotate(o*(2*t.PI/12)),t.fill(250),t.circle(0,0,i.innerRing.innerDiameter*2*r),t.fill(0);const n=t.createVector();n.x=0,n.y=-i.innerRing.innerDiameter*r;const m="▲";t.text(m,n.x-t.textWidth(m)/2,n.y*.9);const l="Key";t.text(l,n.x-t.textWidth(l)/2,n.y*.75);const c=t.createVector(),u=["♯","♯♯","♯♯♯","♯♯♯♯","7♭/5♯","6♭/6♯","5♭/7♯","♭♭♭♭","♭♭♭","♭♭","♭"];c.y=-i.innerRing.innerDiameter*.85*r,t.push();for(const _ of u)t.rotate(2*t.PI/12),t.text(_,-t.textWidth(_)/2,c.y);t.pop();const a=t.createVector();a.y=-i.innerRing.innerDiameter*1.04*r;const h="I";t.text(h,a.x-t.textWidth(h)/2,a.y);const s=t.createVector();s.y=-i.innerRing.outerDiameter*.9*r;const x="maj7,maj9";t.text(x,s.x-t.textWidth(x)/2,s.y),t.push(),t.rotate(-(2*t.PI)/12);const W="IV";t.text(W,a.x-t.textWidth(W)/2,a.y);const y="maj7,maj9";t.text(y,s.x-t.textWidth(y)/2,s.y),t.pop(),t.push(),t.rotate(2*t.PI/12);const b="V";t.text(b,a.x-t.textWidth(b)/2,a.y);const D="7,9,11,sus4,13";t.text(D,s.x-t.textWidth(D)/2,s.y),t.pop(),a.y=-i.middleRing.innerDiameter*1.02*r,s.y=-i.middleRing.outerDiameter*.95*r;const A="III";t.text(A,a.x-t.textWidth(A)/2,a.y);const C="m7";t.text(C,s.x-t.textWidth(C)/2,s.y),t.push(),t.rotate(-(2*t.PI)/24);const S="II";t.text(S,a.x-t.textWidth(S)/2,a.y);const M="m7,m9";t.text(M,s.x-t.textWidth(M)/2,s.y),t.pop(),t.push();const e="V I";t.rotate(2*t.PI/24),t.text(e,a.x-t.textWidth(e)/2,a.y);const V="m7,m9";t.text(V,s.x-t.textWidth(V)/2,s.y),t.pop();const v="V II°";a.y=-i.outerRing.innerDiameter*1.015*r,s.y=-i.outerRing.outerDiameter*.96*r,t.text(v,a.x-t.textWidth(v)/2,a.y);const d="m7♭5";t.text(d,s.x-t.textWidth(d)/2,s.y)},$=(t,o)=>{if(o){t.position--,t.innerRing.labels.unshift(t.innerRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.outerRing.labels.unshift(t.outerRing.labels.pop());return}t.position++,t.innerRing.labels.push(t.innerRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.outerRing.labels.push(t.outerRing.labels.shift())};var R=ot(()=>dt),ut=Y('<h2>Chord wheel <span><button aria-label="info"><i class="fa fa-info-circle" aria-hidden="true"></i></button></span></h2> <div class="d-flex justify-content-center svelte-8r9jj"><!></div> <div class="justify-content-center svelte-8r9jj"><p><button aria-label="rotate shape counter clockwise" class="fa fa-undo"></button> Shape rotation <button aria-label="rotate shape clockwise" class="fa fa-repeat"></button></p> <p><button aria-label="rotate wheel counter clockwise" class="fa fa-undo"></button> Wheel rotation <button aria-label="rotate wheel clockwise" class="fa fa-repeat"></button></p> <p>On mobile you can also swipe left/right to rotate the shape and up/down to rotate the wheel</p></div>',1);function St(t,o){U(o,!1),lt.set("Chord Wheel");let i,r,n=Z(0);const m=()=>{$(R(),!0),r=T(i,R())},l=()=>{$(R(),!1),r=T(i,R())},c=e=>{function V(){const d=Math.min(e.windowWidth,e.windowHeight);e.resizeCanvas(d*.8,d*.8),R(R().scale=d/2*.75),r=T(e,R())}e.setup=()=>{i=e,e.createCanvas(100,100),V(),e.colorMode(e.HSB)},e.draw=()=>{e.background(50),e.translate(e.width/2,e.height/2),r.tilesInnerRing.forEach(d=>z(e,d)),r.tilesMiddleRing.forEach(d=>z(e,d)),r.tilesOuterRing.forEach(d=>z(e,d)),ht(e,O(n),r.tilesInnerRing,r.tilesMiddleRing,r.tilesOuterRing),xt(e,O(n),R())},e.keyPressed=d=>{![e.LEFT_ARROW,e.RIGHT_ARROW,e.UP_ARROW,e.DOWN_ARROW].includes(e.keyCode)||d.altKey||(d.preventDefault(),e.keyCode===e.LEFT_ARROW&&P(n,-1),e.keyCode===e.RIGHT_ARROW&&P(n),e.keyCode===e.UP_ARROW&&l(),e.keyCode===e.DOWN_ARROW&&m())};let v;e.touchMoved=d=>{var L;if(((L=d.target)==null?void 0:L.className)!=="p5Canvas")return;if(d.preventDefault(),!v){v={x:e.mouseX,y:e.mouseY};return}const _=e.mouseX-v.x,j=e.mouseY-v.y,G=Math.abs(_),B=Math.abs(j);G<50&&B<50||(G>B?_<0?P(n,-1):P(n):j>0?m():l(),v={x:e.mouseX,y:e.mouseY})},e.windowResized=()=>{V()}};J(()=>{i==null||i.remove()}),K();var u=ut(),a=N(u),h=I(f(a)),s=f(h);et(s,"position","relative"),g(h),g(a);var x=I(a,2),W=f(x);it(W,{sketch:c}),g(x);var y=I(x,2),b=f(y),D=f(b),A=I(D,2);g(b);var C=I(b,2),S=f(C),M=I(S,2);g(C),X(2),g(y),p("click",s,()=>rt(mt)),p("click",D,()=>H(n,O(n)-1)),p("click",A,()=>H(n,O(n)+1)),p("click",S,l),p("click",M,m),F(t,u),Q()}export{St as component};
