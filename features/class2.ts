class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // 위와 아래는 똑같은 코드!

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');

console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}
// 생성자를 상속한다.

const lexus = new Car(4, 'red');
// 어우 헷갈리네
