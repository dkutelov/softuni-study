function attachEvents() {
    const messagesTextarea = document.getElementById('messages');
    const inputAuthor = document.getElementById('author');
    const inputContent = document.getElementById('content');
    const baseURL = 'https://rest-messanger.firebaseio.com/messanger.json';

    document.getElementById('refresh').addEventListener('click', onRefresh);
    document.getElementById('submit').addEventListener('click', onSubmit);

    function onRefresh() {
            fetch(baseURL)
                .then(res => res.json())
                .then(data => refreshMessages(data))
                .catch(err => console.log(err));
        }

    function refreshMessages(data) {
        messagesTextarea.value = null;
        messagesTextarea.value = Object
            .values(data)
            .map(message => `${message.author}: ${message.content}`).join('\n');

    }

    function onSubmit() {
        const author = inputAuthor.value;
        const content = inputContent.value;

        inputAuthor.value = null;
        inputContent.value = null;

        fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({author, content}),
        })
            .then(data => onRefresh())
            .catch(err => console.log(err));
    }
}

attachEvents();
