var array = new Array();
array[0]="rravu";
array[1]=2;
array[2]=function(name){
console.log("Hello "+name);

};
array[3]={  course: "html,css,js"};
console.log(array);
console.log(array[1]);

array[2]("ravi");

array[2](array[0]);
console.log(array[3].course);



//short hand array creation

var names=["ravi","john","joe",{name: "bhaskar"},{name:"john"}];
console.log(names);
var names1=["dgb","vv","buggbv","hjbbb"];

for(var i =0;i<names1.length;i++)
{
    console.log("hello "+names1[i]);
}
/*
names1[100]="jim";
for(var i =0;i<names1.length;i++)
{
    console.log("hello "+names1[i]);
}*/

var names2=["dgb","vv","buggbv","hjbbb"];

var myobj={
    name:"don",
    course: "html/css/js",
    Platform:"coursera"
};

for(var prop in myobj){
    console.log(prop+" :"+myobj[prop]);
}

console.log();

for(var index in names2){
    console.log("hello :"+names2[index]);
}

names2.greeting ="hi";
for(var index in names2){
    console.log("hello  "+names2[index]);
}