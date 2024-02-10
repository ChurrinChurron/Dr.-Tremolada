let nav = document.querySelector(".nav__movil");
let navBtn = document.querySelector("#navBtn");
let navBtnClose = document.querySelector("#cerrBtn");
let video = document.querySelector("#video");
let cajaVideo = document.querySelector("#cajaVideo");
let playVideo = document.querySelector("#iconoVideo");
let imgHeader = document.querySelector("#imgHeader");

// Función nav móvil

navBtn.addEventListener("click", () => {
    nav.classList.add("abrir");
})

navBtnClose.addEventListener("click", () => {
    nav.classList.remove("abrir");
})

// Función reproducir y pausar video

video.addEventListener("click", () => {
    
    if(video.paused) {

        video.play();
    
        playVideo.style.visibility = "hidden";

    } else {

        video.pause();
        
        playVideo.style.visibility = "visible";
    }
})

// Función imagenes del header principal

// let numeros = [1,2,3,4,5,6,7,8,9,10];

// setInterval(function() {
//     let random = Math.floor(Math.random() * 10);
//     imgHeader.src = `assets/home/${numeros[random]}.webp`;
// }, 5000)

// Cosas que faltan:

// Funcionalidad a la transision de colores del nav
// Funcionalidad a las imagenes del header del index

// En responsive el slider tiene que mostrar el texto y la imagen tiene que ser mas grande, en escritorio vuelve a su funcionalidad