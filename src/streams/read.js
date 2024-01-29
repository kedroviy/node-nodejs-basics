import { createReadStream } from 'node:fs';

const read = async () => {
    // Write your code here 
    const file = 'files/fileToRead.txt';
    const readStream = createReadStream(file);
  
    readStream.on('error', (err) => {
      console.error('Error reading the file:', err.message);
    });
  
    readStream.pipe(process.stdout);
};

await read();