interface Car {
  make: string;
  model: string;
  year: number;
}

function printCarDetails(car: Car): void {
  console.log(`Car: ${car.make} ${car.model} (${car.year})`);
}

const myCar: Car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
};

printCarDetails(myCar);
