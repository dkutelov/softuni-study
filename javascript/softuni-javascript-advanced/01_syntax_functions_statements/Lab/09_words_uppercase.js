function solve(text) {
    const pattern = /\w+/g;
    const words = [...text.matchAll(pattern)];

    const upperCaseWords = words.map((word) => word[0].toUpperCase());

    console.log(upperCaseWords.join(', '));
}

solve('How, are you today?');
