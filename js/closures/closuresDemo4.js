function test(){
    for(let i = 0 ; i < 3 ; i++){
        setTimeout(function exec(){
            console.log(`i : ${i}`) ;
        },i*1000) ;
    }
}
test();

//This is due to let , as due to let there will be different blocks for each value of i
//So,output will be
// i : 0
// i : 1
// i : 2