// var novaEntradaString = "0";

// var resultadoSomas = 0;

// var n1;

// while (novaEntradaString != "fim"){
    
//     novaEntradaString = prompt("Entre com um número para somar, ou digite fim para encerrar");

//     n1 = parseInt(novaEntradaString);

//     resultadoSomas = resultadoSomas + n1;

//     alert("O resultado até o momento é: "+resultadoSomas);

// }

//------------------------------------------------

// var testeNumero = prompt("Entre com um número");

// if (testeNumero == 10) alert("o número é 10");

// else alert("O número não é 10");


//------------------------------------------------

// var testeNumero = prompt("Entre com um número");

// if (testeNumero != 10) alert("O número não é 10");

// else alert("O número é 10");

//------------------------------------------------

var operacaoMatematica = "";

var entradaInicial = prompt("Entre com o primeiro número");

var resultado = parseInt(entradaInicial);

var novaEntradaString, n1;

while (operacaoMatematica != "fim") {
    
    operacaoMatematica = prompt("Entre com uma letra para escolher a operacao matematica: a(adição), s(subtração), m(multiplicação) ou d(divisão), ou (fim) para encerrar");

    novaEntradaString = prompt("Entre com o próximo número");

    n1 = parseInt(novaEntradaString);

    if (operacaoMatematica == "a") resultado = resultado + n1;

    if (operacaoMatematica == "s") resultado = resultado - n1;

    if (operacaoMatematica == "m") resultado = resultado * n1;

    if (operacaoMatematica == "d") resultado = resultado / n1;

    alert("O resultado até o momento é: "+resultado);
}

