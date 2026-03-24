import { Product } from './product'

export class Playstation extends Product {
  generation: number;
  constructor(name: string, generation: number, price: number = 0) {
    super(name, price)
    this.generation = generation;
  }
  getProfile() {
    return `${this.name} (Gen ${this.generation})`
  }
  getDiscountPrice() {
    //หาส่วนลดก่อน
    return this.price - (Product.DISCOUNT_PERCENT / 100 * this.price);
  }
  // TODO: implement class properties, constructor with super(...), and methods
}