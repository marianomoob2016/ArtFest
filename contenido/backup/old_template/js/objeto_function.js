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

//---------------------------------

var bd_final = {"categoria":[
     {
     "autor" : "youtuber1",
     "Relaciones" : [
                      {"autor" : "youtuber2"},
                      {"autor" : "youtuber3"}
                    ],
     "titulo" : "Tit1",
     "subTit" : "subTit1",
     "info" : "...",
     "masInfo" : "....",
     "urlVideo" : ".....url1.mp4",
     "urlImgVid" : ".....urlImg1.jpg",
     "srcImg" : ".....img1.jpg",
     "destacado" : [{"activo" : true},{"position" : 10}],
     "categorias" : [
                        {"humor":[
                                    {"activo" : true},
                                    {"subCat" : ["bloopers","fails","bizarro"]}
                                 ]},
                        {"belleza":[
                                    {"activo" : true},
                                    {"subCat" : ["Uñas","Peinados","makeUp"]}
                                 ]},
                        {"música":[
                                    {"activo" : true},
                                    {"subCat" : ["playList","bandas","recitales"]}
                                ]},
                        {"gamers":[
                                    {"activo" : true},
                                    {"subCat" : ["trucos","juego_en_vivo","reviews"]}
                                ]},
                        {"lifestyle":[
                                    {"activo" : true},
                                    {"subCat" : ["trucos","juego_en_vivo","reviews"]}
                                 ]}
                    ]
    }
]};

//---------------------------------

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

        'use strict';

        this.cat        = base_.categoria;
        this.cantidad_  = this.cat.length;


        //--------------------------------------------
        this.get_CantidadTotal = function(){
                return  this.cantidad_;
        }



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
         var vid_=[];
         if(selectBox){
             var selectedValue = document.getElementById("youtubersId").value;//selectBox.options[selectBox.selectedIndex].value;
             vid_=AF.filtroVideo(selectedValue);
             //$("#resultado1").empty(); //$("#resultado1").html(selectedValue);
             return vid_;
         }
       }



      //----------------------------------------------
       this.cargarResult=function(){
                   var theTemplateScript = $("#objetoSelect_").html();
                   var theTemplate = Handlebars.compile(theTemplateScript);
                   var context={"val1": AF.verResult()};
                   var theCompiledHtml = theTemplate(context);
                   $('.listaSelect_').html(theCompiledHtml);
       }




     }//------------fin de objeto:todosArt-----------

     return todosArt;  //return objeto function

}(this));//------------------------------


var AF = new todosArt(bd);
