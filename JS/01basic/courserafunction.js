function multiply (x,y)
{
    return x*y;
}

console.log(multiply(5,3));


multiply.version="v.1.0.0";

//console.log(multiply);
// console.log(multiply.toString());

//  function factories

function makemultiplier(multiplier)
{
  var myfunc = function(x){
      return multiplier*x;
  };
  return myfunc;
}


var multiplyby3= makemultiplier(3);

console.log(multiplyby3(10));

var doubleall = makemultiplier(2);
console.log(doubleall(100));

//passing function as argumrnt


function doOperationon (x,operation){
    return operation(x);
} 


var result = doOperationon(5,multiplyby3);
console.log(result);
result=doOperationon(100,doubleall);
console.log(result)