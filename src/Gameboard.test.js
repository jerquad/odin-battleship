import { Gameboard } from './Gameboard.js';

describe('Confirm size of board', () => {
    test('board size of 10 returns 100', () => {
        const board = new Gameboard(10);
        expect(board.getSize()).toBe(100);
    })
})

describe('Place ships on gameboard', () => {
    test('will place ship in valid horizontal space', () => {
        const board = new Gameboard(10);
        expect(board.addShip(5, 0)).toBeTruthy();
        expect(board.addShip(2, 15)).toBeTruthy();
        expect(board.addShip(10,20)).toBeTruthy();
    });

    test('will place ship in valid vertical space', () => {
        const board = new Gameboard(10);
        expect(board.addShip(5, 0, true)).toBeTruthy();
        expect(board.addShip(10, 5, true)).toBeTruthy();
    });
    
    test('will not place ship if not enough room horizontally', () => {
        const board  = new Gameboard(10);
        expect(board.addShip(5, 8)).toBeFalsy();
        expect(board.addShip(11, 0)).toBeFalsy();
    });

    test('will not place ship if not enough room vertically', () => {
        const board = new Gameboard(10);
        expect(board.addShip(5, 60, true)).toBeFalsy();
    });

    test('will not allow for two horizontal ships to overlap', () => {
        const board = new Gameboard(10);
        board.addShip(5, 0);
        expect(board.addShip(3, 2)).toBeFalsy();
    });

    test('will not allow for two vertical ships to overlap', () => {
        const board = new Gameboard(10);
        board.addShip(5, 0, true);
        expect(board.addShip(2, 30, true)).toBeFalsy();
    });

    test('will not allow for a vertical ship to overlap a horizontal', () => {
        const board = new Gameboard(10);
        board.addShip(10, 50);
        expect(board.addShip(5, 33, true)).toBeFalsy();
    });

    test('will not allow for a horizontal ship to overlap a vertical', () => {
        const board = new Gameboard(10);
        board.addShip(10, 5, true);
        expect(board.addShip(5, 23)).toBeFalsy();
    });
});

describe('receiveAttack function works as intended', () => {
    test('receiveAttack accepts only integers', () => {
        const board = new Gameboard(10);
        board.addShip(1, 5);
        expect(() => {board.receiveAttack(5)}).not.toThrow(TypeError);
        expect(() => {board.receiveAttack('string')}).toThrow(TypeError);
        expect(() => {board.receiveAttack(1.3)}).toThrow(TypeError);
    })

    test('calling receiveAttack on an invalid location returns an error', () => {
        const board = new Gameboard(10);
        expect(() => {board.receiveAttack(-1)}).toThrow(RangeError);
        expect(() => {board.receiveAttack(100)}).toThrow(RangeError);
    });
    
    test('calling receiveAttack increases a ships hit count', () => {
        const board = new Gameboard(10);
        board.addShip(5, 0);
        expect(board.board[0].ship.getHits()).toBe(0);
        let hit = 0;
        while (hit <= 4) {
            board.receiveAttack(hit);
            expect(board.board[hit].ship.getHits()).toBe(hit + 1);
            hit += 1;
        }
    });

    test('calling receiveAttack on the same square twice only increases hit once', () => {
        const board = new Gameboard(10);
        board.addShip(2, 0);
        board.receiveAttack(0);
        board.receiveAttack(0);
        expect(board.board[0].ship.getHits()).toBe(1);
    });

    test('calling receiveAttack returns a ship on hit or null otherwise', () => {
        const board = new Gameboard(10);
        const ship = board.addShip(5, 0);
        expect(board.receiveAttack(2)).toBe(ship);
        expect(board.receiveAttack(15)).toBe(null);
    });

    test('receiveAttack returns different ships', () => {
        const board= new Gameboard(10);
        const ship1 = board.addShip(5,0);
        const ship2 = board.addShip(5, 30);
        const hitShip1 = board.receiveAttack(2);
        expect(hitShip1).toBe(ship1);
        expect(hitShip1).not.toBe(ship2);
        expect(board.receiveAttack(33)).not.toBe(ship1);
        expect(board.receiveAttack(32)).toBe(ship2);
    });
});

describe('allSunk returns true if all ships are sunk', () => {
    test('detects sunk state with one ship', () => {
        const board = new Gameboard(10);
        board.addShip(1, 0);
        expect(board.isSunk()).toBeFalsy();
        board.receiveAttack(0);
        expect(board.isSunk()).toBeTruthy();
    });

    test('detects sunk state with a variety of ships', () => {
        const board = new Gameboard(10);
        const sink1 = [0, 1, 2];
        const sink2 = [84, 85, 86, 87, 88];
        const sink3 = [30, 40, 50, 60];
        board.addShip(3, 0);
        board.addShip(5, 84);
        board.addShip(4, 30, true);
        expect(board.isSunk()).toBeFalsy();
        sink1.forEach(hit => { board.receiveAttack(hit); });
        expect(board.isSunk()).toBeFalsy();
        sink2.forEach(hit => { board.receiveAttack(hit); });
        expect(board.isSunk()).toBeFalsy();
        sink3.forEach(hit => { board.receiveAttack(hit); });
        expect(board.isSunk()).toBeTruthy();
    });
});

describe('getHit and getMiss work as intended', () => {
    test('getMiss and getHit correctly reports', () => {
        const board = new Gameboard(10);
        const toMiss = [10, 16, 84];
        const toHit = [11, 20, 22];
        board.addShip(4, 11);
        board.addShip(3, 20);
        toMiss.forEach(hit => { board.receiveAttack(hit) });
        toHit.forEach(hit => { board.receiveAttack(hit) });
        const misses = board.getMiss();
        const hits = board.getHit();
        expect(misses.length).toBe(3);
        expect(hits.length).toBe(3);
        toMiss.forEach(hit => {
            expect(misses.includes(hit)).toBeTruthy();
        });
        toHit.forEach(hit => {
            expect(hits.includes(hit)).toBeTruthy();
        });
    });

    test('getHit and getMiss do not over report', () => {
        const board = new Gameboard(10);
        board.addShip(5, 0);
        board.receiveAttack(0);
        board.receiveAttack(0);
        board.receiveAttack(55);
        board.receiveAttack(55);
        expect(board.getHit().length).toBe(1);
        expect(board.getMiss().length).toBe(1);
    });
});