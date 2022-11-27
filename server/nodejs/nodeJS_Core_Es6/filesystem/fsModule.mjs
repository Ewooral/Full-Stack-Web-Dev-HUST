import fs from 'fs'
import { copyFile } from 'fs/promises'


// SYNCHRONOUS
console.log("Synchronous")
console.log("....................")
const data = fs.readFileSync('./starter.txt', 'utf-8')
console.log(data)


// CALLBACK
console.log("Callback")
console.log("....................")

fs.readFile('./rename.txt', 'utf-8', (err, data1) => {
    if (err) throw err
    console.log(data1)
    console.log('callback file copied successfully...')
})

// ASYNCHRONOUS
console.log("Asynchronous")
console.log("....................")

const copyFilee = async () => {
    try {
        await copyFile('./rename.txt', './copied.txt')
    }
    catch (error) {
        throw error
    }
    console.log("Async file copied...")
}

(async () => {
    console.log("Yeah.......")
})()

copyFilee()


// REGEX
const materials = "beat"
if(materials.match(/ea/)){
    console.log("Regex: ", materials.match(/\be/))
}


