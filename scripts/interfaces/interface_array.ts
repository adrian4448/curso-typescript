interface ICategoria {
    id: number;
    nome: string;
    categoriaPai?: ICategoria;
}

const frontEnd : ICategoria = {
    id: 1, 
    nome: "Front-End"
}

const backEnd : ICategoria = {
    id: 2,
    nome: "Back-End"
}

interface IMenu {
    categorias : ICategoria[]
}

let menu : IMenu = {
    categorias: [frontEnd, backEnd]
};

interface Todo {
    [indice: number]: string 
}

let minhasTarefas : Todo;

minhasTarefas = ["Estudar TypeScript", "Estudar JavaScript", "Estudar PHP 8"];

console.log(minhasTarefas[0]);