import { unlink } from 'node:fs';

const remove = async () => {
    // Write your code here 
    unlink('files/fileToRemove.txt', (err) => {
        if (err) throw Error('FS operation failed');
        console.log('files/fileToRemove.txt was deleted');
    });
};

await remove();