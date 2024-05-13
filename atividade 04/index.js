
let sum = 0;

while (true) {
const number = parseInt(prompt("Digite um número (ou 0 para parar): "));

  if (number === 0) {
    break;
  }

  sum += number;
}

console.log(`A soma dos números é: ${sum}`);