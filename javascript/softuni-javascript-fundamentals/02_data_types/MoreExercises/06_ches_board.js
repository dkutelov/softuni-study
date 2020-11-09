function chessBoard(n) {
  let board = `<div class="chessboard">\n`;

  for (let i = 1; i <= n; i++) {
    let color = 'black';
    if (i % 2 === 0) {
      color = 'white';
    }
    board += `\t<div>\n`;
    for (let j = 1; j <= n; j++) {
      board += `\t\t<span class=\"${color}\"></span>\n`;
      color === 'black' ? (color = 'white') : (color = 'black');
    }
    board += `\t</div>\n`;
  }
  board += `</div>`;
  console.log(board);
}

chessBoard(3);
