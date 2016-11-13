function guess() {
    var Zufallszahl;
    Zufallszahl = Math.round(Math.random() * 100);
    guess1.innerHTML = Zufallszahl;
}

function calculate(Zahl) {
    var ausgabe = document.getElementById('ausgabe');
    var guess1 = document.getElementById('guess1');
    if(guess1 === Zahl) {
        ausgabe.innerHTML = "Richtig!!!";
    }
    else if(guess1 < Zahl) {
        ausgabe.innerHTML = "Wert ist kleiner"    
    } 
    else if(guess1 > Zahl) {
        ausgabe.innerHTML = "Wert ist grösser";
    }
}    
