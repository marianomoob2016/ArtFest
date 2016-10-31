<!-- ......................................................... -->

<?php
    require_once('include/head.php');
?>


<!-- ......................................................... -->


<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>




    <!-- ...............template Handlebars..................... -->
       <script id="template_Post_Script" type="text/x-handlebars-template">

             <div id="cont_post_head" class="col s12 m12 l12 center">
               <div id="cont_post_head_catSubcat" class="col s12 m12 l12 center">
                   <h2 style="color:#84ab1a;"> {{#each this.categoria}} #{{this}} {{/each}} </h2>
                   <h2 style="color:#6e3ac3;">
                      {{#each this.categoria}}  #{{this}}  {{/each}}
                   </h2>
               </div>
               <div id="cont_post_head_titu" class="col s12 m12 l12 center">
                   <h1 id="tituloPost" class="center">{{titulo}}</h1>
                   <h1 id="categoriaPost" class="center">
                       {{#each this.subcat}}
                          #{{nombre}}
                       {{/each}}
                   </h1>
               </div>
               <div  id="cont_post_head_titRedsocial" class="col s12 m12 l12" style="margin-bottom:10px;">Compartime</div>
               <div id="cont_post_head_redsocial" class="col s12 m12 l12">
                  <div class="col s1 m1 l1"></div>
                  <div class="col s2 m2 l2">
                    <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmarianoferle.com.ar%2Fpost.php%3Fid%3D{{id}}%26hora%3D{{hora}}&amp;src=sdkpreparse">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <!--div class="fb-share-button" data-href="http://marianoferle.com.ar/post.php?id={{id}}&amp;hora={{hora}}" data-layout="button_count" data-size="small" data-mobile-iframe="true">
                    </div-->
                  </div>
                  <div class="col s2 m2 l2"><a href="" alt=""><i class="fa fa-twitter" aria-hidden="true"></i></a> </div>
                  <div class="col s2 m2 l2"><a href="" alt=""> <i class="fa fa-pinterest" aria-hidden="true"></i> </a></div>
                  <div class="col s2 m2 l2"><a href="" alt=""> <i class="fa fa-paperclip" aria-hidden="true"></i> </a></div>
                  <div class="col s2 m2 l2"><a href="" alt=""> <i class="fa fa-whatsapp" aria-hidden="true"></i> </a></div>
                  <div class="col s1 m1 l1"></div>
               </div>
            </div>

            <div id="cont_post_section_video" class="col s12 m12 l12">

                 <div id="cont_post_section_video_cont" class="col s12 m12 l12">
                   <iframe src="https://player.vimeo.com/video/{{urlVideo}}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                 </div>

                 <div id="cont_post_section_video_info" class="col s12 m12 l12">

                       <div id="cont_post_section_video_info_youtuber" class="col s12 m12 l12">
                         {{#each this.autores}}
                           <div class="infoLink_youtuber_section"><i class="fa fa-link" aria-hidden="true"></i> <h1>{{this}}</h1> </div>

                           {{/each}}
                       </div>

                       <div id="cont_post_section_video_info_youtuber_texto" class="col s12 m12 l12">
                             <p>
                               {{info}}
                             </p>
                             <p>
                               {{masInfo}}
                             </p>
                       </div>


                       <div id="cont_post_section_video_info_youtuber_redSocial" class="col s12 m10 l8">
                           <div  id="cont_post_section_video_info_youtuber_redSocial_tit" class="col s12 m4 l6" style="margin-bottom:10px;">Compartime:</div>
                           <div id="cont_post_section_video_info_youtuber_redSocial_icon" class="col s12 m8 l6">
                              <div class="col s1 m1 l1"><a href="#!" alt="">   </a></div>
                              <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-facebook" aria-hidden="true"></i>  </a></div>
                              <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-twitter" aria-hidden="true"></i>   </a></div>
                              <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-pinterest" aria-hidden="true"></i> </a></div>
                              <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-paperclip" aria-hidden="true"></i> </a></div>
                              <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-whatsapp" aria-hidden="true"></i> </a></div>
                              <div class="col s1 m1 l1"><a href="#!" alt="">  </a></div>

                            </div>
                      </div>
                      <div class="col s12 m10 l4">

                      </div>

                  </div>
              </div>
       </script>


       <div id="cont_post"  class="col s12 m12 l12">
          <div class="row">
            <div id="cont_post_result_template"></div>



    <!-- .................end................... -->




<!--div id="cont_post"  class="col s12 m12 l12">
  <div class="row">

      <div id="cont_post_head" class="col s12 m12 l12 center">
        <div id="cont_post_head_catSubcat" class="col s12 m12 l12 center">
            <h2 style="color:#6e3ac3;">ClubMediaFest </h2>
            <h2 style="color:#6e3ac3;">#Adelante #Perú2016 </h2>
        </div>
        <div id="cont_post_head_titu" class="col s12 m12 l12 center">
            <h1 id="tituloPost" class="center">¡Venimos con un show nuevo y cada vez más grande!</h1>
            <h1 id="categoriaPost" class="center">#ClubMediaFest</h1>
        </div>
        <div  id="cont_post_head_titRedsocial" class="col s12 m12 l12" style="margin-bottom:10px;">Compartime</div>
        <div id="cont_post_head_redsocial" class="col s12 m12 l12">
           <div class="col s1 m1 l1"></div>
           <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-facebook" aria-hidden="true"></i>  </a></div>
           <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-twitter" aria-hidden="true"></i>   </a></div>
           <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-pinterest" aria-hidden="true"></i> </a></div>
           <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-paperclip" aria-hidden="true"></i> </a></div>
           <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-whatsapp" aria-hidden="true"></i> </a></div>
           <div class="col s1 m1 l1"></div>
        </div>
     </div>

     <div id="cont_post_section_video" class="col s12 m12 l12">

          <div id="cont_post_section_video_cont" class="col s12 m12 l12">
            <iframe src="https://player.vimeo.com/video/189364382" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>

          <div id="cont_post_section_video_info" class="col s12 m12 l12">

                <div id="cont_post_section_video_info_youtuber" class="col s12 m12 l12">
                    <div class="infoLink_youtuber_section"><i class="fa fa-link" aria-hidden="true"></i> <h1>Youtuber1</h1> </div>
                    <div class="infoLink_youtuber_section"><i class="fa fa-link" aria-hidden="true"></i> <h1>Youtuber2</h1> </div>
                    <div class="infoLink_youtuber_section"><i class="fa fa-link" aria-hidden="true"></i> <h1>Youtuber3</h1> </div>
                </div>

                <div id="cont_post_section_video_info_youtuber_texto" class="col s12 m12 l12">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br><br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                </div>


                <div id="cont_post_section_video_info_youtuber_redSocial" class="col s12 m10 l8">
                    <div  id="cont_post_section_video_info_youtuber_redSocial_tit" class="col s12 m4 l6" style="margin-bottom:10px;">Compartime:</div>
                    <div id="cont_post_section_video_info_youtuber_redSocial_icon" class="col s12 m8 l6">
                       <div class="col s1 m1 l1"><a href="#!" alt="">   </a></div>
                       <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-facebook" aria-hidden="true"></i>  </a></div>
                       <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-twitter" aria-hidden="true"></i>   </a></div>
                       <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-pinterest" aria-hidden="true"></i> </a></div>
                       <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-paperclip" aria-hidden="true"></i> </a></div>
                       <div class="col s2 m2 l2"><a href="#!" alt=""> <i class="fa fa-whatsapp" aria-hidden="true"></i> </a></div>
                       <div class="col s1 m1 l1"><a href="#!" alt="">  </a></div>

                     </div>
               </div>
               <div class="col s12 m10 l4">

               </div>

          </div>
     </div-->


















     <div id="cont_post_section_destacado" class="col s12 m12 l12">
          <div class="col s12 m4 l4">

          </div>
          <div class="col s12 m4 l4">

          </div>
          <div class="col s12 m4 l4">

          </div>
     </div>








      <div id="cont_post_section_footer_redSocial" class="col s12 m12 l12">
        <div id="cont_post_section_footer_redSocial_tit" class="col s12 m12 l12 center">Conectate a tus artistas favoritos</div>
        <div class="col s2 m2 l2"></div>
        <div class="col s2 m2 l2 center"><a href="#!" alt=""> <i class="fa fa-facebook" aria-hidden="true"></i>  </a></div>
        <div class="col s2 m2 l2 center"><a href="#!" alt=""> <i class="fa fa-twitter" aria-hidden="true"></i>   </a></div>
        <div class="col s2 m2 l2 center"><a href="#!" alt=""> <i class="fa fa-pinterest" aria-hidden="true"></i> </a></div>
        <div class="col s2 m2 l2 center"><a href="#!" alt=""> <i class="fa fa-instagram" aria-hidden="true"></i> </a></div>
        <div class="col s2 m2 l2"></div>
      </div>













</div>
</div>











<!-- ..................footer del document y footer de post......................... -->
<?php
    require_once('include/footer.php');
?>

<script>
        var v_id='<?php if(isset($_GET['id'])){ echo $_GET['id']; } ?>';
        var v_hora='<?php if(isset($_GET['hora'])){ echo $_GET['hora']; } ?>';
</script>


<script src="js/function_post.js" type="text/javascript" charset="utf-8"></script>


<?php
    require_once('include/footer_body.php');
?>
