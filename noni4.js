var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        if (name === void 0) { name = "nihal"; }
        if (age === void 0) { age = 16; }
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "hello my name is ".concat(this.name, " and my age ").concat(this.age);
    };
    return person;
}());
var employe = /** @class */ (function (_super) {
    __extends(employe, _super);
    function employe(position) {
        var _this = _super.call(this) || this;
        _this.position = position;
        return _this;
    }
    employe.prototype.showposition = function () {
        var para = _super.prototype.greet.call(this);
        return " ".concat(para, " and my salary").concat(this.position);
    };
    return employe;
}(person));
var emp = new employe(3000);
console.log(emp.showposition());
