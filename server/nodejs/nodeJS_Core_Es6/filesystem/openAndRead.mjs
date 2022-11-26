import { existsSync } from 'fs'
import fs from 'fs/promises'


(async () => {

    // commands
    const CREATE_FILE = "create a file"
    const DELETE_FILE = "delete the file"
    const UPDATE_FILE = "update the file"
    const RENAME_FILE = "rename the file"



    const createAFile = async (path) => {
        try {
            if (existsSync(path)) {
                const existingFileHandle = await fs.open(path, "r")
                existingFileHandle.close()

                return console.log(`The file ${path} already exists`)
            }
            else {
                const newFileHandle = await fs.open(path, "w")
                console.log("file successfully created!!")
                newFileHandle.close()
            }
        }

        catch (error) {
            console.log(error)
        }

    }

    const updateAFile = async (path) => {

    }


    const deleteAFile = async (path) => {
        if (!existsSync(path)) {
            return console.log("Path doesn't exist")
        }
        else {
            fs.unlink(path)
            console.log(`${path} has been deleted!!`)
        }

    }

    const renameAFile = (oldPath, newPath) => {

    }


    const newFile = await fs.open("./command.txt", "r")


    newFile.on("change", async () => {
        try {

            // get the size of file
            const fileStats = await newFile.stat()
            const size = (await newFile.stat()).size
            const buff = Buffer.alloc(size)


            await newFile.read(
                buff,
                {
                    offset: 0,
                    length: buff.byteLength,
                    position: 0
                })
            const command = buff.toString('utf-8')


            // create a file:
            // create afile <path>
            if (command.includes(CREATE_FILE)) {
                const filePath = command.substring(CREATE_FILE.length + 1)
                createAFile(filePath)
            }

            // delete a file:
            // command: delete a file <path>
            if (command.includes(DELETE_FILE)) {
                const filePath = command.substring(DELETE_FILE.length + 1)
                deleteAFile(filePath)
            }

        } catch (error) {
            console.log(error)
        }
    })


    "..................................................................................."
    const file = await fs.open('./rename.txt', 'r');

    file.on('hearSomething', async () => {
        console.log("Event is triggered!!")
        const size = (await file.stat()).size
        const buff = Buffer.alloc(size)
        const posi = 0
        const offset = 0
        const length = buff.byteLength
        console.log(size)

        await file.read({
            buff, size, posi, offset, length
        })
        const content = buff
        console.log(content)
        console.log("First......!!!!!")
    })

    "..................................................................................."

    // Watcher...
    const watcher = fs.watch("./command.txt")
    for await (const event of watcher) {
        if (event.eventType === 'change') {
            newFile.emit('change')
            file.emit('hearSomething')

        }
    }


})()
