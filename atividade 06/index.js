let ages = [];

for (let i = 0; i < 5; i++) {
  let age = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
  ages.push(age);
}

let averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;

if (averageAge >= 0 && averageAge <= 25) {
  console.log("A turma é jovem.");
} else if (averageAge > 25 && averageAge <= 60) {
  console.log("A turma é adulta.");
} else {
  console.log("A turma é idosa.");
}