var bd = {"categoria":[
  [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"}
  ],[
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"}
  ],[
     {"nombre":"youtuber3","video":"url1"}
  ]
]};


var bd2 = [
     {"nombre":"youtuber1","video":"url1"},
     {"nombre":"youtuber1","video":"url2"},
     {"nombre":"youtuber1","video":"url3"},
     {"nombre":"youtuber2","video":"url1"},
     {"nombre":"youtuber2","video":"url2"},
     {"nombre":"youtuber3","video":"url1"}
];
//var myArray = ["John", "Doe"];  //var myObject = { "ref": { "first": 0,"last": 1} }




//-----------------------objecto por artista individual-----------------
function Ar1(base_,youtuber_) {
  this.cat       = base_.categoria;
  this.artista   = youtuber_;
  this.cantidad_ = this.cat[this.artista].length;
  this.artista_  = function(video_){  return this.cat[this.artista][video_].nombre;  }
  this.urlVideo_ = function(video_){ return this.cat[this.artista][video_].video;   }
}



//--------------------------objeto para todos los artistas---------------
function todosArt(base_) {
  this.cat       = base_.categoria;
  this.cantidad_ = this.cat.length;

  //-----------todos los artistas en la BD------
  this.todosLosArtistas_  = function(){
    var artistas_=[];
    for(var i=0 ; i<this.cantidad_ ; i++){
      artistas_.push(this.cat[i][0].nombre);
    }
    return artistas_;
  }

  //-----------todas las URL de cada artista en la BD------
  this.videoPorArtista_=function(artis_){
    var vid_=[];
    var cant_= this.cat[artis_].length;
    for(var i=0 ; i<cant_ ; i++){
        vid_.push(this.cat[artis_][i].video);
    }
    return vid_;
  }


  //-----------todas las URL de cada artista en la BD------
  this.filtroNombre=function(nom_,artis_){
    var yy_ = artis_;
    var nn_ = nom_;
       return this.cat[1][0].nombre;

  }
  //----------------
}//---

//-------------------------------declaracion de objeto por artista individual----------------------------------------
var AF1 = new Ar1(bd,0);
var v1 = AF1.cantidad_;

for(var i=0 ; i<v1 ; i++){
  var v2 = AF1.artista_(i);
  var v3 = AF1.urlVideo_(i);
  console.log(v2,v3);
}


console.log("---------");


//---------------------------declaracion para todos los artistas--------------------------------------------
var AF = new todosArt(bd);
var v4 = AF.todosLosArtistas_();
var v5 = AF.videoPorArtista_(0);
var v6 = AF.videoPorArtista_(1);
var v7 = AF.videoPorArtista_(2);
var v8 = AF.filtroNombre("youtuber1");

console.log(v4);
console.log(v5);
console.log(v6);
console.log(v7);
console.log(v8);



//-----------------evento para el menu slider-------------------------
$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);




//--------------------Handlebars--------------------

$(function () {
  var theTemplateScript = $("#address-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context={
    "video_por_artista_1": v5,
    "video_por_artista_2": v6,
    "video_por_artista_3": v7
  };

  //var theCompiledHtml = theTemplate(context);
  //var theCompiledHtml = theTemplate(bd.categoria[0]);
  var theCompiledHtml = theTemplate(bd2);
  $('.content-placeholder').html(theCompiledHtml);


});
