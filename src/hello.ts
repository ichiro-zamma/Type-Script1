// function calculateTotal(price: number,quantity: number):number {
//     return price*quantity;
// }

// const result:number=calculateTotal(100,5);

// function printNames(names: string[]):void{
//     names.forEach(name => console.log(name));
// }
// printNames(["田中","佐藤","鈴木"])

// const mixed: (string | number)[] = ["hello",42,"world",100];

// interface User{
//     name: string;
//     age: number;
// }
// const users: User[] = [
//     { name: "太郎", age: 25},
//     { name: "花子", age:28}
// ]

// let adulAge:18;
// adulAge = 20;

// type Role = number | string;
// type EventType = 'click' | 'hover' | 'keydown';

// let firstRole: Role;
// let lastRole: Role;

// type Person = {
//     name: string;
//     age: number;
// }

// const tom: Person = {
//     name: 'Tom',
//     age: 20,
// };

// const bob: Person = {
//     name: 'Bob',
//     age: 30,
//     // gender: 'female',
// };

// const bo = {
//     name: 'Bob',
//     age: 30,
//     gender: 'female',
// };

// const bobAsPerson: Person = bob;


// let value1: unknown = 1;

// let value2: number = value1;

// let value3: unknown = 10;
// if(typeof value3 === 'number'){
//     console.log(value3 +1 );
// }

// let value3: unkown = "hihi";
 

// let myFunction:(arg1: number,arg2:number) => boolean;

// myFunction = (arg1, arg2) => {
//     if (arg1 === arg2) {
//         return true;  
//     } else {
//         return false; 
//     }
// };


// console.log(myFunction(10, 10)); 
// console.log(myFunction(10, 5));  

// type Cale =(a: number, b: number) => number;

// const add: Cale = (a,b) => a+b;
// const i: Cale =(a,b) => a-b;
// const o: Cale =(a,b) => a*b;
// const j: Cale =(a,b) => a/b;

// console.log(add(2,3));
// console.log(i(2,3));
// console.log(o(2,3));
// console.log(j(2,3));

// interface FruitStock {
//     [i: string]: number;
// }

// const fruit:  FruitStock = {};
// fruit.apple = 3;
// fruit.orange = 5;

// class Person {
//     readonly name: string;
//     age:number;
//     hobbies?: string[];

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(greeting: string): void {
//         console.log(`Hello ${greeting}.`);
//     }
// }

// let tom: Person;
// tom = new Person(`Tom`,30);
// tom.hobbies=[`Tom`,`mika`,`g`];




class Circle{
    static PI: number = 3.14;
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    getArea(): number {
        return Circle.PI* this.radius * this.radius;
    }
}
console.log(Circle.PI);

const circleA = new Circle(5);
console.log(circleA.getArea());

const circleB = new Circle(10);
console.log(circleB.getArea());

