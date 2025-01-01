// // You are given an array of car objects, each containing information about a car's make, model, year and mileage.
// // Your goal is to perform some analysis on the car mileage data using high order array methods.
// // Implement a function called analyzeCarMileage which takes an array of car objects and perform following tasks.
// // Calculate average mileage of all cars, Find the car with highest mileage, Find the car with lowest mileage and calculate
// // the total mileage of all cars combined. The function should return an object containing the calculated values as properies

const cars = [
  {
    make: "Toyota",
    model: "Etios",
    year: 2020,
    mileage: 13,
  },
  {
    make: "Ford",
    model: "Eco Sport",
    year: 2019,
    mileage: 12,
  },
  {
    make: "Tata",
    model: "Tiago",
    year: 2021,
    mileage: 18,
  },
  {
    make: "Maruti Suzuki Nexa",
    model: "Fronx",
    year: 2022,
    mileage: 17,
  },
];

const analyzeCarMileage = () => {
  const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const highestMileage = cars.reduce(
    (highest, car) => (highest.mileage > car.mileage ? highest : car),
    cars[0]
  );
  const lowestMileage = cars.reduce(
    (lowest, car) => (lowest.mileage < car.mileage ? lowest : car),
    cars[0]
  );
  return {
    averageMileage,
    totalMileage,
    highestMileage,
    lowestMileage,
  };
};

console.log(analyzeCarMileage());
