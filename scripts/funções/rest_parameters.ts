function somarRenda(...meses: number[]) : number {
    return meses.reduce((sum, item) => sum + item, 0);
}

console.log(somarRenda(250, 780, 695))