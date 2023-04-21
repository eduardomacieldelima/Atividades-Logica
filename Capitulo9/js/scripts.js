// function calculaIMC(peso, altura) {         // Peso e altura são parametros

//     var imc = peso / (altura * altura);

//     return imc;                             // imc é o retorno gerado
// }


// var peso = prompt("Entre com o peso");

// var altura = prompt("Entre com sua altura");

// var imc = calculaIMC(peso, altura);

// alert("Seu IMC ficou em: " + imc);


// if      (imc < 17)                          alert("Muito abaixo do peso");

// if      ( (imc >= 17) && (imc < 18.5) )        alert("Abaixo do peso");

// if      ( (imc >= 18.5) && (imc < 25) )        alert("Peso normal");

// if      ( (imc >= 25) && (imc < 30) )          alert("Acima do peso");

// if      ( (imc >= 30) && (imc < 35) )          alert("Obesidade I");

// if      ( (imc >= 35) && (imc < 40) )          alert("Obesidade II");

// if      (imc >= 40)                          alert("Obesidade III");


//----------------------------------------------------------------


// function entradaInteiro(mensagem) {

//     var retornoString = prompt("Digite um numero");

//     var retornoInteiro = parseInt(retornoString);

//     return retornoInteiro;
// }



// entradaInteiro();

// var retornoInteiro = entradaInteiro();

// alert(retornoInteiro+5);


//----------------------------------------------------------------


// function entradaInteiro(mensagem){

//     var retornoString = prompt("Digite um numero");

//     return parseInt(retornoString);
// }


//----------------------------------------------------------------


// function entradaInteiro(mensagem){

//     return parseInt(prompt("Digite um numero"));
// }

//----------------------------------------------------------------

var i = 1;  //vamos utilizar i como o número de vezes que nosso código é utilizado.

// var a = 2

// var b = 3

// var c = 4

function calculoComplexoTresNumeros(a, b, c){

    var i = a + b; //vamos somar a e b e colocar em uma variável temporária, que só vai existir até sairmos da função.

    i = i / 2;

    i = i + c;

    return (i);
}

//nosso programa vai fazer um cálculo complexo com os números 1, 2 e 3

alert("Esta é a execução de número " + i);

// alert("Nosso resultado é " + calculoComplexoTresNumeros(a, b, c));

alert("Nosso resultado é " + calculoComplexoTresNumeros(1, 2, 3));

alert("Terminamos a execução de número " + i);

i++;

alert("Vamos começar a execução de número " + i);
