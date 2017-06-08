var locations = [
  {lat: 19.425928, lng: -99.133006},
  {lat: 19.426074, lng: -99.134204},
  {lat: 19.426135, lng: -99.132949},
  {lat: 19.447136, lng: -99.152049},
  {lat: 19.446259, lng:  -99.152089},
  {lat: 19.423619, lng:  -99.163293},
  {lat:19.4164234, lng:-99.16511009999999},
  {lat:19.4163278, lng:-99.16522739999999},
  {lat:19.4163278, lng:-99.16522739999999}
]

 function initMap() {
     

   var mostrarPosicion= function(posicion){
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 13,
       center: {lat: posicion.coords.latitude, lng: posicion.coords.longitude}
       });
     var marker = new google.maps.Marker({
       position: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
       map: map
     });


        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

navigator.geolocation.getCurrentPosition(mostrarPosicion);

}
