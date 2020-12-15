const {assert} = require('chai');
const StringBuilder = require('./stringBuilder');


describe('String Builder', () => {
    let stringBuilder;

    beforeEach(() => {
       stringBuilder = new StringBuilder()
    });


    describe('Param verification', () => {
        it('It should throw an exception when param is an object', () => {
            assert.throw(() => {
                new StringBuilder({});
            }, 'Argument must be string')
        });
        it('It should throw an exception when param is an array', () => {
            assert.throw(() => {
                new StringBuilder([]);
            }, 'Argument must be string')
        });
        it('It should throw an exception when param is null', () => {
            assert.throw(() => {
                new StringBuilder(null);
            }, 'Argument must be string')
        });
    });


   describe('Initialization', () => {
       it('Is instance of the class', () => {
            assert.isTrue(stringBuilder instanceof StringBuilder)
       });

       it('Creates correct instance without text argument', () => {
           assert.equal('', stringBuilder.toString());
       })

       it('Creates correct instance with text argument', () => {
           stringBuilder =  new StringBuilder('test');
           assert.equal('test', stringBuilder.toString());
       })
   });

    describe('Append string', () => {
        it('It should append text to a string', () => {
            stringBuilder.append('test1');
            assert.equal('test1', stringBuilder.toString());
            stringBuilder.append('test2');
            assert.equal('test1test2', stringBuilder.toString());
        });
    });

    describe('Prepend string', () => {
        it('It should prepend text to a string', () => {
            stringBuilder.prepend('test1');
            assert.equal('test1', stringBuilder.toString());
            stringBuilder.prepend('test2');
            assert.equal('test2test1', stringBuilder.toString());
        });
    });

    describe('Insert string at index', () => {
        it('It should insert a string starting from provided index', () => {
            stringBuilder.append('tst');
            stringBuilder.insertAt('e', 1);
            assert.equal('test', stringBuilder.toString());
        });
    });

    describe('Remove', () => {
        it('It should remove string from start index with given length', () => {
            stringBuilder.append('test');
            stringBuilder.remove(1, 2);
            assert.equal('tt', stringBuilder.toString());
        });
    });

    describe('toString method', () => {
        it('It should return correct string', () => {
            stringBuilder.append('test');
            assert.equal('test', stringBuilder.toString());
        });
    });
});