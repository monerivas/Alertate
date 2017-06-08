var coordenadas = [];

$(document).ready(getLocation);
// function splashScrean() {
    // $("#vibrar").click(getLocation);
    // function vibrando() {
    //     window.navigator.vibrate([500, 200, 500]);
    // }
function Data(lat,lng) {
    this.lat = lat;
    this.lng = lng;     
}
    $("#botonRojo").click(getLocation);
/*    $("#botonRojo").click(initMap);*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
/*    vibracion(coordenadas);*/
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;      
    var posicion = new Data (lat,lng);
    coordenadas.push(posicion);    
    localStorage.setItem("coordenadas", JSON.stringify(coordenadas));     
}

console.log("data ligada")
/* var locations = JSON.parse(localStorage.getItem("coordenadas")); obtiene los objetos*/