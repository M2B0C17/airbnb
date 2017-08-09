$(document).ready(function(){
  /*Select*/
    $('select').material_select();
    $("#range_07").ionRangeSlider({
	    type: "double",
	    grid: true,
	    from: 1,
	    to: 5,
	    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
	});

	/* Pagination */
   $('#pagination').materializePagination({
	    align: 'left',
	    lastPage:  5,
	    firstPage:  1,
	    urlParameter: 'page',
	    useUrlParameter: true,
	    onClickCallback: function(requestedPage){
	        console.log('Requested page is '+ requestedPage);
	    }
	});
});

/* MAPA */
function initMap() {
	// Iniciando ubicación
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -9.1191427, lng: -77.0349046},
        zoom: 14
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Al cargar el html
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              	lat: position.coords.latitude,
              	lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Estas Aquí!!');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });

    } else {
        // En caso de que la pagina no admita geolocalizacion
        handleLocationError(false, infoWindow, map.getCenter());
    }

   	 /* Autocomplete */
	  var final = (document.getElementById('search'));
	  var autocomplete = new google.maps.places.Autocomplete(final);
	  autocomplete.bindTo('bounds', map);

}

// En caso de errores de ubicación
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}



	 





