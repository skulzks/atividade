const dayOfWeekNumber = parseInt(prompt("Digite um número de 1 a 7 que representa o dia da semana: "));


const daysOfWeek = {
  1: "Segunda-feira",
  2: "Terça-feira",
  3: "Quarta-feira",
  4: "Quinta-feira",
  5: "Sexta-feira",
  6: "Sabado",
  7: "domingo"
};


const dayName = daysOfWeek[dayOfWeekNumber] || "Entrada inválida";
console.log(dayName);