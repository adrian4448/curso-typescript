"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Android extends Notificacao {
    enviar(usuario) {
        console.log(`Mandando mensagem para o usuario ${usuario.idAndroid}...`);
        return true;
    }
}
new Email().enviar({
    nome: "João",
    email: "joao.com.br",
    telefone: "33280855"
});
new SMS().enviar({
    nome: "João",
    email: "joao.com.br",
    telefone: "33280855"
});
new Android().enviar({
    nome: "João",
    email: "joao.com.br",
    telefone: "33280855",
    idAndroid: 1
});
//# sourceMappingURL=classe_abstrata.js.map