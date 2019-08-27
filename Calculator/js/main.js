import visualize from './visualize';
import memory from './memory';
import { actions }  from './calculation';
import resize from './resize';
let num1 = '', num2 = '', action = '', actionForPercent = '';
let setNum1 = () => {
    if (!isNaN($(event.target).html()) && action == '') {
        if (num1 != '') {
            return num1 += $(event.target).html();
        } else {
            return num1 = $(event.target).html();
        }
    }
} 
let setNum2 = () => {
    if (!isNaN($(event.target).html()) && action != '') {
        if (num2 != '') {
            num2 += $(event.target).html();
        } else {
            num2 = $(event.target).html();
        }
    }
}
let actionValues = [
    'addition',
    'subtraction',
    'multiply',
    'division',
    'percent'
];
let actionToDoImmediately = {
    'square': 'square',
    'pow-exp-two': 'powExpTwo',
    'pow-exp-three': 'powExpThree',
    'statics': 'statics',
    'plusMinus': 'plusMinus'
}
let setAction = () => {
    if (num1 != '') {
        for (let active of actionValues) {
            if ($(event.target).hasClass(active) && (!($(event.target).hasClass('percent')))) {
                action = active;
                actionForPercent = action;
            } 
            if ($(event.target).hasClass('percent')) {
                action = active;
            }
        }
    }
}
let setDoImmediately = () => {
    if (num2 == '') {
        if (num1 != '') {
            for (let active in actionToDoImmediately) {
                if ($(event.target).hasClass(active)) {
                    action = actionToDoImmediately[active];
                    num1 = actions[action](num1);
                }
            }
        }
    }
}
let calculate = () => {
    num1 = +num1;
    num2 = +num2;
    if (num2 != '') {
        num1 = actions[action](num1, num2, actionForPercent);
        num2 = '';
        action = '';
    }
}
let calculateEqualSign = () => {
    if ($(event.target).html() == '=') {
       calculate();
    }
}
let calculationImmediately = () => {
    for (let active of actionValues) {
        if ($(event.target).hasClass(active) && num2 != '' && !($(event.target).hasClass('percent'))) {
            calculate();
            action = active;
        }
    }
}
let comma = () => {
    if ($(event.target).hasClass('comma')) {
        if (num2 == '') {
            num1 += '';
            if (num1.indexOf('.') == -1) {
                return num1 = `${num1}.`
            }
        } else {
            if (num2.indexOf('.') == -1) {
                return num2 = `${num2}.`
            }
        }
    }
}
let clean = () => {
    if ($(event.target).hasClass('clean-values')) {
        visualize.clearScreen();
        num1 = '';
        num2 = '';
        action = '';
    }
}
let cleanEntry = () => {
    if ($(event.target).hasClass('clean-entry')) {
        if (num2 !== '') {
            return num2 = '';
        } else {
            visualize.screenDraw('0')
            action = '';
            return num1 = '';
        }
    }
}
let backspace = () => {
    if ($(event.target).hasClass('backspace')) {
        if (num1.length != 1 || num2.length != 1) {
            if (num2 != '') {
                num2 = num2.slice(0, (num2.length - 1))
            } else {
                num1 = num1 + '';
                num1 = num1.slice(0, (num1.length - 1))
            }
        }
    }
}
$('.memory-wrap').click(() => {
    num1 = memory.actionClasses[memory.memoryAction()](+num1);
    visualize.display();
});
$('.calculate-wrap').click(() => {
    setNum1();
    setNum2();
    setDoImmediately();
    calculationImmediately();
    setAction();
    clean();
    cleanEntry();
    backspace();
    calculateEqualSign();
    visualize.display(num1, num2);
    comma();
    visualize.actionScreen();
})