var result = document.getElementById("result");

function display(number){
    result.value += number;
}

function calculate(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}

function clrs(){
    result.value = "";
}

function dle(){
    result.value = result.value.slice(0,-1)
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/') {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        dle();
    } else if (key === 'c' || key === 'C') {
        clrs();
    }
});
