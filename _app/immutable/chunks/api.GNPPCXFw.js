import{P as n}from"./public.C30nq52-.js";import{g as c}from"./service.JxV0fwjW.js";const l=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,i=o=>{const t=o.url;return t.includes(".doc")?"doc":t.includes(".pdf")?"pdf":t.includes("youtube")?"youtube":"link"},d=async()=>{const o=n+"/chords/getAll";return fetch(o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then(async t=>{if(t.ok)return t.json();throw new Error(await t.text())})},y=async()=>(await d()).map(t=>({...t,type:i(t)})),f=async()=>{const o=n+"/chords/getLinksVisitsCount";return fetch(o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then(async t=>{if(t.ok)return t.json();throw new Error(await t.text())})},w=async()=>{const o=n+"/chords/checkLinks";return fetch(o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then(async t=>{if(t.ok)return t.json();throw new Error(await t.text())})},p=async o=>{const t=JSON.stringify({chords:o}),r=n+"/chords/updateAll",s=await c();return fetch(r,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:t}).then(async e=>{if(!e.ok)throw new Error(await e.text())})},k=async o=>{const r=JSON.stringify({url:o}),s=n+"/chords/addLinkVisit",e=await c();return fetch(s,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:r}).then(async a=>{if(!a.ok)throw new Error(await a.text())})};export{l as a,w as b,f as c,d,p as e,y as g,k as u};
