function getTotalPirce(people, groupType, weekDay) {
  function getDailyPrice(weekDay, fridayPrice, SaturdayPrice, SundayPrice) {
    let pricePerPerson;
    switch (weekDay) {
      case 'Friday':
        pricePerPerson = fridayPrice;
        break;
      case 'Saturday':
        pricePerPerson = SaturdayPrice;
        break;
      case 'Sunday':
        pricePerPerson = SundayPrice;
        break;
    }
    return pricePerPerson;
  }

  let pricePerPerson = 0;

  switch (groupType) {
    case 'Students':
      pricePerPerson = getDailyPrice(weekDay, 8.45, 9.8, 10.46);
      break;
    case 'Business':
      pricePerPerson = getDailyPrice(weekDay, 10.9, 15.6, 16);
      break;
    case 'Regular':
      pricePerPerson = getDailyPrice(weekDay, 15, 20, 22.5);
      break;
  }

  let totalPrice = people * pricePerPerson;

  if (groupType === 'Students' && people >= 30) {
    totalPrice *= 0.85;
  } else if (groupType === 'Business' && people >= 100) {
    totalPrice -= pricePerPerson * 10;
  } else if (groupType === 'Regular' && people >= 10 && people <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

getTotalPirce(30, 'Students', 'Sunday');
getTotalPirce(40, 'Regular', 'Saturday');
