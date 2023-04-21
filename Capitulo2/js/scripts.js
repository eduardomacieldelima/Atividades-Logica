var x;

var n1;

var n2;

x = prompt("entre com a letra para escolher a operação matemática: (s)Subtração (m)Multiplicação ou (d)Divisão.");

n1 = prompt("Entre com o primeiro número");

n2 = prompt("Entre com o segundo número");

alert("o resultado é...");

if (x == "s") alert(n1 - n2);

if (x == "m") alert(n1 * n2);

if (x == "d") alert(n1 / n2);

//----------------------------------------------------------------

var x;

var n1, n2, n3, n4, n5;

x = prompt("Entre com um número de 2 a 5");

n1 = prompt("Entre com o primeiro número");

n2 = prompt("Entre com o segundo número");

if (x > 2)n3 = prompt("Entre com o terceiro número");

alert(n3);

if (x > 3)n4 = prompt("Entre com o quarto número");

if (x > 4)n5 = prompt("Entre com o quinto número");

if (x > 4) alert(n5);

if (x > 3) alert(n4);

if (x > 2) alert(n3);

alert(n2);

alert(n1);