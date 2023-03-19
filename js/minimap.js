var map = L.map('map', {
    center: [37.386188818756104, -5.992615333077015],
    zoom: 3
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap'
        + '</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">'
}).addTo(map)


map.on('click', function(e) {
    document.getElementById("entradaY").value = e.latlng.lat;
    document.getElementById("entradaX").value = e.latlng.lng;
});

