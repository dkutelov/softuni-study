function solve(str1, str2, str3) {
    const stringLength = str1.length + str2.length + str3.length;
    const averageLength = Math.floor(stringLength / 3);

    console.log(stringLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');