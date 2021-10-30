interface IProcessamento<T> {
    valor: T;

    realizarProcessamento(arg: T) : T;
}

const texto: IProcessamento<string> = {
    valor: "hcode",
    realizarProcessamento(arg : string) : string {
        return arg.toUpperCase();
    }
}

console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));

const numero : IProcessamento<number> = {
    valor: 123,
    realizarProcessamento(arg: number) : number {
        return arg * arg;
    }
}

console.log(numero.valor);
console.log(numero.realizarProcessamento(numero.valor))