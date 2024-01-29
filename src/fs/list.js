import { readdir, access } from 'node:fs';

const list = async () => {
    // Write your code here 
    const sourceDir = 'files';

    await access( sourceDir, (err) => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            readdir(sourceDir, (err, files) => {
                const arrayOfEntries = [];
                files.forEach(file => {
                    arrayOfEntries.push(file)
                })
                console.log(arrayOfEntries)
            });

        }
    })
};

await list();