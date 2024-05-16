

// DATE OBJECT

let date =  new Date();
console.log(date);

// date methods
// console.log(date.getFullYear());  //2024
// console.log(date.getMonth());  // 0 - 11 : 0 - Jan 1-feb 2-mar 3-apr 4-may 5-jun 6-jul 7-aug 8-sep 9-oct 10-nov 11-dec
// console.log(date.getDate());  // 1 - 31
// console.log(date.getDay());  // 0 - 6 : 0 - sun 1-mon 2-tue 3-wed 4-thu 5-fri 6-sat
// console.log(date.getHours());  // 0 - 23
// console.log(date.getMinutes());  // 0 - 59
// console.log(date.getSeconds());  // 0 - 59
// console.log(date.getMilliseconds());  // 0 - 999
// console.log(date.getTime());  // timestamp

// date formats methods
// console.log(date.toDateString());  // Sun Jan 07 2024
// console.log(date.toTimeString());  // 12:00:00 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString());  // 1/7/2024
console.log(date.toLocaleTimeString());  // 12:00:00 PM