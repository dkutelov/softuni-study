function solve(input) {
    const text = input[0];
    const pattern = /([@#])(?<left>[A-Za-z]{3,})\1{2}(?<right>[A-Za-z]{3,})\1/g;
    const matches = text.matchAll(pattern);
    let counter = 0;

    const matchedPairs = [];
    for (const match of matches) {
        counter++;
        const { left, right } = match.groups;
        const rightReversed = right.split('').reverse().join('');
        if (left === rightReversed) {
            matchedPairs.push([`${left} <=> ${right}`]);
        }
    }

    if (counter === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${counter} word pairs found!`);

        if (!matchedPairs.length) {
            console.log('No mirror words!');
            return;
        }
        console.log('The mirror words are:');
        console.log(matchedPairs.join(', '));
    }
}
// solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
// ]);

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
