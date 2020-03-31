const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
};

// 이런 작업을 아래 처럼.

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

const oldLexus = {
  name: "Lexus",
  summary(): string {
    return `This Old Lexus ${this.name}`;
  }
};

printSummary(oldLexus);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `MY drink has ${this.sugar} grams of sugar`;
  }
};

printSummary(drink);
