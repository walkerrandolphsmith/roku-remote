module.exports = [
    'Home',
    'Rev',
    'Fwd',
    'Play',
    'Select',
    'Left',
    'Right',
    'Down',
    'Up',
    'Back',
    'InstantReplay',
    'Info',
    'Backspace',
    'Search',
    'Enter'
].reduce((keys, next) => { keys[next.toUpperCase()] = next; return keys; }, {});