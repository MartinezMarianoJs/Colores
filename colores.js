"use strict"
const open = document.getElementById("open");
const container = document.querySelector(".parte1");
const container2 = document.querySelector(".parte2");
const open2= document.querySelector(".circle");
const body= document.querySelector("body")

open.addEventListener("click", () => {
    container.classList.add("show-nav")
    container2.classList.add("ver")
    open2.classList.add("end")
    setTimeout(() => {
    body.classList.add("active")
    }, 2000);
});

// IntersectionObserver
const imagenes = [];
for (let i = 1; i <= 6; i++) {
  imagenes.push(document.getElementById(`imagen${i}`));
}

const cargarImagen = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    } else {
      entrada.target.classList.remove('visible');
    }
  });
};
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});


// Colores
imagenes.forEach((imagen) =>{
    observador.observe(imagen);
    imagen.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    imagen.addEventListener("drop",(e)=>{
        imagen.style.background=`${e.dataTransfer.getData("id")}`
    })
    
} )
const colores=document.querySelectorAll(".colores");
colores.forEach((coloresTipo)=>{
    coloresTipo.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("id",e.target.id)
    })
})

