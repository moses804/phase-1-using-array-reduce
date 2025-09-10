const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Assuming batteryBatches is already defined, for example:
// const batteryBatches = [4, 5, 3, 7, 2];

const totalBatteries = batteryBatches.reduce(
  (total, batch) => total + batch,
  0
);

console.log(totalBatteries); // This will log the sum of all battery amounts
