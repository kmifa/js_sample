// var FroutModel = (function(){

//   // private
//   var name = "none";
  
//   var cls = function(pname){
//     name = pname;
//   };
  
//   cls.prototype.callMe = function(){
//     alert("this is " + name);
//   };
  
//   return cls;
// })();

// var obj = new FroutModel("Apple");

// // "undefined"
// console.log(obj.name);

// // "this is Apple"
// obj.callMe();


// リビングモジュールパターン
module = function(){
  var current = null;
  var labels = {
    'home' : 'home',
    'art' : 'art',
    'contact' : 'contact'
  };

  var init = function(){
   
  };

  var show = function(){
    current = 1;
  };

  var hide = function(){
    show();
  }

  return {
    init : init,
    show : show,
    current : current
  }
}();

module.init();