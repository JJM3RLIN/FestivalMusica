function iniciarImagenes(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`<source srcset ="build/img/thumb/${t}.avif" type = "image/avif">\n        <source srcset ="build/img/thumb/${t}.webp" type = "image/webp">  \n        <img loading = "Lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria"> `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("DIV"),n=document.createElement("P"),i=document.querySelector("body");n.textContent="X",t.appendChild(n),n.onclick=function(){i.classList.remove("fijar-body"),c.remove()};const a=document.createElement("picture");a.innerHTML=`<source srcset ="build/img/grande/${e}.avif" type = "image/avif">\n        <source srcset ="build/img/grande/${e}.webp" type = "image/webp">  \n        <img loading = "Lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria"> `,t.classList.add("cerrarImagen");const c=document.createElement("DIV");c.appendChild(t),c.appendChild(a),c.classList.add("overlay"),c.onclick=function(){c.remove(),i.classList.remove("fijar-body")},i.appendChild(c),i.classList.add("fijar-body")}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})})})}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",()=>{t.getBoundingClientRect().top<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))})}function menu(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".navegacion-principal"),n=document.querySelectorAll(".navegacion-principal a");e.addEventListener("click",()=>{t.classList.toggle("mostrar")}),n.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("mostrar")})})}document.addEventListener("DOMContentLoaded",()=>{iniciarImagenes(),scrollNav(),navegacionFija(),menu()});
//# sourceMappingURL=main.js.map