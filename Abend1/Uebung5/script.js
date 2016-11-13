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
