

function load() {
    var zufallszahl = Math.round(Math.random() * 100);
    var count = 0;
}
function calculate() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var inputValue = parseInt(input.value);
    if (inputValue < zufallszahl) {
        output.innerHTML = "Wert ist kleiner";
    } else if (inputValue > zufallszahl) {
        output.innerHTML = "Wert ist grösser";
    } else {
        output.innerHTML = "Richtig!!!";
    }
}