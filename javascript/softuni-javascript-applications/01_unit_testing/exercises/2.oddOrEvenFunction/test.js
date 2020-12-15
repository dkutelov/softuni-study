let {assert} = require('chai');
let isOddOrEvenFunc = require('./oddOrEvenFunc');

describe('02 Problem - function isOddOrEven', () => {
    it('function should return string "even"', () => {
        const actual = isOddOrEvenFunc('test');
        assert.equal(actual, 'even');
    })
    it('function should return string "odd"', () => {
        const actual = isOddOrEvenFunc('test1');
        assert.equal(actual, 'odd');
    })
    it('Should return undefined with a number', () => {
        const actual = isOddOrEvenFunc(5);
        assert.equal(actual, undefined);
    })
    it('Should return undefined with an object', () => {
        const actual = isOddOrEvenFunc({'test':1});
        assert.equal(actual, undefined);
    })
});