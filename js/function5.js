var bd = {"categoria":[
  [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"}
  ],[
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"}
  ],[
     {"nombre":"youtuber3","video":"url1"}
  ],[
     {"nombre":"youtuber4","video":"url1"},
     {"nombre":"youtuber4","video":"url1"}
  ]
]};


var bd2 = [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"},
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"},
     {"nombre":"youtuber3","video":"url1"}
];
//var myArray = ["John", "Doe"];  //var myObject = { "ref": { "first": 0,"last": 1} }









//--------------------------objeto para todos los artistas---------------
var todosArt = (function(){
  function todosArt(base_){

        this.cat        = base_.categoria;
        this.cantidad_  = this.cat.length;


        //-----------todos los artistas en la BD------
        this.todosLosArtistas_  = function(){
          var artistas_=[];
          for(var i=0 ; i<this.cantidad_ ; i++){
            artistas_.push(this.cat[i][0].nombre);
          }
          return artistas_;
        }




        //-----------todas las URL de cada artista en la BD------
        this.filtroVideo=function(artis_){
          var vid_=[];
          var cantidadTotal_= this.cat.length;  //cantidad de artistas

          for(var i=0 ; i<cantidadTotal_ ; i++){
              var cantidadTotalporArtista_= this.cat[i].length;  //cantidad de videos por artista
            for(var j=0 ; j<cantidadTotalporArtista_ ; j++){
               if(this.cat[i][j].nombre == artis_){
                  vid_.push(this.cat[i][j].video);
               }
            }
          }
          return vid_;
        }
       //----------------




        //-----------todas las URL de cada artista en la BD------
        this.filtroNombre=function(artis_){
          var vid_=[];
          var cantidadTotal_= this.cat.length;  //cantidad de artistas

          for(var i=0 ; i<cantidadTotal_ ; i++){
              var cantidadTotalporArtista_= this.cat[i].length;  //cantidad de videos por artista
            for(var j=0 ; j<cantidadTotalporArtista_ ; j++){
               if(this.cat[i][j].nombre == artis_){
                  vid_.push(this.cat[i][j].nombre);
               }
            }
          }
          return vid_;
        }
       //----------------




      //------------------------ver resultado por opcion seleccionada de artistas--------------
       this.verResult=function(){
         var selectBox = document.getElementById("youtubersId");
         var selectedValue = selectBox.options[selectBox.selectedIndex].value;
         selectedValue=AF.filtroVideo(selectedValue);
         console.log(selectedValue);
         $("#resultado1").html(selectedValue);
       }




     }//------------fin de objeto:todosArt-----------

     return todosArt;  //return objeto function

}());//------------------------------





//---------------------------------------------------------






//---------------------------declaracion para todos los artistas--------------------------------
var AF = new todosArt(bd);
var CantidadDeArtistias = AF.cantidad_;
var v4 = AF.todosLosArtistas_();
var v5 = AF.filtroVideo("youtuber1");
var v6 = AF.filtroNombre("youtuber1");

//console.log(CantidadDeArtistias);
console.log(v4,"--->  todos los artistas");
console.log(v5,"--->  video por artista");
console.log(v6,"--->  filtro por nombre");

















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
