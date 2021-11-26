document.addEventListener('DOMContentLoaded', ()=>{
   iniciarImagenes();
   scrollNav();
   navegacionFija();
   menu();
});


function iniciarImagenes(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++ ){
        const img = document.createElement('picture');
        img.innerHTML = `<source srcset ="build/img/thumb/${i}.avif" type = "image/avif">
        <source srcset ="build/img/thumb/${i}.webp" type = "image/webp">  
        <img loading = "Lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria"> `;
        img.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(img);
    }
  
}
function mostrarImagen(index){
    
    const cerrar = document.createElement('DIV'); //contiene el boton
    const x = document.createElement('P');
    const body = document.querySelector('body'); 
    x.textContent = "X";
    cerrar.appendChild(x)
    x.onclick = function(){
        body.classList.remove('fijar-body'); //no poder dar scroll
        overlay.remove();
    }
   
    const img = document.createElement('picture');
        img.innerHTML = `<source srcset ="build/img/grande/${index}.avif" type = "image/avif">
        <source srcset ="build/img/grande/${index}.webp" type = "image/webp">  
        <img loading = "Lazy" width="200" height="300" src="build/img/grande/${index}.jpg" alt="imagen galeria"> `;
       cerrar.classList.add('cerrarImagen');
        const overlay = document.createElement('DIV');
        overlay.appendChild(cerrar);
        overlay.appendChild(img);
        overlay.classList.add('overlay');
     overlay.onclick = function(){
         overlay.remove();
         body.classList.remove('fijar-body');
     }
        //mostrar la imagen en pantalla
        body.appendChild(overlay);
        body.classList.add('fijar-body');

    }

function scrollNav(){
   const enlaces = document.querySelectorAll('.navegacion-principal a');
   enlaces.forEach(enlace =>{
       enlace.addEventListener('click', e =>{
           e.preventDefault();

           const seccion = document.querySelector(e.target.attributes.href.value) //que nos traiga lo que dice el enlace
           //API para que el scroll no se tan golpeado
           seccion.scrollIntoView(
               {
                   behavior: 'smooth'
                }
           );
       });
   });
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const elementoObservar = document.querySelector('.sobre-festival')
    const body = document.querySelector('body'); //evitar que cuando se fije la barra no envie todo hacia abajo
    
    
    //Nueva forma
    //evento de scroll a la ventana para que detecte cuando se de scroll
    window.addEventListener('scroll', ()=>{

        /* getBoundingClientRect() es una funcion que nos da info sobre un
        elemento que se va aobservar y nos dice cuentos pixeles nos hemos alejado 
        por eso se usa top para deetctar por cuantos pixeles nos hemso pasado */
        if( elementoObservar.getBoundingClientRect().top < 0){
        barra.classList.add('fijo');
        body.classList.add('body-scroll');
        }
        else{
        barra.classList.remove('fijo');
        body.classList.remove('body-scroll');
        }
    });
    /* vieja forma
    const observer = new IntersectionObserver(
        //Entries es para saber la info del elemento a observar
               function(entries){
                   if(entries[0].isIntersecting) //si el elemento esta visible
                   barra.classList.remove('fijo');
                   else
                   barra.classList.add('fijo');
               }
    );
   const observado = document.querySelector('.sobre-festival')
    observer.observe(observado); //elemento que se va a observar
    */
}

//Menu en celulares
function menu(){
 const menu = document.querySelector('.mobile-menu');
 const nav = document.querySelector('.navegacion-principal');
 const nave = document.querySelectorAll('.navegacion-principal a');
 menu.addEventListener('click', ()=>{
     nav.classList.toggle('mostrar');
    
 });

nave.forEach(enlace =>{
 enlace.addEventListener('click',()=>{
    nav.classList.remove('mostrar');
    
 })
});
}