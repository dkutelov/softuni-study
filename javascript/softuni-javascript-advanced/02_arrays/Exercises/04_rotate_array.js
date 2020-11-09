function foo(arr) {
    let n = +arr.pop();
    n = n % arr.length;
    for (let i = 0; i < n ; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}


function bar(arr) {
    let n = +arr.pop();
    n = n % arr.length;
    for (let i = 0; i < n ; i++) {
        arr = [arr[arr.length-1], ...arr.slice(0,-1)];
    }
    return arr.join(' ');
}


console.log(foo(	['Banana', 'Orange', 'Coconut', 'Apple', '15']));