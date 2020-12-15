let {assert} = require('chai');
let lookupChar = require('./lookupChar');

describe('03 Problem - function lookupChar', () => {
    it('function should return undefined with first arg not a string', () => {
        const actual = lookupChar(1, 1);
        assert.equal(actual, undefined);
    })
    it('function should return undefined with second arg not a number', () => {
        const actual = lookupChar('test', 'test');
        assert.equal(actual, undefined);
    })
    it('function should return "Incorrect index" with negative index', () => {
        const actual = lookupChar('test', -1);
        assert.equal(actual, "Incorrect index");
    })
    it('function should return "Incorrect index" with index = length', () => {
        const actual = lookupChar('test', 4);
        assert.equal(actual, "Incorrect index");
    })
    it('function should return "Incorrect index" with index > length', () => {
        const actual = lookupChar('test', 5);
        assert.equal(actual, "Incorrect index");
    })
    it('function should return correct value "t" with index 0', () => {
        const actual = lookupChar('test', 0);
        assert.equal(actual, "t");
    })
    it('function should return correct value "s" with index 2', () => {
        const actual = lookupChar('test', 2);
        assert.equal(actual, "s");
    })
});