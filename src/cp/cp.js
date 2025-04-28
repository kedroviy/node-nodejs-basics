import { spawn } from 'child_process';
import { resolve } from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here

    const scriptPath = resolve('src', 'cp', 'files', 'script.js');

    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    process.on('SIGINT', () => {
        console.log('\nReceived SIGINT. Exiting gracefully.');
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('\nReceived SIGTERM. Exiting gracefully.');
        process.exit(0);
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['args1', 'args2']);
