// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

let operacaoA = 5 > 20 && 5 < 2;
console.log(operacaoA);

let operacaoB = 5 === 5 || 5 === "5";
console.log(operacaoB)

let operacaoC = !(20 > 50)
console.log(operacaoC)

let operacaoD = !(20 > 50 || 50 > 60)
console.log(operacaoD)