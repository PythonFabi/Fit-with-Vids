var map, infoWindow, service, directionsService, directionsRenderer;

// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 8
  });
  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

function findNearestGym() {
  if (navigator.geolocation) {
    // Get the current position
    navigator.geolocation.getCurrentPosition(function(position) {
      var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // Show the current position on the map
      var marker = new google.maps.Marker({
        map: map,
        position: location
      });
      infoWindow.setContent('Your Location');
      infoWindow.open(map, marker);
      // Search for the nearest gym
      service.nearbySearch({
        location: location,
        radius: 5000,
        type: ['gym']
      }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          var nearestGym = results[0];
          var gymLocation = nearestGym.geometry.location;
          // Show the location of the nearest gym on the map
          var gymMarker = new google.maps.Marker({
            map: map,
            position: gymLocation
          });
          infoWindow.setContent(nearestGym.name);
          infoWindow.open(map, gymMarker);
          // Calculate the distance and time from the current position to the nearest gym
          var request = {
            origin: location,
            destination: gymLocation,
            travelMode: 'DRIVING'
          };
          directionsService.route(request, function(result, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);
              var distance = result.routes[0].legs[0].distance.text;
              var duration = result.routes[0].legs[0].duration.text;
              // Display distance and time information
              alert('The nearest gym is located at ' + nearestGym.vicinity + '.\n\nThe distance from your location is ' + distance + ' and the estimated driving time is ' + duration + '.');
            }
          });
        }
      });
    }, function() {
      alert('Error: The Geolocation service failed.');
    });
  } else {
    alert('Error: Your browser doesn\'t support geolocation.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
      alignment: 'center'
  });
});
