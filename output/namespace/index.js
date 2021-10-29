"use strict";
var Autentificacao;
(function (Autentificacao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Autentificacao.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Enviando e-mail para recuperação de senha";
        }
        recuperarUsuario() {
            return "Enviando e-mail para recuperação de usuario";
        }
    }
    Autentificacao.Recuperacao = Recuperacao;
})(Autentificacao || (Autentificacao = {}));
//# sourceMappingURL=index.js.map