import { open, close, readFile } from 'node:fs';

const read = async () => {
    // Write your code here 
    const file = 'files/fresh.txt';

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