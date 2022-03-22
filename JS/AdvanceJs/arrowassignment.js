const mytodos=[{
    title: 'Wake up',
    isdone : true,
},{
    title:'fresh up',
    isdone:true,
},{
    title:'study',
    isdone: true,
},{
    title:'exercise',
    isdone:false,
},{
    title:'breakfast',
    isdone:false,
},{
    title:'gaming',
    isdone:false,

}];

//console.log(mytodos);


 mytodos.filter((todo)=>{ 
  if(todo.isdone==false)
  {
      console.log(todo.title);
  }
}
);


