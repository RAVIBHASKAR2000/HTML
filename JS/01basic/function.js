//declaration and name of function

let sayHello = function(){
    console.log('greating message for user');
    console.log('hey user')

}


//function call

sayHello();

/* function with parameters */


let sayHello1 = function (name){
    console.log(`greeting message from ${name}`);
    console.log(`hey ${name}`);

}

sayHello1('john');


// new function 


let fullnamemaker=function(firstname,lastname)
{
    console.log('welcome to lco')
    console.log(`happpy to have you , ${firstname} ${lastname}`)

}



fullnamemaker('john', 'doe');


// new function 


let myadder =function(num1,num2){
    let added= num1+num2;
    return added;
   //returning value
}


//myadder(3,5);

console.log(myadder(3,5));


let result = myadder(3,7);
console.log(result);



//new function

let mymultiplier = function(num1,num2)
{
    return num1*num2
}



console.log(mymultiplier(2,3));


//new function

//default parameters
let  guestUser = function(name='unName',coursecount=0)
{
    return 'hello '+name+ ' and your coursecount is '+coursecount 
}

//guestUser()
console.log(guestUser());

console.log(guestUser('john'));
console.log(guestUser('john',2));