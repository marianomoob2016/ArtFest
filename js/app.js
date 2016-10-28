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












//-------INDEX--------------INDEX-----------INDEX--------------INDEX------------INDEX-------------INDEX------------INDEX--------------INDEX---------INDEX-----------INDEX----














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
          (function(){
             $.post("include/restApi/result_index.php",{}, function (data){

                         if(data.length>0){
                               var dat=JSON.parse(data);

                               if(dat[0].length>0 && typeof  dat === 'object'){

                                     //-----------convert array el string ','---------------
                                     for(var i=0;i < dat[0].length;i++){  dat[0][i].categorias=dat[0][i].categorias.split(',');  }

                                     //-------------crea URL para lista de post en el index----------
                                      Handlebars.registerHelper("moduloResult_index_linkPost", function(value){
                                          console.log(this.dia_id,this.hora_id);
                                          return new Handlebars.SafeString(urlVar+"post.php?id="+this.dia_id+'&hora='+this.hora_id);
                                      });

                                      //-----------------crea subcategorias en modulo POST index---------------------
                                      Handlebars.registerHelper("moduloResult_itemsCategoria", function(value) {
                                       return new Handlebars.SafeString(
                                          "<div class='contResultIndex_moduloContfondo_cont_info_item1' style='background:#"+
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
                                       var context=dat[0];//bd_result_index;
                                       var templateCompile = contTemplate(context);
                                       $(".fila1").html(templateCompile);
                                }
                        }
                }).done(function() {
                    console.log("load: result index");
                }).fail(function() {
                    console.log("error");
                }).always(function() {
                   console.log("fin: result index");
                });
              })();
          }














 //-----------CATEGORIA-------------CATEGORIA-------------CATEGORIA------------CATEGORIA----------------CATEGORIA--------------CATEGORIA------------------CATEGORIA---------------


















       //------------------------------resultados para la seccion-----------------------------------
       this.listarResult_Categoria=function(cat_,sub_){
           if(cat_.length>0){
              $.post("include/restApi/result_sel_cat.php",{cat:cat_,sub:sub_}, function (){
                   $(".cont_categoria_section_result").html("<div class='progress'><div class='indeterminate' style='background-color:#"+colorFondoPorCategoria_(cat_)+"'></div></div>");
              }).done(function(data){
                setTimeout(function(){
                          if(data.length>2){
                              var dat=JSON.parse(data);
                            if(dat[0].length>0 && typeof  dat === 'object'){

                                   //------pre compres a array el string ','-----------
                                   for(var i=0;i < dat[0].length;i++){  dat[0][i].categorias=dat[0][i].categorias.split(',');  }


                                   Handlebars.registerHelper("moduloCategoria_index_linkPost", function(value){
                                       return new Handlebars.SafeString(urlVar+"post.php?id="+this.dia_id+'&hora='+this.hora_id);
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
                                   var contTemplate = Handlebars.compile(template_);
                                   //---------------json para los resultados destacados del index-------------------
                                   var context=dat[0];
                                   var templateCompile = contTemplate(context);
                                   $(".cont_categoria_section_result").html(templateCompile);
                             }
                           }
                }, 500);
             }).fail(function() {
                 console.log("error");
             }).always(function() {
                 console.log("fin: result sel cat");
             });
           }
       }





       //---------------------------lista de subcategorias en la categoria selccionada--------------------------------------

           this.listarResult_totalSubcat=function(cat_,sub_){
                (function() {
                  if(cat_.length>0){
                     $.post("include/restApi/sel_tipo_cat.php",{cat:cat_}, function (data){

                                //----------------
                                       Handlebars.registerHelper("modulo_categoria_head_linkPost", function(value){
                                           return new Handlebars.SafeString(urlVar+"post.php?id="+this.id+'&hora='+this.hora);
                                       });
                                //----------------
                                       Handlebars.registerHelper("modulo_categoria_subcat", function(value){
                                           if(dat.subCat.length>0 && dat.subCat[0].length>1){
                                                 return new Handlebars.SafeString("<li><a href='"+urlVar+"categoria.php?cat="+cat_+"&subcat="+this+"' class='waves-effect btn' style='background:#"+
                                                   dat.colorFondo+
                                                 "; color:#"+
                                                   dat.colorTexto+
                                                 "'>"+
                                                   this+
                                                 "</a></li>");
                                           }else{
                                                return new Handlebars.SafeString("");
                                           }
                                       });
                               //----------------
                                      if(data.length>0){
                                          var dat=JSON.parse(data);
                                          if(typeof  dat === 'object'){
                                              var template_ = document.getElementById("template_categoria_subCatList").innerHTML;
                                              var contTemplate = Handlebars.compile(template_);
                                              //---------------json para los resultados destacados del index-------------------
                                              var context=dat;
                                              var templateCompile = contTemplate(context);
                                              $("#cont_categoria_head").html(templateCompile);
                                            }
                                      }

                      });

                    }
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


//-----------------------------apiRest------------------------





            // Add Record
            this.addRecord = function() {
                // get values
                var first_name = $("#first_name").val();
                first_name = first_name.trim();
                var last_name = $("#last_name").val();
                last_name = last_name.trim();
                var email = $("#email").val();
                email = email.trim();

                if (first_name == "") {
                    alert("First name field is required!");
                }
                else if (last_name == "") {
                    alert("Last name field is required!");
                }
                else if (email == "") {
                    alert("Email field is required!");
                }
                else {
                    // Add record
                    $.post("ajax/create.php", {
                        first_name: first_name,
                        last_name: last_name,
                        email: email
                    }, function (data, status) {
                        // close the popup
                        $("#add_new_record_modal").modal("hide");

                        // read records again
                        readRecords();

                        // clear fields from the popup
                        $("#first_name").val("");
                        $("#last_name").val("");
                        $("#email").val("");
                    });
                }
            }

           this.GetUserDetails = function(id) {
              // Add User ID to the hidden field
              $("#hidden_user_id").val(id);
              $.post("ajax/details.php", {
                      id: id
                  },
                  function (data, status) {
                      // PARSE json data
                      var user = JSON.parse(data);
                      // Assign existing values to the modal popup fields
                      $("#update_first_name").val(user.first_name);
                      $("#update_last_name").val(user.last_name);
                      $("#update_email").val(user.email);
                  }
              );
              // Open modal popup
              $("#update_user_modal").modal("show");
          }


          //---------------------------------------


          this.UpdateUserDetails = function() {
                // get values
                var first_name = $("#update_first_name").val();
                first_name = first_name.trim();
                var last_name = $("#update_last_name").val();
                last_name = last_name.trim();
                var email = $("#update_email").val();
                email = email.trim();

                if (first_name == "") {
                    alert("First name field is required!");
                }
                else if (last_name == "") {
                    alert("Last name field is required!");
                }
                else if (email == "") {
                    alert("Email field is required!");
                }
                else {
                    // get hidden field value
                    var id = $("#hidden_user_id").val();

                    // Update the details by requesting to the server using ajax
                    $.post("ajax/update.php", {
                            id: id,
                            first_name: first_name,
                            last_name: last_name,
                            email: email
                        },
                        function (data, status) {
                            // hide modal popup
                            $("#update_user_modal").modal("hide");
                            // reload Users by using readRecords();
                            readRecords();
                        }
                    );
                }
            }


            //---------------------------



            this.DeleteUser = function(id) {
                var conf = confirm("Are you sure, do you really want to delete User?");
                if(conf == true){
                    $.post("ajax/delete.php", {id: id}, function (data, status) {
                            // reload Users by using readRecords();
                            readRecords();
                        }
                    );
                }
            }














     }//------------fin de objeto:todosArt-----------

     return todosArt;  //return objeto function

}(this));
//-----------------------



$(document).ready(function(){

      //  var AF = new todosArt();



});
