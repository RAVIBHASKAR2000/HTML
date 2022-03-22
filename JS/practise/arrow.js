// const sayhello = (name)=>  {
//     return `hey there ${name} !`;
// };

//method 2
const sayhello = (name) =>`hey there ${name} !`;


console.log(sayhello('sammu'));
const todos=[{
    title: 'buy bread',
    isdone: true,
},{
    title: 'go to gym',
    isdone: true,
},{
    title: 'watch video on youtube',
    isdone:false,
},{
    title:'breakfast',
    isdone:true,
},{
    title:'play',
    isdone:false,
},{
    title:'dinner',
    isdone:false,
}]

const thingsnotdone = todos.filter((todo)=> {
    if(todo.isdone===false)
    {
        console.log(todo.title);
    } 
})

//  console.log(thingsnotdone);