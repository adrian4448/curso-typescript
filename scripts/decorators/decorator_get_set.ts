function decoratorGetSet(valor: boolean) {
    return function(target: unknown,
        propertyKey: string , descriptor: PropertyDescriptor) {
            descriptor.enumerable = valor;
    }
}

class Login {
    constructor(private _usuario: string,
                private _senha: string) { }

    @decoratorGetSet(true)
    get usuario() {
        return this._usuario;
    }  

    @decoratorGetSet(false)
    get senha() {
        return this._senha
    }
    
    @decoratorGetSet(false)
    set usuario(usuario: string) {
        this._usuario = usuario
    }

    @decoratorGetSet(false)
    set senha(senha: string) {
        this._senha = senha;
    }
}

const login = new Login("Antony", "123455");

console.log(login.usuario);
console.log(login.senha);

for(let chave in login) {
    console.log("chave: ", chave);
    // console.log("valor: ", login[chave]);
}