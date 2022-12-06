import { renderAction, renderBoard, renderWinLose, makeBoard } from "./DOMControl.js";
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

    // begin the gameloop
    startGame() {
        this.dummySetPlayer();
        renderBoard(this.player1.getDisplay());
    }

    // testing values
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
        this.player1 = new Player('player1', dummy1, makeBoard);
        this.populateBoard(this.player1);
        this.bindBoard(this.player1.getDisplay());
        this.player2 = new Player('player2', dummy2, makeBoard);
        this.populateBoard(this.player2);
        this.bindBoard(this.player2.getDisplay());

        // const p1Hits = [2, 5, 25, 26, 69, 85, 90, 99];
        // p1Hits.forEach((hit)  => {
        //     this.player1.takeHit(hit);
        // });
        // const p2Hits = [0, 2, 12, 22, 16, 17, 18, 19, 53, 54, 55, 77, 68, 78, 88,  95, 96, 97, 98];
        // p2Hits.forEach(hit => {
        //     this.player2.takeHit(hit);
        // })

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
    populateBoard(player) {
        player.getAllShipIndex().forEach(index => {
            player.getDisplay().querySelector('.grid-status').children.item(this.adjustToIndex(index)).classList.add('ship');
        });
        // this.setHitMiss(document.querySelector('#grid-status'), this.getPlayer());
        // this.setHitMiss(document.querySelector('#grid-play'), this.getAdversary());
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

    // adjust an index to account for guide row/column
    adjustToIndex(index) {
        return (this.SIZE + 1) * (index / this.SIZE + 1) + 1;
    }

    // get a string value for a particular index
    getGuideIndex(index) {
        return String.fromCharCode(65 + (index % this.SIZE)).concat(Math.floor(index / this.SIZE) + 1);
    }

    // bindings for a player's turn
    bindBoard(board) {
        // selectable board area
        const playArea = board.querySelector('.grid-play');
        playArea.addEventListener('click', (e) => {
            if (!e.target.classList.contains('open-cell')) { return };
            if (this.selectMove) {
                playArea.children.item(this.adjustToIndex(this.selectMove)).classList.remove('selected');
                playArea.children.item(this.adjustToIndex(this.selectMove)).classList.add('open-cell');
            };
            e.target.classList.add('selected');
            e.target.classList.remove('open-cell');
            this.selectMove = Number(e.target.dataset.index);
            board.querySelector('.play-button').disabled = false;
            board.querySelector('.play-button').innerHTML = `ATTACK ${this.getGuideIndex(e.target.dataset.index)}`
        });

        // bind attack button
        board.querySelector('.play-button').addEventListener('click', (e) => {
            e.target.disabled = true;
            e.target.innnerHTML = 'SELECT TARGET';
            if (!this.multiplayer) { this.takeTurn() };
        });
    }

    takeTurn() {
        const playBoard = this.getPlayer().getDisplay().querySelector('.grid-play');
        playBoard.children.item(this.adjustToIndex(this.selectMove)).classList.remove('selected');
        const result = this.getAdversary().takeHit(this.selectMove);
        renderAction(playBoard, result, this.adjustToIndex(this.selectMove));
        if (this.getAdversary().isDefeated()) { this.gameOver(this.getPlayer().getDisplay(), true); }
        else if (this.multiplayer) { return "not yet!"; }
        else { this.cpuTurn(); }
    }

    cpuTurn() {
        this.turnNumber++;
        this.selectMove = this.getAdversary().cpuTurn();
        const result = this.getAdversary().takeHit(this.selectMove);
        this.turnNumber++;
        this.startTurn(result);
    }

    startTurn(result) {
        renderAction(this.getPlayer().getDisplay().querySelector('.grid-status'), result, this.adjustToIndex(this.selectMove));
        this.selectMove = null;
    } 

    // populates a result popup and binds a replay button
    gameOver(board, result) {
        board.querySelector('.board-box').appendChild(renderWinLose(result));
        board.querySelector('#replay-button').addEventListener('click', (e) => {
            board.querySelector('.board-box').remove();
            this.resetGame();
            this.startGame();
        });
    }

    // clear all variable to default
    resetGame() {
            this.player1 = null;
            this.player2 = null;
            this.multiplayer = false;
            this.selectMove = null;
            this.turnNumber = 0;
    }
}

