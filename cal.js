document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('text');
    let num1 = '';
    let num2 = '';
    let operator = '';

    // Number buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!isNaN(button.textContent) || button.textContent === '.') {
                handleNumber(button.textContent);
            } else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
                handleOperator(button.textContent);
            } else if (button.textContent === '=') {
                calculate();
            }
        });
    });

    function handleNumber(num) {
        if (operator) {
            num2 += num;
            display.innerHTML = num2;
        } else {
            num1 += num;
            display.innerHTML = num1;
        }
    }

    function handleOperator(op) {
        if (num1 !== '') {
            operator = op;
            display.innerHTML = operator;
        }
    }

    function calculate() {
        let result = 0;
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);

        if (operator === '+') result = n1 + n2;
        if (operator === '-') result = n1 - n2;
        if (operator === '*') result = n1 * n2;
        if (operator === '/') result = n1 / n2;

        display.innerHTML = result;
        reset();
    }

    function reset() {
        num1 = '';
        num2 = '';
        operator = '';
    }
});
