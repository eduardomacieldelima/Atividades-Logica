// var operacaoMatematica = prompt("entre com uma letra para escolher a operação matemática: (s)ubtração, (m)ultiplicação ou (d)ivisão.");

// var n1 = prompt("entre com o primeiro número");

// var n2 = prompt("entre com o segundo número");

// // Colocaremos na variável resultado o valor da operação definida.

// if (operacaoMatematica == "s") resultado = n1 - n2;

// if (operacaoMatematica == "m") resultado = n1 * n2;

// if (operacaoMatematica == "d") resultado = n1 / n2;

// alert("O resultado é "+ resultado);

//----------------------------------------------------------------

// var primeiroNumero = "1";

// var segundoNumero = "2";

// alert(primeiroNumero + segundoNumero);

//----------------------------------------------------------------

// var primeiroNumero = 1;

// var segundoNumero = 2;

// alert(primeiroNumero + segundoNumero);

//----------------------------------------------------------------

// var primeiroNumero = "1";

// var segundoNumero = "2";

// alert(primeiroNumero - segundoNumero);

//----------------------------------------------------------------

// var primeiroNumero = prompt("Entre com o primeiro número");

// var segundoNumero = prompt("Entre com o segundo número");

// alert(primeiroNumero + segundoNumero);

//----------------------------------------------------------------

var operacaoMatematica = prompt("entre com uma letra para escolher a operação matemática: (a)dição, (s)ubtração, (m)ultiplicação ou (d)ivisão.");

var entradaString1 = prompt("Entre com o primeiro número");

//convertemos entradaString1 (uma string) no numero n1

var n1 = parseInt(entradaString1);

alert(n1);

var entradaString2 = prompt("Entre com o segundo número");

//convertemos entradaString2 (uma string) no numero n2

var n2 = parseInt(entradaString2);

alert(n2);

if (operacaoMatematica == "a") resultado = n1 + n2;

if (operacaoMatematica == "s") resultado = n1 - n2;

if (operacaoMatematica == "m") resultado = n1 * n2;

if (operacaoMatematica == "d") resultado = n1 / n2;

alert("O resultado é "+resultado);

//----------------------------------------------------------------




