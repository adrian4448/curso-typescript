interface CadastroPadrao {
    readonly id: number;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface CadastroUsuario extends CadastroPadrao {
    nome: string;
    senha: string;
    email: string;
}

interface CadastroCategoria extends CadastroPadrao {
    nome: string;
}

class CadastroBasico<T> {

    criar(dados: T) : T {
        console.log("Criando novo registro");

        return dados;
    }

    selecionar(id: number) : T {
        console.log(`Dados do registro de interface de ID: ${id}`);

        return {} as T;
    }

    editar(id : number, dadosAtualizacao: T) : T {
        console.log("Editando dados do ID: " + id);

        return dadosAtualizacao;
    }

    excluir(id: number) : boolean {
        console.log("Excluindo registro do ID: " + id);

        return true;
    }
}

class UsuarioModelo extends CadastroBasico<CadastroUsuario> { }
class CategoriaModelo extends CadastroBasico<CadastroCategoria> { }

const newUser = new UsuarioModelo();
const newCategoria = new CategoriaModelo();

console.log(newUser.criar({
    id: 1,
    nome: "Glaucio Daniel",
    email: "glaucio_daniel@hcode.com.br",
    senha:  "gl@ucio",
    created_at: new Date(),
    updated_at: new Date()
}));

console.log(newCategoria.criar({
    id: 1,
    nome: "Typescript",
    created_at: new Date(),
    updated_at: new Date()
}))