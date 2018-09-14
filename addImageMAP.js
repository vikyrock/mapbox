
//EXAMPLE TO ADD THE IMAGE ON THE MAPPBOX GL JS 
var sourceObj = new mapboxgl.ImageSource({
        url: '/img/circle-red.png',
        coordinates: [
            [-80.425, 46.437],
            [-71.516, 46.437],
            [-71.516, 37.936],
            [-80.425, 37.936]
        ]
});

map.addSource('someimage', sourceObj);

map.addLayer({
    "id": "someimage",
    "source": "someimage",
    "type": "raster"
});