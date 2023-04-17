var engineer = "Abhinav" ;
function fun() {
    console.log(engineer) ; //undefined
    console.log(teacher) ; //Gives error
    var engineer = "Abhishek"  ;
    teacher = "Avinash" ; //It's autoglobal
    console.log(engineer) ;
}
fun() ;
console.log(engineer) ; //Abhinav
console.log(teacher) ; //Avinash

//First Phase: Parsing the code(formal declaration of variables and functions)
//In parsing phase, JS only allocates scopes to variables and functions not values
//Second Phase: Execution of the code

