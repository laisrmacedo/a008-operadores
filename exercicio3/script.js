let operacaoA = 5 > 20 && 5 < 2; // false && false --> false
console.log(operacaoA);

let operacaoB = 5 === 5 || 5 === "5"; // true || false --> true
console.log(operacaoB)

let operacaoC = !(20 > 50) // !false --> true
console.log(operacaoC)

let operacaoD = !(20 > 50 || 50 > 60) // !(false || false) --> !false --> true
console.log(operacaoD)