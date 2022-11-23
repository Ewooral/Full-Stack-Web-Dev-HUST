const path = require('path')
const url = require('url')
const print = console.log

let a = __dirname

let b = a.split('/')

print(b)
print(__filename)
print("find: ", b.find(() => "Found", "", 8, b))


