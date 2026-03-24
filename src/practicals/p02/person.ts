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

    setAge(age: number): void {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}


