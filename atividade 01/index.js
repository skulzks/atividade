const number = parseInt(prompt("Insira um número:"));

if (number > 0 && number % 2 === 0) {
  console.log(`O número ${number} é positivo.`);
} else {
  console.log(`O número ${number} Não e positivo.`);
}
