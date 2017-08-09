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


