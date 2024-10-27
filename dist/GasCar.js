"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasCar = void 0;
class GasCar {
    constructor(team, fuel = 10) {
        this.team = team;
        this.speed = 0;
        this.fuel = fuel;
    }
    accerlerate() {
        this.speed = this.speed + 2;
        this.fuel = this.fuel - 1;
    }
    isFuelEmpty() {
        return this.fuel <= 0 ? true : false;
    }
}
exports.GasCar = GasCar;
