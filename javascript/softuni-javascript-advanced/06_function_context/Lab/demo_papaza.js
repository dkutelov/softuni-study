// in window
function speak() {
    return this;
}

let context = speak(); // this is an object

console.log(context === globalThis); //true


// in object
let person = {
    name: 'John',
    speak: speakMethod
};

function speakMethod(message) {
    console.log(`${this.name}: ${message}`);
    //console.log(this);
}

person.speak('Hi, there'); // John: Hi, there
speakMethod('Hello'); // undefined: Hello

globalThis.name = 'George';
speakMethod('Hello'); // George: Hello
speakMethod.call(person, 'Hi from call'); //John: Hi from call

const globalSpeak = person.speak;
globalSpeak('hi form globalSpeak'); // global context -> George: hi form globalSpeak


// in event
let boxElement = document.getElementById('box');
boxElement.addEventListener('click', function(event) {
    console.log(this === event.currentTarget); // true
});

// in class
class Person {
    constructor(name) {
        this.name = name;
    }
    speak(message) {
        console.log(`${this.name}`)
    }
}
