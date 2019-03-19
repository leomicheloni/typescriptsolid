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
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horse.prototype.move = function () {
        console.log("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    return Horse;
}(Animal_1.Animal));
exports.Horse = Horse;
