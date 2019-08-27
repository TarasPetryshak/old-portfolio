export let actions = {
    addition: (number1, number2) => number1 + number2,
    subtraction: (number1, number2) => number1 - number2,
    multiply: (number1, number2) => number1 * number2,
    division: (number1, number2) => number1 / number2,
    square: (number) => Math.sqrt(number).toFixed(3),
    powExpTwo: (number) => number * number,
    powExpThree: (number) => Math.pow(number, 3),
    statics: (number) => (1 / number).toFixed(6),
    plusMinus: (number) => number *= -1,
    percent: (number1, number2, action) => {
        let percent = (number1 / 100 * number2).toFixed(2);
        switch (action) {
            case 'addition':return number1 += +percent;
            case 'subtraction': return number1 -= percent;
            case 'multiply': return number1 *= percent;
            case 'division': return number1 /= percent;
        }
    }
}

