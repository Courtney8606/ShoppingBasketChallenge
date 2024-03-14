const Candy = require('./candy')

class ShoppingBasket {
    constructor(candies = []) {
        this.candies = candies
    }

    getTotalPrice() {
        const prices = this.candies.map((candy) => candy.getPrice());
        let sum = 0;
        prices.forEach((price) => {
            sum = sum + price;
          });
        return sum;
        }
    
    addItem(candy) {
        this.candies.push(candy)
    }
}

module.exports = ShoppingBasket