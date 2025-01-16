var tt=Object.defineProperty;var Y=s=>{throw TypeError(s)};var et=(s,t,e)=>t in s?tt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>et(s,typeof t!="symbol"?t+"":t,e),st=(s,t,e)=>t.has(s)||Y("Cannot "+e);var p=(s,t,e)=>(st(s,t,"read from private field"),e?e.call(s):t.get(s)),k=(s,t,e)=>t.has(s)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);import"./disclose-version.Bg9kRutz.js";import{B as rt,Y as at,C as nt,aC as I,K as it,h as ot,E as ct,p as J,v as l,n as Q,aX as lt,aH as S,g as i,s as F,aa as dt,w as ft}from"./index-client.-dvqkx9U.js";import{e as h,a as d,t as ht}from"./template.vTw7QF-h.js";import{a as mt}from"./await.Dyj3nK-y.js";import{i as R}from"./if.CoTnXtBM.js";import{e as pt}from"./each.DdOvmIg7.js";import{c as q}from"./svelte-component.DflqVCH5.js";import{s as G}from"./props.DeaVe1rt.js";import{p as w}from"./proxy.DvpFO7AR.js";function B(s,t,...e){var r=s,a=I,n;rt(()=>{a!==(a=t())&&(n&&(it(n),n=null),n=nt(()=>a(r,...e)))},at),ot&&(r=ct)}const ut=Symbol("modal");function vt(s){lt(ut,s)}function gt(s,t){J(t,!0),vt(t.modal);var e=h(),r=l(e);B(r,()=>t.children),d(s,e),Q()}var O,L;const N=class N extends EventTarget{constructor(e,{id:r,component:a,props:n}){super();o(this,"_props");o(this,"result",_t());o(this,"id");o(this,"component");o(this,"modals");k(this,O,S(!1));k(this,L,dt(()=>this.modals.stack.length===0?!1:this.modals.stack[this.modals.stack.length-1].id===this.id&&!this.modals.transitioning));o(this,"close",(...e)=>{var a;if(((a=this.onBeforeClose)==null?void 0:a.call(this))===!1)return!1;const r=e[0];return this.dispatchEvent(new CustomEvent("close",{detail:r})),this.result.resolve(r),!0});o(this,"onBeforeClose");this.id=r||(N._idCounter++).toString(),this.component=a,this._props=n??{},this.modals=e}get exitBeforeEnter(){return i(p(this,O))}set exitBeforeEnter(e){F(p(this,O),w(e))}get isOpen(){return i(p(this,L))}get index(){return this.modals.stack.indexOf(this)}get props(){return{...this._props,id:this.id,index:this.index,isOpen:this.isOpen,close:this.close}}get promise(){return this.result.promise}};O=new WeakMap,L=new WeakMap,o(N,"_idCounter",0);let K=N;function _t(){let s,t;return{promise:new Promise((r,a)=>{s=r,t=a}),resolve:s,reject:t}}var A,M,P;class kt{constructor(){k(this,A,S(w([])));k(this,M,S(null));k(this,P,S(!1));o(this,"open",async(t,e,r)=>{var T;if(this.transitioning)return;if(r!=null&&r.replace&&!((T=this.stack[this.stack.length-1])==null?void 0:T.close()))throw new Error("Current modal prevented closing");this.action="push";const a=this.stack[this.stack.length-1];a!=null&&a.exitBeforeEnter&&(this.transitioning=!0);const n=new K(this,{id:r==null?void 0:r.id,component:t,props:e});return this.stack.push(n),n.addEventListener("close",()=>{n.exitBeforeEnter&&(this.transitioning=!0),this.stack.indexOf(n)>-1&&this.stack.splice(this.stack.indexOf(n),1),this.action="pop"},{once:!0}),n.promise});o(this,"close",(t=1)=>{if(typeof t!="number"||t<1)throw new Error(`amount must be a number greater than 0. Received ${t}`);const e=this.stack.slice(this.stack.length-t).reverse();let r=0;for(const a of e){if(!a.close())break;r++}return t===r});o(this,"closeById",t=>{const e=this.stack.find(r=>r.id===t);return e?e.close():!1});o(this,"closeAll",()=>this.close(this.stack.length))}get stack(){return i(p(this,A))}set stack(t){F(p(this,A),w(t))}get action(){return i(p(this,M))}set action(t){F(p(this,M),w(t))}get transitioning(){return i(p(this,P))}set transitioning(t){F(p(this,P),w(t))}}A=new WeakMap,M=new WeakMap,P=new WeakMap;const x=new kt;var xt=ht("<!> <!>",1);function Rt(s,t){J(t,!0);function e(m){return typeof m.prototype>"u"}var r=xt(),a=l(r);{var n=m=>{var c=h(),j=l(c);B(j,()=>t.backdrop??I,()=>x),d(m,c)};R(a,m=>{x.stack.length>0&&m(n)})}var T=ft(a,2);pt(T,19,()=>x.stack,m=>m.id,(m,c)=>{gt(m,{get modal(){return i(c)},children:(j,Et)=>{var X=h(),U=l(X);{var V=_=>{var E=h(),z=l(E);mt(z,()=>i(c).component(),C=>{var v=h(),f=l(v);B(f,()=>t.loading??I,()=>x),d(C,v)},(C,v)=>{var f=h(),g=l(f);{var y=u=>{var b=h(),H=l(b);B(H,()=>t.modal,()=>({component:i(v).default,props:i(c).props}),()=>x),d(u,b)},D=u=>{var b=h(),H=l(b);q(H,()=>i(v).default,(Z,$)=>{$(Z,G(()=>i(c).props))}),d(u,b)};R(g,u=>{t.modal?u(y):u(D,!1)})}d(C,f)}),d(_,E)},W=_=>{var E=h(),z=l(E);{var C=f=>{var g=h(),y=l(g);B(y,()=>t.modal,()=>({component:i(c).component,props:i(c).props}),()=>x),d(f,g)},v=f=>{var g=h(),y=l(g);q(y,()=>i(c).component,(D,u)=>{u(D,G(()=>i(c).props))}),d(f,g)};R(z,f=>{t.modal?f(C):f(v,!1)})}d(_,E)};R(U,_=>{e(i(c).component)?_(V):_(W,!1)})}d(j,X)},$$slots:{default:!0}})}),d(s,r),Q()}export{Rt as M,x as m,B as s};