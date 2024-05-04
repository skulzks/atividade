const age = prompt("Favor digite sua idade");

const yearOfBirth = new Date().getFullYear() - age;

console.log(`Com base na sua idade, você nasceu em ${yearOfBirth}.`);

