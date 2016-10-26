//--------------------------objeto para todos los artistas---------------
var todosArt = (function(){

  function todosArt(){

        "use strict";

        let categoriaVar="";
        let subCategoriaVar="";

        let urlVar="";

//--------------------------------------------------------------------------------------------------------------------


        this.set_categoriaVar=function(cat_){ categoriaVar=cat_;   }
        this.set_subCategoriaVar=function(subcat_){ subCategoriaVar=subcat_;  }
        this.get_categoriaVar=function(){ return categoriaVar;   }
        this.get_subCategoriaVar=function(){ return subCategoriaVar;  }

        //------------------

        this.verNav=function(){
          $("#nav_header_1").addClass("nav_fixed_top");
          $("#nav_header_1").removeClass("nav_off_top");
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
                     return new Handlebars.SafeString(urlVar+"categoria.php?cat="+this.categoria);
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
                     return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
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
                     return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
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
                  return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
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















       //------------------------------resultados para la seccion-----------------------------------
       this.listarResult_Categoria=function(){
         (function() {
                Handlebars.registerHelper("moduloCategoria_index_linkPost", function(value){
                    return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
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
                             var res_="";

                               for(var i=0;i<this.subcat.length;i++){
                                     res_+=("&nbsp;&nbsp;#"+this.subcat[i]);
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








       //---------------------------lista de subcategorias en la categoria selccionada--------------------------------------

           this.listarResult_totalSubcat=function(cat_){
               (function() {
                      console.log(cat_);
                      Handlebars.registerHelper("modulo_categoria_head_linkPost", function(value){
                          return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
                      });

                      Handlebars.registerHelper("modulo_categoria_subcat", function(value){
                        return new Handlebars.SafeString("<li><a href='"+urlVar+"categoria.php?subcat="+this+"' class='waves-effect btn' style='background:#"+
                        "'>"+
                            this+
                        "</a></li>");
                      });

                      var template_ = document.getElementById("template_categoria_subCatList").innerHTML;
                      var contTemplate = Handlebars.compile(template_);    ;
                      //---------------json para los resultados destacados del index-------------------
                      var context=bd_categoria_select;
                      var templateCompile = contTemplate(context);
                      $("#cont_categoria_head").html(templateCompile);
                })();
             }






           //--------------------------------lista de categorias para nav sidebar---------------------------------
           this.listarCategoria_navLik=function(){
             (function() {
                    Handlebars.registerHelper("moduloCategoria_catNav_link", function(value){
                        return new Handlebars.SafeString(urlVar+"categoria.php?cat="+this.categoria);
                    });

                    var template_ = document.getElementById("template_categoria_categorias_nav").innerHTML;
                    var contTemplate = Handlebars.compile(template_);
                    //---------------json para los resultados destacados del index-------------------
                    var context=bd_categorias;
                    var templateCompile = contTemplate(context);
                    $(".cont_sideBar_Categorias").html(templateCompile);
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



});
