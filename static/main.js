
var map = L.map('map').setView([28.2622, 84.0167], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([28.2622, 84.0167]).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

