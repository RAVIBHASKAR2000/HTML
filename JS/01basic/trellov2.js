let mytodos={
    days: 'monday',
    meetings: 0,
    meetdone:0,
        
}

let addmeeting = function(todo,meet=0)
{
  todo.meetings=todo.meetings+meet;

}

//addmeeting(mytodos,2);
//passing actual object
//not copy of that object

let meetDone = function(todo,meet=0)
{
todo.meetdone=meet;
}

let resetday = function(todo){
    todo.meetings =0
    todo.meetdone=0;

}

let getsummaryofday = function(todo)
{
    let meetleft =todo.meetings-todo.meetdone;
    return `you have ${meetleft} meetings today`
}

addmeeting(mytodos,48);
addmeeting(mytodos,20);

meetDone(mytodos,50)


console.log(getsummaryofday(mytodos));