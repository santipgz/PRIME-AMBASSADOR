/* 
    Archivo que se encarga de mostrar el preloader de la aplicacion al hacer a cualquiera de sus 4 paginas
*/
$(document).ready(function () {
    let preloadTime;
    preloader();

    function preloader() {
        preloadTime = setTimeout(showPage, 2000);
    }

    function showPage() {
        $("#preloader").fadeOut("slow");
    }
});