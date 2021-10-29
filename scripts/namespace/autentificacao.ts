/// <reference path="./index.ts"/>

const novoRegistro = new Autentificacao.LoginRegistro();

const novoUsuario = novoRegistro.registro({
    nome: "Adrian", 
    email: "adrian.morais",
    senha: "8899",
    dataDeNascimento: new Date()
});

console.log(novoUsuario);

