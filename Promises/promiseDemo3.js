//Tasks 
// 1.Write a function to download data from url
// 2.Write a function to save that downloaded data in a file and return the filename
//3.Write a function to upload the file written in previous step to a new url

function fetchData(url){

    return new Promise(function(resolve,reject){
        console.log("Started downloading from ",url);
        setTimeout(function processDownloading(){
            let data = "dummy data" ;
            console.log("Download Completed");
            resolve(data);
            // resolve("123"); Once a promise is resolved ,it won't be resolved again
            //But following will execute
            // let man="sexy";
            // console.log("lol");
            // console.log(man);
        },7000);
    });
}

function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing ",data," in a file");
        setTimeout(function(){
            let filename = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        },3000);
    });
}

function uploadData(url,file){
    return new Promise(function(resolve,reject){
        console.log("Uploading data on url: ",url,"filename is: ",file);
        setTimeout(function(){
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        },5000);
    });
}

//Ab aise code wait toh krega nahi sabme promise pending state me hi pada hoga ,so undeined values jaayengi
// let data = fetchData("www.pagalworld.com");
// let filename = writeFile(data);
// let response = uploadData(filename,"www.drive.google.com");

/******************************************************************************************************************************/
// let downloadPromise = fetchData("www.pagalworld.com");

// downloadPromise.then(function processDownload(value){
    
//     console.log("Download Promise resolved");
//     console.log("Downloaded data: ",value);

//     let filePromise = writeFile(value);

//     filePromise.then(function processWrite(value){
    
//         console.log("File Promise Resolved");
//         console.log("Filename is: ",value);

//         let uploadPromise = uploadData("www.drive.google.com",value);

//         uploadPromise.then(function processUpload(value){

//             console.log("Upload Promise Resolved");
//             console.log("File uploaded: ",value);
//         });
//     });

// });

//Above code solves problem of Inversion Of Control but still gets Promise Hell

//First of all .then() returns a promise
// Example:-

// let downloadPromise = fetchData("www.pagalworld.com");

// let x = downloadPromise
// .then(function processDownload(value){
//     console.log("Download promise fulfilled");
//     return "abhinav";
// });

// x
// .then(function f(value){
//     console.log("x has value",value);
// })

//We will use this to chain .then statements and prevent us from promise hell

let downloadPromise = fetchData("www.pagalworld.com");

downloadPromise
.then(function processDownload(value){
    console.log("Download promise fulfilled");
    return value;
})
.then(function processWrite(value){
    return writeFile(value);
})
.then(function processUpload(value){
    return uploadData("www.drive.google.com",value);
})
.then(function(value){
    console.log(value);
});

console.log("Checking .then() function");

//.then() registers functions in onFulfillment array , it registers and move forward.
//So,line no 113 prints before resolving the promises