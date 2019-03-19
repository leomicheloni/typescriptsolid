"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consumer = /** @class */ (function () {
    function Consumer(remoteService) {
        this.remoteService = remoteService;
    }
    Consumer.prototype.DoSomething = function () {
        this.remoteService.Calculate();
    };
    return Consumer;
}());
exports.Consumer = Consumer;
