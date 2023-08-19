console.log(10 + 2); //12
console.log(10 - 2); //8
console.log(10 * 2); //20
console.log(5 / 2); //2.5
console.log(5 % 2); //1

//If we want to have floor division
console.log(Math.floor(5 / 2)); //2
console.log(parseInt(5 / 2)); //2

//For ceil division
console.log(Math.ceil(5 / 2)); //3

// Logical Operators
console.log((10 > 6) && (7 < 6)); //0
console.log((10 > 6) || (7 < 6)); //1
console.log(4 && 0); //0
console.log(4 || 0); //4
console.log(0 && 4); //0
console.log(0 || 4); //4
console.log(4 && 5 && 10); //10
console.log(4 || 5); //4
console.log(4 || 5 || 9); //4
console.log(-0 && 9); //-0  


//How logical operators work in javascript , this is known as short circuiting
//Consider truth table of && and || operators
//&&
// T F F   
// T T T
// F T F
// F F F
//If first val is true then return second val
//If first val is false then return first val


//||
// T T T
// T F T
// F T T
// F F F
//If first val is true then return first val
//If first val is false then return second val