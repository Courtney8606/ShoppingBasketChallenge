const Candy = require('./candy')

describe('Test candy class', () => {
    it('test constructor returns name', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.name).toBe('Mars')
    })
    it('test constructor returns price', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.price).toBe(4.99)
    })
    it('test getName function returns name', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toBe('Mars')
    })
    it('test getPrice function returns price', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getPrice()).toBe(4.99)
    })
})