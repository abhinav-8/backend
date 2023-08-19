//console.log prints in next line always
console.log("First line");
console.log("Second line");
// Output -> First line
//           Second line

// -----------------------------------------------------------------------------------------------------------------

//console.log prints with a space when we pass comma separated values
console.log(1,2,"abhinav",true);
//Output -> 1 2 abhinav true

//--------------------------------------------------------------------------------------------------------------------

//To print in same line
//Will work only in node environment
process.stdout.write("Hello");
process.stdout.write("World");
//Output -> HelloWorld