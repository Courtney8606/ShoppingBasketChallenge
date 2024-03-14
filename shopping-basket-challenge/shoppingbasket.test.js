const ShoppingBasket = require('./shoppingbasket')

describe('Test ShoppingBasket Class', () => {
    it('Empty shopping basket returns 0', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0)
    })
    it('Adding an item adds item to array', () => {
        const basket = new ShoppingBasket();
        const doubleCandy = [{name: 'Mars', price: 3.99}]
        basket.addItem(doubleCandy)
        expect(basket.candies).toEqual([doubleCandy])
    })
    it('Adding an item you can return price', () => {
        const basket = new ShoppingBasket();
        const doubleCandy = {name: 'Mars', price: 3.99, getPrice: () => {return doubleCandy.price}};
        basket.addItem(doubleCandy)
        expect(basket.getTotalPrice()).toBe(3.99)
    })
    it('Adding multiple items you can return total price', () => {
        const basket = new ShoppingBasket();
        const doubleCandy = {name: 'Mars', price: 3.99, getPrice: () => {return doubleCandy.price}};
        const doubleCandy2 = {name: 'Snickers', price: 2.99, getPrice: () => {return doubleCandy2.price}};
        basket.addItem(doubleCandy)
        basket.addItem(doubleCandy2)
        expect(basket.getTotalPrice()).toBe(6.98)
    })
})