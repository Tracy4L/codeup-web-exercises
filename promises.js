// function delayedTask(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Task completed after ' + delay + ' milliseconds.');
//         }, delay);
//     });
// }
//
// // Usage
// delayedTask(2000)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// function catchAPI(){
//
//     return fetch(https://mugenmonkey.com/api/v0/ds3_builds)
//
//
//
// }

function fetchDataFromAPI() {
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        });
}

// Usage
// fetchDataFromAPI()
//     .then(data => {
//         console.log('Fetched data:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

function displayPokemonData(pokemonData) {
    const pokemoninfo = `
    <p>Name: ${pokemonData.name}</p>
    <p>Height: ${pokemonData.height}</p>
    <p>Weight: ${pokemonData.weight}</p>
<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">

`;
    document.getElementById('pokemonData').innerHTML = pokemonInfo;
}

function searchPokemon(){

    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetchDataFromAPI(pokemonName)
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemonData').innerHTML = 'Pokemon not found.';
        });
}
