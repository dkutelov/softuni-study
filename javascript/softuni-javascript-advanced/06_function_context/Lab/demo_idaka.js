const queue = {
    work: [],
    add(fn, priority) {
        this.work.push(fn);
    },
    process() {
        this.work.forEach(fn => fn()) // w/o bind this is global
    }
};

const user1 = {
    name: 'User 1',
    logName() {
        console.log(this.name);
    }
};

const user2 = {
    name: 'User 2',
    logName() {
        console.log(this.name);
    }
};


const user3 = {
    name: 'User 3',
    logName() {
        console.log(this.name);
    }
};

queue.add(user1.logName.bind(user1));
queue.add(user2.logName.bind(user2));
queue.add(user3.logName.bind(user3));

queue.process();
