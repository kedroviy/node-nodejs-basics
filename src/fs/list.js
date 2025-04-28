import { readdir, access } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceDir = path.join(__dirname, 'files');

    await access(sourceDir, (err) => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            readdir(sourceDir, (err, files) => {
                const arrayOfEntries = [];
                files.forEach(file => {
                    arrayOfEntries.push(file);
                });
                console.log(arrayOfEntries);
            });
        }
    });
};

await list();
