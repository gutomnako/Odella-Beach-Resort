// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([12.640464945281975, 124.09660379715639], 13);

// Add the OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([12.640464945281975, 124.09660379715639]).addTo(map);
marker.bindPopup('Odella Beach Resort, Santa Magdalena, Sorsogon').openPopup();
