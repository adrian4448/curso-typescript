interface IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;    
}

let endereco: IEndereco;

endereco = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Bela Cintra",
    cidade: "São Paulo"
}