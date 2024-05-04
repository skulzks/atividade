let number = parseInt(prompt("Digite um número para verificar se ele é primo: "));

if (number < 2) {
  console.log("O número não é primo.");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("O número é primo.");
  } else {
    console.log("O número não é primo.");
  }
}