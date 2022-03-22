var array = ['orange ','grapes','don','rinkiya ke papa','maratha'];


// for(var index in array)
// {
//     console.log(array[index]);
// }


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
}
console.log();

array.forEach((element,index)  => {    //for each along with arrow function 
    console.log(element);
    console.log(index);
});