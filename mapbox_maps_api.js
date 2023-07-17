$(() => {

    // Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();


    // Functions
    // Function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_KEY;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }

    // Function that creates a marker at Codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4260])
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




    // Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);

    // Runs when the program loads
    // map.setZoom(1);
    marker.setPopup(popup);





});