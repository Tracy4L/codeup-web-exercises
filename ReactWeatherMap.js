// Mapbox initialization and map display
mapboxgl.accessToken = MAPBOXAPI;
// Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // The container ID where the map will be displayed
    style: 'mapbox://styles/mapbox/streets-v11', // Mapbox base style
    zoom: 8, // Default zoom level
    center: [111.9119, 33.4457] // Default center of the map (longitude, latitude)
});

// Function to update the weather data on the UI
function updateWeatherUI(weatherData) {
    // Replace the following lines with your code to update the UI elements
    document.querySelector('.temp').textContent = weatherData.temperature + '°C';
    document.querySelector('.name').textContent = weatherData.city;
    document.querySelector('.time').textContent = weatherData.time;
    document.querySelector('.date').textContent = weatherData.date;
    document.querySelector('.condition').textContent = weatherData.condition;
    // Update other weather-related data as needed
}

// Function to fetch weather data from OpenWeather API
function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // Process the weather data returned by OpenWeather API
            const weatherData = {
                temperature: data.main.temp,
                city: data.name,
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
                condition: data.weather[0].description,
                // Extract other weather-related data as needed
            };

            // Update the UI with the weather data
            updateWeatherUI(weatherData);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to handle the form submission
function handleFormSubmission(e) {
    e.preventDefault();
    const cityInput = document.querySelector('.search').value;
    getWeatherData(cityInput);
    document.querySelector('.weather-app').style.opacity = '0';
}

// Add event listener to the form
document.querySelector('#locationInput').addEventListener('submit', handleFormSubmission);

// Set the default weather data for London when the page loads
getWeatherData('London');

// Your existing code for weather data fetching and UI updates




// Update the map center and zoom when fetching weather data for a city
function updateMap(cityData) {
    map.setCenter([cityData.lon, cityData.lat]);
    map.setZoom(10);
}

// Function to handle the form submission for location search
function handleFormSubmission(e) {
    e.preventDefault();
    const cityInput = document.querySelector('.search').value;
    getWeatherData(cityInput); // Your existing function to fetch weather data
    document.querySelector('.weather-app').style.opacity = '0';
}

// Add event listener to the form for location search
document.querySelector('#locationInput').addEventListener('submit', handleFormSubmission);

// Set the default weather data for London when the page loads
getWeatherData('London');
