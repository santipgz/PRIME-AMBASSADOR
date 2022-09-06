/* 

Archivo que lee un XML y pinta los relojes mas vendidos en la pagina home mediante ajax y vanilla javascript 

*/

window.onload = function () {
    obtenerRelojesMasCompradosXML("js/ajax/xml/relojesMasComprados.xml");
};

let XHR = false;
if (window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
}

function obtenerRelojesMasCompradosXML(fuenteDatos) {
    if (XHR) {

        XHR.open("GET", fuenteDatos);
        XHR.onreadystatechange = function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                pintarRelojesMasCompradosXML(XHR)
            }
        };
        XHR.send(null);
    }
}

function pintarRelojesMasCompradosXML(xml) {
    let objetoXML = xml.responseXML;
    let relojes = objetoXML.getElementsByTagName('reloj');
    let article = document.querySelector('#articleRelojesMasVendidos')

    for (let reloj = 0; reloj < relojes.length; reloj++) {
        let div1 = document.createElement("div");
        div1.classList.add("d-watches");
        div1.classList.add("flex");
        div1.classList.add("uppercase");
        imgdiv1 = document.createElement('img');
        imgdiv1.setAttribute('src', relojes[reloj].getElementsByTagName('imagen')[0].textContent);
        imgdiv1.setAttribute('alt', "Reloj " + relojes[reloj].getElementsByTagName('nombre')[0].textContent);
        let h31 = document.createElement('h3');
        let texth31 = document.createTextNode(relojes[reloj].getElementsByTagName('nombre')[0].textContent);

        h31.appendChild(texth31);
        div1.appendChild(imgdiv1);
        div1.appendChild(h31);
        article.appendChild(div1);
    }
}