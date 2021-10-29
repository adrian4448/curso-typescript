class Cadastro {
    nome: string;  
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    
    email : string;
    empresa: string

    constructor(nome:string, nascimento:Date, email: string, empresa: string) {
        super(nome,nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}

const cliente = new Cliente("Adrian", new Date(), "adrian.morais@gmail.com", "ROIT");

console.log(cliente);