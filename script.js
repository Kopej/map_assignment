var mymap = L.map('map').setView([-1.0723, 35.86444], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-1.0723, 35.86444]).addTo(mymap);
marker.bindPopup("<b>KOPEJO RESIDES HERE!!!</b><br>HE IS A PASSIONATE GIS ANALYST.").openPopup();