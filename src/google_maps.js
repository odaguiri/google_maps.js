function GoogleMaps(el){
  // get attributes
  var lat = el.getAttribute('data-googlemaps-lat');
  var lng = el.getAttribute('data-googlemaps-lng');

  // center map
  var center = new google.maps.LatLng(lat, lng);

  // options
  var options = {
    zoom: getAttribute('data-googlemaps-zoom', 3),
    scrollwheel: getAttribute('data-googlemaps-scrollwheel', false),
    MapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center
  }

  // set map
  map = new google.maps.Map(el, options);

  // set marker
  marker = new google.maps.Marker({
    map: map,
    draggable: getAttribute('data-googlemaps-draggable', false),
    animation: google.maps.Animation.DROP,
    position: center
  });


  function getAttribute(attr, default_attr){
    attr = el.getAttribute(attr);
    return (attr !== null ? attr : default_attr);
  }
}
