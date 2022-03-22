const camera= {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This cannon camera is of ${this.price}$`
    }
}

console.log(camera.myDes());

const camera1= {
    price: 600,
    weight: 2000,
    myDes: ()=> {
        return `This cannon camera is of ${this.price}$`
    }
}

console.log(camera1.myDes());

//hence dont use arrow function in methods and constructor