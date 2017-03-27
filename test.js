'use strict';

const Cube = require('./Cube.class');
const Person = require('./Person.class');

const cube_size = 3;
const cube = new Cube(cube_size);

console.log("Initial States: ", cube);
// console.log(require('util').inspect(cube, { showHidden: false, depth: 4 }));

let person = new Person(cube);
//console.log(person.zone().code);
//console.log(require('util').inspect(person.now(map), { showHidden: false, depth: 4 }));

const readline = require('readline');
process.on('SIGINT', () => process.exit());
readline.emitKeypressEvents(process.stdin);
// console.log("ReadLine TTY: ", process.stdin.isTTY);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

person.where();
process.stdin.on('keypress', (str, key) => {
    switch (key.name) {
        case 'up':
        case 'down':
        case 'left':
        case 'right':
        case 'pageup':
        case 'pagedown':
            person.move(key.name);
            person.where();
            break;
        case 'c':
            if (key.ctrl) process.emit('SIGINT');
            break;
        default:
        // console.log(str, key);
    }
});

let primes = [];
for (let i = 2; i < 100; i++) {
    if (primes.every(p => i % p != 0)) primes.push(i);
}
// console.log(JSON.stringify(primes));
