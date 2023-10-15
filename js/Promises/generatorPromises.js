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

function doAfterReceiving(value) {
    let future = itr.next(value);
    console.log("future is", future);
    if(future.done) return ;
    future.value.then(doAfterReceiving);
}

function* steps() {
    const downloadData = yield fetchData('www.xyxz.com');
    console.log('data downloaded is', downloadData);
    const fileWritten = yield writeFile(downloadData);
    console.log('file written is', fileWritten);
    const uploadResponse = yield uploadData(fileWritten,'www.drive.google.com');
    console.log('Uploaded response is', uploadResponse);
    return uploadResponse;
}

const itr = steps();
const future = itr.next();
for(let i = 0 ; i < 10000000000000; i++){

}
future.value.then(doAfterReceiving);