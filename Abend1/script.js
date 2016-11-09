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
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    for(var i = 0; i <= 1000; i++) {
        var numberDice = Math.ceil(Math.random() * 6);
        if(numberDice && diceOne) {
            one += 1;
        }
        else if(numberDice && diceTwo) {
            two += 1;
        }
        else if(numberDice && diceThree) {
            three += 1;
        }
        else if(numberDice && diceFour) {
            four += 1;
        }
        else if(numberDice && diceFive) {
            five += 1;
        }
        else if(numberDice && diceSix) {
            six += 1;
        }
        else{
            ;
        }
    }
    alert(one);
    
}