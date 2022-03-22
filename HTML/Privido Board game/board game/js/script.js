var btnred= document.querySelector(".red");
var btnblue= document.querySelector(".blue");
var topred=0;
var leftred=0;
var topblue=100;
var leftblue=0;



function btn1(){
 btnred.style.opacity="1.0";
 btnblue.style.opacity="0.7";
 document.addEventListener("keydown",function(){
    switch(event.code){
        case 'ArrowUp': 
                        topred-=100;
                        if(topred<0){
                            topred=0;
                        }
                       
                        btnred.style.top=topred+"px";

                         break;


        case 'ArrowDown':     topred+=100;
                            if(topred>500){
                                 topred=500;   
                            }
                           
                                        
                            btnred.style.top=topred+"px";
                            break;  
        case 'ArrowRight':   
                            leftred+=100;
                            if(leftred>500){
                                leftred=500;
                            }            
                            btnred.style.left=leftred+"px";
                            break;         
        case 'ArrowLeft':   
                            leftred-=100;
                            if(leftred<0){
                                leftred=0;
                            }    
                            btnred.style.left=leftred+"px";
                            break;  
        default :   alert('none');
                        break;                                                                    
    }
})

}

function btn2(){
    
    btnblue.style.opacity="1.0";
    btnred.style.opacity="0.7";
    document.addEventListener("keydown",function (){
        switch(event.code){
            case 'ArrowUp': 
                            topblue-=100;
                            if(topblue<-100){
                                topblue=0;
                            }
                           
                            btnblue.style.top=topblue+"px";
    
                             break;
    
    
            case 'ArrowDown':     topblue+=100;
                                if(topblue>400){
                                     topblue=400;   
                                }
                               
                                            
                                btnblue.style.top=topblue+"px";
                                break;  
            case 'ArrowRight':   
                                leftblue+=100;
                                if(leftblue>500){
                                    leftblue=500;
                                }            
                                btnblue.style.left=leftblue+"px";
                                break;         
            case 'ArrowLeft':   
                                leftblue-=100;
                                if(leftblue<0){
                                    leftblue=0;
                                }    
                                btnblue.style.left=leftblue+"px";
                                break;  
            default :   alert('none');
                            break;                                                                    
        }
    })
   

}

