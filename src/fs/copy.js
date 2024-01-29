import { cp, mkdir, access, constants } from 'node:fs';

const copy = async () => {
    // Write your code here 
    const sourceFolder = 'files';
    const destFolder = 'files_copy';
    try {
        await access(sourceFolder, constants.F_OK, (err) => {
            if (err) {
                throw Error('FS operation failed')
            }

            mkdir(destFolder, { recursive: true }, (err) => {
                if (err) throw err;
            });

            access(destFolder, constants.F_OK, (err) => {
                if (err) {
                    throw Error('FS operation failed')
                } else {
                    cp(sourceFolder, destFolder, { recursive: true }, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                }

            })
        });
    } catch (error) {
        throw error
    }
};

await copy();
