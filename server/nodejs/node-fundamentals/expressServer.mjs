import express from 'express'
import path from 'path';
import url from 'url';
const app = express()


let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);

// BUILT-IN MIDDLEWARES TO HANDLE URLENCODED DATA
// in other words, form data:
// 'content-type: application/x-www-urlencoded'

app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname, '/assets')))
console.log(__dirname)


// begin and end with / or index.html (regExp) // extension is optional
app.get('^/$|/index(.html)?', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

// redirect
app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html')// 302 by default
})

// // CHAIN ROUTE HANDLERS - METHOD ONE
app.get('/hello(.html)?', (req, res, next) => {
  console.log('attempted to load hello.html')
  next()
}, (req, res) => {
  res.send('Hello World!!')
})



// CHAIN ROUTE HANDLERS - METHOD TWO USING ARRAY
const one = (req, res, next) => {
  console.log('one')
  next()
}

const two = (req, res, next) => {
  console.log('two')
  next()
}

const three = (req, res) => {
  console.log('three')
  res.send('Finished!')
}

app.get('/chain(.html)?', [one, two , three])





// custom Error page
app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

})



// PORT
const PORT = process.env.PORT || 5000;


// LISTEN
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))

//Emit event
// myEmitter.emit('log', 'Log event emitted')





