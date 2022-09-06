/* 
    Archivo que se encarga de dependiendo de el scroll que el usuario haga en la pagina home cambie el color de fondo.
    Llega a determinados px de scroll el color de la pagina cambia a negro y luego vuelve a pasar a blanco.

    Como dependiendo de el dispositivo en el que visualizemos la pagina habra unos elementos html o otros. Uso mediaquerys de JS para hacer 
    este efecto en el lugar de la pagina que me interese.
*/
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (document.documentElement.scrollTop > 3300 && document.documentElement.scrollTop < 5000) {
            document.querySelector("html").style.backgroundColor = 'black'
            document.querySelector("html").style.color = 'white'
        } else {
            document.querySelector("html").style.backgroundColor = '#e8e8e8'
            document.querySelector("html").style.color = 'black'
        }
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        if (document.documentElement.scrollTop > 4000 && document.documentElement.scrollTop < 6000) {
            document.querySelector("html").style.backgroundColor = 'black'
            document.querySelector("html").style.color = 'white'
        } else {
            document.querySelector("html").style.backgroundColor = '#e8e8e8'
            document.querySelector("html").style.color = 'black'
        }

    } else if (window.matchMedia("(min-width: 600px)").matches) {
        if (document.documentElement.scrollTop > 4120 && document.documentElement.scrollTop < 6000) {
            document.querySelector("html").style.backgroundColor = 'black'
            document.querySelector("html").style.color = 'white'
        } else {
            document.querySelector("html").style.backgroundColor = '#e8e8e8'
            document.querySelector("html").style.color = 'black'
        }
    } else {
        if (document.documentElement.scrollTop > 4400 && document.documentElement.scrollTop < 7000) {
            document.querySelector("html").style.backgroundColor = 'black'
            document.querySelector("html").style.color = 'white'
        } else {
            document.querySelector("html").style.backgroundColor = '#e8e8e8'
            document.querySelector("html").style.color = 'black'
        }
    }
}