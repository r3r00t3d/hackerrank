'use strict'
const fs = require('fs')


process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/), '')

    main()
})

function readLine() {
    return inputString[currentLine++]
}

function jumpingOnClouds(c) {
    let noJumps = 0
    let i = 0
    while (1) {
        if (i == c.length - 1) {
            break
        }
        if (i + 2 < c.length && c[i] == 0) {
            i += 2
        } else {
            i++
        }
        noJumps++
    }
    return noJumps
}

function main() {
    const n = parseInt(readLine(), 10)
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10))

    let result = jumpingOnClouds(c)
    console.log(result)
}