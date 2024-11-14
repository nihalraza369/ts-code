var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "hello my name is ".concat(this.name, " and my age ").concat(this.age);
    };
    return person;
}());
var person1 = new person("nihal", 16);
console.log(person1.greet());
