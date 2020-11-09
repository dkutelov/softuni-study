function solve(params) {
    let html = '<table>\n\t<tr>';
    const data = JSON.parse(params);
    for (let key in data[0]) {
        html +=  `<th>${key}</th>`;
    }
    html += '</tr>\n';

    data.forEach( row => {
        html += '\t<tr>';
        Object.values(row).forEach( val => {
            html +=  `<td>${replaceSpecialChars(String(val))}</td>`;
        });
        html += '</tr>\n';
    });
    html += '</table>';

    function replaceSpecialChars(text) {
        return text.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    return html;
}


const res = solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])
console.log(res);