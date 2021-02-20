module.exports = {
    turnicate50(text) {
        let words = text.split(' ').filter((x) => x);
        if (words.length > 50) {
            words = words.slice(0, 50);
        }

        return words.join(' ');
    },
};
