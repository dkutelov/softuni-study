(function () {
    String.prototype.ensureStart  = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };
    String.prototype.ensureEnd  = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
        const currentString = this.toString();
        const strLength = currentString.length;

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (!currentString.includes(' ')) {
            return currentString.slice(0, n - 3) + '...';
        }

        if (strLength <= n) {
            return currentString;
        }

        let isFinished = false;
        return currentString.split(' ').reduce((acc, curr) => {
            if (acc.length + curr.length + 2 <= n && !isFinished) {
                acc += `${curr} `;
            } else {
                isFinished = true;
            }
            return acc;
        }, '').trim() + '...';
    };
    String.format = function(string, ...params) {
        params.forEach((param, index) => {
            string = string.replace( new RegExp("{[" + `${index}` + "]}", 'g'), param);
        });
        return string;
    }
})();

var testString = 'the quick brown fox jumps over the lazy dog';
let res = testString.truncate(10);
console.log(res);