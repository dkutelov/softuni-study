function focus() {
    const inputs = document.querySelectorAll('input[type=text]');
    Array.from(inputs).forEach(i => i.addEventListener('focus', focusIn));
    Array.from(inputs).forEach(i => i.addEventListener('blur', focusOut));

    function focusIn(e) {
        e.target.parentElement.classList.add('focused');
    }

    function focusOut(e) {
        e.target.parentElement.classList.remove('focused');
    }
}