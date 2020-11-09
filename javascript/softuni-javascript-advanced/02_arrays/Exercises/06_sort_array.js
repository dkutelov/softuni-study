function foo(arr) {
    return arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n')
}



console.log(foo(['alpha', 'beta', 'gamma']));