export const action = () => {
  console.log('Good Morning');
};

export let cars = ['BMW', 'Audi', 'Mercedes', 'Volvo'];

// module.export = { action, cars };
// export the function and the array

import os from 'os';
import path from 'path';
import url from 'url';

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

const __filename = url.fileURLToPath(import.meta.url);

console.log(path.dirname(__filename));
console.log('basename: ', path.basename(__filename));

console.log(path.parse(__filename));
