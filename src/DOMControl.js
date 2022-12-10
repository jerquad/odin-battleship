// Helper function for easy element creation
// use: (<string>, <object> of properties as you would use setAttribute, <string>innerHTML)
function makeElement(type, properties = {}, inner = null) {
    const element = document.createElement(type);
    for (let key in properties) { element.setAttribute(`${key}`, `${properties[key]}`) };
    if (inner) { element.innerHTML = inner };
    return element;
}

function adjustToIndex(index, size) { 
    return (size + 1) * (index / size + 1) + 1;
}

// create and display the initial content
export function initializeDOM() {
    const container = makeElement('div', { id: 'main-container' });
    const setPlayer = new SetPlayer(10, [5, 4, 3, 3, 2]);
    document.body.appendChild(container);
    setPlayer.display();
}

// Display for initialziing a player
export class SetPlayer {
    constructor(size, pieces) {
        this.SIZE = size;
        this.container = makeElement('div', { id: 'set-container' });
        this.container.appendChild(buildGrid(size, 'set-grid'));
        this.container.appendChild(this.makeTray(pieces));
        this.dragEvent = [null, 0, 0];
        this.dragMove = function(e) {
            e = e || window.event;
            e.preventDefault();
            const drag = document.querySelector('#dragged');
            drag.style.top = (e.clientY - this.dragEvent[2]).toString() + 'px';
            drag.style.left = (e.clientX - this.dragEvent[1]).toString() + 'px';
        }
        this.dragMoveHandler = this.dragMove.bind(this);
        this.dragEnd = function (e) {
            e = e || window.event;
            e.preventDefault();
            document.querySelector('#dragged').remove();
            document.querySelector('#main-container').removeEventListener('mousemove', this.dragMoveHandler, true);
            document.querySelector('#main-container').removeEventListener('mouseup', this.dragEndHandler, true);
        }
        this.dragEndHandler = this.dragEnd.bind(this);
    }

    getContainer() { return this.container; }
    getGrid() { return this.getContainer().querySelector('.set-grid'); }
    getTray() { return this.getContainer().querySelector('.set-tray'); }

    // append setplayer to main container, sets initial height of all icon cells
    // binds window resizing to resize icons to match grid size
    display() { 
        document.querySelector('#main-container').appendChild(this.getContainer()); 
        this.setTrayIconSize()
        window.onresize = function() {
            const height = document.querySelector('.set-grid').children.item(11).clientHeight;
            document.querySelectorAll('.icon-cell').forEach(cell => {
                cell.style.height = `${height}px`;
            })
        }
    }

    // clear setplayer
    remove() { document.querySelector('#set-container').remove(); }

    // set the icon's cell size to match the grid's cell size
    setTrayIconSize() {
        document.querySelectorAll('.icon-cell').forEach(cell => {
            cell.style.height = this.GetTrayIconSize();
        })
    }

    GetTrayIconSize() {
        return `${this.getGrid().children.item(adjustToIndex(0, this.SIZE)).clientHeight}px`;
    }

    // container for icons
    makeTray(pieces) {
        const tray = makeElement('div', { class: 'set-tray' });
        tray.setAttribute('draggable', false);
        for (let i = 0, j = Math.floor((pieces.length) / 2); j < pieces.length; i++, j++) {
            if (i < Math.floor(pieces.length) / 2) { 
                tray.appendChild(this.makeTrayItem(pieces[i]));
            }
            tray.appendChild(this.makeTrayItem(pieces[j]));
        }
        return tray;
    }

    // create holder for icons
    makeTrayItem(piece) {
        const item = makeElement('div', { class: 'tray-item' })
        item.setAttribute('draggable', false);
        item.appendChild(this.makePieceIcon(piece));
        return item;
    }

    // create icons
    makePieceIcon(size) {
        const icon = makeElement('div', { class: 'icon-piece' });
        icon.setAttribute('draggable', false);
        for (let i = 0; i < size; i++) {
            const cell = makeElement('div', { class: 'icon-cell' });
            cell.setAttribute('draggable', false);
            icon.appendChild(cell);
        }
        icon.dataset.size = size;
        icon.addEventListener('mousedown', (e) => this.dragStart(e));
        return icon;
    }

    dragStart(e) {
        const icon = (e.target.classList.contains('icon-cell')) ? e.target.parentNode : e.target;
        const target = icon.parentElement;
        this.dragEvent[0] = this.makePieceIcon(Number(icon.dataset.size));
        const dragIcon = this.dragEvent[0];
        dragIcon.classList.remove('icon-piece');
        dragIcon.setAttribute('id', 'dragged');
        [...dragIcon.children].forEach(child => {
            child.style.height = this.GetTrayIconSize()
            child.classList.add('drag-cell')
        });
        this.dragEvent[1] = e.clientX - dragIcon.offsetLeft;
        this.dragEvent[2] = e.clientY - dragIcon.offsetTop;

        icon.appendChild(this.dragEvent[0]);
        document.querySelector('#main-container').addEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').addEventListener('mouseup', this.dragEndHandler, true);
    }

    

}

// Display for the general play area
export class PlayBoard {
    constructor(size, allShips) {
        this.SIZE = size;
        this.container = makeElement('div', { class: 'play-container' });
        this.container.appendChild(buildGrid(size, 'play-area'));
        this.container.appendChild(buildGrid(size, 'play-status'))
        this.container.appendChild(makeElement('button', { class: 'play-button', disabled: 'true' }, 'SELECT TARGET'));
        allShips.forEach(index => {
            this.updateStatus(index, 'ship');
        })
    }
    
    // getters for board elements
    getContainer() { return this.container; }
    getPlay() { return this.getContainer().querySelector('.play-area'); }
    getStatus() { return this.getContainer().querySelector('.play-status'); }
    getButton() { return this.getContainer().querySelector('.play-button'); }
    
    // Helpers to handle the displayed guides
    getGuideIndex(index) { return String.fromCharCode(65 + (index % this.SIZE)).concat(Math.floor(index / this.SIZE) + 1); }

    displayBoard() { document.body.appendChild(this.getContainer()); }
    removeBoard() { document.querySelector('.play-container').remove(); }

    // set the display's button text and disabled status
    setButton(index) {
        this.getButton().disabled = (index) ? false : true;
        this.getButton().innerHTML = (index) ? `ATTACK ${this.getGuideIndex(index)}` : `SELECT TARGET`; 
    };

    // switches a cell from open to selected
    toggleSelected(index) {
        const cell = this.getPlay().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.toggle('open-cell');
        cell.classList.toggle('selected');
    }

    // set class for cell in the play grid
    updatePlay(index, toUpdate) {
        const cell = this.getPlay().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.remove('selected');
        cell.classList.add(toUpdate);
    }

    // set class for cell in the status grid
    updateStatus(index, toUpdate) {
        const cell = this.getStatus().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.add(toUpdate);
    }

    // display a privacy cover on turn switch-offs, takes a string for player's name, returns button
    createTurnCover(player) {
        const container = makeElement('div', { class: 'turn-container' });
        const content = makeElement('div', { class: 'turn-content' });
        const button = makeElement('button', { class: 'turn-button' }, 'READY');
        content.appendChild(makeElement('h1', {}, `${player.toUpperCase()}'s`));
        content.appendChild(makeElement('h1', {}, 'TURN'));
        content.appendChild(button);
        container.appendChild(content);
        this.getContainer().appendChild(container);
        return button;
    }

    clearTurnCover() {
        this.getContainer().querySelector('.turn-container').remove();
    }

    // display a gameover message with custon result string, returns button for binding
    createGameOver(result) {
        const container = makeElement('div', { class: 'gameover-container' });
        const content = makeElement('div', { class: 'gameover-content' });
        const button = makeElement('button', { class: 'gameover-button' }, 'PLAY AGAIN?')
        content.appendChild(makeElement('h1', {}, result));
        content.appendChild(button);
        container.appendChild(content);
        this.getContainer().appendChild(container);
        return button;
    }
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

