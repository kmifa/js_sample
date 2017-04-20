var FroutModel = (function(){
  var name = "none";
  
  var cls = function(pname){
    name = pname;
  };
  
  cls.prototype.callMe = function(){
    alert("this is " + name);
  };
  
  return cls;
})();

var obj = new FroutModel("Apple");

// "undefined"
console.log(obj.name);

obj.callMe();