"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarCar = void 0;
class SolarCar {
    constructor(team) {
        this.team = team;
        this.speed = 0;
    }
    accerlerate() {
        this.speed = this.speed + 1;
    }
    isFuelEmpty() {
        return false;
    }
}
exports.SolarCar = SolarCar;
