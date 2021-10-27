const filmesCategorias: (string | number)[] = ["Comédia", "Drama", "Romance", "Aventura", 10];
const numeros: number[] = [1,2,3,4,5];

filmesCategorias.push("Ação")

const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}

console.log(filmesAnos);