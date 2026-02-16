export class Person {
    private static COUNTRY = 'thailand';
    firstname?:string;
    lastname?:string;
    private age?:number;
    constructor(firstname?:string,lastname?:string){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    setAge(age:number){
        return this.age = age;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}
const person = new Person()

person.firstname = 'John'
person.lastname = 'Doe'
person.setAge(25)

console.log(person.getFullName())
// John Doe

console.log(person.getAge())
// 25

console.log(Person.COUNTRY)
// Thailand   (หรือค่าคงที่ที่กำหนดเอง)


