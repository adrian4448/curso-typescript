"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Interfone Tocado !!";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é ?");
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casa = new Casa("Rosa", { cidade: "Springfield" });
console.log(casa.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map