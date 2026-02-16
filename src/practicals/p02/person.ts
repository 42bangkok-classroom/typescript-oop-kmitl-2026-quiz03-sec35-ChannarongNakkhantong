export class Person {
    static COUNTRY = 1;
    firstname?:string;
    lastname?:string;
    private age?:number;
    setAge(age:number){
        this.age = age;
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


