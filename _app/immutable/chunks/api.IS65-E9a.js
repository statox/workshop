import{P as e}from"./public.C30nq52-.js";import{g as a}from"./service.ZLFloEuv.js";const l=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,c=o=>{const t=o.url;return t.includes(".doc")?"doc":t.includes(".pdf")?"pdf":t.includes("youtube")?"youtube":"link"},i=async()=>{const o=e+"/chords/getAll";return await fetch(o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then(async t=>{if(t.ok)return t.json();throw new Error(await t.text())})},h=async()=>(await i()).map(t=>({...t,type:c(t)})),f=async o=>{const t=JSON.stringify({chords:o}),r=e+"/chords/updateAll",s=await a();return fetch(r,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:t}).then(async n=>{if(!n.ok)throw new Error(await n.text())})};export{l as a,i as b,h as g,f as u};