function createArticle() {
    const title = document.getElementById('createTitle').value;
    const content = document.getElementById('createContent').value;

    if (title !== '' && content !== '') {
        const section = document.querySelector('section#articles');

        const newArticle = document.createElement('article');
        const newArticleTitle = document.createElement('h3');
        newArticleTitle.innerText = title;
        newArticle.appendChild(newArticleTitle);

        const newArticleContent = document.createElement('p');
        newArticleContent.innerText = content;
        newArticle.appendChild(newArticleContent);
        section.appendChild(newArticle);
    }

    document.getElementById('createTitle').value = '';
    document.getElementById('createContent').value = '';
}
