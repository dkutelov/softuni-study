function encodeAndDecodeMessages() {
    const [firstButton, secondButton] = document.querySelectorAll('button');
    const [encodeTextarea, decodeTextarea] = document.querySelectorAll(
        'textarea'
    );

    firstButton.addEventListener('click', encodeHandler);
    secondButton.addEventListener('click', decodeHandler);

    function encodeHandler(e) {
        let text = encodeTextarea.value;

        if (text) {
            text = text
                .split('')
                .map((x) => String.fromCharCode(x.charCodeAt(0) + 1))
                .join('');
        }
        encodeTextarea.value = '';
        decodeTextarea.value = text;
    }

    function decodeHandler(e) {
        let text = decodeTextarea.value;
        decodeTextarea.value = text
            .split('')
            .map((x) => String.fromCharCode(x.charCodeAt(0) - 1))
            .join('');
    }
}
