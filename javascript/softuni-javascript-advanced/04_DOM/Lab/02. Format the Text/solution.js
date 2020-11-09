function solve() {
  const text = document.getElementById('input').innerText;
    const sentences = text.split('.');
    const outputArea = document.getElementById('output');

    for (let i=0; i < sentences.length; i+= 3) {
        const newParagraph = document.createElement('p');
        let newParagraphSentences = [];
        for (let j=0; j<= 2; j++) {
            if (sentences[i+j]) {
                newParagraphSentences.push(sentences[i+j]);
            }
        }
        newParagraph.innerText = newParagraphSentences.join('. ') + '.' ;
        outputArea.appendChild(newParagraph);
    }
}