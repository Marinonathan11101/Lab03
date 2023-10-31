var output = document.querySelector("#output");


var burger = {
    bun: ["Sesame", "Potato", "kaiser"],
    condiments: ["Lettuce", "ketchup", "Mustard", "Relish", "Onions", "Mayo"],
    patty:{
        type: ["Beef", "Chicken", "Vegetarian"],
        size: ["Single", "Double", "Triple"]
    },

    randomCondiment: function(){

        var randomCondiment1 = this.condiments[Math.floor(Math.random() * this.condiments.length)]
        var randomCondiment2 = this.condiments[Math.floor(Math.random() * this.condiments.length)]
        console.log(randomCondiment1,randomCondiment2);


        if (randomCondiment1 !== randomCondiment2)
        {
            return [randomCondiment1, randomCondiment2];
        }

        else{
            return ["Ketchup", "Mayo"];
        }
    },

    description: function(){
        return `The burger has a ${burger.bun[Math.floor(Math.random() * burger.bun.length)]}, its condiments are ${this.randomCondiment()}, its patty size is ${burger.patty.size[Math.floor(Math.random() * burger.patty.size.length)]}, and its patty type is ${burger.patty.type[Math.floor(Math.random() * burger.patty.type.length)]} `
    }


};


output.textContent = burger.description();
