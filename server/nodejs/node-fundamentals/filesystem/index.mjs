 import {readFile, writeFile} from 'fs/promises';


 let template = await readFile(new URL('template.html', import.meta.url), 'utf8'); 
// console.log(import.meta.url); // this gives you the path to this module index.mjs
// console.log(template.toString());

const data = {
     title: 'My Page',
    body: 'This is my page'
}
// console.log(Object.entries(data));
for(const [k, v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v);
}

// console.log(template);

// Write back the template to disk
await writeFile(new URL("index.html", import.meta.url), template);

