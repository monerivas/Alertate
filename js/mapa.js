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


function load() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(-19.435514, 48.603516), 5);
        map.addControl(new GMapTypeControl());
        map.addControl(new GLargeMapControl());
        map.addControl(new GScaleControl());
        map.addControl(new GOverviewMapControl());
        map.setMapType(G_HYBRID_TYPE);
        function addtag(point, address) {
        var marker = new GMarker(point);
        GEvent.addListener(marker, "click", function() { 
	marker.openInfoWindowHtml(address); } );
        return marker;
        }
        var point = new GLatLng(-19.000514,46.603516);
        var address = '<b>MADAGASCAR</b><br/><i>Centro de Madagascar</i><br /><a href="http://www.centrodemadagascar.com">Web del Centro de Madagascar</a>';
        var marker = addtag(point, address);
       map.addOverlay(marker);
      }
    }
$(document).ready(cargarPagina);