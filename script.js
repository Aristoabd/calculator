const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%', '.'];
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        return; 
    }
    
    display.value += value;
}

function calculate() {
    try {
        let expression = display.value;
        if (expression === '') return;
        
        expression = expression.replace(/%/g, '/100');
        
        let result = eval(expression);
        
        if (!isFinite(result) || isNaN(result)) {
            throw new Error("Invalid");
        }

        if (!Number.isInteger(result)) {
            result = result.toFixed(4).replace(/\.?0+$/, "");
        }

        display.value = result;
        
    } catch (error) {
        const originalValue = display.value;
        display.value = 'Error';
        display.style.color = '#ff4081';
        
        setTimeout(() => {
            display.value = '';
            display.style.color = '#fff'; 
        }, 1000);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', '(', ')'];
    
    if (validKeys.includes(key)) appendToDisplay(key);
    if (key === 'Enter') calculate();
    if (key === 'Backspace') deleteLast();
    if (key === 'Escape') clearDisplay();
});
