"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} possui ${this.idade} anos e ${this.altura} de altura`;
    }
}
const pessoa = new Pessoa("Ronaldo", 20, 180);
const pessoa2 = new Pessoa("Marcos", 30, 186);
pessoa.nome = "Ronaldo de nazare";
console.log("Pessoa:" + pessoa);
console.log("Pessoa:" + pessoa2);
//# sourceMappingURL=primeira_classe.js.map