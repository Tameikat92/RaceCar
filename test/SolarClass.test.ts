const { SolarCar } = require("./dist/SolarClass");
import { SolarCar } from './SolarCar';

test('should initialize with team name and speed of 0',() => {
    const car = new SolarCar('Team Solar Car Boyz');
    expect(car.team).toBe('Team Solar Car Boyz');
    expect(car.speed).toBe(0);
})

test('should increment speed by 1 when accelerate is',()=>{
    const car = new SolarCar('Team Solar Car Boyz');
    car.accerlerate();
    expect(car.speed).toBe(1);
});

test('should always return false for isFuelEmpty',()=> {
    const car = new SolarCar('Team Solar Car Boyz');
    expect(car.isFuelEmpty()).toBe(false);
});

