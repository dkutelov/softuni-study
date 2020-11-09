function Spy(obj, methodName) {
    const spy = {count: 0};
    const currentMethod = obj[methodName];

    if (!currentMethod) {return;}

    obj[methodName] = function (...args) {
        this.count++;
        return currentMethod.call(obj, ...args); //if currentMethod() - this will be globalThis
        // alternatively  currentMethod.apply(obj, args)
    }.bind(spy); // bind to be able to use this.count
    return spy
}












