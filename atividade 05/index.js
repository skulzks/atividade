let username, password;

do {
  username = prompt("Entre com nome de usuário : ");
  password = prompt("Entre com a senha (não pode ser o mesmo que o nome de usuário): ");

  if (username === password) {
    alert("Erro: A senha não pode ser igual ao nome de usuário.");
  }
} while (username === password);

console.log("Nome de usuário e senha são válidos.");