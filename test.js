'use strict';

const cube = [], cube_size = 3, directions = 4;
const states = Math.pow(cube_size, cube_size);
console.log("Initial States: ", states);

let base = 0, map = {}; // directions 
for (let x = 0; x < cube_size; x++) {
    for (let y = 0; y < cube_size; y++) {
        for (let z = 0; z < cube_size; z++) {
            base = x * (cube_size * cube_size) + y * cube_size + z + 1;
            map[base] = {
                c: `${x + 1}.${y + 1}.${z + 1}`,
                u: `${x + 1}.${y + 1}.${z + 1 + 1}`,
                n: `${x + 1}.${y + 1 - 1}.${z + 1}`,
                w: `${x + 1 - 1}.${y + 1}.${z + 1}`,
                s: `${x + 1}.${y + 1 + 1}.${z + 1}`,
                e: `${x + 1 + 1}.${y + 1}.${z + 1}`,
                d: `${x + 1}.${y + 1}.${z + 1 - 1}`
            };
        }
    }
}
console.log(require('util').inspect(map, { showHidden: false, depth: 4 }));

let c, m;
let seed = 1000 + Math.random(0, 1) * 9000 | 0;
for (let x = 0; x < cube_size; x++) {
    let ax = [];
    cube.push(ax);
    for (let y = 0; y < cube_size; y++) {
        let ay = [];
        ax.push(ay);
        for (let z = 0; z < cube_size; z++) {
            base = x * (cube_size * cube_size) + y * cube_size + z + 1;
            m = Object.assign({}, map[base]);
            Object.keys(m).forEach(direction => {
                m[direction] = (m[direction].split(".").every((p) => p | 0 > 0 && (p | 0) <= cube_size)) ? m[direction] : null;
            });
            ay.push(m);
        }
    }
}
console.log(require('util').inspect(cube, { showHidden: false, depth: 4 }));

// let seed = 