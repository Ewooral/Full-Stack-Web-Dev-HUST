const express = require('express')
const path = require('path')
const router = express.Router()



// begin and end with / or index.html (regExp) // extension is optional
router.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})

// redirect
router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html')// 302 by default
})

module.exports = router