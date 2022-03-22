const mytodos=['Buy bread','Go to gym','see videos'];
//console.log(mytodos);

// console.log(mytodos[mytodos.indexOf('Buy bread')]);

const newtodos=[{
    title: 'Buy bread',
    isdone: false,
},{

    title:'Go to gym',
    isdone: false,

},{
    title: 'Watch youtube videos',
    isdone: true, 
}]


const index= newtodos.findIndex(function(todo,index){
    console.log(todo);
    return todo.title==='Go to gym';
})

console.log(index);

// const findtodo = function(mytodos,title){
//    const index= mytodos.findIndex(function(todo,index){
//        return todo.title.toLowerCase()===title.toLowerCase();

//    })

//    return mytodos[index];
// }
// let printme = findtodo(newtodos,'go to gYm')
// console.log(printme);



//method 2

const findtodo = function(mytodos,title){
    const titlereturned=mytodos.find(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    
    return titlereturned;

}


let printme= findtodo(newtodos,'Watch youtube videos');
console.log(printme);