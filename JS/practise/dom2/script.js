function myValidation(){
 let value = document.querySelector('#myform').value;
 if(isNaN(value)|| value>20||value <1){
    document.querySelector('#one').textContent='not valid'
 }else{
    document.querySelector('#one').textContent='valid';
 }
}

//form validation 


document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value="";
    event.target.realname.value="";
})