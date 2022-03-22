const myPElements = document.querySelectorAll('p');


//myPElements.forEach((p) =>  p.textContent ="I am changed using for loop");


// document.querySelector('#myform').addEventListener('change',(event)=>{
//     console.log(event.target.value);
// });



document.querySelector('#myform').addEventListener('input',(event)=>{
console.log(event.target.value);
})