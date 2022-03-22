(function(global){

 var ajaxUtils = {};


 //Returns an HTTP request object
function getRequestObject(){
    if(global.XMLHttpRequest){
        return (new XMLHttpRequest());    
    }
    else if(global.ActiveXObject){
     //only for IE browsers
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else{
        global.alert("Ajax is not supported !");
        return (null);
    }

}


//makes an Ajax GET request to 'requestUrl'

ajaxUtils.sendGetRequest= 
   function(requestUrl,responseHandler){
       var request=getRequestObject();

       request.onreadystatechange=function(){
           handleResponse(request,responseHandler);
       };

       request.open("GET",requestUrl,true);
       request.send(null);
   };  

  


   function handleResponse(request,responseHandler){
       if((request.readyState==4)&&(request.status==200)){
        responseHandler(request);
         }
      
        }

global.$ajaxUtils=ajaxUtils;


})(window);