function login(tokens) {
    const username = tokens.shift();
    const password = username.split("").reverse().join("");

    for (let i = 0; i < tokens.length; i++) {
        if ( tokens[i] === password ) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if ( i === 3 ) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}


login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);