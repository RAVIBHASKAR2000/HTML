console.log(2==2.0)
//true
console.log(2===2.0)
///true
let myvar=''
let myvartwo = '';

console.log(myvar==myvartwo);
///true
console.log(myvar===myvartwo);
//ture

let myvar1={}
let myvartwo2={}

console.log(myvar1==myvartwo2);
//false
console.log(myvar1===myvartwo2);
//false

 myvartwo2=myvar1

console.log(myvar1==myvartwo2);
//true
console.log(myvar1===myvartwo2);
//true

// 1....= is used for assigning values to a variable in JavaScript.
//2.....== is used for comparison between two variables irrespective 
//         of the datatype of variable.
//3...  === is used for comparision between two variables but this will
//       check strict type, which means it will check datatype and compare
//        two values.