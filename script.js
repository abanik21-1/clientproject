//search button 
$(".search-button").click(function () {
  let movieSearch = $(".search-term").val();

  console.log(movieSearch);
  let movieAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=" +
    movieSearch+ "&page=1&include_adult=false";
  
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

//search random button 
$(".random-search").click(function () {
  let movieRandom = $(".search-term").val();

  let  movieAPI = "https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=" +
    movieRandom+
    "&page=1&include_adult=false"
  fetch(movieAPI)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let randomNum = Math.floor(Math.random() * data.results);
      let randomResults = data.results[randomNum].original_title.poster_path.release_date.overview;
      console.log();
      $(".display").html(`<img src="${randomResults}"></img>`);
    });
    });


//some problems 
//do research on returning a random movie with the api. what would be the easiest way to do it
// fix movie poster border 