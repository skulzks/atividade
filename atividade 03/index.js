let sum = 0;
let count = 0;

while (true) {
  const grade = parseFloat(prompt("Insira uma nota (ou 0 para parar: "));

  if (grade === 0) {
    break;
  }

  sum += grade;
  count++;
}

if (count === 0) {
  console.log("Nenhuma nota foi inserida.");
} else {
  const average = sum / count;
  console.log(`A nota média é: ${average}`);
}