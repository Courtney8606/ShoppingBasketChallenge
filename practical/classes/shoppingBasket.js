class ShoppingBasket {

    // A constructor, to give initial arguments.
    constructor(candies = []) {
  
      // We can define attributes stored on the instance with `this`
      this.candies = candies;
    }
  
    // A method.
    addItem(candy) {
        this.candies = this.candies.concat(candy)
       
      }

    getTotalPrice() {
        const prices = this.candies.map((candy) => candy.getPrice());
        let sum = 0;
        prices.forEach((price) => {
            sum = sum + price;
          });
        return sum;
        }
}
  // Export the class
  module.exports = ShoppingBasket;

  // In the REPL

// const ShoppingBasket = require('./shoppingBasket.js');

// // And use it to create new instances:

// const candies = []

// const shoppingbasket = new ShoppingBasket(candies);
// ShoppingBasket.addItem();
// ShoppingBasket.getTotalPrice();
