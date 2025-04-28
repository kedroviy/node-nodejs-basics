import { env } from 'node:process';

const parseEnv = () => {
    // Write your code here 
    const prefixVariable = 'RSS_';
    const envVariables = Object.entries(env).filter(([key]) => key.includes(prefixVariable))
        .map(([key, value]) => `${key}=${value}`).join('; ');

    console.log(envVariables);
};

parseEnv();