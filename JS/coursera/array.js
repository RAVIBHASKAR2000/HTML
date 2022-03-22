var array = new Array();
array[0]="ravue";
array[1]=2;
array[2]=function(name){
    console.log("hello "+ name);

}
array[3]={course:'html/css/js'};
console.log(array);

console.log(array[3].course)

array[2](array[0]);

//short hand arrray creation 

var names = ["ravi ",1,"hjd ",'snsns' ];
console.log(names);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

