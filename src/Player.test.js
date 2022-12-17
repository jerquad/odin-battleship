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

describe('randomMove picks within correct border, will not elect invalid moves', () => {
    
    test('randomMove picks within board size', () => {
        const player = new Player();
        for (let i = 0; i < 1000; i++) {
            const result = player.randomMove();
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(100);
        }
    });

    test('randomMove will not elect invalid moves', () => {
        const player = new Player([[5, 0 , false]]);
        expect(player.isDefeated()).toBeFalsy();
        for (let i = 0; i < 100; i++) {
            const result = player.randomMove();
            expect(player.isValidMove(result)).toBeTruthy();
            player.takeHit(result);
        }
        expect(player.isDefeated()).toBeTruthy();
    });
});

describe('cpuTurn adds missed results correctly', () => {
    const player = new Player();
    const tests = [];
    for (let i = 0; i < 100; i++) {
        tests.push(i);
    }
    test.each(tests)('cpuTurn correctly marks misses', (i) => {
        const result = player.cpuTurn();
        expect(player.getMissIndex().length).toBe(i + 1);
        expect(player.getMissIndex().includes(result)).toBeTruthy();       
    })
})

describe('randomBoard returns a valid and random set of ships to place', () => {
    const player = new Player();
    const random = palyer.randomBoard();
    test('randomBoard returns an array', () => {
        expect(Array.isArray(random)).toBeTruthy();
    });
})
