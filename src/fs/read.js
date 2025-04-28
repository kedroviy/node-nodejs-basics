import { open, close, readFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here 
    const file = path.join(__dirname, 'files', 'fresh.txt');

    open(file, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw Error('FS operation failed');
            }

            throw err;
        }

        try {
            readFile(file, 'utf8', (err, data) => {
                console.log(data)
            });
        } catch (error) {
            console.log(error)
        } finally {
            close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
};

await read();
