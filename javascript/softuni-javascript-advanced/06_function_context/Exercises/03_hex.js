class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString(){
        return `0x${(this.value).toString(16).toUpperCase()}`;
    }

    plus(number) {
        let newValue;
        if (number instanceof Hex) {
            newValue = this.value + number.valueOf();
        } else {
            newValue =  this.value + number;
        }
        return new Hex(newValue);
    }

    minus(number) {
        let newValue;
        if (number instanceof Hex) {
            newValue = this.value - number.valueOf();
        } else {
            newValue =  this.value - number;
        }
        return new Hex(newValue);
    }

    parse(hexString) {
        return parseInt(hexString, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');