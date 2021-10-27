"use strict";
function somarRenda(...meses) {
    return meses.reduce((sum, item) => sum + item, 0);
}
console.log(somarRenda(250, 780, 695));
//# sourceMappingURL=rest_parameters.js.map