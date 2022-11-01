import path from 'path'

export let filePath:string = path.dirname(__filename)
export let dirPath:string = path.basename(__filename)
export let extPath = path.extname(__filename)
export let parse: path.ParsedPath = path.parse(__filename)


