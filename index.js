import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(o){const s="47335569-2cc921a6a7f6f320b70df2266",r="https://pixabay.com/api/",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{console.log(e.message)})}function p(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:n})=>`<li class="img-item">
        <a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src=${s} 
			alt="${i}" width=360 height=152
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
            <p class="text-info">${n}</p>
          </li>
        </ul>
      </li>`).join("")}const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBtZbRDcIgEIaPVh/65giO4Apuopu4iW7gCI6iG+iDCQG06B81KnJwtPVPmjTh7v+A4wiKGGmtp1VVLUigtm03TdMcYmOKM6/r8Y7IT0kkdbhe3ZyD/Jhbe9lb647ns53l4hGDWOQgd1DzIkhXcxGkr3kSMpQ5C+HMMWiM26YK94rx3k84yB3gvDFmFSYj6QGPF+698vg4POFdcbNTSp1wtvGPnvg0efcJUe78swAIiSGkxDwLiEFKzKERCQQjrd2yrulpTrJrgQQrgB7bota4c/DhP3stSAHhnnOF7wSIFTRW+E6A1GkJIWGjfYlrFiRJOzmM+WzCbEeWKuo3FCTp0xciyu8KKcorheTi//6qUJSY2RDvohvnQxs7mUqpYAAAAABJRU5ErkJggg==",A=document.querySelector(".form-search"),h=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";A.addEventListener("submit",f);function f(o){o.preventDefault(),l.style.display="block";const s=o.target.elements.text.value.trim();if(!s){l.style.display="none";return}g(s).then(r=>{l.style.display="none",r.hits.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:u,position:"topRight",progressBarColor:"#FFBEBE"});const i=p(r.hits);h.innerHTML=i}).then(r=>{new m(".gallery a",{captions:!0,captionDelay:"250",captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0,captionClass:"captions",className:"simpl-lightbox"}).refresh()}).catch(r=>{console.log(r.message)}).finally(()=>o.target.reset())}
//# sourceMappingURL=index.js.map
