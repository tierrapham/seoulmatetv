// fetch = Function used for making HTTP requests to fetch resources. (JSON style data, imagges, files) Simplifies asynchronous data fetching in JavaScript and used for interacting wih APIs to retrieve and send data asynchronously over the web. fetch (url, {options}) //

//Video used for this code: youtube.com/watch?v=37vxWr0WgQk&time_continue=2&source_ve_path=MjE0Mjgz&embeds_referring_euri=https%3A%2F%2Fd2l.msu.edu%2F

async function fetchData() {
    try {
        const dramaID = 56464; //Declares the Drama ID from tvmaze.com
        const dramaOTD = document.getElementById('tvotd-content');
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

        //Use the API URL (https://api.tvmaze.com/shows/56464) to see the data for the URL and the JSON properties needed: 'name', 'genres', 'premiered', 'rating.average', 'image.medium', and 'summary'


        dramaImage.src = data.image.medium; //Specifies the image to display (https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src?utm_source=chatgpt.com)
        dramaImage.style.display = 'block'; //Displays the image

        dramaTitle.textContent = `Drama Title: ${data.name}`; //.textContent injects the text from the API response (data) (https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON?utm_source=chatgpt.com)
        
        dramaDescr.textContent = `Summary: ${data.summary.replace(/<p>|<\/p>/g, "")}`; // Learned about the .replace() method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        dramaYear.textContent = `Release Date: ${data.premiered}`;
        dramaGenre.textContent = `Genre(s): ${data.genres.join(', ')}`; //Learned about the .join() method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?utm_source=chatgpt.com
        dramaRating.textContent = `Rating: ${data.rating.average}/10`;

        dramaOTD.style.display = 'block'; //Makes the Drama information visible after the button is clicked since the CSS file hides the content initially
    }
    catch (error) {
        console.error(error)
    }
}