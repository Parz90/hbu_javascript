/*
Implemented by: Parthipan Nagulanandan
Date: 02. January 2017
Version: v5.0
*/

/*
var location1 = https: //maps.googleapis.com/maps/api/geocode/json?
    address = 1600 + Amphitheatre + Parkway,
    +Mountain + View, +CA & key = AIzaSyA0ZkIjgtggbIkGyLGCzSpNuIbd8t1x7BE;
*/

function createMarker(latlng) {

    // If the user makes another search you must clear the marker variable
    if (marker != undefined && marker != '') {
        marker.setMap(null);
        marker = '';
    }

    marker = new google.maps.Marker({
        map: map,
        position: latlng
    });

}

function googleMap() {
    var mapCanvas = document.getElementById('map');
    var myPos = new google.maps.LatLng(47.349, 8.7065);
    var mapOptions = {
        center: myPos,
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myPos,
        map: map,
        title: 'HBU Uster, Berufsschulstrasse 1, 8610 Uster'
    })
    };
    
    
    
    
    var addressInput = "Dorfstrasse 10, 8630 Rüti, Switzerland";
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
            address: addressInput
        }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

                var myResult = results[0].geometry.location; // reference LatLng value

                createMarker(myResult); // call the function that adds the marker

                map.setCenter(myResult);

                map.setZoom(17);
            };
    })