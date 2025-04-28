import { createGunzip } from 'node:zlib';
// import { createReadStream, createWriteStream } from 'node:fs';
import * as fs from 'fs';
import { pipeline } from 'node:stream';

const decompress = async () => {
    // Write your code here 
    const file = 'files/archive.gz';
    const destinationFilePath = 'files/fileToCompress.txt';

    const guzip = createGunzip();
    const source = fs.createReadStream(file);
    const destination = fs.createWriteStream(destinationFilePath);

    pipeline(source, guzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();