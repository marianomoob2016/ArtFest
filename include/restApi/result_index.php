<?php

require 'lib.php';

$object = new CRUD();
// Design initial table header

$users=[];


  $users = $object->resultados_index();
  echo $users;


//----------------


?>
