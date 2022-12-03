// Helper function for easy element creation
// use: (<string>, <object> of properties as you would use setAttribute, <string>innerHTML)
function makeElement(type, properties = {}, inner = null) {
    const element = document.createElement(type);
    for (let key in properties) { element.setAttribute(`${key}`, `${properties[key]}`) };
    if (inner) { element.innerHTML = inner };
    return element;
}

// Create the primary play area of the game
export function renderBoard() {
    const boardBox = makeElement('div', { id: 'board-box' });
    const statusArea = buildGrid(10);
    const playArea = buildGrid(10);
    const playButton = makeElement('button', { id: 'play-button' }, 'SELECT TARGET');

    statusArea.setAttribute('id', 'grid-status');
    playArea.setAttribute('id', 'grid-play');
    
    boardBox.appendChild(statusArea);
    boardBox.appendChild(playArea);
    boardBox.appendChild(playButton);
    document.body.appendChild(boardBox);
}

// create a variably sized grid with guide measures on top and left hand side
function buildGrid(sideSize) {
    const SIZE = Math.pow(sideSize + 1, 2);
    const gridBox = makeElement('div', { class: 'grid-box' });
    let colValue = 65;
    let rowValue = 1;
    for (let i = 0; i < SIZE; i++) { 
        if (i === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-corner' })) }
        else if (i <= sideSize) { gridBox.appendChild(makeElement('div', { class: 'guide-top' }, String.fromCharCode(colValue++))) }
        else if (i % (sideSize + 1) === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-left'}, rowValue++)) }
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell' })) };
    }

    // Find a better home for this
    document.querySelector(':root').style.setProperty('--side-size', sideSize + 1);
    
    return gridBox;

}