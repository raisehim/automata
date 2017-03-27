'use strict';


function validate(vector, cube_size) {
    return vector.every((p) => 0 <= p && p < cube_size);
}

class Node {
    constructor(cube_size, x, y, z) {
        this.vector = [x, y, z];
        this.range = cube_size;
        this.zone = x * (this.range * this.range) + y * this.range + z + 1;
    }

    equal(vector) {
        return this.vector.every((p) => this.vector[p] == vector[p]);
    }

    move(vector) {
        let to = vector.map((m, i) => this.vector[i] + m);
        return validate(to, this.range) ? to : null;
    }

    get up() { return this.move([0, 0, 1]); }
    get down() { return this.move([0, 0, -1]); }
    get north() { return this.move([0, -1, 0]); }
    get south() { return this.move([0, 1, 0]); }
    get east() { return this.move([1, 0, 0]); }
    get west() { return this.move([-1, 0, 0]); }

    // this.seed = 1000 + Math.random(0, 1) * 9000 | 0;
    get code() {
        // this.code = ""; // 가변적 코드 / 세션마다 차등
        return new Buffer("A" + this.zone, 'utf8').toString('hex');
    }

    inspect() {
        return `${this.zone} ${this.vector.join("x")}`;
    }
}

module.exports = Node;

