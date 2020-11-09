function orders(product, quantity) {
  let productPrice = 0;

  switch (product) {
    case 'coffee':
      productPrice = 1.5;
      break;
    case 'water':
      productPrice = 1;
      break;
    case 'coke':
      productPrice = 1.4;
      break;
    case 'snacks':
      productPrice = 2;
      break;

    default:
      break;
  }

  const orderAmount = productPrice * quantity;
  return orderAmount.toFixed(2);
}

console.log(orders('water', 5));
