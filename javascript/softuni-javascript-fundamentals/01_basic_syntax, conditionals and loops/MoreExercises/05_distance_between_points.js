function getDistance(x1, y1, x2, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    const distance = Math.sqrt(x**2 + y ** 2);
    console.log(distance);
}

getDistance(2, 4, 5, 0);
getDistance(2.34, 15.66, -13.55, -2.9985);