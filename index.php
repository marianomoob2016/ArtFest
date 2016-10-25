

<!-- .....................header del document y nav.................................... -->
    <?php
        require_once('include/head.php');
    ?>





<!-- ........................header slider................................. -->
    <?php
        require_once('include/header_slider.php');
    ?>




<!-- ...........................cont section index...................................................... -->
    <div id="contSection">
     <div class="col s12 m12 l12">




          <div class="col s12 m12 l12">
            <div id="contModalSubHead" class="row">







                  <!-- .......................categorias - index...................................-->

                  <div id="contModalCategoria" class="col s12 m12 l8">

                          <div id="contCategoria1" class="col s12 m12 l8">
                                    <!-- ..........categoria 1 grande........ -->
                                    <div class="contGrandeCat col s12 m12 l12">
                                          <a href="#!" target="_self" title="">
                                              <img src="img/template/categoria_club_media.jpg"/>
                                              <div class="contCat_fondo_opacity"></div>
                                              <div class="contInfoGrandeCat">
                                                    <h1>Club Media Fest</h1>
                                                    <p>Viví desde adentro cada momento de los shows de tus artistas favoritos y participá por Meet&Greet y entradas VIP.</p>
                                                    <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon"></div></div>
                                              </div>
                                          </a>
                                    </div>
                                    <!-- ..........categoria 2 chicos........ -->
                                    <div class="contChicoCat col s12 m12 l6" style="background:#ffff01;">
                                        <a href="#!" target="_self" title="">
                                            <div class="contInfoChicoCat"  style="color:#000;">
                                                  <h1>Humor</h1>
                                                  <p>Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.</p>
                                                  <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon" style="background:#000;"></div></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="contChicoCat col s12 m12 l6" style="background:#168ce6;">
                                          <a href="#!" target="_self" title="">
                                              <div class="contInfoChicoCat">
                                                  <h1>Música</h1>
                                                  <p>Son las nuevas estrellas de todos los tiempos. Mirá videos exclusivos en Club.Media.</p>
                                                  <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon"></div></div>
                                              </div>
                                          </a>
                                    </div>
                          </div>

                          <div  id="contCategoria2" class="col s12 m12 l4">
                                  <!-- ..........categoria 3 chicos....... -->
                                  <div class="contChicoCat col s12 m12 l12" style="background:#f4206a;">
                                          <a href="#!" target="_self" title="">
                                              <div class="contInfoChicoCat">
                                                    <h1>Belleza</h1>
                                                    <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                                    <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon"></div></div>
                                              </div>
                                          </a>
                                  </div>
                                  <div class="contChicoCat col s12 m12 l12" style="background:#35df89;">
                                          <a href="#!" target="_self" title="">
                                                <div class="contInfoChicoCat">
                                                      <h1>Lifestyle</h1>
                                                      <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                                      <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon"></div></div>
                                                </div>
                                          </a>
                                  </div>
                                  <div class="contChicoCat col s12 m12 l12" style="background:#fe4300;">
                                          <a href="#!" target="_self" title="">
                                                <div class="contInfoChicoCat">
                                                      <h1>Gamers</h1>
                                                      <p>Viví desde adentro cada momento de los shows de tus artistas favoritos y participá por Meet&Greet y entradas VIP</p>
                                                      <div class="contVidInfo"><p>70 Videos</p><div class="contVidInfo_icon"></div></div>
                                                </div>
                                          </a>
                                  </div>
                          </div>
                  </div>





                  <!-- .......................sidebar index...................................-->

                  <div id="contModalAside" class="col s12 m12 l4">

                            <div id="contAsideUp" class="col s12 m12 l12">

                            </div>

                            <div id="contAsideBotton" class="col s12 m12 l12">
                                <img src="img/template/asideBottomImg.jpg" title="Destacado"/>
                                <div class="contAsideBotton_fondo_opacity"></div>
                                <div class="contAsideBotton_info">
                                      <h1>Dai <br> Hernández</h1>
                                      <h4>Humor argentino</h4>
                                      <p>Entrevistamos a Dani para que nos cuente cómo es su vida desde que es estrella en las redes. ¿Qué pensarán su familia y sus amigos?</p>
                                  <a href="#!" title="" class="waves-effect waves-light btn">Leer más</a>
                                </div>
                            </div>
                  </div>


            </div>
         </div>

         <!-- ................................................................................. -->










         <!-- .........................modulo resultados cont.................................... -->
         <div class="col s12 m12 l12">
           <div id="contModalResult" class="row">

             <!-- ...................................modulo de resultado A....................................................-->
             <script id="template_ContChicoResult" type="text/x-handlebars-template">
              {{#each videos}}
                {{#ifCond @index '<' 5}}

                                {{#ifCond @index '==' 2}}
                                        <!-- .........modulo conectate en posicion 3 antes de seguir con el each.....................-->
                                        <div class="contChicoResult col s12 m12 l4">
                                                <div class="contChicoResult_moduloPopUp_Conectate">
                                                    <h1>Conectate</h1>
                                                    <div class="col s12 m12 l2 center iconCont">
                                                        <div class="row ">
                                                          <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
                                                          <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
                                                          <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-pinterest" aria-hidden="true"></i></a></div>
                                                          <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>

                                        <!--.................... modulo de resultado grande...................-->
                                        <div class="contGrandeResult col s12 m12 l8">
                                                <div class="contGrandeResult_moduloCont">
                                                    <a href="#!" target="_self" title="">
                                                        <img src="{{srcImg}}"/>
                                                        <div class="contGrandeResult_moduloContfondo_opacity"></div>
                                                        <div class="contGrandeResult_moduloContfondo_cont_info">
                                                          {{#each categorias}}
                                                               {{moduloResult_grande this.cat}}
                                                          {{/each}}
                                                          <h1>{{titulo}}</h1>
                                                          <p>{{subTit}}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                        </div>
                                {{else}}
                                      <!--.................... modulo de resultado chico................-->
                                        <div class="contChicoResult col s12 m12 l4">
                                          <div class="contChicoResult_moduloCont">
                                              <a href="#!" target="_self" title="">
                                                  <img src="{{srcImg}}"/>
                                                  <div class="contChicoResult_moduloContfondo_opacity"></div>
                                                  <div class="contChicoResult_moduloContfondo_cont_info">
                                                    {{#each categorias}}
                                                         {{moduloResult_chico this.cat}}
                                                    {{/each}}
                                                    <h1>{{titulo}}</h1>
                                                    <p>{{subTit}}</p>
                                                  </div>
                                              </a>
                                          </div>
                                        </div>
                              {{/ifCond}}
                    {{/ifCond}}
              {{/each}}
             </script>
             <div class="fila1">

                   <!-- ................3 videos chicos................. -->
                   <!--div class="contChicoResult col s12 m12 l4">
                           <div class="contChicoResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video01.jpg"/>
                                   <div class="contChicoResult_moduloContfondo_opacity"></div>
                                   <div class="contChicoResult_moduloContfondo_cont_info">
                                     <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div>
                   </div>
                   <div class="contChicoResult col s12 m12 l4">
                           <div class="contChicoResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video02.jpg"/>
                                   <div class="contChicoResult_moduloContfondo_opacity"></div>
                                   <div class="contChicoResult_moduloContfondo_cont_info">
                                     <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#fc4300; color:#fff;">Gamer</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div>
                   </div-->
                   <!--div class="contChicoResult col s12 m12 l4">
                           <div class="contChicoResult_moduloPopUp_Conectate">
                               <h1>Conectate</h1>
                               <div class="col s12 m12 l2 center iconCont">
                                   <div class="row ">
                                     <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
                                     <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
                                     <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-pinterest" aria-hidden="true"></i></a></div>
                                     <div class="col s3"><a href="#!" alt="" target="_self"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
                                   </div>
                               </div>
                           </div>
                   </div-->
                           <!--div class="contChicoResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video03.jpg"/>
                                   <div class="contChicoResult_moduloContfondo_opacity"></div>
                                   <div class="contChicoResult_moduloContfondo_cont_info">
                                     <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#fc4300; color:#fff;">Gamer</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div-->
                   <!-- ..........................contenedor grande.......................... -->
                   <!--div class="contGrandeResult col s12 m12 l8">
                           <div class="contGrandeResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video05.jpg"/>
                                   <div class="contGrandeResult_moduloContfondo_opacity"></div>
                                   <div class="contGrandeResult_moduloContfondo_cont_info">
                                     <div class="contGrandeResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div>
                   </div>
                   <div class="contChicoResult col s12 m12 l4">
                           <div class="contChicoResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video04.jpg"/>
                                   <div class="contChicoResult_moduloContfondo_opacity"></div>
                                   <div class="contChicoResult_moduloContfondo_cont_info">
                                     <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#feff00; color:#333;">Humor</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div>
                   </div>
                   <div class="contChicoResult col s12 m12 l4">
                           <div class="contChicoResult_moduloCont">
                               <a href="#!" target="_self" title="">
                                   <img src="img/template/video01.jpg"/>
                                   <div class="contChicoResult_moduloContfondo_opacity"></div>
                                   <div class="contChicoResult_moduloContfondo_cont_info">
                                     <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                     <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                     <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                   </div>
                               </a>
                           </div>
                   </div-->
            </div>


            <!-- ...................................modulo de resultado B....................................................-->
            <div class="fila2">
                  <!-- ................3 videos chicos................. -->
                  <div class="contChicoResult col s12 m12 l4">
                        <div class="contChicoResult_moduloCont">
                            <a href="#!" target="_self" title="">
                                <img src="img/template/video01.jpg"/>
                                <div class="contChicoResult_moduloContfondo_opacity"></div>
                                <div class="contChicoResult_moduloContfondo_cont_info">
                                  <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                  <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                  <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                </div>
                            </a>
                        </div>
                  </div>
                  <div class="contChicoResult col s12 m12 l4">
                        <div class="contChicoResult_moduloCont">
                            <a href="#!" target="_self" title="">
                                <img src="img/template/video02.jpg"/>
                                <div class="contChicoResult_moduloContfondo_opacity"></div>
                                <div class="contChicoResult_moduloContfondo_cont_info">
                                  <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                  <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                  <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                </div>
                            </a>
                        </div>
                  </div>
                  <div class="contChicoResult col s12 m12 l4">
                      <div class="contChicoResult_moduloCont">
                          <a href="#!" target="_self" title="">
                              <img src="img/template/video03.jpg"/>
                              <div class="contChicoResult_moduloContfondo_opacity"></div>
                              <div class="contChicoResult_moduloContfondo_cont_info">
                                <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                              </div>
                          </a>
                      </div>
                  </div>
                  <!-- ............................. -->
                  <div class="contChicoResult col s12 m12 l4">
                          <div class="contChicoResult_moduloPopUp_Aviso">
                              <a href="#!" alt="">
                                  <img src="img/template/bot_aviso.jpg"/>
                                  <div class="contChicoResult_moduloPopUp_Aviso_info"> ¡Conseguí <br> tus entradas! </div>
                              </a>
                          </div>
                  </div>

                  <div class="contGrandeResult contGrandeResult_2b col s12 m12 l8">
                        <div class="contGrandeResult_moduloCont">
                            <a href="#!" target="_self" title="">
                                <img src="img/template/video05.jpg"/>
                                <div class="contGrandeResult_moduloContfondo_opacity"></div>
                                <div class="contGrandeResult_moduloContfondo_cont_info">
                                  <div class="contGrandeResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                  <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                  <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                                </div>
                            </a>
                        </div>
                  </div>
                  <div class="contChicoResult  col s12 m12 l4">
                      <div class="contChicoResult_moduloCont">
                          <a href="#!" target="_self" title="">
                              <img src="img/template/video04.jpg"/>
                              <div class="contChicoResult_moduloContfondo_opacity"></div>
                              <div class="contChicoResult_moduloContfondo_cont_info">
                                <div class="contChicoResult_moduloContfondo_cont_info_item1" style="background:#f4206a; color:#fff;">Belleza</div>
                                <h1>Ellos la rompen en las redes y en la TV. Mirá el backstage acá.</h1>
                                <p>Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.</p>
                              </div>
                          </a>
                      </div>
                  </div>

           </div>
          </div>
         </div>
         <!-- .......................................................... -->


     </div>
   </div>
   <!-- .............................fin cont section index............................. -->







     <!-- ..................footer del document y footer de index......................... -->
     <?php
        require_once('include/footer.php');
     ?>
