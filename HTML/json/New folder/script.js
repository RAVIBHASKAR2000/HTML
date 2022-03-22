var content=document.querySelector(".con");


fetch('http://fathomless-shelf-5846.herokuapp.com/api/schedule?date=27/07/2020').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
    // console.log(data.dishes[3].name);
    // content.textContent=data.dishes[3].name;
  
  }).catch(err => {
    // Do something for an error here

    console.log("error");
  });
  


//   fetch('./db.json',{
//     method:'POST',
//     body:  {"id":"6600"},
//     headers:{
//         'Content-type':'application/json'
//     },
//     credentials:'same-origin'
// }) 
// .then(response => {
//    if (response.ok) {
//      return response;
//    } else {
//      var error = new Error('Error ' + response.status + ': ' + response.statusText);
//      error.response = response;
//      throw error;
//    }
//  },
//  error => {
//        var errmess = new Error(error.message);
//        throw errmess;
//  })
//  .then(data => {
//   // Work with JSON data here
//   console.log(data);
//  })