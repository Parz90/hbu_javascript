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
