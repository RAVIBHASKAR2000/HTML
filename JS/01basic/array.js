const numbers=['one','two','three','four','five','six'];

  
 

//replace two by something

// numbers[1]='SOMETHING';
// console.log(numbers);

//start

//number shift

console.log(numbers.shift());

console.log(numbers);




numbers.unshift('something');
console.log(numbers);


//end


//numbers.pop()
console.log ('the element to be deleted is: '+numbers.pop() );

console.log(numbers) 


//push

numbers.push('seven');
console.log(numbers);



//middle //

numbers.splice(2,1,'Something');

///(position,no of elements to be deleted ,element)
console.log(numbers);



numbers.splice(2,2,'something');
console.log(numbers);
