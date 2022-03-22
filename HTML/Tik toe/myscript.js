//restart Game button
var restart =document.querySelector('#b')
//grab all the sqaures
var square= document.querySelectorAll('td')
//clear all the Squares
function clearBoard(){
	for (var i = 0; i < square.length; i++) {
		square[i].textContent='';
	}
}

restart.addEventListener('click',clearBoard);

//check the square marker

// var cellone= document.querySelector('#one')

// cellone.addEventListener('click',function(){
// 	if(cellone.textContent===''){
// 		cellone.textContent='X';

// 	}else if(cellone.textContent==='X'){
// 		cellone.textContent='O';
// 	}
// 	else{
// 		cellone.textContent='';
// 	}
	
// })



function changeMarker(){
	if(this.textContent===''){
		this.textContent='X';
	}
	else if (this.textContent==='X') {
		this.textContent='O';
	}
	else{
		this.textContent='';
	}

}


for (var i = 0; i <square.length; i++) {
square[i].addEventListener('click',changeMarker);
}
//for loop too a add event listners to alll the squares