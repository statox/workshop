import{e as f}from"./index-client.-dvqkx9U.js";import{b as _}from"./template.vTw7QF-h.js";import{i as d}from"./proxy.DvpFO7AR.js";function l(e,u,r){if(e.multiple)return c(e,u);for(var n of e.options){var t=a(n);if(d(t,u)){n.selected=!0;return}}(!r||u!==void 0)&&(e.selectedIndex=-1)}function s(e,u){f(()=>{var r=new MutationObserver(()=>{var n=e.__value;l(e,n)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function q(e,u,r=u){var n=!0;_(e,"change",t=>{var i=t?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),a);else{var v=e.querySelector(i)??e.querySelector("option:not([disabled])");o=v&&a(v)}r(o)}),f(()=>{var t=u();if(l(e,t,n),n&&t===void 0){var i=e.querySelector(":checked");i!==null&&(t=a(i),r(t))}e.__value=t,n=!1}),s(e)}function c(e,u){for(var r of e.options)r.selected=~u.indexOf(a(r))}function a(e){return"__value"in e?e.__value:e.value}export{q as b};