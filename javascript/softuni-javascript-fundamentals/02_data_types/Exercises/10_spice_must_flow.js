function spiceMining(startingYield) {
  let days = 0;
  let spice = 0;
  let yield = startingYield;

  while (yield >= 100) {
    spice += yield;
    spice = spice - 26 > 0 ? spice - 26 : 0;
    yield -= 10;
    days++;
  }
  spice = spice - 26 > 0 ? spice - 26 : 0;

  console.log(days);
  console.log(spice);
}

spiceMining(111);
