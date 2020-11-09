function coneVolumeAndArea(r, h) {
  const volume = (1 / 3) * Math.PI * h * r ** 2;
  const area = Math.PI * r * (r + Math.sqrt(r ** 2 + h ** 2));
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}

coneVolumeAndArea(3, 5);
