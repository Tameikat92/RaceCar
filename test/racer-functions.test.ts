import { findAverageSpeed } from '../src/racer-functions';
import { SolarCar } from '../src/SolarClass';
import { GasCar } from '../src/GasCar';



test('should return 0 for an empty array', () => {
        expect(findAverageSpeed([])).toBe(0);
    });

    test('should return the average speed for an array of GasCars', () => {
        const racers = [
            new GasCar('Team  1', 10),
            new GasCar('Team  2', 15),
            new GasCar('Team  3', 20)
        ];
        racers.forEach(car => car.accerlerate()); 
        expect(findAverageSpeed(racers)).toBe(2); // Each should have speed of 2 after one acceleration
    });

    test('should return the average speed for a mix of SolarCars and GasCars', () => {
        const racers = [
            new SolarCar('Team Beyonce 1'),
            new GasCar('Team Meek 1'),
            new SolarCar('Team Beyonce 2'),
            new GasCar('Team Meek 2')
        ];
        racers[0].accerlerate(); // SolarCar speed becomes 1
        racers[1].accerlerate(); // GasCar speed becomes 2
        racers[2].accerlerate(); // SolarCar speed becomes 1
        racers[3].accerlerate(); // GasCar speed becomes 2
        expect(findAverageSpeed(racers)).toBe(1.5); // (1 + 2 + 1 + 2) / 4 = 1.5
    });

    it('should return 0 for an array of cars that all have 0 speed', () => {
        const racers = [
            new SolarCar('Team Solar 1'),
            new GasCar('Team Gas 1', 0), // Fuel 0, can't accelerate
            new SolarCar('Team Solar 2'),
            new GasCar('Team Gas 2', 0)  // Fuel 0, can't accelerate
        ];
        expect(findAverageSpeed(racers)).toBe(0); // All speeds are 0
    });
});