function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    
    if (display.includes('%')) {
        display = display.replace('%', '/100');
    }
    
    try {
        let result = eval(display);  
        alert(`Hasil: ${result}`);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Input tidak valid');
    }
}
