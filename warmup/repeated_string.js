'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const noRepetition = Math.ceil(n / s.length)
    return (s.split('').filter(value => value === 'a').length * noRepetition
        - s.split('').splice(n % (s.length * (noRepetition - 1)),
        noRepetition * s.length - n).filter(value => value === 'a').length)
}

function main() {
    const s = readLine();
    const n = parseInt(readLine(), 10);
    let result = repeatedString(s, n);
    console.log(result)
}
