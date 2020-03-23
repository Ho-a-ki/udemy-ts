let apples: number = 5;
// : number 이 부분이 type annotations.
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes

class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// argument와 return 값에 대한 types annotations.
// 함수는 좀 난해하긴 하네 익숙해지기 전까진 ㅠㅠ
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let banana = 5;
// Type Inference. 타입을 지정하지 않더라도
// TS가 추측해서 그걸 지정해준다.

let banana2;
// 이렇게 하면 any로 지정된다. Variable Initialization.
banana2 = 'string';

// When to use annotations.
// 1) Funtion that return the any type.

const json = '{"x": 10 , "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); //마우스 올려보면 그 함수의 annotations을 알수 있음.
console.log(coordinates); // 이 경우 coordinates의 타입이 any.

// 2) When we declare a variable on one line and
// initialize it later.

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// for (let i of words) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }

// 3) Variable whose type cannot be inferred correctly.

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

// | statement mean or.

for (let i of numbers) {
  if (i > 0) {
    numberAboveZero = i;
  }
}
