let sayHello = "Hello";
console.log(sayHello);
global.console.log('sayHello'); 

console.log(__dirname);
console.log(__filename);
console.log(process);
console.log(require);

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);



