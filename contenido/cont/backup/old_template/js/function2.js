//------------------------------------------

var cat1 = {"categoria": [
  {ide:1,nombre:"name1",urlVideo:"url1",srcImg:"src1",info:"info 1",tipoCat1:true,tipoCat2:false},
  {ide:2,nombre:"name2",urlVideo:"url2",srcImg:"src2",info:"info 2",tipoCat1:false,tipoCat2:true}
]};

//------------------------------------------

function Ar1(cat_) {
  this.cat = cat_;

  this.listar1 = function(ind_){
        return this.cat.categoria[ind_].ide;
  };

}


//------------------------------------------
var AF1 = new Ar1(cat1);
//------------------------------------------
var v1 = AF1.listar1(0);
var v2 = AF1.listar1(1);


console.log(v1,v2);
//----------------------------------------
