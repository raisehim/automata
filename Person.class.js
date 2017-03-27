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
        let targetVector = null;
        switch (direction) {
            case this.UP: targetVector = this.zone.north; break;
            case this.RIGHT: targetVector = this.zone.east; break;
            case this.DOWN: targetVector = this.zone.south; break;
            case this.LEFT: targetVector = this.zone.west; break;
            case this.UPPER: targetVector = this.zone.up; break;
            case this.LOWER: targetVector = this.zone.down; break;
        }
        if (targetVector) this.position = targetVector;

    }

    where() {
        console.log("Person",
            this.cube, this.position,
            this.cube.code(this.position),
            ['east', 'west', 'up', 'down', 'north', 'south'].map((d) => this.cube.code(this.zone[d]))
        );
    }
}

Person.prototype.UPPER = "pageup";
Person.prototype.LOWER = "pagedown";
Person.prototype.UP = "up";
Person.prototype.RIGHT = "right";
Person.prototype.DOWN = "down";
Person.prototype.LEFT = "left";

module.exports = Person;