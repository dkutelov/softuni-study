function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shildPrice,
  armorPrice
) {
  brokenEquipment = {
    helmet: { qty: 0, price: helmetPrice },
    sword: { qty: 0, price: swordPrice },
    shield: { qty: 0, price: shildPrice },
    armor: { qty: 0, price: armorPrice },
  };

  for (let index = 1; index <= lostFights; index++) {
    if (index % 2 === 0) {
      brokenEquipment.helmet.qty++;
    }
    if (index % 3 === 0) {
      brokenEquipment.sword.qty++;
    }
    if (index % 2 == 0 && index % 3 === 0) {
      brokenEquipment.shield.qty++;
      if (
        brokenEquipment.shield.qty > 0 &&
        brokenEquipment.shield.qty % 2 == 0
      ) {
        brokenEquipment.armor.qty++;
      }
    }
  }

  let expenses = 0;
  for (let item in brokenEquipment) {
    expenses += brokenEquipment[item].qty * brokenEquipment[item].price;
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

function gladiatorExpenses2(
  lostFights,
  helmetPrice,
  swordPrice,
  shildPrice,
  armorPrice
) {
  let brokenHelms = Math.floor(lostFights / 2);
  let brokenSwords = Math.floor(lostFights / 3);
  let brokenShields = Math.floor(lostFights / 6);
  let brokenArmor = Math.floor(brokenShields / 2);

  let totalExpenses =
    brokenHelms * helmetPrice +
    brokenSwords * swordPrice +
    brokenShields * shildPrice +
    brokenArmor * armorPrice;

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses2(7, 2, 3, 4, 5);
gladiatorExpenses2(23, 12.5, 21.5, 40, 200);
