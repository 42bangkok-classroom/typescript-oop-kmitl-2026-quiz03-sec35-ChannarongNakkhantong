export class Student {
    firstname: string;
    lastname: string;
    constructor(firstname: string = "", lastname: string = "") {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    printName(): void {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}


