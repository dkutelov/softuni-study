function attachGradientEvents() {
    const el = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    el.addEventListener('mousemove', function(e){
        const mouseX = e.offsetX;
        const percentage = Math.floor(Number(mouseX) / 300 * 100);
        resultDiv.textContent = percentage.toString() + '%';
    });
}

