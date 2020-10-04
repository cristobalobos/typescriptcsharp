"use strict";
exports.__esModule = true;
exports.HelloWorld = void 0;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHi = function () {
        console.log("hello world");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
var helloWorld = new HelloWorld();
helloWorld.sayHi();
