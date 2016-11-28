element.addEventListener.("keyup", calculate(), false);

function calculate(string input1) {
    var output1 = "";
    switch (parseInt(input1)) {
        case 1:
            output1 = "Wie alt sind Sie?";
            return output1;
        case 2:
            output1 = "Wo wohnen Sie?";
            return output1;
        case 3:
            output1 = "In welchem Semester befinden Sie sich?";
            return output1;
        case 4:
            output1 = "Wo sind sie aufgewachsen?";
            return output1;
        default:
            output1 = "Ungueltiger Wert!!!";
            return output1;
    }
}