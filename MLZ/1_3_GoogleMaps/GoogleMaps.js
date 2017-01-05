/*
Implemented by: Parthipan Nagulanandan
Date: 02. January 2017
Version: v5.0
*/
var map = null;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function geoSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, lng);
    var mapCanvas = document.getElementById('map');
    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
    };
    map = new google.maps.Map(mapCanvas, myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "location : My Location"
    });
    locations(places);
}

function geoError() {
    alert("Geocoder failed. Possible Reasons: - Browser doesn't support Geocode, - Location not found, - You have not allowed the browser to locate the current location, - other reasons");
}

var places = [
    {
        "address": "Dorfstrasse 10, 8630 Rüti"
            },
    {
        "address": "Gerenweg 7, 8498 Gibswil"
            },
    {
        "address": "Hauptplatz 5, 8645 Rapperswil"
            }
];

function locations(placeArray) {
    var latitude = null;
    var longitude = null;
    for (i = 0; i < placeArray.length; i++) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': placeArray[i].address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                var placeslatlng = new google.maps.LatLng(latitude, longitude);
                    var markPos = new google.maps.Marker({
                    position: placeslatlng,
                    map: map,
                    title: "Adresse"
                });      
            }
        });
    }
}