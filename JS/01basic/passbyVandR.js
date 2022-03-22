/*
var a=7;
var b=a;
console.log("a : "+a);
console.log("b: "+b);

b=5;
console.log("a : "+a);
console.log("b: "+b);

var aa = {
  x:7
};

var bb=aa;

console.log(aa);
console.log(bb);

bb.x=5;
console.log(aa);
console.log(bb);
*/



///pass by value
// function changePrimitive(value){
//     console.log("Inside Primitive change fucntion ")
//     console.log("before changing :"+value);
//     value=5;
//     console.log("'after changing value :"+value)

// }


// var primativevalue=10;
// console.log("before calling primative change function :"+primativevalue);
// changePrimitive(primativevalue);  //value=primativevalue;
// console.log("after calling primitive function:"+primativevalue );
// console.log(primativevalue);


function changeobject(obj)
{
  console.log("value of x before changing:");
  console.log(obj.x);
  obj.x=5;
  console.log("value of x after changing :")
 console.log(obj.x);
}

value ={
  x: 10
};

console.log("before calling function change x :"+value.x);

changeobject(value);

console.log("After callling fucntion change x : "+value.x);
