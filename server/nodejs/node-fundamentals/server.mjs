import { format } from 'date-fns'
import { v4 as uuid } from 'uuid';
import fs from 'fs'

console.log(format(new Date(2022, 2, 11), 'MM/dd/yyyy\tHH:mm:ss'))
console.log("Hello")

console.log(uuid())


