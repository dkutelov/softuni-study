const assert = require('chai').assert;
const expect = require('chai').expect;

function calc(a,b) {return a + b};

describe('Calc sum', function() {
    it('should return ...', () => {
        let n1 = 1;
        let n2 = 5;

        let result = calc(n1,n2);

        assert.equal(result, 6);
    });

    it('should return ...', () => {
        let n1 = -10;
        let n2 = -15;

        let result = calc(n1,n2);

        assert.equal(result, -25);
    })
});

describe('calc expect', () => {
   it('should ... ....', () => {
      let res =  calc(1,2);
      expect(res).to.equal(3);
   });
});