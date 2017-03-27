'use strict';

const cube = [], cube_size = 3, directions = 4;

let base = 0, seed, map = {}; // directions 
for (let x = 0; x < cube_size; x++) {
    for (let y = 0; y < cube_size; y++) {
        for (let z = 0; z < cube_size; z++) {
            base = x * (cube_size * cube_size) + y * cube_size + z + 1;
            map[`${x + 1}.${y + 1}.${z + 1}`] = {
                c: base,
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

let c, m;
for (let x = 0; x < cube_size; x++) {
    let ax = [];
    cube.push(ax);
    for (let y = 0; y < cube_size; y++) {
        let ay = [];
        ax.push(ay);
        for (let z = 0; z < cube_size; z++) {
            c = `${x + 1}.${y + 1}.${z + 1}`;
            base = map[c];
            seed = 1000 + Math.random(0, 1) * 9000 | 0;
            ay.push({
                '=': map[c].c,
                u: map[`${x + 1}.${y + 1}.${z + 1 + 1}`],
                n: map[`${x + 1}.${y + 1 - 1}.${z + 1}`],
                w: map[`${x + 1 - 1}.${y + 1}.${z + 1}`],
                s: map[`${x + 1}.${y + 1 + 1}.${z + 1}`],
                e: map[`${x + 1 + 1}.${y + 1}.${z + 1}`],
                d: map[`${x + 1}.${y + 1}.${z + 1 - 1}`],
                'sd': seed % (cube_size * cube_size)
            });
        }
    }
}
console.log(
    require('util').inspect(cube, { showHidden: false, depth: 4 })
);

// let seed = 