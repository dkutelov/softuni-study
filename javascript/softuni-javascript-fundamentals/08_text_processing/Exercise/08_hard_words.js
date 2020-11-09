function hardWords(input) {
    let text = input.shift();
    const words = input[0];

    let dashIndex = text.indexOf('_');
    while (dashIndex > -1) {
        const dashCount = getDashCount(dashIndex);
        const wordMatchedCount = getWordByCount(dashCount, words);
        text = text.replace('_'.repeat(dashCount), wordMatchedCount);
        dashIndex = text.indexOf('_', dashIndex + dashCount);
    }

    console.log(text);

    function getDashCount(i) {
        let count = 1;

        while (true) {
            i++;
            if (text[i] !== '_') {
                return count;
            }
            count++;
        }
    }

    function getWordByCount(count, words) {
        return words.find((word) => word.length === count);
    }
}

hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
