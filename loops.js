// Loops
// 1. for loop - iterates 5 times
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     console.log('----------');
// }
// 2. while loop - iterates 5 times
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     console.log('----------');
//     i++;
// }
// 3. do...while loop - iterates 5 times - 0,1,2,3,4
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// // 4. for...in loop - iterates over the enumerable properties of an object - key (a,b,c) - obj[key] (1,2,3)
// const obj = { 
//     a: 1, 
//     b: 2, 
//     c: 3 
// };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }
//5. for...of loop (Introduced in ES6)(iterates over iterable objects (arrays, strings, sets)) - iterates 3 times - 1,2,3
// const arr = [1, 2, 3];
// for (const value of arr) {
//   console.log(value);
// }
// 6. forEach() method - executes a function for each array element - iterates 3 times - 1,2,3
// Pre-ES6
// var arr = [1, 2, 3];
// arr.forEach(function(value) {
//   console.log(value);
// });

// ES6
// const arr = [1, 2, 3];
// arr.forEach(value => console.log(value));
// 7. Map() method - creates a new array by applying a function to each array element
// Pre-ES6
// var arr = [1, 2, 3];
// var doubled = arr.map(function(value) {
//   return value * 2;
// });
// console.log(doubled);
// ES6
// const arr = [1, 2, 3];
// const doubled = arr.map(value => value * 2);
// console.log(doubled);
// 8. reduce() method - executes a reducer function on each element of the array
// Pre-ES6 - 6
// var arr = [1, 2, 3];
// var sum = arr.reduce(function(acc, value) {
//   return acc + value;
// }, 0);
// console.log(sum);
// ES6
// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, value) => acc + value, 0);
// console.log(sum);
// 9. filter() method - creates a new array with elements that pass the test
// Pre-ES6 - [ 2, 4 ]
// var arr = [1, 2, 3, 4];
// var even = arr.filter(function(value) {
//   return value % 2 === 0;
// });
// console.log(even);
// ES6
// const arr = [1, 2, 3, 4];
// const even = arr.filter(value => value % 2 === 0);
// console.log(even);
// 10. every() and some() methods - every() - checks if ALL elements meet a condition - some() - checks if ANY elements meet a condition
// Pre-ES6 - true true
// var arr = [1, 2, 3];
// var allPositive = arr.every(function(value) {
//   return value > 0;
// });
// var anyPositive = arr.some(function(value) {
//   return value > 0;
// });
// console.log(allPositive, anyPositive);
// ES6
// const arr = [1, 2, 3];
// const allPositive = arr.every(value => value > 0);
// const anyPositive = arr.some(value => value > 0);
// console.log(allPositive, anyPositive);