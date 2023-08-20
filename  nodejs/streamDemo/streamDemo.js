const fs = require('fs');
const transformStream = require('stream');

let fileStream=fs.createReadStream(__dirname + "/input.txt");
// let outputStream=process.stdout;
// let outputStream = fs.createWriteStream(__dirname + '/output.txt', {
//     flags: 'w'
// });

// readStream.pipe(writeStream);

let middleStream = new transformStream.Transform({
    transform(chunk,encoding,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB,1000); //To give a feel of delay while reading and writing
        // nextCB();
    }
});

// fileStream.pipe(outputStream);
fileStream.pipe(middleStream).pipe(outputStream);