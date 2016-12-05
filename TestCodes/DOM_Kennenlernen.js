function countH1() {
    var heading1 = document.getElementsByTagName("H1");
    document.getElementById("out1").innerHTML = heading1.length; 
}
      
function countH2() {
    var heading2 = document.getElementsByTagName("H2");
    document.getElementById("out2").innerHTML = heading2.length;  
}
     
function countP() {
    var para = document.getElementsByTagName("P");
    document.getElementById("out3").innerHTML = para.length;     
}
     
function countSpan() {
    var span1 = document.getElementsByTagName("SPAN");
    document.getElementById("out4").innerHTML = span1.length;      
}
     