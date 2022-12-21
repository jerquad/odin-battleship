// Helper function for easy element creation
// use: (<string>, <object> of properties as you would use setAttribute, <string>innerHTML)
export function makeElement(type, properties = {}, inner = null) {
    const element = document.createElement(type);
    for (let key in properties) { element.setAttribute(`${key}`, `${properties[key]}`) };
    if (inner) { element.innerHTML = inner };
    return element;
}

// Adjust an index value to compensate for any added guide values
export function adjustToIndex(index, size) { 
    return (size + 1) * (index / size + 1) + 1;
}

// create a variably sized grid with guide measures on top and left hand side
export function buildGrid(sideSize, addClass) {
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
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell selectable', 'data-index': cellIndex++ })) };
    }
    return gridBox;
}

// setPlayer DOM builders

// container for icons indexes the icons on order added
export function buildSetPlayer(size, pieces, isMulti) {
    const container = makeElement('div', { id: 'set-container' });
    container.appendChild(buildGrid(size));
    container.appendChild(buildToggleBar());
    container.appendChild(makeTray(pieces));
    container.appendChild(buildSubmitBar(isMulti));
    return container;
}

function buildSubmitBar(isMulti) {
    const container = makeElement('div', { id: 'submit-bar' });
    const buttonContainer = makeElement('div', { id: 'submit-bc' });
    buttonContainer.appendChild(makeElement('button', { id: 'submit-btn', disabled: 'true' }, 'CONTINUE'));
    container.appendChild(buttonContainer);
    container.appendChild(buildSetMulti(isMulti));
    return container;
}

function buildSetMulti(isMulti) {
    const container = makeElement('div', { id: 'submit-mc' });
    const two = makeElement('div', { id: 'submit-mc-2' });
    const check = makeElement('input', { type: 'checkbox', id: 'submit-chk' });
    if (isMulti) { 
        container.classList.add('is-multi');
        check.setAttribute('disabled', 'true') 
    };
    two.appendChild(makeElement('div', {}, 'T'));
    two.appendChild(makeElement('div', {}, 'W'));
    two.appendChild(makeElement('div', {}, 'O'));
    container.appendChild(two);
    container.appendChild(makeElement('div', { id: 'submit-mc-m' }, 'PLAY'));
    container.appendChild(check);
    return container;
}

function buildToggleBar() {
    const togglebar = makeElement('div', { id: 'toggle-bar' });
    const toggleContainer = makeElement('div', { id: 'toggle-container' })
    const toggleBody = makeElement('div', { id: 'toggle-body', 'data-y': 'false' });
    const toggleText = makeElement('div', { id: 'toggle-text' }, 'X');
    const instructCont = makeElement('div', {id: 'inst-container' });
    const instructUL = makeElement('ul', {id: 'inst-ul' });
    instructUL.appendChild(makeElement('li', {}, 'DRAG PIECES BELOW TO GRID'));
    instructUL.appendChild(makeElement('li', {}, 'LEFT TOGGLE TO SET DIRECTION'));
    instructUL.appendChild(makeElement('li', {}, 'ONCE ALL SET PRESS CONTINUE'));
    toggleBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-rotate')) {
            e.target.setAttribute('data-y', 'false');
            e.target.classList.remove('toggle-rotate');
            toggleText.innerHTML = 'X';
        } else {
            e.target.setAttribute('data-y', 'true');
            e.target.classList.add('toggle-rotate');
            toggleText.innerHTML = 'Y';
        }
    });
    toggleContainer.appendChild(toggleBody);
    toggleContainer.appendChild(toggleText);
    togglebar.appendChild(toggleContainer)
    instructCont.appendChild(instructUL);
    togglebar.appendChild(instructCont);
    return togglebar;
}

function makeTray(pieces) {
    const tray = makeElement('div', { class: 'set-tray' });
    let index = 0;
    for (let i = 0, j = Math.floor((pieces.length) / 2); j < pieces.length; i++, j++) {
        if (i < Math.floor(pieces.length / 2)) { 
            tray.appendChild(makeTrayItem(pieces[i]));
            tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
        }
        tray.appendChild(makeTrayItem(pieces[j]));
        tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
    }
    return tray;
}

// create holder for icons
function makeTrayItem(piece) {
    const item = makeElement('div', { class: 'tray-item' })
    item.appendChild(makePieceIcon(piece));
    return item;
}

// create icons
function makePieceIcon(size) {
    const icon = makeElement('div', { class: 'icon-piece' });
    for (let i = 0; i < size; i++) {
        const cell = makeElement('div', { class: 'icon-cell' });
        icon.appendChild(cell);
    }
    icon.dataset.size = size;
    return icon;
}

export function makeDragIcon(size, vertical, tray, cellSize) {
    const dragIcon = makePieceIcon(Number(size));
    dragIcon.setAttribute('id', 'dragged');
    dragIcon.setAttribute('data-tray', tray);
    if (vertical) { dragIcon.classList.add('drag-y') }
    [...dragIcon.children].forEach(child => {
        child.style.height = cellSize;
        child.classList.add('drag-cell')
    });
    return dragIcon; 
}