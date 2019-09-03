function btnClicked(btnLabel) {
    switch (btnLabel) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            calculator.numberClicked(btnLabel);
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
            calculator.operationClicked(btnLabel);
            break;
        case 'AC':
            calculator.resetCalculator();
            resultElement.innerHTML = 0;
            break;
    }
}

(() => {
    resultElement = document.getElementById('result');
    resultElement.innerHTML = 0;

    calculator = new Calculator(resultElement);

    let btns = document.getElementsByClassName('btn');
    for (btn of btns) {
        btn.addEventListener('click', btnClicked.bind(this, btn.innerHTML));
    }
})();