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