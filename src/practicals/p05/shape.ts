// p05/shape.ts
import { Drawable } from './drawable';

export abstract class Shape implements Drawable {
    // #color หมายถึง protected
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }

    // ตัวเอียงใน UML = abstract method (ให้คลาสลูกไปเขียนการทำงานเอง)
    abstract draw(): void;
    abstract getArea(): number;
}