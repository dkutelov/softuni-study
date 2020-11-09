function solve() {
    let state = [];

    return {
        size: state.length,
        add(element) {
            state.push(element);
            this._updateState();
        },
        get(index) {
            if (this._validateIndex(index)) {
                return state[index];
            }
        },
        remove(index) {
            if (this._validateIndex(index)) {
                state.splice(index,1);
                this._updateState();
            }
        },
        _updateState() {
            this.size = state.length;
            state.sort((a,b) => a - b);
        },
        _validateIndex(index) {
            return index >= 0 && index < state.length;
        }
    };
}

const sortedList = solve();

console.log(sortedList.size);
sortedList.add(10);
sortedList.add(11);
console.log(sortedList.get(1));
console.log(sortedList.size);
console.log(sortedList.get(3));
sortedList.remove(1);
console.log(sortedList.size);
console.log(sortedList.get(0));