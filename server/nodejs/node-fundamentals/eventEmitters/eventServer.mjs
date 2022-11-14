import MyEmitter from 'events'
import http from 'http'
import url from 'url'
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 4000

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class myEmitter extends MyEmitter { }

const newEmitter = new myEmitter();

// newEmitter.on('event', function (a, b, c) {
//     setImmediate(() => {
//         console.log('this happens asynchronously');
//     });

//     console.log(a, b, c, this, this === newEmitter);

// });
let m = 0
let filename = 'events.txt'


newEmitter.once('event', () => {
    if (!fs.existsSync(path.join(__dirname, 'Pushes'))) {
        fs.mkdir(path.join(__dirnam, 'Pushes'), (err) => {
            if (err) throw err;
            console.log('Directory Created!')
        })
        fs.writeFile(path.join(__dirname, 'Pushes', filename), `\n${m++}\n`,
            (err) => {
                if (err) throw err;
                console.log('Write completed!')
            })
    }
});

newEmitter.on('event', (a, b) => {
    if (!fs.existsSync(path.join(__dirname, 'Pushes'))) {
        fs.mkdir(path.join(__dirname, 'Pushes'), (err) => {
            if (err) throw err;
            console.log('Directory Created!')
        })
        fs.writeFile(path.join(__dirname, 'Pushes', filename), `\n${m++}\n`,
            (err) => {
                if (err) throw err;
                console.log('Write 1 completed!')
            })
    }
    else {
        fs.appendFile(path.join(__dirname, 'Pushes', filename), `\n${m++}\n`,
            (err) => {
                if (err) throw err;
                console.log('Append 1 completed!')
            })
        
        setImmediate(() => {
            fs.appendFile(path.join(__dirname, 'Pushes', filename), `\n${a}\n`,
                (err) => {
                    if (err) throw err;
                    console.log('Append 2 completed!')
                })
        });
        process.nextTick(() => {
            let p = a + " I smell sth.."
            fs.appendFile(path.join(__dirname, 'Pushes', filename), `\n${p}\n`,
                (err) => {
                if (err) throw err;
                console.log('Append 3 completed!')
            })
        })
        fs.appendFile(path.join(__dirname, 'Pushes', filename), `\n${b}\n`,

            (err) => {
                if (err) throw err;
                console.log('Append 4 completed!')
            }
        )

        fs.readFile(path.join(__dirname, 'Pushes', filename),
            'utf8',

            (err, data) => {
                if (err) throw err
                console.log(data)
            }

        )
    }
    
    
    

    
});

process.on('uncaughtException', () =>{
    newEmitter.emit('error', new Error('whoops!'));
})



const server = http.createServer((req, res) => {
    console.log()
    // newEmitter.emit('event', __dirname, __filename, `\n\nHello, beautiful people\n`);
    newEmitter.emit('event', 'addition', 'b', '\n');
    newEmitter.emit('event', 'Good days are ahead!', 400);
    // newEmitter.emit('event')
    // res.writeHead("Hello, World!")

})

server.listen(PORT, () => console.log("Serving is connected on port ", PORT))