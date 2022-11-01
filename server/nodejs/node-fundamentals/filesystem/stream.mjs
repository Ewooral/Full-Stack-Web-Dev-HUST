import fs from 'fs'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)


const rs = fs.createReadStream("./filesystem/lorem.txt", { encoding: 'utf-8' })
const ws = fs.createWriteStream("./filesystem/new-lorem.txt")

// Instead of rs.on, we can use rs.pipe

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

rs.pipe(ws)