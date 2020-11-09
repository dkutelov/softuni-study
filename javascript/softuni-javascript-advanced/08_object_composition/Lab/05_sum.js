function solve() {
    return  {
        init(selector1, selector2, resultSelector) {
            console.log(this);
            this.selector1 = selector1;
            this.selector2 = selector2;
            this.resultSelector = resultSelector;
        },
        add() {
            const firstValue = document.querySelector(this.selector1).value;
            const secondValue = document.querySelector(this.selector2).value;
            document.querySelector(this.resultSelector).value = Number(firstValue) + Number(secondValue);
        },
        subtract(){
            const firstValue = document.querySelector(this.selector1).value;
            const secondValue = document.querySelector(this.selector2).value;
            document.querySelector(this.resultSelector).value = Number(firstValue) - Number(secondValue);
        }
    }
}

const res = solve();

res.init('#firstId', '#secondId');

console.log(res);