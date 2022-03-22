// var cgpa = document.getElementById('cgpa').value;
//   var pu = document.getElementById('pu').value;
//    var ten = document.getElementById('ten').value;
     
   // var perc= int ( (cgpa+pu+ten)/2.0);
   var perc =  (90+90+90)/2.0;

   perc=Math.floor(perc);
   if(perc>85){
   //document.getElementById('grade').innerHTML="Distinction";
   console.log("Distinction")
    }

    else if(perc>75&&perc<=85){
      //document.getElementById('grade').innerHTML="First Class";
      console.log("First")
    }
    else if (perc>65 && perc<=75) {
     // document.getElementById('grade').innerHTML="Second Class";
     console.log("Second");
    }
