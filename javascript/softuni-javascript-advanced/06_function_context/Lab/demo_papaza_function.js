let person = {
    name: "John",
    grades: [2,3,4,5],
    speak: function() {
        this.grades.forEach(function(grade) {
            // this is the globalThis
            console.log(`${this.name} - ${grade}`);
        }, this);
    }
};

person.speak();