class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

// car is type of vehicle. 상속.
// 상속을 집합의 느낌으로.
// extends.
class Car extends Vehicle {
  private drive(): void {
    console.log('vrrrrooom');
  }
  // overide.

  stratDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const lexus = new Car();
lexus.stratDrivingProcess();
lexus.honk();
