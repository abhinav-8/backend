//Write a function for fetching data and return it using Promise

function fetchData(url){

    return new Promise(function fun(resolve , reject){

        console.log("Downloading started from url",url);

        setTimeout(function fun(){
            let data = "Dummy Data" ;
            console.log("Downloading completed");
            resolve(data);
        },3000);

    });
}

let x = fetchData("www.google.com");

console.log("We have got a promise",x);