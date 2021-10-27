interface Modelo {
    id: number;
    created_at: number;
    updated_at: number;
}

interface IPessoa extends Modelo{
    nome: string;
    idade: number;
}

interface IUsuario extends IPessoa {
    email: string;
    senha: string;
}

const joao : IUsuario = {
    id: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    nome: "João",
    idade: 25,
    email: "adrico448@gmail.ccom",
    senha: "gsdfaghad"
}