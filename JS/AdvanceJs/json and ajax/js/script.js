// *********** json 


// var thePets = [
//     {"name":"meowsalat",
//     "species":"cat",
//     "favfood":"tuna"

//     },{
//         "name":"barky",
//     "species":"dog",
//     "favfood":"carrot"

//     }]



//     thePets[1].name;
//     //return barky

//     https://learnwebcode.github.io/json-example/animals-1.json



///*********ajax   */


var pagecounter = 1;
var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');


btn.addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','https://learnwebcode.github.io/json-example/animals-'+pagecounter+'.json');
    request.onload=function(){
      if(request.status>=200&&request.status<400){
        // console.log(request.responseText);
     var ourData = JSON.parse( request.responseText);
     //console.log(typeof ourData)
   //  console.log(ourData[0]);
      
   renderHtml(ourData);
      }
      else{
          console.log("we connected with the server but it returned error")
      }

     
    };

    request.onerror=function(){
        console.log("connection error");
    };


    
    request.send();
    pagecounter++;
    if(pagecounter>3){
        btn.classList.add("hide-me");
    }
      
})


function renderHtml(data){
    var htmlString = "";
    for(i=0;i<data.length;i++)
    {
        htmlString+="<p>"+data[i].name+" is a "+data[i].species+"that likes to eat ";
    for (let index = 0; index < data[i].foods.likes.length; index++) {
       if(index==0){
        htmlString+= data[i].foods.likes[index];
       }else{
        htmlString+= " and " +data[i].foods.likes[index];
       }
              
    } 

    htmlString+= " and dislikes ";
    for (let index = 0; index < data[i].foods.dislikes.length; index++) {
        if(index==0){
         htmlString+= data[i].foods.dislikes[index];
        }else{
         htmlString+= " and " +data[i].foods.dislikes[index];
        }
               
     } 
 

    htmlString+= "</p>";
    }


    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}

// The insertAdjacentHTML() method of the Element interface
// parses the specified text as HTML or XML 
//and inserts the resulting nodes into the 
// DOM tree at a specified position.
// It does not reparse the element it is being
// used on, and thus it does not corrupt the 
//existing elements inside that element.
// This avoids the extra step of serialization, 
//making it much faster than direct 
//innerHTML manipulation.

// Syntax
// element.insertAdjacentHTML(position, text);
// Parameters
// position
// A DOMString representing the position relative to the element;
// must be one of the following strings:
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.

// text
// The string to be parsed as HTML or XML and inserted 
//into the tree.