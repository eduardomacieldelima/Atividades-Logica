var peso = prompt("digite seu peso em kg");

var altura = prompt("digite altura");

var imc = peso / (altura*altura);

// var naoNumero = (imc == NaN);

// if (imc == naoNumero) alert("Digita numero vacilão");

alert("Seu IMC é "+imc);

if (imc < 17) alert("Muito abaixo do peso");

else if (imc >= 17 && imc <=18.49) alert("Abaixo do peso");

else if (imc >= 18.5 && imc <= 24.99) alert("Peso normal");

else if (imc >= 25 && imc <=29.99) alert("Acima do peso");

else if (imc >= 30 && imc <= 34.99) alert("Obesidade 1");

else if (imc >= 35 && imc <= 39.99) alert("Obesidade 2 (Severa)");

else if (imc > 40) alert("Obesidade 3 (Morbida)");

else alert("Opção Inválida troxa");

