const os = require('os')
const path = require('path')
const { subtract, add, divide, multiply } = require('./math')



console.log("......................")
console.log(`
    ${os.type()},
    ${os.version()},
    ${os.homedir()},
`);


console.log("......................")
console.log(`
    ${path.dirname(__filename)},
    ${path.extname(__filename)},
`)
console.log(path.parse(__filename))



console.log(`
    ${subtract(21, 3)}, 
    ${add(2, 4)},
    ${multiply(3, 3)},
    ${divide(400, 7)}
`)