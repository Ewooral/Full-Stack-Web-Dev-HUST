import { open } from 'node:fs/promises';
import path from 'path'
import url from 'url'

let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);

let filehandle;

try {
    filehandle = await open('MANCITY.txt', 'r');
    filehandle.readFile(path.join(__dirname, filehandle), 'utf8', (err, data) => {
        if (err) throw err

        console.log(data)
    })
}
finally {
    await filehandle?.close();
}