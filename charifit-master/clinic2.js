
/*
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 31.2155, lng: 29.9420 },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: { lat: 31.2155, lng: 29.9420 },
        map: map,
        title: 'Donations'
    });

}*/


   // Initialize Google Maps
   function initMap() {
    // Specify your map options
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Initialize marker variable
    var marker;

    // Add event listener for map click
    google.maps.event.addListener(map, 'click', function(event) {
        // Remove existing marker if any
        if (marker) {
            marker.setMap(null);
        }

        // Get latitude and longitude of clicked location
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();

        // Create a new marker at the clicked location
        marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map
        });

        // Center the map on the clicked location
        map.setCenter({ lat: latitude, lng: longitude });
    });
}

  window.onload = function() {
    initMap();
  };

