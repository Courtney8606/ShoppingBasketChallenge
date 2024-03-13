const fizzBuzz = require('./fizzbuzz')

describe('testing the fizzbuzz function', () => {
    it('3 returns Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });
    it('5 returns Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    });
    it('8 returns number', () => {
        expect(fizzBuzz(8)).toBe(8)
    });
    it('15 returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
    it('18 returns Fizz', () => {
        expect(fizzBuzz(18)).toBe('Fizz')
    });
    it('20 returns Buzz', () => {
        expect(fizzBuzz(20)).toBe('Buzz')
    })
})