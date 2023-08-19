function dummyPromise(){
    return new Promise(function fun(resolve , reject){
        setTimeout(function fun(){
            resolve("Timer's promise");
        },0)
    })
}

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer1 done");
    let y = dummyPromise();
    y.then(function promiseY(value){
        console.log("Who's promise?",value);
    });
},0);

let x = Promise.resolve("Abhinav's promise");
x.then(function fun(value){
    console.log("Who's promise",value);
});

setTimeout(function fun(){
    console.log("Timer2 done");
},0);

console.log("End of File");