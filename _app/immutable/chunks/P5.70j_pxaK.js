import{_ as b}from"./preload-helper.hlDPvxQM.js";import{s as D,f as S,g as E,h as k,d as m,j as o,i as w,a4 as P,r as _,Q as j,o as p}from"./scheduler.iIK8JZF-.js";import{S as C,i as I}from"./index.4WrFP_y-.js";function O(r){let e,n,s;return{c(){e=S("div"),this.h()},l(a){e=E(a,"DIV",{style:!0,class:!0}),k(e).forEach(m),this.h()},h(){o(e,"style",r[0]),o(e,"class","m-0")},m(a,l){w(a,e,l),n||(s=P(r[1].call(null,e)),n=!0)},p(a,[l]){l&1&&o(e,"style",a[0])},i:_,o:_,d(a){a&&m(e),n=!1,s()}}}function V(r,e){return e.forEach(([n,s])=>r[n]=s),r}function q(r,e,n){let{target:s=void 0}=e,{sketch:a=void 0}=e,{parentDivStyle:l="display: block;"}=e,{debug:c=!1}=e,f;const u=j(),d={ref(){u("ref",s)},instance(){u("instance",f)}};function g(t){return n(2,s=t),{destroy(){n(2,s=void 0)}}}return p(async()=>{const t=await b(()=>import("./p5.min.ZBgcNSWM.js").then(i=>i.p),__vite__mapDeps([0,1])),{default:y}=t,h=Object.entries(t).filter(([i,v])=>v instanceof Function&&i[0]!=="_"&&i!=="default");c&&console.log("available p5 native classes",h),f=new y(i=>(i=V(i,h),c&&console.log("p5 instance",i),window._p5Instance=i,a(i)),s),d.ref(),d.instance()}),r.$$set=t=>{"target"in t&&n(2,s=t.target),"sketch"in t&&n(3,a=t.sketch),"parentDivStyle"in t&&n(0,l=t.parentDivStyle),"debug"in t&&n(4,c=t.debug)},[l,g,s,a,c]}class M extends C{constructor(e){super(),I(this,e,q,O,D,{target:2,sketch:3,parentDivStyle:0,debug:4})}}export{M as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/p5.min.ZBgcNSWM.js","_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}