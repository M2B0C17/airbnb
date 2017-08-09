var datos = [
{"id":1,
"precio": 12000,
"image_url":"1.jpg",
"calificacion":3},
{"id":2,
"precio": 22000,
"image_url":"2.jpg",
"calificacion":3},
{"id":3,
"precio": 10000,
"image_url":"3.png",
"calificacion":3},
{"id":4,
"precio": 15000,
"image_url":"4.jpg",
"calificacion":3},
{"id":5,
"precio": 35000,
"image_url":"5.jpg",
"calificacion":3},
{"id":6,
"precio": 44000,
"image_url":"6.jpg",
"calificacion":3},
{"id":7,
"precio": 72000,
"image_url":"7.jpg",
"calificacion":3},
{"id":8,
"precio": 27000,
"image_url":"8.jpg",
"calificacion":3},
{"id":9,
"precio": 27000,
"image_url":"9.jpg",
"calificacion":3},
{"id":10,
"precio": 100000,
"image_url":"10.jpg",
"calificacion":3},
{"id":11,
"precio": 33000,
"image_url":"11.jpg",
"calificacion":3},
{"id":12,
"precio": 5000,
"image_url":"12.jpg",
"calificacion":3},
{"id":13,
"precio": 35000,
"image_url":"13.jpg",
"calificacion":3},
{"id":14,
"precio": 8000,
"image_url":"14.jpg",
"calificacion":3},
{"id":15,
"precio": 5000,
"image_url":"15.jpg",
"calificacion":3},
{"id":16,
"precio": 7000,
"image_url":"16.jpg",
"calificacion":3},
{"id":17,
"precio": 29000,
"image_url":"17.jpg",
"calificacion":3},
{"id":18,
"precio": 53000,
"image_url":"18.jpg",
"calificacion":3},
{"id":19,
"precio": 21000,
"image_url":"19.jpg",
"calificacion":3},
{"id":20,
"precio": 20000,
"image_url":"20.JPG",
"calificacion":3},

]
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

/* Mostrar datos guardados con LocalStorage*/
  $('#search').attr('value', localStorage.getItem('lugar'));
 
  initialize();

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

    $('.cam_section__range-valor1').html(valorUno);
    $('.cam_section__range-valor2').html(valorDos);

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

/* Inicio LocalStorage*/
$('#siguiente').click(function() {
  guardarDatos();
});


function guardarDatos(){
  localStorage.lugar = $('#nav-donde').val();
}

/* Fin LocalStorage*/


 /* Funcionalidad del filter vanessa Perez*/
    
$('.collapsible').collapsible();
    $(".btn").click(function(e){

         
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
    });

    for(i=0; i<=datos.length; i++){
      var suma = datos[i].precio + (result2*5000);

      $(".caja").append("<img src=assets/img/"+ datos[i].image_url + ">"
        + "<h2>$"+suma+"</h2>");
    }   
});

    /*FIN Filtro vane*/

