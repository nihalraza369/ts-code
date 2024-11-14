function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("nihal"));
function andrew(name1:string, age?:number): string {
    if (age) {
        return `hello ${name1} and your age is ${age} `
    }
    else {
        return `hello ${name1}`;
    }
};
console.log(andrew("ali"));
console.log(andrew("ali",16));


function multiply(a:number,b:number=10):number{
    return a*b;
}

console.log(multiply(2))

