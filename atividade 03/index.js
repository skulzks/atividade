let price = parseFloat(prompt("Insira o preço do produto: "));

let age = parseInt(prompt("Digite sua idade:"));

if (age < 18) {
  let discount = price * 0.1;
  let finalPrice = price - discount;
  console.log("O preço final é: " + finalPrice);
} else {
  console.log("O preço final é: " + price);
}