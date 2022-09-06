/* 
    Archivo que cambia el idioma de las 4 paginas.

    Por un lado, una funcion se encarga de que al hacer click en el boton de idiomas
    cambie el atributo id a es-en dependiente de lo que interese al usuario.

    Por otro lado, otra funcion se encarga de dependiende de ese id(es-en) lee un json en ingles o un json en español, y posteriomente lo pinta
    en las etiquetas html en las que corresponda. 

*/
$(document).ready(function () {
    cambiodeiconoidiomas();

    $('.elegiridioma').click(function (e) {
        cambiaridioma(sessionStorage.getItem('idiomaelegido'))
    });
});

function cambiodeiconoidiomas() {
    $('.elegiridioma').click(function (e) {
        e.preventDefault();
        if ($('.elegiridioma').attr("id") == 'es') {
            $('.elegiridioma').html('EN');
            $(".elegiridioma").removeAttr("id");
            $(".elegiridioma").attr("id", "en");
            sessionStorage.setItem('idiomaelegido', $('.elegiridioma').attr('id'));
        } else {
            $('.elegiridioma').html('ES');
            $(".elegiridioma").removeAttr("id");
            $(".elegiridioma").attr("id", "es");
            sessionStorage.setItem('idiomaelegido', $('.elegiridioma').attr('id'));
        }
    });
}
const cambiaridioma = async (idioma) => {
    let requestJson;
    const pathname = window.location.pathname;
    if (pathname == '/ProyectoFinal_SantiagoPalomoGutierrez/public/index.html') {
        requestJson = await fetch(`./languages/${idioma}.json`);
    } else {
        requestJson = await fetch(`../languages/${idioma}.json`);
    }
    const respuestaJson = await requestJson.json();
    const textosCambiar = document.querySelectorAll("[data-section]")
    for (const textoCambiar of textosCambiar) {
        const seccion = textoCambiar.dataset.section;
        const valorr = textoCambiar.dataset.value;
        textoCambiar.innerHTML = respuestaJson[seccion][valorr]
    }


}