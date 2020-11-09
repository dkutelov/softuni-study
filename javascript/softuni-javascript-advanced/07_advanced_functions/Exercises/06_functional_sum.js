function add(n1) {
    function sum(n2) {
        n1 += n2;
        return sum;
    }
    sum.toString = () => n1;
    return sum;
}


console.log(add(1));
console.log(add(1)(6)(-3));
