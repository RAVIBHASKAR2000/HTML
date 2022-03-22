let mytodos={
    days: 'monday',
    meetings: 0,
    meetdone:0,
    
    addmeeting: function(num=0){
        //console.log('hey i am don');
        this.meetings=this.meetings+num;

    },
    //importnat coma
    
    meetingsdone: function(num=0){
        this.meetdone=this.meetdone+num;
    },
    resetday : function(){
        this.meetings=0;
        this.meetdone=0;
    },

    
    summary: function(){
        let meetingsleft=this.meetings-this.meetdone;
        return `you have ${meetingsleft} meetings left today!`
    }

}

// let mytodos2={
//     days: 'tuesday',
//     meetings: 0,
//     meetdone:0,
    
//     addmeeting: function(){
//         //console.log('hey i am don');
//         console.log(this )

//     }

// }
// mytodos2.addmeeting();



mytodos.addmeeting(5);
mytodos.addmeeting(45)

mytodos.meetingsdone(20);
console.log(mytodos.summary())



