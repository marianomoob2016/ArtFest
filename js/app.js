var bd = {"categoria":[
  [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"},
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"}
  ]
]};






//------------------BD lista de videos y su info--------------
var bd_final = {"videos":[
     {
     "id":"20161019",
     "hora":"1800",
     "autores" : ["youtuber1","youtuber2","youtuber3"],
     "titulo" : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
     "subTit" : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
     "info" : "",
     "masInfo" : "....",
     "urlVideo" : ".....url1.mp4",
     "urlImgVid" : "img/template/video01.jpg",
     "srcImg" : "img/template/video01.jpg",
     "destacado" : [{"activo" : false},{"position" : 10}],
     "categorias" :  [
                        {"catego":[{"nombre" : "humor"},{"activo" : true},{"subCat" : ["bloopers","fails","bizarro"]}]},
                        {"catego":[{"nombre" : "belleza"},{"activo" : false},{"subCat" : ["Uñas","Peinados","makeUp"]}]},
                        {"catego":[{"nombre" : "música"},{"activo" : false},{"subCat" : ["playList","bandas","recitales"]}]},
                        {"catego":[{"nombre" : "gamers"},{"activo" : false},{"subCat" : ["trucos","juego_en_vivo","reviews"]}]},
                        {"catego":[{"nombre" : "lifestyle"},{"activo" : true},{"subCat" : ["trucos","juego_en_vivo","reviews"]}]}
                     ]
    },{
    "id":"20161019",
    "hora":"1800",
    "autores" : ["youtuber1","youtuber2","youtuber3"],
    "titulo" : "Ellos 2",
    "subTit" : "Aprendé 2",
    "info" : "",
    "masInfo" : "....",
    "urlVideo" : ".....url1.mp4",
    "urlImgVid" : "img/template/video02.jpg",
    "srcImg" : "img/template/video02.jpg",
    "destacado" : [{"activo" : false},{"position" : 10}],
    "categorias" : [
                       {"catego":[{"nombre" : "humor"},{"activo" : false},{"subCat" : ["bloopers","fails","bizarro"]}]},
                       {"catego":[{"nombre" : "belleza"},{"activo" : false},{"subCat" : ["Uñas","Peinados","makeUp"]}]},
                       {"catego":[{"nombre" : "música"},{"activo" : true },{"subCat" : ["playList","bandas","recitales"]}]},
                       {"catego":[{"nombre" : "gamers"},{"activo" : false},{"subCat" : ["trucos","juego_en_vivo","reviews"]}]},
                       {"catego":[{"nombre" : "lifestyle"},{"activo" : false},{"subCat" : ["trucos","juego_en_vivo","reviews"]}]}
                    ]
   },{
   "id":"20161019",
   "hora":"1800",
   "autores" : ["youtuber1","youtuber2","youtuber3"],
   "titulo" : "Ellos 3",
   "subTit" : "Aprendé 3",
   "info" : "",
   "masInfo" : "....",
   "urlVideo" : ".....url1.mp4",
   "urlImgVid" : "img/template/video03.jpg",
   "srcImg" : "img/template/video03.jpg",
   "destacado" : [{"activo" : false},{"position" : 10}],
   categorias :  [
                      {cat:[{nombre : "humor"},{activo : false},{subCat : ["bloopers","fails","bizarro"]}]},
                      {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                      {cat:[{nombre : "música"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                      {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                      {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                   ]
  }
]};






//------------------BD lista de videos y su info--------------
var bd_result_index = {"videos":[
  {
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  },{
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  },{
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  },{
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  },{
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  },{
       id:"20161019",
       hora:"1800",
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias :  [
                          {cat:[{nombre : "humor"},{colorFondo:'ffff01'},{colorText:'333333'}]},
                          {cat:[{nombre : "lifestyle"},{colorFondo:'35df89'},{colorText:'ffffff'}]},
                     ]
  }
]};

//---------------------------------







//--------------------BD lista de artistas y su info--------------------
var bd_artistas = {"autores":[
     {
       "nombre":"youtuber1",
       "info":"...1.",
       "imgPerfil":"....1.jpg",
       "linkFace":"....url1",
       "linkTwitter":"....url",
       "linkInstagram":"....url",
       "linkYoutube":"....url"
     },
     {"nombre":"youtuber2","info":"...2.","imgPerfil":"....2.jpg","linkFace":"....url2","linkTwitter":"....url","linkInstagram":"....url","linkYoutube":"....url"},
     {"nombre":"youtuber3","info":"...3.","imgPerfil":"....3.jpg","linkFace":"....url3","linkTwitter":"....url","linkInstagram":"....url","linkYoutube":"....url"}
]};

//--------------------BD lista de artistas y su info--------------------
var bd_categorias = {'categorias':[
     {
     'categoria':'humor',
     'infoCat':'Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.',
     'colorFondo':'ffff01',
     'subCat':['bloopers','fails','bizarro','sketch','vines','parodias','chistes','standUp','desafíos']
     },
     {'categoria':'belleza','infoCat':'Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.','colorFondo':'f4206a','subCat':['uñas','peinados','makeUp','look','moda','fitness','gym','accesorios','coleciones']},
     {'categoria':'musica','infoCat':'Son las nuevas estrellas de todos los tiempos. Mirá videos exclusivos en Club.Media.','colorFondo':'168ce6','subCat':['playList','bandas','recitales','instrumentos','lanzamientos','reviews','backstage','cds']},
     {'categoria':'gamers','infoCat':'Viví desde adentro cada momento de los shows de tus artistas favoritos y participá por Meet&Greet y entradas VIP','colorFondo':'fe4300','subCat':['trucos','juego en vivo','reviews','tecnología','lanzamientos','testeo','tutoriales']},
     {'categoria':'lifestyle','infoCat':'Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.','colorFondo':'35df89','subCat':['viajes','cocina','salidas','DIY','cine','madres','deco','jardín','bares','cerveza']},
     {'categoria':'clubMedia','infoCat':'Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.','colorFondo':'35df89','subCat':[]}
]};





//--------------------------objeto para todos los artistas---------------
var todosArt = (function(){

  function todosArt(base_){

        'use strict';

        var baseTotal = base_.videos;
        var cantidadTotal = baseTotal.length;


        //console.log(cantidadTotal +"------"+baseTotal);

//--------------------------------------------------------------------------------------------------------------------


       //------------------------------------------------------
       this.listarPost=function(){
        (function() {
              Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
                  switch (operator) {
                    case '==': return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    case '<':  return (v1 < v2) ?  options.fn(this) : options.inverse(this);
                    case '>':  return (v1 > v2) ?  options.fn(this) : options.inverse(this);
                    default: return options.inverse(this);
                  }
              });

              Handlebars.registerHelper('moduloResult_chico', function(value) {
                return new Handlebars.SafeString(
                  "<div class='contChicoResult_moduloContfondo_cont_info_item1' style='background:#"+value[1].colorFondo+"; color:#"+value[2].colorText+";'>"+
                    value[0].nombre +
                  "</div>");
              });

              Handlebars.registerHelper('moduloResult_grande', function(value) {
                return new Handlebars.SafeString(
                  "<div class='contGrandeResult_moduloContfondo_cont_info_item1' style='background:#"+value[1].colorFondo+"; color:#"+value[2].colorText+";'>"+
                    value[0].nombre +
                  "</div>");
              });

               var template_ = document.getElementById("template_ContChicoResult").innerHTML;
               var contTemplate = Handlebars.compile(template_);
               var context=bd_result_index; //json para los resultados del index
               var templateCompile = contTemplate(context);
               $('.fila1').html(templateCompile);
         })();
       }





      //-------------------lista de categorias-----------------
       this.total_categorias=function(){
         var categ_=bd_categorias.categorias;
         var result_=[];
         for(var i=0 ; i<categ_.length ; i++){
           result_.push(categ_[i].categoria);
         }
         return result_;
       }


        //-------------------color para cada cateogria------------------
        this.colorCategoria_=function(cat_){
          var catSel=cat_;
          var color_='fff';
          var categ_=bd_categorias.categorias;

              for(var i=0 ; i< categ_.length ; i++){
                if(categ_[i].categoria==catSel){
                  color_=categ_[i].colorFondo;
                }
              }
            return color_;
        }


        //---------------------scroll para nav fixed-----------------------
        this.defineContHead_ = function(event){
                var bod_=document.getElementById("body_");
                var wb_=bod_.style.width;
                var hb_=bod_.style.height;
                var cImg_=$(".cont_img_slider");
                var cImgw_=cImg_.width();
                var cImgh_=cImg_.height();
                //console.log(cImgw_,cImgh_);
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
        var get_CantidadTotal = function(){
                return  cantidadTotal;
        }


        //---------------------get de nombre de los artistas---------------------
        var get_Artistas_  = function(){
          if(cantidadTotal>0){
              var artistas_=[];
              for(var i=0 ; i< cantidadTotal ; i++){
                artistas_.push(baseTotal[i].autores);
              }
            return artistas_;
          }
        }


        //-----------------get de total de videos-por categoria o nombre----------------
        var get_videosPorCategoria_ = function(cate_){
            var vid_=[];
            for(var i=0 ; i< cantidadTotal ; i++){
                var cantidadTotalporCategoria_= baseTotal[i].length;  //cantidad de videos por artista
                console.log(baseTotal[i]);
              for(var j=0 ; j<cantidadTotalporCategoria_ ; j++){
                 if(baseTotal[i][j].categoria[cate_].activo){
                    vid_.push(baseTotal[i][j].urlVideo);
                }
              }
            }
            return vid_;
        }



       //-----------------------------
        this.modulo_1=function(){
          $(function () {
                var template_ = document.getElementById("templateScript").innerHTML;
                var contTemplate = Handlebars.compile(template_);
                var context={
                  "v1": get_videosPorCategoria_("belleza")
                };

                var templateCompile = contTemplate(context);
                $('.cont_template_1').html(templateCompile);
          });
        }




        //----------------------------------------------
         this.modulo_listarArtistas_=function(){
           $(document).ready(function(){
             var templateObjetoLista = $("#objetoLista").html();
             var templateObjArtista = Handlebars.compile(templateObjetoLista);
             var context={"val1": get_Artistas_()};  //get de total de artistas
             var compileHTML1 = templateObjArtista(context);
             $('.contenedorLista').html(compileHTML1);
           });
         }



         //------------------------ver resultado por opcion seleccionada de artistas--------------
        this.seleccionarResult=function(this_){
              var selectBox = this_;
              var vid_=[];
              if(selectBox){
                  var selectedValue = selectBox.value; //selectBox.options[selectBox.selectedIndex].value;
                  vid_=get_videosPorCategoria_(selectedValue);
                  this.modulo_listarModulos_(vid_);
              }
          }



        //----------------------------------------------
        this.modulo_listarModulos_=function(result_){
           $(document).ready(function(){
              var theTemplateScript = $("#objetoModuloResult").html();
              var theTemplate = Handlebars.compile(theTemplateScript);
              var context={"val1": result_};
              var theCompiledHtml = theTemplate(context);
              //var theCompiledHtml = theTemplate(bd.categoria[0]);
              $('.listaModulosResult').html(theCompiledHtml);


           });
        }







     }//------------fin de objeto:todosArt-----------


     return todosArt;  //return objeto function


}(this));
//-----------------------










//---------------------funciones externas------------------------------
$(document).ready(function(){

        //---------------------defino objeto-----------------------------------
        var AF = new todosArt(bd_final);

        //---------------------
        //window.addEventListener('resize', function(event){
             //AF.defineContHead_(event);
        //});

        //------------------
        //AF.modulo_listarArtistas_();
        //console.log(AF.colorCategoria_('humor'));
        //console.log(AF.total_categorias());
        AF.listarPost();


        //--------------active nav scroll------------
        $(document).on('scroll',function(){
            var body_ = document.getElementById("body_");
            body_.onscroll=function(){  AF.scrollBody_(body_);  }
        });

        //------------------
        //AF.modulo_1();


});
