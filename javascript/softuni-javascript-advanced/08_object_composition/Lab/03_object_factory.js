function solve(data) {
    return JSON.parse(data).reduce( (acc, el) => ({...acc, ...el}), {});
}

function solveAssign(data) {
    return JSON.parse(data).reduce( (acc, el) => Object.assign({}, acc, el), {});
}



const res = solveAssign(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);

console.log(res);