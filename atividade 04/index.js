const radius = parseFloat(prompt("Insira o raio de um circulo"))

const area = Math.PI * Math.pow (radius,2);

console.log (`A área de um círculo com raio ${radius} é ${ area.toFixed(2)}.`)