//It's not an abstract operation
console.log("Abhinav" + { a: 10 }); //Abhinav[object Object]

/** 

* Abhinav is already a primitive value, so it's not passed through ToPrimitive()
* {a:10} is passed through ToPrimitive() , without a hint means hint is default and finally hint is number.
* we first call valueOf() on {a:10} , it returns {a:10} which is an object
* so we call toString() on {a:10} , it returns "[object Object]" which is a string i.e. primitive value

*    "Abhinav" + "[object Object]" = "Abhinav[object Object]"

**/

console.log(12 - { a: 10 }); //NaN ,

/**
 * 12 is already a number
 * {a:10} is passed through ToPrimitive() , with hint number.
 * we first call valueOf() on {a:10} , it returns {a:10} which is an object
 * so we call toString() on {a:10} , it returns "[object Object]" which is a string i.e. primitive value
 * We again call ToNumber() on "[object Object]" , it returns NaN
 *
 *          12 - NaN = NaN
 */

console.log( 12 - { a: 90, valueOf() { return 5 ; } } ); //7 

/**
 * 12 is already a number
 * {a:90 , valueOf(){return 5}} is passed through ToPrimitive() , with hint number.
 * we first call valueOf() on {a:90 , valueOf(){return 5}} , it returns 5 which is a number
 * So , 12 - 5 = 7
 */

console.log({ a: 90, valueOf() { return 5 ; } } + "abhinav"); //5abhinav

/**
 * {a:90 , valueOf(){return 5}} is passed through ToPrimitive() ,
 *  without a hint means hint is default and finally hint is number
 * we first call valueOf() on {a:90 , valueOf(){return 5}} , it returns 5 which is a number
 * so we call ToString() on 5 , it returns "5" which is a string i.e. primitive value
 * so , "5" + "abhinav" = "5abhinav"
 * 
**/
console.log({ a: 90, toString() {return {}} , valueOf() {return {}}} + "abhinav"); //typeError