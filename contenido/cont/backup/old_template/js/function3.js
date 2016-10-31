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

//var myArray = ["John", "Doe"];
//var myObject = { "ref": { "first": 0,"last": 1} }

//----------------------------------------

function Ar1(base_,youtuber_) {
  this.cat = base_.categoria;
  this.artista = youtuber_;
  this.cantidad_ = this.cat[this.artista].length;
//-----------
  this.artista_ = function(video_){
        return this.cat[this.artista][video_].nombre;
  }
//-----------
  this.urlVideo_ = function(video_){
        return this.cat[this.artista][video_].video;
  }
}


//------------------------------------------
var AF1 = new Ar1(bd,0);

//------------------------------------------

var v1 = AF1.cantidad_;
var v2 = AF1.artista_(1);
var v3 = AF1.urlVideo_(1);


console.log(v1,v2,v3);
//----------------------------------------
