/**
 * This abstract operation converts given type to boolean value
 * If we get any of the following value then it will return false, otherwise true
 * 1. undefined
 * 2. null
 * 3. false
 * 4. +0, -0, NaN
 * 5. "" (empty string)
 
*/

console.log(!{}) ; //false

console.log(!console.log(0)) ; //true

console.log(undefined === 1) ; 