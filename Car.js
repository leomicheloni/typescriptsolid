"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }
    Car.prototype.start = function () {
        this._isRunning = true;
    };
    Car.prototype.drive = function (distance) {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    };
    Car.prototype.getPosition = function () {
        return this._distanceFromStart;
    };
    return Car;
}());
exports.Car = Car;
