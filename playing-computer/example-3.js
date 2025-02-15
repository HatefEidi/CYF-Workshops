// Assign people to the different frames you'll need...

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber.toFixed(2) * 100}%`;
  return percentage;
}

function writeRatioWithPercentage(ratio) {
  const ratioArray = ratio.split(":");
  const firstPart = Number(ratioArray[0]);
  const secondPart = Number(ratioArray[1]);

  const allParts = firstPart + secondPart;

  const firstPartPercentage = convertToPercentage(firstPart / allParts);
  const secondPartPercentage = convertToPercentage(secondPart / allParts);
  return `${firstPartPercentage} : ${secondPartPercentage}`;
}

const input = "20979:39879";
console.log(writeRatioWithPercentage(input));


