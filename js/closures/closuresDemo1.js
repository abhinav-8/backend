function todo(task){
    
    console.log("Inside todo");

    setTimeout(function fun(){
        console.log("completed",task) ;
    },5000);

    console.log("Ending todo");
}

console.log("Starting") ;
todo("Assignment") ;
console.log("Ending") ;