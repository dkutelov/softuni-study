function solve() {

    const addButton = document.getElementById('add');
    const [ _ , openSection,, completeSection] = Array.from(document.getElementsByTagName('section'));
    addButton.addEventListener('click', takeInput);

    // takes input, validates and calls addArticleToOpen section
    function takeInput(e) {
        e.preventDefault();
        const task = document.getElementById('task');
        const description = document.getElementById('description');
        const date = document.getElementById('date');

        if (task.value && description.value && date.value) {
            addArticleToOpen(task, description, date);
            task.value = '';
            description.value = '';
            date.value = '';
        }
    }

    //adds article to open section
    function addArticleToOpen(task, description, date) {
        const article = document.createElement('article');
        article.innerHTML = `<h3>${task.value}</h3>
                    <p>Description: ${description.value}</p>
                    <p>Due Date: ${date.value}</p>
                    <div class="flex">
                        <button class="green">Start</button>
                        <button class="red">Delete</button>
                    </div>`;
        const articleWrapper = openSection.children[1];
        articleWrapper.appendChild(article);
        articleWrapper.lastChild.addEventListener('click', onOpenSectionClick);
    }

    // handles click on start or delete buttons in open section
    function onOpenSectionClick(e) {
        const currentArticle = e.currentTarget;
        if (e.target.textContent === 'Delete') {
            currentArticle.remove();
        } else if (e.target.textContent === 'Start') {
            const buttonsWrapper = currentArticle.querySelector('.flex');
            buttonsWrapper.innerHTML = `<button class="red">Delete</button>
<button class="orange">Finish</button>`;
            const inProgressWrapper = document.getElementById('in-progress');
            inProgressWrapper.appendChild(currentArticle);
            inProgressWrapper.lastChild.addEventListener('click', onInProgressSectionClick)
        }
    }

    // handles click on delete or finish buttons in the in progress section
    function onInProgressSectionClick(e) {
        const currentArticle = e.currentTarget;
        if (e.target.textContent === 'Delete') {
            currentArticle.remove();
        } else if (e.target.textContent === 'Finish') {
            completeSection.children[1].appendChild(currentArticle);
            const buttonsWrapper = currentArticle.querySelector('div');
            buttonsWrapper.remove();
        }
    }
}