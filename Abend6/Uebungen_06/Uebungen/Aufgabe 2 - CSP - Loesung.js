function ausgabe() {
    var wert = document.getElementById('eingabe').value;
     document.getElementById('ausgabe').textContent = wert;
}

window.onload = function() {
    document.getElementById('anzeigen').onclick = ausgabe;
}   
