import express from 'express'
import path, { resolve } from 'path';
import url from 'url';
import { logger } from './middleware/logEvents.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';
import cors from 'cors'
import bodyParser from 'body-parser';

// ROUTERS
import indexRouter from './routes/subdir.mjs';
import rootRouter from './routes/root.mjs'
import employeeRouter from './routes/api/employees.mjs'


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
app.use(bodyParser.json())

//serve static files
app.use('/', express.static(path.join(__dirname, '/assets')))
app.use('/subdir', express.static(path.join(__dirname, '/assets')))


// ROUTES
app.use('/', rootRouter)
app.use('/subdir', indexRouter)
app.use('/employees', employeeRouter)



// // CHAIN ROUTE HANDLERS - METHOD ONE
// app.get('/hello(.html)?', (req, res, next) => {
//   console.log('attempted to load hello.html')
//   next()
// }, (req, res) => {
//   res.send('Hello World!!')
// })



// CHAIN ROUTE HANDLERS - METHOD TWO USING ARRAY
// const one = (req, res, next) => {
//   console.log('one')
//   next()
// }

// const two = (req, res, next) => {
//   console.log('two')
//   next()
// }

// const three = (req, res) => {
//   console.log('three')
//   res.send('Finished!')
// }

// app.get('/chain(.html)?', [one, two, three])





// CUSTOMIZE ERROR PAGE

// app.get('/*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

// })


// CREATING API ENDPOINTS
app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

app.get('/dishes', (req, res, next) => {
  res.end("Will send all the dishes to you!");
})
app.post('/dishes', (req, res, next) => {
  res.end("Will add the dish: " + req.body.name +
    " with details: " + req.body.description);
})

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /dishes");
})

app.delete('/dishes', (req, res, next) => {
  res.end("Deleting all the dishes");
})

// support dishId endpoint
app.get('/dishes/:dishId', (req, res, next) => {
  res.end("Will send details of the dish: " + req.params.dishId +
    " to you!");
})
app.post('/dishes/:dishId', (req, res, next) => {
  res.end("POST operation not supported on /dishes/" +
    req.params.dishId);
})

app.put('/dishes/:dishId', (req, res, next) => {

  res.write("Updating the dish " + req.params.dishId);
  res.end("\nwill update the dish: " + req.body.name +
    " with details: " + req.body.description)
})

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end("Deleting dish " + req.params.dishId);
})

// To deal with populating the server with lots of endpoints, we introduce express.router();



app.all('/*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: "Can't Find" })
  } else {
    res.type('txt').send("404 Not Found")
  }


})

// 
app.use(errorHandler)


// PORT
const PORT = process.env.PORT || 7000;


// LISTEN
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))

//Emit event
// myEmitter.emit('log', 'Log event emitted')





