$("search-button").click(function () {
  // Declare a variable that will store the user's input
  let movieTitle = $("#movieInput").val();

  // Use string interpolation to include the search term
  let movieAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=" +
    movieTitle +
    "&page=1&include_adult=false";

  fetch(movieAPI)
    .then(function (response) {
      return response.json();
    })

    .then(function (tvData) {
      var picURL = tvData[0].show.image.medium;
      $("body").append(`<img src=${picURL}>`);
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
