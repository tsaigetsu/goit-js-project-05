import{A as w,S as L,N as x,K as S,a as k,i as _}from"./assets/vendor-c34d1063.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function E(){const e=document.querySelector("#header_darkmode-toggle");localStorage.getItem("darkMode")==="on"&&(document.body.classList.add("dark-mode-on"),e.checked=!0),e.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-mode-on"),localStorage.setItem("darkMode","on")):(document.body.classList.remove("dark-mode-on"),localStorage.removeItem("darkMode"))})}function q(){const e=document.querySelector(".header_open-menu-btn"),t=document.querySelector(".header_mobile-menu"),o=document.querySelectorAll(".burger-line");function n(){t.classList.remove("is-open"),o[0].classList.remove("first"),o[1].classList.remove("middle"),o[2].classList.remove("last"),document.body.classList.remove("header_overflow-hidden")}e.addEventListener("click",function(){t.classList.toggle("is-open"),o[0].classList.toggle("first"),o[1].classList.toggle("middle"),o[2].classList.toggle("last"),document.body.classList.toggle("header_overflow-hidden")}),t.addEventListener("click",function(s){if(s.target.classList.contains("header_mobile-menu_nav-link")){s.preventDefault();const i=s.target.getAttribute("href"),r=document.querySelector(i);r&&(n(),window.scrollTo({top:r.offsetTop,behavior:"smooth"}))}})}const M="/goit-js-project-05/assets/project1(1x)-43afbbe6.jpg",T="/goit-js-project-05/assets/project1(2x)-2a4c68e5.jpg",B="/goit-js-project-05/assets/project2(1x)-77f79402.jpg",$="/goit-js-project-05/assets/project2(2x)-bada901a.jpg",A="/goit-js-project-05/assets/project3(1x)-df0c6379.jpg",N="/goit-js-project-05/assets/project3(2x)-a4fbbfa3.jpg",P="/goit-js-project-05/assets/project4(1x)-e82f9cd1.jpg",p="/goit-js-project-05/assets/project4(2x)-b689df65.jpg",C="/goit-js-project-05/assets/project5(1x)-3e14a2ca.jpg",I="/goit-js-project-05/assets/project5(2x)-0873508f.jpg",O="/goit-js-project-05/assets/project6(1x)-cdca5a6f.jpg",V="/goit-js-project-05/assets/project6(2x)-df8a8e2b.jpg",H="/goit-js-project-05/assets/project7(1x)-f8725c0c.jpg",F="/goit-js-project-05/assets/project7(2x)-c8d946cb.jpg",z="/goit-js-project-05/assets/project8(1x)-e49027aa.jpg",D="/goit-js-project-05/assets/project9(1x)-4eede308.jpg",J="/goit-js-project-05/assets/project9(2x)-a88e29ce.jpg",K="/goit-js-project-05/assets/project10(1x)-f99ae748.jpg",R="/goit-js-project-05/assets/project10(2x)-9049d84e.jpg",G="/goit-js-project-05/assets/symbol-defs-d78b9cb7.svg",d=[{name:"wallet webservice",imageSmall:M,imageLarge:T,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"green harvest webservice",imageSmall:B,imageLarge:$,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"English excellence website",imageSmall:A,imageLarge:N,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"power pulse webservice",imageSmall:P,imageLarge:p,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"mimino website",imageSmall:C,imageLarge:I,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"vyshyvanka vibes Landing Page",imageSmall:O,imageLarge:V,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"chego jewelry website",imageSmall:H,imageLarge:F,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"energy flow webservice",imageSmall:z,imageLarge:p,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"fruitbox online store",imageSmall:D,imageLarge:J,link:"https://github.com/tsaigetsu/goit-js-project-05"},{name:"starlight studio landing page",imageSmall:K,imageLarge:R,link:"https://github.com/tsaigetsu/goit-js-project-05"}],u=document.querySelector(".projects-list"),j=document.querySelector(".load-more-btn");let l=0;const g=3;function Q(e){return`<li>
  <img class="my-project-img" src="${e.imageSmall}" srcset ="${e.imageSmall} 1x, ${e.imageLarge} 2x" alt="${e.name}">
<p class="project-tech">React, JavaScript, Node JS, Git</p>
<div class="my-project-name-and-link-container">
<h3 class="project-name">${e.name}</h3>
<div class="my-project-link-container">
<a class="my-project-link" href="${e.link}" target="blank">Visit<svg class="icon-arrow" width="24" height="24">
    <use href="${G}#icon-greenArrow"></use>
  </svg></a>
  </div>
  </div>
</li>`}function f(e,t,o){return e.slice(t,t+o).map(Q).join("")}u.insertAdjacentHTML("beforeend",f(d));j.addEventListener("click",h);function h(){const e=f(d,l,g);u.insertAdjacentHTML("beforeend",e),l+=g,l>=d.length&&(j.style.display="none")}const U=()=>{const e=document.querySelector(".faq-list");new w(e,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"}).open(0)},c=new L(".reviews_swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button_next",prevEl:".button_prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[x,S,k],slidesPerView:2,spaceBetween:32,breakpoints:{320:{slidesPerView:1,spaceBetween:32},768:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},effect:"creative",creativeEffect:{prev:{translate:[0,0,-400]},next:{translate:["100%",0,0]}}});function m(e){_.error({title:"Error",message:e})}function W(e){return`<li class="swiper-slide review-list-item" id="list-item-id">
          <p class="review-section-text">${e.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${e.avatar_url}"
        class="review-section-img"
        src="${e.avatar_url}"
        alt="Avatar"
        width="40"
        height="40"/>
            <h3 class="review-section-title">${e.author}</h3>
          </div>
        </li>`}function X(e){return e.map(W).join("")}function Y(e){const t=document.getElementById("reviews_list"),o=X(e);t.innerHTML=o,c.update()}async function Z(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();t&&t.length>0?Y(t):(m("No reviews found"),document.getElementById("reviews_list").innerHTML="<p>Not found</p>")}catch{m("An error occurred while fetching reviews"),document.getElementById("reviews_list").innerHTML="<p>Not found</p>"}}function v(){const e=document.querySelector(".button_prev"),t=document.querySelector(".button_next");c.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),c.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}c.on("slideChange",v);c.on("init",v);c.init();document.addEventListener("DOMContentLoaded",Z);function ee(){const e=document.querySelector(".workTogether-form"),t=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-content"),n=document.querySelector(".close-btn"),s=document.body;e.addEventListener("submit",async function(r){r.preventDefault();const b=e.email.value,y=e.message.value;try{const a=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:b,comment:y})});a.ok?(t.style.visibility="visible",t.style.pointerEvents="auto",o.style.visibility="visible",o.style.pointerEvents="auto",s.classList.add("header_overflow-hidden"),e.reset()):alert(`Error: ${a.status}`)}catch{alert("Failed to send the message. Please try again.")}});const i=function(){t.style.visibility="hidden",t.style.pointerEvents="none",o.style.visibility="hidden",o.style.visibility="none",s.classList.remove("header_overflow-hidden")};n.addEventListener("click",i),window.addEventListener("click",function(r){r.target===t&&i()}),document.addEventListener("keydown",function(r){r.key==="Escape"&&i()})}E();q();h();U();ee();
//# sourceMappingURL=commonHelpers.js.map
