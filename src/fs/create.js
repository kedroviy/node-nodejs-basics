import { open, close, writeFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    const file = path.join(__dirname, 'files', 'fresh.txt');
    const { signal } = new AbortController();

    const message = new Uint8Array(Buffer.from('I am fresh and young'));

    open(file, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                throw Error('FS operation failed');
            }

            throw err;
        }

        try {
            writeFile(file, message, { signal }, (data, err) => {
                console.log('fresh.txt is created');
            });
        } finally {
            close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
};

await create();
