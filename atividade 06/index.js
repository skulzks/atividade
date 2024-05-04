const price = parseFloat(prompt("Por favor, insira um preço do produto:"));

const discountedPrice = price * 0.9;

console.log(`O preço com desconto é $${discountedPrice.toFixed(2)}`);