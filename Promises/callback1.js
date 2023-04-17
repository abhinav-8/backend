//Tasks 
// 1.Write a function to download data from url
// 2.Write a function to save that downloaded data in a file and return the filename
//3.Write a function to upload the file written in previous step to a new url

function fetchCustom(url , fn){ //We are mimicing a function
    /* Download Content Of url
     * This downloading may take sometime
     * We will download the content from the url, and then whatever is the result,we will pass to the callback
     */
    console.log("Starting download from ",url);
    setTimeout(function process(){
        console.log("Downloading completed");
        let response = "dummy data";
        fn(response);
    },3000);
}

function writeFile(data , fn){
    console.log("Started writing data ",data);
    setTimeout(function process(){
        console.log("Writing completed");
        let filename="output.txt";
        fn(filename);
    },4000);
}

function uploadFile(filename, newurl , fn){
    console.log("Upload Started");
    setTimeout(function process(){
        console.log("File ",filename," succesfully uploaded on ",newurl);
        let uploadResponse="SUCCESS";
        fn(uploadResponse);
    },2000);
}

//Callback hell and inversion of control too
fetchCustom("www.google.com",function downloadCallback(response){
    console.log("Downloaded data ",response);
    writeFile(response,function downloadCallback(filenameResponse){
        console.log("New File Written is",filenameResponse);
        uploadFile(filenameResponse,"www.drive.google.com/abhinav",function uploadCallback(uploadResponse){
            console.log("Uploaded Successfully ",uploadResponse);
        })
    })
});