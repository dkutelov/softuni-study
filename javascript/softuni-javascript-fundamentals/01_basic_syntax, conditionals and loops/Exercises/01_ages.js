function getAgeLabel(age) {
  if (age >= 0 && age <= 2) {
    console.log('baby');
  } else if (age >= 3 && age <= 13) {
    console.log('child');
  } else if (age >= 14 && age <= 19) {
    console.log('teenager');
  } else if (age >= 20 && age <= 65) {
    console.log('adult');
  } else if (age > 65) {
    console.log('elder');
  } else {
    console.log('out of bounds');
  }
}

//getAgeLabel(51);

function getAgeLabelSwitch(age) {
  switch (age) {
    case 0:
      console.log('baby');
      break;

    default:
      console.log('out of bounds');
      break;
  }
}

getAgeLabelSwitch(0);
