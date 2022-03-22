function makemultiplier(multiplier)
{
    function b (){
        console.log("Multiplier : "+multiplier);
    };
    b();

    return (
        function (x){
            return multiplier*x;
        }
    );

};


var doubleall = makemultiplier(2);
console.log(doubleall(20));

