class FoodDecorate extends foodmakeFactory{
    constructor(foodmakeFactory){
        super();
        this.foodmakeFactory = foodmakeFactory;
    }

    getInfo(){
        return `${this.foodmakeFactory.getInfo()} | ${this.name} | ${this.price}`;
    }
    prepare(){
        return this.foodmakeFactory.prepare();
    }
}

class ExtraCheese extends FoodDecorate{
    getInfo(){
        return this.foodmakeFactory.getInfo() + " +Extracheese"
    }
    prepare(){
        return this.foodmakeFactory.prepare() + "add to Extracheese";
    }
 }

 class ExtraSource extends FoodDecorate{
    getInfo(){
        return this.foodmakeFactory.getInfo() + " +ExtraSource"
    }
    prepare(){
        return this.foodmakeFactory.prepare() + "add to ExtraSouce";
    }
 }

 class Largesize extends FoodDecorate{
    getInfo(){
        return this.foodmakeFactory.getInfo().replace(/Rs\.(\d+)/, (match, p1) => {
            const newPrice = parseInt(p1) * 2;
            return `Rs. ${newPrice}`;
        }) + ("Largesize");
    }
    prepare(){
        return this.foodmakeFactory.prepare() + "add to Largesize";
    }
 }

 class SpicyLavel extends FoodDecorate{
    getInfo(){
        return this.foodmakeFactory.getInfo() + " +Spicy"
    }
    prepare(){
        return this.foodmakeFactory.prepare() + "add to SpicyLavel";
    }
 }

 export{ExtraCheese,ExtraSource,Largesize,SpicyLavel
 }
