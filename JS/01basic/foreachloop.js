const days=['mon','tue','wed','thru','fri','sat']


console.log(days);

// let sayhello = function()
// {
//     console.log("greeting message for user");

// }

// days.forEach(sayhello);  


// days.forEach(function() {
//      console.log('great day');

// }); 

 days.forEach(function (day){
     console.log(day);
 }) 


 days.forEach(function (day,index)
 {
     console.log(`starts with ${index+1} ----${day}`);

 })


const months =['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'];

months.forEach(function(month,index)
{
    console.log(`${index+1}------${month}`);

})



