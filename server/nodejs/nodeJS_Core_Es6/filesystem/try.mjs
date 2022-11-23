// Read a file

import fs, { readFile, watch, writeFile } from 'fs';
import { rename } from 'fs/promises';
import path, { join } from 'path';
import url from 'url';

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// console.log("Kindly write your content here...\n")
// process.stdin.on('data', (data, err) => {
//     if (err) throw err

//     // Write to file
//     let file = 'TRY.txt'
//     writeFile(
//         path.join(__dirname, file),
//         data,
//         (err) => {
//             if (err) throw err
//             console.log(`Content stored inside of ${file}`)

//             // Read file
//             console.log("\n\nReading the file...\n")
//             readFile(
//                 path.join(__dirname, 'TRY.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err
//                     console.log(data)

//                     // Rename
//                     console.log("\n\ Renaming the file...\n")
//                     if (data) {

//                         rename(
//                             path.join(__dirname, 'TRY.txt'),
//                             path.join(__dirname, 'MANCITY.txt'),
//                             () => {
//                                 console.log("Renaming Completed!!!")
//                             }
//                         )

//                     }
//                     process.exit()

//                 }
//             )
//         }
//     )

// },

// )

import fspromises from 'fs/promises';

const ope = async () => {
  try {
    const data = await fspromises.readFile(join(__dirname, 'MANCITY.txt'), 'utf8');
    console.log(data.toString().trim());

    await fspromises.writeFile(
      join(__dirname, 'NEWMAN.html'),
      `<html> 
                <head>
                    <title>Try</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                </body>
            </html>`
    );
    console.log('Message Read into File!!!');

    await fspromises.unlink(join(__dirname, 'NEWMAN.html'));
  } catch (err) {
    if (err) throw err;
    process.exit();
  }
};
ope();

fs.mkdir('SHATTA WALE', () => console.log('Created!!'));
fs.rmdir('SHATTA WALE', () => console.log('Removed!!'));

process.on('uncaughtException', (err) => {
  console.error('An error was encountered\n', err);
  process.exit(1);
});

process.on('exit', () => {
  console.log('Thank you!\nFile Renamed!!');
});
