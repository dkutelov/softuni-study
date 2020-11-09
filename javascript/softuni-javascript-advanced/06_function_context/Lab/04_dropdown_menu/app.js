function solve() {
    const chooseYourStyleButton = document.getElementById('dropdown');
    const dropdownElement = document.getElementById('dropdown-ul');
    const outputBox = document.getElementById('box');

    chooseYourStyleButton.addEventListener('click', function(e){
        const currentDisplayStyle = dropdownElement.style.display;
        if (!currentDisplayStyle || currentDisplayStyle  === 'none') {
            dropdownElement.style.display = 'block';
        } else {
            dropdownElement.style.display = 'none';
            outputBox.style.backgroundColor = 'black';
            outputBox.style.color = 'white';
        }
    });

    dropdownElement.addEventListener('click', (e) => changeColor.call(e.target, e));

    function changeColor() {
        console.log(this.tagName);
        if (this.tagName !== 'LI') {  return;}
        outputBox.style.backgroundColor = this.textContent;
        outputBox.style.color = 'black';
    }
}