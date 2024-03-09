const numbers: number[] = [1, 2, 3, 4, 5];

// Using separate map and filter loops
const filteredNumbers: number[] = numbers.filter((num: number) => num % 2 !== 0);
const doubledNumbers: number[] = filteredNumbers.map((num: number) => num * 2);

console.log(doubledNumbers); // Output: [2, 6, 10]

// Using reduce for both filtering and mapping in a single loop
const result: number[] = numbers.reduce((accumulator: number[], num: number) => {
  // Use a condition to filter out even numbers
  if (num % 2 !== 0) {
    // Double the remaining numbers and push into the accumulator
    accumulator.push(num * 2);
  }
  return accumulator;
}, []);

console.log(result); // Output: [2, 6, 10]
