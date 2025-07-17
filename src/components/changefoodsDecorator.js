import {FoodmakeFactory} from "./FoodmakeFactory";
class FoodDecorate extends FoodmakeFactory{
    constructor(FoodmakeFactory){
        super();
        this.foodmakeFactory = FoodmakeFactory;
    }

    getInfo(){
        return `${this.FoodmakeFactory.getInfo()} | ${this.name} | ${this.price}`;
    }
    prepare(){
        return this.FoodmakeFactory.prepare();
    }
}

class ExtraCheese extends FoodDecorate{
    getInfo(){
        return this.FoodmakeFactory.getInfo() + " +Extracheese"
    }
    prepare(){
        return this.FoodmakeFactory.prepare() + "add to Extracheese";
    }
 }

 class ExtraSource extends FoodDecorate{
    getInfo(){
        return this.FoodmakeFactory.getInfo() + " +ExtraSource"
    }
    prepare(){
        return this.FoodmakeFactory.prepare() + "add to ExtraSouce";
    }
 }

 class Largesize extends FoodDecorate{
    getInfo(){
        return this.FoodmakeFactory.getInfo().replace(/Rs\.(\d+)/, (match, p1) => {
            const newPrice = parseInt(p1) * 2;
            return `Rs. ${newPrice}`;
        }) + ("Largesize");
    }
    prepare(){
        return this.FoodmakeFactory.prepare() + "add to Largesize";
    }
 }

 class SpicyLavel extends FoodDecorate{
    getInfo(){
        return this.FoodmakeFactory.getInfo() + " +Spicy"
    }
    prepare(){
        return this.FoodmakeFactory.prepare() + "add to SpicyLavel";
    }
 }

 export{ExtraCheese,ExtraSource,Largesize,SpicyLavel
 }
