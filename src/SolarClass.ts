import { Racer } from "./racer";

export class SolarCar implements Racer {
team: string;
speed: number;

constructor(team:string) {
    this.team = team;
    this.speed = 0;
}
  accerlerate(): void {
    this.speed = this.speed + 1;
  }
  isFuelEmpty(): boolean {
    return false
  }

}