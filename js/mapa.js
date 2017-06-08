var cargarPagina = function () {
	obtenerCoordendas();
};

var obtenerCoordendas = function () {
	var coordenadas = {
        lat:19.4177435,
        lng:-99.16479129999999
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('#map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

$(document).ready(cargarPagina);