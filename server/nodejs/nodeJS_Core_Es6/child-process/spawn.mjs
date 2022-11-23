import { spawn } from 'child_process'
import url from 'url'
import path from 'path'

let fileName = url.fileURLToPath(import.meta.url)

if (process.argv[2] === 'child') {
    console.log('I am inside the child!!!')
} else {
    let child = spawn(process.execPath, [fileName, 'child'])
    child.stdout.on('data', (data) => {
        console.log('from child', data.toString())
    })
}

