import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs';
import fspromises, { mkdir } from 'fs/promises';
import { logEvents } from './eventEmitters/logEvents.mjs';
import EventEmitter from 'events';

class Emitter extends EventEmitter { }
// initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName))


let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);

// PORT
const PORT = process.env.PORT || 5000;

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fspromises.readFile(
      filePath,
      !contentType.includes('image') ? 'utf-8' : ''
    )

    const data = contentType === 'application/json'
      ? JSON.parse(rawData) : rawData;
    response.writeHead(
      filePath.includes('404.html') ? 404 : 200,
      { 'content-Type': contentType })
    response.end(
      contentType === 'application/json' ? JSON.stringif(data) : data
    )

  }
  catch (error) {
    console.log(error)
    myEmitter.emit('log', `${error.name}\t${error.message}`, 'errLog.txt')
    response.statusCode = 500
    response.end()
  }
}

// SERVER
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt')
  // res.end("Hello, World!\n")
  // res.write("Hello, World!")


  const extension = path.extname(req.url);

  let contentType;

  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;

    default:
      contentType = 'text/html';
      break;
  }

  let filePath =
    contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, 'views', req.url, 'index.html')
        : contentType === 'text/html'
          ? path.join(__dirname, 'views', req.url)
          : path.join(__dirname, req.url);

  // makes .html extension not required in the browser
  if (!extension && req.url.slice(-1) !== '/')
    filePath += '.html';

  const fileExits = fs.existsSync(filePath);

  if (fileExits) {
    // Serve the file
    serveFile(filePath, contentType, res);
  } else {
    // 404
    // 301 redirect
    switch (path.parse(filePath).base) {
      case 'old-page.html':
        res.writeHead(301, { Location: '/new-page.html' });
        res.end();
        break;
      case 'www-page.html':
        res.writeHead(301, { Location: '/' });
        res.end();
        break;
      default:
        // Serve a 404 response
        serveFile(
          // file path, directory and file
          path.join(__dirname, 'views', '404.html'),

          // content type
          'text/html',

          // response
          res
        );
    }
    console.log(path.parse(filePath));
  }
});

// LISTEN
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//register listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))

//Emit trigger the event
// myEmitter.emit('log', 'Log event emitted')





