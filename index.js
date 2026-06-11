import{a as q,S as M,i}from"./assets/vendor-B0XWlCgv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const B="56126477-561bb58c17017209cc05699d2",R="https://pixabay.com/api/",d=15;async function f(t,s=1){const n={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:d};return(await q.get(R,{params:n})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new M(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const s=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:o,views:r,comments:P,downloads:v})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${e}"
          />
        </a>
        <ul class="gallery-info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${o}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${r}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${P}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${v}</span>
          </li>
        </ul>
      </li>`).join("");m.insertAdjacentHTML("beforeend",s),$.refresh()}function E(){m.innerHTML=""}function y(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}function O(){g.classList.remove("is-hidden")}function u(){g.classList.add("is-hidden")}const b=document.querySelector(".form"),x=document.querySelector(".load-more");let c="",l=1,w=0;b.addEventListener("submit",A);x.addEventListener("click",_);async function A(t){t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}c=s,l=1,E(),u(),y();try{const n=await f(c,l);if(w=n.totalHits,n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n.hits),S()}catch{i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{L(),b.reset()}}async function _(){l+=1,u(),y();try{const t=await f(c,l);h(t.hits),S(),D()}catch{i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{L()}}function S(){const t=Math.ceil(w/d);l>=t?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):O()}function D(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
