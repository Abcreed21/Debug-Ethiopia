var position = [9.031217242474549, 38.76180369734359];

    function initialize() {
      var myOptions = {
        zoom: 17,
        streetViewControl: true,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('googlemaps'),
        myOptions);
      latLng = new google.maps.LatLng(position[0], position[1]);
      map.setCenter(latLng);
      marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);