(function(window){
    
    var johngreeter={}
    window.johngreeter=johngreeter;
    johngreeter.name="john";
    var greeting="Hi";
    johngreeter.sayhi= function(){
         console.log(greeting+" "+johngreeter.name);
    }

})(window);



