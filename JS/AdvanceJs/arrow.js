// const sayhello = function(name){
//     return "hey there "+ name+"!";

// }

// console.log(sayhello("sammy"));


const sayhello = (name) =>  `hey there ${name} !`; //string literal



console.log(sayhello("sammy"));

const todos =[{
    title: 'buy bread',
    isDone: true,
},{
    title:'go to gym',
    isDone:true,

},{
    title:'watch youtube video',
    isDone:false,
}]


// const thingsDone = todos.filter((todo)=>{ 
    
//     return todo.isDone===true });

// console.log(thingsDone);


const thingsDone = todos.filter((todo)=>todo.isDone===true );

console.log(thingsDone);


//filter goes to every onject and return only those object who pass the condition
