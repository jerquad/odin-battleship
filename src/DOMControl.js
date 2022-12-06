// Helper function for easy element creation
// use: (<string>, <object> of properties as you would use setAttribute, <string>innerHTML)
function makeElement(type, properties = {}, inner = null) {
    const element = document.createElement(type);
    for (let key in properties) { element.setAttribute(`${key}`, `${properties[key]}`) };
    if (inner) { element.innerHTML = inner };
    return element;
}

export class PlayBoard {
    constructor(size) {
        this.boardBox = makeElement('div', { class: 'board-box' });
        this.boardBox.appendChild(buildGrid(size, 'grid-play'));
        this.boardBox.appendChild(buildGrid(size, 'grid-status'))
        this.boardBox.appendChild(makeElement('button', { class: 'play-button', disabled: 'true' }));
    }
    
    getContainer() { return this.boardBox; }
    getPlay() { return this.boardBox.querySelector('.grid-play'); }
    getStatus() { return this.boardBox.querySelector('.grid-status'); }

    addClassPlay(index, toAdd) { this.getPlay().children.item(this.adjustToIndex(index)).classList.add(toAdd); }
    addClassStatus(index, toAdd) { this.getStatus().children.item(this.adjustToIndex(index)).classList.add(toAdd); }
    removeClassPlay(index, toRemove) { this.getPlay().children.item(this.adjustToIndex(index)).classList.remove(toRemove); }
    removeClassStatus(index, toRemove) { this.getStatus().children.item(this.adjustToIndex(index)).classList.remove(toRemove); }
    
    adjustToIndex(index) { return (this.SIZE + 1) * (index / this.SIZE + 1) + 1; }

    bindButton(callback) {
        this.boardBox.querySelector('.play-button').addEventListener('click', () => callback);      
    }
}

export function makeBoard() {
    const boardBox = makeElement('div', { class: 'board-box' });
    const statusArea = buildGrid(10);
    const playArea = buildGrid(10);
    const playButton = makeElement('button', { class: 'play-button', disabled: 'true' }, 'SELECT TARGET');

    statusArea.classList.add('grid-status');
    playArea.classList.add('grid-play');

    // statusArea.setAttribute('id', 'grid-status');
    // playArea.setAttribute('id', 'grid-play');
    
    boardBox.appendChild(statusArea);
    boardBox.appendChild(playArea);
    boardBox.appendChild(playButton);

    return boardBox;
}

export function renderAction(board, result, index) {
    board.children.item(index).classList.add((result === null) ? 'miss' : 'hit');
}

// Create the primary play area of the game
export function renderBoard(board) {
    document.body.appendChild(board);
}

// create a variably sized grid with guide measures on top and left hand side
function buildGrid(sideSize, addClass) {
    const SIZE = Math.pow(sideSize + 1, 2);
    const gridBox = makeElement('div', { class: 'grid-box' });
    if (addClass) { gridBox.classList.add(addClass); }
    let colValue = 65;
    let rowValue = 1;
    let cellIndex = 0;
    for (let i = 0; i < SIZE; i++) { 
        if (i === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-corner' })) }
        else if (i <= sideSize) { gridBox.appendChild(makeElement('div', { class: 'guide-top' }, String.fromCharCode(colValue++))) }
        else if (i % (sideSize + 1) === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-left'}, rowValue++)) }
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell', 'data-index': cellIndex++ })) };
    }

    // Find a better home for this
    document.querySelector(':root').style.setProperty('--side-size', sideSize + 1);
    
    return gridBox;
}

// creates a win/lose result with a replay button
export function renderWinLose(result) {
    const resultBox = makeElement('div', { id: 'result-box' });
    const displayArea = makeElement('div', { id: 'result-display' })
    const resultMsg = makeElement('h1');
    const replayBtn = makeElement('button', { id: 'replay-button' }, 'PLAY AGAIN?');
    resultMsg.innerHTML = (result) ? 'YOU WIN' : 'YOU LOSE';
    displayArea.appendChild(resultMsg);
    displayArea.appendChild(replayBtn);
    resultBox.appendChild(displayArea);
    return resultBox;
}