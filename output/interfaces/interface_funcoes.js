"use strict";
let primeiraSoma;
primeiraSoma = (num1, num2) => {
    return num1 + num2;
};
let calculadora;
function adicao(num1, num2) {
    return num1 + num2;
}
calculadora = {
    somar: adicao,
    subtrair: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 != 0 && num2 != 0 ? num1 / num2 : 0
};
//# sourceMappingURL=interface_funcoes.js.map