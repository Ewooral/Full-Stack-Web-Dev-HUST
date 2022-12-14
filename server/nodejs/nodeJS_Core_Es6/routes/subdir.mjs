import express from 'express'
import path from 'path'
import url from 'url'

const router = express.Router()

// filename and dirname
let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);


router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
})

router.get('/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
})

export default router