function addItem() {
    const itemsList = document.getElementById('items');
    const textInput = document.getElementById('newText');

    const textInputValue = textInput.value;
    if (!textInputValue) {
        return;
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = '[Delete]';
    a.href = '#';
    // const text = document.createTextNode(textInputValue);
    // li.appendChild(text);
    li.textContent = textInputValue;
    li.appendChild(a);
    a.addEventListener('click', function (e) {
        e.preventDefault(); // for the # not to go to the top of the page
        this.parentElement.remove();
    });
    itemsList.appendChild(li);
    textInput.value = '';
}