import fs from 'fs'


const data = fs.readFileSync('./starter.txt', 'utf-8')
console.log(data)

console.log("Synchronous")
console.log("....................")

fs.readFile('./rename.txt', 'utf-8', (err, data1) => {
    if (err) throw err
    console.log(data1)
})

console.log("Asynchronous")
console.log("....................")