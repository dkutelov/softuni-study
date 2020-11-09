function solve(arr, criteria) {
    const sortMap = {
        'asc': (arr) => arr.sort((a,b) => a - b),
        'desc': (arr) => arr.sort((a,b) => b - a)
    };
    return sortMap[criteria](arr);
}


let res = solve([14, 7, 17, 6, 8], 'desc');

console.log(res);
