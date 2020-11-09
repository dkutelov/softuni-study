function addAndRemove(arr) {
  n = arr.length;
  let result = [];

  for (let i = 1; i <= n; i++) {
    const command = arr[i - 1];
    if (command === 'add') {
      result.push(i);
    } else if (command === 'remove') {
      result.pop();
    }
  }

  if (result.length) {
    console.log(result.join(' '));
  } else {
    console.log('Empty');
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);
