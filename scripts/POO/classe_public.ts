class Veiculo {
    
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }
}

const carro = new Veiculo("Branco");

carro.cor = "Preto";

console.log(carro.cor);