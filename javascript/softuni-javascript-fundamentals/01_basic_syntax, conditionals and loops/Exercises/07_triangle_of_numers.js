function triangle(num) {
    for (let i = 1; i <= num ; i++) {
        let row = '';
        for (let j = 1; j <= i ; j++) {
            row += `${i} `;
        }
        console.log(row.trim());
    }
}

function triangle2(num) {
    for (let i = 1; i <= num ; i++) {
        console.log(`${i} `.repeat(i).trim());
    }
}


triangle2(6)