import{P as i}from"./public.C30nq52-.js";import{g as c}from"./service.JxV0fwjW.js";const f=async o=>{const{path:r}=o;if(!r.length||r[0]!=="/")throw new Error("Malformed path");const t=new Headers;if(t.set("Content-Type","application/json"),o.authorize){const s=await c();t.set("Authorization",`Bearer ${s}`)}const e=await fetch(`${i}${r}`,{method:"GET",mode:"cors",headers:t});if(e.status<200||e.status>=300)throw new Error(await e.text());return e.json()},p=async o=>{const r=await c(),{path:t,data:e}=o;if(!t.length||t[0]!=="/")throw new Error("Malformed path");const s=JSON.stringify(e),a=await fetch(`${i}${t}`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:s});if(a.status<200||a.status>=300)throw new Error(await a.text());try{return await a.json()}catch(n){if(n instanceof SyntaxError)return Promise.resolve();throw n}};export{p as a,f as r};
