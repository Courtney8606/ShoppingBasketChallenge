const ShoppingBasket = require('./shoppingbasket')
const Candy = require('./candy')

describe('Test ShoppingBasket Class', () => {
    it('Empty shopping basket returns 0', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0)
    })
    it('Adding an item adds item to array', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 3.99)
        basket.addItem(candy)
        expect(basket.candies).toEqual([candy])
    })
    it('Adding an item you can return price', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 3.99)
        basket.addItem(candy)
        expect(basket.getTotalPrice()).toBe(3.99)
    })
    it('Adding multiple items you can return total price', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 3.99)
        const candy2 = new Candy('Snickers', 2.99)
        basket.addItem(candy)
        basket.addItem(candy2)
        expect(basket.getTotalPrice()).toBe(6.98)
    })
})