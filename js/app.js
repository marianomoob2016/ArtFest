var bd = {"categoria":[
  [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"},
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"}
  ]
]};

var bd_artistas = {"autor":[
     {
       "nombre":"youtuber1",
       "info":"....",
       "imgPerfil":".....jpg",
       "linkFace":"....url",
       "linkTwitter":"....url",
       "linkInstagram":"....url",
       "linkYoutube":"....url"
     },
]};


//---------------------------------

var bd_final = {"videos":[
     {
     "id":"20161019",
     "hora":"1800",
     "autores" : ["youtuber1","youtuber2","youtuber3"],
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
    },
    {
    "id":"20161019",
    "hora":"1600",
    "autores" : ["youtuber2","youtuber3"],
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












//--------------------------objeto para todos los artistas---------------
var todosArt = (function(){

  function todosArt(base_){

        'use strict';

        var baseTotal = base_.videos;
        var cantidadTotal = baseTotal.length;
        //console.log(cantidadTotal +"------"+baseTotal);

//------------------------------------


        //---------------------scroll para nav fixed-----------------------
        this.defineContHead_ = function(event){

                var bod_=document.getElementById("body_");
                var wb_=bod_.style.width;
                var hb_=bod_.style.height;

                var cImg_=$(".cont_img_slider");
                var cImgw_=cImg_.width();
                var cImgh_=cImg_.height();

                console.log(cImgw_,cImgh_);


        }


        //---------------------scroll para nav fixed-----------------------
        this.scrollBody_ = function(cont_){
              var bod_cont=cont_;
              var y =  bod_cont.scrollTop;
              if(y>100){
                $("#nav_header_1").addClass("nav_fixed_top");
                $("#nav_header_1").removeClass("nav_off_top");
                //console.log(y);
              }else{
                $("#nav_header_1").removeClass("nav_fixed_top");
                $("#nav_header_1").addClass("nav_off_top");
              }
        }




//------------------------------------



        //--------------------get para cantidad total de la BD en array por artistas------------------------
        this.get_CantidadTotal = function(){
                return  cantidadTotal;
        }


        //---------------------get de nombre de los artistas---------------------
        this.get_Artistas_  = function(){
          if(cantidadTotal>0){
              var artistas_=[];
              for(var i=0 ; i< cantidadTotal ; i++){
                artistas_.push(baseTotal[i].autores);
              }
            return artistas_;
          }
        }


        //-----------------get de total de videos-por categoria o nombre----------------
        this.get_videosPorCategoria_ = function(cate_){
            var vid_=[];
            for(var i=0 ; i< cantidadTotal ; i++){
                var cantidadTotalporCategoria_= baseTotal[i].length;  //cantidad de videos por artista
              for(var j=0 ; j<cantidadTotalporCategoria_ ; j++){
                 if(baseTotal[i][j].autores == cate_){
                    vid_.push(baseTotal[i][j].urlVideo);
                  }
              }
            }
            return vid_;
        }


        //----------------------------------------------
         this.modulo_listarArtistas_=function(){
               var theTemplateScript = $("#objetoLista").html();
               var theTemplate = Handlebars.compile(theTemplateScript);
               var context={"val1": this.get_Artistas_()};  //get de total de artistas
               var theCompiledHtml = theTemplate(context);
               $('.contenedorLista').html(theCompiledHtml);
         }


         //------------------------ver resultado por opcion seleccionada de artistas--------------
          this.seleccionarResult=function(this_){
              var selectBox = this_;
              var vid_=[];
              if(selectBox){
                  var selectedValue = selectBox.value; //selectBox.options[selectBox.selectedIndex].value;
                  vid_=this.get_videosPorCategoria_(selectedValue);
                  this.modulo_listarModulos_(vid_);
              }
          }


        //----------------------------------------------
        this.modulo_listarModulos_=function(result_){
              var theTemplateScript = $("#objetoModuloResult").html();
              var theTemplate = Handlebars.compile(theTemplateScript);
              var context={"val1": result_};
              var theCompiledHtml = theTemplate(context);
              //var theCompiledHtml = theTemplate(bd.categoria[0]);
              $('.listaModulosResult').html(theCompiledHtml);
        }







     }//------------fin de objeto:todosArt-----------


     return todosArt;  //return objeto function


}(this));//------------------------------

var AF = new todosArt(bd_final);

$(function () {

    window.addEventListener('resize', function(event){
         AF.defineContHead_(event);
    });

    //------------------
    AF.modulo_listarArtistas_();
    //------------------
    var body_ = document.getElementById("body_");
    body_ .onscroll=function(){  AF.scrollBody_(body_);  }
    //------------------

})
