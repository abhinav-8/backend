function fetchData(url){

    return new Promise(function(resolve,reject){
        console.log("Started downloading from ",url);
        setTimeout(function processDownloading(){
            let data = "dummy data" ;
            console.log("Download Completed");
            resolve(data);
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

async function processing(){
    let downloadedData = await fetchData("www.google.com");
    console.log("Downloading await completed");

    let file = await writeFile(downloadedData);
    console.log("File await completed");

    let uploadeResult = await uploadData("www.drive.google.com",file);
    console.log("Upload await completed");

    console.log("Completed processing function with response",uploadeResult);

    return true;
}

console.log("start");
let x = processing();
console.log("end");