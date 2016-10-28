

//-----------------BD general para cada post/video------------
var bd_final = {"videos":[
 {
      id:"20161019",
      hora:"1800",
      autores : ["youtuber1","youtuber2","youtuber3"],
      titulo : "Ellos 1",
      subTit : "Aprendé 1",
      info : "",
      masInfo : "....",
      urlVideo : ".....url1.mp4",
      urlImgVid : "img/template/video03.jpg",
      srcImg : "img/template/video03.jpg",
      destacado : [{activo : false},{position : 10}],
      srcImgDestacado : "img/template/asideBottomImg.jpg",
      categorias :  [
                        {cat:[{nombre : "humor"},{activo : false},{subCat : ["bloopers","fails","bizarro"]}]},
                        {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                        {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                        {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                        {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                    ]
 },{
      id:"20161019",
      hora:"1800",
      autores : ["youtuber1","youtuber2","youtuber3"],
      titulo : "Ellos 2",
      subTit : "Aprendé 2",
      info : "",
      masInfo : "....",
      urlVideo : ".....url1.mp4",
      urlImgVid : "img/template/video03.jpg",
      srcImg : "img/template/video03.jpg",
      destacado : [{activo : false},{position : 10}],
      srcImgDestacado : "img/template/asideBottomImg.jpg",
      categorias :  [
                         {cat:[{nombre : "humor"},{activo : false},{subCat : ["bloopers","fails","bizarro"]}]},
                         {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                         {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                         {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                         {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                      ]
   },{
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos 3",
       subTit : "Aprendé 3",
       info : "",
       masInfo : "....",
       urlVideo : ".....url1.mp4",
       urlImgVid : "img/template/video03.jpg",
       srcImg : "img/template/video03.jpg",
       destacado : [{activo : false},{position : 10}],
       srcImgDestacado : "img/template/asideBottomImg.jpg",
       categorias :  [
                          {cat:[
                            {nombre : "humor"},
                            {activo : false},
                            {subCat : ["bloopers","fails","bizarro"]}
                          ]},
                          {cat:[{nombre : "belleza"},{activo : true},{subCat : ["Uñas","Peinados","makeUp"]}]},
                          {cat:[{nombre : "musica"},{activo : false},{subCat : ["playList","bandas","recitales"]}]},
                          {cat:[{nombre : "gamers"},{activo : true},{subCat : ["trucos","juego_en_vivo","reviews"]}]},
                          {cat:[{nombre : "lifestyle"},{activo : false},{subCat : ["trucos","juego_en_vivo","reviews"]}]}
                       ]
  }
]};
















//------------------BD lista de videos y su info para index------------10 resultado por paginado--------------
var bd_result_index = {"videos":[
  {
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]

  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1600",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       categorias : ["humor","belleza","musica","gamers","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]},
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       categorias : ["humor","belleza","musica","gamers","lifestyle"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]},
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1400",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["musica","gamers"],
       subcat:[
                {nombre:"musica", subcat:["playList","bandas","recitales"]},
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1300",
       autores : ["youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"1200",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails"]},
                {nombre:"belleza", subcat:["Uñas"]}
              ]
  },{
       id:"20161019",
       hora:"1100",
       autores : ["youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       categorias : ["lifestyle"],
       subcat:[
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1000",
       autores : ["youtuber1"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"0900",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["humor","belleza"],
       subcat:[
                {nombre:"humor", subcat:["bloopers","fails","bizarro"]},
                {nombre:"belleza", subcat:["Uñas","Peinados","makeUp"]}
              ]
  },{
       id:"20161019",
       hora:"0900",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video05.jpg",
       categorias : ["gamers","lifestyle"],
       subcat:[
                {nombre:"gamers", subcat:["trucos","juego_en_vivo","reviews"]},
                {nombre:"lifestyle", subcat:["trucos","juego_en_vivo","reviews"]}
              ]
  }
]};

//---------------------------------





//------------------BD lista de videos y su info para index------------10 resultado por paginado- IGUAL QUE EL INDEX PERO CON POSICION DEL DESTACADO--------------
var bd_result_destacado_index = {"videos":[
  {
       id:"20161019",
       hora:"1800",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "1 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video01.jpg",
       destacadoPos:10,
       srcImgDestacado : "....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "2 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video02.jpg",
       destacadoPos:8,
       srcImgDestacado : "....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1700",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "3 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video03.jpg",
       destacadoPos:4,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "4 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber3"],
       titulo : "sidebar _ 5 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : "img/template/asideBottomImg.jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  },{
       id:"20161019",
       hora:"1500",
       autores : ["youtuber1","youtuber2","youtuber3"],
       titulo : "6 Ellos la rompen en las redes y en la TV. Mirá el backstage acá.",
       subTit : "Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       srcImg : "img/template/video04.jpg",
       destacadoPos:2,
       srcImgDestacado : ".....jpg",
       categorias : ["humor","lifestyle"],
       subcat:[
                {humor:["bloopers","fails","bizarro"]},
                {lifestyle:["trucos","juego_en_vivo","reviews"]}
              ]
  }
]};








//--------------------BD lista de artistas y su info--------------------
var bd_artistas = {"autores":[
     {
       nombre:"youtuber1",
       info:"...1.",
       imgPerfil:"....1.jpg",
       linkFace:"....url1",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     },{
       nombre:"youtuber2",
       info:"...2.",
       imgPerfil:"....2.jpg",
       linkFace:"....url2",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     },{
       nombre:"youtuber3",
       info:"...3.",
       imgPerfil:"....3.jpg",
       linkFace:"....url3",
       linkTwitter:"....url",
       linkInstagram:"....url",
       linkYoutube:"....url"
     }
]};




//--------------------BD lista de artistas y su info--------------------
var bd_categorias = {"categorias":[
      {
        categoria:"clubmediafest",
        infoCat:"Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.",
        colorFondo:"200944",
        colorTexto:"ffffff",
        imgCategoria:"img/template/categoria_club_media.jpg",
        cantidad:10,
        subCat:[]
      },{
       categoria:"humor",
       infoCat:"Bloopers,retos,desafíos, chistes, trolleos y los encuentros más divertidos. Imposible no reírse con ellos.",
       colorFondo:"ffff01",
       colorTexto:"333333",
       cantidad:10,
       subCat:["bloopers","fails","bizarro","sketch","vines","parodias","chistes","standUp","desafíos"]
     },{
       categoria:"musica",
       infoCat:"Son las nuevas estrellas de todos los tiempos. Mirá videos exclusivos en Club.Media.",
       colorFondo:"168ce6",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["playList","bandas","recitales","instrumentos","lanzamientos","reviews","backstage","cds"]
     },{
       categoria:"belleza",
       infoCat:"Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       colorFondo:"f4206a",
       colorText:"ffffff",
       cantidad:10,
       "subCat":["uñas","peinados","makeUp","look","moda","fitness","gym","accesorios","coleciones"]
     },{
       categoria:"lifestyle",
       infoCat:"Aprendé sobre moda, look, uñas, tendencias, makeup con las mejores de toda habla hispana.",
       colorFondo:"35df89",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["viajes","cocina","salidas","DIY","cine","madres","deco","jardín","bares","cerveza"]
     },{
       categoria:"gamers",
       infoCat:"Viví desde adentro cada momento de los shows de tus artistas favoritos y participá por Meet&Greet y entradas VIP",
       colorFondo:"fe4300",
       colorTexto:"ffffff",
       cantidad:10,
       subCat:["trucos","juego en vivo","reviews","tecnología","lanzamientos","testeo","tutoriales"]
     }
]};







//--------------------BD categoria seleccionada con sus resultados- trae la informacion de la categoria seleccionada--------------------
var bd_categoria_select = {
      categoria:"musica",
      infoCat:"Son las nuevas estrellas de todos los tiempos. Mirá videos exclusivos en Club.Media.",
      colorFondo:"168ce6",
      colorTexto:"ffffff",
      cantidad:10,
      subCat:["playList","bandas","recitales","instrumentos","lanzamientos","reviews","backstage","cds"]
};
