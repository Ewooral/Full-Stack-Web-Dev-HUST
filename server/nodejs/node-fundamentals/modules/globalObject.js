const os = require('os');
const path = require('path');

let sayHello = 'Hello!!!!!!!';
console.log(sayHello);
global.console.log('sayHello!!!!!!');

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

exports.sayHello = sayHello;
