import { unlink } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    unlink(filePath, (err) => {
        if (err) throw Error('FS operation failed');
        console.log('files/fileToRemove.txt was deleted');
    });
};

await remove();
