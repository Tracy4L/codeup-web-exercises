mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 10,
    center: [-98.4916, 29.4252],
});

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false // Disable default marker
});

map.addControl(geocoder);

// Handle when a user selects a location from the search bar
geocoder.on('result', (event) => {
    const { lng, lat } = event.result.geometry.coordinates;

    // Call the function to fetch weather data based on the selected location
    getWeatherData(lat, lng);
});

async function getWeatherData(latitude, longitude) {
    const apiKey = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Process the weather data and display it on the web page
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(weatherData) {
    // Extract relevant weather information from the weatherData object
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    // Display the weather information on the web page
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `Temperature: ${temperature} K<br>Description: ${description}`;
}
