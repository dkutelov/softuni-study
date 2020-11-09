function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((btn) =>
        btn.addEventListener('click', showMoreHandler)
    );

    function showMoreHandler(e) {
        const moreContent = this.previousElementSibling;
        const displayStatus = this.previousElementSibling.style.display;
        const locked = this.parentElement.querySelector('input[value=lock]')
            .checked;

        if (locked) return;

        if (displayStatus === 'none' || displayStatus.length === 0) {
            moreContent.style.display = 'block';
            this.textContent = 'Hide it';
        } else {
            if (locked) return;
            moreContent.style.display = 'none';
            this.textContent = 'Show more';
        }
    }
}
