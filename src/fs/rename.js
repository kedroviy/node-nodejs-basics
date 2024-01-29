import { rename as renameFile } from 'node:fs';

const rename = async () => {
    // Write your code here 
    renameFile('files/wrongFilename.txt', 'files/properFilename.md', (err) => {
        if (err) throw Error('FS operation failed');
    });
};

await rename();