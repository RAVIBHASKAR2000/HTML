(function(window){
    var ravigreeter ={};

    window.ravigreeter=ravigreeter;

    ravigreeter.name="ravi";
    var greeting ="hello";
    ravigreeter.sayhello = function(){
        console.log(greeting+" "+ ravigreeter.name);

    }
})(window);

