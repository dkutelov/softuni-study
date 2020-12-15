function attachEvents() {
    const baseURL = 'https://phonebook-nakov.firebaseio.com';
    const phonebookUL = document.getElementById('phonebook');
    const inputName = document.getElementById('person');
    const inputPhone = document.getElementById('phone');

    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    function onLoad() {
        fetch(`${baseURL}/phonebook.json`)
            .then(res => res.json())
            .then(data => {

                if (!data) {
                    phonebookUL.textContent = 'No phonebook entries';
                    return;
                }
                createPhonebookHTML(data);
            })
            .catch(err => console.log(err));
    }

    function createPhonebookHTML(contacts) {
            phonebookUL.innerHTML = null;
            Object.keys(contacts).forEach(contactKey => {
                const {person, phone} = contacts[contactKey];

                const contactLiElement = document.createElement('li');
                contactLiElement.textContent = `${person}: ${phone}`;

                const contactDeleteButton = document.createElement('button');
                contactDeleteButton.textContent = 'Delete';
                contactDeleteButton.addEventListener('click', () => deleteContact(contactKey));

                contactLiElement.appendChild(contactDeleteButton);
                phonebookUL.appendChild(contactLiElement);
            });
    }

    function deleteContact(contactKey) {
        console.log(contactKey);
        fetch(`${baseURL}/phonebook/${contactKey}.json `, {
            method: 'DELETE'
        })
            .then( res => onLoad());
    }

    function onCreate() {
        const name = inputName.value;
        const phone = inputPhone.value;

        const contact = {
            person: name,
            phone
        };

        inputName.value = null;
        inputPhone.value = null;

        fetch(`${baseURL}/phonebook.json`, {
            method: 'POST',
            body: JSON.stringify(contact),
        })
            .then(res => res.json())
            .then(data => onLoad())
            .catch(err => console.log(err));
    }
}

attachEvents();
