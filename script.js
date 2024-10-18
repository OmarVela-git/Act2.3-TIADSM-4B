// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Definir íconos personalizados
var iconAguascalientes = L.icon({
    iconUrl: 'museo.png', // Reemplaza con la ruta a tu imagen
    iconSize: [38, 38], // Tamaño del ícono
    iconAnchor: [22, 94], // Punto de anclaje del ícono
    popupAnchor: [-3, -76] // Punto de anclaje del pop-up
});
var iconoPlaza = L.icon({
    iconUrl: 'plaza.png', // Reemplaza con la ruta a tu imagen
    iconSize: [38, 38], // Tamaño del ícono
    iconAnchor: [22, 94], // Punto de anclaje del ícono
    popupAnchor: [-3, -76] // Punto de anclaje del pop-up
});
var iconCapital = L.icon({
    iconUrl: 'capital.png', // Reemplaza con la ruta a tu imagen
    iconSize: [38, 38], // Tamaño del ícono
    iconAnchor: [22, 94], // Punto de anclaje del ícono
    popupAnchor: [-3, -76] // Punto de anclaje del pop-up
});

// Añadir un marcador en Aguascalientes capital con ícono personalizado
var marker = L.marker([21.88234, -102.28259], { icon: iconCapital }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria con ícono personalizado
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoPlaza }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte con ícono personalizado
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconAguascalientes }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Definir el polígono para el Centro Histórico
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Capas de control
var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};
var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};
L.control.layers(baseMaps, overlayMaps).addTo(map);