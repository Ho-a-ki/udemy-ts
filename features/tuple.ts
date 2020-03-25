const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40];

pepsi[0] = 40;
pepsi[1] = 'brown';

// tuple이 ts에서 의미를 가지는 것은
// type order를 정해주어서 그 value가 순서에 맞게 들어갈 수 있도록
// 해주는 것이다.

const pepsiTuple: [string, boolean, number] = ['brown', true, 40];
pepsiTuple[0] = 40;

type Drink = [string, boolean, number];

const pepsiTuple2: Drink = ['black', true, 50];
const sprite: Drink = ['clear', true, 40];
