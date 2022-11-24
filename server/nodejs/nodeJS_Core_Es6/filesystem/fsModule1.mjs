import { watch, readFile, open } from 'fs/promises'


(async () => {

    const newFile = await open("./copied.txt")
    const watcher = watch("./command.txt")

    newFile.on('blast', async () => {
        try {
            const data = await readFile('./command.txt', 'utf-8')


            // get the size of file

            const fileStats = await newFile.stat()
            const size = (await newFile.stat()).size
            const buff = Buffer.alloc(size)
            // const offset = 0
            // const length = buff.byteLength
            // const position = 0

            console.log(size)
            console.log(fileStats)

            await newFile.read(
                buff,
                {
                    offset: 0,
                    length: buff.byteLength,
                    position: 6
                })
            console.log(buff.toString('utf-8'))
            console.log("This is a set immediate method for async purpose")

            setImmediate(() => {
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    })


    for await (const event of watcher) {
        if (event.eventType === 'change') {
            console.log(event)
            console.log("file content was updated!")
            newFile.emit('blast', 'emiting event...')
        }
    }


})()
