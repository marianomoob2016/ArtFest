//---------------------funciones externas------------------------------
$(document).ready(function(){
        //---------------------defino objeto-----------------------------------
        var AF_index = new todosArt();
        //---------lista los resultados en el index------

        AF_index.listarCategoria_index();
        AF_index.listarPost_index();
        AF_index.listarDest_index();
        AF_index.listarDest_index_sideBar();

        //---------------------
        //window.addEventListener('resize', function(event){
             //AF.defineContHead_(event);
        //});

});
