// const array=['hello',1,'don',{name: 'hero'}];
// //console.log(array);

// //console.log(array[2])
// //console.log(array[3].name.toUpperCase());
// array.push('chutki');
// //console.log(array);

// array.pop();
// //console.log(array);

// array.shift();
// //console.log(array);

// array.unshift('hello');
// //console.log(array);

// array.push('hello');
// array.push('hello');
// array.push('hello');
// console.log(array);
// array.splice(3,1,'HELLO');
// console.log(array);

// const array= ['orange','mango','pineapple','kiwi','grapes'];
// console.log(array);

// array.splice(1,2,'hello','bye');
// console.log(array);
var array1 =  new Array();
array1[0]='ravi';
array1[1]=1;
array1[2]=function(name){
    console.log('hello'+name)
}

array1[3]= {
    course:'html/css/js',
}


console.log(array1);


array1[2]('ravi')

console.log(array1[3]);
console.log(array1[3].course);