//---------------------funciones externas------------------------------
$(document).ready(function(){
        //---------------------defino objeto-----------------------------------
        var AF_cat = new todosArt();
        //---------lista los resultados en el index------

        AF_cat.listarResult_Categoria(v1,v2);
        AF_cat.listarResult_totalSubcat(v1,v2);
        AF_cat.listarCategoria_navLik();
        AF_cat.verNav();




});
