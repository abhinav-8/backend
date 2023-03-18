// -  operation helps in mimicing ToNumber() operation
// For operation a - b
// If a and b are both numbers, then a - b is performed.
//Else  a and b are passed through ToNumber() and then a - b is performed.

console.log(12-10); // 2 , 12-10 = 2

console.log(12 - "10"); // 2 , "10" is converted to 10

console.log(undefined - 12); // NaN , undefined is converted to NaN

console.log(null - 12); // -12 , null is converted to 0

console.log("12fd" - 12); //NaN , 12fd is not a number

console.log("12" - true); // 11 , true is converted to 1

console.log("0xf" - 12); // 0xf = 15 , 15-12 = 3

console.log(Symbol("123") - 12); //throw error , Symbol is not a number

console.log("0o11" - true); //octal 0o11 = 9 , 9-1 = 8 

