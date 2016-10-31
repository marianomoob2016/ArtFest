//------------------------------------------

var category = [
  {ide:1,nombre:"name1",urlVideo:"url1",srcImg:"src1",info:"info 1",tipoCat1:true,tipoCat2:false},
  {ide:2,nombre:"name2",urlVideo:"url2",srcImg:"src2",info:"info 2",tipoCat1:false,tipoCat2:true}
];

//------------------------------------------

function ArtFest(cat_,id_) {
  this.ide=     cat_[id_].ide;
  this.nombre=  cat_[id_].nombre;
  this.video=   cat_[id_].urlVideo;
  this.imagen=  cat_[id_].srcImg;
  this.cat1=    cat_[id_].tipoCat1;
  this.cat2=    cat_[id_].tipoCat2;

  this.listar1 = function(item, index){
        return this.ide+" - "+this.nombre+" - "+this.video+" - "+this.imagen+" - "+this.cat1+" - "+this.cat2;
  };
  this.event1 = function(){

  };
}


//------------------------------------------

var ApiArtFest1 = new ArtFest(category,0);
var ApiArtFest2 = new ArtFest(category,1);

//------------------------------------------


var v1 = ApiArtFest1.listar1();
var v2 = ApiArtFest2.listar1();


console.log(v1);
console.log(v2);
//----------------------------------------
