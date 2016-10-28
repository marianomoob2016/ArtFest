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

$users = $object->resultados_por_categoria($catSel_);

echo $users;

//----------------




?>
