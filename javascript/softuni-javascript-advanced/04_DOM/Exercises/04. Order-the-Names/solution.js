function solve() {
    let studentName = document.querySelector("input");
    const liElements = document.querySelector("ol").children;

    document.querySelector("button").addEventListener('click', function () {
        const currentName = studentName.value;
        if (!currentName) { return; }
        addStudent(currentName);
    });

    function addStudent(name) {
        const letterIndex = name.toUpperCase().charCodeAt(0) - 65;

        const currentLiElement = liElements[letterIndex];
        name = name[0].toUpperCase() + name.slice(1).toLocaleLowerCase();

        let currentLiElementText = currentLiElement.textContent;

        if (currentLiElementText) {
            currentLiElementText += ', ';
        }
        currentLiElementText += name;

        currentLiElement.textContent = currentLiElementText;
        studentName.value = '';
    }
}