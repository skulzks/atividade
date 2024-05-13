let dayNumber = prompt("Digite um número entre 1 e 7:");

switch (dayNumber) {
  case "1":
    console.log("Segunda-Feira  ");
    break;
  case "2":
    console.log("Terça-Feira");
    break;
  case "3":
    console.log("Quarta-Feira");
    break;
  case "4":
    console.log("Quinta-Feira");
    break;
  case "5":
    console.log("Sexta-Feira");
    break;
  case "6":
    console.log("Sabado");
    break;
  case "7":
    console.log("Domingo");
    break;
  default:
    console.log("Entrada inválida. Introduza um número entre 1 e 7.");
}