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

async function processing(){
    console.log("processing");
    
}