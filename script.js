// ========================================
// CORTEZA & CREMA
// script.js
// ========================================

// Animación suave al hacer clic en el menú

const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {

    enlace.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// Cambiar el color del encabezado al hacer scroll

window.addEventListener('scroll', ()=>{

    const header = document.querySelector('.header');

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

// Animación de aparición de las tarjetas

const tarjetas = document.querySelectorAll('.card');

const mostrarTarjetas = () => {

    const alturaPantalla = window.innerHeight;

    tarjetas.forEach(card => {

        const posicion = card.getBoundingClientRect().top;

        if(posicion < alturaPantalla - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener('scroll', mostrarTarjetas);
window.addEventListener('load', mostrarTarjetas);

// Inicialmente ocultas

tarjetas.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

});

// Efecto de escala para las imágenes

const imagenes = document.querySelectorAll('.card img');

imagenes.forEach(img=>{

    img.addEventListener('mouseenter',()=>{

        img.style.transform="scale(1.08)";
        img.style.transition=".4s";

    });

    img.addEventListener('mouseleave',()=>{

        img.style.transform="scale(1)";

    });

});

// Botón flotante de WhatsApp

const whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("mouseenter",()=>{

    whatsapp.style.transform="scale(1.15)";

});

whatsapp.addEventListener("mouseleave",()=>{

    whatsapp.style.transform="scale(1)";

});

// Botón flotante de Instagram

const instagram = document.querySelector(".instagram");

instagram.addEventListener("mouseenter",()=>{

    instagram.style.transform="scale(1.15)";

});

instagram.addEventListener("mouseleave",()=>{

    instagram.style.transform="scale(1)";

});

console.log("✨ Corteza & Crema cargado correctamente."); 