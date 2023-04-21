var operaçãoMateatica = prompt("Entre com uma letra para escolher uma operação Matemática: a(adição), s(subtração), m(multiplicação) ou d(divisão)");

var entradastring1 = prompt("Digite o primeiro número");

n1 = parseInt(entradastring1);

var entradastring2 = prompt("Digite o segundo número");

n2 = parseInt(entradastring2);

// // if (operaçãoMateatica == "a") resultado = entradastring1 + entradastring2;  //concatenou não somou


// if (operaçãoMateatica == "a") resultado = n1 + n2;

// else if (operaçãoMateatica == "s") resultado = n1 - n2;

// else if (operaçãoMateatica == "m") resultado = n1 * n2;

// else if (operaçãoMateatica == "d") resultado = n1 / n2;

// else alert("Operação Inválida tro");



//----------------------------------------------------------------


switch (operaçãoMateatica){
    
    case "a": resultado = n1 + n2; break;

    case "s": resultado = n1 - n2; break;

    case "m": resultado = n1 * n2; break;

    case "d": resultado = n1 / n2; break;

    default: alert("operação inválida truta");

}

//----------------------------------------------------------------

alert("O Resultado é "+resultado);