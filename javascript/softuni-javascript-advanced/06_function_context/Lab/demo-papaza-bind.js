function speak(msg, endMsg) {
    this.grades.forEach((grade) => {
        console.log(`${this.name} ${msg}: - ${grade}`);
    });
    console.log(endMsg);
}

let person = {
    name: "John",
    grades: [2,3,4,5]
};

speak.call(person, 'has great grade', 'end of print');
speak.call({name: 'Sarah', grades: [4,5,6,4,3]}, 'has also great grade', 'I am done');


let speakWrapper = speak.bind(person); // bind returns new function
speakWrapper('sorry2', 'end2'); // new context is in - build


speakWrapper.call({name: 'Jenny', grades: [1,2,3]});
