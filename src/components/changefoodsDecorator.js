import {FoodmakeFactory} from "./FoodmakeFactory";

class FoodDecorate extends FoodmakeFactory {
  constructor(FoodmakeFactory) {
    super(FoodmakeFactory.name, FoodmakeFactory.image, FoodmakeFactory.price);
    this.FoodmakeFactory = FoodmakeFactory;
  }

  getPrice() {
    return this.FoodmakeFactory.getPrice();
  }

  getInfo() {
    return this.FoodmakeFactory.getInfo();
  }
}

class ExtraCheese extends FoodDecorate {
  getPrice() {
    return this.FoodmakeFactory.getPrice() + 150;
  }
  getInfo() {
    return this.FoodmakeFactory.getInfo() + " + Extra Cheese";
  }
}

class ExtraSource extends FoodDecorate {
  getPrice() {
    return this.FoodmakeFactory.getPrice() + 100;
  }
  getInfo() {
    return this.FoodmakeFactory.getInfo() + " + Extra Sauce";
  }
}

class SpicyLavel extends FoodDecorate {
  getPrice() {
    return this.FoodmakeFactory.getPrice() + 50;
  }
  getInfo() {
    return this.FoodmakeFactory.getInfo() + " + Spicy Level";
  }
}

class Largesize extends FoodDecorate {
  getPrice() {
    return this.FoodmakeFactory.getPrice() + 200;
  }
  getInfo() {
    return this.FoodmakeFactory.getInfo() + " + Large Size";
  }
}

 export{ExtraCheese,ExtraSource,Largesize,SpicyLavel}
