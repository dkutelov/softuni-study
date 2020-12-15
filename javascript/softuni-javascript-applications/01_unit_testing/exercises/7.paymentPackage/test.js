const {assert} = require('chai');
const PaymentPackage = require('./PaymentPackage');


describe('Payment package', () => {

    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('John', 10);
    });

    describe('Constructor', () => {
        it('Constructor should work properly with 2 params', () => {
            assert.deepEqual(paymentPackage, new PaymentPackage('John', 10));
            assert.equal('John', paymentPackage.name);
            assert.equal(10, paymentPackage.value);
            assert.equal(20, paymentPackage.VAT);
            assert.equal(true, paymentPackage.active);
        });
    });

    describe('Test name', () => {
        it('Should throw error when name is incorrect type', () => {
            assert.throw(() => {
                new PaymentPackage(10, 10);
            }, 'Name must be a non-empty string');
        });

        it('Should throw error when name is zero length', () => {
            assert.throw(() => {
                new PaymentPackage('', 10);
            }, 'Name must be a non-empty string');
        });
    });

    describe('Test value', () => {
        it('Should throw error when value is incorrect type', () => {
            assert.throw(() => {
                new PaymentPackage('John', 'John');
            }, 'Value must be a non-negative number');
        });

        it('Should throw error when value is lower than zero', () => {
            assert.throw(() => {
                new PaymentPackage('John', -10);
            }, 'Value must be a non-negative number');
        });

        it('Should work properly when value is zero', () => {
            paymentPackage = new PaymentPackage('John', 0);
            assert.equal(0, paymentPackage.value);
        });
    });

    describe('Test VAT', () => {
        it('Should throw error when VAT is incorrect type', () => {
            assert.throw(() => {
                paymentPackage.VAT = 'test';
            }, 'VAT must be a non-negative number');
        });

        it('Should throw error when VAT is negative number', () => {
            assert.throw(() => {
                paymentPackage.VAT = -1;
            }, 'VAT must be a non-negative number');
        });

        it('Should work properly when value is zero', () => {
            paymentPackage.VAT = 0;
            assert.equal(0, paymentPackage.VAT);
        });

        it('Should work properly when value is positive number', () => {
            paymentPackage.VAT = 20;
            assert.equal(20, paymentPackage.VAT);
        });
    });

    describe('Test active', () => {
        it('Should throw error when active is not boolean', () => {
            assert.throw(() => {
                paymentPackage.active = 'test';
            }, 'Active status must be a boolean');
        });

        it('Should work properly when set properly', () => {
            paymentPackage.active = false;
            assert.equal(false, paymentPackage.active);
            paymentPackage.active = true;
            assert.equal(true, paymentPackage.active);
        });
    });

    describe('Test toString', () => {
        it('Should return required string when active is true', () => {
            const expected = 'Package: John\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';
            assert.equal(expected, paymentPackage.toString());
        });
        it('Should return required string when active is false', () => {
            paymentPackage.active = false;
            const expected = 'Package: John (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';
            assert.equal(expected, paymentPackage.toString());
        });
    });
});

