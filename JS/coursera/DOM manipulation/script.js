// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument)

// function sayhello(){
//   console.log(
//       document.getElementById("name").value
//   )
// }

function sayhello(){
    var name = 
    document.getElementById("name").value;
    var message = "<h2>Hello " + name+" !</h2>";
    // document.getElementById("content").textContent=message;


    document.getElementById("content").innerHTML=message;

    if (name ==="student"){
        var title=
        document.querySelector("#title").textContent;
        //you can also use h1 instead of Id as there is only 1 h1 in html
        // 1st h1 in the html file found will be selected
        title+="& loving it !";

        document.querySelector("#title").textContent=title;
    
    }
}
