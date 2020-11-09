function solve(){
    const table = document.querySelector('tbody');
    const rows = document.querySelectorAll('tbody tr');

    table.addEventListener('click', onTableClick);

    function onTableClick(e) {
        const row = e.target.parentElement;
        if (row.tagName === 'TR') {
            if (row.style.backgroundColor !== '') {
                row.style.backgroundColor = '';
            } else {
                Array.from(rows).forEach(r => r.style.backgroundColor = '');
                row.style.backgroundColor = "rgb(65, 63, 94)";
            }
        }
    }
}
// function solve(){
//     const tableCells = [...document.querySelectorAll('tbody tr td')];
//
//     tableCells.forEach(row =>  row.addEventListener('click', onRowClick));
//
//     function onRowClick(e) {
//         let hasColor;
//         if (this.parentNode.style.backgroundColor) {
//             hasColor = true;
//         }
//
//         tableCells.forEach(cell => {
//             if (cell.parentNode.style) {
//                 cell.parentNode.removeAttribute("style")
//             }
//         });
//
//         if (!hasColor){
//             this.parentNode.style.backgroundColor = "rgb(65, 63, 94)";
//         }
//     }
// }