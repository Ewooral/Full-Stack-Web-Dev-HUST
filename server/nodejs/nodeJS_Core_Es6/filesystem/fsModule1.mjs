import { read } from 'fs'
import fs, { watch, readFile, open } from 'fs/promises'


(async () => {

    const openFile = await open("./copied.txt")
    const watcher = watch("./command.txt")

    for await (const event of watcher) {
        if (event.eventType === 'change') {
            console.log(event)
            console.log("file content was updated!")
        }

        try {
            const data = await readFile('./command.txt', 'utf-8')
            console.log(data)

            const content = await openFile.read()
            console.log(content.toString())

        } catch (error) {
            console.log(error)
        }

    }


})()
