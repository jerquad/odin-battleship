import { Player } from './Player.js';

describe('Creates an accurate player from array, can detect if defeated', () => {
    const shipsToAdd = [
        [2, 81, false],
        [3, 0, false],
        [3,46, true],
        [4, 69, true],
        [5,22, false]
    ];

    const player = new Player(shipsToAdd);

    test('Is new player defeated', () => {
        expect(player.isDefeated()).toBeFalsy();
    });

    test('Hit every node confirming the correct return value', () => {
        const allShipIndex = [0, 1, 2, 22, 23, 24, 25, 26, 46, 56, 66, 69, 79, 81, 82, 89, 99];
        for (let i = 0; i < 100; i++) {
            if (allShipIndex.includes(i)) {
                expect(player.takeHit(i)).not.toBe(null);
            } else {
                expect(player.takeHit(i)).toBe(null);
            }
        }
    });

    test('Confirm player is defeated', () => {
        expect(player.isDefeated()).toBeTruthy();
    })
});

describe('isValidMove confirms if a move is allowed', () => {
    const player = new Player([[5, 0 , false]]);
    
    test('confirm all valid moves', () => {
        for (let i = 0; i < 100; i++) {
            expect(player.isValidMove(i)).toBeTruthy();
        }
    })
    
    test('move below 0 is invalid', () => {
        expect(player.isValidMove(-1)).toBeFalsy();
    });

    test('move abover maximum is invalid', () => {
        expect(player.isValidMove(100)).toBeFalsy();
    });

    test('already hit target is invalid', () => {
        player.takeHit(0);
        expect(player.isValidMove(0)).toBeFalsy();
    });

    test('missed hit is invalid', () => {
        player.takeHit(15);
        expect(player.isValidMove(15)).toBeFalsy();
    })
});
