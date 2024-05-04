const weight = parseFloat(prompt("Por favor, insira seu peso (em kg):"));


const height = parseFloat(prompt("Por favor, insira sua altura (em metros):"));


const bmi = weight / (height * height);


let bmiCategory;

if (bmi < 18.5) {
  bmiCategory = "Baixo peso";
} else if (bmi >= 18.5 && bmi < 24.9) {
  bmiCategory = "Normal ";
} else if (bmi >= 25.0 && bmi < 29.9) {
  bmiCategory = "Alto Peso";
} else {
  bmiCategory = "Obeso";
}


console.log(`Seu IMC e ${bmi.toFixed(2)} e você é ${bmiCategory}.`);
