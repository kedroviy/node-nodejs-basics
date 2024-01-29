import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    // Write your code here 
    const file = 'files/fileToCalculateHashFor.txt';
    const hash = createHash('sha256');
    const fileStream = createReadStream(file);


    fileStream.on('error', (err) => {
        console.error('File Error:', err);
    });

    fileStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    fileStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(`The SHA-256 hash of "${file}" is: ${fileHash}`);
    });

};

await calculateHash();