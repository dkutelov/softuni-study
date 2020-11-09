function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.text = itemText.value;
    newOption.value = itemValue.value;

    const selectMenu = document.getElementById('menu');
    selectMenu.appendChild(newOption);

    itemText.value = '';
    itemValue.value = '';
}