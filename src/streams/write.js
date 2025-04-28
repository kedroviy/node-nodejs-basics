import { createWriteStream, writeFile } from 'node:fs';

const write = async () => {
    // Write your code here 

    const file = 'files/fileToWrite.txt';
    const writeStream = createWriteStream(file);

    process.stdin.pipe(writeStream);
    process.stdin.on('data', (data) => {
        writeFile(file, data, (err) => {
            writeStream.end();
        });
    });

};

await write();