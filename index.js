let votos = [0, 0, 0, 0, 0, 0]; 
let totalVotos = 0;


while (true) {
  let resposta = parseInt(prompt("Qual o melhor Sistema Operacional para uso em servidores? (1-6) ou 0 para encerrar"));
  if (resposta === 0) break; 
  if (resposta < 1 || resposta > 6) {
    alert("Valor inválido. Por favor, digite um valor entre 1 e 6.");
    continue;
  }
  votos[resposta - 1]++; // incrementar o vetor de votos
  totalVotos++;
}

// calcular percentuais
let percentuais = [];
for (let i = 0; i < votos.length; i++) {
  percentuais.push(((votos[i] / totalVotos) * 100).toFixed(2));
}

// imprimir resultado
console.log("Sistema Operacional Votos %");
console.log("------------------- ----- ---");
console.log(`Windows Server ${votos[0]} ${percentuais[0]}%`);
console.log(`Unix ${votos[1]} ${percentuais[1]}%`);
console.log(`Linux ${votos[2]} ${percentuais[2]}%`);
console.log(`Netware ${votos[3]} ${percentuais[3]}%`);
console.log(`Mac OS ${votos[4]} ${percentuais[4]}%`);
console.log(`Outro ${votos[5]} ${percentuais[5]}%`);
console.log("------------------- ----- ---");
console.log(`Total : ${totalVotos}`);






