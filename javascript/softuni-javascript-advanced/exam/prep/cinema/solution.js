function solve() {
    // get elements
    const form = document.querySelector('#container');
    const [nameInput, hallInput, ticketPriceInput, onScreenButton] = Array.from(form.children);
    const onScreenList = document.querySelector('#movies > ul');
    const archiveSection = document.querySelector('#archive > ul');

    // read input and add movie
    onScreenButton.addEventListener('click', onMovieAdd);

    function onMovieAdd(event) {
        event.preventDefault();
        let name = nameInput.value;
        let hall = hallInput.value;
        let price = Number(ticketPriceInput.value);

        if (!name || !hall || !price || Number.isNaN(price)) {
            return;
        }

        let newMovie = `<li><span>${name}</span><strong>Hall: ${hallInput.value}</strong>`;
        newMovie += `<div><strong>${price.toFixed(2)}</strong>`;
        newMovie +=
            '<input placeholder="Tickets Sold"><button>Archive</button></div></li>';
        onScreenList.innerHTML += newMovie;

        const [liName, liHall, liDiv] = document.querySelector('#movies > ul').lastChild.childNodes;
        let [liPrice, liCount, btnArh] = Array.from(liDiv.children);
        btnArh.addEventListener('click', onMovieArchive);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    }


    // archive movies
    function onMovieArchive(e) {
        let [
            priceElement,
            ticketsSoldElement,
        ] = e.target.parentElement.children;
        let ticketsSold = ticketsSoldElement.value;
        ticketsSold = Number(ticketsSold);

        if (ticketsSold >=0 || Number.isNaN(ticketsSold)) {
            return;
        }

        let price = Number(priceElement.textContent);
        const liElement = e.target.parentElement.parentElement;
        const movieName = liElement.firstChild.textContent;
        liElement.remove();

        let archivedMovieHTML = `<li><span>${movieName}</span><strong>Total amount: ${(
            price * ticketsSold
        ).toFixed(2)}</strong>`;
        archivedMovieHTML += `<button>Delete</button></li>`;
        archiveSection.innerHTML += archivedMovieHTML;
    }

    // delete movie from archive
    archiveSection.addEventListener('click', handleRemoveMovie);

    function handleRemoveMovie(e) {
        const clickedElement = e.target;
        if (clickedElement.tagName !== 'BUTTON') return;

        if (clickedElement.textContent === 'Delete') {
            clickedElement.parentElement.remove();
        }
    }

    document
        .querySelector('#archive button')
        .addEventListener('click', function (e) {
            e.target.previousElementSibling.innerHTML = '';
        });
}
