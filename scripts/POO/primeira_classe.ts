class Pessoa {
    
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString(): string{
        return `A pessoa ${this.nome} possui ${this.idade} anos e ${this.altura} de altura`;
    }

}

const pessoa = new Pessoa("Ronaldo", 20, 180);
const pessoa2 = new Pessoa("Marcos", 30, 186);

pessoa.nome = "Ronaldo de nazare";

console.log("Pessoa:" + pessoa);
console.log("Pessoa:" + pessoa2);