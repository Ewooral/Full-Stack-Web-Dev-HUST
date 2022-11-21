const express = require('express')
const app = express()
const path = require('path')

// Middlewares
const { logger } = require('./middleware/logEvents.js')
const { errorHandler } = require('./middleware/errorHandler.js')

// Config 
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// Routers
const indexRouter1 = require('./routes/subdir.js');
const rootRouter = require('./routes/root.js');
const employeeRouter = require('./routes/api/employees.js');






// Custom middleware logger
app.use(logger)

// cross origin resource sharing 
app.use(cors(corsOptions))


// BUILT-IN MIDDLEWARES TO HANDLE URLENCODED DATA (form data)
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

//serve static files
app.use('/', express.static(path.join(__dirname, '/assets')))
app.use('/subdir', express.static(path.join(__dirname, '/assets')))

// Routes 
app.use('/', rootRouter)
app.use('/subdir', indexRouter1)
app.use('/employees', employeeRouter)


// // CHAIN ROUTE HANDLERS - METHOD ONE
// app.get('/hello(.html)?', (req, res, next) => {
//   console.log('attempted to load hello.html')
//   next()
// }, (req, res) => {
//   res.send('Hello World!!')
// })



// // CHAIN ROUTE HANDLERS - METHOD TWO USING ARRAY
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

app.all('/*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('application/json')) {
    res.json({ error: "404" })
  } else {
    res.type('txt').send("404 ")
    console.log("cos 90 work!!")
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





