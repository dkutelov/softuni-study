function foo(arr) {
    const delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

foo(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
)