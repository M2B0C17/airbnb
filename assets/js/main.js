$(document).ready(function(){

  $('#nav-donde').focus();
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
})
   	/* Funcionalidad del filter vanessa Perez*/
   	

   	$(".btn-b").click(function(){
   		/* codigo para las camas*/
   		/*if(('#opcion').val(1)){
   			var opcion = 1;
   		}
   		alert(opcion);
   		if(('#opcion').val(2)== selected){
   			var opcion = 2;
   		}
   		alert(opcion);
   		if(('#opcion').val(3)== selected){
   			var opcion = 3;
   		}
   		alert(opcion);
   		if(('#opcion').val(4)== selected){
   			var opcion = 4;
   		}
   		alert(opcion);
   		if(('#opcion').val(5)== selected){
   			var opcion = 5;
   		}
   		alert(opcion);
   		if(('#opcion').val(6)== selected){
   			var opcion = 6;
   		}
   		alert(opcion);*/

   		/* codigo para los checked*/
   		var seleccion = $("#box").is(":checked");
   		if(seleccion){ 
   			seleccion = 1; 
   		}else if (!seleccion){
   			seleccion = 0;
   		}   		
		var seleccion1 = $("#box1").is(":checked");
   		if(seleccion1){ 
   			seleccion1 = 1; 
   		}else if(!seleccion1){
   			seleccion1 = 0;
   		}
		var seleccion2 = $("#box2").is(":checked");
   		if(seleccion2){ 
   			seleccion2 = 1; 
   		}else if(!seleccion2){
   			seleccion2 = 0;
   		}
		var seleccion3 = $("#box3").is(":checked");
   		if(seleccion3){ 
   			seleccion3 = 1; 
   		}else if(!seleccion3){
   			seleccion3 = 0;
   		}
		var seleccion4 = $("#box4").is(":checked");
   		if(seleccion4){ 
   			seleccion4 = 1; 
   		}else if(!seleccion4){
   			seleccion4 = 0;
   		}
		var seleccion5 = $("#box5").is(":checked");
   		if(seleccion5){ 
   			seleccion5 = 1; 
   		}else if(!seleccion5){
   			seleccion5 = 0;
   		}
		var seleccion6 = $("#box6").is(":checked");
   		if(seleccion6){ 
   			seleccion6 = 1; 
   		}else if(!seleccion6){
   			seleccion6 = 0;
   		}
		var seleccion7 = $("#box7").is(":checked");
   		if(seleccion7){ 
   			seleccion7 = 1; 
   		}else if(!seleccion7){
   			seleccion7 = 0;
   		}
		var seleccion8 = $("#box8").is(":checked");
   		if(seleccion8){ 
   			seleccion8 = 1; 
   		}else if(!seleccion8){
   			seleccion8 = 0;
   		}
		var seleccion9 = $("#box9").is(":checked");
   		if(seleccion9){ 
   			seleccion9 = 1; 
   		}else if(!seleccion9){
   			seleccion9 = 0;
   		}
		var seleccion10 = $("#box10").is(":checked");
   		if(seleccion10){ 
   			seleccion10 = 1; 
   		}else if(!seleccion10){
   			seleccion10 = 0;
   		}
		var seleccion11 = $("#box11").is(":checked");
   		if(seleccion11){ 
   			seleccion11 = 1; 
   		}else if(!seleccion11){
   			seleccion11 = 0;
   		}
		var seleccion12 = $("#box12").is(":checked");
   		if(seleccion12){ 
   			seleccion12 = 1; 
   		}else if(!seleccion12){
   			seleccion12 = 0;
   		}
		
		var result = [seleccion, seleccion1, seleccion2, seleccion3, seleccion4, seleccion5, seleccion6, seleccion7, seleccion8, seleccion9, seleccion10, seleccion11, seleccion12];
		 
		var result2 = result.reduce(function(valor, valor2){ 
			return valor + valor2;
		})

		for(i=0; i<=datos.length; i++){
			var suma = datos[i].precio + (result2*5000);

			$(".caja").append("<img src=assets/img/"+ datos[i].image_url + ">"
				+ "<h2>$"+suma+"</h2>");
		}		
   	})
   	/*FIN Filtro vane*/

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

  /*Calendario*/
  $(function() {
      $('input[name="daterange"]').daterangepicker();
  });

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

  $('#search').attr('value', localStorage.getItem('lugar'));
 
  initialize();
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
}

// En caso de errores de ubicación
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
	
function initialize() {
  var final = document.getElementById('search');
  var autocomplete = new google.maps.places.Autocomplete(final);
  var destino = document.getElementById('nav-donde');
  var autocompletedos = new google.maps.places.Autocomplete(destino);
}


$('#siguiente').click(function() {
  guardarDatos();
});


function guardarDatos(){
  localStorage.lugar = $('#nav-donde').val();
}


