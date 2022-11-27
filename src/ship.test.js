import { Ship } from './Ship.js';

describe('throw exceptions for incorrect parameters', () => {    
    test('does not allow for non numbers', () => {
        expect(() => { new Ship('invalid') }).toThrow(TypeError);
        expect(() => { new Ship() }).toThrow(TypeError);
    });

    test('expect integer values', () => {
        expect(() => { new Ship(1.5) }).toThrow(TypeError);
        expect(() => { new Ship(3.5) }).toThrow(TypeError);
    })

    test('does not allow for less than zero', () => {
        expect(() => { new Ship(0) }).toThrow(RangeError);
        expect(() => { new Ship(-1) }).toThrow(RangeError);
    });
});


describe('ship of size 1', () => {
    const ship = new Ship(1);
    test('a new ship of size 1 is not sunk', () => {
        expect(ship.isSunk()).toBeFalsy();
    });
    
    test('calling hit() on a new ship of size one 1 results in sunk', () => {
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });

    test('calling hit() two times on a ship of size 1 results in sunk', () => {
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe('ship of size 5', () => {
    const ship = new Ship(5);
    test('ship is not sunk over four hits', () => {
        for (let i = 0; i < 4; i++) {
            ship.hit();
            expect(ship.isSunk()).toBeFalsy();
        }
    });
    
    test('a ship of size 5 hit five times is sunk', () => {
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});