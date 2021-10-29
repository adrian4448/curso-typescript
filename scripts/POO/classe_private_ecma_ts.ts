class Documento {
    private valor: string = "123654789-01"; // TS 
    #numero: number = 35; // ECMAScript

    mostrarDocumento() {
        return this.#numero;
    }
}

class CNPJ extends Documento {
    // private valor : string = "234553464-01";
    #numero: number = 50;

    mostrarCNPJ() {
        return this.#numero;
    }
}

const RG = new Documento();
const cnpj = new CNPJ();

console.log(RG.mostrarDocumento());
// console.log("RG: ", RG.valor);
// console.log("RG: ", RG.#numero);
console.log(cnpj.mostrarDocumento());
console.log()