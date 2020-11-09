function solve() {
    const searchButton = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchField');
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    searchButton.addEventListener('click', searchClickHandler);

    function searchClickHandler() {
        clearSelected();
        let searchText = searchInput.value;
        if (searchText) {
            searchText = searchText.toLowerCase();
            tableRows.forEach((row) => {
                Array.from(row.children).forEach((cell) => {
                    const cellContent = cell.textContent;
                    if (
                        cellContent.toLowerCase().includes(searchText) &&
                        !row.classList.contains('selected')
                    ) {
                        console.log(row.classList);
                        row.classList.add('select');
                    }
                });
            });
        }

        searchInput.value = '';
    }

    function clearSelected() {
        tableRows.forEach((row) => {
            if (row.classList.contains('select')) {
                row.classList.remove('select');
            }
        });
    }
}
