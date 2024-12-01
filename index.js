import{i as n,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const o="47335569-2cc921a6a7f6f320b70df2266",r="https://pixabay.com/api/",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e.message))}function u(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:g})=>`<li class="img-item">
        <a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src=${o} 
			alt="${s}" width=360 height=152
			/>
	</a>
        <ul class="list-text">
          <li class="item-text">
            <h2 class="title-img">Likes</h2>
            <p class="text-info">${e}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Views</h2>
            <p class="text-info">${t}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Comments</h2>
            <p class="text-info">${a}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Downloads</h2>
            <p class="text-info">${g}</p>
          </li>
        </ul>
      </li>`).join("")}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBtZbRDcIgEIaPVh/65giO4Apuopu4iW7gCI6iG+iDCQG06B81KnJwtPVPmjTh7v+A4wiKGGmtp1VVLUigtm03TdMcYmOKM6/r8Y7IT0kkdbhe3ZyD/Jhbe9lb647ns53l4hGDWOQgd1DzIkhXcxGkr3kSMpQ5C+HMMWiM26YK94rx3k84yB3gvDFmFSYj6QGPF+698vg4POFdcbNTSp1wtvGPnvg0efcJUe78swAIiSGkxDwLiEFKzKERCQQjrd2yrulpTrJrgQQrgB7bota4c/DhP3stSAHhnnOF7wSIFTRW+E6A1GkJIWGjfYlrFiRJOzmM+WzCbEeWKuo3FCTp0xciyu8KKcorheTi//6qUJSY2RDvohvnQxs7mUqpYAAAAABJRU5ErkJggg==",h=document.querySelector(".form-search"),A=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";h.addEventListener("submit",f);function f(i){i.preventDefault(),l.style.display="block";const o=i.target.elements.text.value.trim();if(!o){n.show({message:"Please fill in the search field.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:c,position:"topRight",progressBarColor:"#FFBEBE"}),l.style.display="none";return}m(o).then(r=>{l.style.display="none",r.hits.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:c,position:"topRight",progressBarColor:"#FFBEBE"});const s=u(r.hits);A.innerHTML=s}).then(r=>{new p(".gallery a",{captions:!0,captionDelay:"250",captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0,captionClass:"captions",className:"simpl-lightbox"}).refresh()}).catch(r=>{n.show({message:"The site is not responding or not found",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:c,position:"topRight",progressBarColor:"#FFBEBE"})}).finally(()=>i.target.reset())}
//# sourceMappingURL=index.js.map
