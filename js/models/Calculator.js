class Calculator {
    constructor(resultElement) {
        // will hold the first number and the result of any operation
        this.firstNumber = '';

        // will hold the second entered number
        this.secondNumber = '';

        // the selected operation
        this.operation = '';

        // the element where the result will be shown
        this.resultElement = resultElement;
    }

    resetCalculator() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.operation = '';
    }

    numberClicked(number) {
        // update the first number if there's no operation, otherwise update the second number
        if (this.operation === '') {
            if (number === '.' && this.firstNumber.indexOf('.') !== -1) {
                return;
            }

            if (number === '.' && this.firstNumber.length === 0) {
                this.firstNumber += '0.';
            } else {
                this.firstNumber += number;
            }

            this.resultElement.innerHTML = this.firstNumber;
        } else {
            if (number === '.' && this.secondNumber.indexOf('.') !== -1) {
                return;
            }

            if (number === '.' && this.secondNumber.length === 0) {
                this.secondNumber += '0.';
            } else {
                this.secondNumber += number;
            }

            this.resultElement.innerHTML = this.secondNumber;
        }
    }

    operationClicked(operation) {
        // if no number is entered do nothing
        if (this.firstNumber === '') {
            return;
        }

        // do the calculation if the second number is entered
        if (this.secondNumber !== '') {
            switch (this.operation) {
                case '+':
                    this.firstNumber = +this.firstNumber + +this.secondNumber;
                    break;
                case '-':
                    this.firstNumber = +this.firstNumber - +this.secondNumber;
                    break;
                case 'x':
                    this.firstNumber = +this.firstNumber * +this.secondNumber;
                    break;
                case '/':
                    if (this.secondNumber !== '0') {
                        this.firstNumber = +this.firstNumber / +this.secondNumber;
                    } else {
                        this.resetCalculator();
                        this.resultElement.innerHTML = 'Cannot divide by 0';
                        return;
                    }
                    break;
            }
            this.secondNumber = '';
            this.resultElement.innerHTML = this.firstNumber;
        }

        // update the operation
        if (operation !== '=') {
            this.operation = operation;
        } else {
            this.operation = '';
        }
    }
}