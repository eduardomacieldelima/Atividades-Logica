// var menorNumero = 0;

// var maiorNumero = 0;

// var entrada = prompt("Entre com um número, ou 'fim' para encerrar");

// menorNumero = parseInt(entrada);

// maiorNumero = menorNumero;

// alert("o maior número até agora é " + entrada + " e o menor número é " + entrada);

// while(entrada != "fim"){
    
//     entrada = prompt("Entre com um número, ou 'fim' para encerrar");

//     var temp = parseInt(entrada);

//     if (temp > maiorNumero) maiorNumero = temp;

//     if (temp < menorNumero) menorNumero = temp;

//     alert("o maior número até agora é " + maiorNumero + " e o menor número é " + menorNumero);

// }

//------------------------------------------------


// var entrada = parseInt(prompt("Entre com um número"));

// var resultado = entrada;

// while (entrada > 1) {
    
//     entrada = entrada - 1;

//     resultado = resultado * entrada;
// }

// alert("O fatorial é " + resultado);


//------------------------------------------------


var entrada = parseInt(prompt("Entre com um número"));

var resultado;

while (entrada != "fim") {

    resultado = entrada;

    while (entrada > 1) {
        
        entrada = entrada - 1;

        resultado = resultado * entrada;
    }

    alert("O fatorial é " + resultado);

    entrada = prompt("entre com um número");
}