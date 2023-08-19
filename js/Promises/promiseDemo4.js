//For own exploration

console.log("Starting") ;

setTimeout(function fun(){
    console.log("Timer1");
    let y = Promise.resolve("Timer1's promise");
    y.then(function processPromise(value){
        console.log("Who's promise?",value);
    });
},0);

for(let i=0; i<1000000000;i++){}

let x = Promise.resolve("Abhinav's promise");
x.then(function processPromise(value){
    console.log("Who's promise?",value);
});

setTimeout(function fun(){
    setTimeout(function fun(){
        console.log("Hey buddy");
    },0);
    for(let i = 0 ; i < 1000000000 ; i++){}
    let z = Promise.resolve("Timer2's promise");
    z.then(function processPromise(value){
        console.log("Who's promise?",value);
    });
    console.log("Timer2");
    
},0);

console.log("End");