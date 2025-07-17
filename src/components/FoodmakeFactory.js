class FoodmakeFactory {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
    prepare(){
        return new FoodmakeFactory(this.name, this.image, this.price);
    }
    getInfo(){
        return new foodmakeInfo(this.name, this.image, this.price);
    }
}

class Pizza extends FoodmakeFactory {
    constructor(name, image, price) {
        super(name, image, price);
    }
}

class Burger extends FoodmakeFactory {
    constructor(name, image, price) {
        super(name, image, price);
    }
}

class Hotdog extends FoodmakeFactory {
    constructor(name, image, price) {
        super(name, image, price);
    }
}

class juice extends FoodmakeFactory {
    constructor(name, image, price) {
        super(name, image, price);
    }
}

class FoodFctory {
    static createFood(name, image, price) {
        switch(name.toLowerCase()) {
            case 'pizza':
                return new Pizza(name, image, price);
            case 'burger':
                return new Burger(name, image, price);
            case 'hotdog':
                return new Hotdog(name, image, price);
            case 'juice':
                return new juice(name, image, price);
            default: throw new Error('Invalid food type');    
        }
    }
}

export {FoodFctory, FoodmakeFactory, Pizza, Burger, Hotdog, juice};
