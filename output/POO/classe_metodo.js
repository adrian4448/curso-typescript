"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Olá meu nome é ${this.nome}, Tenho ${this.idade} anos e irei lecionar ${this.materia}`;
    }
    dizerNotas(...notas) {
        return `A sua média é ${(notas.reduce((total, nota) => total += nota, 0) / notas.length)}`;
    }
}
const glaucio = new Professor("Glaucio", 45, "DBA");
console.log(glaucio.seApresentar());
console.log(glaucio.dizerNotas(10, 10, 8));
//# sourceMappingURL=classe_metodo.js.map