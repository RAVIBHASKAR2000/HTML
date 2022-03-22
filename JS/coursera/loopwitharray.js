var names = ['adbejbd','biedb d0','bddbeke','bjebd'];
var obj ={
    name : 'ravi',
    course: 'html/css/js',
    platform: "coursera"
};


for(var prop in obj )
{
    console.log(prop+" : "+obj[prop]);
}


for (var prop in names)
{
 console.log("Hello "+names[prop]);   
}

names.greeting ="hi";//greetinng becomes a property of a the array
//also array are like object in Js
for (var prop in names)
{
 console.log("Hello "+names[prop]);   
}
