function datumAnzeigen() {
    document.getElementById('datum').innerHTML = moment().format('DD.MM.YYYY hh:mm');
}

function nameAnzeige() {
    document.getElementById('name').innerHTML = chance.name();
}

window.onload = function () {
    datumAnzeigen();
    nameAnzeige();
}