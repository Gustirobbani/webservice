fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": 'bed117b2bfmshe80bee0d5993d6cp159f21jsnc2f0c8e52954'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch(err => {
        console.log(err);
    });