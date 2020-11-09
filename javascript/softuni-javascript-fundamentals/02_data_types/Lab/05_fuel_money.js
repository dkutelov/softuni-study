function costOfFuelNeeded(distance, pasengers, dieselPricePerLt) {
  const dieselPer100km = 7; // lt
  let neededFuel = (distance / 100) * dieselPer100km;
  const dieselIncreasePerOnePerson = 0.1; //lt
  neededFuel += pasengers * dieselIncreasePerOnePerson;
  const amount = neededFuel * dieselPricePerLt;
  console.log(`Needed money for that trip is ${amount}lv.`);
}

costOfFuelNeeded(260, 9, 2.49);
