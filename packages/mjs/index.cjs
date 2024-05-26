'use strict'

const os = require('os')
const { resolve } = require('path')

console.log('Hello from ECMAScript package')
console.log('OS:', os.platform())
console.log('Path:', resolve(__dirname))