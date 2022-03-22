document.addEventListener("DOMContentLoaded",
function(event){
    
    function sayhello(){
        this.textContent="Said it!";
    
    
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
    
    //unobstrusive event binding
    
    document.querySelector("button")
    .addEventListener("click",sayhello);
    
    //method 2
    
    // document.querySelector("button")
    // .onclick=sayhello;


    //mouse hover cordinates


    document.querySelector("body")
    .addEventListener("mousemove",
    
    function(event){

        if(event.shiftKey===true){
            console.log("x : "+event.clientX);
            console.log("y : "+event.clientY);

        }

    }
    
    );


}
);





