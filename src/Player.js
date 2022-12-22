import { Gameboard } from "./Gameboard";
// holds player's gameboard, can determine next move if cpu 
// pass an array of arrays in [ship size, ship index, is vertical(true/false)] format
// to populate the gameboard
export class Player {
    constructor(name, toAdd) {
        this.SIZE = 10;
        this.name = name;
        this.board = new Gameboard(this.SIZE);
        this.nextMove = [];
        if (toAdd) { toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
        else { this.randomBoard([5, 4, 3, 3, 2]).forEach(ship => {this.board.addShip(ship[0], ship[1], ship[2])} ); }
    };

    getName() {
        return this.name;
    }

    getAllShipIndex() {
        return this.board.getPlaced();
    }

    getMissIndex() {
        return this.board.getMiss();
    }

    getHitIndex() {
        return this.board.getHit();
    }

    // confirms if player is defeated
    isDefeated() {
        return this.board.isSunk();
    }

    takeHit(index) {
        return (this.board.receiveAttack(index)) ? 'hit' : 'miss';
    }

    // returns either the hit ship or null
    takeHitCPU(index) {
        const hit = this.board.receiveAttack(index);
        const target = (this.nextMove.length === 0) ? null : this.nextMove[0][0];
        console.log(target);
        if (hit && (!target || !this.board.isSameShip(target, index))) {
            this.nextMove.push([
                index,
                index - 1,
                index + this.SIZE,
                index + 1,
                index - this.SIZE,
            ]);
        } else if (hit && this.isXTo(target, index)) {
            this.nextMove[0] = this.nextMove[0].concat([
                index - 1,
                target - 1,
                index + 1]);
        } else if (hit) {
            this.nextMove[0] = this.nextMove[0].concat([
                target - this.SIZE,
                target + this.SIZE,
                index - this.SIZE,
                index + this.SIZE]);
        }
        return (hit) ? 'hit' : 'miss';
    }

    // confirms if a move is valid
    isValidMove(index) {
        if (index < 0 || index >= this.board.getSize()) { return false };
        return !this.board.isHit(index);
    }

    // confirms if indices is on the same row or column
    isValidTo(from, to) {
        if (this.isXTo(from, to)) { return true; }
        if (this.isYTo(from, to)) { return true; }
        return false;
    }

    isXTo(from, to) {
        return Math.floor(from / this.SIZE) === Math.floor(to / this.SIZE);
    }

    isYTo(from, to) {
        return from % this.SIZE === to % this.SIZE
    }

    // takes a cpu turn against player, returns move taken
    cpuTurn() {
        const move = this.getNextMove();
        return { move: move, result: this.takeHitCPU(move) };
    }

    // if no queued moves make a random move, clear a sunk ship, or return the next valid move
    getNextMove() {
        if (this.nextMove.length === 0) { return this.randomMove() 
        } else if (this.board.isSunkAt(this.nextMove[0][0])) {
            this.nextMove.shift();
            return this.getNextMove();
        } else {
            const move = this.nextMove[0].pop();
            if (!this.isValidMove(move) || !this.isValidTo(this.nextMove[0][0], move)) {
                return this.getNextMove();
            }
            return move;
        }
    }

    // elect a valid free space to attack from the gameboard
    randomMove() {
        const move = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
        return (this.isValidMove(move)) ? move : this.randomMove();
    }

    // returns a set of [ship size, ship index, is vertical(true/false)] such that 
    // there is no overlap or conflics
    randomBoard(toAdd) {
        const allShips = [];
        const board = new Array(Math.pow(this.SIZE, 2));
        toAdd.forEach(ship => {
            const check = allShips.length;
            while (allShips.length === check) {
                const isY = (Math.random() < 0.5);
                const head = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
                const toPlace = this.getCoord(ship, head, isY);
                if (toPlace[toPlace.length - 1] < Math.pow(this.SIZE, 2) && this.validShip(toPlace, isY) && this.validPlace(board, toPlace)) {
                        toPlace.forEach(cell => { board[cell] = true });
                        allShips.push([ship, head, isY]);
                }
            }
        })
        return allShips;
    }

    // return an array of grid coordinates either x or y aligned
    getCoord(size, head, isY) {
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(head);
            if (isY) { head += this.SIZE; }
            else { head += 1 }
        }
        return arr;
    }

    // confirm if a sequence of indices are valid on a grid
    validShip(arr, isY) {
        return (isY) 
            ? (arr[0] % this.SIZE === arr[arr.length - 1] % this.SIZE)
            : (Math.floor(arr[0] / this.SIZE) === Math.floor(arr[arr.length - 1] / this.SIZE)); 
    }

    // check if any overlap exists between board and candidated indices
    validPlace(board, arr) {
        let valid = true;
        arr.forEach(index => {
            if (board[index]) { valid = false }
        })
        return valid;
    }
};
