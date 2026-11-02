/* Contact page: interactive map using Leaflet and OpenStreetMap. */
(function () {
  'use strict';
  var el = document.getElementById('map');
  if (!el || !window.L) return;
  /* Coordinates are for central Vereeniging. Right-click your exact spot in Google Maps to copy better ones. */
  var pos = [-26.6731, 27.9319];
  var map = L.map(el, { scrollWheelZoom: false }).setView(pos, 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var popup = document.createElement('div');
  var strong = document.createElement('strong');
  strong.textContent = 'Riverside Bake & Brew';
  popup.appendChild(strong);
  popup.appendChild(document.createElement('br'));
  popup.appendChild(document.createTextNode('4 River Road, Vereeniging'));
  L.marker(pos).addTo(map).bindPopup(popup).openPopup();
})();
