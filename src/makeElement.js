export function makeElement(type, properties = {}) {
    const element = document.createElement(type);
    for (let key in properties) {
        element.setAttribute(`${key}`, `${properties[key]}`);
    }
    return element;
}