function k(){import("data:text/javascript,")}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const l=r=>{r.nav.classList.toggle("nav--dark"),r.body.classList.toggle("body--dark"),r.togglerSun.classList.toggle("toggler-sun--dark"),r.togglerSunBeams.classList.toggle("toggler-sun-beams--dark"),r.textArea.classList.toggle("text-area--dark"),r.footer.classList.toggle("footer--dark")};let f=document.querySelector("body"),m=document.querySelector("nav"),y=document.querySelector(".toggler-sun"),h=document.querySelector(".toggler-sun-beams"),p=document.querySelector("textarea"),S=document.querySelector("footer");const s={body:f,nav:m,togglerSun:y,togglerSunBeams:h,textArea:p,footer:S};let g=matchMedia("(prefers-color-scheme: dark)"),L=g.matches,o=!1;const i=document.querySelector(".toggler");let c=document.querySelector("textarea");c.value=localStorage.getItem("userTexts");g.addEventListener("change",r=>{o&&!r.matches&&(l(s),o=!1),!o&&r.matches&&(l(s),o=!0)});c.addEventListener("change",()=>{localStorage.setItem("userTexts",c.value)});i!=null&&i.addEventListener("click",()=>{l(s),o=!o});L&&(l(s),o=!0);export{k as __vite_legacy_guard};
