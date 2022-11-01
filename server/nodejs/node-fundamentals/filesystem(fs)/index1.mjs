import { readFile, writeFile, appendFile, rename, lstat } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



// READ FROM FILE...........................
readFile(
    //path to directory
    path.join(__dirname, 'starter.txt'),

    // encoding type
    'utf8',

    //  callback function
    (err, data) => {
        if (err) throw err
        console.log(data)
    }
)

console.log("Hello...")

// WRITE TO A FILE...........................
let filename = 'reply.txt'
writeFile(
    //path to directory

    join(__dirname, filename),

    // message passed to file
    'Nice to meet you',

    // callback function
    (err) => {
        if (err) throw err
        console.log("Write completed!")

        // APPEND TO A FILE..........................
        let message = "\n\nWho never fucked up hands in the Air!!"
        appendFile(

            join(__dirname, filename),
            message,
            (err) => {
                if (err) throw err
                console.log("Append completed please!")

                // RENAME A FILE
                let renameFile = "rename.txt"
                rename(
                    join(__dirname, filename),
                    renameFile,
                    () => {
                        if (err) throw err
                        console.log("Rename is done!")
                    }

                )
            }
        )


    },

)


// APPEND TO A FILE..........................
// appendFile(
//     join(__dirname, 'append.txt'),
//     'append to this file\n\n',
//     (err) => {
//         if (err) throw err
//         console.log("Append complete!")
//     }
// )

// CATCH ERROR AND EXIT.......................
process.on(
    'uncaughtException',
    err => {
        console.log(`There was an uncaught error: ${err}`)
        process.exit(1)
    }
)

console.log("Hey, It's me again!!!...")




// STACKING CALLBACKS ON TOP OF EACH OTHER CAN DEFINITELY LEAD TO
// CALLBACK HELL
// LET USE ASYNC AWAIT TO REMEDY THAT
console.log("\n\n\n")

const fileOps = async () => {
    try {

        const data = await fspromises.readFile(
            path.join(__dirname, './lorem.txt'),
            'utf-8'
        )
        console.log(data)
        await fspromises.writeFile(
            path.join(__dirname, './promiseWrite.txt'),
            data)
        await fspromises.appendFile(
            join(__dirname, './promiseWrite.txt'),
            "\n\nAppend completed!")
        await fspromises.rename(
            join(__dirname, './promiseWrite.txt'),
            join(__dirname, 'promiseComplete.txt'))
        
        const newData = await fspromises.readFile(
            path.join(__dirname, './promiseComplete.txt'),
            'utf-8'
        )
        console.log(newData)
    }

    catch (error) {
        console.error(error)
    }
}

fileOps()

