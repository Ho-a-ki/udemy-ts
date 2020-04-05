const carMakers = ['ford', 'toyota', 'chevy'];
const anyTypeList = [];
const stringList: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// array in array.

// Help with infence when extracting values.

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values.

carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDays = [new Date(), '2030-10-10'];
// in this case, type inference makes | expression.
// string | date.

const importantDays2: (string | Date)[] = [new Date()];
// type annotations.

importantDays2.push(100);
importantDays2.push('daye');
importantDays2.push(new Date());
