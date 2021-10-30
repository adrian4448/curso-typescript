function decoratorMetodo(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {

    descriptor.value = (...args: unknown[]) => {
        return args.map(item => {
            return (<string>item).toUpperCase()
        });
    }

}

class TratarMensagem {

    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {
        return mensagens
    }
}

const tratarMensagem = new TratarMensagem();

console.log(tratarMensagem.dizerMensagem("Olá Fulano", "Seja bem vindo", "A Hcode"))