'use strict';
function printCarDetails(car) {
  console.log(`Car: ${car.make} ${car.model} (${car.year})`);
}
const myCar = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
};
printCarDetails(myCar);
