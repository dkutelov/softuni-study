function growingWord() {
    const targetElement = document.querySelector('#exercise p');
    const divColorElements = document.querySelector('#colors').children;
    const firstColor = divColorElements[0].getAttribute('id').slice(0, -3);

    let currentFontSize = targetElement.style.fontSize || '1px';
    const newFontSize = Number(currentFontSize.slice(0, -2));
    targetElement.style.fontSize = `${newFontSize * 2}px`;
    const currentTargetElementColor = targetElement.style.color;

    if (!currentTargetElementColor) {
        targetElement.style.color = firstColor;
        return;
    }

    for (const divColor of Array.from(divColorElements)) {
        const currentDivElementColor = divColor.getAttribute('id').slice(0, -3);

        if (currentDivElementColor === currentTargetElementColor) {
            let nextDivElementColor = divColor.nextElementSibling;
            if (!nextDivElementColor) {
                targetElement.style.color = firstColor;
                return;
            }
            const nextColor = nextDivElementColor
                .getAttribute('id')
                .slice(0, -3);
            targetElement.style.color = nextColor;
        }
    }
}
