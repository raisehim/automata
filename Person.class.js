'use strict';

class Person {
    constructor(cube) {
        this.cube = cube;
        this.cube_size = this.cube.cube_size;
        this.position = this.cube.random();
    }

    get zone() {
        return this.cube.zone(this.position);
    }

    move(direction) {
        // 4 directions - 6 outputs
        // console.log(direction, this.zone);
        // 각기 공식이 필요함.
        switch (direction) {
            case this.UP:
            case this.RIGHT:
            case this.DOWN:
            case this.LEFT:
        }
    }

    where() {
        console.log(
            this.cube,
            this.zone.code,
            this.zone
        );
    }
}

Person.prototype.UP = "up";
Person.prototype.RIGHT = "right";
Person.prototype.DOWN = "down";
Person.prototype.LEFT = "left";

module.exports = Person;