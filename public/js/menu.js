/* 
    Archivo que se encarga del menu nav de la aplicacion
*/
let hamburguer = document.querySelector(".hamburguer");
let navmenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navmenu.classList.remove("active");
}))


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrollmenu", window.scrollY > 0);
})