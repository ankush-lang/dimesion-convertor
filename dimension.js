
var feet= document.querySelector("#feet");
var inch = document.querySelector("#inch");

//<-----to convert feet into inches----->
feet.addEventListener("input",function(){
let f = this.value;
let i = f*12;
inch.value = i;

});

//<-------to convert inches into feet----->
inch.addEventListener("input",function(){
  let i = this.value;
  let f = i/12;
  if(!Number.isInteger(f)){
    f = f.toFixed(2);
  }
  feet.value = f;
});

