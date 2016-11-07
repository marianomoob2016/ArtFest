<?php

require 'lib.php';

$object = new CRUD();
// Design initial table header
$data = '';
$catSel_='';
$miArray ='';

$catSel_="belleza";
$cat_ = $object->categoria_seleccionada($catSel_);

//$result_cat = $object->resultados_por_categoria($catSel_);
echo count($cat_);




?>
