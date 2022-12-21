import { makeElement, adjustToIndex, buildGrid } from './DOMHelpers.js';

// First page load builder
export function initializeDOM(size) {
    const container = makeElement('div', { id: 'main-container' });
    document.querySelector(':root').style.setProperty('--side-size', size + 1);
    // hack to prevent unwanted dragging
    document.querySelector('body').setAttribute('ondragstart', 'return false;');
    document.querySelector('body').setAttribute('ondrop', 'return false');
    container.appendChild(makeElement('div', { id: 'header' }));
    container.querySelector('#header').appendChild(makeElement('h1', {}, 'BATTLESHIP'));
    container.appendChild(makeElement('div', { id: 'footer' }));
    container.querySelector('#footer').appendChild(makeElement('p', {}, '&copy; 2022 Jimmy Quadros'));
    document.body.appendChild(container);
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

    displayBoard() { document.querySelector('#main-container').appendChild(this.getContainer()); }
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