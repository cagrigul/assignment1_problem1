// Function to create a custom icon
function createCustomIcon(iconUrl) {
    return L.icon({
        iconUrl: iconUrl,
        iconSize: [80, 80], 
    });
}

// Initialize the map
var map = L.map('map').setView([38.622891, -90.239143], 13);

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create custom icons using the function
var customIcon_m1 = createCustomIcon('https://s.hdnux.com/photos/01/26/32/17/22651856/4/rawImage.jpg');
var customIcon_m2 = createCustomIcon('https://www.slam.org/wp-content/uploads/2018/12/Exterior.jpg');
var customIcon_m3 = createCustomIcon('https://www.slu.edu/news/img/campus-beauty-shot-two-clock-min.jpg');
var customIcon_m4 = createCustomIcon('https://www.missouribotanicalgarden.org/portals/0/2022redesignassets/MBG/garden-hours-img.jpg?ver=yGx16y502fdmmQBGcQShZw%3D%3D');
var customIcon_m5 = createCustomIcon('https://planning-org-uploaded-media.s3.amazonaws.com/legacy_resources/greatplaces/neighborhoods/2014/img/centralwestend03.jpg');

// Adding individual markers
var marker1 = L.marker([38.624691, -90.184776], { icon: customIcon_m1 }).addTo(map);
marker1.bindPopup("<b>The Gateway Arch</b><br>A great monument and festival area.");

var marker2 = L.marker([38.639306, -90.294491], { icon: customIcon_m2 }).addTo(map);
marker2.bindPopup("<b>Saint Louis Art Museum</b><br>a captivating hub of artistic expression and cultural exploration, offers students a unique window into diverse art forms and historical eras.");

var marker3 = L.marker([38.6360, -90.2367], { icon: customIcon_m3 }).addTo(map);
marker3.bindPopup("<b>Saint Louis University</b><br>Saint Louis University stands as a beacon of academic excellence and innovation, inviting students to engage in a transformative educational journey in the heart of a vibrant city.");

var marker4 = L.marker([38.6128, -90.2590], { icon: customIcon_m4 }).addTo(map);
marker4.bindPopup("<b>Missouri Botanical Garden</b><br>a serene oasis of diverse plant life and natural beauty, offering a peaceful and educational retreat for students and nature enthusiasts alike.");

var marker5 = L.marker([38.6452,-90.2569], { icon: customIcon_m5 }).addTo(map);
marker5.bindPopup("<b>Central West End</b><br>a bustling and historic neighborhood in St. Louis, renowned for its charming blend of old-world elegance and modern vibrancy, making it a favorite spot for students and locals to explore unique shops, eclectic dining, and cultural landmarks.");
