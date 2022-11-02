// Read a file

import { readFile, watch, writeFile } from 'fs'
import { rename } from 'fs/promises'
import path from 'path'
import url from 'url'

const filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)


console.log("Kindly write your content here...\n")
process.stdin.on('data', (data, err) => {
    if (err) throw err
    
    // Write to file
    let file = 'TRY.txt'
    writeFile(
        path.join(__dirname, file),
        data,
        (err) => {
            if (err) throw err
            console.log(`Content stored inside of ${file}`)

            // Read file
            console.log("\n\nReading the file...\n")
            readFile(
                path.join(__dirname, 'TRY.txt'),
                'utf-8',
                (err, data) => {
                    if (err) throw err
                    console.log(data)

                    // Rename
                    console.log("\n\ Renaming the file...\n")
                    if (data) {

                        rename(
                            path.join(__dirname, 'TRY.txt'),
                            path.join(__dirname, 'MANCITY.txt'),
                            () => {
                                console.log("Renaming Completed!!!")
                            }
                        )

                    }
                    process.exit()
                    
                    

                }
            )
        }
    )
   
},

)



process.on('uncaughtException', (err) => {
    console.error('An error was encountered\n', err);
    process.exit(1);
})



process.on("exit", () => {
    console.log("Thank you!\nFile Renamed!!")
})




// const filename1 = process.argv.at(1)

// watch(filename1, (data, err) => {
//     if (err) throw err
//     if (data) {
//         console.log('File changed!')
//     }
// }
    
   
// )
// console.log('Now watching starter.txt for changes...')