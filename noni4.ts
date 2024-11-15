class person{

    name:string;
    age:number;
    
    constructor(name:string="nihal",age:number=16){
        this.name=name;
        this.age=age;
    }
    
    
    greet():string{
        return`hello my name is ${this.name} and my age ${this.age}`;
    }
    }
    






class employe extends person{
    position:number;
   
    constructor(position:number){
      super();
      this.position=position;
    }
   
    showposition():string{
       const para = super.greet();
       return ` ${para} and my salary${this.position}`
       
   }
   
    }
   
    const emp=new employe(3000)
    console.log(emp.showposition())