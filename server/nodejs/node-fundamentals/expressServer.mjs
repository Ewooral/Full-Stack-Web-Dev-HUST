import express from 'express'
import path, { resolve } from 'path';
import url from 'url';
import { logger } from './middleware/logEvents.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';
import cors from 'cors'
import indexRouter from './routes/subdir.mjs';
import testRouter from './routes/subdir.mjs';

const app = express()
let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);


// Custom middleware logger
app.use(logger)

// cross origin resource sharing 
const whitelist = ['https://www.yourfrontenddomain.com', 'http://127.0.0.1:5500', 'http://localhost:5000']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


// BUILT-IN MIDDLEWARES TO HANDLE URLENCODED DATA
// in other words, form data:
// 'content-type: application/x-www-urlencoded'

app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

//serve static files
app.use('/', express.static(path.join(__dirname, '/assets')))

app.use('/subdir', express.static(path.join(__dirname, '/assets')))



// Serving From a Subfolder  
app.use('/subdir', indexRouter)


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

app.get('/chain(.html)?', [one, two, three])





// CUSTOMIZE ERROR PAGE

// app.get('/*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

// })

app.all('/*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: "404 Not Found" })
  } else {
    res.type('txt').send("404 Not Found")
  }


})

// 
app.use(errorHandler)



// PORT
const PORT = process.env.PORT || 5000;


// LISTEN
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))

//Emit event
// myEmitter.emit('log', 'Log event emitted')





