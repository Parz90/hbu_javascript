
function validate() {
    
    var e1 = document.getElementById("name");
    var e2 = document.getElementById("vorname");
    if(e1.value === "") {
        alert("Das Feld 'Name' muss ausgefüllt werden!!!");
        return false;
    } else if(e2.value === "") {
        alert("Das Feld 'Vorname' muss ausgefüllt werden!!!");
        return false;
    }  
    return true;
}