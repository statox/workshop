import{g as Mt,u as bt,a as Ut,b as Ot}from"../chunks/api.DiHYYWIN.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as tt}from"../chunks/legacy.EqIdVoM0.js";import{m as W,ah as kt,ai as wt,w as M,x as Q,s as $,g as t,ag as I,M as Ct,y as F,z as m,ae as v,af as n,N as It,a5 as Y,a_ as dt,v as ht}from"../chunks/index-client.S3REcJgE.js";import{s as O}from"../chunks/render.CF6uZz0T.js";import{e as R,i as z}from"../chunks/each.Nz7c8l4p.js";import{e as H,a as _,t as D,c as Z,s as yt}from"../chunks/template.B5pchg3w.js";import{c as Ft}from"../chunks/svelte-component.BArtvi3w.js";import{s as ot,c as Lt,r as mt}from"../chunks/attributes.BZLGEmLx.js";import{t as xt,s as St}from"../chunks/class.co_UInUL.js";import{s as ft}from"../chunks/style.PwPRnE0L.js";import{b as Et,d as Nt}from"../chunks/input.DW_zkP8F.js";import{p as U}from"../chunks/props.C2aoZBXh.js";import{s as Dt,b as Tt,a as pt}from"../chunks/store.BAWuPd1l.js";import{c as Rt,o as jt}from"../chunks/store.DF07ihmy.js";import{a as At}from"../chunks/window.CJYpWRXx.js";import{M as zt}from"../chunks/Main.C8YeEQ_R.js";import{U as Jt,u as Pt,M as Ht}from"../chunks/Main.BybladXc.js";import{i as K}from"../chunks/if.BYsj_AMu.js";import{k as gt}from"../chunks/key.BxrKyE8K.js";import{b as Gt,g as Kt}from"../chunks/entry.c2uDQm9S.js";import{t as Wt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.NDn5vnUv.js";import{A as Qt}from"../chunks/index.BONO1CQ0.js";import{b as Xt}from"../chunks/this.BRzA9BlG.js";import{a as Yt}from"../chunks/await.BGm15oIX.js";import{p as Zt}from"../chunks/Main.svelte_svelte_type_style_lang.CsTDB6ng.js";const te=!1,ee=async()=>({chords:await Mt()}),ua=Object.freeze(Object.defineProperty({__proto__:null,load:ee,ssr:te},Symbol.toStringTag,{value:"Module"}));var ae=D('<button class="top-link svelte-1kbb9q3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="svelte-1kbb9q3"><path d="M12 6H0l6-6z"></path></svg> <span class="screen-reader-text svelte-1kbb9q3">Back to top</span></button>');function se(C,c){W(c,!1);let y=I(),f=I(!0),b;const g=i=>{i>0?$(f,!1):$(f,!0),b&&clearTimeout(b),b=setTimeout(()=>{$(f,!0)},3e3)},x=()=>{const i=document.documentElement.scrollTop||document.body.scrollTop;i>0&&(window.requestAnimationFrame(x),window.scrollTo(0,i-i/2))};kt(()=>t(y),()=>{g(t(y))}),wt();var S=ae();M(()=>xt(S,"hide",t(f))),At("y",()=>t(y),i=>$(y,i)),H("click",S,x),_(C,S),Q()}const nt=Ct();let Bt=[];const _t=localStorage.getItem("failedVisitCounts");if(_t!==null)try{Bt=JSON.parse(_t)}catch{console.error("Couldnt parse failedVisitCounts from local storage")}const ct=Ct(Bt);ct.subscribe(C=>{localStorage.setItem("failedVisitCounts",JSON.stringify(C))});const $t=C=>C==="doc"?"fas fa-file-word":C==="pdf"?"fas fa-file-pdf":C==="youtube"?"fa fa-youtube":"fas fa-link";var re=D('<span></span> <span><a target="_blank" rel="noopener noreferrer"></a></span>',1);function lt(C,c){W(c,!1);const[y,f]=Dt(),b=()=>pt(ct,"$failedVisitCounts",y);let g=U(c,"chord",8),x=U(c,"showArtist",8,!1),S=I();nt.subscribe(s=>{if(s&&s.has(g().url)){const p=s.get(g().url),o=new Date(p.lastAccessDateUnix*1e3);$(S,`visits: ${p.count} - last: ${o.toLocaleDateString()}`)}});const i=(x()?g().artist+" - ":"")+g().title,a=s=>s.type==="doc"?`${Gt}/docviewer/${s.url}`:s.url,r=async()=>{try{await bt(g().url);const s=It(nt),p=s.get(g().url)||{count:0,lastAccessDateUnix:0};p.count++,p.lastAccessDateUnix=Date.now()/1e3,s.set(g().url,p),nt.set(s)}catch(s){let p=s.message;s instanceof Qt&&s.code===401?p="Invalid logged in user":s instanceof Jt&&(p="User is logged out"),Tt(ct,[...b(),g().url]);const o=`<strong>Visit not counted</strong><br/> ${p}`;Wt.push(o,{initial:1,duration:5e3,theme:{"--toastBarBackground":"#FF0000"}})}};tt();var l=re(),h=F(l);const d=Y(()=>Lt($t(g().type)));var w=m(h,2),e=v(w);M(()=>ot(e,"href",a(g()))),e.textContent=i,n(w),M(()=>{St(h,t(d),"svelte-1yqqigs"),ot(e,"title",t(S))}),H("click",e,r),_(C,l),Q(),f()}var oe=D('<li class="ul2col-item"><!> <!></li>'),ne=D('<ul class="ul2col-container"></ul>');function le(C,c){W(c,!1);let y=U(c,"searchString",8),f=U(c,"chords",12),b=U(c,"filters",8),g=I();nt.subscribe(a=>{a&&($(g,a),f(f().sort((r,l)=>{const h=a.get(r.url),d=a.get(l.url);return h&&d?d.lastAccessDateUnix-h.lastAccessDateUnix:h?-1:d?1:r.artist!=l.artist?r.artist.toLowerCase()<l.artist.toLowerCase()?-1:1:r.title.toLowerCase()<l.title.toLowerCase()?-1:1})))});const x=(a,r,l)=>l[a.type]===!1?!1:r.length===0||a.artist.toLowerCase().match(r.toLowerCase())?!0:a.title.toLowerCase().match(r.toLowerCase());tt();var S=Z(),i=F(S);gt(i,f,a=>{var r=ne();R(r,5,f,z,(l,h)=>{var d=Z();const w=Y(()=>t(g).get(t(h).url));var e=F(d);{var s=p=>{var o=oe(),u=v(o);{var k=L=>{var B=yt();M(()=>O(B,`(${t(w).count??""})`)),_(L,B)};K(u,L=>{t(w)&&L(k)})}var T=m(u,2);lt(T,{get chord(){return t(h)},showArtist:!0}),n(o),_(p,o)};K(e,p=>{x(t(h),y(),b())&&p(s)})}_(l,d)}),n(r),_(a,r)}),_(C,S),Q()}const ie=(C,c)=>C<c?-1:C>c?1:0,Vt=(C,c)=>{const y=C.toLowerCase(),f=c.toLowerCase();return ie(y,f)};var ce=D('<li class="navigationBtn svelte-1deg5s8"><a class="navigationLink svelte-1deg5s8"> </a></li>'),ue=D('<li class="ul2col-item"><!></li>'),ve=D('<ul class="ul2col-container"></ul>'),de=D('<tr class="svelte-1deg5s8"><td class="svelte-1deg5s8"> <!></td></tr>'),fe=D('<ol id="indexList" class="navigationBar disable-scrollbars svelte-1deg5s8"></ol> <table id="artistTable"><tbody></tbody></table>',1);function pe(C,c){W(c,!1);let y=U(c,"searchString",8,""),f=U(c,"chords",8),b=U(c,"filters",8);const g=f().reduce((o,u)=>{const k=u.artist;return o[k]||(o[k]=[]),o[k].push(u),o},{}),x=[],S=Object.keys(g).sort(Vt).map((o,u,k)=>{if(u===0||o[0].toLowerCase()!=k[u-1][0].toLowerCase()){const T="anchor_letter_"+o[0];return x.push({letter:o[0],tag:T}),{name:o,tag:T}}return{name:o}});let i=I(),a=I(0),r=I();const l=o=>{if(t(r)){var u=t(r).getBoundingClientRect();if(u.top<20){$(a,20);return}$(a,u.top)}},h=(o,u,k)=>g[o].sort((L,B)=>L.title<B.title?-1:1).filter(L=>{const B=L.type;return k[B]===!1?!1:u.length===0?!0:!!L.title.toLowerCase().match(u.toLowerCase())}),d=(o,u)=>!!o.toLowerCase().match(u.toLowerCase());kt(()=>t(i),()=>{l(t(i))}),wt(),tt();var w=fe(),e=F(w);R(e,5,()=>x,z,(o,u)=>{var k=ce(),T=v(k),L=v(T,!0);M(()=>O(L,t(u).letter.toUpperCase())),n(T),n(k),M(()=>ot(T,"href","#"+t(u).tag)),_(o,k)}),n(e);var s=m(e,2),p=v(s);R(p,5,()=>S,z,(o,u)=>{var k=Z();const T=Y(()=>h(t(u).name,y(),b())),L=Y(()=>d(t(u).name,y()));var B=F(k);{var E=j=>{var J=de();const et=Y(()=>t(L)?g[t(u).name]:t(T));var G=v(J),at=v(G),st=m(at);gt(st,y,P=>{var X=ve();R(X,5,()=>t(et),z,(rt,V)=>{var A=ue(),q=v(A);lt(q,{get chord(){return t(V)}}),n(A),_(rt,A)}),n(X),_(P,X)}),n(G),n(J),M(()=>{ot(G,"id",t(u).tag),O(at,`${t(u).name??""} `)}),_(j,J)};K(B,j=>{(t(L)||t(T).length>0)&&j(E)})}_(o,k)}),n(p),n(s),Xt(s,o=>$(r,o),()=>t(r)),M(()=>ft(e,"--barTop",`${t(a)??""}px`)),At("y",()=>t(i),o=>$(i,o)),_(C,w),Q()}var he=D('<li class="ul2col-item"><!></li>'),ge=D('<div><span> </span> <ul class="ul2col-container"></ul></div>');function me(C,c){W(c,!1);let y=U(c,"searchString",8),f=U(c,"chords",8),b=U(c,"filters",8);const g=a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),x=I({});for(const a of f())a.tags.forEach(l=>{t(x)[l]||dt(x,t(x)[l]=[]),t(x)[l].push(a)});Object.keys(t(x)).forEach(a=>{t(x)[a].sort((r,l)=>{const h=r.artist.toLowerCase(),d=l.artist.toLowerCase(),w=r.title.toLowerCase(),e=l.title.toLowerCase();return h<d?-1:h>d?1:w<e?-1:1})}),tt();var S=Z(),i=F(S);R(i,1,()=>Object.keys(t(x)).sort(Vt),z,(a,r)=>{var l=Z(),h=F(l);{var d=w=>{var e=ge(),s=v(e),p=v(s,!0);M(()=>O(p,g(t(r)))),n(s);var o=m(s,2);R(o,5,()=>t(x)[t(r)],z,(u,k)=>{var T=Z(),L=F(T);{var B=E=>{var j=he(),J=v(j);lt(J,{get chord(){return t(k)},showArtist:!0}),n(j),_(E,j)};K(L,E=>{b()[t(k).type]&&E(B)})}_(u,T)}),n(o),n(e),_(w,e)};K(h,w=>{(y().length===0||t(r).toLowerCase().match(y().toLowerCase()))&&w(d)})}_(a,l)}),_(C,S),Q()}var _e=D('<li class="ul2col-item"><!> <!></li>'),be=D('<ul class="ul2col-container"></ul>');function ke(C,c){W(c,!1);let y=U(c,"searchString",8),f=U(c,"chords",12),b=U(c,"filters",8),g=I();nt.subscribe(a=>{a&&($(g,a),f(f().sort((r,l)=>{const h=a.get(r.url),d=a.get(l.url);return h&&d?h.count!==d.count?d.count-h.count:d.lastAccessDateUnix-h.lastAccessDateUnix:h?-1:d?1:r.artist!=l.artist?r.artist.toLowerCase()<l.artist.toLowerCase()?-1:1:r.title.toLowerCase()<l.title.toLowerCase()?-1:1})))});const x=(a,r,l)=>l[a.type]===!1?!1:r.length===0||a.artist.toLowerCase().match(r.toLowerCase())?!0:a.title.toLowerCase().match(r.toLowerCase());tt();var S=Z(),i=F(S);gt(i,f,a=>{var r=be();R(r,5,f,z,(l,h)=>{var d=Z();const w=Y(()=>t(g).get(t(h).url));var e=F(d);{var s=p=>{var o=_e(),u=v(o);{var k=L=>{var B=yt();M(()=>O(B,`(${t(w).count??""})`)),_(L,B)};K(u,L=>{t(w)&&L(k)})}var T=m(u,2);lt(T,{get chord(){return t(h)},showArtist:!0}),n(o),_(p,o)};K(e,p=>{x(t(h),y(),b())&&p(s)})}_(l,d)}),n(r),_(a,r)}),_(C,S),Q()}var we=D('<span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"><a target="_blank" rel="noopener noreferrer"> </a></span> <span class="col svelte-5k8p3l"> </span>',1),Ce=D('<div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Last Check</span> <span class="col table-head svelte-5k8p3l">Checks</span> <span class="col table-head svelte-5k8p3l">Skipped</span> <span class="col table-head svelte-5k8p3l">Errors</span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span></div> <br> <div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Status</span> <span class="col table-head svelte-5k8p3l">Ref</span> <span class="col table-head svelte-5k8p3l">Host</span> <span class="col table-head svelte-5k8p3l">Data</span> <!></div>',1),ye=D('<p style="color: red"> </p>'),Le=D("<p>Fetching results...</p>"),xe=D('<div role="dialog" class="modal svelte-5k8p3l"><div class="contents svelte-5k8p3l"><h3 class="title-bar svelte-5k8p3l">Urls checks <button>Close</button></h3> <!></div></div>');function Se(C,c){W(c,!1);let y=U(c,"isOpen",8);const f=i=>{const a=new Date(i.timestamp);return a.toDateString()+" "+a.toTimeString()},b=i=>i.fails.sort((a,r)=>a.chord.url<r.chord.url?-1:1);tt();var g=Z(),x=F(g);{var S=i=>{var a=xe(),r=v(a),l=v(r),h=m(v(l));n(l);var d=m(l,2);Yt(d,Ut,w=>{var e=Le();_(w,e)},(w,e)=>{var s=Ce();const p=Y(()=>f(t(e))),o=Y(()=>b(t(e)));var u=F(s),k=m(v(u),8),T=v(k,!0);n(k);var L=m(k,2),B=v(L,!0);n(L);var E=m(L,2),j=v(E,!0);n(E);var J=m(E,2),et=v(J,!0);n(J),n(u);var G=m(u,4),at=m(v(G),8);R(at,1,()=>t(o),z,(st,P)=>{var X=we(),rt=F(X),V=v(rt,!0);n(rt);var A=m(rt,2),q=v(A);n(A);var N=m(A,2),it=v(N),vt=v(it,!0);n(it),n(N);var ut=m(N,2),qt=v(ut,!0);M(()=>O(qt,t(P).error?JSON.stringify(t(P).error):"")),n(ut),M(()=>{O(V,t(P).status),O(q,`${t(P).chord.artist??""} - ${t(P).chord.title??""}`),ot(it,"href",t(P).chord.url),O(vt,new URL(t(P).chord.url).hostname)}),_(st,X)}),n(G),M(()=>{O(T,t(p)),O(B,t(e).nbChecks),O(j,t(e).nbSkipped),O(et,t(e).nbFails)}),_(w,s)},(w,e)=>{var s=ye(),p=v(s);n(s),M(()=>O(p,`Could not retrieve checks: ${t(e).message??""}`)),_(w,s)}),n(r),n(a),H("click",h,function(...w){var e;(e=Rt)==null||e.apply(this,w)}),_(i,a)};K(x,i=>{y()&&i(S)})}_(C,g),Q()}var De=D('<li class="ul2col-separator"> </li>'),Te=D('<!> <li class="ul2col-item"><!></li>',1),Ae=D('<div><h3>Latest additions <button class="pull-right">More...</button></h3> <ul class="ul2col-container"></ul></div>');function Be(C,c){W(c,!1);let y=U(c,"chords",8);const f=Date.now(),b=1e3*3600*24*7,g=b*4,x=[{label:"last week",time:f-b},{label:"one month ago",time:f-g},{label:"two monthes ago",time:f-2*g},{label:"six monthes ago",time:f-6*g},{label:"one year ago",time:f-12*g}],S=y().filter(e=>e.creationDate).sort((e,s)=>s.creationDate-e.creationDate).map((e,s,p)=>{const o={...e};if(s>0){const u=p[s-1];for(const{time:k,label:T}of x)u.creationDate>k&&e.creationDate<k&&(o.dateTag=T)}return o});let i=6,a=I([]);const r=()=>{i+=4,$(a,S.slice(0,i))};ht(()=>{r()}),tt();var l=Ae(),h=v(l),d=m(v(h));n(h);var w=m(h,2);R(w,5,()=>t(a),z,(e,s)=>{var p=Te(),o=F(p);{var u=L=>{var B=De(),E=v(B,!0);n(B),M(()=>O(E,t(s).dateTag)),_(L,B)};K(o,L=>{t(s).dateTag&&L(u)})}var k=m(o,2),T=v(k);lt(T,{get chord(){return t(s)}}),n(k),_(e,p)}),n(w),n(l),H("click",d,()=>r()),_(C,l),Q()}var $e=D("<button>&nbsp↶&nbsp</button>"),Ve=D('<li class="ul2col-item"><!></li>'),qe=D('<div><h3>Random song <span class="pull-right"><!> <button>Get more random songs</button></span></h3> <br> <ul class="ul2col-container"></ul></div>');function Me(C,c){W(c,!1);let y=U(c,"chords",8);const f=6;let b=I([]),g=I([]);const x=()=>{t(b).length>=y().length-f&&$(b,[]);for(let e=0;e<f;e++){let s=-1;for(;s===-1||t(b).includes(s);)s=Math.floor(Math.random()*y().length);t(b).push(s)}$(g,t(b).slice(t(b).length-f).map(e=>y()[e]))},S=()=>{t(b).length<=f||(t(b).splice(t(b).length-f),$(g,t(b).slice(t(b).length-f).map(e=>y()[e])))};ht(()=>{x()}),tt();var i=qe(),a=v(i),r=m(v(a)),l=v(r);{var h=e=>{var s=$e();H("click",s,S),_(e,s)};K(l,e=>{t(b).length>f&&e(h)})}var d=m(l,2);n(r),n(a);var w=m(a,4);R(w,5,()=>t(g),e=>e.url,(e,s)=>{var p=Ve(),o=v(p);lt(o,{get chord(){return t(s)},showArtist:!0}),n(p),_(e,p)}),n(w),n(i),H("click",d,x),_(C,i),Q()}var Ue=D('<button class="filter-control svelte-1gfqv35"><input type="checkbox"> <span></span></button>'),Oe=D('<button class="control svelte-1gfqv35"> </button>'),Ie=D('<!> <h2><span class="pull-right"><button>Check dead links</button> <button>Edit</button></span></h2> <!> <!> <p> </p> <!> <!> <div><h3>All songs</h3> Search an artist, a title or a tag:<input type="text"> <button aria-label="delete search"><i class="fas fa-times-circle"></i></button> <div class="filter-controls-container svelte-1gfqv35"><h4>Filters</h4> <!></div> <h4>View</h4> <div class="view-controls-container svelte-1gfqv35"></div></div> <!>',1);function va(C,c){W(c,!1);const[y,f]=Dt(),b=()=>pt(ct,"$failedVisitCounts",y),g=()=>pt(Pt,"$user",y);Zt.set("Songbook");let x=U(c,"data",8);const{chords:S}=x();let i=I([]);const a=V=>{t(i).push(V),$(i,t(i)),setTimeout(()=>{t(i).shift(),$(i,t(i))},5e3)};ht(async()=>{try{if(b().length&&g()){a({level:"info",header:"Trying to count missed visits while logged out"});for(const V of b())await bt(V);a({level:"success",header:`Counted ${b().length} missed visits`}),Tt(ct,[])}}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}try{const A=(await Ot()).reduce((q,N)=>(q.set(N.url,{...N}),q),new Map);nt.set(A)}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}});let r=I("");const l=[{label:"By artist",component:pe},{label:"By tags",component:me},{label:"By frequency",component:ke},{label:"By access date",component:le}];let h=I(l[0]),d=I({pdf:!0,doc:!0,youtube:!0,link:!0});const w=Object.keys(t(d));tt();var e=Ie(),s=F(e);zt(s,{title:"Song Book",description:"My song book",iconPath:"/songbook.png"});var p=m(s,2),o=v(p),u=v(o);ft(u,"position","relative");var k=m(u,2);ft(k,"position","relative"),n(o),n(p);var T=m(p,2);R(T,1,()=>t(i),z,(V,A)=>{Ht(V,{get item(){return t(A)}})});var L=m(T,2);se(L,{});var B=m(L,2),E=v(B);n(B);var j=m(B,2);Be(j,{chords:S});var J=m(j,2);Me(J,{chords:S});var et=m(J,2),G=m(v(et),2);mt(G);var at=m(G,2),st=m(at,2),P=m(v(st),2);R(P,1,()=>w,z,(V,A)=>{var q=Ue(),N=v(q);mt(N);var it=m(N,2);const vt=Y(()=>Lt($t(t(A))));n(q),M(()=>{ot(q,"aria-label",`filter for ${t(A)??""}`),ot(N,"id",t(A)),St(it,t(vt),"svelte-1gfqv35")}),Nt(N,()=>t(d)[t(A)],ut=>dt(d,t(d)[t(A)]=ut)),H("click",q,()=>{dt(d,t(d)[t(A)]=!t(d)[t(A)]),$(d,t(d))}),_(V,q)}),n(st);var X=m(st,4);R(X,5,()=>l,z,(V,A)=>{var q=Oe(),N=v(q,!0);n(q),M(()=>{xt(q,"selected",t(h)===t(A)),O(N,t(A).label)}),H("click",q,()=>$(h,t(A))),_(V,q)}),n(X),n(et);var rt=m(et,2);Ft(rt,()=>t(h).component,(V,A)=>{A(V,{chords:S,get searchString(){return t(r)},get filters(){return t(d)}})}),M(()=>O(E,`This is a list of ${S.length??""} song chords I have been gathering since I started teaching myself
    the guitar as a teen and that I like to play.`)),H("click",u,()=>jt(Se)),H("click",k,()=>Kt("/songbook/edit")),Et(G,()=>t(r),V=>$(r,V)),H("click",at,()=>$(r,"")),_(C,e),Q(),f()}export{va as component,ua as universal};
