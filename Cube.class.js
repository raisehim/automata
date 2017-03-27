'use strict';

const Node = require('./Node.class');

class Cube {
    constructor(cube_size) {
        this.cube_size = cube_size;
        this.map = [];
        for (let x = 0; x < cube_size; x++) {
            for (let y = 0; y < cube_size; y++) {
                for (let z = 0; z < cube_size; z++) {
                    this.map.push(new Node(cube_size, x, y, z));
                }
            }
        }
    }

    random() {
        return this.map[Math.random(0, 1) * this.map.length | 0].vector;
    }

    zone(position) {
        return this.map.find((node) => node.equal(position));
    }

    inspect() {
        return [this.cube_size, this.cube_size].join("x");
    }
}
module.exports = Cube;