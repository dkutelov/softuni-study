(function solution() {
    return  {
        add: (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]],
        multiply: (v,s) => [v[0]*s, v[1]*s],
        length: (v) => Math.sqrt(v[0]**2 + v[1]**2),
        dot: (v1, v2) => v1[0]*v2[0] + v1[1]*v2[1],
        cross: (v1, v2) => v1[0]*v2[1] - v1[1]*v2[0],
    }
})()

let res = solution.add([1, 1], [1, 0]);
res = solution.multiply([3.5, -2], 2);
res = solution.length([3, -4]);
res = solution.dot([1, 0], [0, -1]);
res = solution.cross([3, 7], [1, 0]);
console.log(res);