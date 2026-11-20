// fetch = Function used for making HTTP requests to fetch resources. (JSON style data, imagges, files) Simplifies asynchronous data fetching in JavaScript and used for interacting wih APIs to retrieve and send data asynchronously over the web. fetch (url, {options}) //
fetchData();

async function fetchData() {
    try {
        const dramaID = 56464;
        const dramaDIV = document.getElementById('tvotd-content');
        const response = await fetch(`https://tvmaze.com/shows/${dramaID}`);

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }

        const data = await response.json()
    }

fetchData()

async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    }
    catch (error) {
        console.error(error);
    }
}