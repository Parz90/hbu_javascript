/*
Implemented by: Parthipan Nagulanandan
Date: 02. January 2017
Version: v5.0
*/

function countH1() {
    var heading1 = document.getElementsByTagName("H1");
    document.getElementById("out1").innerHTML = heading1.length; 
}
      
function countH2() {
    var heading2 = document.getElementsByTagName("H2");
    document.getElementById("out2").innerHTML = heading2.length;  
}