(function($_){



    $_(document).ready(function(){
            var AF_cat = new todosArt();
            AF_cat.listarResult_Categoria(v1,v2);
            AF_cat.listarResult_totalSubcat(v1,v2);
            AF_cat.listarCategoria_navLik();
            AF_cat.verNav();

            AF_cat.listarDest_indexCat_sideBar('categoria_');

    });

})(jQuery);
