//For operation a + b , a and b are passed through ToString() and then a + b is performed.
//First both a and b are passed though ToPrimitive() 
//If a is a string or b is a string then a and b are passed through ToString() and then string concatenation is performed.
//Else both a and b are passed through ToNumber() and then a + b is performed.

console.log(undefined + "12"); //undefined12 , undefined is converted to "undefined"
console.log(null + "12"); //null12 , null is converted to "null"
console.log("12" + true); //12true , true is converted to "true"
console.log("12" + false); //12false , false is converted to "false"
console.log("12" + 12); //1212 , 12 is converted to "12"
console.log("12" + 12.5); //1212.5 , 12.5 is converted to "12.5"
// console.log("12" + Symbol("123")); //throw error , Symbol is not a number
console.log("12" + [,,,]) //12,,,, , [,,,,] is converted to ",,,,"
console.log(12 + []) //12 , [] is converted to ""
console.log(12 + [null , undefined]) //[null ,undefined] is converted to ","

