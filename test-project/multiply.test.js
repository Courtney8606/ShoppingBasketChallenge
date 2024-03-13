const multiply = require('./multiply');

describe('multiply', () => {
    test('multiply 2 and 2', () => {
        expect(multiply(2, 2)).toBe(4);
    });
});
