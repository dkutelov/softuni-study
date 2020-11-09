function solve(){
    class Figure {
        unitsMap = {
            'cm': 1,
            'mm': 10,
            'm': 0.01
        };

        constructor(units = 'cm') {
            this.units = units;
        }


        changeUnits (units){
            this.units = units;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return Math.PI * (this.radius * this.unitsMap[this.units]) ** 2 ;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * this.unitsMap[this.units]}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.unitsMap[this.units] * this.height * this.unitsMap[this.units];
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * this.unitsMap[this.units]}, height: ${this.height* this.unitsMap[this.units]}`;
        }

    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

const res = solve();

let c = new res.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new res.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
