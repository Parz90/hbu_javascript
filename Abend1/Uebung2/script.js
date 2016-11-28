function sum() {
    var summe = 0;
    for (var i = 0; i <= 10000; i++) {
        if (i % 2 == 0) {
            summe = summe + i;
        }
    }
    alert(summe);
}
