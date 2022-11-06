import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs';
import fspromises, { mkdir } from 'fs/promises';
import { logEvents } from './eventEmitters/logEvents.mjs';
import EventEmitter from 'events';
import { stderr } from 'process';
class Emitter extends EventEmitter { }
// initialize object
const myEmitter = new Emitter();

let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);

// PORT
const PORT = process.env.PORT || 5000;

// const serveFile = async (filePath, contentType, response) => {
//     try {
//         const data = await fspromises.readFile(filePath, 'utf-8')
//         response.writeHead(
//             200,
//             { 'contentType': contentType }
//         )
//         response.end()

//     } catch (error) {
//         console.log(error)
//         response.statusCode = 500
//         response.end()
//     }
// }

// SERVER
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.end("Hello, World!\n")
  res.write("Hello, World!")

  
  const extension = path.extname(req.url);
  if (req.url.slice(-1) === '/') {
    console.log(res.statusCode)
  }
  console.log(extension)
  let contentType;

  //   switch (extension) {
  //     case '.css':
  //       contentType = 'text/css';
  //       break;
  //     case '.json':
  //       contentType = 'application/json';
  //       break;
  //     case '.js':
  //       contentType = 'text/javascript';
  //       break;
  //     case '.jpg':
  //       contentType = 'image/jpeg';
  //       break;
  //     case '.png':
  //       contentType = 'image/png';
  //       break;
  //     case '.txt':
  //       contentType = 'text/plain';
  //       break;

  //     default:
  //       contentType: 'text/html';
  //       break;
  //   }

  //   let filePath =
  //     contentType === 'text/html' && req.url === '/'
  //       ? path.join(__dirname, 'views', 'index.html')
  //       : contentType === 'text/html' && req.url.slice(-1) === '/'
  //       ? path.join(__dirname, 'views', req.url, 'index.html')
  //       : contentType === 'text/html'
  //       ? path.join(__dirname, 'views', req.url)
  //       : path.join(__dirname, req.url);

  // makes .html extension not required in the browser
  //   if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

  //   const fileExits = fs.existsSync(filePath);
  //   if (fileExits) {
  //     // Serve the file
  //     serveFile(filePath, contentType, res);
  //   } else {
  //     // 404
  //     // 301 redirect
  //     switch (path.parse(filePath).base) {
  //       case 'old-page.html':
  //         res.writeHead(301, { Location: '/new-page.html' });
  //         res.end();
  //         break;
  //       case 'www-page.html':
  //         res.writeHead(301, { Location: '/' });
  //         res.end();
  //         break;
  //       default:
  //         // Serve a 404 response
  //         serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
  //     }
  //     console.log(path.parse(filePath));
  //   }
});

// LISTEN
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))

//Emit event
myEmitter.emit('log', 'Log event emitted')





console.log(path.parse(url.fileURLToPath(import.meta.url)))