```leaflet
image: assets/maps/my-map.png
image_bounds:
  - [0, 0]      # Top-left corner (y, x)
  - [1000, 1000]  # Bottom-right corner (y, x)

zoom: 1
minZoom: 1
maxZoom: 4

markers:
  - lat: 200
    lon: 300
    popup: "Here's a cool spot!"
  - lat: 800
    lon: 750
    popup: "Another interesting location"
```
```leaflet
id: marrowfen
image: marrowfen-map.png
image_bounds:
  - [0, 0]       # Top-left
  - [768, 775]   # Bottom-right (width, height)

zoom: 1
minZoom: 1
maxZoom: 4

markers:
  - lat: 300
    lon: 400
    popup: "Central Bridge"
  - lat: 550
    lon: 720
    popup: "Old trail to the east"
```

