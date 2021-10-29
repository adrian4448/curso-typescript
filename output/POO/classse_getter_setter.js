"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toLocaleUpperCase();
    }
    set nome(nome) {
        if (nome.length < 5) {
            throw new Error("O nome deve possuir no minimo 5 letras");
        }
        this._nome = nome;
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(nivel) {
        this._nivel = nivel;
    }
}
const permissao = new Permissao("Adrian morais", 1);
permissao.nome = "Teste do adrian";
console.log(permissao.nome);
//# sourceMappingURL=classse_getter_setter.js.map