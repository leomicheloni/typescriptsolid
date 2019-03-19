"use strict";
exports.__esModule = true;
var Animal_1 = require("./Liskov/Animal");
var Snake_1 = require("./Liskov/Snake");
var Horse_1 = require("./Liskov/Horse");
var ElectricDuck_1 = require("./Liskov/ElectricDuck");
var Liskov = /** @class */ (function () {
    function Liskov() {
    }
    Liskov.prototype.Run = function () {
        var mike = new Animal_1.Animal("Generic Animal");
        var sam = new Snake_1.Snake("Sammy the Python");
        var tom = new Horse_1.Horse("Tommy the Palomino");
        var donald = new ElectricDuck_1.ElectricDuck("I'm an electric Duck called Donald");
        var animals = [sam, tom, mike, donald];
        animals.forEach(function (animal) {
            if (animal instanceof ElectricDuck_1.ElectricDuck) {
                animal.powerOn = true;
            }
            animal.move(10);
        });
    };
    return Liskov;
}());
exports.Liskov = Liskov;
