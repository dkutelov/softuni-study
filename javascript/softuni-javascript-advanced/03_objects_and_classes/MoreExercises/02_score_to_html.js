function solve(params) {
    const data = JSON.parse(params);
    let html = '<table>\n\t<tr><th>name</th><th>score</th></tr>\n';

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

const res = solve('[{"name":"Pencho Penchev","score":0},{"name":"<script>alert(\\"Wrong!\\")</script>","score":1}]');
console.log(res);