'use strict';

const Node = require('./Node.class');

const Primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
function isPrime(element, index, array) { // 쇼어알고리즘;
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

function Euclidean(a, b) { // a가 큰 수; // Get GCD
    // 두 양의 정수 a, b(b > a)에 대하여 b= aq + r, (0 ≤ r < a)라 하면, a, b의 최대공약수는 a, r의 최대공약수와 같다.
    // 즉, gcd(a, b) = gcd(a, r).
    return b ? Euclidean(b, a % b) : a;
}

class Cube {
    constructor(cube_size) {
        this.cube_size = cube_size;
        this.map = [];
        for (let y = 0; y < cube_size; y++) {
            for (let z = 0; z < cube_size; z++) {
                for (let x = 0; x < cube_size; x++) {
                    this.map.push(new Node(cube_size, x, y, z));
                }
            }
        }
        this.rsa = {};
        this.rsa.primes = [cube_size, Primes[Math.random(0, 1) * Primes.length | 0]];
        this.rsa.n = this.rsa.primes.reduce((a, b) => a * b);
        this.rsa.on = this.rsa.primes.reduce((a, b) => (a - 1) * (b - 1));
        this.rsa.gcd = Euclidean(this.rsa.n, this.rsa.on);
        // Primes.forEach((m) => this.rsa.e = (m < this.rsa.on) ? m : this.rsa.e);
        // Greatest Common Divisor: 최대 공약수와 Least Common Multiple:최대 공배수
        console.log(this.rsa);
    }

    random() {
        return this.map[Math.random(0, 1) * this.map.length | 0].vector;
    }

    zone(position) {
        return this.map.find((node) => node.equal(position));
    }

    code(position) {
        return this.zone(position).zone;
    }

    inspect() {
        return [this.cube_size, this.cube_size].join("x");
    }

    factorize() {

    }
}
module.exports = Cube;