function foo(arr) {
    return arr.reduce((acc, curr, i) => {
        if ( i > 0 && curr >= acc[acc.length - 1]) {
            acc.push(curr)
        }
        return acc;
    },[arr[0]]).join('\n');
}



console.log(foo([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));