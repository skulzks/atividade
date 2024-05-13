let totalStudents = parseInt(prompt("Digite o número total de alunos: "));
let sum = 0;
let highestGrade = -Infinity;
let lowestGrade = Infinity;

for (let i = 0; i < totalStudents; i++) {
  let grade = parseFloat(prompt(`Insira a nota do aluno ${i + 1}: `));
  sum += grade;
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

let averageGrade = sum / totalStudents;

console.log(`nota media: ${averageGrade}`);
console.log(`nota alta: ${highestGrade}`);
console.log(`nota baixa: ${lowestGrade}`);


