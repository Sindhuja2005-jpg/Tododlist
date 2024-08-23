// script.js

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch {
        display.value = 'Error';
    }
}
