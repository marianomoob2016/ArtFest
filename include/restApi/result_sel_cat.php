<?php

require 'lib.php';

$object = new CRUD();
// Design initial table header
$data = '';
$catSel_='';
$miArray =[];

if (isset($_POST['cat'])) {
  $catSel_ = $_POST['cat'];
  //echo $catSel_;
}
if (isset($_POST['sub'])) {
  $subSel_ = $_POST['sub'];
  //echo $catSel_;
}

$user = $object->resultados_por_categoria($catSel_);


  //  foreach ($users as $user) {
        $cat_ = explode(",", $user['categorias']);
        $subCat_ = explode(",", $user['subCat']);
        $autores_ = explode(",", $user['autores']);
        $miArray= array(
            "id"=>$user['dia_id'],
            "hora"=>$user['hora_id'],
            "autores"=>$autores_,
            "titulo"=>$user['titulo'],
            "subTit"=>$user['subTit'],
            "urlImgVid"=>$user['urlImgVid'],
            "destacadoPos"=>$user['destacado_posicion'],
            "srcImgDestacado"=>$user['srcImgDestacado'],
            "categorias"=>$cat_,
            "subCat"=>$subCat_
       );
  //  }

    $data= json_encode($miArray, JSON_UNESCAPED_UNICODE);
    echo $data;




?>
