let resultado: unknown;

resultado = {
    sucesso: true
};
resultado = "Deu tudo certo !"
resultado = 200;

console.log("===============================================");

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumbero: number = informacao;

// Erro abaixo
//const segundoNumero: number = informacaoDesconhecida;

console.log(typeof informacao);
console.log(typeof informacaoDesconhecida)