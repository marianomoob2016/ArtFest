//---------------------funciones externas------------------------------
$(document).ready(function(){
        //---------------------defino objeto-----------------------------------
        var AF_index = new todosArt();
        //---------lista los resultados en el index------

        AF_index.listarCategoria_index();
        AF_index.listarDest_index();
        AF_index.listarDest_index_sideBar();
        AF_index.listarPost_index();



        //--------------active nav scroll------------
        $(document).on("scroll",function(){
            var body_ = document.getElementById("body_");
            body_.onscroll=function(){  AF_index.scrollBody_(body_);  }
        });

        //---------------------
        //window.addEventListener('resize', function(event){
             //AF.defineContHead_(event);
        //});

});
