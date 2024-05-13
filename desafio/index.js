let balance = 1000;

while (true) {
  console.log(`
    =================
   Bem-vindo ao Caixa Eletronico!
    =================

   Por favor, escolha uma opção:
    1. Consultar Saldo
    2. Retirar
    3. Depósito
    4. Sair
  `);

  let choice = prompt("Digite o número de sua escolha: ");

  switch (choice) {
    case "1":
      console.log(`Seu saldo atual é: $${balance}`);
      break;
    case "2":
      let withdrawal = prompt("Insira o valor que deseja sacar: ");
      if (isNaN(withdrawal) || withdrawal <= 0) {
        console.log("Valor inválido. Insira um número válido maior que zero.");
      } else if (withdrawal > balance) {
        console.log("Saldo Insuficiente. Por favor, insira um valor válido..");
      } else {
        balance -= withdrawal;
        console.log(`Retirada bem-sucedida! Seu novo saldo é: $${balance}`);
      }
      break;
    case "3":
      let deposit = prompt("Digite o valor que deseja depositar: ");
      if (isNaN(deposit) || deposit <= 0) {
        console.log("Valor inválido. Insira um número válido maior que zero.");
      } else {
        balance += deposit;
        console.log(`Depósito bem-sucedido! Seu novo saldo é: $${balance}`);
      }
      break;
    case "4":
      console.log("Obrigado por usar o caixa eletrônico.");
      return; 
    default:
      console.log("Escolha inválida. Introduza um número válido.");
  }
  }