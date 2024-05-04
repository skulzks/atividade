let option = parseInt(prompt("Digite uma opção:\n1. Calcular a área de um triângulo\n2. Calcular a área de um retângulo\n3. Calcular o volume de um cubo\n4. Calcular a área de um círculo\n5. Sair"));

switch (option) {
  case 1:
    let baseTriangle = parseFloat(prompt("Digite a base do triângulo: "));
    let heightTriangle = parseFloat(prompt("Digite a altura do triângulo: "));
    console.log("A área do triângulo é: " + (baseTriangle * heightTriangle) / 2);
    break;
  case 2:
    let widthRectangle = parseFloat(prompt("Insira a largura do retângulo: "));
    let heightRectangle = parseFloat(prompt("Insira a altura do retângulo: "));
    console.log("A área do retângulo é: " + widthRectangle * heightRectangle);
    break;
  case 3:
    let sideCube = parseFloat(prompt("Entre na lateral do cubo: "));
    console.log("O volume do cubo é: " + sideCube * sideCube * sideCube);
    break;
  case 4:
    let radiusCircle = parseFloat(prompt("Insira o raio do círculo: "));
    console.log("A área do círculo é: " + Math.PI * radiusCircle * radiusCircle);
    break;
  case 5:
    console.log("Sair...");
    break;
  default:
    console.log("Opção inválida.");
}