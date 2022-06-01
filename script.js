$("button").click(function() {

    // Declare a variable that will store the user's input
    let userInput = $("input").val();

    // Use string interpolation to include the search term
    let apiURL = `https://api.tvmaze.com/search/shows?q=${userInput}`;

    // Use console.log to test your variables' contents
    
    

    fetch(apiURL)

        .then(function(response) {
            return response.json();
        })

        .then(function(tvData) {
            var picURL = tvData[0].show.image.medium;
            $('body').append(`<img src=${picURL}>`);
        });

});