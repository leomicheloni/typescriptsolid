"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var ElectricDuck = /** @class */ (function (_super) {
    __extends(ElectricDuck, _super);
    function ElectricDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.powerOn = false;
        return _this;
    }
    ElectricDuck.prototype.move = function () {
        if (!this.powerOn)
            return;
        console.log("Galloping...");
        _super.prototype.move.call(this, 15);
    };
    return ElectricDuck;
}(Animal_1.Animal));
exports.ElectricDuck = ElectricDuck;
