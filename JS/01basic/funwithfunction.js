let getmygrade = function( currentMarks,totalmarks){
    let myPerc = (currentMarks/totalmarks)*100;
    let myGrade ='';
    if(myPerc>=90) {
        myGrade ='A';
    }

    else if(myPerc>=80){
        myGrade='B';

    }

    else if(myPerc>=70){
        myGrade = 'C';

    }
    else if (myPerc>=60){
        myGrade= 'D';
    }
    else{
        myGrade='F';
    }

    return `Your grade is ${myGrade} and percentage is ${myPerc}`;


}



let yourResult = getmygrade(92,150);
console.log(yourResult);