# Google Maps | [Initialize](https://github.com/odaguiri/initialize.js)
Simple google maps component using [initialize.js](https://github.com/odaguiri/initialize.js)

Import javascript and load it
```HTML
  <script src="initialize.min.js"></script>
  <script src="google_maps.js"></script>
  <script>window.load = InitializeJS.allElements();</script>
```

Now the magic :)
```HTML
  <div data-initialize="GoogleMaps" data-googlemaps-lat="-14.4930719" data-googlemaps-lng="-52.2017732" style="height: 300px;">Loading...</div>
```

Custom Attributes:

| Attribute                   | default |
| --------------------------- |:-------:|
| data-googlemaps-zoom        | 3       |
| data-googlemaps-scrollwheel | false   |
| data-googlemaps-draggable   | false   |


ps: This repository have an example