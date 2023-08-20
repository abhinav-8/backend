import {readFile,writeFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf8' });

console.log("Without editing",contents);

const data = {
    title: 'Edited title',
    body: 'Edited body'
}
for(const [key,value] of Object.entries(data)){
    contents=contents.replace(`{${key}}`,value);
}

console.log("After editing",contents)

await writeFile(new URL('./index.html',import.meta.url), contents);
