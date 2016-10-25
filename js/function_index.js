//---------------------funciones externas------------------------------
$(document).ready(function(){
        //---------------------defino objeto-----------------------------------
        var AF_index = new todosArt(bd_final);
        //---------lista los resultados en el index------
        AF_index.listarPost_index();

        //---------------------
        //window.addEventListener('resize', function(event){
             //AF.defineContHead_(event);
        //});

        //------------------
        //AF.modulo_listarArtistas_();
        //console.log(AF.colorCategoria_('humor'));
        //console.log(AF.total_categorias());


        //------------------
        //AF.modulo_1();

});
