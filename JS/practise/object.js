// var obj = {
//     name: 'ravi',
//     todo: {
//         first: 'awake',
//     },

//     check : function(tocheck)
//     {
//         if(tocheck.name ==='ravi')
//         return 'heheheh';
//     }
// };

// console.log(obj);
// console.log(obj.todo.first);

// console.log(obj.check(obj));


// var obj = new Object();
// obj={
//     radius: 10,

//     getarea: function(){
//                  var self=this;
                 
//                  var get=function(){
//                     return Math.PI*Math.pow(self.radius,2)
//                  }

//              console.log(get());
//                }

// };


var obj= {
    radius:10,
    getarea: function(){
                 var self=this;
                increaseradius=function(){
                    self.radius=20;
                }
                increaseradius();

        return Math.PI*Math.pow(this.radius,2);
    }
}
// console.log(obj.getarea);

console.log(obj.getarea());

