import os from 'node:os'
import { resolve } from 'node:path'

console.log('hello world')
console.log('path', resolve(__dirname))
console.log('os', os.platform())