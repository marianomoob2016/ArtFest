

//-----------------BD general para cada post/video------------
var bd_final = {"videos":[
 {
      id:"20161019",
      hora:"1800",
      autores : ["youtuber1","youtuber2","youtuber3"],
      titulo : "Ellos 1",
      subTit : "Aprendé 1",
      info : "",
      masInfo : "....",
      urlVideo : ".....url1.mp4",
      urlImgVid : "img/template/video03.jpg",
      srcImg : "img/template/video03.jpg",
      destacado : [{activo : false},{position : 10}],
      srcImgDestacado : "img/template/asideBottomImg.jpg",
      categorias :  [
                        {cat:[{nombre : "humor"},{activo : false},{subCat : ["bloopers","fails","bizarro"]}]},
                        {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                        {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                        {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                        {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                    ]
 },{
      id:"20161019",
      hora:"1800",
      autores : ["youtuber1","youtuber2","youtuber3"],
      titulo : "Ellos 2",
      subTit : "Aprendé 2",
      info : "",
      masInfo : "....",
      urlVideo : ".....url1.mp4",
      urlImgVid : "img/template/video03.jpg",
      srcImg : "img/template/video03.jpg",
      destacado : [{activo : false},{position : 10}],
      srcImgDestacado : "img/template/asideBottomImg.jpg",
      categorias :  [
                         {cat:[{nombre : "humor"},{activo : false},{subCat : ["bloopers","fails","bizarro"]}]},
                         {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                         {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                         {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                         {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                      ]
   },{
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos 3",
       subTit : "Aprendé 3",
       info : "",
       masInfo : "....",
       urlVideo : ".....url1.mp4",
       urlImgVid : "img/template/video03.jpg",
       srcImg : "img/template/video03.jpg",
       destacado : [{activo : false},{position : 10}],
       srcImgDestacado : "img/template/asideBottomImg.jpg",
       categorias :  [
                          {cat:[
                            {nombre : "humor"},
                            {activo : false},
                            {subCat : ["bloopers","fails","bizarro"]}
                          ]},
                          {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                          {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                          {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                          {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                       ]
  }
]};
















//------------------BD lista de videos y su info para index------------10 resultado por paginado--------------
var bd_result_index = {"videos":[
  {
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]

  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1600",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       categorias : ["humor","belleza","musica","gamers","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]},
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       categorias : ["humor","belleza","musica","gamers","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]},
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1400",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["musica","gamers"],
       subcat:[
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1300",
       autores : ["youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"1200",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails"]},
                {nombre:"belleza", subcat:["Uñas"]}
              ]
  },{
       id:"20161019",
       hora:"1100",
       autores : ["youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       categorias : ["lifestyle"],
       subcat:[
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1000",
       autores : ["youtuber1"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"0900",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"0900",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["gamers","lifestyle"],
       subcat:[
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  }
]};

//---------------------------------





//------------------BD lista de videos y su info para index------------10 resultado por paginado--------------
var bd_result_destacado_index = {"videos":[
  {
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "1 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       destacadoPos:10,
       srcImgDestacado : "....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "2 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       destacadoPos:8,
       srcImgDestacado : "....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "3 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       destacadoPos:4,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "4 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber3"],
       titulo : "sidebar _ 5 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : "img/template/asideBottomImg.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "6 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  }
]};








//--------------------BD lista de artistas y su info--------------------
var bd_artistas = {"autores":[
     {
       nombre:"youtuber1",
       info:"...1.",
       imgPerfil:"....1.jpg",
       linkFace:"....url1",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     },{
       nombre:"youtuber2",
       info:"...2.",
       imgPerfil:"....2.jpg",
       linkFace:"....url2",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     },{
       nombre:"youtuber3",
       info:"...3.",
       imgPerfil:"....3.jpg",
       linkFace:"....url3",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     }
]};








//--------------------BD lista de artistas y su info--------------------
var bd_categorias = {"categorias":[
      {
        categoria:"club media fest",
        infoCat:"Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.",
        colorFondo:"35df89",
        colorTexto:"ffffff",
        imgCategoria:"img/template/categoria_club_media.jpg",
        cantidad:10,
        subCat:[]
      },{
       categoria:"humor",
       infoCat:"Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.",
       colorFondo:"ffff01",
       colorTexto:"333333",
       cantidad:10,
       subCat:["bloopers","fails","bizarro","sketch","vines","parodias","chistes","standUp","desafíos"]
     },{
       categoria:"musica",
       infoCat:"Son las nuevas estrellas de todos los tiempos. Mirá videos exclusivos en Club.Media.",
       colorFondo:"168ce6",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["playList","bandas","recitales","instrumentos","lanzamientos","reviews","backstage","cds"]
     },{
       categoria:"belleza",
       infoCat:"Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       colorFondo:"f4206a",
       colorText:"ffffff",
       cantidad:10,
       "subCat":["uñas","peinados","makeUp","look","moda","fitness","gym","accesorios","coleciones"]
     },{
       categoria:"lifestyle",
       infoCat:"Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       colorFondo:"35df89",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["viajes","cocina","salidas","DIY","cine","madres","deco","jardín","bares","cerveza"]
     },{
       categoria:"gamers",
       infoCat:"Viví desde adentro cada momento de los shows de tus artistas favoritos y participá por Meet&Greet y entradas VIP",
       colorFondo:"fe4300",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["trucos","juego en vivo","reviews","tecnología","lanzamientos","testeo","tutoriales"]
     }
]};



//--------------------------objeto para todos los artistas---------------
var todosArt = (function(){

  function todosArt(){

        "use strict";

//--------------------------------------------------------------------------------------------------------------------


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


        //-------------------if comparativo para Handlebars--------------------------
        Handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {
             switch (operator){
                 case '==':  return (v1 == v2) ? options.fn(this) : options.inverse(this);
                 case '===': return (v1 === v2) ? options.fn(this) : options.inverse(this);
                 case '<':   return (v1 < v2) ? options.fn(this) : options.inverse(this);
                 case '<=':  return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                 case '>':   return (v1 > v2) ? options.fn(this) : options.inverse(this);
                 case '>=':  return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                 case '&&':  return (v1 && v2) ? options.fn(this) : options.inverse(this);
                 case '||':  return (v1 || v2) ? options.fn(this) : options.inverse(this);
                 case '%':  return (v1 % v2) ? options.fn(this) : options.inverse(this);
                    default:    return options.inverse(this);
             }
        });

        //-------------------color para cada cateogria------------------
        var colorFondoPorCategoria_=function(cat_){
            var catSel=cat_;
            var color_="fff";
            var categ_=bd_categorias.categorias;
            for(var i=0 ; i< categ_.length ; i++){  if(categ_[i].categoria==catSel){  color_=categ_[i].colorFondo;  }  }
            return color_;
        }

        //-------------------color para cada cateogria------------------
        var colorTextoPorCategoria_=function(cat_){
            var catSel=cat_;
            var color_="333";
            var categ_=bd_categorias.categorias;
            for(var i=0 ; i< categ_.length ; i++){  if(categ_[i].categoria==catSel){  color_=categ_[i].colorTexto;  }  }
            return color_;
        }

        //-------------------color para cada cateogria------------------
        var cantidadPorCategoria_=function(cat_){
            var catSel=cat_;
            var color_=0;
            var categ_=bd_categorias.categorias;
            for(var i=0 ; i< categ_.length ; i++){  if(categ_[i].categoria==catSel){  color_=categ_[i].cantidad;  }  }
            return color_;
        }







        //------------------------------INDEX-------------------------------------









        //-----------------------------------------------------------------
        this.listarCategoria_index=function(){
          (function() {
                 Handlebars.registerHelper("moduloCategoria_index_linkPost", function(value){
                     return new Handlebars.SafeString("categoria.php?cat="+this.categoria);
                 });

                 var template_ = document.getElementById("template_categoria_index").innerHTML;
                 var template2_ = document.getElementById("template_categoria_index2").innerHTML;
                 var contTemplate = Handlebars.compile(template_);
                 var contTemplate2 = Handlebars.compile(template2_);
                 //---------------json para los resultados destacados del index-------------------
                 var context=bd_categorias;
                 var templateCompile = contTemplate(context);
                 var templateCompile2 = contTemplate2(context);
                 $("#contCategoria1").html(templateCompile);
                 $("#contCategoria2").html(templateCompile2);
           })();
        }



        //-----------------------------------------------------------------
        this.listarDest_index_sideBar=function(){
          (function() {
                 Handlebars.registerHelper("moduloDestacado_index_linkPost_sideBar", function(value){
                     return new Handlebars.SafeString("post.php?id="+this.id+'&hora='+this.hora);
                 });

                 Handlebars.registerHelper("moduloDestacado_index", function(value){
                              return new Handlebars.SafeString("<div>"+this+"</div>");
                 });

                 Handlebars.registerHelper("moduloDestacado_index_autores", function(value){
                              return new Handlebars.SafeString("<div>"+this+"</div>");
                 });

                 var template_ = document.getElementById("template_destacado_index_sideBar").innerHTML;
                 var contTemplate = Handlebars.compile(template_);
                 //---------------json para los resultados destacados del index-----------------
                 var context=bd_result_destacado_index;
                 var templateCompile = contTemplate(context);
                 $("#contAsideBotton").html(templateCompile);
           })();
        }



        //-----------------------------------------------------------------
        this.listarDest_index=function(){
          (function() {
                Handlebars.registerHelper("moduloDestacado_index_linkPost", function(value){
                     return new Handlebars.SafeString("post.php?id="+this.id+'&hora='+this.hora);
                });

                Handlebars.registerHelper("moduloDestacado_index", function(value){
                              return new Handlebars.SafeString(
                              "<div class='cont_destacado_header_moduloCont_item1' style='background:#"+
                                colorFondoPorCategoria_(this)+
                              "; color:#"+
                                colorTextoPorCategoria_(this)+
                              ";'>"+
                                this +
                                "</div>"
                              );
                 });

                 var template_ = document.getElementById("template_destacado_index").innerHTML;
                 var contTemplate = Handlebars.compile(template_);
                 //---------------json para los resultados destacados del index-------------
                 var context=bd_result_destacado_index;
                 var templateCompile = contTemplate(context);
                 $("#cont_destacado_header ul").html(templateCompile);
           })();
        }




       //------------------------------------------------------
       this.listarPost_index=function(){
        (function() {
              Handlebars.registerHelper("moduloResult_index_linkPost", function(value){
                  return new Handlebars.SafeString("post.php?id="+this.id+'&hora='+this.hora);
              });

              Handlebars.registerHelper("moduloResult_chico", function(value) {
                return new Handlebars.SafeString(
                  "<div class='contChicoResult_moduloContfondo_cont_info_item1' style='background:#"+
                    colorFondoPorCategoria_(this)+
                  "; color:#"+
                    colorTextoPorCategoria_(this)+
                  ";'>"+
                    this+
                  "</div>");
              });

              Handlebars.registerHelper("moduloResult_grande", function(value) {
                return new Handlebars.SafeString(
                  "<div class='contGrandeResult_moduloContfondo_cont_info_item1' style='background:#"+
                     colorFondoPorCategoria_(this)+
                  "; color:#"+
                     colorTextoPorCategoria_(this)+
                  ";'>"+
                     this+
                  "</div>");
              });

               var template_ = document.getElementById("template_ContChicoResult").innerHTML;
               var contTemplate = Handlebars.compile(template_);
               //---------------json para los resultados del index-------------------
               var context=bd_result_index;
               var templateCompile = contTemplate(context);
               $(".fila1").html(templateCompile);
         })();
       }










       //------------------------------CATEGORIA-------------------------------------


/*

       {
            id:"20161019",
            hora:"0900",
            autores : ["youtuber1","youtuber2","youtuber3"],
            titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
            subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
            srcImg : "img/template/video05.jpg",
            categorias : ["humor","belleza","musica","gamers","lifestyle"],
            subcat:[
                     {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                     {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]},
                     {nombre:"musica", subcat:["playList","bandas","recitales"]},
                     {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                     {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
                   ]
       }

*/


       //-----------------------------------------------------------------
       this.listarResult_Categoria=function(){
         (function() {
                Handlebars.registerHelper("moduloCategoria_index_linkPost", function(value){
                    return new Handlebars.SafeString("post.php?id="+this.id+'&hora='+this.hora);
                });

                Handlebars.registerHelper("modulo_Categoria_resultado_cat", function(value){
                              return new Handlebars.SafeString(
                              "<div class='result_post_01_contCat_bot' style='background:#"+
                                colorFondoPorCategoria_(this)+
                              "; color:#"+
                                colorTextoPorCategoria_(this)+
                              ";'>"+
                                this+
                              "</div>"
                            );
                 });

                 Handlebars.registerHelper("modulo_Categoria_resultado_subCat", function(value){
                             var res_=[];
                             for(var i=0;i<this.subcat.length;i++){
                                res_.push("#"+this.subcat[i]);
                             }

                               return new Handlebars.SafeString(
                              "<div class='result_post_01_contCat_subcat'>"+
                                 res_+
                               "</div>"
                             );
                  });



                var template_ = document.getElementById("template_resultCategoria").innerHTML;
                var contTemplate = Handlebars.compile(template_);    ;
                //---------------json para los resultados destacados del index-------------------
                var context=bd_result_index;
                var templateCompile = contTemplate(context);
                $(".cont_categoria_section_result").html(templateCompile);

          })();
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











     }//------------fin de objeto:todosArt-----------

     return todosArt;  //return objeto function

}());
//-----------------------



$(document).ready(function(){

        var AF = new todosArt();

        //--------------active nav scroll------------
        $(document).on("scroll",function(){
            var body_ = document.getElementById("body_");
            body_.onscroll=function(){  AF.scrollBody_(body_);  }
        });

});
