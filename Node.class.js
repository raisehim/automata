'use strict';

class Node {
    constructor(cube_size, x, y, z) {
        this.vector = [x, y, z];
        this.range = cube_size;
        this.zone = y * (this.range * this.range) + z * this.range + x + 1;
        this.m = this.vector.map((m) => (Math.random(0, 1) + m) * 100 | 0);
    }

    equal(vector) {
        return this.vector.every((v, p) => this.vector[p] == vector[p]);
    }

    move(vector) {
        return vector.map((m, i) => (this.vector[i] + m + this.range) % this.range);
    }

    get up() { return this.move([0, 1, 0]); }
    get down() { return this.move([0, -1, 0]); }
    get north() { return this.move([0, 0, 1]); }
    get south() { return this.move([0, 0, -1]); }
    get east() { return this.move([1, 0, 0]); }
    get west() { return this.move([-1, 0, 0]); }

    // this.seed = 1000 + Math.random(0, 1) * 9000 | 0;
    get code() {
        // this.code = ""; // 가변적 코드 / 세션마다 차등
        // return new Buffer("A" + this.zone, 'utf8').toString('hex');
        return `${this.zone}:${(this.zone / this.range | 0)}:${this.zone % this.range}`;
    }

    inspect() {
        return `${this.zone}:${this.vector.join("x")}:${this.m.join(", ")}`;
    }
}

module.exports = Node;

