$(document).ready(function(){

  $('#nav-donde').focus();

  /* SLIDER - INDEX.HTML */

    $('.carousel').carousel({
        dist:0,
        padding:20,
    });

    // Next slide
    $('.carousel').carousel('next');

    // Previous slide
    $('.carousel').carousel('prev');


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



var $range = $("#rango"),
    $create_btn = $(".js-create-52"),
    $destroy_btn = $(".js-destroy-52"),
    slider;

var create = function () {
    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        grid: true
    });

    slider = $range.data("ionRangeSlider");
};

$create_btn.on("click", function () {
    create();
});

$destroy_btn.on("click", function () {
    slider && slider.destroy();
});









  /*Rango de precios 
  $(function(){
    $('#rango').ionRangeSlider({
      type: "double",
      min: 0,
      max: 300000,
      from: 0,
      to: 300000,
      hide_min_max: true,
      hide_from_to: false,
      grid: false
    });
        var valorUno = $('.irs-from').text()
        var valorDos = $('.irs-to').text();

        $('.cam_section__range-valor1').text(valorUno);
        $('.cam_section__range-valor2').text(valorDos);

  });

    $('#search').attr('value', localStorage.getItem('lugar'));
    $('#cam_fecha').attr('value', localStorage.getItem('fecha'));*/ 
 
  initialize();

$('.collapsible-huespedes').collapsible();
$('.collapsible-huespedes1').collapsible();
$('.collapsible-vane').collapsible();
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
  localStorage.fecha = $('#date').val();
}



  /* Funcionalidad del filter vanessa Perez*/     
$(".btn-b").click(function(){      
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
            + "<h2>$"+ suma +"</h2>"
            + "<h5>"+ datos[i].city +"</h5>"/*nuevo agregado*/
            + "<p>Casa/apto entero ° 3 huespedes<h4>"+ datos[i].calificacion +"</h4>° 11 eval</p>");/*nuevo agregado*/
    }       
});
/*FIN Filtro vane*/
