//---------------------funciones externas------------------------------
$(document).ready(function(id_dia,id_hora){
        //---------------------defino objeto-----------------------------------
        var AF_post = new todosArt();

        AF_post.verPOST(v_id,v_hora);
        AF_post.listar_Dest_Post();
        AF_post.verNav();





});
