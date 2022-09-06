/*
    Archivo que lee de un xml las correas de los relojes y las pinta en hombre y mujer mediante ajax y jquery.
    Cuando carga la pagina se muestran todas las correas. 
    Depende del boton que le de el usuario. Gold o Silver. Se muestran las correas gold y silver
*/
$('.correas-gold').click(function () {
    $('.s-correasrelojes-relojes').empty();
    $(".s-botonescorreasrelojes div:nth-child(1) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small1").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(3) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small3").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(2) div").addClass("hover-div");
    $(".s-botonescorreasrelojes .small2").addClass("hover-text");
    obtenerCorreasDinamicos('gold')

});

$('.correas-silver').click(function () {
    $('.s-correasrelojes-relojes').empty();
    $(".s-botonescorreasrelojes div:nth-child(1) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small1").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(2) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small2").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(3) div").addClass("hover-div");
    $(".s-botonescorreasrelojes .small3").addClass("hover-text");
    obtenerCorreasDinamicos('silver')
});
$('.correas-all').click(function () {
    $('.s-correasrelojes-relojes').empty();
    $(".s-botonescorreasrelojes div:nth-child(3) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small3").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(2) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small2").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(1) div").addClass("hover-div");
    $(".s-botonescorreasrelojes .small1").addClass("hover-text");
    obtenerCorreasDinamicos('gold')
    obtenerCorreasDinamicos('silver')
});

$(document).ready(function () {
    $('.s-correasrelojes-relojes').empty();
    $('.s-correasrelojes-relojes').empty();
    $(".s-botonescorreasrelojes div:nth-child(3) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small3").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(2) div").removeClass("hover-div");
    $(".s-botonescorreasrelojes .small2").removeClass("hover-text");
    $(".s-botonescorreasrelojes div:nth-child(1) div").addClass("hover-div");
    $(".s-botonescorreasrelojes .small1").addClass("hover-text");
    obtenerCorreasDinamicos('gold')
    obtenerCorreasDinamicos('silver')
});



function obtenerCorreasDinamicos(colorPulsera) {

    $.ajax({
        type: "GET",
        url: "../js/ajax/xml/correasHombre.xml",
        dataType: "xml",
        success: function (correas) {
            if (colorPulsera == 'gold') {

                let correasGold = $(correas).find('correasgold correa');
                $.each(correasGold, function (indexInArray, correaGold) {
                    $(".s-correasrelojes-relojes").append("<article class='flex articulocontenedorcorreagold" + indexInArray + "'>");
                    $(".articulocontenedorcorreagold" + indexInArray).append('<img src=' + $(this).find('correa imagen').text() + ' + alt="Correa Gold 2" />');
                    $(".articulocontenedorcorreagold" + indexInArray).append('<h3 class="uppercase h3-title-correa-men">' + $(this).find('correa nombre').text() + '</h3>');
                    $(".articulocontenedorcorreagold" + indexInArray).append('<h3>' + $(this).find('correa precio').text() + '</h3>');
                    $(".s-correasrelojes-relojes").append("</article>");
                });
            } else if (colorPulsera == "silver") {


                let correasSilver = $(correas).find('correassilver correa');
                $.each(correasSilver, function (indexInArray, correaSilver) {
                    $(".s-correasrelojes-relojes").append("<article class='flex articulocontenedorcorreasilver" + indexInArray + "'>");
                    $(".articulocontenedorcorreasilver" + indexInArray).append('<img src=' + $(this).find('correa imagen').text() + ' + alt="Correa Gold 2" />');
                    $(".articulocontenedorcorreasilver" + indexInArray).append('<h3 class="uppercase h3-title-correa-men">' + $(this).find('correa nombre').text() + '</h3>');
                    $(".articulocontenedorcorreasilver" + indexInArray).append('<h3>' + $(this).find('correa precio').text() + '</h3>');
                    $(".s-correasrelojes-relojes").append("</article>");
                });
            }
        },
        error: function (objajax, status, excepcion) {
            console.log("error " + excepcion)
        }
    });
}