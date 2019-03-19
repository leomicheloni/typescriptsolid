"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
