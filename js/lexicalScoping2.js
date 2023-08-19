function fun() {
    teacher = "abhinav"
    console.log(teacher) ;
    var teacher = "Avinash" ;
    console.log(teacher) ;
}
fun() ;

/**
 * In first stage i.e., parsing
 * teacher is assigned a function scope as var is a formal declaration
 * Now at execution stage
 * teacher is present in the scope of fun() so it is assigned value "abhinav"
 * Now teacher is assigned value "Avinash" again at line 4
 */


function fun(x,y){ //Here x and y are formal parameters
                   //x and y are assigned function scope

}