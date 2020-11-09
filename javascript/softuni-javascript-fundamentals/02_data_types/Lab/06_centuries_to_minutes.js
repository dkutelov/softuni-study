function convertCenturiesToMinutes(centuries) {
  const years = centuries * 100;
  const days = Math.floor(years * 365.2422);
  const hours = days * 24;
  const minutes = hours * 60;

  console.log(
    `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

convertCenturiesToMinutes(1);
convertCenturiesToMinutes(5);
