const htmlSelectors = {
    loadBooksButton: () => document.getElementById('load-books'),
    createButton: () => document.getElementById('submit-button'),
    createTitle: () => document.getElementById('create-title'),
    createAuthor: () => document.getElementById('create-author'),
    createIsbn: () => document.getElementById('create-isbn'),
    createBookTags: () => document.getElementById('create-book-tags'),
    createForm: () => document.getElementById('create-form'),
    booksWrapper: () => document.querySelector('table tbody'),
    errorWrapper: () => document.querySelector('.error-notification'),
    editButton: () => document.getElementById('edit-button'),
    editTitle: () => document.getElementById('edit-title'),
    editAuthor: () => document.getElementById('edit-author'),
    editIsbn: () => document.getElementById('edit-isbn'),
    editBookTags: () => document.getElementById('edit-book-tags'),
    editForm: () => document.getElementById('edit-form'),
    deleteTitle: () => document.getElementById('delete-title'),
    deleteAuthor: () => document.getElementById('delete-author'),
    deleteIsbn: () => document.getElementById('delete-isbn'),
    deleteForm: () => document.getElementById('delete-form'),
    deleteButton: () => document.getElementById('delete-button'),
    createTagForm: () => document.getElementById('create-tag-form'),
    createTagButton: () => document.getElementById('tag-submit-button'),
    createTagText: () => document.getElementById('create-tag'),
    tagsWrapper: () => document.getElementById('tags'),
    editTagForm: () => document.getElementById('edit-tag-form'),
    editTagName: () => document.getElementById('edit-tag'),
    editTagButton: () => document.getElementById('edit-tag-button'),
};

let bookTags;
window.addEventListener('load', fetchAllTags);

htmlSelectors.loadBooksButton().addEventListener('click', fetchAllBooks);
htmlSelectors.createButton().addEventListener('click', createBook);
htmlSelectors.editButton().addEventListener('click', editBook);
htmlSelectors.deleteButton().addEventListener('click', deleteBook);
htmlSelectors.createTagButton().addEventListener('click', createTag);
htmlSelectors.editTagButton().addEventListener('click', editTag);

async function fetchAllBooks() {
    try {
        const data = await fetch(
            'https://books-exercise-3578d.firebaseio.com/books/.json'
        );
        const books = await data.json();
        renderBooks(books);
    } catch (err) {
        handleError(err);
    }
}

function renderBooks(data) {
    const booksWrapper = htmlSelectors.booksWrapper();

    if (booksWrapper.innerHTML !== '') {
        booksWrapper.innerHTML = '';
    }

    Object.keys(data).forEach((bookId) => {
        const { title, author, isbn, tags } = data[bookId];
        let textTags = '';
        if (tags) {
            textTags = tags.map((tagId) => bookTags[tagId].name).join(', ');
        }

        const tableRow = createDOMElement(
            'tr',
            '',
            null,
            {},
            {},
            createDOMElement('td', title, null, {}, {}),
            createDOMElement('td', author, null, {}, {}),
            createDOMElement('td', isbn, null, {}, {}),
            createDOMElement('td', textTags, null, {}, {}),
            createDOMElement(
                'td',
                '',
                null,
                {},
                {},
                createDOMElement(
                    'button',
                    'Edit',
                    null,
                    { 'data-id': bookId },
                    { click: loadBookById }
                ),
                createDOMElement(
                    'button',
                    'Delete',
                    null,
                    { 'data-id': bookId },
                    { click: loadDeleteForm }
                )
            )
        );
        booksWrapper.appendChild(tableRow);
    });
}

async function createBook(e) {
    e.preventDefault();
    const titleInput = htmlSelectors.createTitle();
    const authorInput = htmlSelectors.createAuthor();
    const isbnInput = htmlSelectors.createIsbn();
    const bookTags = htmlSelectors.createBookTags();

    if (
        titleInput.value === '' &&
        authorInput.value === '' &&
        isbnInput.value === ''
    ) {
        handleError({
            message: 'Fields can not be empty',
        });
    }

    const bookObj = {
        title: titleInput.value,
        author: authorInput.value,
        isbn: isbnInput.value,
    };

    const selectedTags = [...bookTags.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    if (selectedTags.length > 0) {
        bookObj.tags = selectedTags;
    }

    const initObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookObj),
    };
    try {
        await fetch(
            'https://books-exercise-3578d.firebaseio.com/books/.json',
            initObj
        );
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
        await fetchAllBooks();
    } catch (err) {
        handleError(err);
    }
}

async function loadBookById() {
    const bookId = this.dataset.id;
    htmlSelectors.createForm().style.display = 'none';
    htmlSelectors.editForm().style.display = 'block';
    addTagsToForm(bookTags, htmlSelectors.editBookTags());

    try {
        const bookRaw = await fetch(
            `https://books-exercise-3578d.firebaseio.com/books/${bookId}.json`
        );
        const { title, author, isbn, tags } = await bookRaw.json();

        htmlSelectors.editTitle().value = title;
        htmlSelectors.editAuthor().value = author;
        htmlSelectors.editIsbn().value = isbn;

        Array.from(htmlSelectors.editBookTags().children).forEach((option) => {
            if (tags && tags.includes(option.value)) {
                option.selected = true;
            }
        });

        htmlSelectors.editButton().setAttribute('data-id', bookId);
    } catch (err) {
        handleError(err);
    }
}

async function editBook(e) {
    e.preventDefault();
    const bookId = this.dataset.id;

    const titleInput = htmlSelectors.editTitle();
    const authorInput = htmlSelectors.editAuthor();
    const isbnInput = htmlSelectors.editIsbn();
    const bookTags = htmlSelectors.editBookTags();

    if (
        titleInput.value !== '' &&
        authorInput.value !== '' &&
        isbnInput.value !== ''
    ) {
        const bookObj = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value,
        };
        const selectedTags = [...bookTags.options]
            .filter((option) => option.selected)
            .map((option) => option.value);

        if (selectedTags.length > 0) {
            bookObj.tags = selectedTags;
        }

        try {
            await fetch(
                `https://books-exercise-3578d.firebaseio.com/books/${bookId}.json`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(bookObj),
                }
            );

            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
            htmlSelectors.editForm().style.display = 'none';
            htmlSelectors.createForm().style.display = 'block';
            await fetchAllBooks();
        } catch (err) {
            handleError(err);
        }
    }
}

async function loadDeleteForm(e) {
    e.preventDefault();
    htmlSelectors.createForm().style.display = 'none';
    htmlSelectors.deleteForm().style.display = 'block';
    const bookId = this.dataset.id;

    try {
        const bookRaw = await fetch(
            `https://books-exercise-3578d.firebaseio.com/books/${bookId}.json`
        );
        const { title, author, isbn } = await bookRaw.json();

        htmlSelectors.deleteTitle().value = title;
        htmlSelectors.deleteAuthor().value = author;
        htmlSelectors.deleteIsbn().value = isbn;
        htmlSelectors.deleteButton().setAttribute('data-id', bookId);
    } catch (err) {
        handleError(err);
    }
}

async function deleteBook(e) {
    e.preventDefault();
    const bookId = this.dataset.id;
    const initObj = {
        method: 'DELETE',
    };

    try {
        await fetch(
            `https://books-exercise-3578d.firebaseio.com/books/${bookId}.json`,
            initObj
        );
        htmlSelectors.createForm().style.display = 'block';
        htmlSelectors.deleteForm().style.display = 'none';
        await fetchAllBooks();
    } catch (err) {
        handleError(err);
    }
}

async function fetchAllTags() {
    try {
        const data = await fetch(
            'https://books-exercise-3578d.firebaseio.com/tags/.json'
        );
        const tags = await data.json();
        bookTags = tags;

        renderTags(tags);
        addTagsToForm(tags, htmlSelectors.createBookTags());
    } catch (err) {
        handleError(err);
    }
}

function renderTags(tags) {
    htmlSelectors.tagsWrapper().innerHTML = '';
    Object.keys(tags).forEach((tagId) => {
        const { name } = tags[tagId];

        const tagLi = createDOMElement(
            'li',
            '',
            null,
            {},
            {},
            createDOMElement('span', name, null, {}, {}),
            createDOMElement(
                'button',
                'Edit',
                null,
                { 'data-id': tagId },
                { click: loadTagById }
            ),
            createDOMElement(
                'button',
                'Delete',
                null,
                { 'data-id': tagId },
                { click: deleteTag }
            )
        );
        htmlSelectors.tagsWrapper().appendChild(tagLi);
    });
}

function addTagsToForm(tags, selectElement) {
    selectElement.innerHTML = null;
    const tagOptions = Object.keys(tags).map((tagId) => {
        const { name } = tags[tagId];
        return createDOMElement('option', name, tagId, {}, {});
    });
    selectElement.append(...tagOptions);
}

async function createTag(e) {
    e.preventDefault();
    const tagInput = htmlSelectors.createTagText();

    if (!tagInput.value) {
        handleError({
            message: 'Tag name can not be empty',
        });
    }

    const initObj = {
        method: 'POST',
        body: JSON.stringify({
            name: tagInput.value,
        }),
    };
    try {
        await fetch(
            'https://books-exercise-3578d.firebaseio.com/tags/.json',
            initObj
        );
        tagInput.value = '';
        await fetchAllTags();
    } catch (err) {
        handleError(err);
    }
}

async function loadTagById() {
    const tagId = this.dataset.id;
    htmlSelectors.createTagForm().style.display = 'none';
    htmlSelectors.editTagForm().style.display = 'block';

    try {
        const data = await fetch(
            `https://books-exercise-3578d.firebaseio.com/tags/${tagId}.json`
        );
        const { name } = await data.json();

        htmlSelectors.editTagName().value = name;
        htmlSelectors.editTagButton().setAttribute('data-id', tagId);
    } catch (err) {
        handleError(err);
    }
}

async function editTag(e) {
    e.preventDefault();
    const tagId = this.dataset.id;
    const nameInput = htmlSelectors.editTagName();

    if (nameInput.value) {
        const initObj = {
            method: 'PUT',
            body: JSON.stringify({
                name: nameInput.value,
            }),
        };

        try {
            await fetch(
                `https://books-exercise-3578d.firebaseio.com/tags/${tagId}.json`,
                initObj
            );
            nameInput.value = '';
            htmlSelectors.editTagForm().style.display = 'none';
            htmlSelectors.createTagForm().style.display = 'block';
            await fetchAllTags();
        } catch (err) {
            handleError(err);
        }
    }
}

async function deleteTag() {
    const tagId = this.dataset.id;
    const initObj = {
        method: 'DELETE',
    };

    try {
        await fetch(
            `https://books-exercise-3578d.firebaseio.com/tags/${tagId}.json`,
            initObj
        );
        await fetchAllTags();
    } catch (err) {
        handleError(err);
    }
}

function createDOMElement(type, text, value, attributes, events, ...children) {
    const domElement = document.createElement(type);

    if (text !== '') {
        domElement.textContent = text;
    }

    if (value) {
        domElement.value = value;
    }

    Object.entries(attributes).forEach(([attKey, attValue]) =>
        domElement.setAttribute(attKey, attValue)
    );

    Object.entries(events).forEach(([eventName, eventHandler]) =>
        domElement.addEventListener(eventName, eventHandler)
    );

    children.forEach((child) => domElement.appendChild(child));

    return domElement;
}

function handleError(err) {
    const errorWrapper = htmlSelectors.errorWrapper();
    errorWrapper.style.display = 'block';
    errorWrapper.textContent = err.message;

    setTimeout(() => {
        errorWrapper.textContent = '';
        errorWrapper.style.display = 'none';
    }, 5000);
}
