// Function to create a custom icon
function createCustomIcon(iconUrl) {
    return L.icon({
        iconUrl: iconUrl,
        iconSize: [100, 70], 
        iconAnchor: [16, 32]
    });
}

// Initialize the map
var map = L.map('map').setView([38.6270, -90.1994], 13);

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create custom icons using the function
var customIcon_m1 = createCustomIcon('https://afar.brightspotcdn.com/dims4/default/5d8cd0c/2147483647/strip/false/crop/1900x1267+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F56%2F58%2F95a33bbf1bb47d535be0c0bb270f%2Foriginal-c07a2d169f29f58b9af7666d94661776.jpg');
var customIcon_m2 = createCustomIcon('https://www.peachythemagazine.com/wp-content/uploads/2021/09/forest-park-st-louis01.jpg');
var customIcon_m3 = createCustomIcon('https://www.slu.edu/globalcitizenship/imgs/center-global-citizenship.jpg');
var customIcon_m4 = createCustomIcon('https://www.missouribotanicalgarden.org/portals/0/2022redesignassets/MBG/garden-hours-img.jpg?ver=yGx16y502fdmmQBGcQShZw%3D%3D');
var customIcon_m5 = createCustomIcon('https://images.squarespace-cdn.com/content/v1/5ec906611a267019b81168db/53b02d0a-a78f-4d1c-be5e-a1b7c79d514b/278197950_5264774750212588_203632726040177783_n.jpg');

// Adding individual markers
var marker1 = L.marker([38.6247, -90.1848], { icon: customIcon_m1 }).addTo(map);
marker1.bindPopup("<b>The Gateway Arch!</b><br>A 630-foot-tall monument in St. Louis.");

var marker2 = L.marker([38.6383, -90.2876], { icon: customIcon_m2 }).addTo(map);
marker2.bindPopup("<b>Forest Park</b><br>One of the most beautiful urban parks in the world!!");

var marker3 = L.marker([38.6360, -90.2367], { icon: customIcon_m3 }).addTo(map);
marker3.bindPopup("<b>Des Peres Hall, SLU</b><br>My Workspace: Remote Sensing Lab");

var marker4 = L.marker([38.6128, -90.2590], { icon: customIcon_m4 }).addTo(map);
marker4.bindPopup("<b>Missouri Botanical Garden</b><br>A beautiful botanical garden!");

var marker5 = L.marker([38.6450, -90.2612], { icon: customIcon_m5 }).addTo(map);
marker5.bindPopup("<b>Clementine's Naughty & Nice Creamery</b><br>Best Ice-Cream in St. Louis!");
