function create(words) {
    const mainDiv = document.getElementById('content');

    words.forEach((word) => {
        const divElement = document.createElement('div');
        divElement.classList.add('word');
        const pElement = document.createElement('p');
        pElement.style.display = 'none';
        pElement.textContent = word;
        divElement.appendChild(pElement);
        mainDiv.appendChild(divElement);
    });

    mainDiv.addEventListener('click', function (e) {
        const targetDiv = e.target;
        if (targetDiv.tagName === 'DIV' || !targetDiv.classList.contains('word')) {
            const targetPElement = targetDiv.querySelector('p');
            targetPElement.style.display = 'block';
        }
    });
}
