function helloWorld() {
    alert('HelloWorld');
}

function sum() {
    var summe = 0;
    for (var i = 0; i <= 10000; i++) {
        if (i % 2 == 0) {
            summe = summe + i;
        }
    }
    alert(summe);

}

function dateMonth() {
    var month = "";
    var date = new Date();
    switch(date.getMonth()) {
        case 0:
            month = "Januar";
            break;
        case 1:
            month = "Febraur";
            break;
        case 2:
            month = "Maerz";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "Mai";
            break;
        case 5:
            month = "Juni";
            break;
        case 6:
            month = "Juli";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "Oktober";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "Dezember";
            break;
        default:
            month = "Kein Datum";
    }
    alert(month);
}

function salutation() {
    var salut = "";
    var date = new Date();
    var time = date.getHours();
    if((time > 0) && (time <= 6))   {
       salut = "Gute Nacht";
    }
    else if((time > 6) && (time <= 10))   {
       salut = "Guten Morgen!";
    }
    else if((time > 10) && (time <= 17))   {
       salut = "Guten Tag!";
    }
    else if((time > 17) && (time <= 24))   {
       salut = "Guten Abend!";
    }
    else    {
       salut ="Hallo";
    }
alert(salut);
}

function dice() {
    var diceOne = 1;
    var diceTwo = 2;
    var diceThree = 3;
    var diceFour = 4;
    var diceFive = 5;
    var diceSix = 6;
    var diceCount = [0, 0, 0, 0, 0, 0];
    var nr = [1, 2, 3 ,4, 5 ,6];
    
    for(var i = 0; i < 1000; i++) {
        var numberDice = Math.ceil(Math.random() * 6);
        for(var j = 0; j < 6; j++) {
            if(numberDice === nr[j]) {
            diceCount[j] += 1;
            }
        }
    }
    alert(diceCount);
}

/*function guess() {
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
*/

function validate(Eingabe1, Eingabe2) {
    var e1 = Eingabe1;
    var e2 = Eingabe2;
    if(e1 === null) || (e2 === null) {
        alert("Die Felder müssen ausgefüllt werden!!!")
    }
    
    
}