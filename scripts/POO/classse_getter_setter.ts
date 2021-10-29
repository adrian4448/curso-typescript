class Permissao {
    constructor(
        private _nome: string,
        private _nivel: number
    ) {}

    get nome() {
        return this._nome.toLocaleUpperCase();
    }

    set nome(nome: string) {
        if(nome.length < 5) {
            throw new Error("O nome deve possuir no minimo 5 letras");
        }
        this._nome = nome;
    }

    get nivel() {
        return this._nivel;
    }

    set nivel(nivel: number) {
        this._nivel = nivel;
    }
}

const permissao = new Permissao("Adrian morais", 1);

permissao.nome = "Teste do adrian";

console.log(permissao.nome);