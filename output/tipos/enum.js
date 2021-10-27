"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission[Permission["USER"] = 3] = "USER";
    Permission["READONLY"] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(Permission[1]);
console.log(Permission["READONLY"]);
//# sourceMappingURL=enum.js.map