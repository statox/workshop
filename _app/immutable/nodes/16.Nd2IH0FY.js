import{g as Ut,u as kt,a as qt,b as Mt}from"../chunks/api.ByTfYrOP.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as tt}from"../chunks/legacy.Bspvssc3.js";import{k as W,aM as Ot,m as q,n as Z,g as t,s as $,aU as mt,R as wt,v as I,w as m,ag as v,ah as n,ai as F,T as It,a7 as X,aj as Ft,ak as Rt,aZ as dt,o as gt}from"../chunks/index-client.CflbJY84.js";import{s as O}from"../chunks/render.D9j6VzsR.js";import{e as j,i as J}from"../chunks/each.CJUKzImm.js";import{n as Et,a as _,t as D,f as G,e as Y,s as Ct}from"../chunks/template.BGksMNs9.js";import{c as jt}from"../chunks/svelte-component.BoSM_DJ4.js";import{s as ot,c as yt,r as _t}from"../chunks/attributes.D4L4WMZE.js";import{t as Lt,s as xt,U as Nt,u as Jt}from"../chunks/service.BtF5aEDd.js";import{s as ft}from"../chunks/style.PwPRnE0L.js";import{b as Pt,d as zt}from"../chunks/input.BoLElzTc.js";import{a as Ht,p as M}from"../chunks/props.CpxbqgeU.js";import{s as St,b as Dt,a as pt}from"../chunks/store.6NDgt3ZJ.js";import{c as Gt,o as Kt}from"../chunks/store.BObuO1UO.js";import{a as Tt}from"../chunks/window.D9YWhZyC.js";import{M as Wt}from"../chunks/Main.d7VS-h89.js";import{M as Zt}from"../chunks/Main.CbaYBzTI.js";import{i as K}from"../chunks/if.DLCvTpsY.js";import{k as ht}from"../chunks/key.BsP8r3r7.js";import{b as Qt,g as Xt}from"../chunks/entry.DxwPPfpL.js";import{t as Yt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.DLvG2AVB.js";import{A as te}from"../chunks/index.BX63RORe.js";import{b as ee}from"../chunks/this.CCr7YNov.js";import{a as ae}from"../chunks/await.CCcugD2l.js";import{p as se}from"../chunks/Main.svelte_svelte_type_style_lang.Cgidh24I.js";const re=!1,oe=async()=>({chords:await Ut()}),pa=Object.freeze(Object.defineProperty({__proto__:null,load:oe,ssr:re},Symbol.toStringTag,{value:"Module"}));var ne=D('<button class="top-link svelte-1kbb9q3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="svelte-1kbb9q3"><path d="M12 6H0l6-6z"></path></svg> <span class="screen-reader-text svelte-1kbb9q3">Back to top</span></button>');function le(C,c){W(c,!0);let y=mt(0),f=mt(!0),b;const h=i=>{i>0?$(f,!1):$(f,!0),b&&clearTimeout(b),b=setTimeout(()=>{$(f,!0)},3e3)},x=()=>{const i=document.documentElement.scrollTop||document.body.scrollTop;i>0&&(window.requestAnimationFrame(x),window.scrollTo(0,i-i/2))};Ot(()=>h(t(y)));var S=ne();S.__click=x,q(()=>Lt(S,"hide",t(f))),Tt("y",()=>t(y),i=>$(y,Ht(i))),_(C,S),Z()}Et(["click"]);const nt=wt();let At=[];const bt=localStorage.getItem("failedVisitCounts");if(bt!==null)try{At=JSON.parse(bt)}catch{console.error("Couldnt parse failedVisitCounts from local storage")}const ct=wt(At);ct.subscribe(C=>{localStorage.setItem("failedVisitCounts",JSON.stringify(C))});const Bt=C=>C==="doc"?"fas fa-file-word":C==="pdf"?"fas fa-file-pdf":C==="youtube"?"fa fa-youtube":"fas fa-link";var ie=D('<span></span> <span><a target="_blank" rel="noopener noreferrer"></a></span>',1);function lt(C,c){W(c,!1);const[y,f]=St(),b=()=>pt(ct,"$failedVisitCounts",y);let h=M(c,"chord",8),x=M(c,"showArtist",8,!1),S=F();nt.subscribe(s=>{if(s&&s.has(h().url)){const p=s.get(h().url),o=new Date(p.lastAccessDateUnix*1e3);$(S,`visits: ${p.count} - last: ${o.toLocaleDateString()}`)}});const i=(x()?h().artist+" - ":"")+h().title,a=s=>s.type==="doc"?`${Qt}/docviewer/${s.url}`:s.url,r=async()=>{try{await kt(h().url);const s=It(nt),p=s.get(h().url)||{count:0,lastAccessDateUnix:0};p.count++,p.lastAccessDateUnix=Date.now()/1e3,s.set(h().url,p),nt.set(s)}catch(s){let p=s.message;s instanceof te&&s.code===401?p="Invalid logged in user":s instanceof Nt&&(p="User is logged out"),Dt(ct,[...b(),h().url]);const o=`<strong>Visit not counted</strong><br/> ${p}`;Yt.push(o,{initial:1,duration:5e3,theme:{"--toastBarBackground":"#FF0000"}})}};tt();var l=ie(),g=I(l);const d=X(()=>yt(Bt(h().type)));var w=m(g,2),e=v(w);q(()=>ot(e,"href",a(h()))),e.textContent=i,n(w),q(()=>{xt(g,t(d),"svelte-1yqqigs"),ot(e,"title",t(S))}),G("click",e,r),_(C,l),Z(),f()}var ce=D('<li class="ul2col-item"><!> <!></li>'),ue=D('<ul class="ul2col-container"></ul>');function ve(C,c){W(c,!1);let y=M(c,"searchString",8),f=M(c,"chords",12),b=M(c,"filters",8),h=F();nt.subscribe(a=>{a&&($(h,a),f(f().sort((r,l)=>{const g=a.get(r.url),d=a.get(l.url);return g&&d?d.lastAccessDateUnix-g.lastAccessDateUnix:g?-1:d?1:r.artist!=l.artist?r.artist.toLowerCase()<l.artist.toLowerCase()?-1:1:r.title.toLowerCase()<l.title.toLowerCase()?-1:1})))});const x=(a,r,l)=>l[a.type]===!1?!1:r.length===0||a.artist.toLowerCase().match(r.toLowerCase())?!0:a.title.toLowerCase().match(r.toLowerCase());tt();var S=Y(),i=I(S);ht(i,f,a=>{var r=ue();j(r,5,f,J,(l,g)=>{var d=Y();const w=X(()=>t(h).get(t(g).url));var e=I(d);{var s=p=>{var o=ce(),u=v(o);{var k=L=>{var B=Ct();q(()=>O(B,`(${t(w).count??""})`)),_(L,B)};K(u,L=>{t(w)&&L(k)})}var T=m(u,2);lt(T,{get chord(){return t(g)},showArtist:!0}),n(o),_(p,o)};K(e,p=>{x(t(g),y(),b())&&p(s)})}_(l,d)}),n(r),_(a,r)}),_(C,S),Z()}const de=(C,c)=>C<c?-1:C>c?1:0,$t=(C,c)=>{const y=C.toLowerCase(),f=c.toLowerCase();return de(y,f)};var fe=D('<li class="navigationBtn svelte-1deg5s8"><a class="navigationLink svelte-1deg5s8"> </a></li>'),pe=D('<li class="ul2col-item"><!></li>'),ge=D('<ul class="ul2col-container"></ul>'),he=D('<tr class="svelte-1deg5s8"><td class="svelte-1deg5s8"> <!></td></tr>'),me=D('<ol id="indexList" class="navigationBar disable-scrollbars svelte-1deg5s8"></ol> <table id="artistTable"><tbody></tbody></table>',1);function _e(C,c){W(c,!1);let y=M(c,"searchString",8,""),f=M(c,"chords",8),b=M(c,"filters",8);const h=f().reduce((o,u)=>{const k=u.artist;return o[k]||(o[k]=[]),o[k].push(u),o},{}),x=[],S=Object.keys(h).sort($t).map((o,u,k)=>{if(u===0||o[0].toLowerCase()!=k[u-1][0].toLowerCase()){const T="anchor_letter_"+o[0];return x.push({letter:o[0],tag:T}),{name:o,tag:T}}return{name:o}});let i=F(),a=F(0),r=F();const l=o=>{if(t(r)){var u=t(r).getBoundingClientRect();if(u.top<20){$(a,20);return}$(a,u.top)}},g=(o,u,k)=>h[o].sort((L,B)=>L.title<B.title?-1:1).filter(L=>{const B=L.type;return k[B]===!1?!1:u.length===0?!0:!!L.title.toLowerCase().match(u.toLowerCase())}),d=(o,u)=>!!o.toLowerCase().match(u.toLowerCase());Ft(()=>t(i),()=>{l(t(i))}),Rt(),tt();var w=me(),e=I(w);j(e,5,()=>x,J,(o,u)=>{var k=fe(),T=v(k),L=v(T,!0);q(()=>O(L,t(u).letter.toUpperCase())),n(T),n(k),q(()=>ot(T,"href","#"+t(u).tag)),_(o,k)}),n(e);var s=m(e,2),p=v(s);j(p,5,()=>S,J,(o,u)=>{var k=Y();const T=X(()=>g(t(u).name,y(),b())),L=X(()=>d(t(u).name,y()));var B=I(k);{var R=N=>{var P=he();const et=X(()=>t(L)?h[t(u).name]:t(T));var H=v(P),at=v(H),st=m(at);ht(st,y,z=>{var Q=ge();j(Q,5,()=>t(et),J,(rt,V)=>{var A=pe(),U=v(A);lt(U,{get chord(){return t(V)}}),n(A),_(rt,A)}),n(Q),_(z,Q)}),n(H),n(P),q(()=>{ot(H,"id",t(u).tag),O(at,`${t(u).name??""} `)}),_(N,P)};K(B,N=>{(t(L)||t(T).length>0)&&N(R)})}_(o,k)}),n(p),n(s),ee(s,o=>$(r,o),()=>t(r)),q(()=>ft(e,"--barTop",`${t(a)??""}px`)),Tt("y",()=>t(i),o=>$(i,o)),_(C,w),Z()}var be=D('<li class="ul2col-item"><!></li>'),ke=D('<div><span> </span> <ul class="ul2col-container"></ul></div>');function we(C,c){W(c,!1);let y=M(c,"searchString",8),f=M(c,"chords",8),b=M(c,"filters",8);const h=a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),x=F({});for(const a of f())a.tags.forEach(l=>{t(x)[l]||dt(x,t(x)[l]=[]),t(x)[l].push(a)});Object.keys(t(x)).forEach(a=>{t(x)[a].sort((r,l)=>{const g=r.artist.toLowerCase(),d=l.artist.toLowerCase(),w=r.title.toLowerCase(),e=l.title.toLowerCase();return g<d?-1:g>d?1:w<e?-1:1})}),tt();var S=Y(),i=I(S);j(i,1,()=>Object.keys(t(x)).sort($t),J,(a,r)=>{var l=Y(),g=I(l);{var d=w=>{var e=ke(),s=v(e),p=v(s,!0);q(()=>O(p,h(t(r)))),n(s);var o=m(s,2);j(o,5,()=>t(x)[t(r)],J,(u,k)=>{var T=Y(),L=I(T);{var B=R=>{var N=be(),P=v(N);lt(P,{get chord(){return t(k)},showArtist:!0}),n(N),_(R,N)};K(L,R=>{b()[t(k).type]&&R(B)})}_(u,T)}),n(o),n(e),_(w,e)};K(g,w=>{(y().length===0||t(r).toLowerCase().match(y().toLowerCase()))&&w(d)})}_(a,l)}),_(C,S),Z()}var Ce=D('<li class="ul2col-item"><!> <!></li>'),ye=D('<ul class="ul2col-container"></ul>');function Le(C,c){W(c,!1);let y=M(c,"searchString",8),f=M(c,"chords",12),b=M(c,"filters",8),h=F();nt.subscribe(a=>{a&&($(h,a),f(f().sort((r,l)=>{const g=a.get(r.url),d=a.get(l.url);return g&&d?g.count!==d.count?d.count-g.count:d.lastAccessDateUnix-g.lastAccessDateUnix:g?-1:d?1:r.artist!=l.artist?r.artist.toLowerCase()<l.artist.toLowerCase()?-1:1:r.title.toLowerCase()<l.title.toLowerCase()?-1:1})))});const x=(a,r,l)=>l[a.type]===!1?!1:r.length===0||a.artist.toLowerCase().match(r.toLowerCase())?!0:a.title.toLowerCase().match(r.toLowerCase());tt();var S=Y(),i=I(S);ht(i,f,a=>{var r=ye();j(r,5,f,J,(l,g)=>{var d=Y();const w=X(()=>t(h).get(t(g).url));var e=I(d);{var s=p=>{var o=Ce(),u=v(o);{var k=L=>{var B=Ct();q(()=>O(B,`(${t(w).count??""})`)),_(L,B)};K(u,L=>{t(w)&&L(k)})}var T=m(u,2);lt(T,{get chord(){return t(g)},showArtist:!0}),n(o),_(p,o)};K(e,p=>{x(t(g),y(),b())&&p(s)})}_(l,d)}),n(r),_(a,r)}),_(C,S),Z()}var xe=D('<span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"><a target="_blank" rel="noopener noreferrer"> </a></span> <span class="col svelte-5k8p3l"> </span>',1),Se=D('<div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Last Check</span> <span class="col table-head svelte-5k8p3l">Checks</span> <span class="col table-head svelte-5k8p3l">Skipped</span> <span class="col table-head svelte-5k8p3l">Errors</span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span></div> <br> <div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Status</span> <span class="col table-head svelte-5k8p3l">Ref</span> <span class="col table-head svelte-5k8p3l">Host</span> <span class="col table-head svelte-5k8p3l">Data</span> <!></div>',1),De=D('<p style="color: red"> </p>'),Te=D("<p>Fetching results...</p>"),Ae=D('<div role="dialog" class="modal svelte-5k8p3l"><div class="contents svelte-5k8p3l"><h3 class="title-bar svelte-5k8p3l">Urls checks <button>Close</button></h3> <!></div></div>');function Be(C,c){W(c,!1);let y=M(c,"isOpen",8);const f=i=>{const a=new Date(i.timestamp);return a.toDateString()+" "+a.toTimeString()},b=i=>i.fails.sort((a,r)=>a.chord.url<r.chord.url?-1:1);tt();var h=Y(),x=I(h);{var S=i=>{var a=Ae(),r=v(a),l=v(r),g=m(v(l));n(l);var d=m(l,2);ae(d,qt,w=>{var e=Te();_(w,e)},(w,e)=>{var s=Se();const p=X(()=>f(t(e))),o=X(()=>b(t(e)));var u=I(s),k=m(v(u),8),T=v(k,!0);n(k);var L=m(k,2),B=v(L,!0);n(L);var R=m(L,2),N=v(R,!0);n(R);var P=m(R,2),et=v(P,!0);n(P),n(u);var H=m(u,4),at=m(v(H),8);j(at,1,()=>t(o),J,(st,z)=>{var Q=xe(),rt=I(Q),V=v(rt,!0);n(rt);var A=m(rt,2),U=v(A);n(A);var E=m(A,2),it=v(E),vt=v(it,!0);n(it),n(E);var ut=m(E,2),Vt=v(ut,!0);q(()=>O(Vt,t(z).error?JSON.stringify(t(z).error):"")),n(ut),q(()=>{O(V,t(z).status),O(U,`${t(z).chord.artist??""} - ${t(z).chord.title??""}`),ot(it,"href",t(z).chord.url),O(vt,new URL(t(z).chord.url).hostname)}),_(st,Q)}),n(H),q(()=>{O(T,t(p)),O(B,t(e).nbChecks),O(N,t(e).nbSkipped),O(et,t(e).nbFails)}),_(w,s)},(w,e)=>{var s=De(),p=v(s);n(s),q(()=>O(p,`Could not retrieve checks: ${t(e).message??""}`)),_(w,s)}),n(r),n(a),G("click",g,function(...w){var e;(e=Gt)==null||e.apply(this,w)}),_(i,a)};K(x,i=>{y()&&i(S)})}_(C,h),Z()}var $e=D('<li class="ul2col-separator"> </li>'),Ve=D('<!> <li class="ul2col-item"><!></li>',1),Ue=D('<div><h3>Latest additions <button class="pull-right">More...</button></h3> <ul class="ul2col-container"></ul></div>');function qe(C,c){W(c,!1);let y=M(c,"chords",8);const f=Date.now(),b=1e3*3600*24*7,h=b*4,x=[{label:"last week",time:f-b},{label:"one month ago",time:f-h},{label:"two monthes ago",time:f-2*h},{label:"six monthes ago",time:f-6*h},{label:"one year ago",time:f-12*h}],S=y().filter(e=>e.creationDate).sort((e,s)=>s.creationDate-e.creationDate).map((e,s,p)=>{const o={...e};if(s>0){const u=p[s-1];for(const{time:k,label:T}of x)u.creationDate>k&&e.creationDate<k&&(o.dateTag=T)}return o});let i=6,a=F([]);const r=()=>{i+=4,$(a,S.slice(0,i))};gt(()=>{r()}),tt();var l=Ue(),g=v(l),d=m(v(g));n(g);var w=m(g,2);j(w,5,()=>t(a),J,(e,s)=>{var p=Ve(),o=I(p);{var u=L=>{var B=$e(),R=v(B,!0);n(B),q(()=>O(R,t(s).dateTag)),_(L,B)};K(o,L=>{t(s).dateTag&&L(u)})}var k=m(o,2),T=v(k);lt(T,{get chord(){return t(s)}}),n(k),_(e,p)}),n(w),n(l),G("click",d,()=>r()),_(C,l),Z()}var Me=D("<button>&nbsp↶&nbsp</button>"),Oe=D('<li class="ul2col-item"><!></li>'),Ie=D('<div><h3>Random song <span class="pull-right"><!> <button>Get more random songs</button></span></h3> <br> <ul class="ul2col-container"></ul></div>');function Fe(C,c){W(c,!1);let y=M(c,"chords",8);const f=6;let b=F([]),h=F([]);const x=()=>{t(b).length>=y().length-f&&$(b,[]);for(let e=0;e<f;e++){let s=-1;for(;s===-1||t(b).includes(s);)s=Math.floor(Math.random()*y().length);t(b).push(s)}$(h,t(b).slice(t(b).length-f).map(e=>y()[e]))},S=()=>{t(b).length<=f||(t(b).splice(t(b).length-f),$(h,t(b).slice(t(b).length-f).map(e=>y()[e])))};gt(()=>{x()}),tt();var i=Ie(),a=v(i),r=m(v(a)),l=v(r);{var g=e=>{var s=Me();G("click",s,S),_(e,s)};K(l,e=>{t(b).length>f&&e(g)})}var d=m(l,2);n(r),n(a);var w=m(a,4);j(w,5,()=>t(h),e=>e.url,(e,s)=>{var p=Oe(),o=v(p);lt(o,{get chord(){return t(s)},showArtist:!0}),n(p),_(e,p)}),n(w),n(i),G("click",d,x),_(C,i),Z()}var Re=D('<button class="filter-control svelte-1gfqv35"><input type="checkbox"> <span></span></button>'),Ee=D('<button class="control svelte-1gfqv35"> </button>'),je=D('<!> <h2><span class="pull-right"><button>Check dead links</button> <button>Edit</button></span></h2> <!> <!> <p> </p> <!> <!> <div><h3>All songs</h3> Search an artist, a title or a tag:<input type="text"> <button aria-label="delete search"><i class="fas fa-times-circle"></i></button> <div class="filter-controls-container svelte-1gfqv35"><h4>Filters</h4> <!></div> <h4>View</h4> <div class="view-controls-container svelte-1gfqv35"></div></div> <!>',1);function ga(C,c){W(c,!1);const[y,f]=St(),b=()=>pt(ct,"$failedVisitCounts",y),h=()=>pt(Jt,"$user",y);se.set("Songbook");let x=M(c,"data",8);const{chords:S}=x();let i=F([]);const a=V=>{t(i).push(V),$(i,t(i)),setTimeout(()=>{t(i).shift(),$(i,t(i))},5e3)};gt(async()=>{try{if(b().length&&h()){a({level:"info",header:"Trying to count missed visits while logged out"});for(const V of b())await kt(V);a({level:"success",header:`Counted ${b().length} missed visits`}),Dt(ct,[])}}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}try{const A=(await Mt()).reduce((U,E)=>(U.set(E.url,{...E}),U),new Map);nt.set(A)}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}});let r=F("");const l=[{label:"By artist",component:_e},{label:"By tags",component:we},{label:"By frequency",component:Le},{label:"By access date",component:ve}];let g=F(l[0]),d=F({pdf:!0,doc:!0,youtube:!0,link:!0});const w=Object.keys(t(d));tt();var e=je(),s=I(e);Wt(s,{title:"Song Book",description:"My song book",iconPath:"/songbook.png"});var p=m(s,2),o=v(p),u=v(o);ft(u,"position","relative");var k=m(u,2);ft(k,"position","relative"),n(o),n(p);var T=m(p,2);j(T,1,()=>t(i),J,(V,A)=>{Zt(V,{get item(){return t(A)}})});var L=m(T,2);le(L,{});var B=m(L,2),R=v(B);n(B);var N=m(B,2);qe(N,{chords:S});var P=m(N,2);Fe(P,{chords:S});var et=m(P,2),H=m(v(et),2);_t(H);var at=m(H,2),st=m(at,2),z=m(v(st),2);j(z,1,()=>w,J,(V,A)=>{var U=Re(),E=v(U);_t(E);var it=m(E,2);const vt=X(()=>yt(Bt(t(A))));n(U),q(()=>{ot(U,"aria-label",`filter for ${t(A)??""}`),ot(E,"id",t(A)),xt(it,t(vt),"svelte-1gfqv35")}),zt(E,()=>t(d)[t(A)],ut=>dt(d,t(d)[t(A)]=ut)),G("click",U,()=>{dt(d,t(d)[t(A)]=!t(d)[t(A)]),$(d,t(d))}),_(V,U)}),n(st);var Q=m(st,4);j(Q,5,()=>l,J,(V,A)=>{var U=Ee(),E=v(U,!0);n(U),q(()=>{Lt(U,"selected",t(g)===t(A)),O(E,t(A).label)}),G("click",U,()=>$(g,t(A))),_(V,U)}),n(Q),n(et);var rt=m(et,2);jt(rt,()=>t(g).component,(V,A)=>{A(V,{chords:S,get searchString(){return t(r)},get filters(){return t(d)}})}),q(()=>O(R,`This is a list of ${S.length??""} song chords I have been gathering since I started teaching myself
    the guitar as a teen and that I like to play.`)),G("click",u,()=>Kt(Be)),G("click",k,()=>Xt("/songbook/edit")),Pt(H,()=>t(r),V=>$(r,V)),G("click",at,()=>$(r,"")),_(C,e),Z(),f()}export{ga as component,pa as universal};
