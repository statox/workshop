import{ag as H,B as k,aI as F,h,aJ as I,F as T,ak as _,I as v,E as l,J as L,aK as R,H as E,a as M,as as Y,G as J,aL as S,aq as V,am as $,aM as j,C as q,p as B,i as G,n as K,X as P}from"./index-client.-dvqkx9U.js";import{f as W,r as C,h as p,c as X,i as z}from"./template.vTw7QF-h.js";let n;function Q(){n=void 0}function ee(a){let e=null,t=h;var o;if(h){for(e=l,n===void 0&&(n=L(document.head));n!==null&&(n.nodeType!==8||n.data!==I);)n=T(n);n===null?_(!1):n=v(T(n))}h||(o=document.head.appendChild(H()));try{k(()=>a(o),F)}finally{t&&(_(!0),n=l,v(e))}}let D=!0;function ae(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function U(a,e){return N(a,e)}function te(a,e){R(),e.intro=e.intro??!1;const t=e.target,o=h,y=l;try{for(var r=L(t);r&&(r.nodeType!==8||r.data!==I);)r=T(r);if(!r)throw E;_(!0),v(r),M();const f=N(a,{...e,anchor:r});if(l===null||l.nodeType!==8||l.data!==Y)throw J(),E;return _(!1),f}catch(f){if(f===E)return e.recover===!1&&S(),R(),V(t),_(!1),U(a,e);throw f}finally{_(o),v(y),Q()}}const u=new Map;function N(a,{target:e,anchor:t,props:o={},events:y,context:r,intro:f=!0}){R();var g=new Set,m=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!g.has(d)){g.add(d);var c=z(d);e.addEventListener(d,p,{passive:c});var A=u.get(d);A===void 0?(document.addEventListener(d,p,{passive:c}),u.set(d,1)):u.set(d,A+1)}}};m($(W)),C.add(m);var w=void 0,O=j(()=>{var i=t??e.appendChild(H());return q(()=>{if(r){B({});var s=P;s.c=r}y&&(o.$$events=y),h&&X(i,null),D=f,w=a(i,o)||{},D=!0,h&&(G.nodes_end=l),r&&K()}),()=>{var c;for(var s of g){e.removeEventListener(s,p);var d=u.get(s);--d===0?(document.removeEventListener(s,p),u.delete(s)):u.set(s,d)}C.delete(m),i!==t&&((c=i.parentNode)==null||c.removeChild(i))}});return b.set(w,O),w}let b=new WeakMap;function re(a,e){const t=b.get(a);return t?(b.delete(a),t(e)):Promise.resolve()}export{ee as a,D as b,te as h,U as m,ae as s,re as u};
