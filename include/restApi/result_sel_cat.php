<?php

require 'lib.php';

$object = new CRUD();
// Design initial table header
$data = '';
$catSel_='';
$miArray =[];
$users=[];

if (isset($_POST['cat'])) {
  $catSel_ = $_POST['cat'];
  //echo $catSel_;
  $users = $object->resultados_por_categoria($catSel_); //console.log($users.length);
  echo $users;
}


//----------------


?>
