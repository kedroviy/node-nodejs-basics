import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const numCores = cpus().length;

    const results = [];
    const workers = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));

        workers.push(
            new Promise((resolve) => {
                worker.on('message', (result) => {
                    resolve({ status: 'resolved', data: result });
                });

                worker.on('error', () => {
                    resolve({ status: 'error', data: null });
                });

                worker.on('exit', (code) => {
                    if (code !== 0) {
                        resolve({ status: 'error', data: null });
                    }
                });
            })
        );

        worker.postMessage(10 + i);
    }

    const finalResults = await Promise.all(workers);

    console.log(finalResults);
};

await performCalculations()
