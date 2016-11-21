
<!-- .....................header del document y nav.................................... -->
<?php
    require_once('include/head.php');
?>


        <!-- ..............................page............................... -->
        <?php if(isset($_GET['page'])){
            $page= $_GET['page'];
        ?>

                <?php if($page=='categoria_'){ ?>  <!-- .................page categoria.................. -->

                                <script>
                                    var v1='<?php if(isset($_GET['cat'])){ echo $_GET['cat']; } ?>';
                                    var v2='<?php if(isset($_GET['subcat'])){ echo $_GET['subcat']; } ?>';
                                </script>

                                <!-- .....................header del document y nav.................................... -->
                                <?php  require_once('template/categoria.php');  ?>


                <?php }else if($page=='post_'){ ?>    <!-- .................page post................... -->

                                <script type="text/javascript">
                                    var v_id='<?php if(isset($_GET['id'])){ echo $_GET['id']; } ?>';
                                    var v_hora='<?php if(isset($_GET['hora'])){ echo $_GET['hora']; } ?>';

                                    var dir = window.document.URL;
                                    var dir_URL_Code = encodeURIComponent(dir); //url del post
                                </script>

                                <!-- .....................header del document y nav.................................... -->
                                <?php  require_once('template/post.php');  ?>

                <?php }else if($page=='terminos_'){ ?>

                                <?php  require_once('template/terminos.php');  ?>

                <?php } ?>

      <?php }else{?>

                      <!-- .....................header del document y nav.................................... -->
                      <?php  require_once('template/index_cont.php'); ?>

      <?php }?>








<!-- ..................footer del document y footer de index......................... -->
<?php
    require_once('include/footer.php');
?>





          <?php if(isset($_GET['page'])){  ?>
                    <?php if($page=='categoria_'){ ?>       <!-- .................page categoria.................. -->
                                  <script src="js/function_cat.js" type="text/javascript" charset="utf-8"></script>
                    <?php }else if($page=='post_'){ ?>            <!-- .................page post................... -->
                                  <script src="js/function_post.js" type="text/javascript" charset="utf-8"></script>
                    <?php }else if($page=='terminos_'){ ?>
                                  <script src="js/function_terminos.js" type="text/javascript" charset="utf-8"></script>
                    <?php } ?>


          <?php }else{ ?>
                    <script src="js/function_index.js" type="text/javascript" charset="utf-8"></script>
          <?php } ?>






<?php
    require_once('include/footer_body.php');
?>
