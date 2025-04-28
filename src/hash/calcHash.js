import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    // Write your code here 
    const fileName = 'fileToCalculateHashFor.txt';

    const file = path.join(__dirname, 'files', fileName);

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
