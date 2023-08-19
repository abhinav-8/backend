//If (type of a) == (type of b) then === will be called
//Else type coercion will be called

console.log(null == undefined) ; //true

let a = 5 ;
if(a){
    console.log("Hey buddy!") ; //This will be executed
}

if(a == true){  //true is converted to 1 and then compared 5 == 1
    console.log("Byee buddy!") ; //This will not be executed
}

//Read about abstract relational comparison , "10" will be converted to 10 and then compared
for(let i = 0 ; i < "10" ; i++){
    console.log(i) ;
}