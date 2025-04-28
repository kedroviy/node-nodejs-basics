import * as path from 'node:path';
import { release, version } from 'node:os';
import http from 'http';


const random = Math.random();
let unknownObjectFromPromise;
const jsonType = { with: { type: 'json' } };

(random > 0.5) ? unknownObjectFromPromise = import('./files/a.json', jsonType)
    : unknownObjectFromPromise = import('./files/b.json', jsonType);

unknownObjectFromPromise.then(unknownObject => console.log(unknownObject.default));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const createServerHttp = http.createServer;

const htppServer = createServerHttp((_, res) => res.end('Request accepted'));

const PORT = 3000;

console.log(unknownObjectFromPromise);

htppServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObjectFromPromise as unknownObject, htppServer };
