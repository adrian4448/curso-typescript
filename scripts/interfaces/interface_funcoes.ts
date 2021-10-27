interface ISoma {
    (num1: number, num2: number) : number;
}

let primeiraSoma : ISoma;

primeiraSoma = (num1: number, num2: number) : number => {
    return num1 + num2;
}

interface ICalculos {
    somar(a:number, b:number) : number;
    subtrair(a:number, b:number) : number;
    multiplicar(a:number, b:number) : number;
    dividir(a:number, b:number) :number;
}

let calculadora : ICalculos;

function adicao(num1: number, num2: number): number {
    return num1 + num2
}

calculadora = {
    somar: adicao,
    subtrair: (num1:number, num2:number) => num1 - num2,
    multiplicar: (num1:number, num2:number) => num1 * num2,
    dividir: (num1:number, num2:number) => num1 != 0 && num2 != 0 ? num1 / num2 : 0
}