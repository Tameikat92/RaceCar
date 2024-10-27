import { Racer } from "./racer";

export class GasCar implements Racer {
    team: string;
    speed: number;
    fuel: number ;

    constructor(team: string, fuel: number =10){
        this.team = team;
        this.speed = 0;
        this.fuel = fuel;
    }
    accerlerate(): void{
        this.speed = this.speed + 2;
        this.fuel = this.fuel - 1
    }
    isFuelEmpty(): boolean {
        return this.fuel <= 0 ? true : false;
    }
}