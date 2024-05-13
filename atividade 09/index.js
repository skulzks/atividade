function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  let root = Math.sqrt(number);
  for (let i = 3; i <= root; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

function main() {
  const number = parseInt(prompt('digite um numero:'));
  if (isPrime(number)) {
    console.log(`${number} esse número é primi.`);
  } else {
    console.log(`${number} esse número não e primo.`);
  }
}

main();