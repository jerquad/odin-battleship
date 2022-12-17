import { Gameboard } from "./Gameboard";
// holds player's gameboard, can determine next move if cpu 
// pass an array of arrays in [ship size, ship index, is vertical(true/false)] format
// to populate the gameboard
export class Player {
    constructor(name, toAdd = []) {
        this.SIZE = 10;
        this.name = name;
        this.board = new Gameboard(this.SIZE);
        this.nextMove = [];
        if (toAdd) { toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
        else { this.randomBoard().forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
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

    // returns either the hit ship or null
    takeHit(index) {
        return (this.board.receiveAttack(index)) ? 'hit' : 'miss';
    }

    // confirms if a move is valid
    isValidMove(index) {
        if (index < 0 || index >= this.board.getSize()) { return false };
        return !this.board.isHit(index);
    }

    // takes a cpu turn against player, returns move taken
    cpuTurn() {
        let move;
        if (this.nextMove.length === 0) { move = this.randomMove(); }
        // const result = this.takeHit(move);
        return move;
    }

    // elect a valid free space to attack from the gameboard
    randomMove() {
        const move = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
        return (this.isValidMove(move)) ? move : this.randomMove();
    }

    randomBoard() {
        const allShips = [];
        return allShips;
    }
};
