import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
    // Write your code here
    const worker = new Worker('./worker.js');
    const numCores = cpus().length;

    console.log(numCores);
    worker.on('message', (result) => {
        console.log(`Result of the computation: ${result}`);
        worker.terminate();
    });

    worker.on('error', (error) => {
        console.error(error);
    });

    worker.on('exit', (code) => {
        if (code !== 0)
            console.error(`Worker stopped with exit code ${code}`);
    });

    worker.postMessage(6);
};

await performCalculations();