let screenDraw = (outputValue) => $('.screen').html(outputValue);
let clearScreen = () => $('.screen').html('0');
let actionScreen = () => {
    if (+$('.screen').html() !== 0) {
        $('.screen').css({ 'background': 'white', 'opacity': '0.8', 'color': 'black' });
    } else {
        $('.screen').css({ 'background': 'inherit', 'opacity': 'inherit', 'color': 'inherit' });
    }
}
let display = (number1, number2) => {
    if (number2 != '') {
        screenDraw(number2);
    } else if (number1 != '') {
        screenDraw(number1);
    }
}
export default {
    screenDraw,
    display,
    clearScreen,
    actionScreen
}