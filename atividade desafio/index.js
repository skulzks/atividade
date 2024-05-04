const hourlyWage = parseFloat(prompt("Por favor, insira seu salário por hora:"));

const hoursWorkedPerMonth = parseFloat(prompt("Por favor, insira o número de horas trabalhadas por mês:"));

const grossSalary = hourlyWage * hoursWorkedPerMonth;

const incomeTax = grossSalary * 0.11;
const inss = grossSalary * 0.08;
const tradeunion = grossSalary * 0.05;

const netSalary = grossSalary - incomeTax - inss - tradeunion;


console.log(`salario grosso: R$${grossSalary.toFixed(2)}`);
console.log(`imposto de renda: R$${incomeTax.toFixed(2)}`);
console.log(`INSS: R$${inss.toFixed(2)}`);
console.log(`sindicato: R$${tradeunion.toFixed(2)}`);
console.log(`salário líquido: R$${netSalary.toFixed(2)}`);
