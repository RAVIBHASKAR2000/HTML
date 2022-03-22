const mytodos =[]
mytodos.push('Buy bread')
mytodos.push('Record video for youtube')
mytodos.push('go to gym')

 
mytodos.forEach(function(todo,index){
    console.log(`your task no. ${index+1} is :  ${todo}`);


})


const Hertodo = []
 Hertodo.unshift('sleep');
 Hertodo.unshift('wake');
 Hertodo.unshift('fight');
 Hertodo.unshift('eat');

 for (let index = Hertodo.length-1; index >=0; index--) {
     console.log(`she ${Hertodo[index]} -- ${index+1} `);
     
 }