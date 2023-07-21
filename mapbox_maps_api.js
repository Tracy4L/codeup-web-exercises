$(() => {

    // Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();


    // Functions
    // Function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYmlndHJhY3kiLCJhIjoiY2xrMm9rdjJiMGV5MDNncnozeTk3eHZodCJ9.ylWFsBBKskVDkuOCjHmKeA';


        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v11',
            zoom: 10,
            center: [-98.4916, 29.4252],
            
        }



        return new mapboxgl.Map(mapOptions);
    }
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );


    // Function that creates a Movable marker
    function createMarker() {
        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-98.489615, 29.426827])
            .addTo(map);
    }

    // Function that creates a popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.489615, 29.426827])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>We can put anything we want</p>
                </div>
            `);
    }
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }

    // Function that brings me to paris
    function goToParis() {
        geocode('Paris, France', MAPBOX_KEY).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    // Function that uses reverse geocode
    // Takes the coordinates from the center of the map
    // And print on the screen the address
    function findAndPrintAddress() {
        const coords = map.getCenter();
        reverseGeocode(coords, MAPBOX_KEY).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }

    // Function that uses geocode to take the string 'The Alamo, San Antonio'
    // and get coordinates to set a marker and popup at that location
    function markAlamo() {
        geocode('The Alamo, San Antonio', MAPBOX_KEY).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo!</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup);
            alamoPopup.addTo(map);
        })
    }



// Function to add a new marker to the map.

    // var marker = null; // Variable to store the marker reference.

// Function to add a new draggable marker to the map.
    function addDraggableMarker(longitude, latitude) {
        if (marker) {
            marker.remove(); // If there's an existing marker, remove it first.
        }

        marker = new mapboxgl.Marker({
            draggable: true // Set the marker as draggable.
        })
            .setLngLat([longitude, latitude])
            .addTo(map);

        // Listen to the `dragend` event to update the marker's position after dragging.
        marker.on('dragend', function() {
            var lngLat = marker.getLngLat();
            console.log('New marker position:', lngLat);
            // You can use the `lngLat` values to update your database or perform any actions with the new marker position.
        });
    }


    // Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);

    // Runs when the program loads
    // map.setZoom(1);
    marker.setPopup(popup);





});