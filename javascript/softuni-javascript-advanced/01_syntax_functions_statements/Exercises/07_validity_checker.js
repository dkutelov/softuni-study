function solve(params) {
    const points = [[...params.slice(0,2), 0, 0], [...params.slice(2), 0, 0], [...params.slice(0,2),...params.slice(2)]];

    points.forEach(point => {
        let isValid = null;
        const distance = Math.sqrt((point[0]-point[2])**2 + (point[1] - point[3])**2);
        if (Number.isInteger(distance)) {
            isValid = 'valid';
        } else {
            isValid = 'invalid';
        }
        console.log(`{${point[0]}, ${point[1]}} to {${point[2]}, ${point[3]}} is ${isValid}`);
    })
}

solve([3,0,0,4]);
solve([2,1,1,1]);