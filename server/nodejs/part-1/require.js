// The require function in node JS is used to load external modules.
// Modules in Node JS is a node file containing codes.
const Path = require('path'); // this is how the require function is instantiated
const show = console.log; 
show(`The file name is ${Path.basename(__filename)}`)