var literalCircle={   //new object()
    radius :10,

    getarea: function(){
                console.log(this);
               // var self=this;
                var increaseradius= function(){
                       var self.radius=20;
                        };
                increaseradius();
                console.log(this.radius);
                return Math.PI*Math.pow(this.radius,2);
                }

};

console.log(literalCircle.getarea());

