function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function solve(area, vol, input) {
    const objArr = JSON.parse((input))
    return objArr.map( obj => {
        return {
            area: Math.abs(area.call(obj)),
            volume: Math.abs(vol.call(obj))
        }
    })
}
