import { open, close, writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const create = async () => {
    const file = 'files/fresh.txt';
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
                
                console.log('fresh.txt is created')
            });
        } finally {
            close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
};

await create();
