class person{

name:string;
age:number;

constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}


greet():string{
    return`hello my name is ${this.name} and my age ${this.age}`;
}
}
 const person1 =new person("nihal",16);
 console.log(person1.greet());
 
 