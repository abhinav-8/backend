function fun(x,fn){
    /**
     * x -> number
     * fn -> Callback function
     */
    for(let i = 0 ; i < x ; i++){
        console.log(i) ;
    }

    fn() ; /** Caling the callback function passed */
}

fun(5 , function fn(){
    console.log("In callback function") ;
}) ;

function g(){
    console.log("Inside g") ;
}

fun(5 , g) ;

fun(5 , g()) ; //fun(5 , undefined) --> g was called immediately and it returned undefined