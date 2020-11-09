function calculateSongDuration(bandName, albumName, songName) {
  const songDuration =
    (albumName.length * bandName.length * songName.length) / 2;
  const oneRotationSeconds = 2.5;
  const rotations = Math.ceil(songDuration / oneRotationSeconds);
  console.log(`The plate was rotated ${rotations} times.`);
}

calculateSongDuration('Black Sabbath', 'Paranoid', 'War Pigs');
