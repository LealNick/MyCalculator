function insert(num) {
    var number = document.getElementById('view').innerHTML;
    var symbol = num;
  
    if (num === '*') {
      symbol = '×';
    }
    else if (num === '/') {
        symbol = '÷';
    }
  
    document.getElementById('view').innerHTML = number + symbol;
}
function clean(){
    document.getElementById('view').innerHTML = "";
}
function back(){
    var result = document.getElementById('view').innerHTML;
    document.getElementById('view').innerHTML = result.substring(0, result.length -1);
}
function calculate() {
    var result = document.getElementById('view').innerHTML;
  
    if (result) {
        result = result.replace(/×/g, '*');
        result = result.replace(/÷/g, '/');
        document.getElementById('view').innerHTML = eval(result);
    } 
    else {
        document.getElementById('view').innerHTML = 'nothing...';
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === '*') {
        insert('×');
    }
    else if (event.key === '/') {
        insert('÷');
    }
    else if (/[\d+\-*/\.]/.test(event.key)) {
        insert(event.key);
    } 
    else if (event.key === 'Enter') {
        calculate();
    } 
    else if (event.key === 'Backspace') {
        back();
    } 
    else if (event.key === 'Delete') {
        clean();
    }
});