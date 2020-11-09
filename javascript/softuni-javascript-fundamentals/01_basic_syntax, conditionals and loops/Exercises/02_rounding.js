function rounding(num, precision){
    if (precision > 15) {
        precision = 15;
    }

    num = num.toFixed(precision);
    num = parseFloat(num);
    console.log(num);
}

rounding(10.5, 3);