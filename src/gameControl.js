import { renderBoard } from "./DOMControl.js";
import { Player } from './Player.js';

export class GameControl {
    constructor() {
        this.SIZE = 10;
        this.player1;
        this.player2;
        this.multiplayer = false;
        this.selectMove = null;
        this.turnNumber = 0;
    }

    startGame() {
        this.dummySetPlayer();
        renderBoard();
        this.populateBoard();
        this.bindBoard();
    }

    dummySetPlayer() {
        const dummy1 = [
            [5, 25, true],
            [4, 83, false],
            [3, 0, false],
            [3, 51, true],
            [2, 48, false]
        ];
        const dummy2 = [
            [5, 95, false],
            [4, 16, false],
            [3, 53, false],
            [3, 68, true],
            [2, 12, true]
        ]
        this.player1 = new Player(dummy1);
        this.player2 = new Player(dummy2);

        const p1Hits = [2, 5, 25, 26, 69, 85, 90, 99];
        p1Hits.forEach((hit)  => {
            this.player1.takeHit(hit);
        });
        const p2Hits = [0, 2, 12, 16, 17, 55, 77, 99];
        p2Hits.forEach(hit => {
            this.player2.takeHit(hit);
        })

    }

    // Determine the active player
    getPlayer() {
        return (this.turnNumber % 2 === 0) ? this.player1 : this.player2; 
    }

    // Determine the current non player
    getAdversary() {
        return (this.turnNumber % 2 === 0) ? this.player2 : this.player1;
    }

    // Sets the various classes of cells on the board 
    populateBoard() {
        this.getPlayer().getAllShipIndex().forEach(index => {
            document.querySelector('#grid-status').children.item(this.adjustToIndex(index)).classList.add('ship');
        });
        this.setHitMiss(document.querySelector('#grid-status'), this.getPlayer());
        this.setHitMiss(document.querySelector('#grid-play'), this.getAdversary());
    }

    // Helper function to fill in hit and miss squares on any board
    setHitMiss(board, player) {
        player.getMissIndex().forEach(index => {
            const target = board.children.item(this.adjustToIndex(index));
            target.classList.remove('open-cell');
            target.classList.add('miss');
        });
        player.getHitIndex().forEach(index => {
            const target = board.children.item(this.adjustToIndex(index));
            target.classList.remove('open-cell');
            target.classList.add('hit');
        });
    }

    // adjust an index to determine a grid's nth child
    adjustToIndex(index) {
        return (this.SIZE + 1) * (index / this.SIZE + 1) + 1;
    }

    getGuideIndex(index) {
        return String.fromCharCode(65 + (index % this.SIZE)).concat(Math.floor(index / this.SIZE) + 1);
    }

    // bindings for a player's turn
    bindBoard() {
        // selectable board area
        const playArea = document.querySelector('#grid-play');
        playArea.addEventListener('click', (e) => {
            if (!e.target.classList.contains('open-cell')) { return };
            if (this.selectMove) {
                playArea.children.item(this.adjustToIndex(this.selectMove)).classList.remove('selected');
                playArea.children.item(this.adjustToIndex(this.selectMove)).classList.add('open-cell');
            };
            e.target.classList.add('selected');
            e.target.classList.remove('open-cell');
            this.selectMove = Number(e.target.dataset.index);
            document.querySelector('#play-button').disabled = false;
            document.querySelector('#play-button').innerHTML = `ATTACK ${this.getGuideIndex(e.target.dataset.index)}`
        });

        document.querySelector('#play-button').addEventListener('click', (e) => {
            e.target.disabled = true;
            e.target.innnerHTML = 'SELECT TARGET';
            if (!this.multiplayer) { this.singleTurn() };
        });
    }

    singleTurn() {
        const index = this.adjustToIndex(this.selectMove);
        const board = document.querySelector('#grid-play');
        board.children.item(index).classList.remove('selected');
        if (!this.getAdversary().isValidMove()) { return }
        if (!this.getAdversary().takeHit(this.selectMove)) { board.children.item(index).classList.add('hit') }
        else { board.children.item(index).classList.add('miss') }
    }
}

