function foo(arr) {
    const step = +arr.pop();

    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
    }
}

foo(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);

foo(	['dsa',
    'asd',
    'test',
    'tset',
    '2']

);


foo(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);
