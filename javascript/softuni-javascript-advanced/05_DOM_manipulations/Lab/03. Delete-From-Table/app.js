function deleteByEmail() {
    const tableRows = document.getElementById('customers').children[1].children;
    // const rows = Array.from(document.querySelectorAll('#customers td:last-child');
    const rows = Array.from(tableRows);
    const emailToRemove = document.querySelector('input[name=email]').value;
    const result = document.getElementById('result');
    let notFound = true;

    if (!emailToRemove) {return;}

    // can use find
    rows.forEach(row => {
        const currentEmail = row.children[1].textContent;
        if (currentEmail === emailToRemove) {
            row.remove();
            notFound = false;
            result.textContent = "Deleted.";
        }
    });

    if (notFound) {
        result.textContent = "Not found.";
    }
}