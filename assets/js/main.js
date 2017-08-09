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
   /*Rango de precios*/	 
$(function(){
  $('#rango').ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: true,
    hide_from_to: false,
    grid: false,
  });

  var valorUno = $('.irs-from').text();
  var valorDos = $('.irs-to').text();

  $('.cam_section__range-valor1').text(valorUno);
  $('.cam_section__range-valor2').text(valorDos);

});
	



	/* Geolocalización */
	function initMap(){
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 7,
	    center: {lat: -9.1191427, lng: -77.0349046}, // muestra ubicacion inicial en stgo --> center: {lat: -33.4569400, lng: -70.6482700},
	    disableDefaultUI: true // quita el zoom y las vistas por defecto del mapa
	  });

	  directionsDisplay.setMap(map);

		/*Dentro de la función initMap(), agregamos la funcion buscar()
			*.getCurrentPosition -> permite al usuario obtener su ubicación actual, el parámetro funcionExito,
			se ejecuta solo cuando el usuario comparte su ubicación, mientras que funcionError se ejecuta
			cuando se produce un error en la geolocalización.
			Pregunta si quieres activar geolocalizacion.
		*/

		function buscar(){
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
			}
		}
		var latitud,longitud;

		/*Agregaremos las variables funcionExito, con el que obtendremos nuestra latitud
		o longituf y además crearemos un marcador de nuestra ubicación*/

		var funcionExito = function(posicion){
			latitud = posicion.coords.latitude;
			longitud = posicion.coords.longitude;

		/*Aumentaremos la profundidad de visualización de nuestro mapa con map.setZoom y le asignaremos
		un nuevo centro con map.setCenter.
		También añadimos funcionError con un mensaje para el usuario, en caso de que nuestra geolocalización
		falle.
		*/
			map.setZoom(17);
			map.setCenter({lat: latitud,lng: longitud}); // centra el mapa en la ubicacion

		// Función que coloca un marcador
		var miUbicacion = new google.maps.Marker({
			position: {lat: latitud, lng:longitud},
			animation: google.maps.Animation.BOUNCE, // .BOUNCE para que salte el monito .DROP para que deje de saltar
			map: map,
		});

		}

		// se ejecuta esta funcion si no escuentra la ubicacion
		var funcionError = function (error){
			error(true,map.getCenter());
			alert("Tenemos un problema con encontrar tu ubicación");
		}
		buscar(); // Esto es lo que permite que al cargar la pagina la funcion buscar se ejecute y pregunte lo de la ubicacion

	  /* Autocomplete */
	  var final = (document.getElementById('destino'));
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



