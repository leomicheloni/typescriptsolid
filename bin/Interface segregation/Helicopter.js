"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlyStatus_1 = require("./FlyStatus");
var Helicopter = /** @class */ (function () {
    function Helicopter() {
        this.altitude = 0;
        this.status = FlyStatus_1.FlyStatus.Landed;
    }
    Helicopter.prototype.start = function () {
        this.status = FlyStatus_1.FlyStatus.TakingOff;
    };
    Helicopter.prototype.takeOff = function () {
        this.status = FlyStatus_1.FlyStatus.Flying;
    };
    Helicopter.prototype.land = function () {
        this.status = FlyStatus_1.FlyStatus.Landed;
    };
    Helicopter.prototype.getStatus = function () {
        return this.status;
    };
    Helicopter.prototype.getAltitude = function () {
        return this.altitude;
    };
    return Helicopter;
}());
exports.Helicopter = Helicopter;
