function solve() {
    return {
        extend(template) {
            Object.keys(template).forEach(key => {
                const currentPropValue =  template[key];

                if (typeof currentPropValue === 'function') {
                    Object.getPrototypeOf(this)[key] = currentPropValue;
                } else {
                    this[key] = currentPropValue;
                }
            });
        }
    };
}

const myObj = solve();
myObj.extend({
    extensionMethod() {console.log('hi')},
    extensionProperty: 'someString'
});

console.log(myObj);