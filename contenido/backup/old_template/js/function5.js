
//---------------------------declaracion para todos los artistas--------------------------------

var CantidadDeArtistias = AF.get_CantidadTotal();
var v4 = AF.todosLosArtistas_();
var v5 = AF.filtroVideo("youtuber1");
var v6 = AF.filtroNombre("youtuber1");
var v7 = AF.verResult();

//console.log(CantidadDeArtistias);
console.log(v4,"--->  todos los artistas");
console.log(v5,"--->  video por artista");
console.log(v6,"--->  filtro por nombre");
console.log(v7,"--->  ver resultados");






//-----------------evento para el menu slider-------------------------
$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({full_width: true});






//----------------------listaBD1---------------------------
$(function () {
  var theTemplateScript = $("#objetoBD1").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context={
    "val1": v4,
    "val2": v5,
    "val3": v6
  };
  var theCompiledHtml = theTemplate(context);
  //var theCompiledHtml = theTemplate(bd.categoria[0]);
  $('.listaBD1').html(theCompiledHtml);
});



//----------------------listaBD2---------------------------
$(function () {
  var theTemplateScript = $("#objetoBD2").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(bd2);
  $('.listaBD2').html(theCompiledHtml);
});



$(function () {
  var theTemplateScript = $("#objetoSelect_").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context={"val1": AF.verResult()};
  var theCompiledHtml = theTemplate(context);
  $('.listaSelect_').html(theCompiledHtml);
  console.log(v7);
});
