"use strict";
class BancoDeDados {
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
BancoDeDados.LOCAL = "127.0.0.1";
BancoDeDados.TIPO_MYSQL = "MySQL";
BancoDeDados.TIPO_SQLSERVER = "SQL Server";
const bancoDeDados = BancoDeDados.factory({ tipoBanco: BancoDeDados.TIPO_SQLSERVER,
    usuario: "root",
    senha: "root",
    ip: BancoDeDados.LOCAL });
//# sourceMappingURL=classe_estatica.js.map