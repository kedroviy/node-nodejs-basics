import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const compress = async () => {
    // Write your code here 

    const file = 'files/fileToCompress.txt';
    const destinationFilePath = 'files/archive.gz';

    const gzip = createGzip();
    const source = createReadStream(file);
    const destination = createWriteStream(destinationFilePath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
        console.log('Success!')
    });
};

await compress();