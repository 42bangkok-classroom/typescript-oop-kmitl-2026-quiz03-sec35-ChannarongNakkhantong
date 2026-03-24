// p05/rectangle.ts
import { Shape } from './shape';

export class Rectangle extends Shape {
    // - หมายถึง private
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    draw(): void {
        console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`);
    }

    getArea(): number {
        // สูตรหาพื้นที่สี่เหลี่ยมผืนผ้า: กว้าง * ยาว
        return this.width * this.height;
    }
}