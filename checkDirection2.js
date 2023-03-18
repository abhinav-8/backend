//Considering given input is a valid number
//consider 0 is positive 
function checkDirection(val){
    if(val < 0) console.log("Negative") ;
    else if(val > 0) console.log("Positive") ;
    else if(val == 0) { 
        if(1 / val == '-Infinity') console.log("negative") ;
        else console.log("positive");
    }
}
checkDirection(+0);