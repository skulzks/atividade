let telefone, local, mora, devia, jatrabalhou;
let array = [telefone, local, mora, devia, jatrabalhou];

telefone = prompt('Telefonou para a vítima?');
local = prompt('Esteve no local do crime?');
mora = prompt('Mora perto da vítima?');
devia = prompt('Devia para a vítima?');
jatrabalhou = prompt('Já trabalhou com a vítima?');

let contador = 0;

for (item of array) {
  if (item === 'S') {
    contador += 1;
  }
}

if (contador === 5) {
  console.log("Assassino");
} else if (contador >= 3 && contador <= 4) {
  console.log('Cúmplice');
} else if (contador === 2) {
  console.log('Suspeito');
} else {
  console.log('Inocente');
}








