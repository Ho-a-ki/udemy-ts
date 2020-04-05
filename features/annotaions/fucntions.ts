const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number) => {
  return a + b;
};

const add2 = (a: number, b: number): string => {
  return 'string';
};

// 뒷 부분 :number는 return 값에 대한 annotations

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number) {
  return a * b;
};

// 26

const logger = (mes: string): void => {
  console.log(mes);
  return undefined;
};

const throwError = (mes: string): void => {
  if (!mes) {
    throw new Error(mes);
  }
};

const throwError2 = (mes: string): never => {
  throw new Error(mes);
};
// return에 도달하지 않는다라는 것. return 값에 never 접근하지 못한다.
// 에러를 배출해내서 functions에서 빠져나오기 때문에.

const todaysWehter = {
  date: new Date(),
  wether: 'sunny'
};

const logWether = (forecast: { date: Date; wether: string }): void => {
  console.log(forecast.date);
  console.log(forecast.wether);
};

// es2015 (디스트럭쳐링)
const logWether2 = ({ date, wether }) => {
  console.log(date);
  console.log(wether);
};

logWether(todaysWehter);
