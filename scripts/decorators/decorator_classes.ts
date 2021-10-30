import { debug } from './utils/index';

@debug
class PrimeiraClasse {

    constructor() { }
}

function log(constructor: any) {

    return class extends constructor {
        created_at: Date = new Date();
    }
}

@log
class SegundaClasse {

    constructor() { }
}

console.log(new SegundaClasse())