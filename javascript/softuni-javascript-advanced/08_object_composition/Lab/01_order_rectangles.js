function solve(rectangles) {
     const  rectanglePrototype = {
          area(){
            return this.width * this.height;
         },
         compareTo(other) {
             console.log(this.width - other.width);

              return other.area() - this.area() || other.width - this.width;
         }
    };

    function reducer(acc,  [width, height]) {
        const obj = Object.create(rectanglePrototype);
        obj.width = width;
        obj.height = height;
        return [...acc, obj]
    }

    return rectangles.reduce(reducer ,[]).sort((a,b) => a.compareTo(b));
}

function solution(input) {
    let result = input.map(([width, height]) => ({
        width,
        height,
        area() {
            return this.width * this.height;
        },
        compareTo(rect) {
            return rect.area() - this.area() || rect.width - this.width;
        }
    }));
    return result.sort((a, b) => a.compareTo(b));
}

solution([[10,5], [3,20], [5,12]]);