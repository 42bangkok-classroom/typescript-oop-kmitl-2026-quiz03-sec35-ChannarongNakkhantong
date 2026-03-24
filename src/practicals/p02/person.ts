export class Person {
    firstname: string;
    lastname: string;
    private age: number;
    static COUNTRY: string = "Thailand";

    constructor(firstname: string = "", lastname: string = "", age: number = 0) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

