import{A as u}from"./assets/vendor-8f98089f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();function f(){const t=document.querySelector("#header_darkmode-toggle");localStorage.getItem("darkMode")==="on"&&(document.body.classList.add("dark-mode-on"),t.checked=!0),t.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-mode-on"),localStorage.setItem("darkMode","on")):(document.body.classList.remove("dark-mode-on"),localStorage.removeItem("darkMode"))})}function h(){const t=document.querySelector(".header_open-menu-btn"),s=document.querySelector(".header_mobile-menu"),c=document.querySelectorAll(".burger-line");function i(){s.classList.remove("is-open"),c[0].classList.remove("first"),c[1].classList.remove("middle"),c[2].classList.remove("last"),document.body.classList.remove("header_overflow-hidden")}t.addEventListener("click",function(){s.classList.toggle("is-open"),c[0].classList.toggle("first"),c[1].classList.toggle("middle"),c[2].classList.toggle("last"),document.body.classList.toggle("header_overflow-hidden")}),s.addEventListener("click",function(e){if(e.target.classList.contains("header_mobile-menu_nav-link")){e.preventDefault();const o=e.target.getAttribute("href"),r=document.querySelector(o);r&&(i(),window.scrollTo({top:r.offsetTop,behavior:"smooth"}))}})}const b=()=>{const t=document.querySelector(".faq-list");new u(t,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"}).open(0)},L="/goit-js-project-05/assets/project1(1x)-43afbbe6.jpg",v="/goit-js-project-05/assets/project1(2x)-2a4c68e5.jpg",y="/goit-js-project-05/assets/project2(1x)-77f79402.jpg",x="/goit-js-project-05/assets/project2(2x)-bada901a.jpg",S="/goit-js-project-05/assets/project3(1x)-df0c6379.jpg",k="/goit-js-project-05/assets/project3(2x)-a4fbbfa3.jpg",w="/goit-js-project-05/assets/project4(1x)-e82f9cd1.jpg",l="/goit-js-project-05/assets/project4(2x)-b689df65.jpg",_="/goit-js-project-05/assets/project5(1x)-3e14a2ca.jpg",q="/goit-js-project-05/assets/project5(2x)-0873508f.jpg",M="/goit-js-project-05/assets/project6(1x)-cdca5a6f.jpg",A="/goit-js-project-05/assets/project6(2x)-df8a8e2b.jpg",$="/goit-js-project-05/assets/project7(1x)-f8725c0c.jpg",E="/goit-js-project-05/assets/project7(2x)-c8d946cb.jpg",O="/goit-js-project-05/assets/project8(1x)-e49027aa.jpg",T="/goit-js-project-05/assets/project9(1x)-4eede308.jpg",C="/goit-js-project-05/assets/project9(2x)-a88e29ce.jpg",I="/goit-js-project-05/assets/project10(1x)-f99ae748.jpg",P="/goit-js-project-05/assets/project10(2x)-9049d84e.jpg",N="/goit-js-project-05/assets/symbol-defs-346f1ca9.svg",n=[{name:"wallet webservice",imageSmall:L,imageLarge:v,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"green harvest webservice",imageSmall:y,imageLarge:x,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"English excellence website",imageSmall:S,imageLarge:k,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"power pulse webservice",imageSmall:w,imageLarge:l,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"mimino website",imageSmall:_,imageLarge:q,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"vyshyvanka vibes Landing Page",imageSmall:M,imageLarge:A,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"chego jewelry website",imageSmall:$,imageLarge:E,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"energy flow webservice",imageSmall:O,imageLarge:l,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"fruitbox online store",imageSmall:T,imageLarge:C,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"starlight studio landing page",imageSmall:I,imageLarge:P,link:"https://github.com/tsaigetsu/goit-js-project-05"}],p=document.querySelector(".projects-list"),j=document.querySelector(".load-more-btn");let a=0;const g=3;function B(t){return`<li>
  <img class="my-project-img" src="${t.imageSmall}" srcset ="${t.imageSmall} 1x, ${t.imageLarge} 2x" alt="${t.name}">
<p class="project-tech">React, JavaScript, Node JS, Git</p>
<div class="my-project-name-and-link-container">
<h3 class="project-name">${t.name}</h3>
<div class="my-project-link-container">
<a class="my-project-link" href="${t.link}">Visit<svg class="icon-arrow" width="24" height="24">
    <use href="${N}#icon-greenArrow"></use>
  </svg></a>
  </div>
  </div>
</li>`}function d(t,s,c){return t.slice(s,s+c).map(B).join("")}p.insertAdjacentHTML("beforeend",d(n));j.addEventListener("click",m);function m(){const t=d(n,a,g);p.insertAdjacentHTML("beforeend",t),a+=g,a>=n.length&&(j.style.display="none")}f();h();m();b();
//# sourceMappingURL=commonHelpers.js.map
