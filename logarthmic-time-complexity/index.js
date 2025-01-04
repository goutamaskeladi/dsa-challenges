/*
  Logarithmic Time (O log(n))
  Logarithmic means time required to complete a function or algorithm is propotional to logarithm of the input data set.
*/

function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

console.log(findPower(2, 4)); // 16
