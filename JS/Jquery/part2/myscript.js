// $('h1').click(function(){
//     console.log('there was click');
// })

// $('li').click(function(){

//     console.log('any li was click');
// })

// $('h1').click(function(){
//     $(this).text('i was changed');
// })


//key press

// $('input').eq(0).keypress(function(){
//     $('h3').toggleClass('turnBlue');
// })

// $('input').eq(0).keypress(function(event){
//     console.log(event);
// })

// $('input').eq(0).keypress(function(event){
//     if(event.which === 13){
//         $('h3').toggleClass('turnBlue');
//     }
// })

//ON

$('h1').on('mouseenter',function(){
    $(this).toggleClass('turnBlue');

})

// $('input').eq(1).on('click',function(){
//     $('.container').fadeOut(3000);
    
// })


$('input').eq(1).on('click',function(){
        $('.container').slideUp(3000);
        
    })
    