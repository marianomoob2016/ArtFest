<!-- ......................................................... -->


    <?php
        require_once('include/head.php');
    ?>



    <!-- .............................. -->

        <?php
            if (isset($_GET['cat'])) {
              $categoria = $_GET['cat'];
              echo $categoria;
            }
            if (isset($_GET['subcat'])) {
              $subCategoria = $_GET['subcat'];
              echo $subCategoria;
            }
        ?>



<!-- ......................................................... -->




<div id="cont_categoria"  class="col s12 m12 l12">
  <div class="row">


    <script id="template_categoria_subCatList" type="text/x-handlebars-template">
           <h1 class="center" style="color:#{{colorFondo}};">{{categoria}}</h1>
           <div class="cont_categoria_head_navBar_subCategorias">
              <ul class="col s12 m12 l12">
                 {{#each this.subCat}}
                      {{modulo_categoria_subcat this.subCat }}
                 {{/each}}
              </ul>
           </div>
   </script>

   <div id="cont_categoria_head" class="col s12 m12 l12"></div>




   <?php
               try {
                 	//Creamos la conexión PDO por medio de una instancia de su clase
                 	$cnn = new PDO("mysql:host=localhost;dbname=bd_artfest","root","");
                 	//Preparamos la consulta sql
                 	$respuesta = $cnn->prepare("select * from lista_videos");
                 	//Ejecutamos la consulta
                 	$respuesta->execute();
                 	$usuarios = [];

                 	foreach($respuesta as $res){
                      $usuarios[] = $res;
                 	}
                 	   //Hacemos una impresion del array en formato JSON.
                 	   //$result_json= json_encode($usuarios);
                     echo " - ".$res[0]." - ".$res[1]." - ".$res[2]." - ".$res[3]." - ".$res[4]." - ".$res[5]." - ".$res[6]." - ".$res[7]." - ".$res[8]." - ".$res[9];
                     echo $res[10]." - ".$res[11]." - ".$res[12]." - ".$res[13]." - ".$res[14]." - ".$res[15]." - ".$res[16]." - ".$res[17]." - ".$res[18]." - ".$res[19];
                     echo $res[20]." - ".$res[21]." - ".$res[22]." - ".$res[23]." - ".$res[24]." - ".$res[25]." - ".$res[26]." - ".$res[27];

                   }catch(Exception $e){
                   	// echo $e->getMessage();
                   }
           ?>





   <!-- .............................. -->


  <div id="cont_categoria_section"  class="col s12 m12 l12">

        <script id="template_resultCategoria" type="text/x-handlebars-template">
         {{#each videos}}
         {{#ifCond @index '<' 7}}
               {{#ifCond @index '%' 2}}
                   <div class="cont_categoria_section_result_post">
                           <a href="{{moduloCategoria_index_linkPost this.categorias}}" target="_self" title="link post">
                                 <div class="result_post_01 col s12 m6 s6">
                                     <div class="result_post_01_contenido">
                                           <div class="result_post_01_contCat">
                                             <div class="result_post_01_contCat_subCont">
                                                   {{#each categorias}}
                                                         {{modulo_Categoria_resultado_cat this.categorias}}
                                                    {{/each}}
                                              </div>
                                              <!--div class="result_post_01_contCat_subCont">
                                                   {{#each subcat}}
                                                        {{modulo_Categoria_resultado_subCat this.subcat}}
                                                   {{/each}}
                                             </div-->
                                           </div>

                                           <h1>{{titulo}}</h1>
                                           <p>{{subTit}}</p>
                                           <div class="result_post_01_contenido_icon"></div>
                                     </div>
                                 </div>

                                 <div class="result_post_02 col s12 m6 s6">
                                     <img src="{{srcImg}}" alt=""/>
                                     <div class="result_post_02_contOpacity"></div>
                                 </div>
                           </a>
                   </div>

               {{else}}

                   <div class="cont_categoria_section_result_post">
                           <a href="{{moduloCategoria_index_linkPost this.categorias}}" target="_self" title="link post">
                                 <div class="result_post_02 col s12 m6 s6">
                                     <img src="{{srcImg}}" alt=""/>
                                     <div class="result_post_02_contOpacity"></div>
                                 </div>

                                 <div class="result_post_01 col s12 m6 s6">
                                   <div class="result_post_01_contenido">
                                         <div class="result_post_01_contCat">
                                               <div class="result_post_01_contCat_subCont">
                                                     {{#each categorias}}
                                                           {{modulo_Categoria_resultado_cat this.categorias}}
                                                      {{/each}}
                                                </div>
                                                <!--div class="result_post_01_contCat_subCont">
                                                     {{#each subcat}}
                                                          {{modulo_Categoria_resultado_subCat this.subcat}}
                                                     {{/each}}
                                               </div-->
                                         </div>

                                         <h1>{{titulo}}</h1>
                                         <p>{{subTit}}</p>
                                         <div class="result_post_01_contenido_icon"></div>
                                   </div>
                                 </div>
                           </a>
                   </div>

             {{/ifCond}}
          {{/ifCond}}

         {{/each}}
       </script>

    <!-- ...........resultados.............. -->
    <div class="cont_categoria_section_result col s12 m12 l8"></div>






    <!-- .............sidebar............ -->

    <div class="cont_categoria_section_sidebar col s12 m12 l4">

      <div class="cont_sideBar_Buscador col s12 m6 l12">

      </div>

      <div class="cont_sideBar_Aviso col s12 m6 l12">
                    <a href="#!" alt="">
                        <img src="img/template/bot_aviso.jpg"/>
                        <div class="cont_sideBar_Aviso_info"> ¡Conseguí <br> tus entradas! </div>
                    </a>
      </div>

      <div class="cont_sideBar_Conectate col s12 m6 l12">
              <h1>Conectate</h1>
              <div class="col s12 m12 l2 center iconCont">
                  <div class="row ">
                    <div class="col s3"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                    <div class="col s3"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <div class="col s3"><i class="fa fa-pinterest" aria-hidden="true"></i></div>
                    <div class="col s3"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                  </div>
              </div>
      </div>

      <div class="cont_sideBar_Destacado col s12 m6 l12">
              <img src="img/template/asideBottomImg.jpg" title="Destacado"/>
              <div class="contAsideBotton_fondo_opacity"></div>
              <div class="contAsideBotton_info">
                    <h1>Dai <br> Hernández</h1>
                    <h4>Humor argentino</h4>
                    <p>Entrevistamos a Dani para que nos cuente cómo es su vida desde que es estrella en las redes. ¿Qué pensarán su familia y sus amigos?</p>
                    <a href="#!" title="" class="waves-effect waves-light btn">Leer más</a>
              </div>
      </div>



      <!-- ......................................nav categoria en sidebar..................................................... -->

          <script id="template_categoria_categorias_nav" type="text/x-handlebars-template">
              {{#each categorias}}
                    <div class="cont_sideBar_Categorias_individual" style="background:#{{colorFondo}};">
                          <a href="{{moduloCategoria_catNav_link this.categorias }}" target="_self" title="" style="color:#{{colorTexto}};">
                              <div class="cont_sideBar_Categorias_individual_info">
                                    <h1>{{categoria}}</h1>
                                    <p>{{infoCat}}</p>
                                    <div class="cont_sideBar_Categorias_individual_info_vid">
                                        <p>{{cantidad}} Videos</p>
                                        <div class="cont_sideBar_Categorias_individual_info_vid_icon" style="background:#{{colorTexto}};"></div>
                                    </div>
                              </div>
                          </a>
                    </div>
              {{/each}}
        </script>


      <div class="cont_sideBar_Categorias col s12 m12 l12">

           <!--div class="cont_sideBar_Categorias_individual" style="background:#ffff01;">
                 <a href="#!" target="_self" title="" style="color:#333;">
                     <div class="cont_sideBar_Categorias_individual_info">
                           <h1>Humor</h1>
                           <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                           <div class="cont_sideBar_Categorias_individual_info_vid">
                               <p>70 Videos</p>
                               <div class="cont_sideBar_Categorias_individual_info_vid_icon" style="background:#333;"></div>
                           </div>
                     </div>
                 </a>
           </div>
           <div class="cont_sideBar_Categorias_individual"  style="background:#168ce6;">
                 <a href="#!" target="_self" title="">
                     <div class="cont_sideBar_Categorias_individual_info">
                           <h1>Música</h1>
                           <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                           <div class="cont_sideBar_Categorias_individual_info_vid"><p>70 Videos</p><div class="cont_sideBar_Categorias_individual_info_vid_icon"></div></div>
                     </div>
                 </a>
           </div>
           <div class="cont_sideBar_Categorias_individual" style="background:#f4206a;">
                 <a href="#!" target="_self" title="">
                     <div class="cont_sideBar_Categorias_individual_info">
                           <h1>Belleza</h1>
                           <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                           <div class="cont_sideBar_Categorias_individual_info_vid"><p>70 Videos</p><div class="cont_sideBar_Categorias_individual_info_vid_icon"></div></div>
                     </div>
                 </a>
           </div>
           <div class="cont_sideBar_Categorias_individual" style="background:#35df89;">
               <a href="#!" target="_self" title="">
                   <div class="cont_sideBar_Categorias_individual_info">
                         <h1>Lifestyle</h1>
                         <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                         <div class="cont_sideBar_Categorias_individual_info_vid"><p>70 Videos</p><div class="cont_sideBar_Categorias_individual_info_vid_icon"></div></div>
                   </div>
               </a>
           </div>
           <div class="cont_sideBar_Categorias_individual" style="background:#fe4300;">
               <a href="#!" target="_self" title="">
                   <div class="cont_sideBar_Categorias_individual_info">
                         <h1>Gamers</h1>
                         <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                         <div class="cont_sideBar_Categorias_individual_info_vid"><p>70 Videos</p><div class="cont_sideBar_Categorias_individual_info_vid_icon"></div></div>
                   </div>
               </a>
           </div-->
      </div>

    </div>
  </div>






</div>
</div>
















<!-- ..................footer del document y footer de categoria......................... -->
<?php
    require_once('include/footer.php');
?>

<script src="js/function_categoria.js" type="text/javascript" charset="utf-8"></script>

<?php
    require_once('include/footer_body.php');
?>
