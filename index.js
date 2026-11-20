// fetch = Function used for making HTTP requests to fetch resources. (JSON style data, imagges, files) Simplifies asynchronous data fetching in JavaScript and used for interacting wih APIs to retrieve and send data asynchronously over the web. fetch (url, {options}) //
fetchData();

async function fetchData() {
    try {
        const dramaID = 56464; //Declares the Drama ID from tvmaze.com
        const dramaDIV = document.getElementById('tvotd-content');
        const response = await fetch(`https://api.tvmaze.com/shows/${dramaID}`);

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }

        const data = await response.json(); //Retrieve the response to the request as JSON
        const dramaImage = document.getElementById('drama-image'); //Finds an HTML element and stores it in a JavaScript variable (for all of the following variables as well)
        const dramaTitle = document.getElementById('drama-title');
        const dramaDescr = document.getElementById('drama-descr');
        const dramaYear = document.getElementById('drama-year');
        const dramaGenre = document.getElementById('drama-genre');
        const dramaRating = document.getElementById('drama-rating');

        //Use the API URL (https://api.tvmaze.com/shows/56464) to see the data for the URL and the JSON properties needed: 'name', 'genres', 'premiered', 'rating', 'image', and 'summary'


        dramaImage.src = data.image.medium; //Specifies the image to display (https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src?utm_source=chatgpt.com)
        dramaTitle.textContent = `Drama Title: ${data.name}`; //.textContent injects the text from the API response (data) (https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON?utm_source=chatgpt.com)
        
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
