let sideA = parseFloat(prompt("Digite o comprimento do lado A: "));
let sideB = parseFloat(prompt("Digite o comprimento do lado B: "));
let sideC = parseFloat(prompt("Digite o comprimento do lado C: "));

if (sideA === sideB && sideB === sideC) {
  console.log("O triângulo é equilateral.");
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
  console.log("O triângulo é isosceles.");
} else {
  console.log("O triângulo é scalene.");
}
