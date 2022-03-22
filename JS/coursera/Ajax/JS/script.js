document.addEventListener("DOMContentLoaded",
function(event){


    //unobstrusive event binding
    
document.querySelector("button")
.addEventListener("click",function(){
    $ajaxUtils.sendGetRequest("data/name.txt",
    function(request){
        var name = request.responseText;
        document.querySelector("#content")
        .innerHTML="<h2>Helllo "+name+"!</h2>";
    })
})


}
)

