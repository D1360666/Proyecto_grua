//INICIO DE CAPTURA DE EVENTOS
$(document).ready(function(){
  //INICIO DEL SITIO ----------------- creo el slider principal------------------------
  $("#galeria-inicio").html('<div class="flexslider"><ul class="slides"><li><a href="http://bextlan.com"><img src="img/slide-1.png" width="500px" height="250px"/></a><p class="flex-caption">bextlan.com |lugar de ... bits, vectores y pixeles.</p></li><li><img src="img/slide-2.png"  width="500px" height="250px"/><p class="flex-caption">Curso HTML5</p></li><li><img src="img/slide-3.png"  width="500px" height="250px"/></li><li><a href="http://bextlan.com"><img src="img/slide-4.png"  width="500px" height="250px"/></a><p class="flex-caption">Curso PHP</p></li></ul></div>');
  $(".flexslider").flexslider();

//Capturo el evento click en Inicio ----------------------borro lo que este cargado y me voy al inicio con el slider------------
  $("#inicio").click(function(){
    alert("hicisteclick");
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<div class="flexslider"><ul class="slides"><li><a href="http://bextlan.com"><img src="img/slide-1.png" width="500px" height="250px"/></a><p class="flex-caption">bextlan.com |lugar de ... bits, vectores y pixeles.</p></li><li><img src="img/slide-2.png"  width="500px" height="250px"/><p class="flex-caption">Curso HTML5</p></li><li><img src="img/slide-3.png"  width="500px" height="250px"/></li><li><a href="http://bextlan.com"><img src="img/slide-4.png"  width="500px" height="250px"/></a><p class="flex-caption">Curso PHP</p></li></ul></div>');
    $(".flexslider").flexslider();
  });

  //Capturo el evento click de Servicios ---------------Elimino lo que este cargado en el contenedor principal y cargo servicios ------------------------------------
  $("#servicios").click(function(){
    alert("servicios");
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<h1>Estos son los servicios</h1><p>hola trolazo</p>');

  });

//Capturo el evento click de Caracteristicas ------ Elimino lo activo y cargo caracteristicas ------------------------------------------
  $("#caracteristicas").click(function(){
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<h1>Hola estas son las caracteristicas</h1>');
  });
//Capturo el evento click de Galeria ------------Elimino activo, cargo miniatura y galeria de imagenes------------------------------------------------------------------------------------
  $("#galeria").click(function(){
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<p><a class="group4 cboxElement" href="img/ohoopee1.jpg" title="foto 1">Foto 1</a></p><p><a class="group4 cboxElement" href="img/ohoopee2.jpg" title="foto 2">Foto 2 </a></p><p><a class="group4 cboxElement" href="img/ohoopee3.jpg" title="foto 3">Foto 3 </a></p>');
    $(".group4").colorbox({rel:'group4', slideshow:true});
  });

//Capturo el evento click de Nuestra Empresa-------------
$("#empresa").click(function(){
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<h1>Esta es Nuestra empresa</h1>');
});

//Capturo el evento del click de Contacto.
$("#contacto").click(function(){
    $("#galeria-inicio").empty();
    $("#galeria-inicio").html('<h1>Hola contacto</h1>');
    
  });
  


  
/*  var Ventana = new Backbone.Model.extend({
    initialize:function(){

    }
  })
  var VentanaController = Backbone.Router.extend({
    routes:{
      'VerVentana/:ventana': 'VerVentana'
    },
    VerVentana:function(ventana){
      alert("prueba");
        switch(ventana){
          case 'inicio':
        alert("entra en inicio");
        VentanaActiva.VerVentana('inicio');
      break;
      case 'servicios':
      alert("entra en servicios");
        VentanaActiva.VerVentana('servicios');
      break;
      case 'caracteristicas':
      alert("entra en caracteristicas");
        VentanaActiva.VerVentana('caracteristicas');
      break;
      case 'empresa':
      alert("entra en empresa");
        VentanaActiva.VerVentana('empresa');
      break;
      case 'contacto':
      alert("entra en contacto");
        VentanaActiva.VerVentana('contacto');
      break; 
        }
    }
  });*/













  
});