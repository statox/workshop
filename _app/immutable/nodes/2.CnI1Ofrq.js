import"../chunks/disclose-version.Bg9kRutz.js";import{i as W}from"../chunks/legacy.Bspvssc3.js";import{k as y,v,n as w,ag as n,ah as t,w as g,g as o,m as u}from"../chunks/index-client.CflbJY84.js";import{s as c}from"../chunks/render.D9j6VzsR.js";import{e as b,i as _}from"../chunks/each.CJUKzImm.js";import{n as B,e as C,a as p,t as M}from"../chunks/template.BGksMNs9.js";import{g as H}from"../chunks/entry.DxwPPfpL.js";import{p as P}from"../chunks/Main.svelte_svelte_type_style_lang.Cgidh24I.js";var F=(a,e)=>H(o(e).link),I=M('<button class="app svelte-itnz50"><h3> </h3> <div class="description svelte-itnz50"> </div></button>'),R=M('<h2> </h2> <div class="container svelte-itnz50"></div>',1);function U(a,e){y(e,!0);var l=C(),A=v(l);b(A,17,()=>e.sections,_,(x,d)=>{var h=R(),s=v(h),S=n(s,!0);t(s);var k=g(s,2);b(k,21,()=>o(d).apps,_,(T,r)=>{var i=I();i.__click=[F,r];var m=n(i),z=n(m,!0);t(m);var f=g(m,2),N=n(f,!0);t(f),t(i),u(()=>{c(z,o(r).name),c(N,o(r).description)}),p(T,i)}),t(k),u(()=>c(S,o(d).name)),p(x,h)}),p(a,l),w()}B(["click"]);const j={name:"Music",apps:[{name:"Song Book",description:"The list of my guitar tablatures",link:"/songbook"},{name:"Metronome",description:"Never miss a beat",link:"/metronome"},{name:"Scales",description:"A tool to visualize music scales and common chords progressions",link:"/scales"},{name:"Chord Wheel",description:"A tool to find the key of a song and work with scale degrees",link:"/chordwheel"},{name:"Tap Tempo",description:"Find a tempo by tapping it on the screen or the keyboard",link:"/taptempo"}]},q={name:"Utils",apps:[{name:"Notes",description:"A list of notes for stuff I keep forgetting",link:"/notes"},{name:"Clipboard",description:"My universal clipboard",link:"/clipboard"},{name:"Reactor",description:"My collection of memes and various reaction images",link:"/reactor"},{name:"Web Watcher",description:"Monitor pages on the web and notify me when they change",link:"/webwatcher"},{name:"About",description:"The about section of this website",link:"/about"}]},D={name:"Perso",apps:[{name:"Browser home",description:"A page meant to be the default page of my browsers. Holding my important and often visited links",link:"/browser-home"},{name:"Home tracker",description:"My homemade home monitoring system",link:"/home-tracker"},{name:"Personal tracker",description:"Tracking me data",link:"/personal-tracker"}]},E=[D,q,j];function Y(a,e){y(e,!1),P.set("My Apps"),W(),U(a,{sections:E}),w()}export{Y as component};
