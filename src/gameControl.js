import { initializeDOM, PlayBoard } from "./DOMControl.js";
import { SetPlayer } from "./SetPlayer.js";
import { Player } from './Player.js';

export class GameControl {
    constructor() {
        this.SIZE = 10;
        this.player1 = { player: null, board: null };
        this.player2 = { player: null, board: null };
        this.multiplayer = false;
        this.selectMove = null;
        this.turnNumber = 0;
    }

    // begin the gameloop
    startGame() {
        initializeDOM();
        this.createPlayer();
    }

    createPlayer(isMulti) {
        const setPlayer = new SetPlayer(10, [5, 4, 3, 3, 2], isMulti);
        setPlayer.getButton().addEventListener('click', (e) => {
            const data = setPlayer.getData();
            setPlayer.remove();
            // set second player
            if (this.player1.player) { 
                this.player2.player = new Player('player2', data.board);
                this.player2.board = new PlayBoard(this.SIZE, this.player2.player.getAllShipIndex());
                this.bindBoard(this.player2);
                this.getPlayerBoard()
                    .createTurnCover(this.getPlayer().getName())
                    .addEventListener('click', (e) => this.getPlayerBoard().clearTurnCover());
                this.getPlayerBoard().displayBoard();
            // set first player and prompt for second
            } else if (data.multi) {
                this.player1.player = new Player('player1', data.board);
                this.player1.board = new PlayBoard(this.SIZE, this.player1.player.getAllShipIndex());
                this.bindBoard(this.player1);
                this.multiplayer = true;
                this.createPlayer(true);
            // set single player and set cpu player
            } else {
                this.player1.player = new Player('player1', data.board);
                this.player1.board = new PlayBoard(this.SIZE, this.player1.player.getAllShipIndex());
                this.bindBoard(this.player1);
                this.dummySetPlayer();
                this.getPlayerBoard().displayBoard();
            }
        });
        setPlayer.display();
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
        // this.player1 = new Player('player1', dummy1);
        // this.bindBoard(this.player1);
        this.player2.player = new Player('player2', dummy2);
        this.player2.board = new PlayBoard(this.SIZE, this.player2.player.getAllShipIndex());
        this.bindBoard(this.player2)
    }

    // Determine the active player
    getPlayer() {
        return (this.turnNumber % 2 === 0) ? this.player1.player : this.player2.player; 
    }

    getPlayerBoard() {
        return (this.turnNumber % 2 === 0) ? this.player1.board : this.player2.board; 
    }

    // Determine the current non player
    getAdversary() {
        return (this.turnNumber % 2 === 0) ? this.player2.player : this.player1.player;
    }

    getAdversaryBoard() {
        return (this.turnNumber % 2 === 0) ? this.player2.board : this.player1.board;
    }

    // bindings for play area
    bindBoard(player) {
        const display = player.board;
        const button = display.getButton();
        
        // bind clickable cells
        display.getPlay().addEventListener('click', (e) => {
            if (!e.target.classList.contains('open-cell')) { return };
            if (this.selectMove) { display.toggleSelected(this.selectMove); }
            display.toggleSelected(e.target.dataset.index);
            this.selectMove = Number(e.target.dataset.index);
            display.setButton(e.target.dataset.index);
        });

        // bind attack button
        button.addEventListener('click', (e) => {
            display.setButton();
            this.takeTurn();
        });
    }

    // Function for action button, takes a player selected turn
    takeTurn() {
        const result = this.getAdversary().takeHit(this.selectMove);
        this.getPlayerBoard().updatePlay(this.selectMove, result);
        if (this.getAdversary().isDefeated()) { 
            this.getPlayer()
                .board
                .createGameOver('YOU WIN!')
                .addEventListener('click', (e) => {
                    this.getPlayerBoard().removeBoard();
                    this.resetGame();
                    this.startGame();
            }); 
        }
        else if (this.multiplayer) { this.switchTurn(result); }
        else { this.cpuTurn(); }
    }

    // Renders move taken on player and reset selectMove
    startTurn(result) {
        this.getPlayerBoard().updateStatus(this.selectMove, result);
        this.selectMove = null;
    }

    // Prepares the play area to exchange players
    switchTurn(result) {
        const board = this.getAdversaryBoard();
        board.createTurnCover(this.getAdversary()
            .getName())
            .addEventListener('click', (e) => {
                board.clearTurnCover();
                this.startTurn(result);
            });
        board.displayBoard();
        this.getAdversaryBoard().removeBoard();
        this.turnNumber++;
    }

    // Simulate an adversary's turn
    cpuTurn() {
        this.selectMove = this.getPlayer().cpuTurn();
        const result = this.getPlayer().takeHit(this.selectMove);
        if (this.getPlayer().isDefeated()) { 
            this.getPlayer().getDisplay().createGameOver('YOU LOSE!'); 
        } else { this.startTurn(result); }
    }

    // clear all variable to default
    resetGame() {
            this.player1 = { player: null, board: null };
            this.player2 = { player: null, board: null };
            this.multiplayer = false;
            this.selectMove = null;
            this.turnNumber = 0;
    }
}

