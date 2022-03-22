function checkuid(){
	var uid1 =document.getElementById("uid").value;
	if(!uid1.toLowerCase().startsWith("20171cse"))
	{
		alert("Invalid UID");
	}
 }

function show1(){
	  var myshow1 = document.getElementById('veglist');
	  var myshow2= document.getElementById('nonveglist');

	   var displaySetting1 = myshow1.style.display;
	   var displaySetting2 = myshow2.style.display;
       
	   if(displaySetting1=='none')
	   {
	   	myshow1.style.display='block';
	   	myshow2.style.display='none';


	   }
}

function show2(){
	   var myshow1 = document.getElementById('veglist');
	  var myshow2= document.getElementById('nonveglist');

	   var displaySetting1 = myshow1.style.display;
	   var displaySetting2 = myshow2.style.display;
       
	   if(displaySetting2=='none')
	   {
	   	myshow2.style.display='block';
	   	myshow1.style.display='none';


	   }
}