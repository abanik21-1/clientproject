$(".search-button").click(function () {
  // Declare a variable that will store the user's input
  let movieSearch = $(".search-term").val();

  console.log(movieSearch);
  // Use string interpolation to include the search term
  let movieAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=" +
    movieSearch+
    "&page=1&include_adult=false";

  
  let movieposterURL = "https://image.tmdb.org/t/p/w500/";
  fetch(movieAPI)
    .then(function (response) {
      return response.json();
    })

    .then(function (tvData) {
      var moviePoster = tvData.results[0].poster_path;
    let movieTitle = tvData.results[0].original_title;
    let movieOverview = tvData.results[0].overview;
    let movieDate = tvData.results[0].release_date;
    let fullmovieposterURL = movieposterURL + moviePoster;
      $(".movie-poster").html(`<img src=${fullmovieposterURL}>`);
    $("#movieName").html(movieTitle);
    $("#overview").html(movieOverview);
    $("#release-Date").html(movieDate);
    });
});




$(".random-search").click(function () {
  // Declare a variable that will store the user's input
  let userInput = $("input").val();

  // Use string concatenation to include the search term
  let customGiphy = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(customGiphy)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let randomNum = Math.floor(Math.random() * data.data.length);
      let randomGif = data.data[randomNum].images.original.url;
      console.log(randomGif);
      $(".display").html(`<img src="${randomGif}"></img>`);
    });
    });


//do research on returning a random movie with the api. what would be the easiest way to do it
