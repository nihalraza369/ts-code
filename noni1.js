function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("nihal"));
function andrew(name1, age) {
    if (age) {
        return "hello ".concat(name1, " and your age is ").concat(age, " ");
    }
    else {
        return "hello ".concat(name1);
    }
}
;
console.log(andrew("ali"));
console.log(andrew("ali", 16));
function multiply(a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
}
console.log(multiply(2));
