$(document).ready(function(){
  /*Select*/
    $('select').material_select();
    

	/************** Estilos Index.html ************/
	/* SLIDER - INDEX.HTML */

	$('.carousel').carousel({
		dist:0,
		padding:20,
	});

    // Next slide
    $('.carousel').carousel('next');

	// Previous slide
	$('.carousel').carousel('prev');

    //color: #9e9e9e;

    $("#nav-cuando").click(function(){
    	$(this).hide();
    	$('#nav-salida').css('display','block');
    	$('#nav-llegada').css('display','block');
    	$('#flecha').css('display','block');
    })

    $("#nav-salida").click(function () {
    	$(this).css('color','#26a69a');
    	$('#nav-llegada').css('color','#9e9e9e');
    })

    $("#nav-llegada").click(function () {
    	$(this).css('color','#26a69a');
    	$('#nav-salida').css('color','#9e9e9e');
    })

    /************** Fin Estilos Index.html ************/
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

	/* FIN Geolocalización */


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





