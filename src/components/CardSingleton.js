// Singleton Cart Class
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.items = [];
  }
}

const cartInstance = new Cart();
export default cartInstance;
