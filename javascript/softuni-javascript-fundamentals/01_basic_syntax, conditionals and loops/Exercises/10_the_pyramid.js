// function solve(base, increment ) {
//     let stone = 0;
//     let marble = 0;
//     let gold = 0;
//     let lapisLazuli = 0;
//     const rows = Math.ceil(base / 2);

//     for (let i = 1; i <= rows ; i++) {

//         if ( i === rows) {
//             gold = ( base **  2 ) * increment;
//             break;
//         }

//         if ( i % 5 === 0 ) {
//             stone += ((base - 2) ** 2) * increment;
//             lapisLazuli += ( base *  4  - 4) * increment;
//         } else {
//             stone += ((base - 2) ** 2) * increment;
//             marble += ( base *  4 - 4) * increment;
//         }
//         base -= 2;
//     }
//     console.log(`Stone required: ${Math.ceil(stone)}`);
//     console.log(`Marble required: ${Math.ceil(marble)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
//     console.log(`Gold required: ${Math.ceil(gold)}`);
//     console.log(`Final pyramid height: ${Math.floor(rows* increment)}`);
// }

// Solution 2
function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let gold = 0;
  let lapisLazuli = 0;
  let level = 0;

  for (let row = base; row > 0; row -= 2) {
    level++;
    const totalMaterial = row ** 2 * increment;
    const currentStone = (row - 2) ** 2 * increment;

    if (row > 2) {
      stone += currentStone;
      if (level % 5 != 0) {
        marble += totalMaterial - currentStone;
      } else {
        lapisLazuli += totalMaterial - currentStone;
      }
    } else {
      gold += totalMaterial;
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(level * increment)}`);
}

//solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);
