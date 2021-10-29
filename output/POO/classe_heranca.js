"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const cliente = new Cliente("Adrian", new Date(), "adrian.morais@gmail.com", "ROIT");
console.log(cliente);
//# sourceMappingURL=classe_heranca.js.map