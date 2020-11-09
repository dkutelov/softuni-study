function tipplesLatinLetters(n) {
  const firstLetterCode = 'a'.charCodeAt();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        const combination = String.fromCharCode(
          firstLetterCode + i,
          firstLetterCode + j,
          firstLetterCode + k
        );
        console.log(combination);
      }
    }
  }
}

tipplesLatinLetters(3);
