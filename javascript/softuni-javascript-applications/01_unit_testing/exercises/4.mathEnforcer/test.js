let { assert } = require('chai');

let { addFive, subtractTen, sum} = require('./mathEnforcer');

describe('04 Problem - object mathEnforcer', () => {
    describe('addFive', () => {
        it('addFive should return undefined with arg not a number', () => {
            const actual = addFive('a');
            assert.equal(actual, undefined);
        })
        it('addFive should return correct when a number is passed', () => {
            const actual = addFive(10);
            assert.equal(actual, 15);
        })
        it('addFive should return correct when a negative number is passed', () => {
            const actual = addFive(-10);
            assert.equal(actual, -5);
        })
        it('addFive should return correct when a floating number is passed', () => {
            const actual = addFive(1.5);
            assert.closeTo(actual, 6.5, 0);
        })
    })
    describe('subtractTen', () => {
        it('subtractTen should return undefined with arg not a number', () => {
            const actual = subtractTen('a');
            assert.equal(actual, undefined);
        })
        it('subtractTen should return correct when a number is passed', () => {
            const actual = subtractTen(15);
            assert.equal(actual, 5);
        })
        it('subtractTen should return correct when a negative number is passed', () => {
            const actual = subtractTen(-10);
            assert.equal(actual, -20);
        })
        it('subtractTen should return correct when a floating number is passed', () => {
            const actual = subtractTen(10.5);
            assert.closeTo(actual, 0, 0.5);
        })
    })
    describe('sum', () => {
        it('sum should return undefined with first arg not a number', () => {
            const actual = sum('a', 1);
            assert.equal(actual, undefined);
        })
        it('sum should return undefined with second arg not a number', () => {
            const actual = sum(1, 'a');
            assert.equal(actual, undefined);
        })
        it('sum should return undefined with both args not a number', () => {
            const actual = sum('a', 'b');
            assert.equal(actual, undefined);
        })
        it('sum should return correct when two numbers are passed', () => {
            const actual = sum(3,7);
            assert.equal(actual, 10);
        })
        it('sum should return correct when a negative number is passed', () => {
            const actual = sum(-10, -20);
            assert.equal(actual, -30);
        })
        it('sum should return correct when a floating number is passed', () => {
            const actual = sum(10.1 , 10.2);
            assert.closeTo(actual, 20, 0.3);
        })
    })
});