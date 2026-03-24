import { Shape } from './shape';

export class Circle extends Shape {
    // -radius หมายถึง private
    private radius: number;

    constructor(color: string, radius: number) {
        super(color); // ส่ง color ไปให้ class แม่จัดการ
        this.radius = radius;
    }

    draw(): void {
        // ผลลัพธ์ตามที่โจทย์คาดหวัง: Drawing a red circle with radius 5
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
    }

    getArea(): number {
        // สูตรหาพื้นที่วงกลม: พาย * r^2
        return Math.PI * this.radius * this.radius;
    }
}