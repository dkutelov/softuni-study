function func(arrOfArr) {
    const biggestNums = arrOfArr.map( arr => Math.max(...arr));
    console.log(Math.max(...biggestNums));
}

func([[20, 50, 10],
    [8, 33, 145]]
)