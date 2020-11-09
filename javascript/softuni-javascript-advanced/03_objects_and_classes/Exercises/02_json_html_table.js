function solve(data) {
    let html = `<table>\n`;
    data.forEach((dataRow) => {
        const rowObj = JSON.parse(dataRow);
        html += `\t<tr>\n`;
        Object.values(rowObj).forEach((val) => {
            html += `\t\t<td>${val}</td>\n`;
        });
        html += '\t</tr>\n';
    });

    html += '</table>';

    return html;
}

function solve1(data = []) {
    return (
        `<table>\n` +
        data
            .map((row) => {
                row = JSON.parse(row);
                let currentRow = `\t<tr>\n`;
                Object.values(row).forEach((val) => {
                    currentRow += `\t\t<td>${val}</td>\n`;
                });
                return currentRow + '\t</tr>';
            })
            .join('\n') +
        '\n</table>'
    );
}

const res = solve1([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);

console.log(res);
